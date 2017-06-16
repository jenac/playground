const mongoose = require('mongoose');
const MessageModel = require('./message.model');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/group_chat';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//on database connected
db.on('connected', () => {
  console.log('Connected to database '+ mongoDB);
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const restify = require('restify');

var server = restify.createServer();
server.use(restify.bodyParser());
server.get('/hello/:name', (req, res, next) => {
    res.send('hello ' + req.params.name);
    
    // let message = new MessageModel ({user: 'aa', message: 'kk', imageUrl: 'ppp'});
    // message.save();
    next();
});

server.post('/messages', (req, res, next) => {

    let message = new MessageModel(req.body);
    MessageModel.findOne({ msgId: message.msgId }, (err, serviceModel) => {
        if (err) {
            res.send(err);
        } else if (serviceModel == null) {
            message.save();
            res.send({ message: "accepted" });
        } else {
            res.send({ message: "conflict" });
        }
    })


});

server.listen(8080, () => {
    console.log('%s listening at %s', server.name, server.url);
});