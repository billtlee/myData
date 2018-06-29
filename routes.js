const routes = require('next-routes')();

routes
  .add('privatedata','/mydata/:address/privatedata/:key', 'mydata/privatedata')
  .add('interests','/mydata/:address/interests', 'mydata/interests');


module.exports = routes;
