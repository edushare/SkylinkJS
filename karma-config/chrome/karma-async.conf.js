sharedConfig = require('../shared/karma-chrome.conf.js');

module.exports = function(config){

  var file = ['../../test-karma/async-test.js'];

  sharedConfig(config);

  config.files = config.files.concat(file);
  
}