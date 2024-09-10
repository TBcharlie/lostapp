// LostApp/stryker.conf.js
module.exports = {
    mutate: ['src/**/*.js'],
    mutator: 'javascript',
    testRunner: 'jest',
    jest: {
      config: require('./package.json'),
    },
  };
  