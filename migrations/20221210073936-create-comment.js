'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        //foreign key
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
      },
      postId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        //foreign key
        references: {
          model: {
            tableName: 'posts',
          },
          key: 'id'
        },
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};
