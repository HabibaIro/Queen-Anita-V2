//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2348138093088";
global.owner = process.env.OWNER_NUMBER || "2348138093088";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUEwMC96Rkc4blNpRlVrajNRR0RZY3ZUL3ViNnhOUHVSaFVYUVk2elpYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhSVUgxSHB0bzRwWWVrdHlIMlBWTEhqRGhkVUwydnpJVWxnVkhvSW13az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTkNsNFcvbVJ5TFFkMHpwMmtqMy93REhUSEFrMmtQbUUzZDZocGdnZzM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMzJBVUQ2UHNkT21KSzRUMzE3ZGl1WEl0YnBYUnpNR3M2bGRkNTgxeUJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNINi9ZQlNiNDAwZm12STJlUWdoQVVnM0NrREpOMmwyMkJSQ0U5ZjFCbnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjREWngwVW9sdnFyQWw5b3g0MFZrZC9mRFdrYitjWUpTVUxyVThNYmYwVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVUQk1pVXJKU3NXMy9VWFd0UzhOa3BHRExuNlpFTE9Edk1mSGwxTDFIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzVlZG05OFNtNTlwL3YwUFVqczZzMk5Rc0w1T2RzUyt3TlI2ZkNRa09Cbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhNdzd5TEVaNTlNTEJId0tYQURmUUpWL3IxS0dtbVNRc2YrNEFOblNZaThKUHRHUUZtWStDNHllQ01XSUxScmthZjI5WFR4Uk1QR0h2Zi9CMzMwOWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJJUjRSWGFFMWNMTzFvOFZQc0hiMk43NVZ3K1dZd2w5NlF2M3JvUmthYlFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzgwOTMwODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREMxRUZBMjc1M0UyRTQzOTQ5NkNEMTFENUE4RDJFM0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTMwNTM3NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieFhCOHlUOEVST0dFVlNSZlp4WXJiUSIsInBob25lSWQiOiJjNTViYTE1Ni1jOTdkLTQxODktOGI4My1iNDQ0YzFjZGU2MDkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJXS2JTb0dNcjkwbDNFOUU3ZlJKa2tDcnBZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFkMHl6MnhtUzRIbWUyQWVLdXppaUNEaUFERT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIOTU4WDhNMSIsIm1lIjp7ImlkIjoiMjM0ODEzODA5MzA4ODo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik11aGFiYXMgYXJ0c05jcmFmdHMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t1VHdPSUJFSStrMkxZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhZWlRXMjE5VW9IanZyMzVQeFkvM21DdWcvZlRFNzlIL0hwNHdaRjJyRmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJBMHdQd1RWN2wvY2oyK3BxbU1rWXp3NTZsNmRSNS8zYm4zOUdnZ1VQT2Z5eTBtWGtxdGprd05VVnNrMmQwZzBoZ0FFUFlvbFhIMk05eEU4N0ZES0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4WmM2OXc4dzh2UXBOYjRYR0xVMGdBSFdPT0JqUmZBTDVmVjJZcHh4cTBucXhHaVFvcmlXd2pCY0t0RnFwd05ycWVYZk9GU1d0RzZBbXExakJ6STdpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzgwOTMwODg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSMkdVMXR0ZlZLQjQ3NjkrVDhXUDk1Z3JvUDMweE8vUi94NmVNR1JkcXhZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzA1MzcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1KcSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
