'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let events = JSON.parse(fs.readFileSync('./data/event.json', 'utf-8'))
      events.forEach(el => {
        el.createdAt = new Date(),
        el.updatedAt = new Date()   
      });
      return queryInterface.bulkInsert('Events', events, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Events', null, {})
  }
};
