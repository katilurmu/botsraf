﻿const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '521721671795605514')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  const embed = new Discord.RichEmbed()
  .setTitle(" Sunucu tanıt Komutu")
  .setDescription("**» Sunucunuz Burada Tanıtıldı: https://discord.gg/9e3Cnsk**")
  .setColor("RANDOM")
  .setFooter("KP-TV v0.0.2")
  .setTimestamp()
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField('**» Üye Sayısı: **', message.guild.memberCount)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .addField('**» Sunucu Sahibi:**', message.guild.owner)
  .setDescription(asdf.url)
  .setColor("RANDOM")
  .setTimestamp()
  .setThumbnail(message.guild.iconURL);
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucutanıt',
  description: 'Sunucunuzu tanıtırsınız.',
  usage: 'sunucutanıt'
};