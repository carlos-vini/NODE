/*
// Importar os módulos
// fs = core ,module
const fs = require('fs');
// console.log(fs)

fs.readFile('arquivo.txt', 'utf-8', (err, data)=>{
    // console.log(err);
    console.log(data.length);
});
*/

// const fs = require('fs');
// fs.appendFile('arquivo2.txt', 'Hello content', (err) =>{
//     if(err) throw err;
//     console.log('saved papai');
// }); 

// const fs = require('fs');
// fs.open('arquivo3.txt', 'w', (err)=>{
//     if(err) throw err;
//     console.log('saved papai');
// });

// const fs = require('fs');
// fs.writeFile('arquivo3.txt', 'É dento papai', (err)=>{
//     if(err) throw err;
//     console.log('saved papai');
// });

// const fs = require('fs');
// fs.unlink('arquivo3.txt', (err)=>{
//     if(err) throw err;
//     console.log('deleted papai');
// });

// const fs = require('fs');
// fs.rename('arquivoDois', 'arquivoDois.txt', (err)=>{
//     if(err) throw err;
//     console.log('renamed papai');
// });

// Atividade
const fs = require('fs');
fs.open('atividade.txt', 'w', (err)=>{
    if(err) throw err;
    console.log('created papai');
});

fs.writeFile('atividade.txt', 'Primeiro conteúdo papai', (err)=>{
    if(err) throw err;
    console.log('saved papai');
});

fs.readFile('atividade.txt', 'utf8', (err)=>{
    if(err) throw err;
    console.log('readed papai');
});

fs.writeFile('atividade.txt', 'Segundo conteúdo papai', (err)=>{
    if(err) throw err;
    console.log('saved papai');
});

fs.readFile('atividade.txt', 'utf8', (err)=>{
    if(err) throw err;
    console.log('readed papai');
});