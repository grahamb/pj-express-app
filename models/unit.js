"use strict";

var helpers = require('../lib/model_helpers');

module.exports = function(sequelize, DataTypes) {
  var Unit = sequelize.define("Unit", {
    unit_number: {
      type: DataTypes.STRING,
      unique: true
    },
    unit_name: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    number_of_youth: DataTypes.INTEGER,
    number_of_leaders: DataTypes.INTEGER,
    final_payment_date: DataTypes.DATEONLY,
    notes: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Unit.hasOne(models.ProgramSelection, {
          foreignKey: 'unit_id',
          onDelete: 'cascade',
        });
      }
    },
    setterMethods: {
      final_payment_date: helpers.castEmptyStringToNull,
      number_of_youth: helpers.castEmptyStringToNull,
      number_of_leaders: helpers.castEmptyStringToNull
    }
  });
  return Unit;
};