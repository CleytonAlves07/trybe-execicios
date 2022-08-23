'use strict';

/**
 * @param {import('sequelize').QueryInterface} queryInterface 
 * @param {import('sequelize').Sequelize } Sequelize
 * 
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone_num');
  }
};
