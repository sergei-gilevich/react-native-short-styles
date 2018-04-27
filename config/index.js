var flex = require('./flex');
var shadowIOS = require('./shadowIOS');
var transforms = require('./transforms');
var image = require('./image');
var view = require('./view');
var text = require('./text');

// Merge all configs

module.exports = Object.assign(flex, shadowIOS, transforms, image, view, text);