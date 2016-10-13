import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import sinon from 'sinon';
import TestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import App from '../../components/App';

describe('App', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });


  describe('tester', () => {
    it('retuns a value', () => {

      let testObject = new App();
      let number = testObject.tester();

      assert.equal(number, 2, 'good stuff');
    });
  });
});
