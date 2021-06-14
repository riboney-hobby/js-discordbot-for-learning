# Simple discord bot

## How to set it up?

first of all you should read
[Project setup](../project-setup-notes.md)
then make a .env file in the root folder of project. copy all of the .env.example content to your .env file and fill the needed values

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
