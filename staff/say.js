const { Command } = require('discord-akairo');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Logger = require('../../Utils/Logger');
const color = require('../../Utils/Colors');
class SayCommand extends Command {
    constructor() {
        super('Say', {
            aliases: ['say', 's'],
            description: {
                usage: 'say <channel> <tekst>',
                examples: ['say #announcements "Supsup"'],
                description: 'Verteld wat je wilt'
            },
            args: [{
                    id: 'channel',
                    type: 'channel',
                    prompt: {
                        start: 'In welk kanaal moet het bericht geplaatst worden? *(**cancel** om te stoppen)*',
                        retry: 'Geen valide kanaal'
                    }
                },
                {
                    id: 'message',
                    type: 'string',
                    match: 'phrase',
                    prompt: {
                        start: 'Wat moet *Flooskingdoms* vertellen? *(**cancel** om te stoppen)*',
                    }
                },
                {
                    id: 'wantembed',
                    type: ['Ja', 'Nee'],
                    default: 'Ja',
                    prompt: {
                        start: 'Moet het bericht in embed? **(Ja/Nee)** *(**cancel** om te stoppen)*',
                        retry: 'Geen valide antwoord **(Ja/Nee)**'
                    }
                }
            ],
            clientPermissions: ['SEND_MESSAGES'],
            ownerOnly: false,
            category: 'staff',
            channel: 'guild'
        });
    }

    async exec(message, args) {
        if (message.member.roles.cache.find(r => r.id === "836678103253254216")) {
            if (!args) {
                message.channel.send('Geen arguments!')
            }
            if (args.wantembed === 'Ja') {
                const embed = new MessageEmbed()
                    .setDescription(args.message)
                    .setFooter(message.guild.name)
                    .setColor('#ffbee5')
                    .setTimestamp();
                args.channel.send(embed).then(message.channel.send('Bericht succesvol verzonden!'))
            } else {
                args.channel.send(args.message).then(message.channel.send('Bericht succesvol verzonden!'))
            }
        } else {
            return message.channel.send('Geen permissies!');

        }
    }
}
module.exports = SayCommand;