const { Command } = require('discord-akairo');
const createEmbed = require('../../Functions/EmbedCreator.js');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const color = require('../../Utils/Colors');
const { Prefix } = require('../../Storage/settings.json')

class VoteCommand extends Command {
    constructor() {
        super('vote', {
            aliases: ['vote'],
            description: {
                usage: 'vote [Beschrijf de voting]',
                description: 'Display\'s Vraag staff voor hulp'
            },
            args: [{
                    id: 'votequestion',
                    match: 'phrase',
                    prompt: {
                        start: 'Waar gaat de voting over?',
                    }
                },
                {
                    id: 'where',
                    type: 'channel',
                    prompt: {
                        start: 'In welk kanaal moet de vote plaats vinden?',
                        retry: `Geen valide kanaal`
                    }
                },
                {
                    id: 'who',
                    type: [
                        ['management'],
                        ['admin'],
                        ['dev', 'developer'],
                        ['mod', 'moderator'],
                        ['helper'],
                        ['events', 'event'],
                        ['staff'],
                        ['all', 'iedereen', 'everyone'],
                        ['aanwezig', 'hier', 'here'],
                        ['niemand', '0', 'null']
                    ],
                    prompt: {
                        start: 'Wie moeten er gepingt worden? *(management, admin, developer, moderator, helper, events, staff, iedereen, aanwezig, niemand)*',
                        retry: 'Kies een valide rol: **management, admin, developer, moderator, helper, events, staff, iedereen, aanwezig, niemand**'
                    }
                }
            ],
            category: 'Staff',
            ownerOnly: false,
            channel: 'guild',
            cooldown: 60000,
            ratelimit: 2
        });
    }



    async exec(message, args) {

        if (args.who === 'management') {
            var roleId = '<@&833772685464436766>';
        } else if (args.who === 'admin') {
            var roleId = '<@&831193089481506876>';
        } else if (args.who === 'dev') {
            var roleId = '<@&831180113282072597>';
        } else if (args.who === 'mod') {
            var roleId = '<@&830089169014489129>';
        } else if (args.who === 'helper') {
            var roleId = '<@&831989544357199922>';
        } else if (args.who === 'events') {
            var roleId = '<@&850530302715887646>';
        } else if (args.who === 'staff') {
            var roleId = '<@&836678103253254216>';
        } else if (args.who === 'all') {
            var roleId = '@everyone';
        } else if (args.who === 'aanwezig') {
            var roleId = '@here';
        } else if (args.who === 'niemand') {
            var roleId = ' ';
        } else {
            message.channel.send('Kies een valide rol: **management, admin, developer, moderator, helper, events, staff, iedereen, aanwezig, niemand**')
        }
        if (message.member.roles.cache.find(r => r.id === "836678103253254216")) {
            const embed = new MessageEmbed()
                .addField(`Reageer op de volgende vote:`, `${args.votequestion}`)
                .setColor(color.yellow)
                .setFooter(`Vote gemaakt door: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()

            args.where.send(`${roleId}`, embed).then(msg => {
                msg.react('<:tup:852175889227710485>');
                msg.react('<:tdwn:852175778653143070>');
            })
            message.channel.send(`Vote succesvol gemaakt in: <#` + args.where + `>`)
        } else {
            return message.channel.send('Geen permissies!');

        }


    }
}
module.exports = VoteCommand;