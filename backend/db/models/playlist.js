"use strict";
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define(
    "Playlist",
    {
      name: DataTypes.STRING(255),
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Playlist.associate = function (models) {
    Playlist.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Playlist.belongsToMany(models.Sound, {
      through: models.Stored,
    });
  };
  return Playlist;
};
