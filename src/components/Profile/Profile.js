import React, { Component } from 'react';
import { themeable } from 'rethemeable';

import {
  Layout,
  Button,
  BusinessCard,
  Skills,
  Dimensions,
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

@themeable
class Profile extends Component {
  render() {
    const theme = this.theme;
    return (
      <div className={theme.self}>
        <Layout>
          <Dimensions>
            <BusinessCard
              name={'Chris Slater'}
              position={'Developer and startup entrepreneur'}
              email={'contact@snapper.fish'}
              address={'Example Address, London, EG16 3RZ'}
              phone={'+44 78663 34466'}
              githubUrl={'https://github.com/chrisslater'}
              twitterUrl={'https://twitter.com/ChrisOnTheSide'}
            />
          </Dimensions>
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
            <Button>
              Download resume
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
          <Dimensions>
            <Skills skills={skills} />
          </Dimensions>
        </Layout>

        <Layout>
          <h2 className={theme.sectionHeadline}>Work Experience</h2>
          <Dimensions>
            <Timeline
              timeline={[
                <TimelineSingle
                  fromDate="2015-05-20T23:00:00.000Z"
                  toDate="2016-07-20T23:00:00.000Z"
                  title="Pineapple"
                  strapline="Web Developer"
                  body={
                    `programming languages including JavaScript, PHP, and C.
                    Stng background in project management and customer relations`
                  }
                />,
                <TimelineSingle
                  fromDate="2015-05-20T23:00:00.000Z"
                  toDate="2016-07-20T23:00:00.000Z"
                  title="Pineapple"
                  strapline="Web Developer"
                  body={
                    `programming languages including JavaScript, PHP, and C.
                    Stng background in project management and customer relations`
                  }
                />,
                <TimelineSingle
                  fromDate="2015-05-20T23:00:00.000Z"
                  toDate="2016-07-20T23:00:00.000Z"
                  title="Pineapple"
                  strapline="Web Developer"
                  body={
                    `programming languages including JavaScript, PHP, and C.
                    Stng background in project management and customer relations`
                  }
                />,
                <TimelineSingle
                  fromDate="2015-05-20T23:00:00.000Z"
                  toDate="2016-07-20T23:00:00.000Z"
                  title="Pineapple"
                  strapline="Web Developer"
                  body={
                    `programming languages including JavaScript, PHP, and C.
                    Stng background in project management and customer relations`
                  }
                />,
                <TimelineSingle
                  fromDate="2015-05-20T23:00:00.000Z"
                  toDate="2016-07-20T23:00:00.000Z"
                  title="Pineapple"
                  strapline="Web Developer"
                  body={
                    `programming languages including JavaScript, PHP, and C.
                    Stng background in project management and customer relations`
                  }
                />,
                <TimelineSingle
                  fromDate="2015-05-20T23:00:00.000Z"
                  toDate="2016-07-20T23:00:00.000Z"
                  title="Pineapple"
                  strapline="Web Developer"
                  body={
                    `programming languages including JavaScript, PHP, and C.
                    Stng background in project management and customer relations`
                  }
                />,
              ]}
            />
          </Dimensions>
        </Layout>
      </div>
    );
  }
}

export default Profile;
