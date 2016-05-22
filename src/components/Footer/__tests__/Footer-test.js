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
            copyright: 'copyright'
          }
        };
        const component = shallowWithContext(<Footer {...mock} />);
        const copyright = component.find('.copyright');
        expect(copyright.node.props.children).to.equal('© 2016 Snapper.fish');
      });
    });
  });
});