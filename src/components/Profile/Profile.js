import React, { PropTypes } from 'react';
import ElementQuery from 'react-element-query';
import themeInjector from 'containers/themeInjector';

import {
  Layout,
  Button,
  BusinessCard,
  Skills,
  Timeline,
  TimelineSingle,
} from 'components';

const skills = [{
  name: 'React',
  level: 0.9,
}, {
  name: 'Node',
  level: 0.8,
}, {
  name: 'Backbone',
  level: 0.75,
}, {
  name: 'Symfony',
  level: 0.6,
}, {
  name: 'Drupal',
  level: 0.5,
}, {
  name: 'Unity',
  level: 0.3,
}];

function Profile(props) {
  const theme = props.theme;

  return (
    <div className={theme.self}>
      <Layout>
        <ElementQuery
          sizes={[
            { name: 'small', width: 1 },
            { name: 'large', width: 700 },
          ]}
        >
          <BusinessCard
            name={'Chris Slater'}
            position={'Developer and startup entrepreneur'}
            email={'contact@snapper.fish'}
            address={'Example Address, London, EG16 3RZ'}
            phone={'+44 78663 34466'}
            available={'July 2016'}
            githubUrl={'https://github.com/chrisslater'}
            twitterUrl={'https://twitter.com/ChrisOnTheSide'}
            linkedinUrl={'https://www.linkedin.com/in/crslater'}
          />
        </ElementQuery>
      </Layout>
      <Layout isCentered>
        <h2 className={theme.sectionHeadline}>About me</h2>
        <p className={theme.welcome}>
          Hello! I’m Chris Slater. Senior Web Developer specializing in front end development.
          Experienced with all stages of the development cycle for dynamic web projects.
          Well-versed in numerous programming languages including JavaScript, PHP, and C.
          Stng background in project management and customer relations.
        </p>
      </Layout>
      <Layout isCentered>
        <p>
          <Button
            href="/files/chris-professional-profile-20160530.pdf"
            target="_blank"
          >
            Download CV
          </Button>

          <Button
            href="https://snapperfish.typeform.com/to/V0S5BV"
            target="_blank"
          >
            Get in touch
          </Button>
        </p>
      </Layout>
      <Layout>
        <h2 className={theme.sectionHeadline}>Professional Skills</h2>
        <ElementQuery sizes={[{ name: 'large', width: 700 }]}>
          <Skills skills={skills} />
        </ElementQuery>
      </Layout>

      <Layout>
        <h2 className={theme.sectionHeadline}>Work Experience</h2>
        <ElementQuery sizes={[{ name: 'large', width: 700 }]}>
          <Timeline>
            <TimelineSingle
              fromDate="2015-05-20T23:00:00.000Z"
              toDate="2016-07-20T23:00:00.000Z"
              title="Pineapple"
              strapline="Web Developer"
              body={
                `programming languages including JavaScript, PHP, and C.
                Stng background in project management and customer relations`
              }
            />
            <TimelineSingle
              fromDate="2015-05-20T23:00:00.000Z"
              toDate="2016-07-20T23:00:00.000Z"
              title="Pineapple"
              strapline="Web Developer"
              body={
                `programming languages including JavaScript, PHP, and C.
                Stng background in project management and customer relations`
              }
            />
            <TimelineSingle
              fromDate="2015-05-20T23:00:00.000Z"
              toDate="2016-07-20T23:00:00.000Z"
              title="Pineapple"
              strapline="Web Developer"
              body={
                `programming languages including JavaScript, PHP, and C.
                Stng background in project management and customer relations`
              }
            />
            <TimelineSingle
              fromDate="2015-05-20T23:00:00.000Z"
              toDate="2016-07-20T23:00:00.000Z"
              title="Pineapple"
              strapline="Web Developer"
              body={
                `programming languages including JavaScript, PHP, and C.
                Stng background in project management and customer relations`
              }
            />
            <TimelineSingle
              fromDate="2015-05-20T23:00:00.000Z"
              toDate="2016-07-20T23:00:00.000Z"
              title="Pineapple"
              strapline="Web Developer"
              body={
                `programming languages including JavaScript, PHP, and C.
                Stng background in project management and customer relations`
              }
            />
            <TimelineSingle
              fromDate="2015-05-20T23:00:00.000Z"
              toDate="2016-07-20T23:00:00.000Z"
              title="Pineapple"
              strapline="Web Developer"
              body={
                `programming languages including JavaScript, PHP, and C.
                Stng background in project management and customer relations`
              }
            />
          </Timeline>
        </ElementQuery>
      </Layout>
    </div>
  );
}

Profile.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default themeInjector(Profile);
