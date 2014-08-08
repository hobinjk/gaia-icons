(function(define){'use strict';define(function(require,exports,module){

/**
 * Locals
 */

var bodyClasses = document.body.classList;
var loadedClass = 'gaia-icons-loaded';

/**
 * Exports
 */

exports = module.exports = function(base) {
  var url = base + 'gaia-icons/style.css';
  if (!isLoaded()) { load(url); }
};

function load(href) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = href;
  document.head.appendChild(link);
  bodyClasses.add(loadedClass);
  exports.loaded = true;
}

function isLoaded() {
  return exports.loaded ||
    document.querySelector('link[href*=gaia-icons]') ||
    bodyClasses.contains(loadedClass);
}

});})((function(n,w){'use strict';return typeof define=='function'&&define.amd?
define:typeof module=='object'?function(c){c(require,exports,module);}:
function(c){var m={exports:{}},r=function(n){return w[n];};
w[n]=c(r,m.exports,m)||m.exports;};})('gaia-icons',this));
