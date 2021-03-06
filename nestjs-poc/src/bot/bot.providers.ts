
import * as wechat from 'wechat4u';
import * as qrcode from 'qrcode-terminal';
import * as mongo from 'mongodb';

export const botProviders = [{
    provide: 'Wechat4uToken',
    inject: ['MongoConnectionToken' ],
    useFactory: (db: mongo.Db): wechat => {
        let bot = new wechat();
        bot.start();
        bot.on('uuid', uuid => {
            qrcode.generate('https://login.weixin.qq.com/l/' + uuid, {
                small: true
            })
            console.log('二维码链接：', 'https://login.weixin.qq.com/qrcode/' + uuid)
        });

        bot.on('message', msg => {
            console.log(`----------${msg.getDisplayTime()}----------`)
            console.log(bot.contacts[msg.FromUserName].getDisplayName())
            switch (msg.MsgType) {
                case bot.CONF.MSGTYPE_TEXT:
                console.log(msg.Content)
                db.collection('bot_messages').save(msg);
                break
            }
        });
        console.log('bbbbbbbot');
        return bot;
    }
}]
