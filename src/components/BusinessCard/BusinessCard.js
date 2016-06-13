import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import themeInjector from 'containers/themeInjector';
import {
  Image,
} from 'components';

@themeInjector
class BusinessCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    phone: PropTypes.string,
    available: PropTypes.string,
    githubUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
    profileImage: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  };

  static defaultProps = {
    containerWidth: 0,
  }

  render() {
    const {
      theme,
      name,
      position,
      email,
      address,
      phone,
      available,
      githubUrl,
      twitterUrl,
      linkedinUrl,
      className,
      profileImage: {
        src,
        alt,
      },
    } = this.props;
    let isSmall = false;

    if (className === 'small') {
      isSmall = true;
    }

    const mainClasses = classNames({
      [theme.main]: true,
      [theme.mainIsSmall]: isSmall,
    });

    let phoneMarkup;
    if (phone) {
      phoneMarkup = (
        <li className={theme.list_item}>
          <span className={theme.list_item_label}>
            Phone
          </span> <span className={theme.list_item_value}>{phone}</span>
        </li>
      );
    }

    return (
      <Paper
        itemScope
        itemType="http://schema.org/Person"
      >
        <div className={mainClasses}>
          <div className={theme.picture}>
            <Image
              itemProp="image"
              src={src}
              alt={alt}
            />
          </div>
          <div className={theme.info}>
            <div className={theme.head}>
              <h1 className={theme.title}>
                <span className={theme.hello}>
                 Hello
                </span> I'm <strong itemProp="name" className={theme.name}>{name}</strong>
              </h1>
              <div className={theme.position}>{position}</div>
            </div>
            <ul className={theme.list}>
              <li className={theme.list_item}>
                <span className={theme.list_item_label}>
                  Email
                </span> <span
                  itemProp="email"
                  className={theme.list_item_value}
                >
                  {email}
                </span>
              </li>
              <li className={theme.list_item}>
                <span className={theme.list_item_label}>
                  Address
                </span> <address
                  itemProp="address"
                  className={theme.list_item_value}
                  dangerouslySetInnerHTML={{ __html: address }}
                />
              </li>
              {phoneMarkup}
              <li className={theme.list_item}>
                <span
                  className={
                    classNames([
                      theme.list_item_label,
                      theme.availability,
                    ])
                  }
                >
                  Available
                </span> <span className={theme.list_item_value}>{available}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={theme.footer}>
          <IconButton
            className={theme.iconButtonHover}
            iconClassName={`fa fa-github ${theme.iconButton}`}
          >
            <a
              href={githubUrl}
              target="_blank"
              className={theme.hiddenIconText}
            >Go to Github</a>
          </IconButton>
          <IconButton
            className={theme.iconButtonHover}
            iconClassName={`fa fa-twitter ${theme.iconButton}`}
          >
            <a
              href={twitterUrl}
              className={theme.hiddenIconText}
              target="_blank"
            >Go to Twitter</a>
          </IconButton>
          <IconButton
            className={theme.iconButtonHover}
            iconClassName={`fa fa-linkedin ${theme.iconButton}`}
          >
            <a
              href={linkedinUrl}
              className={theme.hiddenIconText}
              target="_blank"
            >Go to Linked in</a>
          </IconButton>
        </div>
      </Paper>
    );
  }
}

export default BusinessCard;
