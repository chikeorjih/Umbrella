import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import sinon from 'sinon';
import * as ShallowTestUtils from 'react-shallow-testutils';
import App from '../../components/App';
import Address from '../../components/Address';

describe('App', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('render', () => {
    it('renders address component', () => {
      let testObject = new App;
      let result = testObject.render();
      let AddressComponent = ShallowTestUtils.findAllWithType(result, Address);

      assert.strictEqual(AddressComponent.length, 1, 'Address component was rendered');
    });
  });
});
