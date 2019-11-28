module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Customer',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
};
