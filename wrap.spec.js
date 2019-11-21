const { expect } = require('chai');
const wrap = require('./wrap');

// it('',()=>{expect().to.equal();})

describe('wrap', () => {
  it('Returns a string', () => {
    expect(wrap('',0)).to.be.a('string')


  })

  it('Returns This',()=>{expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(`Lorem ipsum dolor
sit eu amet, elit na
magna sem amet nulla
vel purus ac ligula.`);})

  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
});
