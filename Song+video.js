const {cmd , commands} = require('../command')
const fg= require(`api-dylux´)
const yts= require(`yt-search´)


cmd({
    pattern: "song",
    desc: "download.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
(lq) return raply("please give me url or titel")
Const search=await yts(q)
const date = search.videos[0]:
Cinst url = date. url

Let desc = ' 
😇 *JANI_MD_BOT song downlod*😇

title ${date.title}
Discription:${date.dicription}
Time: ${date.timestp}
ago: ${date.ago}
Views:${date.views}
Made by JANI_MD_BOT😇
await conn.sendmessage(from,{image :{url:data.thumbnail },caption:desc},{quoted:mek}):

//downlod audio

let down=await fg.yta(url)
let   downlodurl=down.di_url


//send audio massge
await conn.sendmassge(from,{audio:{url:downloadurl}.mimetype:"audio/mp3"},{quoted:mak})



 }catch(e){
Cosole.log(e)
Reply(`${e}´)
}                                                      





###...........???.##

cmd({
    pattern: "video",
    desc: "download.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
(lq) return raply("please give me url or titel")
Const search=await yts(q)
const date = search.videos[0]:
Cinst url = date. url

Let desc = ' 
😇 *JANI_MD_BOT video downlod*😇

title ${date.title}
Discription:${date.dicription}
Time: ${date.timestp}
ago: ${date.ago}
Views:${date.views}
Made by JANI_MD_BOT😇
await conn.sendmessage(from,{image :{url:data.thumbnail },caption:desc},{quoted:mek}):

//downlod video

let down=await fg.yta(url)
let   downlodurl=down.di_url


//send video massge
await conn.sendmassge(from,{video:{url:downloadurl}.mimetype:"video/mp4"},{quoted:mak})



 }catch(e){
Cosole.log(e)
Reply(`${e}´)
}                                                      
