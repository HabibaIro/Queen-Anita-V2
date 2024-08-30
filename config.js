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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkU5ZFZBMlFyZW9WN0M0clZTMC94cmpDa3NTOE5yZldSUEo2L3ZlUTlGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3ZwNkRwZ0krMGt5ZlludDgraEJBcGJ1OXVjOHZFTXlGbXgyWG80L0tnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSy9wSUp0WnJQdDdOaUg3K3hQWDZzNmhaYlNCZXB0dk54VXJuc1YxSTMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPeG9PRVJQK25XamdvdldYeUE5TXo0S3VidzRrcU9qd2NDdjNrM3I1dkRNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNHUjJNTkhPRTVqZGYybnNyUGdTNlVlYTQ5dVozM295NzMzNlFQUUNKazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJPYWc0RkNEZERrUzhjMlhDTDJ0LzJ5NEJ5MTlSa0c5L2VML2I0T2d2Qlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUQ0VkNnZEt2R0JJLzlwdEdmb2JKQ1IwRWE0R1h3VmxIMyttbEQwMUtGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFRZmZVQmE2Mlg3R0dmajZhZ0FqL2d1bGpmbGRDcDc4UVV5WWZmdFlVYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgrT1BidjJyaWJkdExKa1FPNy8vZDFSYkNsZ281cTk3a0dDODlqODNvajIxTTZHVGFqMVczb0VWMkUybys1V1ZKUWZ0L0FJQ3FJb1BJNjk4MVhtZEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJlci9uYnE5cHJhYlJDdzFvdUJnZmNrdldaNFBSUERMejY0cDRRT3hFd2hNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMzgwOTMwODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkYyRTM1QzkwRTUwMkI2RUEyNDVGQTMzQTU3NEU5MUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDk1NjQ5OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMWtJTGhNX0dSWktoTHRDMFg4WTBpUSIsInBob25lSWQiOiJiZTgwNjQ2Yi1lN2U2LTRjMGUtOTQ3ZS1hZTRhNmFhM2JmOGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnAvdTNJUUI1RUF4M0owNFNhQ1dBSjRMRHlvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlsbTRiQWU5bUNCa3R6ck1wU2lmbWNOTG1jWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDWjI3VlpBRCIsIm1lIjp7ImlkIjoiMjM0ODEzODA5MzA4ODo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik11aGFiYXMgYXJ0c05jcmFmdHMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0txVHdPSUJFTUwrd3JZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhZWlRXMjE5VW9IanZyMzVQeFkvM21DdWcvZlRFNzlIL0hwNHdaRjJyRmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpvMTVHdEFHSXhFNFAvTnpwT0hZL29uNmltN281WHh0NjRYNnJ5NVlUQUxmSG1pYVZPaTR0SktiaDFrMm1pMFNrU3FpcVBvbVY2UGRFbk12SXFFMkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzNmZUQTNKRnZaS05NYndFMWY3RkR6K3g4Rm1yV25mOGR5TjgvOG1aNUkxVkxsSWFCei9KUWZhM1JwVTgyR3p2QTd1emQ2cG8wV3ZOYWpaRk45cFRBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzgwOTMwODg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSMkdVMXR0ZlZLQjQ3NjkrVDhXUDk1Z3JvUDMweE8vUi94NmVNR1JkcXhZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0OTU2NDk1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1KcSJ9"
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
