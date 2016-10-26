var Sequelize = require('sequelize');

let sequelize = new Sequelize({
  database: 'test',
  username: 'root',
  password: 'root',
  dialect: 'mysql',
});

let Basket = sequelize.define('Basket', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
}, {
  tableName: 'basket',
  timestamps: false,
});

let Apple = sequelize.define('Apple', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING
}, {
  tableName: 'apple',
  timestamps: false,
});

Apple.belongsTo(Basket, { foreignKey: 'basketId' });
Basket.hasMany(Apple, { foreignKey: 'basketId' });

Basket.findOrCreate(
  {
    where: {
      id: 1,
    },
    defaults: {
      name: 'the basket',
      apples: [
        { name: 'Gala', },
        { name: 'Fuji', },
      ],
    },
    include: [
      Apple,
    ],
  }
);

module.exports = {
  Apple,
  Basket,
};
