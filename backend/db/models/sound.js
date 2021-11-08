"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sound = sequelize.define(
    "Sound",
    {
      name: DataTypes.STRING(255),
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      playlistId: DataTypes.INTEGER,
      file: DataTypes.STRING,
    },
    {}
  );
  Sound.associate = function (models) {
    Sound.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Sound.belongsTo(models.Playlist, {
      foreignKey: "playlistId",
    });
    Sound.haveMany(models.Comment, {
      foreignKey: "soundId",
    });
  };
  return Sound;
};
