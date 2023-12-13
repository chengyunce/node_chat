//Express の作成
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
//public フォルダーを、web公開
app.use(express.static(__dirname + '/public'));

//httpのサーバーを作成
const { createServer } = require('node:http');
const server = createServer(app);

//環境変数読み込み
const dotenv = require('dotenv');
dotenv.config();
const host = process.env.HOST
const port = process.env.PORT

//httpサーバーを待機
server.listen(port, host, () => {
    console.log(`listening on http://${host}:${port}`);
    })