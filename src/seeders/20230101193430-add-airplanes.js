'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeng 737',
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        modelNumber: 'Airbus A320',
        capacity: 350,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        modelNumber: 'Boeng 777',
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        modelNumber: 'Boeng 747',
        capacity: 320,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        modelNumber: 'Airbus A330',
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
