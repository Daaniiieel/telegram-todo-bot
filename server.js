const Botgram = require("botgram");
const figlet = require("figlet");

const { TELEGRAM_BOT_TOKEN } = process.env;
const { TELEGRAM_ID } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
  console.error(
    "Seems like you forgot to pass Telegram Bot Token. I can not proceed..."
  );
  process.exit(1);
}

var todos = [];
const bot = new Botgram(TELEGRAM_BOT_TOKEN);
bot.command("list", function(msg, reply, next) {
  if ((msg.from.id == TELEGRAM_ID)) {
    console.log(todos.join("\n"));
    var fancyText = "🚀 Your to-do list:" + "\n" + "\n";
    var x;
    var list = "";
    for (x of todos) {
      list = list + todos.indexOf(x) + ": " + x + "\n";
    }
    reply.text(fancyText + list);
  } else {
    reply.text("you don't have privileges to use this command.");
  }
});

bot.command("add", function(msg, reply, next) {
  if (msg.from.id == TELEGRAM_ID) {
    todos.push(msg.args(1).toString());
    reply.text("Updated list");
  } else {
    reply.text("you don't have privileges to use this command.");
  }
});

bot.command("del", function(msg, reply, next) {
  if (msg.from.id == TELEGRAM_ID) {
    todos.splice(msg.args(1), 1);
    console.log(todos.toString());
    reply.text("Updated");
  } else {
    reply.text("you don't have privileges to use this command.");
  }
});

bot.text(function(msg, reply, next) {
  reply.text("I do not understand that.");
  console.log(msg.from.id);
});
