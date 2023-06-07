const meuModulo = require('./meu_modulo');
const meuModulo1 = require('./meu_modulo1');

const soma = meuModulo.soma;
const sub = meuModulo.sub;

const mult = meuModulo1.mult;
const div = meuModulo1.div;

soma(2,4);
soma(2,6);
sub(2,5);
sub(5,2);

mult(2,5);
mult(5,9);
div(2,4);
div(0,5);