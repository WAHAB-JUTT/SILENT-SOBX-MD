const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iqw1RIxL#KmAdP-HBAoLrSO_XDfo69-tlf1moSOWrU0YDWeed3EU",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2a06381b260c3f096a612.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M MR-JUTT-MD WHATSAPP BOT 😊♻️",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
HEART_REACT: process.env.HEART_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "➺ѕเℓεɳƭ_ℓσѵε૨࿐",
};
