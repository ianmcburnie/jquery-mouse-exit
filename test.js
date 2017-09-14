/* eslint no-undef: 0 */

describe("jquery.mouseexit.js", function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 750;

    var dummyEventTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL - 500;

    var dummyEventHandlers = {
        onMouseExit: function(e) {}
    };

    var dom = '<div id="testElement" tabindex="0"><button></button><button></button></div>'
            + '<div id="testElementSibling" tabindex="0"><button></button><button></button></div>';

    var $testElement,
        $testElementSibling;

    beforeEach(function() {
        $('body').empty().append($(dom));
        $testElement = $('#testElement');
        $testElementSibling = $('#testElementSibling');
    });

    it("should trigger mouseexit when mouse leaves element root", function(done) {
        // async assert
        $testElement.on('mouseExit', done);
        // execute
        $testElement.mouseExit().on('mouseExit', dummyEventHandlers.onMouseExit);
        $testElement.trigger("mouseenter").trigger("mouseleave");
    });

    it("should NOT trigger mouseexit when mouse moves from element root to element descendant", function(done) {
        // spy
        spyOn(dummyEventHandlers, 'onMouseExit');
        // execute
        $testElement.mouseExit().on('mouseExit', dummyEventHandlers.onMouseExit);
        $testElement.trigger("mouseenter").trigger("mouseleave");
        $testElement.find('button').first().trigger("mouseenter");
        // async assert
        setTimeout(function() {
            expect(dummyEventHandlers.onMouseExit).not.toHaveBeenCalled();
            done();
        }, dummyEventTimeoutInterval);
    });

    it("should NOT trigger mouseexit when mouse moves from element descendant to element root", function(done) {
        // spy
        spyOn(dummyEventHandlers, 'onMouseExit');
        // execute
        $testElement.mouseExit().on('mouseExit', dummyEventHandlers.onMouseExit);
        $testElement.find('button').first().trigger("mouseenter").trigger("mouseleave");
        $testElement.trigger("mouseenter");
        // async assert
        setTimeout(function() {
            expect(dummyEventHandlers.onMouseExit).not.toHaveBeenCalled();
            done();
        }, dummyEventTimeoutInterval);
    });

    it("should NOT trigger mouseexit when mouse moves from element descendant to element descendant", function(done) {
        // spy
        spyOn(dummyEventHandlers, 'onMouseExit');
        // execute
        $testElement.mouseExit().on('mouseExit', dummyEventHandlers.onMouseExit);
        $testElement.trigger("mouseenter");
        $testElement.find('button').first().trigger("mouseenter").trigger("mouseleave");
        $testElement.find('button').last().trigger("mouseenter");
        // async assert
        setTimeout(function() {
            expect(dummyEventHandlers.onMouseExit).not.toHaveBeenCalled();
            done();
        }, dummyEventTimeoutInterval);
    });
});
