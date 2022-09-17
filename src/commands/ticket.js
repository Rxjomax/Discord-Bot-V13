const { MessageEmbed, MessageButton, MessageActionRow, Message, Client }= require("discord.js");
/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */
module.exports.run = (client, message, args) => {
if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send({embed: { title: `❌ Ocorreu um erro`  , description: `${message.author} Você não possui a permissão de \`Administrador\` para executar este comando`, color: "FF0000"}}).then(msg => setTimeout(() => msg.delete(), 10 * 1000));
    const embed = new MessageEmbed()
    .setTitle("Central de Pedidos")
    .setDescription('» Bem vindo a central de pedidos da nossa loja para garantir seu bot apenas abra um ticket e se comunique com o dono.')
    .setColor('GREEN')
    .setImage('https://cdn.discordapp.com/attachments/852574028316147794/865708750031159316/file.jpg')
    .setFooter("©JM-Store")
    let button = new MessageButton()
    .setStyle('DANGER')
    .setLabel('Financeiro')
    .setEmoji('879059785788588124')
    .setCustomId('loja')
    const row = new MessageActionRow()
    .addComponents(button)
    message.channel.send({embeds: [embed], components: [row]});

}