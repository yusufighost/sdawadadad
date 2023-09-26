const { PermissionFlagsBits, SlashCommandBuilder, MessageEmbed, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('🛸 Kullanıcının Yasağını Kaldırırsın!')
        .addStringOption(option =>
            option
                .setName('id')
                .setDescription('Kullanıcı ID Girin!')
                .setRequired(true)
        ),
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
            const noPermissionEmbed = new EmbedBuilder()
                .setColor("Red")
                .setDescription('Üyeleri Yasakla Yetkin Yok!')

            return interaction.reply({ embeds: [noPermissionEmbed], ephemeral: true });
        }

        const userId = interaction.options.getString('id');

        try {
            // Attempt to unban the user by their ID
            await interaction.guild.members.unban(userId);

            const successEmbed = new EmbedBuilder()
                .setColor('Green')
                .setDescription('Üyenin yasağı başarıyla kaldırıldı.')

            interaction.reply({ embeds: [successEmbed], ephemeral: true });
        } catch (error) {
            const errorEmbed = new EmbedBuilder()
                .setColor('Red')
                .setDescription('Yeterli yetkim yok veya böyle bir banlanmış id yok.')

            interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};