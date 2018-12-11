var nconf = require('nconf');
nconf.env();

console.log('OS : '+nconf.get('OS'));