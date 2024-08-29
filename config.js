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
global.sudo = process.env.SUDO || "234";
global.owner = process.env.OWNER_NUMBER || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FBV29XREhyRHFTWERRS2dhRm0xcG9pMTVWN0IyZXpBcWRRRHZyZktYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnRYQTZ5QlY1ckJuUzlvSzhqeThqSnc5VkM4Y2Mybm9PaDBHUHgwSThpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQlNZTjZwRmU0UEd0RTZnNmd5L3Q4WmFFcmhZVDFFeS9yOGFIV1RtblVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqeGZ5S1dBUE5GSnQ4aTU5enlYc2N6U0pkczIzNU1nWDN6a0FvWjdUN2dZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEekkydHZyRFlEL3lodXl0Z2o5bUhDUGV2MWdoMG5xdVM1eG02bzdPM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN6Qk1xTVAybVVySVo4TjFVMmE3bGl0N1FpNTZ5dFA0RTlvc1BHUkdLMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNHVHE2ZDd1YWtMdHNpQVBiNFllcnNEVXNCWmhJN1Vob1dCWGg1M1ZYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielpNSmR2cDBpWWNQblVXMkRRdEF2NGNWS05TbUx0QmNpY3ZaSU4vM0F6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ2ZWQzNURZeUthSHhybm5BWXJCTlFjZmYvUGhkbno3Y0F0cWRGV1U4Tm81d0xQSFNUcUtrWTZoelRUZkZwSkF4bHJoWXFWVFh6Ni9IR1pLM1RyVGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJsNWZsQ2puWFJacHQ2MGp6aWdiRm85c3RqU3FiZzJBQS84amFXTGNqUEQ0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzgwOTMwODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzhBQkVCRDE2NkNDMjUwMkE5RDFGMjRCMTU1NDk2QUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDkzNjk1NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX1BxVVFWdnVSUG1POTNjRURiVkY1dyIsInBob25lSWQiOiJkODJmMzY2OS1iMDg5LTRiYTEtYmEyMS01MDIwODRjYTlkN2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3FlVFJXTWR5OUZ0Y0lKYnpEcHAxNmh0eXJRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpORUNKQmtIN0NCSktpU0tRdkNQZUJiRkFpOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2RFRDNzE0SCIsIm1lIjp7ImlkIjoiMjM0ODEzODA5MzA4ODoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik11aGFiYXMgYXJ0c05jcmFmdHMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tpVHdPSUJFT25sd2JZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhZWlRXMjE5VW9IanZyMzVQeFkvM21DdWcvZlRFNzlIL0hwNHdaRjJyRmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImN6WnQ0bFBEdi9yL0ZYODdOemQ1aHdpNXc4YlZYeVVPRW1aajdDSzhQNWxWaDJCcmhkYWo1Qm50aS9hNXlpMGtPUDJsTlV6M2lLeUhWempCdFNjZER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzdDlCd3I0MVczcHh0c0FlTmoyWHo3ZUx0MVNMVVdtVlc0SksweVNodkxqRVpwVWYyWXJKcTk1YUZWMUEwclZoek5SdWR3dVkwN3R0M1M2ZHovcFNoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzgwOTMwODg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSMkdVMXR0ZlZLQjQ3NjkrVDhXUDk1Z3JvUDMweE8vUi94NmVNR1JkcXhZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0OTM2OTUxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1KbyJ9"
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
