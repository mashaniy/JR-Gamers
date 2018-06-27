const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true}); // botnya tidak akan bisa mention @everyone
const config = require("./config.json"); // kita akan menaruh prefix dan token disini

bot.on("ready", async () => {
	console.log(`${bot.user.username} Sudah online!`);
	bot.user.setActivity("Youtube!", {type: "PLAYING"});	
});

bot.on("message", async message => {
	if (message.author.bot) return; // bot kita tidak akan menjawab jika command dikirim oleh bot lain
	if (message.channel.type === 'dm') return; // bot kita tidak akan menjawab jika kita menggunakan command di DM atau PM

    let prefix = config.prefix;
    let messageArray = message.content.split(" "); // commend bisa disisipkan spasi
    let cmd = messageArray[0]; 
    let args = messageArray.slice(1);    

    if (cmd === `${prefix}JR`) { // ketik !JR
	message.channel.send("active!");
    }
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setAuthor("Welcome to the JR-Gamers Discord")
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Welcome!', `${member}`)
        .addField('User :', "**[" + `${member.id}` + "]**")
        //.addField("Kamu Join", member.joinedAt)
        //.addField("Owner", guild.owner)
        .setFooter(`**${member.guild.name}**`)

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.login(process.env.BOT_TOKEN);
