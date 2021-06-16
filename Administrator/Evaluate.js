const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const Logger = require('../../Utils/Logger');
const color = require('../../Utils/Colors');

class EvaluateCommand extends Command {
    constructor() {
        super('Evaluate', {
            aliases: ['evaluate', 'eval'],
            description: {
                    usage: 'evaluate eval',
                    examples: ['eval message.author.id'],
                    description: 'Evaluate javascript code!'
            },
            args: [
                {   // all args
                    id: 'eval',
                    match: 'rest'
                }
            ],
            clientPermissions: ['SEND_MESSAGES'],
            ownerOnly: true,
            category: 'Administrator',
            channel: 'guild'
        });
    }

    async exec(message, args) {

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    try {
      const code = args.eval;
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
        if (evaled.length > 2000) {
          const embed = new MessageEmbed()
          .setColor(color.red)
          .setTitle('Warning')
          .setThumbnail(message.author.avatarURL)
          .setTimestamp()
          .setDescription('The eval result is over 2000 characters.')
          console.log(evaled)
          return message.channel.send(embed)
        }
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

    }
}

module.exports = EvaluateCommand;