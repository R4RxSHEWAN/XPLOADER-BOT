  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID = process.env.SESSION_ID || 'XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lXRE04UTRYOTkra0dWcFRuaTB2YWxRdFdoZlYyVTgwdEl4SDd4Z20xUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlBhOTZFSnErU3d1bHh1NEMrZ1IzT0VnVTcyQ0dqM3dKNjFTZHNydDgzaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnREREd1huSFRsSmZrbldhUy9qMnlzbGFrMk1ZSEdQb05VdHpOYjN4YzJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrT2hpMnh1RUphaFdsenJvanI0SGRYNHJsaG1jeFJMbDZZNHNPb05YYURrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPajByY240Rng2cWhVVGVsN2trcG5BeUUyb3FOWDcwK25Kd2crN2xqWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh4NlZwV1BHTXQ3dnhNeCtJbkRoSHAvOHdmK1pMMVNQektMUStuVUtLUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FMeXZ1MW1PbXpGbTAxVGhaU0J6R0VVL1ZOb1p4UXF5T0pCcXhSeVBHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFpsOFBqVkdtR1c1SU1pQzBOQysvTjBWVytNM21EL0orK3l1d2E5OGhYST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl1NDN2ZE85R3pQL2VDcmNVZ1laVGt3ck9TaGFwWnF5bGZKWlRpcVBCUm1zaXNKclViUFkxWnpGTjk1YWtmWHBoTVdpVlNQdGtQd0sva2VOcmNFY2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJ1SkVZM2FKV0cvbitIVERTZmUwa29wcnkvYkdnUW16cDExMkRURlhycEhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQzMDI1NjM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwNkFGRjNCQzg5MUU1OTFGMDgwQTYwMjg1QTQ4Q0QzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU5MDQwMDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzQzMDI1NjM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ5Nzg0Qjc0RjhDMzYwOEQxMTg4OUJGMUQwNkYzQjJBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU5MDQwMDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1kc1E2UUk5UUdXLVlWM2JMVExNbUEiLCJwaG9uZUlkIjoiMTNmNGQ0M2QtMjA2Yy00MTdmLWJjY2ItOGIyODYxYzI4YzNhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBqclpxcTFCa0xPc0xPNTRQOThERCtBanByRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDdE5hUlV2STRueGY4WEFZZmtrZkdva3VqRmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRFA1OFFTTTQiLCJtZSI6eyJpZCI6Ijk0NzQzMDI1NjM2OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI0NDAwNjczODIzMTQ0NzoyQGxpZCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJN1o1NndERVBHVjM3c0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJYWU5V1dHOU1FbW1VTC9heW1JN25INFlBSjBTNHRzengzcXY1VVBBaFgwPSIsImFjY291bnRTaWduYXR1cmUiOiIxNkkxU1ByY0ZkdUFxVHM2SzBwU1UvUU85MHc1eTFzWStxUVFFNFozRDhDWDJYdTRzaE5KSWJaWmRYMTdWT3E5N3dYSEw3S0NTeGoyMHMreWZaNXFCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQjB2ZmJJNHdodU9UbWJreGJoQ05RT2dYdWluTjd6TmdEUjZGTUVHNWxpc09GRFR0MytlS3kwZGJpNkZlQmZka05oV2F4L2ZpcmpManNRclUyNlc5Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MzAyNTYzNjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNHbnZWbGh2VEJKcGxDLzJzcGlPNXgrR0FDZEV1TGJNOGQ2citWRHdJVjkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5MDQwMDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3hLIn0=' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || '᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '254754783972' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'Tylor' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©᙭ᑭᒪOᗩᗪᗴᖇ ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "᙭ᑭᒪOᗩᗪᗴᖇ" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "ᗷOT" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'false'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'false'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
