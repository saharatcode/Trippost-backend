module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define('Follow', {
      status: {
        type: DataTypes.STRING,
      },
    });
  
    Follow.associate = models => {
  
      Follow.belongsTo(models.User, {
        //Role
        as: 'RequestFrom',
        foreignKey: {
          name: 'requestFromId',
          allowNull: false,
        }
      });
  
      Follow.belongsTo(models.User, {
        //Role
        as: 'RequestTo',
        foreignKey: {
          name: 'requestToId',
          allowNull: false,
        }
      });
    }
  
  
    return Follow;
  }