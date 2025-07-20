const config = require('../config')
const {cmd , commands} = require('../command')
Const {fetchJson}= require('../lib/fucstions')
cmd({
    pattern: "ai",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


}catch(e){
Cosole.log(e)
reply(`${e}´)
}
