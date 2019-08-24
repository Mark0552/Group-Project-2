module.exports = function (sequelize, DataTypes) {
    var Cloths = sequelize.define("Cloths", {
        owner: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        style: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
        clothingLink: {
            type: DataTypes.STRING
        }
    }, {
            freezeTableName: true
        });
return Cloths
 }