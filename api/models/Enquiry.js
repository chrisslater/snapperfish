var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
  nocreate: true,
  noedit: true,
});

Enquiry.add({
  name: { type: Types.Text, required: true },
  email: { type: Types.Email, required: true },
  message: { type: Types.Markdown, required: true },
});

Enquiry.schema.path('email').validate((email) => {
  const emailRegex = /.+@.+/;
  return emailRegex.test(email); // Assuming email has a text attribute
}, 'Invalid email type');

Enquiry.schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  next();
});

Enquiry.schema.post('save', function() {
  if (this.wasNew) {
    this.sendNotificationEmail();
  }
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {

  if ('function' !== typeof callback) {
    callback = function() {};
  }

  var enquiry = this;

  keystone.list('Y').model.find().where('isAdmin', true).exec(function(err, admins) {

    if (err) return callback(err);

    new keystone.Email({

        templateName: 'enquiry-notification'
      }).send({
        to: admins,
        from: {
          name: 'keystone',
          email: 'hello@snapper.fish'
        },
        subject: 'New Enquiry for keystone',
        enquiry: enquiry
      }, callback);
    });

};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
