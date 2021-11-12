"use strict";
module.exports = (sequelize, DataTypes) => {
  const Stored = sequelize.define(
    "Stored",
    {
      soundId: DataTypes.INTEGER,
      playlistId: DataTypes.INTEGER,
    },
    {}
  );
  Stored.associate = function (models) {
    // Stored.hasOne(models.Sound, {
    //   foreignKey: "soundId",
    // });
    // Stored.belongsto(models.Playlist, {
    //   foreignKey: "playlistId",
    // });
  };
  return Stored;
};
