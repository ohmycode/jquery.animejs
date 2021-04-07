/*!
 * jQuery.animejs - Chainable Anime.js calls
 * (c) 2021 Ohmyco.de
 * MIT Licensed.
 *
 * http://github.com/ohmycode/jquery.animejs
 */

/* jshint expr: true */

;(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(root.jQuery);
  }

}(this, function($) {
  $.fn.animejs = function(params) {

    //save reference in case user passes complete() callback
    let cb = params.complete || null;

    this.queue((next) => {
      try {
        params.complete = function() {
          if (typeof cb === 'function') cb();

          // call next item in the queue once animejs triggered the complete() callback
          next();
        }
        anime({
          targets: this.get(),
          ...params
        });
      } catch (error) {
        next();
      }
    });
    return this;
  }

  return $;
}));