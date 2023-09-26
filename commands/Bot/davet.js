const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("linkler")
        .setDescription("🛸 Botun Linklerini Gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("GhostBOT - Linkler!")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("https://cdn.discordapp.com/attachments/1144919810195607603/1155054853912014879/standard_2.gif")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/oauth2/authorize?client_id=1154427971365511248&scope=bot&permissions=27648860222"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/a7qupy34U"),
                new ButtonBuilder()
                    .setLabel("Oy Ver")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://top.gg/tr/bot/1123355704959443025")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
