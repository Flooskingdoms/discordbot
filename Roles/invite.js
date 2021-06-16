const { Command } = require('discord-akairo');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Logger = require('../../Utils/Logger');
const color = require('../../Utils/Colors');
class InviteCommand extends Command {
    constructor() {
        super('Invite', {
            aliases: ['invite', 'inv'],
            description: {
                usage: 'invite <user>',
                examples: ['invite @Damn.#1611"'],
                description: 'Invite een user voor jouw kingdom.'
            },
            args: [
                {
                    id: 'user',
                    type: 'member'
                }
            ],
            clientPermissions: ['SEND_MESSAGES'],
            category: 'Extra',
            channel: 'guild'
        });
    }

    async exec(message, args) {

        const qal = message.guild.roles.cache.find(r => r.id == "830806837128593428");
        const fex = message.guild.roles.cache.find(r => r.id == "830806753704411186");
        const serta = message.guild.roles.cache.find(r => r.id == "831152021800484875");
        const neutremolis = message.guild.roles.cache.find(r => r.id == "830806029230014495");
        const silvum = message.guild.roles.cache.find(r => r.id == "831151905404092416");
        const myqo = message.guild.roles.cache.find(r => r.id == "830806794036445244");
        const razertium = message.guild.roles.cache.find(r => r.id == "831151976254275646");
        const astia = message.guild.roles.cache.find(r => r.id == "831152070211272756");
        const qish = message.guild.roles.cache.find(r => r.id == "831649691561230376");

        if (!args) {
            return message.channel.send('Specificeer een user en een kingdom.')
        } else if (!args.user) {
            return message.channel.send('Specificeer een geldige user')
        } else {

            if (args.user.roles.cache.some(r => ["Fex", "Neutremolis", "Myqo", "Qal", "Silvum", "Razertium", "Serta", "Astia", "Qish"].includes(r.name))) {
                return message.channel.send('User zit al in een kingdom.')
            }
            if (message.member.roles.cache.find(r => r.id == "830871348473495563") || message.member.roles.cache.find(r => r.id == "830871348473495563") || message.member.roles.cache.find(r => r.id == "837310446129381396")) {

                const execchannel = this.client.channels.cache.find(channel => channel.id === message.channel.id)

                    //NOTE: QAL
                if (message.member.roles.cache.find(r => r.id == "830806837128593428")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Qal te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#e74c3c')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Qal te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#e74c3c')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(qal)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)

                    //NOTE: FEX
                } else if (message.member.roles.cache.find(r => r.id == "830806753704411186")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Fex te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#f1c40f')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Fex te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#f1c40f')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(fex)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)

                    //NOTE: SERTA
                } else if (message.member.roles.cache.find(r => r.id == "831152021800484875")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Serta te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#ee5757')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Serta te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#ee5757')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(serta)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)

                    //NOTE: NEUTREMOLIS
                } else if (message.member.roles.cache.find(r => r.id == "830806029230014495")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Neutremolis te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#11806a')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Neutremolis te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#11806a')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(neutremolis)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)

                    //NOTE: SILVUM
                } else if (message.member.roles.cache.find(r => r.id == "831151905404092416")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Silvum te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#2ecc71')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Silvum te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#2ecc71')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(silvum)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)

                    //NOTE: MYQO
                } else if (message.member.roles.cache.find(r => r.id == "830806794036445244")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Myqo te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#9b59b6')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Myqo te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#9b59b6')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(myqo)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)

                    //NOTE: RAZERTIUM
                } else if (message.member.roles.cache.find(r => r.id == "831151976254275646")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Razertium te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#607d8b')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Razertium te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#607d8b')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(razertium)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)


                    //NOTE: ASTIA
                } else if (message.member.roles.cache.find(r => r.id == "831152070211272756")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Astia te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#65d6d6')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Astia te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#65d6d6')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(astia)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)

                    //NOTE: QISH
                } else if (message.member.roles.cache.find(r => r.id == "831649691561230376")) {


                    const embedChat = new MessageEmbed()
                        .setDescription(`${args.user} is uitgenodigd om Qish te joinen.`)
                        .setFooter(message.guild.name)
                        .setColor('#ffea74')
                        .setTimestamp();

                    const embedDM = new MessageEmbed()
                        .setAuthor(args.user.user.tag, message.guild.iconURL({dynamic: true}))
                        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                        .setDescription(`Je bent uitgenodigd door ${message.author} om Qish te joinen!\n Je hebt 5 minuten om te reageren.`)
                        .setFooter(message.guild.name)
                        .setColor('#ffea74')
                        .setTimestamp();

                    args.user.send(embedDM).then(function (message) {
                        message.react("✅")
                        message.react("🚫")
                        const filter = (reaction, user) => {
                            return ['✅', '🚫'].includes(reaction.emoji.name) && user.id === args.user.id;
                        };

                        message.awaitReactions(filter, {
                                max: 1,
                                time: 300000,
                                errors: ['time']
                            })
                            .then(collected => {
                                const reaction = collected.first();

                                if (reaction.emoji.name === '✅') {
                                    message.reply('Je hebt de invite geaccepteerd!');
                                    execchannel.send(`${args.user} heeft de invite geaccepteerd!`)
                                    args.user.roles.add(qish)
                                } else if (reaction.emoji.name === '🚫') {
                                    message.reply('Je hebt de invite afgewezen!');
                                    execchannel.send(`${args.user} heeft de invite afgewezen!`)
                                }
                            })
                            .catch(collected => {
                                message.reply('De invite is verlopen.');
                                execchannel.send(`De invite voor ${args.user} is verlopen.`)
                                console.log(collected);
                            });

                    }).catch(function () {
                        console.log('an error has accured on reaction part.')
                    });
                    message.channel.send(embedChat)
                }
            }

            else {
                message.channel.send('Je hebt geen rechten om mensen toe te voegen aan je kingdom. Contacteer je koning, graaf of prins voor hulp.')
            }
        }
    }
}
module.exports = InviteCommand;