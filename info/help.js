const { Command } = require('discord-akairo');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Logger = require('../../Utils/Logger');
const color = require('../../Utils/Colors');

const emotes = {
    "Roleplay": "💬",
    "Administrator": "🛠️",
    "Information": "ℹ️",
    "CC": "📹",
    "Staff": "👨‍✈",
}


class HelpCommand extends Command {
    constructor() {
        super('Help', {
            aliases: ['help', 'h'],
            category: 'Information',
            args: [{
                id: 'command',
                type: 'commandAlias',
                match: 'content',
                default: null
            }],
            description: {
                usage: 'help <command>',
                examples: ['help', 'h'],
                description: 'Geef alle commandos weer.'
            },
            category: 'Information',
            cooldown: 3000,
            ratelimit: 3
        });
    }

    async exec(message, { command }) {
        if (!command) {
            //CC + DEV
            if (message.member.roles.cache.find(r => r.id === "833275527786790922") && message.member.roles.cache.find(r => r.id === "836678103253254216")) {
                const embed = new MessageEmbed()
                    .addField(`ℹ️ **Algemene commandos**`, "`Help`, `Rank`")
                    .addField(`ℹ️ **Kingdom commands**`, "`Invite`")
                    .addField(`💬 **Roleplay commands**`, "`Geen`")
                    .addField(`👨‍✈ **Staff commands**`, "`Say`, `vote`")
                    .addField(`📹 **Content creator commands**`, "`Geen`")
                    .setDescription("Gebruik ``f![command]`` om een commando uit te voeren! \n\u200b")
                    .setColor(color.green)
                    .setAuthor(`Commands | FloosKingdoms`, this.client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`mc.FloosKingdoms.com | The Kingdom & KitPVP | 1.16.5`, message.client.user.displayAvatarURL({ dynamic: true }))
                return message.util.send({ embed });

                //Staff
            } else if (message.member.roles.cache.find(r => r.id === "836678103253254216")) {
                const embed = new MessageEmbed()
                    .addField(`ℹ️ **Algemene commandos**`, "`Help`, `Rank`")
                    .addField(`ℹ️ **Kingdom commands**`, "`Invite`")
                    .addField(`💬 **Roleplay commands**`, "`Geen`")
                    .addField(`👨‍✈ **Staff commands**`, "`Say`, `vote`")
                    .setDescription("Gebruik ``f![command]`` om een commando uit te voeren! \n\u200b")
                    .setColor(color.green)
                    .setAuthor(`Commands | FloosKingdoms`, this.client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`mc.FloosKingdoms.com | The Kingdom & KitPVP | 1.16.5`, message.client.user.displayAvatarURL({ dynamic: true }))
                return message.util.send({ embed });

                //CC
            } else if (message.member.roles.cache.find(r => r.id === "833275527786790922")) {
                const embed = new MessageEmbed()
                    .addField(`ℹ️ **Algemene commandos**`, "`Help`, `Rank`")
                    .addField(`ℹ️ **Kingdom commands**`, "`Invite`")
                    .addField(`💬 **Roleplay commands**`, "`Geen`")
                    .addField(`📹 **Content creator commands**`, "`Geen`")
                    .setDescription("Gebruik ``f![command]`` om een commando uit te voeren! \n\u200b")
                    .setColor(color.green)
                    .setAuthor(`Commands | FloosKingdoms`, this.client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`mc.FloosKingdoms.com | The Kingdom & KitPVP | 1.16.5`, message.client.user.displayAvatarURL({ dynamic: true }))
                return message.util.send({ embed });

                //DEFAULT
            } else {
                const embed = new MessageEmbed()
                    .addField(`ℹ️ **Algemene commandos**`, "`Help`, `Rank`")
                    .addField(`ℹ️ **Kingdom commandos**`, "`Invite`")
                    .addField(`💬 **Roleplay commandos**`, "`Geen`")
                    .setDescription("Gebruik ``f![command]`` om een commando uit te voeren! \n\u200b")
                    .setColor(color.green)
                    .setAuthor(`Commands | FloosKingdoms`, this.client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`mc.FloosKingdoms.com | The Kingdom & KitPVP | 1.16.5`, message.client.user.displayAvatarURL({ dynamic: true }))

                return message.util.send({ embed });
            }
        } else if (command) {
            const cmd = command;
            const embed = new MessageEmbed()
                .setColor(color.lblue)
                .setAuthor(`Help: ${formatName(cmd.aliases[0])}`, this.client.user.displayAvatarURL())
                .setDescription(`
                            **Commando**: \`${cmd.aliases[0]}\`
                            **Beschrijving**: ${cmd.description.description || 'Een commando'}
                            **Gebruik**: \`${cmd.description.usage || cmd.alises[0]}\`
                            **Voorbeeld**:\n\`\`\`${cmd.description.examples.join('\n') || cmd.aliases[0]}\`\`\``)
                .setFooter(`Flooskingdoms | k?help [command]`, message.client.user.displayAvatarURL({ dynamic: true }))
            return message.channel.send({ embed });
        }
    }
}

module.exports = HelpCommand;