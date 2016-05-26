import React from 'react';
import Helmet from 'react-helmet';
import {
  Layout,
  Button,
  Menu,
} from 'components';

const StyleGuide = function StyleGuide() {
  const typography = require('theme/typography.css');

  return (
    <div>
      <Helmet title="Style Guide" />
      <Menu title={'Style Guide'} />
      <Layout>
        <h1>Style Guide</h1>
        <h1>Header one</h1>
        <h2>Header two</h2>
        <h3>Header three</h3>

        <p className={typography.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie a urna eu efficitur.
          In vulputate mattis posuere. Donec quis scelerisque tortor, id mattis risus.
          Etiam maximus ligula ut nisi volutpat, vitae tempus elit efficitur.
          Duis ullamcorper metus in odio scelerisque molestie. Fusce vel elit leo.
          Cras a nisi et tortor mollis commodo eu in lorem.
          Vestibulum lacus sapien, sagittis vel lectus id, commodo varius massa.
          Proin eget metus vel eros
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie a urna eu efficitur.
          In vulputate mattis posuere. Donec quis scelerisque tortor, id mattis risus.
          Etiam maximus ligula ut nisi volutpat, vitae tempus elit efficitur.
          Duis ullamcorper metus in odio scelerisque molestie. Fusce vel elit leo.
          Cras a nisi et tortor mollis commodo eu in lorem.
          Vestibulum lacus sapien, sagittis vel lectus id, commodo varius massa.
          Proin eget metus vel eros
        </p>

        <p className={typography.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie a urna eu efficitur.
          In vulputate mattis posuere. Donec quis scelerisque tortor, id mattis risus.
          Etiam maximus ligula ut nisi volutpat, vitae tempus elit efficitur.
          Duis ullamcorper metus in odio scelerisque molestie. Fusce vel elit leo.
          Cras a nisi et tortor mollis commodo eu in lorem.
          Vestibulum lacus sapien, sagittis vel lectus id, commodo varius massa.
          Proin eget metus vel eros
        </p>

        <h2>Buttons</h2>

        <Button />
      </Layout>
    </div>
  );
};

export default StyleGuide;
