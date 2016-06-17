/**
* @file jQuery collection plugin that Triggers 'mouseExit' event when the mouse
* cursor has completely left the given element and it's children.
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @version 0.2.0
* @requires jquery
*/
(function($, window, document, undefined) {
    var pluginName = 'jquery-mouse-exit';

    /**
    * jQuery collection plugin that Triggers 'mouseExit' event when the mouse
    * cursor has completely left the given element and it's children.
    *
    * @method "jQuery.mouseExit"
    * @fires mouseExit - when mouse exits the element boundary
    * @fires {string} mouseExit.lostFocus
    * @fires {string} mouseExit.gainedFocus
    * @return {Object} chainable jQuery class
    */
    $.fn.mouseExit = function mouseExit(options) {
        options = options || {};

        return this.each(function onEach() {
            // check plugin does not already exist
            if (!$.data(this, pluginName)) {
                jQuery.data(this, pluginName, 'true');

                var $this = $(this);
                var timeout;

                // event.relatedTarget is only supported in IE9+
                // http://msdn.microsoft.com/en-us/library/ie/ff974881(v=vs.85).aspx
                $this.on('mouseleave', function onMouseLeave(e) {
                    timeout = window.setTimeout(function onTimeout() {
                        $this.trigger('mouseExit', {lostfocus: e.target, gainedfocus: e.relatedTarget});

                        if (options.doOnce === true) {
                            $this.off('mouseleave');
                        }
                    }, options.delay || 250);

                    $this.one('mouseenter', function onMouseEnter(e) {
                        window.clearTimeout(timeout);
                    });
                });
            }
        });
    };
}(jQuery, window, document));

/**
* The jQuery plugin namespace.
* @external "jQuery.fn"
* @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
*/

/**
* mouseExit event
*
* @event mouseExit
* @type {object}
* @property {object} event - event object
*/
