 const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("boss") ||
     react.includes("cute") || 
react.includes("owner")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + ❤️...क्यूट बेबी...❤️ ● ──────────────── ●क्यूट बेबी ● ──────────────── ●𝐎𝐰𝐧𝐞𝐫 ➻❤️....क्यूट बेबी....❤️",attachment: fs.createReadStream(__dirname + `/noprefix/jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
