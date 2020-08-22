const Discord = require('discord.js');
const client = new Discord.Client();
const TOKEN ="";


client.on('ready', () => {
  console.log("ready")
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(TOKEN);
