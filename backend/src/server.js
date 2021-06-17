const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reverent_brown", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers,
});

//graphql opens at 4000 port as default
server.start();
