
import keystone from 'keystone';
const Enquiry = keystone.list('Enquiry');

/**
 * Create an Enquiry
 */
exports.create = (req, res) => {
  const enquiry = new Enquiry.model(req.body);
  return enquiry.save(err => {
    if (err) return res.apiError('error', err, null, 400);
    return res.apiResponse();
  });
};
