'use strict';

const net = require('net');

// 创建一个TCP服务器实例，调用listen函数开始监听指定端口
// 传入net.createServer()的回调函数将作为”connection“事件的处理函数
// 在每一个“connection”事件中，该回调函数接收到的socket对象是唯一的
const server = net.createServer();

server.listen(6969, '127.0.0.1',
    ()=>{
        console.log('Server listening on ' +
            server.address().address + ':' + server.address().port);
    }
);

server.on('connection', (socket)=> {
    console.log('Connected: ' + socket.remoteAddress +':'+ socket.remotePort);

    socket.write('Hello World!\n');

    socket.on('close', ()=> {
        console.log(socket.remoteAddress +':'+ socket.remotePort + 'Connection closed');
    });

    socket.on('data', (data)=> {
        let p = Promise.resolve();
        p.then(()=>{
            let message = String(data);
            console.log(socket.remoteAddress +':'+ socket.remotePort + ' ' + message );
            return message;
        }).then((message)=>{
            if(message === 'bye'){
                socket.write('see you~\n');
                socket.destroy();// 完全关闭连接
            }else{
                //todo:: find database

            }
        }).catch((err)=>{
            console.error(err);
        });
    });

});

