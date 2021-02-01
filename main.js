const Telebot = require("telebot");
const constants = require("./constants");

const bot = new Telebot({
    token: constants.telegramToken
});

bot.on(["/start", "/hola"], (msg) => {
    bot.sendMessage(msg.chat.id, `Hola ${msg.chat.first_name} bienvenido a tu charla con bot!, quieres conversar?`)
})



bot.start()