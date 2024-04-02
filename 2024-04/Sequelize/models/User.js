class User extends Model {}
User.init(
 {
 fullname: DataTypes.STRING,
 birthday: DataTypes.DATE,
 },
 { sequelize, modelName: "user" }
);
