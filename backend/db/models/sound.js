"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sound = sequelize.define(
    "Sound",
    {
      name: DataTypes.STRING(255),
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
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
      foreignKey: "soundId",
      otherKey: "playlistId",
    });
    Sound.hasMany(models.Comment, {
      foreignKey: "soundId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Sound;
};
