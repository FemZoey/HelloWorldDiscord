import discord

token = ''

class bot(discord.Client):
        async def on_message(self,message):
                if message.content.startswith(".helloworld") and True-message.author.bot:
                        await message.channel.send("Hello world!")
client = bot()
client.run(token)
