import React, { Component } from 'react';
import { themeable } from 'rethemeable';
import {
  LayoutContainer,
  BusinessCard,
} from 'components';

@themeable
class Profile extends Component {
  render() {
    const theme = this.theme;
    return (
      <div className={theme.self}>
        <LayoutContainer>
          <BusinessCard
            name={'Chris Slater'}
            position={'Developer and startup entrepreneur'}
            email={'contact@snapper.fish'}
            address={'Example Address, London, EG16 3RZ'}
            phone={'+44 78663 34466'}
            githubUrl={'https://github.com/chrisslater'}
            twitterUrl={'https://twitter.com/ChrisOnTheSide'}
          />
          <a>Download resume</a>
          <p>
            Hello! I’m Chris Slater. Senior Web Developer specializing in front end development.
            Experienced with all stages of the development cycle for dynamic web projects.
            Well-versed in numerous programming languages including JavaScript, PHP, and C.
            Stng background in project management and customer relations.
          </p>

        </LayoutContainer>
      </div>
    );
  }
}

export default Profile;
