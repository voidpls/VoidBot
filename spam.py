import discord
from discord.ext import commands
import asyncio
from sys import argv

description = 'VoidBot'
prefix = '-'
client = commands.Bot(command_prefix=prefix, description=description, pm_help=None, self_bot=True)
# emoji: {
#        "id": 236433782725541889,
#        "name": "FoxFace"
#}
@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

@client.command(pass_context=True)
async def ping(ctx):
    await client.say('**Pong! :ping_pong:**')

#@client.command(pass_context=True)



@client.command(pass_context=True)

#def is_me(m):
#    return m.author == client.user
#
#deleted = await client.purge_from(channel, limit=100, check=is_me)
#await client.send_message(channel, 'Deleted {} message(s)'.format(len(deleted)))

async def every(ctx, number):
    #mgs = []
    #number = 7

    number = int(number)
    number

    while (number != 1):
        number2 = 8
        while (number2 != 1):
            await client.say('@everyone')
            number2 = number2 - 1
        else:
            await client.say('..clr 7')
            number = number - 1

@client.command(pass_context=True)

async def spam(ctx, count):

    count = int(count)

    while (count != 1):
        count2 = 8
        while (count2 != 1):
            await client.say('@everyone')
            count2 - 1
    count = count - 1

@client.event
async def on_message(message):
    if message.author == discord.User(id = '196296279771316224'):
        await client.add_reaction(message, '🍆')


    #def is_me(m):
    #    return m.author == client.user

    #await client.purge_from(ctx.message.channel, limit = 100, check=is_me)
    #await client.purge_from(mgs)


#@client.command('message', message => {
#    if (message.content === 'testedit') {
#            msg.react(':').then((msgreaction) => msgreaction.message.edit('test test test'));
#    }
#})

#@client.event
#async def message(message):
# if message.content.startswith('spam'):
#     client.send_message(message.channel, 'hi')

client.run('Mjk5MDUyOTk4MzU1NzE0MDQ5.C94CKg.KZlNEiE7eIE_832RkQD6PD9sCcY', bot=False)
