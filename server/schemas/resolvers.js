const { Note } = require("../models");

const resolvers = {
  Query: {
    notes: async () => {
      return await Note.find();
    },
  },
};
module.exports = resolvers;
