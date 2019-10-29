const env = process.env.NODE_ENV || 'development';

console.log(`env ****************** ${env}`);

if (env === 'development' || env === 'test') {
    const config = require('./config.json');
    const envConfig = config[env];

    Object.keys(envConfig).map(x => {
        process.env[x] = envConfig[x];
    });
}