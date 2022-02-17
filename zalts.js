//bot 95% editavel. a base não é exatamente minha
// mas a maioria dos comandos sim!
// vc tem minha permissão para usar o bot como desejar
//
//
//
//⚠️evite apagar coisas que vc não sabe oq são
//⚠️tente instalar e escanear o bot antes de modificar
/////////////////////////////////////////////////////////////////////
//bot feito pela vkp‼️
//C R E D I T O S🔰
//zalts///////////
//zolk///////////
//Dayane /////
//dark//////////
//////////////////
//
//
//
//seu brilho é uma lâmpada comparada ao meu sol
//bot feito pelo zalts 
//deixe os creditos ao doutor dos bot(conforme a Dayane)
//░░░░░▄▄▀▀▀▀▀▀▀▀▀▄▄░░░░░
//░░░░█░░░░░░░░░░░░░█░░░░
//░░░█░░░░░░░░░░▄▄▄░░█░░░
//░░░█░░▄▄▄░░▄░░███░░█░░░
//░░░▄█░▄░░░▀▀▀░░░▄░█▄░░░
//░░░█░░▀█▀█▀█▀█▀█▀░░█░░░
//░░░▄██▄▄▀▀▀▀▀▀▀▄▄██▄░░░
//░▄█░█▀▀█▀▀▀█▀▀▀█▀▀█░█▄░
//▄▀░▄▄▀▄▄▀▀▀▄▀▀▀▄▄▀▄▄░▀▄
//█░░░░▀▄░█▄░░░▄█░▄▀░░░░█
//░▀▄▄░█░░█▄▄▄▄▄█░░█░▄▄▀░
//░░░▀██▄▄███████▄▄██▀░░░
//░░░████████▀████████░░░
//░░▄▄█▀▀▀▀█░░░█▀▀▀▀█▄▄░░
//░░▀▄▄▄▄▄▀▀░░░▀▀▄▄▄▄▄▀░░
const {
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
DisconectReason,
MessageTypeProto,
  WAConnection,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
ProxyAgent,
waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent, 
  WAMessage, 
  BaileysError, 
  WA_MESSAGE_STATUS_TYPE, 
  MediaConnInfo, 
  URL_REGEX, 
  WAUrlInfo, 
  WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload,
mentionedJid,
processTime,
Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
relayWAMessage,
  GroupSettingChange
} = require('@adiwajshing/baileys')
/////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const { color, bgcolor } = require('./zalts/funções/color')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./zalts/funções/functions')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const { fetchJson, fetchText } = require('./zalts/funções/fetcher')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const { recognize } = require('./zalts/funções/ocr')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const fs = require('fs');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const os = require('os');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const chalk = require('chalk');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const yts = require('yt-search');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const crypto = require('crypto');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const util = require('util');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const axios = require('axios');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const encodeUrl = require('encodeurl');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const linkfy = require('linkifyjs');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const request = require('request');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const cheerio = require('cheerio');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const imgbb = require('imgbb-uploader');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const googleImage = require('g-i-s');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const googleIt = require('google-it');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const imageToBase64 = require('image-to-base64');
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const moment = require('moment-timezone')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const { exec } = require('child_process')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const fetch = require('node-fetch')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const ffmpeg = require('fluent-ffmpeg')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const { removeBackgroundFromImageFile } = require('remove.bg')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const lolis = require('lolis.life')
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const loli = new lolis()
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const welkom = JSON.parse(fs.readFileSync('./zalts/funções/welkom.json'))
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const nsfw = JSON.parse(fs.readFileSync('./zalts/funções/nsfw.json'))
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const samih = JSON.parse(fs.readFileSync('./zalts/funções/simi.json'))
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const simple = require('./zalts/funções/simple.js');
blocked = []
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////////𝐀 𝐍 𝐓 𝐈 𝐒.𝐉 𝐒 𝐎 𝐍\\\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const antifake = JSON.parse(fs.readFileSync('./zalts/funções/antis/antifake.json'))
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const antilink = JSON.parse(fs.readFileSync('./zalts/funções/antis/antilink.json'))
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
///◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//////////////////////////𝐏 𝐈 𝐍 𝐆\\\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////////𝐂 𝐎 𝐍 𝐄 𝐗 𝐀 𝐎 \\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
async function starts() {
const lz = new WAConnection()
lz.logger.level = 'warn'
console.log(banner.string)
lz.on('qr', () => {
console.log(color('[','blue'), color('!','red'), color(']','red'), color('Escaneie o Qr Code Acima Para Iniciar o Bot'))
})

fs.existsSync('./qrcode.json') && lz.loadAuthInfo('./qrcode.json')
lz.on('connecting', () => {
start('2', 'Conectando Aguarde...')
})
lz.on('open', () => {
success('2', '📍ola, eu sou o doutor e estou online aqui')
})

function _0x2021(){var _0x22c80e=['2146986RkBAFx','8218476lFpAhW','3713920SLPScn','18815devPDB','.𝙙𝙤𝙘𝙩𝙤𝙧\x20𝙗𝙤𝙩\x20𝙚𝙨𝙩𝙖\x20𝙤𝙣𝙡𝙞𝙣𝙚\x20𝙣𝙚𝙨𝙨𝙚\x20𝙣𝙪𝙢𝙚𝙧𝙤.\x20𝒃𝒚\x20𝒛𝒂𝒍𝒕𝒔','1572074oEPNkr','94817iuizpi','1829121PYNLYS','76ZtlOsl'];_0x2021=function(){return _0x22c80e;};return _0x2021();}function _0xf52a(_0x5200f0,_0x585cfe){var _0x2021e8=_0x2021();return _0xf52a=function(_0xf0839a,_0x5cbd63){_0xf0839a=_0xf0839a-0x171;var _0x428783=_0x2021e8[_0xf0839a];return _0x428783;},_0xf52a(_0x5200f0,_0x585cfe);}var _0x2fc2e5=_0xf52a;(function(_0x5b8cfd,_0x4e411e){var _0x3fe655=_0xf52a,_0x5671b5=_0x5b8cfd();while(!![]){try{var _0x1bc5be=parseInt(_0x3fe655(0x172))/0x1+parseInt(_0x3fe655(0x171))/0x2+-parseInt(_0x3fe655(0x173))/0x3+parseInt(_0x3fe655(0x174))/0x4*(parseInt(_0x3fe655(0x178))/0x5)+-parseInt(_0x3fe655(0x175))/0x6+parseInt(_0x3fe655(0x176))/0x7+-parseInt(_0x3fe655(0x177))/0x8;if(_0x1bc5be===_0x4e411e)break;else _0x5671b5['push'](_0x5671b5['shift']());}catch(_0xd15bf9){_0x5671b5['push'](_0x5671b5['shift']());}}}(_0x2021,0xa9971),lz['setStatus'](_0x2fc2e5(0x179)));


await lz.connect({
  timeoutMs: 30 * 1000
  })
  
  fs.writeFileSync('./qrcode.json', JSON.stringify(lz.base64EncodedAuthInfo(), null, '\t'))
  lz.on('close', () => {
  rc = 'ERRO SEU WIFI ESTA CAINDO📉'
  console.log(color(rc,'cyan'))
  })
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//////////////////////𝐀 𝐍 𝐓 𝐈.𝐅 𝐀 𝐊 𝐄\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
lz.on('group-participants-update', async (anu) => {
if(antifake.includes(anu.jid)) {
const mdata = await lz.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
lz.sendMessage(mdata.id, ' FAKES AQUI NÃO🏌‍♂️', MessageType.text)
setTimeout(async function () {
lz.groupRemove(mdata.id, [num])
}, 1000)
    }
}
}
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//////////////////////𝐁 𝐄 𝐌.𝐕 𝐈 𝐍 𝐃 𝐎\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
if (!welkom.includes(anu.jid)) return
try {
const mdata = await lz.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await lz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\n𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐠𝐫𝐮𝐩𝐨 *${mdata.subject}*\n\n𝐥𝐞𝐢𝐚 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐧𝐚𝐨 𝐬𝐞𝐫 𝐛𝐚𝐧𝐢𝐝𝐨❤️`
let buff = await getBuffer(ppimg)
lz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
lz.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await lz.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `_____▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄_____
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█　　
ACABOU DE SAIR UM GUERREIRO DO GRUPO`
        
let buff = await getBuffer(ppimg)
lz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

lz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
    blocked.push(i.replace('c.us','s.whatsapp.net'))
    }
})
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
/////////////////////𝐂 𝐇 𝐀 𝐓. 𝐔 𝐏 𝐃 𝐀 𝐓 𝐄\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
lz.on('chat-update', async (info) => {
	try {
	if (!info.hasNewMessage) return
	info = info.messages.all()[0]
	if (!info.message) return
	info.message = (Object.keys(info.message)[0] === 'ephemeralMessage') ? info.message.ephemeralMessage.message : info.message
	if (info.key && info.key.remoteJid == 'status@broadcast') return
	if (!info.message) return
	m = simple.smsg(lz, info)
	
	global.prefix
	
	global.blocked
	
	const content = JSON.stringify(info.message)
	const speed = require('performance-now');
	const from = info.key.remoteJid
	const type = Object.keys(info.message)[0]
	const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, contactsArray } = MessageType
	
const { MsgsDeEspera } = require('./zalts/funções/wait.js');
var aguarde = MsgsDeEspera[Math.floor(Math.random() * MsgsDeEspera.length)] 
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//////////////////////𝐌 𝐄 𝐍 𝐒 𝐀 𝐆 𝐄 𝐍 𝐒 \\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
enviar = {
espere: `${aguarde}`,
success: '✅ F E I T O ✅️',

apenas: {
grupos: '❪ ❌ Esse Comando So Pode Ser Usado Em Grupos Mano ❌ ❫',
premium: '❪ ❌ Esse Comando So Pode Ser Usado Por Usuarios Premium Do Bot Mano ❌ ❫',
dono: `❪ ❌ Esse Comando Só Pode Ser Usado Pelo Meu Dono❌ ❫`,

bad: {
AdmBot: '❪ ❌ So Posso Executar Esse Comando Se Eu For Adm mano ❌ ❫',
adm: '❪ ❌ Ponha-se No Seu Lugar Membro Comum! Esse Comando e So Pra Adms ❌ ❫',
link: '❪ ❌ Link inválido ❌ ❫',
registro: '❪ ❌ Você Não Esta Registrado(a)! Use: .rg Para Se Registrar ❌ ❫',
}
}
}
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////𝐄 𝐗 𝐏 𝐎 𝐑 𝐓 𝐀 𝐂 𝐎 𝐄 𝐒\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
NotRG = '❪ ❌ Você Não Esta Registrado(a)! Use: .rg Para Se Registrar ❌ ❫'

const dono = JSON.parse(fs.readFileSync('./banco de dados/configs.json'))

const logoslink = JSON.parse(fs.readFileSync('./zalts/logos/logos.json'))

const registro = JSON.parse(fs.readFileSync('./zalts/funções/rg.json'));

const prefix = dono.prefix

NomeDoBot = dono.NomeDoBot

NickDoDono = dono.NickDoDono

NumeroDoDono = dono.NumeroDoDono

logo = logoslink.logo

function _0x4bdf(_0x582226,_0x13105a){var _0x1d5385=_0x1d53();return _0x4bdf=function(_0x4bdf20,_0x40085a){_0x4bdf20=_0x4bdf20-0xf2;var _0x177dc2=_0x1d5385[_0x4bdf20];return _0x177dc2;},_0x4bdf(_0x582226,_0x13105a);}var _0x198efd=_0x4bdf;function _0x1d53(){var _0x2148f1=['1087272GufyIt','ale652','1058082sJAkWu','74619KWfExj','20RzRwoW','650776gjncdC','20ehewlr','128868GbZFBN','224358TnlCzS','6112BHhSXK','21ueSXbt','539ebjQSl','5eumowx'];_0x1d53=function(){return _0x2148f1;};return _0x1d53();}(function(_0x54b6c1,_0x2ad6b4){var _0x131b85=_0x4bdf,_0x1a1d6d=_0x54b6c1();while(!![]){try{var _0x1290fa=parseInt(_0x131b85(0xf2))/0x1*(-parseInt(_0x131b85(0xfc))/0x2)+-parseInt(_0x131b85(0xfe))/0x3+-parseInt(_0x131b85(0xf6))/0x4+-parseInt(_0x131b85(0xf5))/0x5*(parseInt(_0x131b85(0xf8))/0x6)+parseInt(_0x131b85(0xf3))/0x7*(parseInt(_0x131b85(0xfb))/0x8)+-parseInt(_0x131b85(0xf9))/0x9*(parseInt(_0x131b85(0xfa))/0xa)+-parseInt(_0x131b85(0xf4))/0xb*(-parseInt(_0x131b85(0xfd))/0xc);if(_0x1290fa===_0x2ad6b4)break;else _0x1a1d6d['push'](_0x1a1d6d['shift']());}catch(_0x749888){_0x1a1d6d['push'](_0x1a1d6d['shift']());}}}(_0x1d53,0x2967f),ExApiKey=_0x198efd(0xf7));
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////𝐃 𝐄 𝐅 𝐈 𝐍 𝐈 𝐂 𝐎 𝐄 𝐒\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//////////////////Botoes\\\\\\\\\\\\\\\\\
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await lz.prepareMessage(from, kma, image, {quoted:selo})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
lz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendBut = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
lz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendFileFromUrl = async(link, type, options) => {
	hasil = await getBuffer(link)
	await lz.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	lz.sendMessage(from, hasil, type, options).catch(e => {
	lz.sendMessage(from, { url : link }, type, options).catch(e => {
	reply('[ ! ] Erro ao baixar mídia')
	console.log(e)
	})
	})
	})
	})
	}	
	
  (function(_0x193dfc,_0x2ad78f){var _0x1c99a9=_0x5881,_0x42c37b=_0x193dfc();while(!![]){try{var _0x31e10b=-parseInt(_0x1c99a9(0x107))/0x1+-parseInt(_0x1c99a9(0x10a))/0x2*(-parseInt(_0x1c99a9(0x10b))/0x3)+-parseInt(_0x1c99a9(0x10c))/0x4*(-parseInt(_0x1c99a9(0x103))/0x5)+parseInt(_0x1c99a9(0x105))/0x6+parseInt(_0x1c99a9(0x104))/0x7+-parseInt(_0x1c99a9(0x106))/0x8*(parseInt(_0x1c99a9(0x108))/0x9)+-parseInt(_0x1c99a9(0x109))/0xa;if(_0x31e10b===_0x2ad78f)break;else _0x42c37b['push'](_0x42c37b['shift']());}catch(_0x31f627){_0x42c37b['push'](_0x42c37b['shift']());}}}(_0x4330,0x7faea),ExApiKey='ale652');function _0x5881(_0x4f3f35,_0x1ed8e3){var _0x43305f=_0x4330();return _0x5881=function(_0x588156,_0x5af712){_0x588156=_0x588156-0x103;var _0x4b013f=_0x43305f[_0x588156];return _0x4b013f;},_0x5881(_0x4f3f35,_0x1ed8e3);}function _0x4330(){var _0x26defd=['2xTchdz','2690202AxUfjO','41464ajQLBU','315GzpnHj','6323863jpyoBE','2893206XInKcO','327920edqQMt','862059ulPvTq','54JtzDrT','13044170MrEpeF'];_0x4330=function(){return _0x26defd;};return _0x4330();}
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////////////𝐆 𝐑 𝐔 𝐏 𝐎 𝐒\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
const botNumber = lz.user.jid
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? info.participant : info.key.remoteJid
const groupMetadata = isGroup ? await lz.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false
const isAntiFake = isGroup ? antifake.includes(from) : false
const isSimi = isGroup ? samih.includes(from) : false

const isAntiLink = isGroup ? antilink.includes(from) : false
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////VISUALIZAR AS MENSAGENS\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


lz.chatRead(from)


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
/////////////////////////𝐃 𝐎 𝐍 𝐎\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


const ownerNumber = [`${NumeroDoDono}@s.whatsapp.net`]
const isOwner = ownerNumber.includes(sender)


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////////𝐑 𝐄 𝐆 𝐈 𝐒 𝐓 𝐑 𝐎\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


const isRG = registro.includes(sender)


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//////////////////////// 𝐎 𝐔 𝐓 𝐑 𝐀 𝐒\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


global.prefix
body = (type === 'conversation' && info.message.conversation.startsWith(prefix)) ? info.message.conversation : (type == 'imageMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'videoMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'extendedTextMessage') && info.message[type].text.startsWith(prefix) ? info.message[type].text : (type == 'listResponseMessage') && info.message[type].singleSelectReply.selectedRowId ? info.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && info.message[type].selectedButtonId ? info.message[type].selectedButtonId : info.message[type].selectedButtonId && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')) : ""
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');



const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(" ")
const isCmd = body.startsWith(prefix)


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////////Consts Menus\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { menuprincipal } = require('./banco de dados/menu.js');
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { gitdobot } = require('./banco de dados/gitdobot.js');
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { donodoninho } = require('./banco de dados/zalts.js');
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex } = require('./banco de dados/virtex')    //
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex2 } = require('./banco de dados/virtex2')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex3 } = require('./banco de dados/virtex3')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex4 } = require('./banco de dados/virtex4')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex5 } = require('./banco de dados/virtex5')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex6 } = require('./banco de dados/virtex6')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex7 } = require('./banco de dados/virtex7')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex8 } = require('./banco de dados/virtex8')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtex9 } = require('./banco de dados/virtex9')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { ngazap } = require('./banco de dados/ngazap')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { virtag } = require('./banco de dados/virtag')    //
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { emoji2 } = require('./banco de dados/emoji2')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art1 } = require('./banco de dados/art1')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art2 } = require('./banco de dados/art2')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art3 } = require('./banco de dados/art3')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art4 } = require('./banco de dados/art4')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art5 } = require('./banco de dados/art5')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art6 } = require('./banco de dados/art6')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art7 } = require('./banco de dados/art7')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art8 } = require('./banco de dados/art8')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art9 } = require('./banco de dados/art9')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art10 } = require('./banco de dados/art10')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art11 } = require('./banco de dados/art11')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art12 } = require('./banco de dados/art12')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art13 } = require('./banco de dados/art13')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art14 } = require('./banco de dados/art14')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art15 } = require('./banco de dados/art15')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art16 } = require('./banco de dados/art16')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art17 } = require('./banco de dados/art17')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art18 } = require('./banco de dados/art18')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art19 } = require('./banco de dados/art19')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art20 } = require('./banco de dados/art20')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art21 } = require('./banco de dados/art21')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art22 } = require('./banco de dados/art22')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art23 } = require('./banco de dados/art23')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art24 } = require('./banco de dados/art24')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art25 } = require('./banco de dados/art25')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art26 } = require('./banco de dados/art26')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art27 } = require('./banco de dados/art27')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art28 } = require('./banco de dados/art28')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art29 } = require('./banco de dados/art29')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art30 } = require('./banco de dados/art30')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const { art31 } = require('./banco de dados/art31')//
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
lz.sendMessage(from, teks, text, {quoted: selo2})
}
const sendMess = (hehe, teks) => {
lz.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? lz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : lz.sendMessage(from, teks.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": memberr}})
}


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\



colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

let pushname = lz.contacts[from] != undefined ? lz.contacts[from].vname || lz.contacts[from].notify : undefined
if (pushname != undefined) { } else { pushname = sender.split('@')[0]}

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////// Verificados\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${NomeDoBot}`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo2 = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;LZ MODS,;;;\nFN:LZ MODS,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./zalts/logos/foto.jpg`), thumbnail:fs.readFileSync(`./zalts/logos/foto.jpg`),sendEphemeral: true}}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo3 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` ✨olá bem vindo ao meu menu✨  `,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo4 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito gay`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo5 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito puta`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo6 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito lesbica`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo7 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito corno`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo8 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito corna`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo9 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito hetero`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo10 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito gostosa`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo11 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito gostoso`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo12 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito chato`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo13 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito chata`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo14 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito feio`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo15 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito feia`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo16 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito cachorro`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo17 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito cachorra`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo18 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito otario`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo19 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito otaria`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo20 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito linda`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo21 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito lindo`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo22 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito bonito`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo23 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito bonita`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo24 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito legal`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const selo25 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` vc ${pushname}  é muito cuzão`,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const ghast = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` comando: sticker \n contato: ${pushname} \n by 𝚣𝚊𝖑𝖙𝖘 🛒999999999 ❤ `,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const primeiro = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` C O N T A  V E R I F I C A D A `,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const segundo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` CONTA VERIFICADA `,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const terceiro = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` comando: attp \n contato: ${pushname} \n by 𝚣𝚊𝖑𝖙𝖘 🛒999999999 ❤ `,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const quarto = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": ` comando: renome \n contato: ${pushname} \n by 𝚣𝚊𝖑𝖙𝖘 🛒999999999 ❤ `,"title": "hmm" }}}
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const quinto ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo1.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const sexto ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo2.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const setemo ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo3.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const oitavo ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo4.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const nono ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo5.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo6.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo1 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo7.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo2 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo8.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const  décimo3 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo9.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo4 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo10.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo5 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo11.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo6 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo12.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo7 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo13.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo8 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo14.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo9 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo15.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo10 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo16.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo11 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo17.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo12 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo18.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo13 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo19.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo14 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo20.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo15 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo21.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo16 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo22.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo17 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo23.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo18 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo24.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo19 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo25.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo20 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo26.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
const décimo21 ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./zalts/logos/selo/selo27.jpg`), surface: 200, message: `➛contato ${pushname}`, orderTitle: '©𝚣𝚊𝖑𝖙𝖘', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//////////////////COMANDOS\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
var _0x57df60=_0xe2b5;function _0xe2b5(_0x4ef184,_0x17e92c){var _0x5b6c32=_0x5b6c();return _0xe2b5=function(_0xe2b5ae,_0x59fea3){_0xe2b5ae=_0xe2b5ae-0x172;var _0x54224f=_0x5b6c32[_0xe2b5ae];return _0x54224f;},_0xe2b5(_0x4ef184,_0x17e92c);}(function(_0xf27232,_0x1e309f){var _0x404d04=_0xe2b5,_0x145869=_0xf27232();while(!![]){try{var _0x584790=-parseInt(_0x404d04(0x17d))/0x1+parseInt(_0x404d04(0x180))/0x2+parseInt(_0x404d04(0x177))/0x3*(-parseInt(_0x404d04(0x176))/0x4)+-parseInt(_0x404d04(0x181))/0x5+parseInt(_0x404d04(0x17e))/0x6+parseInt(_0x404d04(0x173))/0x7*(parseInt(_0x404d04(0x175))/0x8)+parseInt(_0x404d04(0x17a))/0x9;if(_0x584790===_0x1e309f)break;else _0x145869['push'](_0x145869['shift']());}catch(_0x252803){_0x145869['push'](_0x145869['shift']());}}}(_0x5b6c,0xe24e2));function _0x5b6c(){var _0x5250d4=['44156oOxjuz','5975480EPvjmu','length','147dmoxNn','\x1b[1;31m~\x1b[1;37m>','214328obAgHt','20GUKQan','229113HMANxD','[\x1b[1;32mZALTS\x1b[1;37m]','log','23737284AnRkpb','No\x20Grupo','do\x20amigo:','1081833vBOxNf','2181390hPoOmv','args\x20:'];_0x5b6c=function(){return _0x5250d4;};return _0x5b6c();}if(!isGroup&&isCmd)console[_0x57df60(0x179)](_0x57df60(0x174),_0x57df60(0x178),color(prefix+command),'do\x20amigo:',color(pushname),_0x57df60(0x17f),color(args[_0x57df60(0x172)]));if(isCmd&&isGroup)console['log'](_0x57df60(0x174),_0x57df60(0x178),color(prefix+command),_0x57df60(0x17c),color(pushname),color(sender['split']('@')[0x0]),_0x57df60(0x17b),color(groupName),_0x57df60(0x17f),color(args['length']));

if(isAntiLink) { 
  if(!isBotGroupAdmins) return reply('cade meu adm? assim n consigo remover os lek')
  if(budy.includes("https://") || (budy.includes(".net") || (budy.includes(".com" ) || (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("www.") || (budy.includes("chat.whatsapp") || (budy.includes(".xml") || (budy.includes("youtube.com") || (budy.includes("//t.me/") || (budy.includes(".css")))))))))))) {
  linkgpp = await lz.groupInviteCode(from)
  if(budy.match(`${linkgpp}`)) return reply('Link detectado! porem foi averiguado que eo link do nosso grupo entao o ban sera anulado ')  
  if (!isGroup) return
  if (isGroupAdmins) return reply(`link detectado! porem foi averiguado que voce e adm entao o ban sera anulado`)
  lz.updatePresence(from, Presence.composing)
  var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
  setTimeout( () => {
  }, 1100)
  setTimeout( () => {
  lz.groupRemove(from, [Kic]).catch((e) => {reply(`ERRO ${e}`)}) 
  }, 1000)
  }
  }

var _0x3355fa=_0x2af2;(function(_0x1064ce,_0x5c7fa6){var _0x59842e=_0x2af2,_0x535efb=_0x1064ce();while(!![]){try{var _0x379353=parseInt(_0x59842e(0x193))/0x1*(-parseInt(_0x59842e(0x18f))/0x2)+-parseInt(_0x59842e(0x191))/0x3+parseInt(_0x59842e(0x195))/0x4*(parseInt(_0x59842e(0x18e))/0x5)+parseInt(_0x59842e(0x192))/0x6*(-parseInt(_0x59842e(0x199))/0x7)+parseInt(_0x59842e(0x196))/0x8*(parseInt(_0x59842e(0x197))/0x9)+-parseInt(_0x59842e(0x198))/0xa+parseInt(_0x59842e(0x194))/0xb*(parseInt(_0x59842e(0x18d))/0xc);if(_0x379353===_0x5c7fa6)break;else _0x535efb['push'](_0x535efb['shift']());}catch(_0x440c01){_0x535efb['push'](_0x535efb['shift']());}}}(_0x5da1,0xf132a),ExApiKey=_0x3355fa(0x190));function _0x2af2(_0x20f9fd,_0x4296c4){var _0x5da189=_0x5da1();return _0x2af2=function(_0x2af25c,_0x5c4b49){_0x2af25c=_0x2af25c-0x18d;var _0x2daf5b=_0x5da189[_0x2af25c];return _0x2daf5b;},_0x2af2(_0x20f9fd,_0x4296c4);}function _0x5da1(){var _0x144299=['6GWLrRc','ale652','5749674sTYnjh','642zmzPkd','325177ipEJyU','781JWvtiw','2940nzHxcB','10888LEpKoC','3033TQmOTN','17492330niIbBI','120127cGoAtb','1136676bhrPeo','1915eCCFxB'];_0x5da1=function(){return _0x144299;};return _0x5da1();}

switch(command) {
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
/////////////////////// M e n u s \\\\\\\\\\\\\\\\\prefixos
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'menu':
if (!isRG) return reply(`${NotRG}`)
buttons = [{buttonId: `.menulist`,buttonText:{displayText: '∘̥⃟∘̥⃟🧊MENULIST∘̥⃟∘̥⃟🧊'},type:1},{buttonId:`.help`,buttonText:{displayText:'∘̥⃟☁️H E L P∘̥⃟∘̥⃟☁️'},type:1},{buttonId:`.ping`,buttonText:{displayText:' ∘̥⃟∘̥⃟📍PING∘∘̥⃟❗'},type:1}]

imageMsg = (await lz.prepareMessageMedia(fs.readFileSync(`./zalts/logos/foto.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./zalts/logos/foto.jpg`)})).imageMessage

ZALTS = `ola ${pushname} escolha a baixo oq vc deseja usar`

buttonsMessage = {
contentText: ZALTS,
footerText: "se os botoes não aparecer use .help \n ©   _*Copyright by Zalts*_  🧊", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await lz.prepareMessageFromContent(from,{buttonsMessage},{quoted: quinto})
lz.relayWAMessage(prep)

lz.sendMessage(from, teks, text,{quoted: quinto})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'stickermenu':
case 'menusticker':
if (!isRG) return reply(`${NotRG}`)
sendBut(from,`ೋ────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────ೋ
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║𝙗𝙚𝙢 𝙫𝙞𝙣𝙙𝙤 𝙖𝙤 𝙢𝙚𝙪 𝙢𝙚𝙣𝙪 𝙙𝙚 𝙨𝙩𝙞𝙘𝙠𝙚𝙧
║ ${pushname}
║
║💎usuario normal💎
║
║🤖⋟Bot:「 ${NomeDoBot} 」
║🖤⋟Dono:「 ${NickDoDono} 」
║🗓⋟Data:「 ${data} 」
║🕛⋟Hora:「 ${hora} 」
║❗⋟ Prefix:「 ${prefix} 」
║💬⋟ Numero:「 wa.me/${NumeroDoDono} 」
║
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║   .⃟⃝.⃟⃝🌼𝖘𝖙𝖎𝖈𝖐𝖊𝖗𝖘 .⃟⃝.⃟⃝📍.̶̷̲̅
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║
║.҈҈҈҈҈➺ ${prefix}s
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}f 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}fig 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}figu
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}sticker 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}figurinha
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║  .⃟⃝.⃟⃝🖋R E N O M E .⃟⃝.⃟⃝🖼.̶̷̲̅
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}. 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}renome 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}novonon 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}nickman 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}novoname 
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}rename [ ${prefix}re ]
║
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║    .⃟⃝.⃟⃝👾 ZALTS BOT .⃟⃝.⃟⃝👾.̶̷̲̅
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯💫💫💫💫💫
╚┅═┅══⟮ .҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈.⃟⃝.⃟⃝.⃟⃝🌍.⃟⃝.⃟⃝.⃟⃝.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈⟯══┅═┅═᳀`,`ola ${pushname} seja bem vindo ao menu de sticker `,
[
            {              
              buttonId: `.help`,
              buttonText: {
                displayText:  `∘̥⃟💎H E L P∘̥⃟∘̥⃟🧊`,
              },
              type: 1,
            },
            {              
              buttonId: `.menulist`,
              buttonText: {
                displayText:  `∘̥⃟∘̥⃟🧊MENULIST∘̥⃟∘̥⃟🧊`,
              },
              type: 1
            },
          ]);
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'menugrupo':
case 'menugrupo':
if (!isRG) return reply(`${NotRG}`)
sendBut(from,`ೋ────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────ೋ
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║𝙗𝙚𝙢 𝙫𝙞𝙣𝙙𝙤 𝙖𝙤 𝙢𝙚𝙪 𝙢𝙚𝙣𝙪
║ ${pushname}
║
║💎usuario normal💎
║
║🤖⋟Bot:「 ${NomeDoBot} 」
║🖤⋟Dono:「 ${NickDoDono} 」
║🗓⋟Data:「 ${data} 」
║🕛⋟Hora:「 ${hora} 」
║❗⋟ Prefix:「 ${prefix} 」
║💬⋟ Numero:「 wa.me/${NumeroDoDono} 」
║
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║    .⃟⃝.⃟⃝👥𝖌𝖗𝖚𝖕𝖔𝖘  .⃟⃝.⃟⃝📍.̶̷̲̅
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}ban [Marque-Msg]
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}limpa
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}voltar [Marque-Msg]
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}antilink
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}antifake
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}gpconfig
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}nomegp [Nome]
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}bemvindo
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}descgp [Descrição]
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}fotogp [Marque-Foto]
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}promover [Marque-Por-@]
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║.҈҈҈҈҈➺ ${prefix}rebaixar [Marque-Por-@]
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╰───────╮
║    .⃟⃝.⃟⃝👾 ZALTS BOT .⃟⃝.⃟⃝👾.̶̷̲̅
╰━────╮🕛.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈╭─────━
╭─────╯💫💫💫💫💫
╚┅═┅══⟮ .҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈.⃟⃝.⃟⃝.⃟⃝🌍.⃟⃝.⃟⃝.⃟⃝.҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈҈⟯══┅═┅═᳀`,`ola ${pushname} seja bem vindo ao menu do doctor bot`,
[
            {              
              buttonId: `.CRIADOR`,
              buttonText: {
                displayText:  `∘̥⃟💎CRIADOR∘̥⃟∘̥⃟🧊`,
              },
              type: 1,
            },
            {              
              buttonId: `.menulist`,
              buttonText: {
                displayText:  `∘̥⃟∘̥⃟🧊MENULIST∘̥⃟∘̥⃟🧊`,
              },
              type: 1
            },
          ]);
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'help':
if (!isRG) return reply(`${NotRG}`)
let fotomenu = fs.readFileSync('./zalts/logos/foto2.jpg')  
await lz.sendMessage(from, fotomenu, image, {quoted: selo3, caption: menuprincipal(prefix, pushname, hora, data, NomeDoBot, NickDoDono, NumeroDoDono)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
		case 'menulist':
if (!isRG) return reply(`${NotRG}`)
let submenu = lz.prepareMessageFromContent(from,{
  "listMessage": {
            "title": `DOCTOR BOT`,
            "description": ` DATA: ${data} \n HORA : ${hora} \n LISTA DE MENUS DO DOCTOR`,
            "buttonText": "𖥨ํ∘̥⃟⸽⃟⛧CLIQUE AQUI ⃢",
            "listType": "SINGLE_SELECT",
            "sections": [
              {
                "rows": [
                {
                    "title": '∘̥⃟∘̥⃟❄PING∘̥⃟∘̥⃟❄',
                    "rowId": `${prefix}ping`
                  },
                  {
                    "title": '∘̥⃟∘̥⃟🧿STICKER∘̥⃟∘̥⃟🧿',
                    "rowId": `${prefix}stickermenu`
                  },
                  {
                    "title": '∘̥⃟∘̥⃟⛧MENU∘̥⃟∘̥⃟⛧',
                    "rowId": `${prefix}menu`
                  },
                  {
                    //"title": '∘̥⃟∘̥⃟💎CREDITOS∘̥⃟∘̥⃟💎',
                    "rowId": `${prefix}creditos`
                  },
                  {
                    "title": '∘̥⃟∘̥⃟🧊MENULIST∘̥⃟∘̥⃟🧊',
                    "rowId": `${prefix}menulist`
                    },                 
                  {
                   // "title": '∘̥⃟∘̥⃟💙CREDITOS∘̥⃟∘̥⃟💙',
                    "rowId": `${prefix}creditos`
                    },
                  {
                    "title": '∘̥⃟∘̥⃟🌐MENUGRUP∘̥⃟∘̥⃟🌐',
                    "rowId": `${prefix}menugrupo`
                    }
                ]
              }
            ]                    
          }
}, {quoted: segundo, contextInfo: info})
lz.relayWAMessage(submenu)
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'git':
case 'gitdobot':
if (!isRG) return reply(`${NotRG}`)
let fotogt = fs.readFileSync('./zalts/logos/foto.jpg')  
await lz.sendMessage(from, fotogt, image, {quoted: selo2, caption: gitdobot(prefix)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'dono':
case 'Donk':
case 'Zalts':
case 'zalts':
case 'mydono':
if (!isRG) return reply(`${NotRG}`)
let fotodono = fs.readFileSync('./zalts/logos/zalts.jpg')  
await lz.sendMessage(from, fotodono, image, {quoted: selo2, caption: donodoninho(prefix)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'rg':
case 'registro':  
case 'registrar':  
registro.push(`${sender}`)
fs.writeFileSync('./zalts/funções/rg.json', JSON.stringify(registro))
sendBut(from,`
☑️ usuario registrado ☑️
nome: ${pushname} 🖋
Data:「 ${data} 」🗓
Hora:「 ${hora} 」🕛
seja bem vindo ao doctor bot ${pushname}
by: zalts
`,` ${pushname} escolha a baixo oq vc deseja`,
[
            {              
              buttonId: `.ping`,
              buttonText: {
                displayText:  `∘̥⃟❗PING∘̥⃟∘̥⃟📍`,
              },
              type: 1,
            },
            {              
              buttonId: `.menu`,
              buttonText: {
                displayText:  `∘̥⃟∘̥⃟⛧MENU∘̥⃟∘̥⃟⛧`,
              },
              type: 1,
            },
            {              
              buttonId: `.menulist`,
              buttonText: {
                displayText:  `∘̥⃟🧊MENULIST∘̥⃟∘̥⃟🧊`,
              },
              type: 1
            },
          ]);
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
/////////////////////// L o g o s \\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'pornhublogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome?')
teks = args.join(' ')
teks1 = teks.split("/")[0];
teks2 = teks.split("/")[1];
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/pornhub-logo?texto1=${teks1}&texto2=${teks2}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'glitchlogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome??')
teks = args.join(' ')
teks11 = teks.split("/")[0];
teks22 = teks.split("/")[1];
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/glitch2-logo?texto1=${teks11}&texto2=${teks22}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'harrypoterlogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/harrypotter-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'neon3d':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/neon3d-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'stonelogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/stone-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'futurologo':
case 'futurelogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/future-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'joker':
case 'jokerlogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/joker-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'cameralogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('onde esta o nome?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/cam-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////// S t i c k e r s \\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'tofoto':
case 'tofuton':
case 'toimg':
					if (!isQuotedSticker) return reply('marque um sticker')
					if (info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await lz.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(enviar.espere)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await lz.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							lz.sendMessage(from, buffer, image, {quoted: selo})
							fs.unlinkSync(ran)
						})
					}
					break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'figu':
case 'fig':
case 'f':
case 'figr':
case 'figur':
case 'figurinha':
case 'st':
case 'st':
case 'sticker':
case 's':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(enviar.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','doctor')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
lz.sendMessage(from, buffer, sticker, {quoted: ghast})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','doctor')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
lz.sendMessage(from, buffer, sticker, {quoted: ghast})
fs.unlinkSync(rano)
})
} else {
reply(`envie e marque uma foto ou video com no maximo 10 segundos manito`)
}
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'mt':
                if (!isGroupAdmins) return client.reply(from, msgs_texto.permissao.apenas_admin, id)
                var membrosGrupo = await client.getGroupMembers(groupId)
                var usuarioTexto = body.slice(4).trim()
                var respostaMarcar = (args.length > 1) ? criarTexto(msgs_texto.grupo.mt.resposta_titulo_variavel, usuarioTexto) : msgs_texto.grupo.mt.resposta_titulo_comum
                for(let membro of membrosGrupo){
                    respostaMarcar += criarTexto(msgs_texto.grupo.mt.resposta_itens, membro.id.split("@")[0])
                }
                respostaMarcar += `╚═〘 ${process.env.NOME_BOT.trim()}®〙`
                await client.sendTextWithMentions(from, respostaMarcar)
                break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'attp' :
case 'sttp' :
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o texto Mano?? \nExemplo: ${prefix}attp texto`)
try {
var TextoAttp = body.slice(5).trim()
reply(enviar.espere)
url = encodeURI(`https://lzmods-api.herokuapp.com/others/attp?texto=${TextoAttp}&apikey=lzmods`)
ResultadoAttp = await getBuffer(url)
lz.sendMessage(from, ResultadoAttp, sticker, { quoted: terceiro })
}
catch (e) {
reply("Error: Use apenas caracteres alfanumérico")
}
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'rename': 
case 'renome': 
case 'novoname': 
case '.': 
case 'nickman': 
case 'novonon': 
case 're':
if (!isQuotedSticker) return reply('📍Marque uma figurinha')  
var namaPackss = q.substring(0, q.indexOf('/') - 0)
var authorPackss = q.substring(q.lastIndexOf('/') + 1)
texto = body.slice(7)
reply(enviar.espere)
stiker_wm = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await lz.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
lz.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: quarto})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
/////////////////////// P l a y s \\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'play':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica?? \nExemplo: ${prefix}play rei lacoste`)
reply(enviar.espere)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp3?&musica=${q}&apikey=lzmods`)
let resultadoplay = `
MUSICA「 ${q} 」ENCONTRADA COM SUCESSO
📍Aguarde o Envio Do Audio...
❄Título : ${anu.resultado.titulo} ❄
❄ Canal : ${anu.resultado.canal} ❄
❄ Views : ${anu.resultado.views} ❄

⚠️não enviarei audios pesados⚠️`
buffer = await getBuffer(anu.resultado.thumb)
sendButImage(from,`${resultadoplay}`,
`by: zalts✺\nse não querer audio selecione abaixo oq deseja`, buffer,
[{buttonId:`.playdocumentokk ${anu.resultado.titulo}`, buttonText: {displayText: '📃DOCUMENTO 📄'}, type: 1},
{buttonId: `${prefix}playvideo ${anu.resultado.titulo}`, buttonText: {displayText: '🎥𝐕𝐢𝐝𝐞𝐨 📽'}, type:1}]);
let audee = await getBuffer(anu.resultado.download)
lz.sendMessage(from, audee, audio, {quoted: info, mimetype: 'audio/mp4'})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'playvideo':
if (!isRG) return reply(`${NotRG}`)
playvideo = args.join(' ')
reply(`
Aguarde o Envio Do Video...
Videos Muito Pesados Nao Serão Enviados.`)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp4?&musica=${q}&apikey=lzmods`)
let videomsc = await getBuffer(anu.resultado.download)
lz.sendMessage(from, videomsc, video, {quoted: selo, mimetype: 'video/mp4'})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'playdocumentokk':
if (!isRG) return reply(`${NotRG}`)
reply(`
Aguarde o Envio Do Documento...
Documentos Muito Pesados Nao Serão Enviados.`)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp3?&musica=${q}&apikey=lzmods`)
let audeb = await getBuffer(anu.resultado.download)
lz.sendMessage(from, audeb, document, {quoted: selo, mimetype: 'audio/mp3', filename: `${anu.resultado.titulo}.mp3`})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'playdoc':
case 'playdocumento':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica??? \nExemplo: ${prefix}playdoc rei lacoste`)
reply(enviar.espere)
playdoc = body.slice(8)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp3?&musica=${q}&apikey=lzmods`)
let resultadodoc = `
💎 a Musica「 ${q} 」Encontrada Com Sucesso💎
Aguarde o Envio Do Documento...
🌍Título : ${anu.resultado.titulo}
💫Canal : ${anu.resultado.canal}
🌏Views : ${anu.resultado.views}

Documentos Muito Pesados Nao Serão Enviados.`
let aude = await getBuffer(anu.resultado.download)
buffer = await getBuffer(anu.resultado.thumb)
lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultadodoc}`})
lz.sendMessage(from, aude, document, {quoted: info, mimetype: 'audio/mp3', filename: `${anu.resultado.titulo}.mp3`})
break
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
//◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆◇☆★☆★☆★☆◆
case 'play2':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica??? \nExemplo: ${prefix}play2 rei lacoste`)
play2txt = args.join(' ')
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${play2txt}&apikey=apiteam`)
let resultado3 = `
❄ Musica Encontrada Com Sucesso! ❄

☄️Título : ${anu.titulo}
☄️Canal : ${anu.canal}
☄️Views : ${anu.views}
☄️Lançada Em : ${anu.data}

Aguarde o Envio...
Audios Muito Pesadas Nao Serão Enviadas.`
result = await getBuffer(anu.url)
buffer = await getBuffer(anu.thumb)
lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultado3}`})
lz.sendMessage(from, result, audio, {quoted: info, mimetype: 'audio/mp4'})
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'playmp4':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica??? \nExemplo: ${prefix}playmp4 rei lacoste`)
reply(enviar.espere)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp4?&musica=${q}&apikey=lzmods`)
let resultadomp4 = `
💫「 ${q} 」sua musica foi encontrada com sucesso treinador
💙Aguarde o Envio...
🥶Título : ${anu.resultado.titulo}
🥶Canal : ${anu.resultado.canal}
🥶Views : ${anu.resultado.views}
🥶Lançada Em : ${anu.resultado.data_de_lançamento}


byzalts`
let resultt = await getBuffer(anu.url)
buffer = await getBuffer(anu.thumb)
lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultadomp4}`})
lz.sendMessage(from, resultt, video, {quoted: selo, mimetype: 'video/mp4'})
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'ytmp4':
if (!isRG) return reply(`${NotRG}`)
if (!q) return reply(`exemplo: ${prefix}ytmp4 [ Link Do Video ]`)
reply(enviar.espere)
ase = await y2mateV(q).catch(e => {
reply('Erro')
})
vidionye = await getBuffer(ase[0].link)
await lz.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: selo})
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'play3':
if (!isRG) return reply(`${NotRG}`)
reply(enviar.espere)
play3 = args.join(' ')
send = await fetchJson(`https://kauan-ofc.herokuapp.com/api/play?musica=${play3}`) 
let ku = `
💎Musica Encontrada Com Sucesso💎

🌍Titulo: ${send.titulo}
🌎Tamanho: ${send.tamanho}
🌏Visualizações: ${send.views}
🌠Likes: ${send.likes}`
img = await getBuffer(send.link_image)
lz.sendMessage(from, img, image, {quoted: selo, caption: ku})
aud = await getBuffer(send.link_musica)
lz.sendMessage(from, aud, audio, {quoted: selo, mimetype: 'audio/mp4'})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
///////////////////  G r u p o s \\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'Clea':
case 'Clear':
case 'clea':
case 'clear':
case 'limpa':
case 'limpar':  
case 'limpeza':
case 'Limpa':
case 'Limpar':  
case 'Limpeza':
case 'limpar': 
registro.push(`${sender}`)
fs.writeFileSync('./zalts/funções/rg.json', JSON.stringify(registro))
sendBut(from,`
\n\\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
`,` seu chat foi limpo por mim ${NomeDoBot}`,
[
            {              
              buttonId: `@null`,
              buttonText: {
                displayText:  `❤OBRIGADO DOUTOR🌟`,
              },
              type: 1
            },
          ]);
break
case 'promover': 
case 'promote':
case 'ademir':
  if (!isGroup) return reply(enviar.apenas.grupos)
  if (!isGroupAdmins) return reply(enviar.bad.adm)
  if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
  const dlptu = body.slice(10)
  if (dlptu.length > 14)return reply(`Exemplo : ${prefix}promover @556699717091`) 
  if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  ytb = 'F\n'
  for (let _ of mentioned) {
  ytb += `@${_.split('@')[0]}\n`
  }
  mentions(from, mentioned, true)
  lz.groupRemove(from, mentioned)
  } else {
  mentions(`@${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
  lz.groupMakeAdmin(from, mentioned)
  }
  break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'listadmins':
  case 'listadmin':
    case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de administradores do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'gpconfigs':
case 'Gpconfigs':
case 'Gpconfig':
case 'Goconf':
case 'Gp':
case 'gpconfig':
case 'goconf':
case 'gp':
if (!isRG) return reply(`${NotRG}`)
buttons = [{buttonId: `.grupo f`,buttonText:{displayText: '❄ ҒᎬᏟᎻᎪᎡ ᏀᎡႮᏢϴ ❄🧊'},type:1},{buttonId:`.grupo a`,buttonText:{displayText:'💎 ᎪᏴᎡᏆᎡ ᏀᎡႮᏢϴ 💎'},type:1},{buttonId:`.ping`,buttonText:{displayText:' ∘̥⃟∘̥⃟📍PING∘∘̥⃟❗'},type:1}]

imageMsg = (await lz.prepareMessageMedia(fs.readFileSync(`./zalts/logos/gp.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./zalts/logos/foto.jpg`)})).imageMessage

ZALTS = `ola ${pushname} escolha a baixo oq o senhor ira fazer
`

buttonsMessage = {
contentText: ZALTS,
footerText: "se os botoes não aparecer use .gp f ou gp a \n ©   _*Copyright by Zalts*_  🧊", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await lz.prepareMessageFromContent(from,{buttonsMessage},{quoted: primeiro})
lz.relayWAMessage(prep)

lz.sendMessage(from, teks, text,{quoted: primeiro})
break
     
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'grupo':  
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(`SÓ EM GRUPOS`)
if (!isGroupAdmins) return reply(`VOCÊ PRECISA SER ADMINISTRADOR`)
if (!isBotGroupAdmins) return reply(`BOT PRECISA SER ADMINISTRADOR `)
if (args[0] === 'a') {
await lz.groupSettingChange(from, GroupSettingChange.messageSend, false)
reply(`🔓GRUPO ABERTO PARA TODOS COM SUCESSO `)
} else if (args[0] === 'f') {
await lz.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(` 🔒GRUPO FECHADO PARA ADMS COM SUCESSO`)
}				 
break 


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'antifake':
if (!isRG) return reply(`${NotRG}`)
buttons = [{buttonId: `.97345 0`,buttonText:{displayText: '❄ DESLIGAR ANTIFAKE❄'},type:1},{buttonId:`.97345 1`,buttonText:{displayText:'💎 ATIVA ANTIFAKE 💎'},type:1},{buttonId:`.ping`,buttonText:{displayText:' ∘̥⃟∘̥⃟📍PING∘∘̥⃟❗'},type:1}]

imageMsg = (await lz.prepareMessageMedia(fs.readFileSync(`./zalts/logos/antifake.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./zalts/logos/foto.jpg`)})).imageMessage

ZALTS = `ola ${pushname} escolha a baixo oq o senhor ira fazer
`

buttonsMessage = {
contentText: ZALTS,
footerText: "se os botoes não aparecer use .antifake 1 ou .antifake 0 \n ©   _*Copyright by Zalts*_  🧊", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await lz.prepareMessageFromContent(from,{buttonsMessage},{quoted: segundo})
lz.relayWAMessage(prep)

lz.sendMessage(from, teks, text,{quoted: segundo})
break
case '97345':
if (!isRG) return reply(`${NotRG}`)
try {
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiFake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./zalts/funções/antis/antifake.json', JSON.stringify(antifake))
reply('📍Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./zalts/funções/antis/antifake.json', JSON.stringify(antifake))
reply('📍Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('📍Deu erro, tente novamente :/')
}
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'antilink':
if (!isRG) return reply(`${NotRG}`)
sendBut(from,`ESCOLHA OQ O SENHOR IRA FAZER`,`se os botões não aparecer escreve o comando novamente com 1 ou 0 na frente ${NomeDoBot}`,
[
            {              
              buttonId: `.67456 0`,
              buttonText: {
                displayText:  `DESLIGAR ANTILINK`,
              },
              type: 1,
            },
            {              
              buttonId: `.67456 1`,
              buttonText: {
                displayText:  `ATIVA ANTILINK`,
              },
              type: 1
            },
          ]);
break
case '67456':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 ativa 0 desativa brow')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('ja ta ativado brow')
antilink.push(from)
fs.writeFileSync('./zalts/funções/antis/antilink.json', JSON.stringify(antilink))
reply('📍VOCÊ ATIVOU COM SUCESSO✅')
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('Ja esta desativado ')
pesquisar = from
processo = antilink.indexOf(pesquisar)
while(processo >= 0){
antilink.splice(processo, 1)
processo = antilink.indexOf(pesquisar)
}
fs.writeFileSync('./zalts/funções/antis/antilink.json', JSON.stringify(antilink))
reply('📍VOCÊ DESATIVOU COM SUCESSO✅')
} else {
reply('1 ativa 0 desativa')
}
  break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'hidetag':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!groupAdmins) return reply(enviar.bad.adm)
var value = body.slice(9)
var group = await lz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: info
}
lz.sendMessage(from, options, text)
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'nomegp': 
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
lzmods = args.join(" ")
lz.groupUpdateSubject(from, `${lzmods}`)
lz.sendMessage(from, '📍Nome Do Grupo Alterado Com Sucesso!', text, {quoted: selo})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isRG) return reply(`${NotRG}`)
                   if (!isGroup) return reply(enviar.apenas.grupos)
					linkgc = await lz.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink do grupo ${groupName}`
					lz.sendMessage(from, yeh, text, { quoted: selo })
					break
					
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'redefinir':
case 'redefinirlink':
case 'redefinição':
         if (!isRG) return reply(`${NotRG}`)
          if (!isGroup) return reply(enviar.apenas.grupos)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         lz.query({json, expect200: true})
          reply('Redefinir o link do grupo com sucesso')
         break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'descgp':  
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
desc = args.join(" ")
lz.groupUpdateDescription(from, `${desc}`)
lz.sendMessage(from, '📍descrição do grupo alterada com sucesso✅', text, {quoted: selo})
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'fotogp':   
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
if (!isQuotedImage) return reply(`Use: ${prefix}fotogp <Marque uma foto>`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
const media = await lz.downloadAndSaveMediaMessage(ftgp)
await lz.updateProfilePicture(from, media)
reply(`📍Foto do grupo alterada com sucesso `) 
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'ban':  
  if (!isGroup) return reply(enviar.apenas.grupos)
  if (!isGroupAdmins) return reply(enviar.bad.adm)
  if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
  if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque uma mensagem')
  if (info.message.extendedTextMessage.contextInfo.participant == NumeroDoDono) return reply('Não posso remover meu dono.')
  if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('ei ei ei q merda e essa kkkkk')
  setTimeout(function() {}, 2000);
  if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
  entah = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (exe1.length > 1) {
  var M_exe = []
  for (let cut of exe1) {
  M_exe.push(cut)
  }
  lz.groupRemove(from, M_exe)
  } else {
  lz.groupRemove(from, [exe1[0]])
  }
  } else {
  exe1 = info.message.extendedTextMessage.contextInfo.participant
  lz.groupRemove(from, [exe1])
  }
  break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'add':
case 'adicionar':
case 'voltar':
case 'reviver':
  if (!isGroup) return reply(enviar.apenas.grupos)
  if (!isGroupAdmins) return reply(enviar.bad.adm)
  if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
  if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque uma mensagem')
  if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('ei ei ei q merda e essa kkkkk')
  setTimeout(function() {}, 2000);
  if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
  entah = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (exe1.length > 1) {
  var M_exe = []
  for (let cut of exe1) {
  M_exe.push(cut)
  }
  lz.groupAdd(from, M_exe)
  } else {
  lz.groupAdd(from, [exe1[0]])
  }
  } else {
  exe1 = info.message.extendedTextMessage.contextInfo.participant
  lz.groupAdd(from, [exe1])
  }
  break

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'bot':
reply("fala")
break



//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'add':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
if (args.length < 1) return reply('📍quem vc quer que eu adicione?')
if (args[0].startsWith('08')) return reply('📍Use o código do país')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
lz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('📍Falha ao adicionar alvo, talvez porque esteja privado')
}
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'Banir':  
case 'Bani':  
case 'bani':  
case 'banir':  
case 'kick':  
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
const dltp = body.slice(6)
if (dltp.length > 14)return reply(`Exemplo : ${prefix}kick @55439220420`) 
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o alguem por @ que você quer remover do grupo!') 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝙰𝙻𝚅𝙾 𝚁𝙴𝙼𝙾𝚅𝙸𝙳𝙾 𝙲𝙾𝙼 𝚂𝚄𝙲𝙴𝚂𝚂𝙾\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
lz.groupRemove(from, mentioned)
} else {
mentions(`USUARIO REMOVIDO`, mentioned, true)
lz.groupRemove(from, mentioned)
}
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'admins':
case 'ademiros':  
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
teks = `Lista de admin do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'simi':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('📍Não sei ler o que não existe 🐤 (converse cmg)')
lz.sendMessage(from, `${anu.success} 🐤`, text, {quoted: info})
} catch {
reply("📍erro ao executar comando")
}
break

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'marca':
case 'marcar':
case 'Marca':
case 'Marcar':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*# ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'Marcar2':
case 'marcar2':
case 'Marca2':
case 'marca2':
if (!isRG) return reply(`${NotRG}`)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
lz.sendMessage(from, teks, text, {detectLinks: false, quoted: info})
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'ler':
if (!isRG) return reply(`${NotRG}`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Só uma foto mano')
}
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'ocr':
if (!isRG) return reply(`${NotRG}`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('marque uma foto  ')
}
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'ling':
if (!isRG) return reply(`${NotRG}`)
lzdomina = `  
'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
lz.sendMessage(from, lzdomina, text, {quoted: selo})
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'letra':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('📍qual é o nome da musica?')
anu = await fetchJson(`http://api-exteam.herokuapp.com/api/music/lirik?search=${q}&apikey=${ExApiKey}`)
let xj = `${anu.result}`
await lz.sendMessage(from, xj, text, {quoted: selo2})
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'traduzir':
if (!isRG) return reply(`${NotRG}`)
if (args.length == 0) return reply(`Exemplo: ${prefix + command} texto que você quer traduzir/codigo da linguagem, Clique No botão abaixo para saber como usar o traduzir e saber os códigos das linguagens`)
txt = body.slice(9)
teks1 = txt.split("/")[0];
teks2 = txt.split("/")[1];
anu = await fetchJson(`https://lzmods-api.herokuapp.com/others/tradutor?texto=${teks1}&linguagem=${teks2}&apikey=estreia`)
const resultado = `${anu.resultado}`
sendBut(from,`Palavra Original: ${teks1}\nPalavra Traduzida: ${resultado}\nLinguagem: ${teks2}`,`${NomeDoBot}`,
[
            {              
              buttonId: `.helptdz`,
              buttonText: {
                displayText:  ` ❄COMO USAR 💎`,
              },
              type: 1,},]);
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'helptdz':
if (!isRG) return reply(`${NotRG}`)
const helptdzz = `Exemplo: ${prefix}traduzir texto que você quer traduzir/codigo da linguagem, envie ${prefix}idiomas para saber os codigos das linguagens disponíveis ou clique no botão abaixo`
sendBut(from,`${helptdzz}`,`${NomeDoBot}`,
[
            {              
              buttonId: `.ling`,
              buttonText: {
                displayText:  `💎 CODIGO DE LINGUAGENS 💎`,
              },
              type: 1,},]);
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
                





//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'simih':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativado ')
samih.push(from)
fs.writeFileSync('./zalts/funções/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo ✔️')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sucesso ao desativar o modo simi neste grupo de grupo ✔️')
} else {
reply('1 para habilitar, 0 para desabilitar ')
}
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'welcome':
case 'bemvindo':
if (!isRG) return reply(`${NotRG}`)
sendBut(from,`ESCOLHA OQ O SENHOR IRA FAZER`,` se os botões não aparecer escreve o comando novamente com 1 ou 0 na frente ${NomeDoBot}`,
[
            {              
              buttonId: `.57345 0`,
              buttonText: {
                displayText:  `DESLIGAR BEM VINDO`,
              },
              type: 1,
            },
            {              
              buttonId: `.57345 1`,
              buttonText: {
                displayText:  `ATIVA BEM VINDO`,
              },
              type: 1
            },
          ]);
break
case '57345':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('*🟦*')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('já esta ativo')
welkom.push(from)
fs.writeFileSync('./zalts/funções/welkom.json', JSON.stringify(welkom))
reply('📍Ativado com sucesso o recurso Boas vindas do grupo✔️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./zalts/funções/welkom.json', JSON.stringify(welkom))
reply('Desativar com sucesso o recurso de boas-vindas neste grupo ✔️')
} else {
reply('welcome 1 para habilitar,welcome 0 para desabilitar')
}
break


//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\


case 'clone':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('📍Marque o alvo que você deseja clonar')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('📌')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await lz.getProfilePicture(id)
buffer = await getBuffer(pp)
lz.updateProfilePicture(botNumber, buffer)
mentions(`❄obrigado pela nova foto❄ `, [jid], true)
} catch (e) {
reply('falhou, talvez a foto do amigo seja privada')
}
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////JOGOS\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'gay':				 
					const gay =['Você é 0% gay ',' Você é 1% gay ',' Você é 2% gay ',' Você é 3% gay ',' Você é 4% gay ',' Você é 5% gay ',' Você é 6% gay ',' Você é 7% gay ',' Você é 8% gay ',' Você é 9% gay ',' Você é 10% gay ',' Você é 11% gay ',' Você é 12% gay ',' Você é 13% gay ',' Você é 14% gay ',' Você é 15% gay ',' Você é 16% gay ',' Você é 17% gay ',' Você é 18% gay ' , 'Você é 19% gay', 'Você é 20% gay', 'Você é 21% gay', 'Você é 22% gay', 'Você é 23% gay', 'Você é 24% gay', ' Você é 25% gay ',' Você é 26% gay ',' Você é 27% gay ',' Você é 28% gay ',' Você é 29% gay ',' Você é 30% gay ',' Você é 31% gay ',' Você é 32% gay ',' Você é 33% gay ',' Você é 34% gay ',' Você é 35% gay ',' Você é 36% gay ',' Você é 37% gay ',' Você é 38% gay ',' Você é 39% gay ',' Você é 40% gay ',' Você é 41% gay ',' Você é 42% gay ',' Você é 43% gay ' , 'Você é 44% gay', 'Você é 45% gay', 'Você é 46% gay', 'Você é 47% gay', 'Você é 48% gay', 'Você é 49% gay', ' Você é 50% gay ',' Você é 51% gay ',' Você é 52% gay ',' Você é 53% gay ',' Você é 54% gay ',' Você é 55% gay ',' Você é 56% gay ',' Você é 57% gay ',' Você é 58% gay ',' Você tem 59 anos % gay ',' Você é 60% gay ',' Você é 61% gay ',' Você é 62% gay ',' Você é 63% gay ',' Você é 64% gay ',' Você é 65% gay ',' Você é 66% gay ',' Você é 67% gay ',' Você é 68% gay ',' Você é 69% gay ',' Você é 70% gay ',' Você é 71% gay ', 'Você é 72% gay', 'Você é 73% gay', 'Você é 74% gay', 'Você é 75% gay', 'Você é 76% gay', 'Você é 77% gay', 'Você são 78% gays ',' Você é 79% gay ',' Você é 80% gay ',' Você é 81% gay ',' Você é 82% gay ',' Você é 83% gay ',' Você tem 84 anos % gay ',' Você é 85% gay ',' Você é 86% gay ',' Você é 87% gay ',' Você é 88% gay ',' Você é 89% gay ',' Você é 90% gay ',' Você é 91% gay ',' Você é 92% gay ',' Você é 93% gay ',' Você é 94% gay ',' Você é 95% gay ',' Você é 96% gay ', 'Você é 97% gay', 'Você é 98% gay', 'Você é 99% gay', 'Você é 100% gay']									
					const gai = gay[Math.floor(Math.random() * gay.length)]
					wiw = fs.readFileSync(`./zalts/logos/gay.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo4, caption: '*Quão gay você é*\n\n'+ gai })									
                    break
                    
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                    
                    
case 'puta':			 
					const puuta =['Você é 0% prostituta ',' Você é 1% prostituta ',' Você é 88% prostituta ',' Você é 89% prostituta ',' Você é 90% prostituta ',' Você é 91% prostituta ',' Você é 92% prostituta ',' Você é 93% prostituta ',' Você é 94% prostituta ',' Você é 95% prostituta ',' Você é 96% prostituta ',' Você é 97% prostituta ',' Você é 98% prostituta ',' Você é 99% prostituta ',' Você é 100% prostituta ',' Você é infinitamente uma prostituta!']									
					const gaii = puuta[Math.floor(Math.random() * puuta.length)]
					wiw = fs.readFileSync(`./zalts/logos/puta.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo5, caption: '*Quão puta você é*\n\n'+ gaii })					
                    break
                    
 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                 

case 'lesbi':		
                    const cuu =['Eres 0% Lesbi' , 'Eres 1% Lesbi' , 'Eres 2% Lesbi' , 'Eres 3% Lesbi' , 'Eres 4% Lesbi' , 'Eres 5% Lesbi' , 'Eres 6% Lesbi' , 'Eres 7% Lesbi' , 'Eres 8% Lesbi' , 'Eres 9% Lesbi' , 'Eres 10% Lesbi' , 'Eres 11% Lesbi' , 'Eres 12% Lesbi' , 'Eres 13% Lesbi' , 'Eres 14% Lesbi' , 'Eres 15% Lesbi' , 'Eres 16% Lesbi' , 'Eres 17% Lesbi' , 'Eres 18% Lesbi' , 'Eres 19% Lesbi' , 'Eres 20% Lesbi' , 'Eres 21% Lesbi' , 'Eres 22% Lesbi' , 'Eres 23% Lesbi' , 'Eres 24% Lesbi' , 'Eres 25% Lesbi' , 'Eres 26% Lesbi' , 'Eres 27% Lesbi' , 'Eres 28% Lesbi' , 'Eres 29% Lesbi' , 'Eres 30% Lesbi' , 'Eres 31% Lesbi' , 'Eres 32% Lesbi' , 'Eres 33% Lesbi' , 'Eres 34% Lesbi' , 'Eres 35% Lesbi' , 'Eres 36% Lesbi' , 'Eres 37% Lesbi' , 'Eres 38% Lesbi' , 'Eres 39% Lesbi' , 'Eres 40% Lesbi' , 'Eres 41% Lesbi' , 'Eres 42% Lesbi' , 'Eres 43% Lesbi' , 'Eres 44% Lesbi' , 'Eres 45% Lesbi' , 'Eres 46% Lesbi' , 'Eres 47% Lesbi' , 'Eres 48% Lesbi' , 'Eres 49% Lesbi' , 'Eres 50% Lesbi' , 'Eres 51% Lesbi' , 'Eres 52% Lesbi' , 'Eres 53% Lesbi' , 'Eres 54% Lesbi' , 'Eres 55% Lesbi' , 'Eres 56% Lesbi' , 'Eres 57% Lesbi' , 'Eres 58% Lesbi' , 'Eres 59% Lesbi' , 'Eres 60% Lesbi' , 'Eres 61% Lesbi' , 'Eres 62% Lesbi' , 'Eres 63% Lesbi' , 'Eres 64% Lesbi' , 'Eres 65% Lesbi' , 'Eres 66% Lesbi' , 'Eres 67% Lesbi' , 'Eres 68% Lesbi' , 'Eres 69% Lesbi' , 'Eres 70% Lesbi' , 'Eres 71% Lesbi' , 'Eres 72% Lesbi' , 'Eres 73% Lesbi' , 'Eres 74% Lesbi' , 'Eres 75% Lesbi' , 'Eres 76% Lesbi' , 'Eres 77% Lesbi' , 'Eres 78% Lesbi' , 'Eres 79% Lesbi' , 'Eres 80% Lesbi' , 'Eres 81% Lesbi' , 'Eres 82% Lesbi' , 'Eres 83% Lesbi' , 'Eres 84% Lesbi' , 'Eres 85% Lesbi' , 'Eres 86% Lesbi' , 'Eres 87% Lesbi' , 'Eres 88% Lesbi' , 'Eres 89% Lesbi' , 'Eres 90% Lesbi' , 'Eres 91% Lesbi' , 'Eres 92% Lesbi' , 'Eres 93% Lesbi' , 'Eres 94% Lesbi' , 'Eres 95% Lesbi' , 'Eres 96% Lesbi' , 'Eres 97% Lesbi' , 'Eres 98% Lesbi' , 'Eres 99% Lesbi' , 'Eres 100% Lesbi']														
                	const rii = cuu[Math.floor(Math.random() * cuu.length)]
					wnw = fs.readFileSync(`./zalts/logos/lesbi.jpg`)						
					lz.sendMessage(from, wnw, image, { caption: '*Quão lesbica você é*\n\n'+ rii, quoted: selo6 })					
                    break  
                    
 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                   

case 'corno':			 
					const coorno =['Você é 0% corno ',' Você é 1% corno ',' Você é 88% corno ',' Você é 89% corno ',' Você é 90% corno ',' Você é 91% corno ',' Você é 92% corno ',' Você é 93% corno ',' Você é 94% corno ',' Você é 95% corno ',' Você é 96% corno ',' Você é 97% corno ',' Você é 98% corno ',' Você é 99% corno ',' Você é 100% corno ',' Você é infinitamente um corno!']									
					const corno = coorno[Math.floor(Math.random() * coorno.length)]
					wiw = fs.readFileSync(`./zalts/logos/corno.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo7, caption: '*Quão corno você é*\n\n'+ corno })					
                    break
                    
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                    

 case 'corna':			 
					const coorna =['Você é 0% corna ',' Você é 1% corna ',' Você é 88% corna ',' Você é 89% corna ',' Você é 90% corna ',' Você é 91% corna ',' Você é 92% corna ',' Você é 93% corna ',' Você é 94% corna ',' Você é 95% corna ',' Você é 96% corna ',' Você é 97% corna ',' Você é 98% corna ',' Você é 99% corna ',' Você é 100% corna ',' Você é infinitamente uma corna!']									
					const corna = coorna[Math.floor(Math.random() * coorna.length)]
					wiw = fs.readFileSync(`./zalts/logos/corna.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo8, caption: '*Quão corna você é*\n\n'+ corna })					
                    break
                    
 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\               

case 'hetero':			 
					const heetero =['Você é 0% hetero ',' Você é 1% hetero ',' Você é 88% hetero ',' Você é 89% hetero ',' Você é 90% hetero ',' Você é 91% hetero ',' Você é 92% hetero ',' Você é 93% hetero ',' Você é 94% hetero ',' Você é 95% hetero ',' Você é 96% hetero ',' Você é 97% hetero ',' Você é 98% hetero ',' Você é 99% hetero ',' Você é 100% hetero ',' Você é infinitamente um hetero!']									
					const hetero = heetero[Math.floor(Math.random() * heetero.length)]
					wiw = fs.readFileSync(`./zalts/logos/hetero.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo9, caption: '*Quão hetero você é*\n\n'+ hetero })					
                    break  

 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\ 

case 'gostosa':			 
					const gooostosa =['Você é 0% gostosa ',' Você é 1% gostosa ',' Você é 88% gostosa ',' Você é 89% gostosa ',' Você é 90% gostosa ',' Você é 91% gostosa ',' Você é 92% gostosa ',' Você é 93% gostosa ',' Você é 94% gostosa ',' Você é 95% gostosa ',' Você é 96% gostosa ',' Você é 97% gostosa ',' Você é 98% gostosa ',' Você é 99% gostosa ',' Você é 100% gostosa ',' Você é infinitamente uma gostosa!']									
					const gostosa = gooostosa[Math.floor(Math.random() * gooostosa.length)]
					wiw = fs.readFileSync(`./zalts/logos/gostosa.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo10, caption: '*Quão gostosa você é*\n\n'+ gostosa })					
                    break 

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\ 

case 'gostoso':			 
					const gooostoso =['Você é 0% gostoso ',' Você é 1% gostoso ',' Você é 88% gostoso ',' Você é 89% gostoso ',' Você é 90% gostoso ',' Você é 91% gostoso ',' Você é 92% gostoso ',' Você é 93% gostoso ',' Você é 94% gostoso ',' Você é 95% gostoso ',' Você é 96% gostoso ',' Você é 97% gostoso ',' Você é 98% gostoso ',' Você é 99% gostoso ',' Você é 100% gostoso ',' Você é infinitamente um gostoso!']									
					const gostoso = gooostoso[Math.floor(Math.random() * gooostoso.length)]
					wiw = fs.readFileSync(`./zalts/logos/gostoso.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo11, caption: '*Quão gostoso você é*\n\n'+ gostoso })					
                    break 
                    
 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                   

case 'chato':			 
					const chaato =['Você é 0% chato ',' Você é 1% chato ',' Você é 88% chato ',' Você é 89% chato ',' Você é 90% chato ',' Você é 91% chato ',' Você é 92% chato ',' Você é 93% chato ',' Você é 94% chato ',' Você é 95% chato ',' Você é 96% chato ',' Você é 97% chato ',' Você é 98% chato ',' Você é 99% chato ',' Você é 100% chato ',' Você é infinitamente um chato!']									
					const chato = chaato[Math.floor(Math.random() * chaato.length)]
					wiw = fs.readFileSync(`./zalts/logos/chato.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo12, caption: '*Quão chato você é*\n\n'+ chato })					
                    break  

  //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\ 

case 'chata':			 
					const chaata =['Você é 0% chata ',' Você é 1% chata ',' Você é 88% chata ',' Você é 89% chata ',' Você é 90% chata ',' Você é 91% chata ',' Você é 92% chata ',' Você é 93% chata ',' Você é 94% chata ',' Você é 95% chata ',' Você é 96% chata ',' Você é 97% chata ',' Você é 98% chata ',' Você é 99% chata ',' Você é 100% chata ',' Você é infinitamente uma chata!']									
					const chata = chaata[Math.floor(Math.random() * chaata.length)]
					wiw = fs.readFileSync(`./zalts/logos/chata.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo13, caption: '*Quão chata você é*\n\n'+ chata })					
                    break   

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\ 

case 'feio':			 
					const feioo =['Você é 0% feio ',' Você é 1% feio ',' Você é 88% feio ',' Você é 89% feio ',' Você é 90% feio ',' Você é 91% feio ',' Você é 92% feio ',' Você é 93% feio ',' Você é 94% feio ',' Você é 95% feio ',' Você é 96% feio ',' Você é 97% feio ',' Você é 98% feio ',' Você é 99% feio ',' Você é 100% feio ',' Você é infinitamente um feio!']									
					const feio = feioo[Math.floor(Math.random() * feioo.length)]
					wiw = fs.readFileSync(`./zalts/logos/feio.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo14, caption: '*Quão feio você é*\n\n'+ feio })					
                    break
                    
 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                   
                    
case 'feia':			 
					const feiaa =['Você é 0% feia ',' Você é 1% feia ',' Você é 88% feia ',' Você é 89% feia ',' Você é 90% feia ',' Você é 91% feia ',' Você é 92% feia ',' Você é 93% feia ',' Você é 94% feia ',' Você é 95% feia ',' Você é 96% feia ',' Você é 97% feia ',' Você é 98% feia ',' Você é 99% feia ',' Você é 100% feia ',' Você é infinitamente uma feia!']									
					const feia = feiaa[Math.floor(Math.random() * feiaa.length)]
					wiw = fs.readFileSync(`./zalts/logos/feia.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo15, caption: '*Quão feia você é*\n\n'+ feia })					
                    break  

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\ 

case 'cachorro':			 
					const cachorroo =['Você é 0% cachorro ',' Você é 1% cachorro ',' Você é 88% cachorro ',' Você é 89% cachorro ',' Você é 90% cachorro ',' Você é 91% cachorro ',' Você é 92% cachorro ',' Você é 93% cachorro ',' Você é 94% cachorro ',' Você é 95% cachorro ',' Você é 96% cachorro ',' Você é 97% cachorro ',' Você é 98% cachorro ',' Você é 99% cachorro ',' Você é 100% cachorro ',' Você é infinitamente um cachorro!']									
					const cachorro = cachorroo[Math.floor(Math.random() * cachorroo.length)]
					wiw = fs.readFileSync(`./zalts/logos/cachorro.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo16, caption: '*Quão cachorro você é*\n\n'+ cachorro })					
                    break 

 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

 case 'cachorra':			 
					const cachorraa =['Você é 0% cachorra ',' Você é 1% cachorra ',' Você é 88% cachorra ',' Você é 89% cachorra ',' Você é 90% cachorra ',' Você é 91% cachorra ',' Você é 92% cachorra ',' Você é 93% cachorra ',' Você é 94% cachorra ',' Você é 95% cachorra ',' Você é 96% cachorra ',' Você é 97% cachorra ',' Você é 98% cachorra ',' Você é 99% cachorra ',' Você é 100% cachorra ',' Você é infinitamente uma cachorra!']									
					const cachorra = cachorraa[Math.floor(Math.random() * cachorraa.length)]
					wiw = fs.readFileSync(`./zalts/logos/cachorra.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo17, caption: '*Quão cachorra você é*\n\n'+ cachorra })					
                    break  

 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'otario':			 
					const otarioo =['Você é 0% otario ',' Você é 1% otario ',' Você é 88% otario ',' Você é 89% otario ',' Você é 90% otario ',' Você é 91% otario ',' Você é 92% otario ',' Você é 93% otario ',' Você é 94% otario ',' Você é 95% otario ',' Você é 96% otario ',' Você é 97% otario ',' Você é 98% otario ',' Você é 99% otario ',' Você é 100% otario ',' Você é infinitamente um otario!']									
					const otario = otarioo[Math.floor(Math.random() * otarioo.length)]
					wiw = fs.readFileSync(`./zalts/logos/otario.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo18, caption: '*Quão otario você é*\n\n'+ otario })					
                    break

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\ 
                    
 case 'otaria':			 
					const otariaa =['Você é 0% otaria ',' Você é 1% otaria ',' Você é 88% otaria ',' Você é 89% otaria ',' Você é 90% otaria ',' Você é 91% otaria ',' Você é 92% otaria ',' Você é 93% otaria ',' Você é 94% otaria ',' Você é 95% otaria ',' Você é 96% otaria ',' Você é 97% otaria ',' Você é 98% otaria ',' Você é 99% otaria ',' Você é 100% otaria ',' Você é infinitamente uma otaria!']									
					const otaria = otariaa[Math.floor(Math.random() * otariaa.length)]
					wiw = fs.readFileSync(`./zalts/logos/otaria.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo19, caption: '*Quão otaria você é*\n\n'+ otaria })					
                    break 
                    
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                    

case 'linda':			 
					const lindaa =['Você é 0% linda ',' Você é 1% linda ',' Você é 88% linda ',' Você é 89% linda ',' Você é 90% linda ',' Você é 91% linda ',' Você é 92% linda ',' Você é 93% linda ',' Você é 94% linda ',' Você é 95% linda ',' Você é 96% linda ',' Você é 97% linda ',' Você é 98% linda ',' Você é 99% linda ',' Você é 100% linda ',' Você é infinitamente uma linda!']									
					const linda = lindaa[Math.floor(Math.random() * lindaa.length)]
					wiw = fs.readFileSync(`./zalts/logos/linda.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo20, caption: '*Quão linda você é*\n\n'+ linda })					
                    break
                    
 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\     

case 'lindo':			 
					const lindoo =['Você é 0% lindo ',' Você é 1% lindo ',' Você é 88% lindo ',' Você é 89% lindo ',' Você é 90% lindo ',' Você é 91% lindo ',' Você é 92% lindo ',' Você é 93% lindo ',' Você é 94% lindo ',' Você é 95% lindo ',' Você é 96% lindo ',' Você é 97% lindo ',' Você é 98% lindo ',' Você é 99% lindo ',' Você é 100% lindo ',' Você é infinitamente um lindo!']									
					const lindo = lindoo[Math.floor(Math.random() * lindoo.length)]
					wiw = fs.readFileSync(`./zalts/logos/lindo.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo21, caption: '*Quão lindo você é*\n\n'+ lindo })					
                    break 

 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'bonito':			 
					const bonitoo =['Você é 0% bonito ',' Você é 1% bonito ',' Você é 88% bonito ',' Você é 89% bonito ',' Você é 90% bonito ',' Você é 91% bonito ',' Você é 92% bonito ',' Você é 93% bonito ',' Você é 94% bonito ',' Você é 95% bonito ',' Você é 96% bonito ',' Você é 97% bonito ',' Você é 98% bonito ',' Você é 99% bonito ',' Você é 100% bonito ',' Você é infinitamente um bonito!']									
					const bonito = bonitoo[Math.floor(Math.random() * bonitoo.length)]
					wiw = fs.readFileSync(`./zalts/logos/bonito.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo22, caption: '*Quão bonito você é*\n\n'+ bonito })					
                    break

 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

case 'bonita':			 
					const bonitaa =['Você é 0% bonita ',' Você é 1% bonita ',' Você é 88% bonita ',' Você é 89% bonita ',' Você é 90% bonita ',' Você é 91% bonita ',' Você é 92% bonita ',' Você é 93% bonita ',' Você é 94% bonita ',' Você é 95% bonita ',' Você é 96% bonita ',' Você é 97% bonita ',' Você é 98% bonita ',' Você é 99% bonita ',' Você é 100% bonita ',' Você é infinitamente uma bonita!']									
					const bonita = bonitaa[Math.floor(Math.random() * bonitaa.length)]
					wiw = fs.readFileSync(`./zalts/logos/bonita.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo23, caption: '*Quão bonita você é*\n\n'+ bonita })					
                    break  

 //◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'legal':			 
					const legalll =['Você é 0% legal',' Você é 1% legal',' Você é 88% legal',' Você é 89% legal',' Você é 90% legal',' Você é 91% legal',' Você é 92% legal',' Você é 93% legal',' Você é 94% legal',' Você é 95% legal',' Você é 96% legal',' Você é 97% legal',' Você é 98% legal',' Você é 99% legal',' Você é 100% legal',' Você é infinitamente legal!']									
					const legal= legalll[Math.floor(Math.random() * legalll.length)]
					wiw = fs.readFileSync(`./zalts/logos/legal.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo24, caption: '*Quão legalvocê é*\n\n'+ legal})					
                    break                    
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\                
case 'cuzao':			 
					const cuzaooo =['Você é 0% cuzao',' Você é 1% cuzao',' Você é 88% cuzao',' Você é 89% cuzao',' Você é 90% cuzao',' Você é 91% cuzao',' Você é 92% cuzao',' Você é 93% cuzao',' Você é 94% cuzao',' Você é 95% cuzao',' Você é 96% cuzao',' Você é 97% cuzao',' Você é 98% cuzao',' Você é 99% cuzao',' Você é 100% cuzao',' Você é infinitamente um cuzao!']									
					const cuzao= cuzaooo[Math.floor(Math.random() * cuzaooo.length)]
					wiw = fs.readFileSync(`./zalts/logos/cuzao.jpg`)
					lz.sendMessage(from, wiw, image, { quoted: selo25, caption: '*Quão cuzaovocê é*\n\n'+ cuzao})					
                    break           
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////CREDITOS\\\\\\\\\\\\\\\
case 'creditos':
if (!isRG) return reply(`${NotRG}`)
sendBut(from,`CREDITOS`,`${NomeDoBot}`,
[
            {              
              buttonId: `.@null`,
              buttonText: {
                displayText:  `CREDITOS A DAYANE \n insta @dayane_dsouza`,
              },
              type: 1,
            },
            {              
              buttonId: `@null`,
              buttonText: {
                displayText:  `CREDITOS AO ZALTS \n insta @zalts_nodya`,
              },
              type: 1
            },
          ]);
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////DONO\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'aviso':
					lz.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('onde está o texto?')
					anu = await lz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await lz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							lz.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`sucesso de transmissão${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await lz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							lz.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`sucesso de transmissão ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await lz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							lz.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`sucesso de transmissão ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`sucesso de transmissão:\n${body.slice(4)}`)
					}
					break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'desliga':
					case 'clearchat':
                    if (!isOwner) return reply(ownerB(ownerName))
                    anu = await lz.chats.all()
                    list_chat = await lz.chats.all()
                    for (let chat of list_chat) {
                        lz.modifyChat(chat.jid, "delete", {includeStarred: false})
                    }
                    reply("Chat limpo")
                    break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'totalchat':
const totalchqat = await lz.chats.all()
lz.sendMessage(from, `*Total Chat* : *${totalchqat.length}*` , text, {quoted: selo})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'novonome':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('onde esta o texto?')
                anu = body.slice(9)
                cnf.updateProfileName(anu)
                reply(`VC MUDOU O NOME PARA ${body.slice(9)} COM SUCESSO  `)
               break            
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'novabio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('onde esta o texto?')
					iyek = body.slice(8)
					lz.setStatus(`${iyek}`)
					reply(`VC MUDOU O RECADO PARA ${body.slice(8)} COM SUCESSO`)
					break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////artes\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art1': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart = fs.readFileSync('./zalts/video/art1.mp4')  
await lz.sendMessage(from, fotoart, video, {quoted: primeiro, caption: art1(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art2': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart2 = fs.readFileSync('./zalts/video/art2.mp4')  
await lz.sendMessage(from, fotoart2, video, {quoted: segundo, caption: art2(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art3': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart3 = fs.readFileSync('./zalts/video/art3.mp4')  
await lz.sendMessage(from, fotoart3, video, {quoted: terceiro, caption: art3(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art4': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart4 = fs.readFileSync('./zalts/video/art4.mp4')  
await lz.sendMessage(from, fotoart4, video, {quoted: quarto, caption: art4(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art5': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart5 = fs.readFileSync('./zalts/video/art5.mp4')  
await lz.sendMessage(from, fotoart5, video, {quoted: quinto, caption: art5(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art6': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart6 = fs.readFileSync('./zalts/video/art6.mp4')  
await lz.sendMessage(from, fotoart6, video, {quoted: sexto, caption: art6(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art7': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart7 = fs.readFileSync('./zalts/video/art1.mp4')  
await lz.sendMessage(from, fotoart7, video, {quoted: setemo, caption: art7(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art8': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart8 = fs.readFileSync('./zalts/video/art2.mp4')  
await lz.sendMessage(from, fotoart8, video, {quoted: oitavo, caption: art8(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art9': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart9 = fs.readFileSync('./zalts/video/art3.mp4')  
await lz.sendMessage(from, fotoart9, video, {quoted: nono, caption: art9(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art10': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart10 = fs.readFileSync('./zalts/video/art4.mp4')  
await lz.sendMessage(from, fotoart10, video, {quoted: décimo, caption: art10(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art11': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart11 = fs.readFileSync('./zalts/video/art5.mp4')  
await lz.sendMessage(from, fotoart11, video, {quoted: décimo1, caption: art11(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art12': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart12 = fs.readFileSync('./zalts/video/art1.mp4')  
await lz.sendMessage(from, fotoart12, video, {quoted: décimo2, caption: art12(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art13': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart13 = fs.readFileSync('./zalts/video/art2.mp4')  
await lz.sendMessage(from, fotoart13, video, {quoted: décimo3, caption: art13(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art14': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart14 = fs.readFileSync('./zalts/video/art3.mp4')  
await lz.sendMessage(from, fotoart14, video, {quoted: décimo4, caption: art14(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art15': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart15 = fs.readFileSync('./zalts/video/art4.mp4')  
await lz.sendMessage(from, fotoart15, video, {quoted: décimo5, caption: art15(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art16': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart16 = fs.readFileSync('./zalts/video/art5.mp4')  
await lz.sendMessage(from, fotoart16, video, {quoted: décimo6, caption: art16(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art17': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart17 = fs.readFileSync('./zalts/video/art1.mp4')  
await lz.sendMessage(from, fotoart17, video, {quoted: décimo7, caption: art17(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art18': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart18 = fs.readFileSync('./zalts/video/art2.mp4')  
await lz.sendMessage(from, fotoart18, video, {quoted: décimo8, caption: art18(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art19': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart19 = fs.readFileSync('./zalts/video/art3.mp4')  
await lz.sendMessage(from, fotoart19, video, {quoted: décimo9, caption: art19(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art20': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart20 = fs.readFileSync('./zalts/video/art4.mp4')  
await lz.sendMessage(from, fotoart20, video, {quoted: décimo10, caption: art20(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art21': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart21 = fs.readFileSync('./zalts/video/art5.mp4')  
await lz.sendMessage(from, fotoart21, video, {quoted: décimo11, caption: art21(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art22': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart22 = fs.readFileSync('./zalts/video/art1.mp4')  
await lz.sendMessage(from, fotoart22, video, {quoted: décimo12, caption: art22(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art23': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart23 = fs.readFileSync('./zalts/video/art2.mp4')  
await lz.sendMessage(from, fotoart23, video, {quoted: décimo13, caption: art23(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art24': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart24 = fs.readFileSync('./zalts/video/art3.mp4')  
await lz.sendMessage(from, fotoart24, video, {quoted: décimo14, caption: art24(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art25': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart25 = fs.readFileSync('./zalts/video/art4.mp4')  
await lz.sendMessage(from, fotoart25, video, {quoted: décimo15, caption: art25(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art26': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart26 = fs.readFileSync('./zalts/video/art5.mp4')  
await lz.sendMessage(from, fotoart26, video, {quoted: décimo16, caption: art26(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art27': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart27 = fs.readFileSync('./zalts/video/art1.mp4')  
await lz.sendMessage(from, fotoart27, video, {quoted: décimo17, caption: art27(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art28': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoaart28 = fs.readFileSync('./zalts/video/art2.mp4')  
await lz.sendMessage(from, fotoart28, video, {quoted: décimo18, caption: art28(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art29': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart29 = fs.readFileSync('./zalts/video/art3.mp4')  
await lz.sendMessage(from, fotoart29, video, {quoted: décimo19, caption: art29(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art30': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart30 = fs.readFileSync('./zalts/video/art4.mp4')  
await lz.sendMessage(from, fotoart30, video, {quoted: décimo20, caption: art30(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'art31': //zalts
if (!isRG) return reply(`${NotRG}`)
let fotoart31 = fs.readFileSync('./zalts/video/art5.mp4')  
await lz.sendMessage(from, fotoart31, video, {quoted: décimo21, caption: art31(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\

//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////TRAVA ZAP\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex = fs.readFileSync('./zalts/logos/virtex.jpg')  
await lz.sendMessage(from, fotovirtex, image, {quoted: selo2, caption: virtex(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex2':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex2 = fs.readFileSync('./zalts/logos/virtex2.jpg')  
await lz.sendMessage(from, fotovirtex2, image, {quoted: selo2, caption: virtex2(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex3':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex3 = fs.readFileSync('./zalts/logos/virtex3.jpg')  
await lz.sendMessage(from, fotovirtex3, image, {quoted: selo2, caption: virtex3(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex4':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex4 = fs.readFileSync('./zalts/logos/virtex4.jpg')  
await lz.sendMessage(from, fotovirtex4, image, {quoted: selo2, caption: virtex4(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex5':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex5 = fs.readFileSync('./zalts/logos/virtex5.jpg')  
await lz.sendMessage(from, fotovirtex5, image, {quoted: selo2, caption: virtex5(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex6':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex6 = fs.readFileSync('./zalts/logos/virtex6.jpg')  
await lz.sendMessage(from, fotovirtex6, image, {quoted: selo2, caption: virtex6(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex7':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex7 = fs.readFileSync('./zalts/logos/virtex7.jpg')  
await lz.sendMessage(from, fotovirtex7, image, {quoted: selo2, caption: virtex7(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex8':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex8 = fs.readFileSync('./zalts/logos/virtex8.jpg')  
await lz.sendMessage(from, fotovirtex8, image, {quoted: selo2, caption: virtex8(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtex9':
if (!isRG) return reply(`${NotRG}`)
let fotovirtex9 = fs.readFileSync('./zalts/logos/virtex9.jpg')  
await lz.sendMessage(from, fotovirtex9, image, {quoted: selo2, caption: virtex9(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'ngazap':
if (!isRG) return reply(`${NotRG}`)
let fotongazap = fs.readFileSync('./zalts/logos/ngazap.jpg')  
await lz.sendMessage(from, fotongazap, image, {quoted: selo2, caption: ngazap(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'virtag':
if (!isRG) return reply(`${NotRG}`)
let fotovirtag = fs.readFileSync('./zalts/logos/virtag.jpg')  
await lz.sendMessage(from, fotovirtag, image, {quoted: selo2, caption: virtag(prefix)})
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'emoji2':
if (!isRG) return reply(`${NotRG}`)
let fotoemoji2 = fs.readFileSync('./zalts/logos/emoji2.jpg')  
await lz.sendMessage(from, fotoemoji2, image, {quoted: selo2, caption: emoji2(prefix)})
break        
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////TEXTOS\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'Frase': 
case 'Frases': 
case 'frases': 
case 'frases': 
				lz.updatePresence(from, Presence.composing) 
				const fra =['amor imaturo diz: "Eu te amo porque preciso de você". O amor maduro diz: "Eu preciso de você porque eu te amo" (Erich Fromm)','A vida começa a cada cinco minutos (Andreu Buenafuente)','Onde as palavras falham, a música fala (Hans Christian Andersen)','Um bom viajante não tem planos (Confúcio)','Uma vez que aceitamos nossos limites, vamos além deles (Albert Einstein)','O que não nos mata nos fortalece (Friedrich Nietzsche)','Se você caminha sozinho, você vai mais rápido. Se vocês caminharem juntos, vocês irão mais longe.','Uma vida cheia de erros não é apenas mais honrosa, mas é mais sábia do que uma vida gasta sem fazer nada','É fácil complicar as coisas, mas difícil ser simples . F. Nietzsche', 'Nunca perca o senso de humor e aprenda a rir de suas próprias falhas', 'A preocupação é como uma cadeira de balanço, ela mantém você ocupado, mas não leva a lugar nenhum',' O homem que viveu mais tempo não é aquele que completou mais anos, mas aquele que mais experimentou a vida','Se você pode sonhar, você pode fazer','O impossível é o fantasma dos tímidos e o refúgio dos covardes',' O caminho que temos que percorrer 998 é cheio de surpresas. Você nunca estará preparado para aqueles que o tocam, sejam eles felizes ou sombrios, porque isso faz parte de ganhar experiência. E descobrir quão agradáveis ​​ou infelizes são aqueles que esperam por você, é algo que você nunca poderá evitar','A felicidade não é algo que você adia para o futuro, é algo que você projeta para o presente','Os amigos devem ser como dinheiro, que antes de precisar, você sabe o seu valor', 'Suas ações serão um reflexo da maneira como você vê a vida e aquelas que o definirão diante dos outros. No las malgastes en cosas y actitudes que no valen la pena, solo tú puedes decidir la forma en la que quieres que te recuerden, porque no estarás en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca o contrário. Não faria mal às pessoas se lembrarem disso de vez em quando','Você nunca para de conhecer pessoas. Seus amigos, sua família e até você mesmo, podem esconder surpresas que você poderia ter imaginado na vida, tanto boas quanto ruins','Todos nós temos o mesmo destino, em essência não há como nos diferenciar se nascemos para chorar e riso. Lembre-se, todos nós temos nossos dias contados, viva cada um dos seus dias como se fosse o maior presente, porque ninguém pode garantir o amanhã', 'Enquanto você viver, você conhecerá todo tipo de pessoa, tanto boa quanto ruim. É impossível adivinhar as intenções que alguém esconde por trás de seu comportamento, mas descobrir isso é a tarefa mais interessante e perigosa que você pode encontrar','Os momentos felizes da humanidade são as páginas vazias da história','A decepção após um amor fracassado, pode oprimir seu coração a ponto de não deixar você respirar. Mas ninguém morreu de amor','Não chore pelas pessoas que partiram, concentre-se em quem está ao seu lado no presente e guarde as boas lembranças de quem partiu','Você não deve se concentrar no dor que você pode sentir se alguém falhou com você. Se você não pode perdoar um erro, enterre-o e siga em frente','Amar é a maior aventura que você pode embarcar. Porque pode fazer você voar mais alto do que você jamais imaginou e também colocar os pés no chão']
 				const jys = fra[Math.floor(Math.random() * fra.length)]
			    ses = fs.readFileSync(`./zalts/logos/frases.jpg`)
				lz.sendMessage(from, ses, image, { caption: '*𝐙         𝐀         𝐋         𝐓         𝐒*\n\n'+ jys, quoted: selo })
              break
              
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'CRIADOR':

const vczalts = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:zalts\n' 
            + 'ORG:progamador;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=:+556699717091\n' 
            + 'END:VCARD' 

 
                  lz.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "zalts", vcard: vczalts}, MessageType.contact, { quoted: selo})
                 
if(!isGroup) return
reply('NUMERO DO DONO NO PV')
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\         
 case 'Cantadas':
case 'Cantada':
 case 'cantadas':
case 'cantada':               
				lz.updatePresence(from, Presence.composing) 				
				const mary =['Alguns querem ser ricos pelo dinheiro, outros pelo poder, mas o que eles não sabem é que a única riqueza é o seu verdadeiro amor.','Sonhando com você tive uma revelação, agora preciso que você faça um buraco para eu no seu coração. ','Apesar de muitas pessoas terem passado pelo seu coração, eu gostaria que você me fizesse um eterno buraquinho, por menor que seja, caso algo aconteça, para que você nunca me esqueça.','O quê? Eu sinto por você é tão imenso que, para salvá-lo, eu precisaria de outro universo.','Eu me tornei um capitão pirata para roubar seu coração e roubar seu amor.','Você me perguntou por que eu te amava e eu pude não responda. Hoje eu entendo que o amor verdadeiro é indescritível, só pode ser sentido.','Gostaria que fosse papel para te embrulhar, querida.','Quero te beijar, te abraçar e não deixar ir','Talvez meu casa não é um palácio, mas eu gostaria que você fosse minha princesa.','Eu te amo demais, quero tudo com você, é por isso que fico louco quando você não está comigo.','Você por acaso tem um mapa com você? Porque tenho o interesse de navegar nesse lindo olhar', 'Desde que te vi virei astronauta porque não desci das galáxias', 'Mesmo que o céu esteja cheio de estrelas, você é o mais importante para mim', 'Se ser bonito fosse pecado, você já estaria fazendo penitência','Aqueles que dizem que a Disneylândia é o lugar mais feliz do mundo não estiveram com você ','Se ser bonito pudesse matar, você seria a bomba atômica😳','Se eu fosse um gato, gastaria meu nove mora com você','E se comermos alguns tacos e eu te beijar taco?']
				const js = mary[Math.floor(Math.random() * mary.length)]
			    wew = fs.readFileSync(`./zalts/logos/cantadas.jpg`)
				lz.sendMessage(from, wew, image, { caption: '*𝐙         𝐀         𝐋         𝐓         𝐒*\n\n'+ js, quoted: selo })
              break   
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\      
case 'nickff': 
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=MIMINGANZ`)
					reply(anu.result)
					break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
////////////////PING\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
case 'speed':
			case 'velocidad':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`＿人人人人人人人人＿ \n Ping: ${latensyi.toFixed(4)} Segundos \n ▂▃▅▆█▆▅▃▂`)
break
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//////////////////FIM\\\\\\\\\\\\\\\\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
//◢◤◇◥◣◥◤◢◤◆◥◣◥◤◢◤◇◥◣\\
default: 
if (body == `${prefix}${command}`) {
hsl = `
*⍋̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅📍 *CMD NÃO ENCONTRADO*📍⍋̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅҈̶̷̲̅*\n\n༆⃤ Olá @${sender.split("@")[0]}\n༆⃤ O comando: *${prefix}${command}*\n༆⃤ Não existe no meu banco de dados ou vc digitou errado\n༆⃤ Verifique seu comando usando ${prefix}menu ^^
`
lz.sendMessage(from, hsl, text, {quoted: selo2, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid não está definido"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "blue"), color("[ WORERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()
