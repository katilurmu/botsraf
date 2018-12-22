const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Youtube Kanalımız.")
  .setDescription('')
  .setColor("RANDOM")
  .addField('**» Youtube Kanalımız**', ` [TIKLA](https://www.youtube.com/channel/UCMadaGnWMWglhsDrpl1aGIA?)`)
  .setFooter('KP-TV Bot Güncel Sürüm [ BETA v0.2.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yutub', 'yt'],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Bot sahibinin youtube kanalını gösterir.',
  usage: 'youtube'
};
