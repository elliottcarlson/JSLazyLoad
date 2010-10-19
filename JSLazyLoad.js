/**
 * JSLazyLoad Script loader with callback.
 *
 * Dynamically load in scripts as they are needed to reduce blocking and amount
 * of base javascript code needed on each pages.
 *
 * Usage:
 *  Load a single file with callback
 *	load('/js/script.js', function(){});
 *
 *  Load multiple files with callback when all files are done loading.
 *	load('/js/script1.js', '/js/script2.js', function(){});
 *
 * load() will accept many scripts at a time, and always assumes the last
 * passed argument is the callback function.
 *
 * Author: Elliott Carlson
 * GitHub: http://elliottcarlson.github.com/JSLazyLoad
 **/
var JSLazyLoad = (function()
{
	// If there are more than 2 arguments passed;
	if (arguments.length > 2)
	{
		var load_index = 0;
		var load_complete = arguments.length - 1;
		var callback = arguments[load_complete]
		// Intermediate callback to maintain if all the passed files have
		// been loaded yet - will only execute the final callback once all
		// files have loaded.
		var check_completion = function()
		{
			if (++load_index == load_complete)
			{
				callback();
			}
		}
		// For each of the passed arguments (-1), call the load() function
		// on it's own, using the intermediate callback.
		for (var index = 0; index < arguments.length - 1; index++)
		{
			JSLazyLoad(arguments[index], check_completion);
		}
	}
	else
	{
		// Add a cache buster to the requested source file.
		var url = arguments[0]; // + '?' + parseInt(Math.random() * 99999999);
		var callback = arguments[1];

		// Load the javascript file by dynamically adding a script element.
		var js = document.createElement('script');
		js.type = 'text/javascript';
		// Check the readyState of the loaded script;
		js.onreadystatechange = function()
		{
			// We need to check for both 'complete' and 'loaded' for IE
			// compatibility - to prevent multiple loads, we keep track of
			// the load state of each script.
			if (this.readyState == 'complete' ||
				this.readyState == 'loaded')
			{
				callback();
			}
		};
		// Also check the onerror and onload calls.
		js.onerror = js.onload = function()
		{
			callback();
		};

		// Set the URL of the script to load
		js.src = url;

		// Append the newly created script tag to the document.
		document.getElementsByTagName('head')[0].appendChild(js);
	}
});