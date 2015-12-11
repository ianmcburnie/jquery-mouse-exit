/**
* @name @ebay/jquery-mouse-exit
* @function $.fn.mouseExit
* @version 0.0.2
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc Triggers 'mouseexit' event when the mouse cursor has completely left
* the given element and it's children.
* @required event.relatedTarget - http://msdn.microsoft.com/en-us/library/ie/ff974881(v=vs.85).aspx
* @fires {object} mouseexit
* @fires {string} mouseexit.lostFocus
* @fires {string} mouseexit.gainedFocus
*/
(function ($, window, document, undefined) {

    $.fn.mouseExit = function mouseExit(options) {

        options = options || {};

        return this.each(function onEach() {

            var $this = $(this),
                timeout;

            // event.relatedTarget is only supported in IE9+
            // http://msdn.microsoft.com/en-us/library/ie/ff974881(v=vs.85).aspx
            $this.on('mouseleave', function onMouseLeave(e) {

                timeout = window.setTimeout(function onTimeout() {
                    $this.trigger('mouseexit', {"lostfocus": e.target, "gainedfocus": e.relatedTarget});

                    if (options.doOnce === true) {
                        $this.off('mouseleave');
                    }

                }, options.delay || 250);

                $this.one('mouseenter', function onMouseEnter(e) {
                    window.clearTimeout(timeout);
                });
            });

        });
    };

}(jQuery, window, document));
