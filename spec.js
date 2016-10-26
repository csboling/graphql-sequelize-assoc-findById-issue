var chai = require('chai');
var graphqlSequelize = require('graphql-sequelize');
var unit = require('./index');

function testSuite() {
  it('gets the association with findOne', () => {
    return unit.Basket.findOne(
      {
        where: {
          id: 1,
        },
        include: [
          unit.Apple,
        ],
      }
    )
      .then(basket => {
        chai.expect(basket.Apples).to.exist;
      });
  });

  it('gets the association with findById', () => {
    return unit.Basket.findById(1, {
      include: [
        unit.Apple,
      ],
    })
      .then(basket => {
        chai.expect(basket.Apples).to.exist;
      });
  });
}

describe('graphql-sequelize:resolver', () => {
  describe('when not used to wrap a model', () => {
    testSuite();
  });

  describe('when used to wrap a model first', () => {
    before(() => {
      graphqlSequelize.resolver(unit.Basket);
    });
    testSuite();
  });
});
