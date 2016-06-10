import React from 'react';
import { expect } from 'chai';
import Footer from '../Footer';
import shallowWithContext from 'testing/shallowWithContext';
import mountWithContext from 'testing/mountWithContext';

describe('Component', function () {
  describe('<Footer />', function () {
    describe('#render()', function () {
      it('should render copyright', function () {
        const mock = {
          theme: {
            self: 'self',
            copyright: 'copyright'
          }
        };
        const component = mountWithContext(<Footer {...mock} />);
        const copyright = component.find('.copyright');
        expect(copyright.node.innerText).to.equal('© 2016, Snapper Fish Ltd');
      });
    });
  });
});