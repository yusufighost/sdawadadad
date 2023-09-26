const { SlashCommandBuilder, EmbedBuilder, resolveColor, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("nuke")
        .setDescription("🛸 Mevcut kanalı silerek bir kopyasını oluşturursunuz"),
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) return interaction.reply({ content: "Kanalları Yönet iznin yok." })
        if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ManageChannels)) return interaction.reply({ content: "Kanalları Yönet iznim yok." })
        await interaction.channel.clone().then(channel => {
            interaction.channel.delete()
            channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Nuke")
                        .setColor(resolveColor("Gold"))
                        .setDescription(`Bu kanal ${interaction.user.toString()} tarafından patlatıldı.`)
                        .setImage("https://media.tenor.com/giN2CZ60D70AAAAC/explosion-mushroom-cloud.gif")]
            })

        })

    },
}