var env = process.env.NODE_ENV || 'dev';

if (env ==='dev' || env === 'test' || env ==='ganache' || env ==='rinkby'){
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key]
  });
}
