const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'هل تحب ميزو ♥️'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'احبك ♥️'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'اكرهك ☹️'}, type: 1},
        {buttonId: 'id4', buttonText: {displayText: 'لاشيئ🙈'}, type: 1}
      ]
      
      const buttonMessage = {
          contentText: "مرحبا انا بوت ميزو لخدمات واتساب🤖",
          footerText: 'مطور البوت ميزو 774217099  ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}
WhatsAlexa.addCommand({pattern: 'mezo', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'هل تحب ميزو ♥️'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'اعشقك ♥️'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'اكرهك ☹️'}, type: 1},
        {buttonId: 'id4', buttonText: {displayText: 'لاشيئ🙈'}, type: 1}
      ]
      
      const buttonMessage = {
          contentText: "مرحبا انا بوت ميزو لخدمات واتساب🤖",
          footerText: 'مطور البوت ميزو 774217099  ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
}

));

