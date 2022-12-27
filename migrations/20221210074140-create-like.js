'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('likes');
  }
};
