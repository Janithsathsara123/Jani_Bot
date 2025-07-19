const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
Alive_img:process.evn.Alive_img||"IMG-20250719-WA0013.jpg",
Alive_msg:process.evn.Alive_msg||"hello,alive yourname I am alive now".    
};
