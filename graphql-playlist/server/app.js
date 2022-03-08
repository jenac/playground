const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://root:nYZ_6MsFWS@localhost:27017/');
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})