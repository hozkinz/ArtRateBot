# ArtRateBot
A Discord Bot developed during Discord Hack Week that allows users the ability to upload artwork into a database and have users rate the artwork. It also features the ability to get the current rating of artworks, and a report function for if a piece infringes copyright or is against Discord's TOS.

![ArtRateBotLogo](http://jerry.best/ArtRateBot.png)

If you wish to try out ArtRateBot yourself, you can join our delightful server, and interact with us wonderful creators of ArtRateBot here: [LinkToArtRateBotDiscordServer](http://discord.gg/5tukZRm)

ArtRateBot was developed by '@Jek D. Gon#0001' and '@HoZKiNZ#1346' specifically for Discord Hack Week. We had a lot of fun making this bot, and are happy with the result. Due to the end of Hack Week rapidly approaching, we had to scale back a little in order to meet the deadline, but our hope is to continue to work on this bot over time. Make no mistake, the bot IS good as it stands, but we did suffer a few limitations.

## Commands
**.help**

Brings you the help information with commands on how to interact with the bot. 

**.new**

Allows you to upload new Artwork to the database. Please no NSFW, or anything that violates Discord's Terms of Service (found here: https://discordapp.com/terms) 

**.rate**

Presents you with a random Artwork to vote on. Click the Thumbsup to issue a like, or the Thumbsdown to dislike. 

**.getrating NameOfArtwork**

Retrieve an Artwork Rating.

**.report NameOfArtwork**

Reports the Artwork to the crack team of admins who will review the content and see if it violates the Discord TOS. You can also use this if an Artwork violates your copyright.

**.remove NameOfArtwork**

This command can only be used by the moderators and admin of the ArtRateBot server. It will remove the artwork and it's ratings from the database.

## Successes
Mostly everything works how we like.
The commands are simple and easy to get used to.
Uploaded artwork cannot have the same names as each other.
The bot's actions are limited specifically to their related rooms on the Discord server.
Receiving feedback from artist's has helped us ensure that credit and copyright is adhered to.

## Limitations
Currently, we are struggling to implement a saving of the database function. As the bot operates now, all linked artwork and corresponding ratings will be lost should the bot need to be restarted.
The reactions required to interact with .rate are posted under the message of the user who requested to rate a piece of artwork. It would be better if these reactions were linked to the message that send the artwork.
While not straying too far from what we wanted, the original bot idea was a *little* bit different.

## Expandability
In the future, the bot could be expanded in a few ways.
1. Different genres of art can be rated upon, such as abstract or photography.
2. Different forms of media could be split into seperate rating systems. .mp3, .mp4 and the like.
3. A leaderboard could be created to list the most successful artworks per week/month/periodoftime
4. If a few servers used the bot, it might be possible to create a global database of ranked artwork.

## Parting Thoughts
This has been a wonderful experience for us. We have learned a lot about just what it takes to create something worthwhile. We hope that this bot brings you endless joy and fun curiosity. If you decide to use this bot, or expand upon it, please let us know. We would love to see just what you're capable of too. Discord Hack Week 2019 represent!

**Jek:** OwO

**Hoz:** LLAP
