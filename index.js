const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('Njg5NzY0NTc2NTk3NjM5MjAx.XnScdA._jtcD2mxtVEenrw4I6h_X76khuw');

client.on('message', message =>{
    if(message.content === "!règles"){
        message.channel.send('les règles se trouvent dans le salon #règles')
    }
})

client.on('message', message =>{
    if(message.content === "salut"){
        message.channel.send('on ne parle pas pour rien dire de plus :wink: sinon j\'active le mode lent :kiss:')
    }
})

client.on('message', message =>{
    if(message.content === "Mickey Mousse"){
        message.channel.send('première partie easter egg dévérouiller: first word: -vous')
    }
})

client.on('guildMemberAdd', msg => {
    var channel = client.channels.cache.get('673473854433263617');
    channel.send(':tada: **bienvenue** :tada:' + msg.displayName + ' :smile: **Nous sommes heureux de t-accueillir parmis nous** :smile: ');
})
client.on('guildMemberRemove', msg => {
    var channel = client.channels.cache.get('673481161342713875');
    channel.send(':cry: **goodbye my lover** :cry: ' + msg.displayName + ' **we missed you** :sob:');
})