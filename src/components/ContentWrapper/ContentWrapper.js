import React, { PropTypes } from 'react';
import themeInjector from 'containers/themeInjector';

/**
 * @param {Object} [theme={}] Can pass optional theme overrides
 */
function ContentWrapper(props) {
  const theme = props.theme;
  return (
    <div className={theme.container}>
      <div className={theme.content}>
        {props.children}
      </div>
    </div>
  );
}

ContentWrapper.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default themeInjector(ContentWrapper);
