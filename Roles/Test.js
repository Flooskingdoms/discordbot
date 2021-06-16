const { Command } = require('discord-akairo');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Logger = require('../../Utils/Logger');
const color = require('../../Utils/Colors');
class TestCommand extends Command {
    constructor() {
        super('Test', {
            aliases: ['test'],
            description: {
                    usage: 'role <user>',
                    examples: ['role @Damn.#1611"'],
                    description: 'voegt een user toe aan jouw kingdom.'
            },
            args: [
                {
                    id: 'user',
                    type: 'user'
                }
            ],
            clientPermissions: ['SEND_MESSAGES'],
            ownerOnly: true,
            category: 'Extra',
            channel: 'guild'
        });
    }

    async exec(message, args) {

        if (!args) {
            return message.channel.send('Specificeer een user en een kingdom.')
        } else if (!args.user) {
            return message.channel.send('Specificeer een geldige user')
        } else {

                    const embed = new MessageEmbed()
                        .setTitle(args.user.tag)
                        .setDescription('Je bent uitgenodigd om KD te joinen!')
                        .setFooter(message.guild.name)
                        .setColor('#ffbee5')
                        .setTimestamp();

                    args.user.send(embed).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };
                        
                        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                            .then(collected => {
                                const reaction = collected.first();
                        
                                if(reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    args.user.role.add('')
                                } else if(reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                }
                            })
                            .catch(collected => {
                                message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                            });
                            
                      }).catch(function() {
                        console.log('an error has accured on reaction part.')
                       });
        }
    }
}
module.exports = TestCommand;