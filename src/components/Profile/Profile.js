import React from 'react';

import {
  BusinessCard,
} from 'components';

function Profile() {
  return (
    <div>
      <BusinessCard
        name={'Chris Slater'}
        position={'Developer and startup entrepreneur'}
        email={'contact@snapper.fish'}
        address={'Example Address, London, EG16 3RZ'}
        phone={'+44 78663 34466'}
      />
    </div>
  );
}

export default Profile;
