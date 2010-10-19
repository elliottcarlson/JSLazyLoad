JSLazyLoad
==========

JavaScript function to load in additional JavaScript files when necessary.

Description
-----------

JSLazyLoad allows you to dynamically load in JavaScript files on demand to
prevent blocking during initial page load as well as removing clutter from
your HTML head.

JSLazyLoad allows you to load in one or multiple JavaScript files at a time,
and provides a callback mechanism once the requested files have finished loading.

Examples
--------

Load a single JavaScript file, and run the callback when done:

    JSLazyLoad('/js/script.js', function()
    {
        // Add functionality here.
    });

Load multiple JavaScript files, and run the callback when all files are finished loading:

    JSLazyLoad('/js/script1.js', '/js/script2.js', '/js/script3.js', function()
    {
        // Add functionality here.
    });


Compatibility
-------------

JSLazyLoad has been tested and is working on:

* Internet Explorer 6
* Internet Explorer 7
* Internet Explorer 8
* FireFox 3.6
* Chrome 6.0

Author
------

Elliott Carlson
trendinteractive (at) gmail (dot) com
https://github.com/elliottcarlson/