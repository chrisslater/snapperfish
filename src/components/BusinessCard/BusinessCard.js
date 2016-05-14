import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Card from 'material-ui/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {
  Image,
} from 'components';

@themeable
class BusinessCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    phone: PropTypes.string,
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const theme = this.theme;
    const {
      name,
      role,
      email,
      address,
      phone,
      muiTheme,
    } = this.props;

    return (
      <Card
        itemScope
        itemType='http://schema.org/Person'
      >
        <div className={theme.main}>
          <div className={theme.picture}>
            <Image
              itemProp='image'
              src={'http://placekitten.com/200/300'}
              alt={''}
            />
          </div>
          <div className={theme.info}>
            <div className={theme.head}>

              <h1 className={theme.name}>
                <span className={theme.hello}>Hello</span> I'm <strong itemprop='name'>{name}</strong>
              </h1>
              <div className={theme.role}>{role}</div>
            </div>
            <ul className={theme.list}>
              <li className={theme.list_item}>
                <strong className={theme.list_item_label}>
                  Email
                </strong>
                <span
                  itemProp='email'
                  className={theme.list_item_value}
                >
                  {email}
                </span>
              </li>
              <li className={theme.list_item}>
                <strong className={theme.list_item_label}>Address</strong>
                <address itemProp='address' className={theme.list_item_value}>{address}</address>
              </li>
              <li className={theme.list_item}>
                <strong className={theme.list_item_label}>Phone</strong>
                <div className={theme.list_item_value}>{phone}</div>
              </li>

            </ul>
          </div>
        </div>
        <div
          className={theme.footer}
          style={{
            backgroundColor: `${muiTheme.palette.primary1Color}`
          }}
        >
          Footer
        </div>
      </Card>
    );
  }
}

export default muiThemeable()(BusinessCard);
export const _BusinessCard = BusinessCard;
