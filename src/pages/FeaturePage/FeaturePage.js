import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import {
  featureContainer,
  assetsContainer,
} from 'containers';

import { Image } from 'components';
import Feature from 'models/Feature';
import Assets from 'models/Assets';

function FeaturePage(props) {
  const { feature, assets } = props;
  feature.attachAssets(assets);
  const formatted = feature.getImage().getFormatted();
  let body;
  const featureBody = feature.getBody();

  if (featureBody) {
    body = (<div dangerouslySetInnerHTML={{ __html: markdown.toHTML(featureBody) }} />);
  }

  return (
    <div>
      <Helmet title="Feature" />
      <div>
        <div>
          <Image src={formatted.src} alt={formatted.alt} />
        </div>
        <h1>{feature.getTitle()}</h1>
        {body}
      </div>
    </div>
  );
}

FeaturePage.propTypes = {
  feature: PropTypes.instanceOf(Feature).isRequired,
  assets: PropTypes.instanceOf(Assets).isRequired,
};

export default featureContainer(assetsContainer(FeaturePage));
