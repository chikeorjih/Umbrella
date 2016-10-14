import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import sinon from 'sinon';
import * as ShallowTestUtils from 'react-shallow-testutils';
import Address from '../../components/Address';

describe('Address', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });


  describe('render', () => {
    it('renders address input', () => {
      let testObject = new Address;
      let result = testObject.render();
      let zipInput = ShallowTestUtils.findAllWithClass(result, 'address');

      assert.strictEqual(zipInput.length, 1, 'address input was rendered');
    });

    it('renders address submit button', () => {
      let testObject = new Address;
      let result = testObject.render();
      let zipInput = ShallowTestUtils.findAllWithClass(result, 'address-submit');

      assert.strictEqual(zipInput.length, 1, 'address submit button was rendered');
    });
  });
});
