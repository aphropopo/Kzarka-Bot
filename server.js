const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Kzarka Listo!");
 });

 client.on("message", (message) => {
     if (message.content.startsWith(".Kzarka") && (message.content.startsWith(".kzarka"))){
         message.channel.send("¿Qué solicitas del señor de la corrupcion Kzarka indigno humano?");
     }
 });

 client.login("NzA2ODkwMDQxNDUyMDAzMzQ4.XrBWuQ.eW4H81tpJ2YQQiGgIMmPgvJT1Ns")