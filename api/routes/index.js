const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const product = require('./produtosRoute');
const nivel = require('./niveisRoute');
const turma = require('./turmasRoute');
const ticket = require('./ticketsRoute');
const cases = require('./casesRoute');

module.exports = app => {
    app.use(bodyParser.json());

    app.use(pessoas);
    app.use(product);
    app.use(nivel);
    app.use(turma);
    app.use(ticket);
    app.use(cases);    
}
