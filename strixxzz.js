const Discord = require("discord.js");//strixxzz
const client = new Discord.Client();
const settings = require('./files/settings/config.json');

client.on('ready', async () => {
client.user.setPresence({ activity: { name: settings.durum }, status: settings.status });//strixxzz
});
let sesKanali = settings.sesknal;
client.on("ready", async (strixxzz) => {
console.log(client.user.tag + " Bot connected");//strixxzz
let kanal = client.channels.cache.get(sesKanali);//strixxzz
if (kanal && kanal.type === "voice") {
setTimeout(() => {
kanal.join().then(baglanti => {
baglanti.play(settings.radyolink); 
console.log("Bot connected to voice channel");//strixxzz
});
}, 5*1000);
};
});

client.login(settings.token)//strixxzz