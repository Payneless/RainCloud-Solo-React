"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Sounds",
      [
        {
          name: "Rain-1",
          content: "General rain sound.",
          userId: 1,
          playlistId: 1,
          file: "https://res.cloudinary.com/rain-cloud/video/upload/v1636405551/Sounds/rain-01_bxyae2.mp3",
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
    return queryInterface.bulkDelete("Sounds", null, {});
  },
};
