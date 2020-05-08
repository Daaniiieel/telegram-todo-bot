# telegram-todo-bot
The most advanced bot you have ever seen with 280+ commands. Has a huge codebase with more than 2000+ lines of code. Has over 40000 event listeners, the server.js file (main entry) uses ~2.4 GB of memory.

Actually, it's just a simple telegram bot that can manage a to-do list. 16 MBs of memory. Host anywhere that can run node.


### Hosting & setup:
Host it on glitch.com, it's super easy and fast! Then you can use uptimerobot.com/ to ping it every 5 minutes, so it does not go to sleep.
To config, edit the .env file and add the following line:
TELEGRAM_BOT_TOKEN=''
Inside the quotes, input the Bot Token you got from BotFather.

### Commands
```

/list -- list all notes

/add note_text -- add a note with the contents note_text

/del <id> -- deletes the item with the id <id>. The id is displayed before the note contents in the output of the /list command

```
