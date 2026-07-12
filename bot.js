const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
    res.write("Bot dang chay online!");
    res.end();
}).listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'dun9x.aternos.me', // <-- Bác bảo các cháu đọc cho cái địa chỉ Server rồi thay vào đây nhé
        port: 25565,
        username: 'BotOngNoi80Tuoi', // Tên con bot trong game
        version: false
    });

    bot.on('spawn', () => {
        console.log('Bot da vao server!');
        setInterval(() => { bot.chat('Lao hac dang giu server...'); }, 240000); 
    });

    bot.on('disconnect', () => { setTimeout(createBot, 15000); });
    bot.on('error', (err) => console.log(err));
}
createBot();
