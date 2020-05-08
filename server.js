const Botgram = require("botgram");
const figlet = require("figlet");

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
  console.error(
    "Seems like you forgot to pass Telegram Bot Token. I can not proceed..."
  );
  process.exit(1);
}
        
var todos = [];
const bot = new Botgram(TELEGRAM_BOT_TOKEN);
bot.command("list", function(msg, reply, next) {
  console.log(todos.join("\n"));
  //reply.text("🚀 Your to-do list:" + "\n");
  var fancyText="🚀 Your to-do list:" + "\n"+ "\n";
  var x;
  var list = "";
  for (x of todos) {
  list=list+todos.indexOf(x) + ": " + x + "\n" ;
  // reply.text(todos.indexOf(x) + ": " + x)
  } 
  reply.text(fancyText + list);
  });

bot.command("add", function(msg, reply, next) {
  console.log(todos.length + ": " + msg.args(1).toString());
  // todos.push(todos.length + ": " + msg.args(1).toString());
  todos.push(msg.args(1).toString());

  reply.text("Updated");
});

bot.command("del", function (msg, reply, next) {
  todos.splice (msg.args(1), 1);
  console.log(todos.toString());
  reply.text("Updated");
});

bot.text(function(msg, reply, next) {
  reply.text("I do not understand that.");
  console.log("Received a text message:", msg.text);
});