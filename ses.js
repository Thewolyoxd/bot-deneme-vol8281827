const Discord = require('discord.js');
const tokens = [
    "ODc4Njc3NzU1OTEzNDQ5NDky.YSEqbg.3vXmP1-zMthD7MAqh0gXB_i_WjM",
    "ODc4Njc4MTY5OTQ5OTc0NjAw.YSEq0A.3Z92PbtrTc2jLJedBfITffJAIJA",
    "ODc4Njc4NTI2OTczMzQxNzY3.YSErJQ.klP898vKofR8nNfYrorMjU2fv-s",
    "ODc4Njc4ODYzMjkzNTkxNTcz.YSErdg.ZgHSlzS3vlazGYMo9VgTTFeYQf8"
];

const chnls = [
    "877232150536130580",
    "877232335299436564",
    "877232375719936070",
    "877232451582328903"
];

const selamlı = [];
for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let concon;
    client.on('ready', async () => {
        client.user.setStatus("idle");
        console.log(client.user.username);
        setInterval(() => {
            const am = [  
             "Wéx ❤️ Wolyo"

            ];
        const yarrak = Math.floor(Math.random() * (am.length));
        client.user.setActivity(`${am[yarrak]}`, {type: "LISTENING"});
    }, 10000);
        concon = await client.channels.cache.get(chnls[index]).join().catch(err => console.error("Ses kanalına giriş başarısız"));
    });
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if (cur.channelID === prev.channelID) return;
            if (selamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("877234569751965727").rawPosition)) {
                ses = await concon.play('./hg.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("877234569751965727").rawPosition)) {
                ses = await concon.play('./hg.mp3');
                selamlı.push(cur.member.user.id);
                console.log(selamlı);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get("877234569751965727").rawPosition) {
                ses = await concon.play('./yt.mp3');
                selamlı.push(cur.member.user.id);
                console.log(selamlı);
            }
        }
        if (prev.channel && (prev.channel.id === chnls[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) concon = await client.channels.cache.get(chnls[index]).join();
    })

    client.on('voiceStateUpdate', async (___, newState) => {
        if (
        newState.member.user.bot &&
        newState.channelID &&
        newState.member.user.id == client.user.id &&
        !newState.selfDeaf
        ) {
        newState.setSelfDeaf(true);
        }
        });

}
