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
  // Sound.prototype.get = async function () {
  //   return await Sound.findAll();
  // };
  Sound.associate = function (models) {
    Sound.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Sound.belongsToMany(models.Playlist, {
      through: models.Stored,
    });
    Sound.hasMany(models.Comment, {
      foreignKey: "soundId",
    });
  };
  return Sound;
};
