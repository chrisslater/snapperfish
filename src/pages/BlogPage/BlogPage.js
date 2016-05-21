import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import featuresContainer from 'containers/Features/Features';
import Features from 'models/Features';
import {
  Dimensions,
  FeaturesGrid,
  Menu,
  Layout,
} from 'components';

function BlogPage(props) {
  const { features } = props;
  const title = 'Blog';

  return (
    <div>
      <Helmet title={title} />
      <Menu title={title} />
      <Layout>
        <Dimensions>
          <FeaturesGrid
            urlPrefix={'blog/'}
            features={features}
          />
        </Dimensions>
      </Layout>
    </div>
  );
}

BlogPage.propTypes = {
  features: PropTypes.instanceOf(Features),
};

export default featuresContainer(BlogPage);

