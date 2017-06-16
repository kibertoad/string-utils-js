const expect = require('chai').expect;
const stringHelper = require('../src/index');

describe('StringUtils', () => {

  it('check conversion', () => {
    expect(stringHelper.toBooleanNonStrict(true)).to.be.equal(true);
    expect(stringHelper.toBooleanNonStrict(false)).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict('true')).to.be.equal(true);
    expect(stringHelper.toBooleanNonStrict('TRUE')).to.be.equal(true);
    expect(stringHelper.toBooleanNonStrict('1')).to.be.equal(true);
    expect(stringHelper.toBooleanNonStrict('false')).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict('FALSE')).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict('FALS')).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict('0')).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict(0)).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict(undefined, false)).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict(null, false)).to.be.equal(false);
    expect(stringHelper.toBooleanNonStrict(undefined, true)).to.be.equal(true);
    expect(stringHelper.toBooleanNonStrict(null, true)).to.be.equal(true);
  });

  it('check error handling', () => {
    expect(function () {
      stringHelper.toBooleanNonStrict({});
    }).to.throw(/Expected to receive String, Number or Boolean/);
  })

});
