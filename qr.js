/* Copyright (C) 2020 Babu Perumana.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsBot - Babu Perumana
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsasena/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Bot')}
${chalk.white.italic('AsenaString Kodu Alıcı')}

${chalk.blue.italic('ℹ️  WhatsApp\'a Connecting ... please wait.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Your Asena String Code: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `
ASENA_SESSION="${st}"
            `);
        }

        console.log(
            chalk.blue.bold('If you are installing Locale, you can start the bot with node bot.js.')
        );
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()