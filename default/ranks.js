const { Command } = require('discord-akairo');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Logger = require('../../Utils/Logger');
const color = require('../../Utils/Colors');

class RankCommand extends Command {
    constructor() {
        super('rank', {
            aliases: ['rank', 'r', 'ranks', 'rang', 'rangs'],
            category: 'Information',
            args: [{
                id: 'command',
                type: 'commandAlias',
                match: 'content',
                default: null
            }],
            description: {
                usage: 'rank <command>',
                examples: ['rank', 'r', 'ranks', 'rang', 'rangs'],
                description: 'Geeft alle ranks weer.'
            },
            category: 'Information',
            cooldown: 3000,
            ratelimit: 3
        });
    }

    async exec(message, { command }) {
        const embed = new MessageEmbed()
            .addField(`🇳🇱: **Koning / Koningin**`, "🇬🇧: **King / Queen**")
            .addField(`🇳🇱: **Prins / Prinses**`, "🇬🇧: **Prince / Princess**")
            .addField(`🇳🇱: **Hertog / Hertogin**`, "🇬🇧: **Duke / Duchess**")
            .addField(`🇳🇱: **Graaf / Gravin**`, "🇬🇧: **Count / Countess**")
            .addField(`🇳🇱: **Generaal**`, "🇬🇧: **General**")
            .addField(`🇳🇱: **Adviseur**`, "🇬🇧: **Counselor**")
            .addField(`🇳🇱: **Admiraal**`, "🇬🇧: **Admiral**")
            .addField(`🇳🇱: **Lijfwacht**`, "🇬🇧: **Bodyguard**")
            .addField(`🇳🇱: **Bouwmeester**`, "🇬🇧: **Master builder**")
            .addField(`🇳🇱: **Soldaat**`, "🇬🇧: **Soldier**")
            .addField(`🇳🇱: **Inwoner**`, "🇬🇧: **Resident**")
            .setDescription("🇳🇱: De rangvolgorde is van hoog naar laag gesorteerd. \n\u200b\n\u200b🇬🇧:  The ranking order is sorted from highest to lowest.\n\u200b")
            .setColor(color.green)
            .setAuthor(`Rang volgorde`, this.client.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`FloosKingdoms | Rang volgorde`, message.client.user.displayAvatarURL({ dynamic: true }))
        return message.util.send({ embed });


    }
}

module.exports = RankCommand;