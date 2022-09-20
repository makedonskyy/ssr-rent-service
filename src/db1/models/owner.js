const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Appartment }) {
      // define association here
      this.hasMany(Appartment, {
        foreignKey: 'ownerId',
      });
    }
  }
  Owner.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,

    phone: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};