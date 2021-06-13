# Simple discord bot

## How to use it ?

You can define a **Global Command** or **Admin Command** like this

```javascript
app.commandResolver.addGlobalCommand("your command name", callback);
```

So if i define something like this

```javascript
app.commandResolver.addGlobalCommand("say", (msg) => {
  let body = msg.content.split(" ").splice(1).join(" ");
  msg.channel.send(body);
});
```

**The msg will pass to your function by default so you can get it** So now if type ?say Hello World the bot will repeat my sentence and will say Hello World.
