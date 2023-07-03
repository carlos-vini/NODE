const http = require('http');
// console.log(http);
const PORT = 3000;

// const server = http.createServer((req, res)=>{
//     if(req.url === '/home'){
//         res.writeHead(200, {'Content-Type':'text/plan'});
//         res.write('Página Home');
//         res.end();
//     } else if(req.url === '/sobre'){
//         res.writeHead(200, {'Content-Type':'text/plan'});
//         res.write('Página Sobre');
//         res.end();
//     } else{
//         res.writeHead(404, {'Content-Type':'text/plan'});
//         res.write('Página Não Encontrada');
//         res.end();
//     };
// });

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<meta charset="UTF-8">');
        res.write('<h1>Página Home </h1>');
        res.write('<p>Está é página Home </p>');
        res.end();
    } else if(req.url === '/sobre'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<meta charset="UTF-8">');
        res.write('<h1>Página Sobre </h1>');
        res.write('<p>Está é página Sobre </p>');
        res.end();
    } else if(req.url === '/contato'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<meta charset="UTF-8">');
        res.write('<h1>Página Contato </h1>');
        res.write('<p>Está é página Contato </p>');
        res.end();
    } else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write('<meta charset="UTF-8">');
        res.write('<h1>Página Não Encontrada </h1>');
        res.end();
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT} 😎`);
});