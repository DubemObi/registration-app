const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    fullName: {
      type: "text",
    },
    email: {
      type: "varchar",
    },
    password: {
      type: "varchar",
    },
  },
});
