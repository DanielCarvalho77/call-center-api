const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const product = require('./produtosRoute');

module.exports = app => {
    app.use(bodyParser.json());

    app.use(pessoas);
    app.use(product);
    
}
