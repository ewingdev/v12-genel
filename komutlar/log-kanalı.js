const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
 
   
    var kanal = message.mentions.channels.first() 
    
    if(!args[0])return message.channel.send(" Onay-red kanalı ayarlamak için bir kanal belirtmedin.")
    if(!kanal)return message.channel.send(" Onay-red kanalı ayarlamak için bir kanal belirtmedin.")
    db.set(`onay-red-kanalıs_${message.guild.id}`, kanal.id)


    message.channel.send(" Onay-red kanalı başarıyla ayarlandı.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["log-kanal"],
  permLevel: 0
};

exports.help = {
  name: "log-kanal",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
