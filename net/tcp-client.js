'use strict';

const net = require('net');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const client = new net.Socket();
client.connect(6969, '127.0.0.1', ()=>{

    console.log('CONNECTED TO: ' + client.address().address + ':' + client.address().port);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    //client.write('I am Chuck Norris!');

    console.log('input to send: ');

    rl.on('line', (line)=>{
        //client.write(line);
        line = String(line);
        line.trim();
        if(line === 'bye'){
            client.write(line);
        }else{
            let p = Promise.resolve();
            p.then(()=>{
                console.log('input to send: ');
                let now = new Date();
                let message = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' ' + line;
                return message;
            }).then((message)=>{
                client.write(message);
            }).catch((err)=>{
                console.error(err);
            });
        }

    });

});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', (data)=> {

    console.log('DATA: ' + data);
    // 完全关闭连接
    //client.destroy();
});

// 为客户端添加“close”事件处理函数
client.on('close', ()=> {
    console.log('Connection closed');
    process.exit(0);
});