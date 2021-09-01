module.exports = (sequelize, DataTypes) => {
  const Favourites = sequelize.define('Favourites');

  return Favourites;
};
