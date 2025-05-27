const settings = {
  packname: 'Congo-MD',
  author: 'Ontiretse',
  botName: "Congo-MD",
  botOwner: 'MACODER', // Your name
  ownerNumber: '27656136438', //Your number
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "private",
  description: "This is a JavaScript bot for managing group commands.",
  version: "1.0.0",
};
try {
        // Function to return ✅ or ❌ based on the boolean value, considering multiple formats
        const statusIcon = (status) => {
            return (status === true || status === 'true' || status === 1) ? "✅" : "❌";
        };

        // Create the settings message with the updated format
        let madeSetting = `╭───⚙️ *${config.BOT_NAME} Settings* ⚙️───╮
│
│ 🟢 *➤ Auto Read Status*: ${statusIcon(config.AUTO_READ_STATUS)}
│ ⚙️ *➤ Mode*: *${config.MODE}*
│ 🎙️ *➤ Auto Voice*: ${statusIcon(config.AUTO_VOICE)}
│ 🖼️ *➤ Auto Sticker*: ${statusIcon(config.AUTO_STICKER)}
│ 💬 *➤ Auto Reply*: ${statusIcon(config.AUTO_REPLY)}
│ ✉️ *➤ Alive Message*: *${config.ALIVE_MSG}*
│ 🔗 *➤ Anti Link*: ${statusIcon(config.ANTI_LINK)}
│ 🚫 *➤ Anti Bad*: ${statusIcon(config.ANTI_BAD)}
│ ⌨️ *➤ Prefix*: *[ ${config.PREFIX} ]*
│ 🎥 *➤ Fake Recording*: ${statusIcon(config.FAKE_RECORDING)}
│ 😀 *➤ Auto React*: ${statusIcon(config.AUTO_REACT)}
│ ❤️ *➤ Heart React*: ${statusIcon(config.HEART_REACT)}
│ 👑 *➤ Owner React*: ${statusIcon(config.OWNER_REACT)}
│ 🤖 *➤ Bot Name*: *${config.BOT_NAME}*
│
╰──────────────────────────╯

*🌟DEVELOPED BY Macoder🌟*
`;

        // Send the settings message with the updated format
        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeSetting
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


module.exports = settings;
