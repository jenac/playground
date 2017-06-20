const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var messageSchema = new Schema({
    user: String,
    message: String,
    imageUrl: String,
    msgId: String,
    chatRoom: String,
});

// the schema is useless so far
// we need to create a model using it
var MessageModel = mongoose.model('Message', messageSchema);



// make this available to our users in our Node applications
module.exports = MessageModel;


// {
// 	"user": "窦继泓",
// 	"sender_data": {
// 		"type": "avatar",
// 		"username": "@1866b6fcebf4efec6920baafeacd29507b0961ea666bdb009039892cd2b8a0d1",
// 		"isFriend": "false"
// 	},
// 	"message": "请大家把带的大块东西事先切成小块这样可以有更多的人能品尝到.",
// 	"message_data": {
// 		"type": "message",
// 		"actualSender": "@1866b6fcebf4efec6920baafeacd29507b0961ea666bdb009039892cd2b8a0d1",
// 		"msgType": "1",
// 		"subType": 0,
// 		"msgId": "1793101990994075891"
// 	},
// 	"imageUrl": ""
// }