import React, { PropTypes } from 'react';
import ElementQuery from 'react-element-query';
import themeInjector from 'containers/themeInjector';
import analytics from 'helpers/analytics';

import {
  Layout,
  Button,
  BusinessCard,
  Skills,
  Timeline,
  TimelineSingle,
} from 'components';

const contactInfo = {
  name: 'Chris Slater',
  position: 'Full stack web developer',
  email: 'hello@snapper.fish',
  address: 'Snapper Fish Ltd, <br>Office 7, <br>35-37 Ludgate Hill, <br>London <br>EC4M 7JN',
  phone: '020 3290 3474',
  available: 'July 2016',
  profileImage: {
    src: '/files/profile.jpg',
    alt: 'Enjoying a country walk',
  },
  githubUrl: 'https://github.com/chrisslater',
  twitterUrl: 'https://twitter.com/ChrisOnTheSide',
  linkedinUrl: 'https://www.linkedin.com/in/crslater',
};

const experience = [{
  fromDate: '2015-06-20T23:00:00.000Z',
  toDate: '2016-06-30T23:00:00.000Z',
  title: 'Amido',
  strapline: 'React and Javascript Developer',
  body:
    `
    Built Javascript Single Page Applications and
    Games using ReactJS, Redux, Flux and NodeJS.
    These were hosted on AWS using Docker containers.
    `,
}, {
  fromDate: '2013-11-01T23:00:00.000Z',
  toDate: '2015-06-29T23:00:00.000Z',
  title: 'Rated People',
  strapline: 'Senior Web Developer',
  body:
    `
    Architected and developed BackboneJS SPA for logged-in experience tradesmen.
    It communicated to the databases through a Symfony API.
    This was all hosted on AWS using Docker containers.
    `,
}, {
  fromDate: '2011-08-01T23:00:00.000Z',
  toDate: '2013-06-28T23:00:00.000Z',
  title: 'IPC Media',
  strapline: 'Digital Developer',
  body:
    `
    Brought in for my Drupal experience,
    I actually spent most of my time working with Symfony projects.
    This was no bad thing!
    As I grew more confident as a developer, I began to experiment with
    Javascript libraries and Object Orientated CSS.
    `,
}, {
  fromDate: '2011-03-01T23:00:00.000Z',
  toDate: '2011-08-01T23:00:00.000Z',
  title: 'Moore Wilson',
  strapline: 'Drupal Developer',
  body:
    `
    Built a number of websites in Drupal 6 & 7
    `,
}];

const skills = [{
  name: 'React',
  level: 0.9,
}, {
  name: 'Node',
  level: 0.9,
}, {
  name: 'Backbone',
  level: 0.8,
}, {
  name: 'Symfony',
  level: 0.7,
}, {
  name: 'Drupal',
  level: 0.6,
}, {
  name: 'Unity',
  level: 0.4,
}];

const handleProfileOnClick = () => {
  analytics.event({
    category: 'PDF',
    action: 'CV',
  });
};

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
          <BusinessCard {...contactInfo} />
        </ElementQuery>
      </Layout>
      <Layout isCentered>
        <h2 className={theme.sectionHeadline}>About me</h2>
        <p className={theme.welcome}>
          Hello! I’m Chris. A Senior Web Developer specializing in front end development.
          Experienced with all stages of the development cycle for dynamic web projects.
          I am well-versed in a number of programming languages
          but have a significant love for JavaScript!
        </p>
      </Layout>
      <Layout isCentered>
        <p>
          <Button
            href="/files/chris-slater-professional-profile-20160620.pdf"
            target="_blank"
            onClick={handleProfileOnClick}
          >
            Download CV
          </Button> <Button
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
            {experience.map((job, key) => <TimelineSingle key={key} {...job} />)}
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
