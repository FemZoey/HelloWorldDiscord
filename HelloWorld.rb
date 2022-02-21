#gem install discord.rb
require 'discordrb'

TOKEN =  ''
bot = Discordrb::Bot.new token: TOKEN

bot.message(with_text: ".helloworld") do |event|
  event.respond("Hello World!")
end

bot.run
