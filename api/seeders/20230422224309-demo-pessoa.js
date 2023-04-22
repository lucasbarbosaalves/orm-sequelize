'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pessoas', [{
      name: 'John',
      
    }])
  },

  async down (queryInterface, Sequelize) {

  }
};
