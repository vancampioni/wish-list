module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email_address: {
      type: DataTypes.STRING,
    },
    password_hash: DataTypes.STRING,
  });

  return User;
};
