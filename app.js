const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {

  console.log(`BOT ON!`); 

});

client.login(config.token);

client.on("message", async message => {
  if(message.author.bot) return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
  }
  if(command === "teste") {
    message.channel.send("Olá marilene!")
    }
  if(command === "anunciar") {
      if (message.member.hasPermission('MANAGE_GUILD')) {  
             
          let mensg = args.join(" ");
          if(!mensg)
             return message.channel.send("Digite a mensagem do aviso!")
             
          const anuncio = new Discord.RichEmbed()
             .setColor("0cff00")
             .setAuthor("Anúncio", "https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")
             
             .setDescription(mensg)
             
             .setTimestamp()
             .setFooter(`Por: ${message.author.tag}`, message.author.avatarURL)
          
          message.channel.send("@everyone", anuncio)
          
  }
}
if(command === "changelog") {
  if (message.member.hasPermission('MANAGE_GUILD')) {  
         
      let mensg = args.join(" ");
      if(!mensg)
         return message.channel.send("Digite a mensagem de Change-log")
         
      const changelog = new Discord.RichEmbed()
         .setColor("0cff00")
         .setAuthor("Change-Log", "https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")
         
         .setDescription(mensg)
         
         .setTimestamp()
         .setFooter(`Por: ${message.author.tag}`, message.author.avatarURL)
      
      message.channel.send("@everyone", changelog)
      
  }
}
if(command === "setgame") {
  let mensg = args.join(" ");
  if(!mensg)
     return message.channel.send("Digite a msg do jogo")
  client.user.setPresence({ game: { name: `${mensg}`, type: 0 } });
  message.reply(`jogo setado para: ${mensg}`)
}
if(command === "setlive") {
  let mensg = args.join(" ");
  if(!mensg)
     return message.channel.send("Digite a msg do jogo")
  client.user.setPresence({ game: { name: `${mensg}`, url: "https://twitch.tv/LockDzn" , type: 1 } });
  message.reply(`jogo setado para: ${mensg}`)
}
if(command === "setassstindo") {
  let mensg = args.join(" ");
  if(!mensg)
     return message.channel.send("Digite a msg do jogo")
  client.user.setPresence({ game: { name: `${mensg}`, type: 3 } });
  message.reply(`jogo setado para: ${mensg}`)
}  node
});
  
