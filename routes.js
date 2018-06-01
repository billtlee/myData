import mydata from './ethereum/myData';

const routes = require('next-routes')();

routes
  .add('/mydata/:address/interests', 'mydata/interests')
  .add('/mydata/:address/privatedata', 'mydata/privatedata');

module.exports = routes;
