const Discord = require("discord.js")
const Db = require('croxydb'); // creating database
const db = require('croxydb'); // creating database
module.exports.run = async(client,message,args)=> {

   
  
let kana = client.channels.cache.find(r => r.id == (Db.fetch(`onay-red-kanalıs_${message.guild.id}`)))
let kelimeilk = args[0]
if(!kelimeilk) return message.channel.send("Onaylanacak botun ID'si bulunamadı.")
  let kelimeikik = db.fetch(`ewingbotlist_${kelimeilk}_${message.guild.id}`)
if(!kelimeikik) return message.channel.send("Onaylanacak botun sahip ID'si bulunamadı.")
  
let user = message.author
kana.send(" <@"+kelimeikik+"> adlı kullanıcının <@" +kelimeilk+"> (`"+kelimeilk+"`) adlı botu, "+ user.username+" adlı yetkili tarafından kabul edildi")
        db.set(`botsahip_${kelimeikik}_${message.guild.id}`, kelimeikik)
                db.set(`realbot_${kelimeikik}_${message.guild.id}`, kelimeilk)
if(Db.fetch(`bot-developer-rolü_${message.guild.id}`))message.member.roles.add(Db.fetch(`bot-developer-rolü_${message.guild.id}`))
        
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'bot-onayla'],
  permLevel: 0
};

exports.help = {
  name: 'bot-onayla',
  description: 'Espri yapar.',
  usage: 'espri'
};