import React from 'react';
import NestedStatus from 'react-nested-status';

export default function NotFound() {
  return (
    <NestedStatus code={404}>
      <div className="container">
        <h1>Doh! 404!</h1>
        <p>These are <em>not</em> the droids you are looking for!</p>
      </div>
    </NestedStatus>
  );
}
