import React from 'react';
import mountWithContext from 'testing/mountWithContext';
import { expect } from 'chai';
import TimelineSingle from '../TimelineSingle';

describe('Component', function () {
  /** @test {TimelineSingle} */
  describe('TimelineSingle', function () {
    describe('#render()', function () {
      beforeEach(function () {
        this.mock = {
          title: 'Test title',
          strapline: 'Test strapline',
          fromDate: '2015-05-20T23:00:00.000Z',
          theme: {
            fromDate: 'fromDate',
            toDate: 'toDate',
            title: 'title',
            strapline: 'strapline',
          }
        }
      });

      afterEach(function () {
        this.mock = undefined;
      });

      /** @test {TimelineSingle#render()} */
      it('should render a fromDate', function () {
        const component = mountWithContext(
          <TimelineSingle
            {...this.mock}
          />
        );
        const text = component.find('.fromDate').prop('children');
        expect(text).to.equal('May 2015');
      });

      /** @test {TimelineSingle#render()} */
      it('should render a toDate', function () {
        this.mock.toDate = '2016-07-20T23:00:00.000Z';
        const component = mountWithContext(
          <TimelineSingle
            {...this.mock}
          />
        );
        const text = component.find('.toDate').prop('children');
        expect(text).to.equal('July 2016');
      });

      /** @test {TimelineSingle#render()} */
      it('should render to present text, if toDate is not passed', function () {
        const component = mountWithContext(
          <TimelineSingle
            {...this.mock}
          />
        );
        const text = component.find('.toDate').prop('children');
        expect(text).to.equal('present');
      });

      /** @test {TimelineSingle#render()} */
      it('should render a title', function () {
        const component = mountWithContext(
          <TimelineSingle
            {...this.mock}
          />
        );
        const text = component.find('h1').prop('children');
        expect(text).to.equal(this.mock.title);
      });

      /** @test {TimelineSingle#render()} */
      it('should render a strapline', function () {
        const component = mountWithContext(
          <TimelineSingle
            {...this.mock}
          />
        );
        const text = component.find('h2').prop('children');
        expect(text).to.equal(this.mock.strapline);
      });

      /** @test {TimelineSingle#render()} */
      it('should render body text', function () {
        this.mock.body = 'This is body text';
        const component = mountWithContext(
          <TimelineSingle
            {...this.mock}
          />
        );
        const text = component.find('.body').prop('children');
        expect(text).to.equal(this.mock.body);
      });

      /** @test {TimelineSingle#render()} */
      it('should not render body text, if not passed', function () {
        const component = mountWithContext(
          <TimelineSingle
            {...this.mock}
          />
        );
        const body = component.find('.body');
        expect(body).to.have.length(0);
      });

    });

    describe('presentation', function () {

      it('should align right');

    });


  });

});