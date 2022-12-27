module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   notEmpty: true
        // }
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   notEmpty: true
        // }
      },

      text: {
        type: DataTypes.STRING(4000),
        allowNull: false,
        // validate: {
        //   notEmpty: true
        // }
      },
    });
  
    Post.associate = models => {
      Post.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false,
        }
      });
  
      Post.hasMany(models.Comment, {
        foreignKey: {
          name: 'postId',
          allowNull: false,
        }
      });

      Post.hasMany(models.Like, {
        foreignKey: {
          name: 'postId',
          allowNull: false,
        }
      });
    }
  
  
    return Post;
  }