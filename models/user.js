module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   isEmail: true
      // }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    profileImage: DataTypes.STRING,

  });

  User.associate = models => {
    User.hasMany(models.Post, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      }
    });

    User.hasMany(models.Comment, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      }
    });

    User.hasMany(models.Like, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      }
    });

    User.hasMany(models.Follow, {
      //Role
      as: 'RequestFrom',
      foreignKey: {
        name: 'requestFromId',
        allowNull: false,
      }
    });

    User.hasMany(models.Follow, {
      //Role
      as: 'RequestTo',
      foreignKey: {
        name: 'requestToId',
        allowNull: false,
      }
    });
  }

//0.
  return User;
}