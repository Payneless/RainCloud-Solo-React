"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      content: DataTypes.STRING,
      soundsId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Comment.belongsTo(models.Sound, {
      foreignKey: "soundId"
    });
  };
  return Comment;
};
