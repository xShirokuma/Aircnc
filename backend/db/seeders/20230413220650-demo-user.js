"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Bob",
          lastName: "Dylan",
        },
        {
          email: "user1@user.io",
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync("password1"),
          firstName: "Steven",
          lastName: "Morrissey",
        },
        {
          email: "user2@user.io",
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync("password2"),
          firstName: "Ian",
          lastName: "Curtis",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Users";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        // username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'FakeUser3'] }
      },
      {}
    );
  },
};
