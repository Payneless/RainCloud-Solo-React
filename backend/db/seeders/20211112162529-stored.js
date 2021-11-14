"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Storeds",
      [
        {
          soundId: 1,
          playlistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          soundId: 2,
          playlistId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          soundId: 3,
          playlistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          soundId: 3,
          playlistId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          soundId: 4,
          playlistId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Storeds", null, {});
  },
};
