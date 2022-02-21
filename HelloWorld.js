const Discord = require('discord.js')
const client = new Discord.Client();
client.commands = new Discord.Collection();

const { token } = require('');

client.on('message', message => {
  if (!message.content.startsWith(".helloworld") || message.author.bot) return;
    message.channel.send("Hello world!")
  }
}

client.login(token);
