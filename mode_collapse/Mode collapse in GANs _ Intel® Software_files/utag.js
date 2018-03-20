//tealium universal tag - utag.loader ut4.40.201802141549, Copyright 2018 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_intel_profile-ssg.intel=(\/\/tags\.tiqcdn\.com\/utag\/intel\/[^\S;]*)")){if(RegExp.$1.indexOf("/prod/") === -1) {var s = RegExp.$1;while(s.indexOf("%") != -1) {s = decodeURIComponent(s);}s = s.replace(/\.\./g,"");ul(s);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/intel/profile-ssg.intel/prod/';}}})();}catch(e){};try{
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
var $wap = (function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<9
	// For `typeof node.method` instead of `node.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	location = window.location,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.9.1",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				args = args || [];
				args = [ context, args.slice ? args.slice() : args ];
				if ( list && ( !fired || stack ) ) {
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function() {

	var support, all, a,
		input, select, fragment,
		opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Support tests won't run in some limited or non-browser environments
	all = div.getElementsByTagName("*");
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !all || !a || !all.length ) {
		return {};
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";
	support = {
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType === 3,

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.5/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)

		cssFloat: !!a.style.cssFloat,

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		checkOn: !!input.value,

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Tests for enctype support on a form (#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
		boxModel: document.compatMode === "CSS1Compat",

		// Will be defined later
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true,
		boxSizingReliable: true,
		pixelPosition: false
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
		support.boxSizing = ( div.offsetWidth === 4 );
		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})();

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, ret,
		internalKey = jQuery.expando,
		getByName = typeof name === "string",

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		cache[ id ] = {};

		// Avoids exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		if ( !isNode ) {
			cache[ id ].toJSON = jQuery.noop;
		}
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( getByName ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var i, l, thisCache,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			for ( i = 0, l = name.length; i < l; i++ ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[0],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( !name.indexOf( "data-" ) ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return jQuery.access( this, function( value ) {

			if ( value === undefined ) {
				// Try to fetch any internally stored data first
				return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
			}

			this.each(function() {
				jQuery.data( this, key, value );
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		hooks.cur = fn;
		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val,
				self = jQuery(this);

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, notxml, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			// In IE9+, Flash objects don't have .getAttribute (#12945)
			// Support: IE9+
			if ( typeof elem.getAttribute !== core_strundefined ) {
				ret =  elem.getAttribute( name );
			}

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( rboolean.test( name ) ) {
					// Set corresponding property to false for boolean attributes
					// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
					if ( !getSetAttribute && ruseDefault.test( name ) ) {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					} else {
						elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		var
			// Use .prop to determine if this attribute is understood as boolean
			prop = jQuery.prop( elem, name ),

			// Fetch it accordingly
			attr = typeof prop === "boolean" && elem.getAttribute( name ),
			detail = typeof prop === "boolean" ?

				getSetInput && getSetAttribute ?
					attr != null :
					// oldIE fabricates an empty string for missing boolean attributes
					// and conflates checked/selected into attroperties
					ruseDefault.test( name ) ?
						elem[ jQuery.camelCase( "default-" + name ) ] :
						!!attr :

				// fetch an attribute node for properties not recognized as boolean
				elem.getAttributeNode( name );

		return detail && detail.value !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// fix oldIE value attroperty
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return jQuery.nodeName( elem, "input" ) ?

				// Ignore the value *property* by using defaultValue
				elem.defaultValue :

				ret && ret.specified ? ret.value : undefined;
		},
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
				ret.value :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret == null ? undefined : ret;
			}
		});
	});

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}


				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		event.isTrigger = true;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur != this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			}
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== document.activeElement && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === document.activeElement && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var i,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	hasDuplicate,
	outermostContext,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsXML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,
	sortOrder,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	support = {},
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Array methods
	arr = [],
	pop = arr.pop,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},


	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators = "([*^$|!~]?=)",
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rsibling = /[\x20\t\r\n\f]*[+~]/,

	rnative = /^[^{]+\{\s*\[native code/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,
	rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	funescape = function( _, escaped ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		return high !== high ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Use a stripped-down slice if we can't use a native one
try {
	slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
} catch ( e ) {
	slice = function( i ) {
		var elem,
			results = [];
		while ( (elem = this[i++]) ) {
			results.push( elem );
		}
		return results;
	};
}

/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function isNative( fn ) {
	return rnative.test( fn + "" );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var cache,
		keys = [];

	return (cache = function( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	});
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return fn( div );
	} catch (e) {
		return false;
	} finally {
		// release memory in IE
		div = null;
	}
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( !documentIsXML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
				push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && !rbuggyQSA.test(selector) ) {
			old = true;
			nid = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results, slice.call( newContext.querySelectorAll(
						newSelector
					), 0 ) );
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsXML = isXML( doc );

	// Check if getElementsByTagName("*") returns only elements
	support.tagNameNoComments = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if attributes should be retrieved by attribute nodes
	support.attributes = assert(function( div ) {
		div.innerHTML = "<select></select>";
		var type = typeof div.lastChild.getAttribute("multiple");
		// IE8 returns a string for some attributes even when not present
		return type !== "boolean" && type !== "string";
	});

	// Check if getElementsByClassName can be trusted
	support.getByClassName = assert(function( div ) {
		// Opera can't find a second classname (in 9.6)
		div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
		if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
			return false;
		}

		// Safari 3.2 caches class attributes and doesn't catch changes
		div.lastChild.className = "e";
		return div.getElementsByClassName("e").length === 2;
	});

	// Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	support.getByName = assert(function( div ) {
		// Inject content
		div.id = expando + 0;
		div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
		docElem.insertBefore( div, docElem.firstChild );

		// Test
		var pass = doc.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			doc.getElementsByName( expando ).length === 2 +
			// buggy browsers will return more than the correct 0
			doc.getElementsByName( expando + 0 ).length;
		support.getIdNotName = !doc.getElementById( expando );

		// Cleanup
		docElem.removeChild( div );

		return pass;
	});

	// IE6/7 return modified attributes
	Expr.attrHandle = assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
			div.firstChild.getAttribute("href") === "#";
	}) ?
		{} :
		{
			"href": function( elem ) {
				return elem.getAttribute( "href", 2 );
			},
			"type": function( elem ) {
				return elem.getAttribute("type");
			}
		};

	// ID find and filter
	if ( support.getIdNotName ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );

				return m ?
					m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
						[m] :
						undefined :
					[];
			}
		};
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.tagNameNoComments ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Name
	Expr.find["NAME"] = support.getByName && function( tag, context ) {
		if ( typeof context.getElementsByName !== strundefined ) {
			return context.getElementsByName( name );
		}
	};

	// Class
	Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
			return context.getElementsByClassName( className );
		}
	};

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21),
	// no need to also add to buggyMatches since matches checks buggyQSA
	// A support test would require too much code (would include document ready)
	rbuggyQSA = [ ":focus" ];

	if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explictly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// IE8 - Some boolean attributes are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Opera 10-12/IE8 - ^= $= *= and empty values
			// Should not select anything
			div.innerHTML = "<input type='hidden' i=''/>";
			if ( div.querySelectorAll("[i^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.webkitMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {
		var compare;

		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
			if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
				if ( a === doc || contains( preferredDoc, a ) ) {
					return -1;
				}
				if ( b === doc || contains( preferredDoc, b ) ) {
					return 1;
				}
				return 0;
			}
			return compare & 4 ? -1 : 1;
		}

		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	// Always assume the presence of duplicates if sort doesn't
	// pass them to our comparison function (as in Google Chrome).
	hasDuplicate = false;
	[0, 0].sort( sortOrder );
	support.detectDuplicates = hasDuplicate;

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	// rbuggyQSA always contains :focus, so no need for an existence check
	if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	var val;

	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( !documentIsXML ) {
		name = name.toLowerCase();
	}
	if ( (val = Expr.attrHandle[ name ]) ) {
		return val( elem );
	}
	if ( documentIsXML || support.attributes ) {
		return elem.getAttribute( name );
	}
	return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
		name :
		val && val.specified ? val.value : null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		i = 1,
		j = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		for ( ; (elem = results[i]); i++ ) {
			if ( elem === results[ i - 1 ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[4] ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeName ) {
			if ( nodeName === "*" ) {
				return function() { return true; };
			}

			nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
			};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifider
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsXML ?
						elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
						elem.lang) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && !documentIsXML &&
					Expr.relative[ tokens[1].type ] ) {

				context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
				if ( !context ) {
					return results;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, slice.call( seed, 0 ) );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		documentIsXML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Easy API for creating new setFilters
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Initialize with the default document
setDocument();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	isSimple = /^.[^:#\[\.,]*$/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i, ret, self,
			len = this.length;

		if ( typeof selector !== "string" ) {
			self = this;
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		ret = [];
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, this[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true) );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				rneedsContext.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			cur = this[i];

			while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;
				}
				cur = cur.parentNode;
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

jQuery.fn.andSelf = jQuery.fn.addBack;

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( this.length > 1 && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );

			}
		});
	},

	after: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function( value ) {
		var isFunc = jQuery.isFunction( value );

		// Make sure that the elements are removed from the DOM before they are inserted
		// this can help fix replacing a parent with child elements
		if ( !isFunc && typeof value !== "string" ) {
			value = jQuery( value ).not( this ).detach();
		}

		return this.domManip( [ value ], true, function( elem ) {
			var next = this.nextSibling,
				parent = this.parentNode;

			if ( parent ) {
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		});
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, table ? self.html() : undefined );
				}
				self.domManip( args, table, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call(
						table && jQuery.nodeName( this[i], "table" ) ?
							findOrAppend( this[i], "tbody" ) :
							this[i],
						node,
						i
					);
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery.ajax({
									url: node.src,
									type: "GET",
									dataType: "script",
									async: false,
									global: false,
									"throws": true
								});
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

function findOrAppend( elem, tag ) {
	return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	var attr = elem.getAttributeNode("type");
	elem.type = ( attr && attr.specified ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		var bool = typeof state === "boolean";

		return this.each(function() {
			if ( bool ? state : isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.hover = function( fnOver, fnOut ) {
	return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
};
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 ) {
					isSuccess = true;
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					isSuccess = true;
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					isSuccess = ajaxConvert( s, response );
					statusText = isSuccess.state;
					success = isSuccess.data;
					error = isSuccess.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	}
});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {
	var conv2, current, conv, tmp,
		converters = {},
		i = 0,
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(),
		prev = dataTypes[ 0 ];

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	// Convert to each sequential dataType, tolerating list modification
	for ( ; (current = dataTypes[++i]); ) {

		// There's only work to do if current dataType is non-auto
		if ( current !== "*" ) {

			// Convert response if prev dataType is non-auto and differs from current
			if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split(" ");
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.splice( i--, 0, current );
								}

								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s["throws"] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}

			// Update prev for next iteration
			prev = current;
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var end, unit,
				tween = this.createTween( prop, value ),
				parts = rfxnum.exec( value ),
				target = tween.cur(),
				start = +target || 0,
				scale = 1,
				maxIterations = 20;

			if ( parts ) {
				end = +parts[2];
				unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

				// We need to compute starting value
				if ( unit !== "px" && start ) {
					// Iteratively approximate from a nonzero starting point
					// Prefer the current property, because this process will be trivial if it uses the same units
					// Fallback to end or a simple constant
					start = jQuery.css( tween.elem, prop, true ) || end || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				tween.unit = unit;
				tween.start = start;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
			}
			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
	jQuery.each( props, function( prop, value ) {
		var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( collection[ index ].call( animation, prop, value ) ) {

				// we're done with this property
				return;
			}
		}
	});
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	createTweens( animation, props );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var value, name, index, easing, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/*jshint validthis:true */
	var prop, index, length,
		value, dataShow, toggle,
		tween, hooks, oldfire,
		anim = this,
		style = elem.style,
		orig = {},
		handled = [],
		hidden = elem.nodeType && isHidden( elem );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( index in props ) {
		value = props[ index ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ index ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			handled.push( index );
		}
	}

	length = handled.length;
	if ( length ) {
		dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
		if ( "hidden" in dataShow ) {
			hidden = dataShow.hidden;
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( index = 0 ; index < length ; index++ ) {
			prop = handled[ index ];
			tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
			orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
				doAnimation.finish = function() {
					anim.stop( true );
				};
				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.cur && hooks.cur.finish ) {
				hooks.cur.finish.call( this );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.documentElement;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || document.documentElement;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// Expose jQuery to the global object
//window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}

return jQuery;

})(window);


//boilderplate
/*
if(wap_tms.jquery.ver_1_7_plus){  
  (function ($) {
	$(document).ready(function () {
		console.log("MAIN---> DOM loaded: "+ $.fn.jquery);	
	  $("body").on( "click","a,img[data-wap_ref],label[data-wap_ref],button[data-wap_ref],input[data-wap_ref],img[id=_evh-ric-c],img[data-wap],label,button[data-wap],input[data-wap],div.tile-info h2,div.blade-item h2", function (event) {
		alert("click"); 
	  });
	});	
  }($wap));
}
*/
}catch(e){};
if(!utag_condload){try{
//*********************************************************************************************
//* Extension: WAP Global (1)                                                                 *
//*********************************************************************************************
//*********************************************************************************************
//* Functions                                                                                 *
//*********************************************************************************************
if (!utag_condload) { //temp code until Tealium bug fixed - 5/12/14 
    function wa_setGeo(wa_local) {
        var geo = "";
        switch (wa_local) {
            case "us-en": case "ca-en": case "ca-fr":
                //asmo-na
                geo = "asmo-na";
                break;
            case "br-pt": case "xl-es": case "mx-es": case "co-es": case "cl-es": case "cr-es":
                //asmo-lar
                geo = "asmo-lar";
                break;
            case "ae-ar": case "ae-en": case "az-az": case "bg-bg": case "cz-cs": case "de-de": case "dz-ar": case "dz-fr": case "eg-ar": case "eg-en": case "es-es": case "eu-en": case "fr-fr": case "ge-ka": case "hu-hu": case "ie-en": case "il-he": case "it-it": case "jo-ar": case "ke-en": case "lb-ar": case "ma-ar": case "ma-fr": case "ng-en": case "nl-nl": case "pl-pl": case "pt-pt": case "pt-pt": case "ro-ro": case "ru-ru": case "sa-ar": case "sa-en": case "se-sv": case "tr-tr": case "ua-uk": case "uk-en": case "xe-en": case "xr-ar": case "xr-en": case "za-en": case "ch-de":
                //emea
                geo = "emea";
                break;
            case "ap-en": case "au-en": case "hk-en": case "id-id": case "in-en": case "in-hi": case "kr-ko": case "lk-en": case "my-en": case "nz-en": case "ph-en": case "pk-en": case "sg-en": case "th-th": case "tw-zh": case "vn-vi": case "xa-en": case "jp-ja":
                //apac & ijkk now "apj" in 2015
                geo = "apj";
                break;
            case "cn-zh":
                geo = "prc";
                break;
            default:
                //error handling, no match
                geo = "unassigned";
                break;
        }
        return geo;
    }
    function wa_setSurveyId(wa_local) {
        var surveyId = "";
        switch (wa_local) {
            case "us-en": case "ca-en":
                surveyId = "0";
                break;
            case "ca-fr":
                surveyId = "1";
                break;
            case "cn-zh":
                surveyId = "3";
                break;
            case "jp-ja":
                surveyId = "4";
                break;
            case "de-de":
                surveyId = "5";
                break;
            case "br-pt":
                surveyId = "6";
                break;
            case "es-es":
                surveyId = "7";
                break;
            case "tw-zh":
                surveyId = "8";
                break;
            case "kr-ko":
                surveyId = "9";
                break;
            case "au-en": case "xa-en": case "hk-en":
                surveyId = "10";
                break;
            case "uk-en":
                surveyId = "11";
                break;
            case "xl-es":
                surveyId = "12";
                break;
            default:
                //error handling, no match
                surveyId = "";
                break;
        }
        return surveyId;
    }
    
    /* function tmsGetParamByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          q=location.search;
          console.log("results: " + q);
            console.log("000contains %");
            q=q.replace(/%/g, "%25");
            console.log("q replace1: " + q);
            q=q.replace(/%2525/g, "%25");
            console.log("q replace2: " + q);
          var results = regex.exec(q);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    } */
    function tmsGetParamByName(param, q) {
        if (q) {
            key_array = q.split("?")
            q = "?" + key_array[1];
        }
        else {
            q = wa_doc.location.search || wa_doc.location.hash;
        }
        q = unescape(q);
        if (q) {
            if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
            if (param == null) {
                return urlEncodeIfNecessary(q);
            }
            var pairs = q.split("&");
            for (var i = 0; i < pairs.length; i++) {
                if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                    return pairs[i].substring((pairs[i].indexOf("=") + 1));
                }
            }
        }
        return "";
    }
    function urlEncodeIfNecessary(s) {
        var regex = /[\\\"<>\.;]/;
        var hasBadChars = regex.exec(s) != null;
        return hasBadChars && typeof encodeURIComponent != wapUndef ? encodeURIComponent(s) : s;
    }
    function getDir(numDir) {
        var pathObjn = (typeof wa_pathObj.dir[numDir] === "undefined") ? "" : wa_pathObj.dir[numDir].toLowerCase();
        pathObjn = (pathObjn == "") ? pathObjn : pathObjn;
        return unescape(pathObjn);
    }
    function cleanHref(linkHref) {
        var noLinkVal = "nav-link";
        linkHref = (linkHref == "undefined") ? noLinkVal : linkHref; //check if Href is undefined
        linkHref = linkHref.replace(/^\#$/, noLinkVal); //check if single hash (starts and ends w/ #)
        linkHref = linkHref.replace(/(#vps\=|#shopthirdparty)(.*)/, ""); //remove any VPS or shopthirdparty hash tags
        linkHref = (linkHref.indexOf("javascript:") > -1) ? noLinkVal : linkHref; //check JS void
        linkHref = linkHref.replace(/^http(.?)\:\/\/(www-ssl|www|www3|ubp-media)\.intel\..+?\//, "/"); //removes https://www-ssl.intel.com/, http://www.intel.com/, https://www.intel.com/, http://www3.intel.com/, also supports TLD
        linkHref = (/\?/.test(linkHref)) ? (linkHref.split('?')[0] + '?' + encodeURIComponent(linkHref.split('?')[1])) : linkHref; //if link contains querystring URL encode querystring part to avoid breaking waTrackAsLink function
        return linkHref;
    }
    function clearnHref(linkHref) { var hrefVal = cleanHref(linkHref); return hrefVal; } //catch outdated function calls
    //regex to get domain
    String.prototype.getHostDomain = function () {
        var value = ''; //return blank for default
        if (/intel\./.test(this)) { //only set if domain is Intel branded, i.e. contains .intel. May append to regEx to support other non-standard Intel branded domains
            var regEx = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
            value = this.match(regEx)[1].toString();
        }
        return value;
    }
    function checkReferrerDomain() {
        var wa_hostrefer = wa_doc.referrer.getHostDomain();
        wa_hostrefer = (location.hostname == wa_hostrefer) ? '' : wa_hostrefer; //set if site hostname is different than referrer host name
        return wa_hostrefer;
    }
    //global scope vars
    var wa_doc = document,
    wa_win = window,
    vpsIntel = { config: function (vps) { } }, //legacy VPS support, keep to prevent error until all VPS code removed
    wa_component_name,
    ga_payload = { "dimension": {}, "metric": {} }, //GA component name
    aa_payload = { "eVar": {}, "prop": {}, "list": {}, "event": {}, "standar": {} },//AA component name
    wap_tms = (typeof wap_tms !== "undefined") ? wap_tms : {}; //make sure wap_tms is object (should be set in loader script)
    wap_tms.eloqua = {}; //Set Eloqua Object
    wap_tms.stripQueryStringAndHashFromPath = function (url) { //Function to strip query string and hatch form an URL
      return url.split("?")[0].split("#")[0];
    }
    wap_tms.lastClickedObject = null;
    utag_data.rec_entity_id = utag_data.wa_page_url = wap_tms.stripQueryStringAndHashFromPath(document.location.href).toLowerCase();
  
    utag_data.wa_page_name = document.location.pathname.toLowerCase();
    if(utag_data.wa_page_name === "/" || utag_data.wa_page_name === "/index.html"){
      utag_data.wa_page_name = utag_data.wa_section + ": " + "index.html";
    }
    //cookie functions
    var tms_doc = wa_doc; function tmsSetCookieDomain() { var cookieDomain = location.hostname; cookieDomain = cookieDomain.replace(/(.*)\.intel/, ".intel"); return cookieDomain; } function tmsSetCookie(b, c) { var a = new Date(); a.setTime(a.getTime() + (365 * 24 * 3600 * 1000)); tms_doc.cookie = b + "=" + escape(c) + "; expires=" + a.toGMTString() + "; path=/; domain=" + tms_domain } function tmsNewId() { var a = "{"; for (var b = 1; b <= 32; b++) { var c = Math.floor(Math.random() * 16).toString(16); a += c; if ((b == 8) || (b == 12) || (b == 16) || (b == 20)) { a += "-" } } a += "}"; return a }; function tmsGetCookie(d) { var b = d + "="; var f = b.length; var a = tms_doc.cookie.length; var e = 0; while (e < a) { var c = e + f; if (tms_doc.cookie.substring(e, c) == b) { return tmsGetCookieVal(c) } e = tms_doc.cookie.indexOf(" ", e) + 1; if (e == 0) { break } } return null }; function tmsGetCookieVal(b) { var a = tms_doc.cookie.indexOf(";", b); if (a == -1) { a = tms_doc.cookie.length } return unescape(tms_doc.cookie.substring(b, a)) };
    
    //method to pull 'utag_main' cookie namespace values before Tealium loads
    //this can be used to set UDO elements early for initial load rules eval
    //example code: utag_data.test = (typeof wap_tms.cookie.RC("utag_main").elqid === "undefined") ? '' : wap_tms.cookie.RC("utag_main").elqid;
    wap_tms.cookie = {};
    wap_tms.cookie.DB= function(a, b) {};
    wap_tms.cookie.GV=function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      };
    wap_tms.cookie.decode=function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){wap_tms.cookie.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
    };
    wap_tms.cookie.RC= function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = wap_tms.cookie.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = wap_tms.cookie.decode(h[i]);
                    v = h
                  } else v = wap_tms.cookie.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){wap_tms.cookie.DB(er)};
              }
              o[ck] = {};
              for (f in wap_tms.cookie.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } 
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
     };
    //*********************************************************************************************
    //* CONFIG                                                                                    *
    //*********************************************************************************************
    // Set Adobe Marketing cloud ID
    var adobe_org_id = "AMCV_AD2A1C8B53308E600A490D4D%40AdobeOrg"; 
    var amc_cookie = tmsGetCookie(adobe_org_id); 
    if(amc_cookie){
        var mcid_index = amc_cookie.split("|").indexOf("MCMID"); 
        if(mcid_index > -1){
            utag_data.wa_amc_id = amc_cookie.split("|")[mcid_index+1];
        }                                              
    }              
    
    //set wa_geo in UDO
    utag_data.wa_local = utag_data.wa_local.toLowerCase();
    utag_data.wa_local = (utag_data.wa_local == 'set_me') ? 'unassigned' : utag_data.wa_local;
    utag_data.wa_geo = wa_setGeo(utag_data.wa_local);
    //Duplicate variable for utag_data
    wa_utag_data = "";
    //set Post Tag in UDO
    if (typeof utag_data.postTags != 'undefined'){
            utag_data.wp_post_tags = utag_data.postTags.toString();
    }
    //set wa_survey_id in UDO
    utag_data.wa_survey_id = wa_setSurveyId(utag_data.wa_local);
    var onSiteGeo = utag_data.wa_survey_id; //set as global var so survey tag can use
    //set wa_location and wa_language in UDO
    (function () {
        if (/\-/.test(utag_data.wa_local)) {
            var tmpLocal = utag_data.wa_local.split("-");
            utag_data.wa_location = tmpLocal[0];
            utag_data.wa_language = tmpLocal[1];
        }
        else {
            utag_data.wa_location, utag_data.wa_language = "unassigned";
        }
    })();
    //set org values based on pathname in UDO
    var wa_path_start = (typeof wa_path_start !== "undefined") ? wa_path_start : 1; //check if path folder start is defined, if not set to first folder (for org variables)
    function wa_UrlPathName(strURL) {
        var pathObject = new Object();
        pathObject.dir = new Array();
        i = 1;
        pathObject.fullDir = "/";
        strURL = strURL.replace(/^\//, "");
        while ((node = strURL.match(/^(.+?)(?:\/)+(.*)/)) && node[0].length) {
            pathObject.dir[i++] = node[1];
            pathObject.fullDir += node[1] + "/";
            strURL = node[2];
        }
        pathObject.fileName = strURL;
        return pathObject;
    }
    var wa_pathObj = wa_UrlPathName(location.pathname);
    utag_data.wa_site_id = utag_data.wa_section + ":" + utag_data.wa_geo + ":" + utag_data.wa_local;
    utag_data.wa_org2 = utag_data.wa_geo + ":" + utag_data.wa_local; //ex. asmo-lar:br-pt
    utag_data.wa_org3 = utag_data.wa_org2 + ":" + utag_data.wa_section; //ex. asmo-lar:br-pt:intc
    wap_tms.buildOrg = function (start) {
        utag_data.wa_org4 = (typeof wa_pathObj.dir[start] === "undefined") ? utag_data.wa_org3 : utag_data.wa_org3 + ":" + wa_pathObj.dir[start].toLowerCase();
        utag_data.wa_org5 = (typeof wa_pathObj.dir[start + 1] === "undefined") ? utag_data.wa_org4 : utag_data.wa_org4 + ":" + wa_pathObj.dir[start + 1].toLowerCase();
        utag_data.wa_org6 = (typeof wa_pathObj.dir[start + 2] === "undefined") ? utag_data.wa_org5 : utag_data.wa_org5 + ":" + wa_pathObj.dir[start + 2].toLowerCase();
        utag_data.wa_org7 = utag_data.wa_org6.split(utag_data.wa_org2 + ":")[1];
        utag_data.wa_org8 = (utag_data.wa_geo == "prc") ? utag_data.wa_geo + ":" + utag_data.wa_org7 : "row:" + utag_data.wa_org7;
		utag_data.wa_org9 = (typeof wa_pathObj.dir[start + 3] === "undefined") ? utag_data.wa_org6 : utag_data.wa_org6 + ":" + wa_pathObj.dir[start + 3].toLowerCase();
    }
    wap_tms.buildOrg(wa_path_start);
    //set wa_do_not_track in UDO
    try {
        var isDNT = navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1";
        if (isDNT) {
            utag_data.wa_do_not_track = 'enabled';
        }
        else {
            utag_data.wa_do_not_track = 'disabled';
        }
    } catch (err) { }
    //visit ID cookie
    var tms_domain = tmsSetCookieDomain(), //domain for cookie setting
    tms_cookieVal = tmsGetCookie('wa_visitId'),
    tms_visitId = (tms_cookieVal == null) ? tmsNewId() : tms_cookieVal;
    tmsSetCookie('wa_visitId', tms_visitId);
    utag_data.wa_visit_id = tms_visitId;
    //set querystring params in UDO
    if (tmsGetParamByName('wapkw')) { utag_data.wa_internal_search_referrer = tmsGetParamByName('wapkw'); }
    if (tmsGetParamByName('cid')) { utag_data.wa_campaign_cid = tmsGetParamByName('cid'); }
    if (tmsGetParamByName('icid')) { utag_data.wa_internal_promotion = tmsGetParamByName('icid');}  
    if (tmsGetParamByName('postid')) { utag_data.wa_sprinklr_id = tmsGetParamByName('postid'); }
    if (tmsGetParamByName('eid')) { utag_data.wa_external_id = tmsGetParamByName('eid'); }
    if (tmsGetParamByName('intel_term')) { utag_data.search_keyword = tmsGetParamByName('intel_term'); }
    if (tmsGetParamByName('gclid')) { utag_data.wa_google_click_id = tmsGetParamByName('gclid');}
	if (tmsGetParamByName('gclsrc')) { utag_data.wa_google_click_type = tmsGetParamByName('gclsrc');}
    if (tmsGetParamByName('aid')) { utag_data.wa_aid = tmsGetParamByName('aid');}
    if (tmsGetParamByName('plid')) { utag_data.wa_plid = tmsGetParamByName('plid');}
    if (tmsGetParamByName('sid')) { utag_data.wa_sid = tmsGetParamByName('sid');}
    if (tmsGetParamByName('crid')) { utag_data.wa_crid = tmsGetParamByName('crid');}    
	
	//AA Campaign Tracking (aad utm objects and set eVar29)
	wap_tms.utm_source = tmsGetParamByName('utm_source') ? tmsGetParamByName('utm_source').toLowerCase() : "NA";
	wap_tms.utm_medium = tmsGetParamByName('utm_medium') ? tmsGetParamByName('utm_medium').toLowerCase() : "NA";
	wap_tms.utm_term = tmsGetParamByName('utm_term') ? tmsGetParamByName('utm_term').toLowerCase() : "NA";
	wap_tms.utm_campaign = tmsGetParamByName('utm_campaign') ? tmsGetParamByName('utm_campaign').toLowerCase() : "NA";			
	wap_tms.utm_content = tmsGetParamByName('utm_content') ? tmsGetParamByName('utm_content').toLowerCase() : "NA";
    
    //set gawap_icid cookie value
    wap_tms.gawap_icid = (typeof utag_data.wa_internal_promotion !== "undefined") ? utag_data.wa_internal_promotion : '';
    //set gawap_cid cookie value
    wap_tms.gawap_cid = (typeof utag_data.wa_campaign_cid !== "undefined") ? utag_data.wa_campaign_cid : wap_tms.gawap_cid;
    //Create gawap_icid cookie 
    if (wap_tms.gawap_icid !== "") {
		//document.cookie = "gawap_icid=" + wap_tms.gawap_icid + "; path=/;domain=" + tms_domain;
		wapCreateCookie("gawap_icid",wap_tms.gawap_icid,90);
	}
	if (wap_tms.gawap_cid) {
		//document.cookie = "gawap_cid=" + wap_tms.gawap_cid + "; path=/;domain=" + tms_domain;
		wapCreateCookie("gawap_cid",wap_tms.gawap_cid,90);
	}
		
	function wapCreateCookie(cookieName, cookieValue, cookieDuration){
		var date, expires;
		if (cookieDuration) {
			date = new Date();
			date.setTime(date.getTime()+(cookieDuration*24*60*60*1000));
			expires = "; expires="+date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = cookieName+"="+cookieValue+expires+"; path=/;domain=" + tms_domain;
	}
	
    //set Eloqua Contact ID (long version)
    function genContactId(id) {
        if (id !== "") {
            var tmpId = ("000000000000" + id).slice(-12);
            var elqPrefix = (/dev-/g.test(location.hostname)) ? elqPrefix = 'CINSX' : elqPrefix = 'CINCP'; //set Eloqua prefix for Contact ID
            tmpId = elqPrefix + tmpId;
        }
        else { tmpId = ""; }
        return tmpId;
    }
//set Eloqua Contact ID (short version)
    function genContactIdShort(id) {
        var shortid = id.replace(/(.*)((-)?^(CINSX|CINCP)0+(?=\d))/, '');
        return shortid;
    }
    //1) check for eloqua cookie
    try{
        utag_data.wa_elq_id_short = (typeof wap_tms.cookie.RC("utag_main").elqid == "undefined") ? '' : wap_tms.cookie.RC("utag_main").elqid;
        if(utag_data.wa_elq_id_short!==''){utag_data.wa_elq_id = genContactId(utag_data.wa_elq_id_short);}
    }catch(e){};
    //2) check for eloqua querystring
    if (tmsGetParamByName('elq_cid')) {
        utag_data.wa_elq_id = genContactId(tmsGetParamByName('elq_cid'));
        utag_data.wa_elq_id_short = genContactIdShort(tmsGetParamByName('elq_cid'));
    }
	var erpm_id = wap_tms.cookie.RC("utag_main").wa_erpm_id || tmsGetParamByName('erpm_id');
    if (erpm_id) {
      utag_data.wa_erpm_id = erpm_id;
    }

    //set wa_env if set. wa_env configures analytics to send data to 'test' reporting
    var wa_env = true; //set default to true, data will be sent to production
    if (typeof utag_data.wa_env !== "undefined") {
        if (utag_data.wa_env == 'prod') { wa_env = true; } else { wa_env = false; } //set to 'true' when publishing to production, and 'false' when testing in pre-prod
    }
    //Config default settings for tag loading
    utag_data.load_bluekai = 'true';
    utag_data.load_eloqua = 'true';
    utag_data.load_ghostery = 'true';
    utag_data.load_audiencestream = 'false';
    utag_data.load_iframe_parameters = 'false';
    utag_data.enable_crossdomain = 'true';
                                                                                                                                                                                                                                                                                                                             
    //Custom Analytics Config
    wap_tms.custom = wap_tms.custom || {}; //define object if not already defined
    wap_tms.custom.code = false; //true or false: custom code or default code
    wap_tms.custom.youtube = false; //true or false: enable YouTube tracking
    wap_tms.custom.brightcove = false; //true or false: enable HTML 5 Tracking
    wap_tms.custom.gigya = false; //true or false: add tracking Gigya widget
    wap_tms.custom.facebook = false; //true or false: add event handlers for Facebook
    wap_tms.custom.twitter = false; //true or false: add event handlers for Twitter
    wap_tms.custom.iframe = false; //true or false: enable iframe tracking - TBD
    wap_tms.custom.vimeo = false; //true or false: enable YouTube tracking
    wap_tms.custom.video_duration = 0;// variable to capture video duration
    //true or false: enable adBlockers tracking
    wap_tms.custom.adblockers = {
        check : true
      };
    wap_tms.custom.event_handler = (typeof wa_custom_event_handler == "undefined") ? 0:wa_custom_event_handler; // variable to be set in Target: wa_custom_event_handler = 1;
    wapCrossDomain = false; //Enable cross domain communication in modals.
    wap_tms.custom.init = function (fname) {
        //config custom code (optional)
        /*
          function example:
          wap_tms.custom.myFunctionNameHere = function () {
              //config here     
          };
          
          call function example: 
          //wap_tms.custom=wap_tms.custom||{}; //if config in TMS loader script (before object defined)
          wap_tms.custom.init('myFunctionNameHere');
        */
        try {
            if (typeof this[fname] == 'function') {
                this[fname]();
            }
        }
        catch (err) { };
    };
    
    //Delay GA hits
    wap_tms.custom.delayedHitsQueue = []; 
    wap_tms.custom.delayedPageViewsQueue = [];
    
    //Send hits
    wap_tms.custom.sendDelayedHits = function(){
        wap_ga.delayedHits = false; 
        for (i = 0; i <  wap_tms.custom.delayedPageViewsQueue.length; i++) {  
            gawap(wap_tms.custom.delayedPageViewsQueue[i].trackerName, 'pageview', wap_tms.custom.delayedPageViewsQueue[i].fo);
        } 
        setTimeout(function(){               
            for (i = 0; i < wap_tms.custom.delayedHitsQueue.length; i++) {  
                 wap_tms.events.ga(wap_tms.custom.delayedHitsQueue[i].go, wap_tms.custom.delayedHitsQueue[i].opt_noninteraction, wap_tms.custom.delayedHitsQueue[i].debug, wap_tms.custom.delayedHitsQueue[i].event);
            }  
        }, 1000);
    }
    
    //Create Queue
    wap_tms.custom.includeCustomDefinition = function(value, type, number){
        for (i = 0; i <  wap_tms.custom.delayedHitsQueue.length; i++) {  
            if(type == "dimension"){
                wap_tms.custom.delayedHitsQueue[i].go["dimension" + number] = value;
                ga_payload.dimension[number + ',page'] = value;
            }
            else if(type == "metric"){
                wap_tms.custom.delayedHitsQueue[i].go["metric" + number] = value;
                ga_payload.metric[number + ',page'] = value;
            }            
        }                  
        for (i = 0; i <  wap_tms.custom.delayedPageViewsQueue.length; i++) {                 
            if(type == "dimension"){
                wap_tms.custom.delayedPageViewsQueue[i].fo["dimension" + number] = value;
            }
            else if(type == "metric"){
                wap_tms.custom.delayedPageViewsQueue[i].fo["metric" + number] = value;
            }   
        }   
    }
	
	wap_tms.extractHostname = function extractHostname(url) {
		var hostname;
		//find & remove protocol (http, ftp, etc.) and get hostname
		if (url.indexOf("://") > -1) {
			hostname = url.split('/')[2];
		}
		else {
			hostname = url.split('/')[0];
		}
		//find & remove port number
		hostname = hostname.split(':')[0];
		//find & remove "?"
		hostname = hostname.split('?')[0];
		return hostname;
	}
    
    //List of all assets we track as downloads.
    wap_tms.download = wap_tms.download || {};
    wap_tms.download.assets = "pdf|jpg|png|gif|zip|doc|xls|exe|mp3|bz2|tar|mov|mpg|wmv|msi|gz|bio|rar|iso|7z|txz|sz|py|tgz|txt|reg|pptx|ppt|xlsx|rpm|xml|eprt|bmp|sh|xlsm|ini|jar|ppsx|apk|pkg|flv|bin|ods|bat|chm|deb|emfw|eps|install|jpeg|mp4|prc|rtf|sit|docx|cap|z01|z02|qar|qpf|bsd";
    
    //init content classification data elements and set to blank. Elements will be set to values in 1) lookup table 2) set data ext 3) custom code
    utag_data.content_audience = "unassigned";
    utag_data.content_sub_audience = "unassigned";
    utag_data.content_program = "unassigned";
    utag_data.content_org_initiative = "unassigned";
    utag_data.content_sub_org_initiative = "unassigned";
    utag_data.content_product = "unassigned";
    utag_data.content_ter_initiative = "unassigned";
    utag_data.content_sub_ter_initiative = "unassigned";
    utag_data.content_industry = "unassigned";
    utag_data.wa_site_id_audience = utag_data.content_audience + ":" + utag_data.content_sub_audience + ":" + utag_data.content_org_initiative + ":" + utag_data.content_sub_org_initiative + ":" + utag_data.content_program + ":" + utag_data.content_product + ":" + utag_data.wa_site_id;
    //set referrer domain (GA only)
    wap_tms.referrer = checkReferrerDomain();
    //START jquery config
    wap_tms.jquery = {};
    wap_tms.jquery.ver_1_7_plus = false; //set default to false
    wap_tms.jquery.chk_version = function (ver) {
        var ver = ver + "", //convert (make sure) value is string so we can use regex
        jVer = ver.split("."), //remove all .
        jVerNum1 = Number(jVer[0]), //set first number to test
        jVerNum2 = Number(jVer[1]), //set second number to test
        ver_1_7_plus = false; //set default to false
        if (jVerNum1 >= 2) { ver_1_7_plus = false; } //check if version 2.x is being used, if 2 or greater set to false
        else {
            if (jVerNum2 >= 7) { ver_1_7_plus = true; } //if jQuery 1.7 set to true
            else { ver_1_7_plus = false; } //if jQuery 1.7 or lower set to false
        }
        return ver_1_7_plus;
    };
    //first check: is $wap object available from TMS loader or TMS pre-loader JavaScript?
    if (typeof $wap !== 'undefined') {
        wap_tms.jquery.ver_1_7_plus = wap_tms.jquery.chk_version($wap.fn.jquery); //get version
    }
    else {
        var $wap = {}; //define $wap since its not yet defined
    }
    //second check: is jQuery object available?
    if (!wap_tms.jquery.ver_1_7_plus) { //only check if needed
        if (typeof jQuery !== 'undefined') {  //check if jQuery object is available
            wap_tms.jquery.ver_1_7_plus = wap_tms.jquery.chk_version(jQuery.fn.jquery); //get version
            if (wap_tms.jquery.ver_1_7_plus) { //if version 1.7+ set $wap object
                wap_tms.custom.jquery = true;
                $wap = jQuery; //create wap reference
            }
        }
    }
    //third check: is jQuery_1_10_1 available from global header? //disabled as this code has issues
    /*if(!wap_tms.jquery.ver_1_7_plus){ //only check if needed
      if(typeof load_jquery1_10_1 == 'function'){
        console.log("load_jquery1_10_1");
        load_jquery1_10_1();
        $wap=window.INTELNAV.jQuery_1_10_1;
        $wap.noConflict();
        //window.INTELNAV.jQuery_1_10_1;
        //$wap=$wapTemp;
        //$wapref=$wapTemp; 
      }
    }*/
    //END jquery config
    //START Events config
    wap_tms.events = {};
    wap_tms.events.init = function (type) { //called after GA Pageview sent, used to execute code in sequence
        wap_ga.pageViewTracked = true;
                
        if (type == 'ga') {
        
            if(typeof(wap_tms.eloqua.eloquaSiteId) != "undefined"){
                wap_tms.eloqua.helpers.passWebAnalyticsId();
            }   
        
            if ( wap_ga.registrationFormName != "false") {
                        trackGaEvent('User Account Activity', 'registration: start', wap_ga.registrationFormName, null, true);
                    }
            //init Eloqua Registartion code if wap_tms.eloqua.regstart is defined, if so lib-eloqua.registration is loaded. Fires Eloqua init code if available
            if (typeof wap_tms.eloqua.regstart !== 'undefined') { wap_tms.eloqua.helpers.ready(); } //code loaded, safe to run
            for (var key in wap_ga.udo) {
                if (wap_ga.udo.hasOwnProperty(key)) {
                    if (/dimension/.test(key)) {
                        var dimVal = key.split("dimension")[1] + ",page";
                        var gk = wap_ga.udo[key];
                        if(gk != null){
                            if (/24|50|51|52|53|54|76|100|101|102|103|104|105/.test(key)) {/*don't convert to lowercase*/ }
                            else { gk = gk.toLowerCase(); } //convert to lowercase      
                            ga_payload.dimension[dimVal] = gk;
                        }                                  
                    }
                    if (/metric/.test(key)) {
                        var dimVal = key.split("dimension")[1] + ",hit";
                        ga_payload.metric[dimVal] = wap_ga.udo[key];
                    }
                    //console.log(key + " = " + wap_ga.udo[key]);
                }               
            }
        }
    };
    //END Events config
 
    //Tealium Override rules object
    window.utag_cfg_ovrd = window.utag_cfg_ovrd || {}; // Create 'utag_cfg_ovrd' object if not created
    window.utag_cfg_ovrd.load_rules_at_wait = true; // Set load rule to re-evaluate after 'all tags' scoped extensions
    //example set method: utag_cfg_ovrd['property'] = value;
    //Error handling
    wap_tms.error = {};
    wap_tms.error.type = '';
    wap_tms.error.set = function (error, errorType) {
      error = error.substr(0, error.length - 1);
      wap_tms.error.type += "::" + errorType + error;
      wap_tms.error.type = wap_tms.error.type.replace(/^::/, '');
      var errorType = wap_tms.error.type;
      ga_payload.dimension['66,page'] = errorType;
      ga_payload.dimension['66,hit'] = errorType;
      ga_payload.metric['57,hit'] = '1';
      aa_payload.eVar['67,page'] = errorType;
      aa_payload.eVar['67,hit'] = errorType;
      aa_payload.prop['49,page'] = errorType;
      aa_payload.prop['49,hit'] = errorType;
      aa_payload.event['49,hit'] = '1';
    };
    
    //WAP Version Tracker, call format: wap_tms.version.set('2.0,', 'ga:');
    wap_tms.version = {};
    wap_tms.version.type = '';
    wap_tms.version.set = function (ver, verType) {
        ver = ver.substr(0, ver.length - 1); //remove ,
        wap_tms.version.type += "," + verType + ver;
        wap_tms.version.type = wap_tms.version.type.replace(/^,/, ''); //remove only first instance of ::
        //console.log("wap_tms.version.type: " + wap_tms.version.type);
        ga_payload.dimension['61,page'] = wap_tms.version.type;
    };
    
    //Content Group, call format: wap_tms.content_group.set('android', 'ssg'); MUST contain : in verType last char
    wap_tms.content_group = {};
    wap_tms.content_group.type = '';
    wap_tms.content_group.set = function (ver, verType) {
        ver += '|';
        verType += ':';
        ver = ver.substr(0, ver.length - 1); //remove ,
        wap_tms.content_group.type += "|" + verType + ver;
        wap_tms.content_group.type = wap_tms.content_group.type.replace(/^\|/, ''); //remove only first instance of ::
        utag_data.wa_custom_content_group = wap_tms.content_group.type;
        return wap_tms.content_group.type;
        //console.log("utag_data.wa_custom_content_group: " + utag_data.wa_custom_content_group);
    };
    
    
    //remove email (if present)
    wap_tms.cleanPii = function(str, type) {
        if (/\@/.test(str)) {
            str = str.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}\b/ig, 'removed@email');
            if(str.indexOf("removed@email") != -1){
                wap_tms.error.set(type + ',', 'pii.email:');
            }  
        }
        return str;
    };
	
	//querystring
    wap_tms.getQuerystring = function() {
      var qs;
      try {
        qs = decodeURIComponent(location.search);
      } catch (e) {
        qs = location.search;
      };
      qs = wap_tms.cleanPii(qs, 'qs');
      return qs;
    }
    
    //TMS Sync loading opt - part 2 (part 1 in TMS loader script)
    if(typeof wap_tms.utility !== "undefined"){ //make sure latest version
        utag_data.load_method = (typeof utag_data.load_method !== "undefined") ? utag_data.load_method : '';
        if(utag_data.load_method=="sync"){ //make sure utag.js is loaded as sync
            wap_tms.utility.endTime = new Date().getTime();
            var timeSpent = wap_tms.utility.endTime - wap_tms.utility.startTime;
            //console.log("timeSpent: " + timeSpent+"\n:wap_tms.utility.endTime: " + wap_tms.utility.endTime + "\nwap_tms.utility.startTime: " + wap_tms.utility.startTime);
            if(timeSpent<wap_tms.utility.tmsTimeout){ //remove cookie
                wap_tms.utility.wapSetCookie('tms_timeout','',0);   
                //console.log("Cookie removed");
            }
            else{ //GA error handling capture here
                //console.log("Timeout occured");
                wap_tms.error.set('sync load timeout,', 'tms.load:');
            }
        }
    }   
    
    //gigya share function for gigya share starts here
    function trackGigyaShare(eventObject, provider, url) {
        //{"eventName":"sendDone","providers":"facebook-like","userMessage":"","targetURL":"http://blogs.intel.com/evangelists/2015/03/03/iot-trends-europe/","source":"showShareBarUI","sourceContainerID":"share-bar"} 
        //{"eventName":"sendDone","providers":"facebook","userMessage":"","targetURL":"http://blogs.intel.com/evangelists/2015/03/03/iot-trends-europe/","source":"showShareBarUI","sourceContainerID":"gig_1425498563160_showSimpleShareUI"}
        //{"eventName":"sendDone","providers":"twitter","userMessage":"","targetURL":"http://blogs.intel.com/evangelists/2015/03/03/iot-trends-europe/","source":"showShareBarUI","sourceContainerID":"gig_1425498563160_showShareUI_container"} 
                                ga_payload.dimension['19,hit'] = "gigya-" + (eventObject.sourceContainerID).toLowerCase();
        if (provider == "facebook-like" || provider == "google-plusOne") {
            provider = provider.split("-");
                                                trackGaEvent('Like', provider[0], eventObject.targetURL);                                           
        }
        else if (provider == "print") {
            trackGaEvent('Offline', 'print', url);
        }
        else {
            if (provider.indexOf("google") > -1){provider = "google";}
                                                if(wap_tms.custom.voteMetadata && wap_tms.custom.socialShareComponentID && eventObject.sourceContainerID.toLowerCase() === wap_tms.custom.socialShareComponentID){
                                                                trackGaEvent('Share', provider, eventObject.targetURL,null,false,'', wap_tms.custom.voteMetadata); 
                                                }              
                                                else{
                                                                trackGaEvent('Share', provider, eventObject.targetURL);
                                                }                                                                              
        }
    }
    //gigya function ends here
    
    //Set browser & OS
    (function (window) {
        {
            var unknown = '-';
            //browser
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;
            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
                // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
                // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
                // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
                // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
                // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
                // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }
            // system
            var os = unknown;
            var clientStrings = [
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows ME', r: /Windows ME/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }
            var osVersion = unknown;
            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }
            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;
                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;
                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
        }
        utag_data.user_os = (os + " " + osVersion).toLowerCase();
        utag_data.user_browser = (browser + " " + version).toLowerCase();
        utag_data.user_agent = navigator.userAgent;
    }(this));
    
//**********************************************************************************************************************************************************************
//* Universal Event Tracking Interface                                                                                                                                 *
//**********************************************************************************************************************************************************************
wap_tms.version.set('1.6,','utf:'); //change version for each update, minor for small update, major for big update
wap_tms.events.unique_pci = true; //flag to only set unique page PCI 1x per page
wap_tms.events.unique_g4 = true; //flag to only set unique page  Click to Registration 1x per page
wap_tms.events.unique_g5 = true; //flag to only set unique page  Registration 1x per page
wap_tms.events.unique_g7 = true; //flag to only set unique page  Video Midpoints 1x per page
wap_tms.events.unique_g8 = true; //flag to only set unique page  Downloads 1x per page
wap_tms.events.unique_g9 = true; //flag to only set unique page  Social 1x per page
wap_tms.events.unique_g10 = true; //flag to only set unique page  Logins 1x per page
wap_tms.events.unique_g11 = true; //flag to only set unique page  Third Party Shop 1x per page
wap_tms.events.unique_g12 = true; //flag to only set unique page  Third Party Buy Now 1x per page
wap_tms.events.unique_g13 = true; //flag to only set unique page  Click to Intel Shop 1x per page
wap_tms.events.unique_g14 = true; //flag to only set unique page  Scroll 50% 1x per page
 
wap_tms.events.g4='PER: Registration'; //map DMF KPI to friendly name
wap_tms.events.g5='PER: Click to Registration'; //map DMF KPI to friendly name
wap_tms.events.g6='PER: Page Content Interaction'; //map DMF KPI to friendly name
wap_tms.events.g7='PER: Video Midpoints'; //map DMF KPI to friendly name
wap_tms.events.g8='PER: Downloads'; //map DMF KPI to friendly name
wap_tms.events.g9='PER: Social'; //map DMF KPI to friendly name
wap_tms.events.g10='PER: Logins'; //map DMF KPI to friendly name
wap_tms.events.g11='PIR: Third Party Shop'; //map DMF KPI to friendly name
wap_tms.events.g12='PIR: Third Party Buy Now'; //map DMF KPI to friendly name
wap_tms.events.g13='PIR: Click to Intel Shop'; //map DMF KPI to friendly name
wap_tms.events.g14='PER: Scroll 50%'; //map DMF KPI to friendly name
//wap_tms.events.tog1='pir'; //target mbox conversion, fired only 1x per page load
//wap_tms.events.tog2='per'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog4='per-registration'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog5='per-clicktoregistration'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog6='per-pci'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog7='per-video50'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog8='per-downloads'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog9='per-social'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog10='per-login'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog11='pir-shop3rdparty'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog12='pir-buynow'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog13='pir-intelshop'; //target mbox conversion, fired only 1x per page load
wap_tms.events.tog14='per-scroll_50'; //target mbox conversion, fired only 1x per page load
wap_tms.events.rlsa_page=(utag_data.wa_geo!="prc") ? true : false; //enable data to be sent to RLSA property - page level, temp solution until Google can support
wap_tms.events.rlsa_link=false; //enable data to be sent to RLSA property - link level, temp solution until Google can support
//DMF Points
wap_tms.events.dmfpoints = { 
    none: {val:0,name:'no points'},
    scroll25: {val:3,name:'scroll: 25%'},
    scroll50: {val:5,name:'scroll: 50%'},
    scroll75: {val:5,name:'scroll: 75%'},
    scroll100: {val:5,name:'scroll: 100%'},
    pageload: {val:1,name:'click: page load'},
    interaction: {val:1,name:'click: content interaction'},
    incontent: {val:2,name:'click: in-content'},
    toolstart: {val:10,name:'click: tool start'},
    toolcomplete: {val:10,name:'click: tool complete'},
    register: {val:30,name:'click: register'},
    login: {val:20,name:'click: login'},
    exitother: {val:10,name:'click: exit to non-pir site'},
    exitpir: {val:20,name:'click: exit to pir sites'},
    exitbuy: {val:30,name:'click: exit buy now'},
    downloadexe: {val:5,name:'download: driver'},
    download: {val:20,name:'download: content'},
    share: {val:20,name:'social: share'},
    post: {val:20,name:'social: post'},
    rate: {val:10,name:'social: rate'},
    chat: {val:20,name:'social: chat'},
    email: {val:10,name:'social: email'},
    comment: {val:20,name:'social: comment'},
    vid_s_0: {val:5,name:'video(s): start'},
    vid_s_25: {val:5,name:'video(s): 25%'},
    vid_s_50: {val:5,name:'video(s): 50%'},
    vid_s_75: {val:5,name:'video(s): 75%'},
    vid_s_95: {val:5,name:'video(s): 95%'},
    vid_m_0: {val:5,name:'video(m): start'},
    vid_m_25: {val:10,name:'video(m): 25%'},
    vid_m_50: {val:10,name:'video(m): 50%'},
    vid_m_75: {val:10,name:'video(m): 75%'},
    vid_m_95: {val:10,name:'video(m): 95%'},
    vid_l_0: {val:5,name:'video(l): start'},
    vid_l_25: {val:15,name:'video(l): 25%'},
    vid_l_50: {val:15,name:'video(l): 50%'},
    vid_l_75: {val:15,name:'video(l): 75%'},
    vid_l_95: {val:15,name:'video(l): 95%'},
    vidsize: {t: 9,s: 10,m: 61,l: 221}, //video size to determine points t=threashold(0-15), s=small(15-60), m=medium(61-300), l=large(301+). Defined as in seconds.
    setvidesize : function(vd,val){
        /*assign video points
            vd = [number] video duration
            val: [string] video index reference value, i.e. 'vid_m_50', 'vid_l_100', etc.
        */
        var vidObj = {}; //return object to assign to another object in trackGaEvent
        if (vd == 0 || vd <= this.vidsize.t) {
          vidObj.dimension149 = this.none.name;
          delete vidObj.metric85;
        }
        if(vd >= this.vidsize.t){ //meets minimal threashold, assign video points
            if(vd >= this.vidsize.t){ //small
                var ref = this["vid_s_"+val];
                vidObj.dimension149 = ref.name;
                vidObj.metric85 = ref.val;
            }
            if(vd >= this.vidsize.m){ //medium
                var ref = this["vid_m_"+val];
                vidObj.dimension149 = ref.name;
                vidObj.metric85 = ref.val;
            }
            if(vd >= this.vidsize.l){ //large
                var ref = this["vid_l_"+val];
                vidObj.dimension149 = ref.name;
                vidObj.metric85 = ref.val;
            }
        }
        return vidObj;
    }
};

if (wap_tms.jquery.ver_1_7_plus) {
	(function($) {
		wapDomain = $wap("script[src*='global/wap/wap-']"); 
		if(wapDomain.length > 0){
			wapDomain = $wap("script[src*='global/wap/wap-']")[0].src; 
			if(typeof(wapDomain) != "undefined" && wapDomain.indexOf("ssl") != -1  && wapDomain.indexOf("gigya") == -1){
				urlParts = $wap("script[src*='global/wap/wap-']")[0].src.split('/');
				wapLoaderScript= urlParts[urlParts.length-1];
				wap_tms.version.set(wapLoaderScript + " ", 'file:');           
			}
		}            
	}($wap));
};



//var ttest=wap_tms.events.dmfpoints.setvidesize(0,'100');
//console.log("tttest: " + ttest.dimension149 + "  tttest-val: " + ttest.metric85);
//**********************************************************************************************************************************************************************
//* trackGaEvent() Universal Event capture function                                                                                                                    *
//**********************************************************************************************************************************************************************
/*
Parameter name      |   Type        |   Example Value   |   Description 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Required Parameter
****************** 
category                string          Social              Sets the Event Category. See GA tracking schema or Event tracking documentation for more info.  
action                  string          share               Sets the Event Action. See GA tracking schema or Event tracking documentation for more info.  
Optional Parameter
****************** 
opt_label               string          facebook            Sets the Event Label. See GA tracking schema or Event tracking documentation for more info.  
opt_value               integer         5                   Sets the Event Value for hit. Set to null if no value. See GA tracking schema for more info.  
opt_noninteraction      boolean         true                Sets the Event hit to determine if we want it send as non-interactive. The default is set to false
                                                            which sends the hit as interactive. See GA tracking schema for more info of non-interaction event types.  
opt_callback            string          callbackFunction    Assign a callback function to be called after event hit occurs. Does not accept params. Set to '' to not call
opt_params              string          {'ga':{'dimension199':'test3','dimension198':'test1'},'target': {'test1':'test1','test2':'test2'}} 
                                                            opt-parms: format is javascript object literal. Use 'ga' to set 'go' object and 'target' to set 'to' object
EXAMPLEs: 
trackGaEvent('category','action','opt_label',null,true,'opt_callback', {'ga':{'dimension199':'test3','dimension198':'test1'}}); //example of all option parameters defined
trackGaEvent('category','action','opt_label'); //most events contain category, action & label
trackGaEvent('category','action'); //at a minimum category & action must always be defined
*/
function trackGaEvent(category, action, opt_label, opt_value, opt_noninteraction, opt_callback, opt_params, event) {
    //Configure Vars
    var trackAA = true; 
    var trackGA = true;
    var orginal_action = action, //store original variable case in case we don't want to always lowercase, optional (best practice is to lowercase)
    orginal_label = opt_label, //store original variable case in case we don't want to always lowercase, optional (best practice is to lowercase)
    action = action.toLowerCase(), //convert action to lowercase
    opt_label = (typeof opt_label == "undefined") ? '' : opt_label.toLowerCase(), //if label is defined convert to lowercase, else set to empty string
    eventMap = (category + ":" + action).replace(/\s/g, '').toLowerCase() + "", //eventMap format = category:action (remove all spaces + convert to lowercase). This is used to match specific actions for configuration
    go={}, //GA object (go). This is used to store configuration for send tracker
    to={}, //Target object (to). This is used to store configuration for send tracker
    ao={}, //AudienceStream object (ao). This is used to store configuration for send tracker
    aao={},//Adobe Analytics object (aao). This is used to store configuration for send tracker
    eo={}, //Extend to tags object (eo). This is used to store match rule values to fire addition tags
    ao_track = true, //AudienceStream opt-in. The default is set to true, set to false for hits you don't want to send to AudienceStream
    pts=wap_tms.events.dmfpoints, //shortcut obj reference to reduce code size
    //debug = (tmsGetCookie("wap_debug") != null) ? true : false, //debug, enabled/disabled by cookie
    debug = (typeof wap_tms.debug != 'undefined') ? true : false, //debug, enabled/disabled by JS value
    extendToTags = (utag_data.event_extend_to_tags=='true') ? true : false, //utag_data.event_extend_to_tags = 'true' or 'false'
    defaultTracking = false;
    wap_tms.events.rlsa_link=false; //reset default to false
    
    //add opt_params if passed
    if (typeof opt_params !== "undefined"){
        if (typeof opt_params['ga'] !== "undefined"){go=opt_params['ga'];}; //GA
        //if (typeof opt_params['target'] !== "undefined"){to=opt_params['target'];}; //Target [not yet supported, example only]
    }
     
    //config GA Object (go)
    go.eventCategory = category;
    go.eventAction = action;
    go.eventLabel = opt_label;          
    
    if(opt_value!=''){go.eventValue = opt_value;}
    go.contentGroup1 = utag_data.content_audience;
    go.contentGroup2 = utag_data.content_sub_audience;
    go.dimension19 = (wa_component_name !== "") ? wa_component_name : 'no-component';  //set component name to a defalut value of 'no-component' if not set
    go.hitCallback = function () {if (typeof opt_callback !== "undefined"){if(opt_callback!=''){opt_callback();}}} //optional call back function     
    
    aao.eVar12 = utag_data.content_audience;
    aao.prop12 = utag_data.content_audience;
    aao.eVar13 = utag_data.content_sub_audience;
    aao.prop13 = utag_data.content_sub_audience;
    aao.eVar37 = (wa_component_name !== "") ? wa_component_name : 'no-component';
    aao.prop47 = (wa_component_name !== "") ? wa_component_name : 'no-component';
    
    
    
    //DEBUG
        //for(var key in opt_params){if(opt_params.hasOwnProperty(key)) {var obj = opt_params[key];for (var prop in obj){if(obj.hasOwnProperty(prop)){console.log(prop + "=" + obj[prop]);}}}} //debug JavaScript object 'opt_params'
        //console.log("eventMap: " + eventMap); //debug eventnamp name
    
    //POINTS
    //set interaction and incontent. Note: these may get overriden by switch statement
    if(/(^http|\/)/.test(opt_label)){ //if event label contains 'http' or '/' then set to incontent point value
        if(/(^http)/.test(opt_label)){ //set exits that are not Shop or Third-party
            if(/^http(.*)(intel|americasgreatestmakers|mcafee|altera)\./.test(opt_label)){ //check if Intel absolute URL
                go.dimension149=pts.incontent.name;go.metric85=pts.incontent.val;
                aao.event62 = pts.incontent.val;
                aao.prop32 = pts.incontent.name;
                aao.eVar42 = pts.incontent.name;                
            }
            else{
                go.dimension149=pts.exitother.name;
                go.metric85=pts.exitother.val;
                aao.event62 = pts.exitother.val;
                aao.prop32 = pts.exitother.name;
                aao.eVar42 = pts.exitother.name;                
            }
        }
        else{
            go.dimension149=pts.incontent.name;go.metric85=pts.incontent.val;
            aao.event62 = pts.incontent.val;
            aao.prop32 = pts.incontent.name;
            aao.eVar42 = pts.incontent.name;            
        }
    }
    else{ //set to interaction, i.e. '#', 'nav-link' or other value
        go.dimension149=pts.interaction.name;
        go.metric85=pts.interaction.val;
        aao.event62 = pts.interaction.val;
        aao.prop32 = pts.interaction.name;
        aao.eVar42 = pts.interaction.name;        
    }
//CONFIGURE specific event for each tag 
    switch (true) {
        case (/(^components:click)/.test(eventMap)):
            go.dimension27 = 'click';
            go.dimension28 = action;
            go.dimension29 = action.split(': ')[1] + ':' + opt_label;
            go.metric30 = 1;
			go.metric111 = 1;
            aao.event73 = 1;
			if(action.indexOf("-rec") != -1){
				 go.metric108 = 1;
				 aao.event67 = 1;
			}
            break;
        case (/videos:video:/.test(eventMap)):
            go.eventCategory = 'Videos';
            go.dimension27 = 'video';
            go.eventLabel = orginal_label; //contains ID, do not lowercase
            if (ga_payload.dimension['19,hit']){
				go.dimension19 = ga_payload.dimension['19,hit'];
			}
            var vd = Math.round(wap_tms.custom.video_duration), vidObj,vidSize='unassigned';
            go.dimension26 = vd; //set video duration as custom metric (test)
            
            if(vd <= 60){vidSize='small';} 
            if(vd > 60) {vidSize='medium';} 
            if(vd > 220) {vidSize='large';}
			go.metric114 = 1;
			aao.event76 = 1;
            go.dimension85 = aao.eVar46 = aao.prop36 = vidSize;
            
            switch (true) {
                case (/play/.test(eventMap)):
                    go.dimension28 = 'video:start';
                    go.metric15 = 1;    
                    aao.event14 = 1;                    
                    go.metric83 = vd;//set video duration for on play   
                    aao.event22 = vd;
                    vidObj=pts.setvidesize(vd,'0'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    aao.event62 = vidObj.metric85; 
                    aao.prop32 = vidObj.dimension149;
                    aao.eVar42 = vidObj.dimension149;                    
                    break;
                case (/25/.test(eventMap)):
                    go.dimension28 = 'video:25';
                    go.dimension28 = 'video:25';
                    go.metric84 = 1;
                    aao.event15 = 1;
                    vidObj=pts.setvidesize(vd,'25'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    aao.event62 = vidObj.metric85; 
                    aao.prop32 = vidObj.dimension149;
                    aao.eVar42 = vidObj.dimension149;                    
                    if (wap_tms.events.unique_g7) {
                        go.metric68 = 1;
                        aao.event17 = 1;
                        to.g7 = wap_tms.events.tog7;
                        wap_tms.events.unique_g7 = false;
                    }
               //     go.dimension79 = wap_tms.events.g7;
                    break;
                case (/50/.test(eventMap)):
                    go.dimension28 = 'video:50';
                    go.dimension28 = 'video:50';
                    vidObj=pts.setvidesize(vd,'50'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    aao.event62 = vidObj.metric85; 
                    aao.prop32 = vidObj.dimension149;
                    aao.eVar42 = vidObj.dimension149;                    
                    go.metric16 = 1;
                    aao.event16 = 1;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        aao.event17 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                //    go.dimension79 = wap_tms.events.g7;
                    break;
                case (/75/.test(eventMap)):
                    go.dimension28 = 'video:75';
                    go.metric17 = 1;
                    aao.event18 = 1;
                    vidObj=pts.setvidesize(vd,'75'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    aao.event62 = vidObj.metric85; 
                    aao.prop32 = vidObj.dimension149;
                    aao.eVar42 = vidObj.dimension149;                    
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        aao.event17 = 1;
                        vidObj.metric17 = 1; 
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
               //     go.dimension79 = wap_tms.events.g7;
                    break;
                case (/90/.test(eventMap)):
                    go.dimension28 = 'video:90';
                    go.metric18 = 1;
                    aao.event19 = 1;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        aao.event17 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
               //     go.dimension79 = wap_tms.events.g7;
                    go.dimension149=pts.none.name;
                    delete go.metric85;
                    delete aao.event62;
                    aao.prop32 = pts.none.name;
                    aao.eVar42 = pts.none.name;
                    delete aao.prop29;
                    delete aao.eVar39;
                    break;
                case (/95/.test(eventMap)):
                    go.dimension28 = 'video:95';
                    go.metric19 = 1;
                    aao.event20 = 1;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        aao.event17 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                //    go.dimension79 = wap_tms.events.g7;
                    
                    vidObj=pts.setvidesize(vd,'95'); //retrive vidObj vals
                    go.dimension149 = vidObj.dimension149; //set vidObj vals
                    go.metric85 = vidObj.metric85; //set vidObj vals
                    aao.event62 = vidObj.metric85; 
                    aao.prop32 = vidObj.dimension149;
                    aao.eVar42 = vidObj.dimension149;                   
                    break;
                case (/100/.test(eventMap)):
                    go.dimension28 = 'video:100';
                    go.metric20 = 1;
                    aao.event21 = 1;
                    go.dimension149=pts.none.name;
                    delete go.metric85;
                    delete aao.event62;
                    aao.prop32 = pts.none.name;
                    aao.eVar42 = pts.none.name;
                    delete aao.prop29;
                    delete aao.eVar39;
                    if(wap_tms.events.unique_g7){
                        go.metric68 = 1;
                        aao.event17 = 1;
                        to.g7=wap_tms.events.tog7;
                        wap_tms.events.unique_g7=false;
                    }
                  //  go.dimension79 = wap_tms.events.g7;
                    break;
                case (/share/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:share';
                    go.metric26 = 1;
                    aao.event28 = 1;
                    go.metric29 = 1;
                    aao.event31 = 1;
                    go.dimension149=pts.share.name;
                    go.metric85=pts.share.val;
                    aao.event62 = pts.share.val;
                    aao.prop32 = pts.share.name;
                    aao.eVar42 = pts.share.name;                   
                    if(wap_tms.events.unique_g9){
                        go.metric70 = 1;
                        aao.event32 = 1;
                        to.g9=wap_tms.events.tog9;
                        wap_tms.events.unique_g9=false;
                    }
                 //   go.dimension79 = wap_tms.events.g9;
                    trackGAsocial('intel', action, opt_label); //social shares for Intel video assets
                    break;
                case (/fullscreen/.test(eventMap)):
                    go.metric30 = 1;                    
                    go.dimension28 = 'video:fullscreen';
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^search:/.test(eventMap)):
            go.dimension149=pts.none.name;
            delete go.metric85;
            delete aao.event62;
            aao.prop32 = pts.none.name;
            aao.eVar42 = pts.none.name;
            delete aao.prop29;
            delete aao.eVar39;
            go.eventLabel = go.eventLabel.toLowerCase();
            ao_track = false;
            switch (true) {
                case (/search-box/.test(eventMap)):
                    go.dimension27 = 'search';
                    go.dimension28 = 'search:' + action.split(': ')[1];
                    go.dimension41 = opt_label;//keyword
                    go.metric39 = 1;
                    aao.event55 = 1;
                    ao_track = true;
                    break;
                case (/:filter|:sitefilter/.test(eventMap)):
                    go.dimension27 = 'search';
                    go.dimension28 = 'search:' + action.replace(/\s/, '').replace(/\s/g, '-');
                    go.metric32 = 1;
                    aao.event33 = 1;
                    go.metric39 = 1;
                    aao.event55 = 1;                    
                    break;
                case (/additional|related/.test(eventMap)):
                    go.dimension27 = 'search';
                    go.dimension28 = 'search:search-results:' + action.split(': ')[1].replace(/\s/g, '-');
                    go.metric39 = 1;
                    aao.event55 = 1;
                    break;
                case (/menu/.test(eventMap)):
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:' + opt_label;
                    go.metric30 = 1;                    
                    break;
                default:
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:' + action.replace(/\s/, '').replace(/\s/g, '-');
                    go.metric30 = 1;
                    go.dimension149=pts.incontent.name;
                    go.metric85=pts.incontent.val;
                    aao.event62 = pts.incontent.val;
                    aao.prop32 = pts.incontent.name;
                    aao.eVar42 = pts.incontent.name;                    
                    break;
            }
            break;
        case (/^offline:/.test(eventMap)):
            switch (true) {
                case (/download/.test(eventMap)):
                    go.eventCategory = 'Downloads';
                    go.dimension27 = 'download';
                    go.dimension28 = 'download:' + action.split(': ')[1];
                    go.metric37 = 1;
                    aao.event40 = 1;
                    go.dimension149=pts.download.name;
                    go.metric85=pts.download.val;
                    aao.event62 = pts.download.val;
                    aao.prop32 = pts.download.name;
                    aao.eVar42 = pts.download.name;                    
                    if(wap_tms.events.unique_g8){
                        go.metric69 = 1;
                        aao.event41 = 1;
                        to.g8=wap_tms.events.tog8;
                        wap_tms.events.unique_g8=false;
                    }
                //    go.dimension79 = wap_tms.events.g8;
                    break;
                case (/print/.test(eventMap)):
                    go.dimension27 = 'print';
                    go.dimension28 = 'print:page';
                    go.metric33 = 1;
                    aao.event34 = 1;
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^downloads:/.test(eventMap)):
            var wa_ga_download_regex = new RegExp("\\.("+wap_tms.download.assets+")(()|(\\?.*)|(\\|.*))$","g");
            var fileExt = (go.eventAction.match(wa_ga_download_regex)+ "").toLowerCase();
            try { 
            fileExt = (/\?/.test(fileExt))?fileExt.split('?')[0]:fileExt;
            fileExt = (/\|/.test(fileExt))?fileExt.split('|')[0]:fileExt;
            fileExt = fileExt.split("."); fileExt = fileExt[1]; 
            if(fileExt == undefined) fileExt = "others";
            } catch (err) { } //remove period from string
            go.eventCategory = 'Downloads';
            go.eventLabel = go.eventAction;
            go.eventAction = 'download: ' + fileExt;
            go.dimension27 = 'download';
            go.dimension28 = 'download:' + go.eventAction.split(': ')[1];
            go.metric37 = 1;
            aao.event40 = 1;
			go.metric112 = 1;
			aao.event74 = 1;
            if(fileExt=='exe'){
                go.dimension149=pts.downloadexe.name;
                go.metric85=pts.downloadexe.val;
                aao.event62 = pts.downloadexe.val;
                aao.prop32 = pts.downloadexe.name;
                aao.eVar42 = pts.downloadexe.name;                
            }
            else{
                go.dimension149=pts.download.name;
                go.metric85=pts.download.val;
                aao.event62 = pts.download.val;
                aao.prop32 = pts.download.name;
                aao.eVar42 = pts.download.name;                
            }
            if(wap_tms.events.unique_g8){
                go.metric69 = 1;
                aao.event41 = 1;
                to.g8=wap_tms.events.tog8;
                wap_tms.events.unique_g8=false;
            }
        //    go.dimension79 = wap_tms.events.g8;
            break;
        case (/^shop:/.test(eventMap)):
            switch (true) {
                case (/buynow/.test(eventMap)):
                    go.dimension27 = 'thirdparty';
                    go.dimension28 = 'thirdparty:buy';
                    go.metric6 = 1;
                    aao.event9 = 1;
                    go.metric7 = 1;
                    aao.event11 = 1;
                    go.metric54 = 1;                    
                    go.eventLabel = opt_label; //go.eventLabel = opt_label + "#pir-buy";
                    if(wap_tms.events.unique_g12){
                        go.metric74 = 1;
                        aao.event10 = 1;
                        to.g12=wap_tms.events.tog12;
                        wap_tms.events.unique_g12=false;
                    }  
             //       go.dimension81 = wap_tms.events.g1;
             //       go.dimension82 = wap_tms.events.g12;
                    go.dimension149=pts.exitbuy.name;
                    go.metric85=pts.exitbuy.val;
                    aao.event62 = pts.exitbuy.val;
                    aao.prop32 = pts.exitbuy.name;
                    aao.eVar42 = pts.exitbuy.name;                    
                    break;
                case (/buythird-party/.test(eventMap)):
                    go.dimension27 = 'thirdparty';
                    go.dimension28 = 'thirdparty:shop';
                    go.metric5 = 1;
                    aao.event7 = 1;
                    go.metric7 = 1;
                    aao.event11 = 1;
                    go.metric54 = 1;
                    //go.eventLabel = opt_label;  
					go.eventLabel = opt_label + "#pir-shop";
                    if(wap_tms.events.unique_g11){
                        go.metric73 = 1;
                        aao.event8 = 1;
                        to.g11=wap_tms.events.tog11;
                        wap_tms.events.unique_g11=false;
                    }
               //     go.dimension81 = wap_tms.events.g1;
               //     go.dimension82 = wap_tms.events.g11;
                    go.dimension149=pts.exitpir.name;
                    go.metric85=pts.exitpir.val;
                    aao.event62 = pts.exitpir.val;
                    aao.prop32 = pts.exitpir.name;
                    aao.eVar42 = pts.exitpir.name;                    
                    break;
                case (/reset/.test(eventMap)):
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:reset';
                    break;
                case (/filter/.test(eventMap)):
                    go.dimension27 = 'filter';
                    go.dimension28 = opt_label;
                    go.metric32 = 1;
                    aao.event33 = 1;
                    break;
                case (/compare/.test(eventMap)):
                    go.dimension27 = 'click';
                    go.dimension28 = 'click:compare';
                    go.metric46 = 1;
                    aao.event36 = 1;
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^useraccountactivity:/.test(eventMap)):
            switch (true) {
                case (/registration:start/.test(eventMap)):
                    go.dimension27 = 'registration';
                    go.dimension28 = 'registration:start';
                    go.metric1 = 1;
                    aao.event3 = 1;
                    go.dimension149=pts.none.name;
                    delete go.metric85;
                    delete aao.event62;
                    aao.prop32 = pts.none.name;
                    aao.eVar42 = pts.none.name;                    
                    if(!wap_ga.pageViewTracked){
                                    wap_ga.registrationFormName = opt_label;                                                      
                                    return;
                                } 
                    break;
                case (/registration:complete/.test(eventMap)):
                    go.dimension27 = 'registration';
                    go.dimension28 = 'registration:complete';
                    go.metric2 = 1;
                    aao.event4 = 1;
                    if(wap_tms.events.unique_g5){
                        go.metric65 = 1;
                        aao.event5 = 1;
                        to.g5=wap_tms.events.tog5;
                        wap_tms.events.unique_g5=false;
                    }
              //      go.dimension79 = wap_tms.events.g4;
                    if (/opt-in:/.test(opt_label)) { go.metric3 = 1; }
                    wap_tms.events.rlsa_link=true; //send to RLSA property
                    go.dimension149=pts.register.name;
                    go.metric85=pts.register.val;
                    aao.event62 = pts.register.val;
                    aao.prop32 = pts.register.name;
                    aao.eVar42 = pts.register.name;                    
                    if (typeof go.dimension105 !== "undefined") {ao.wa_elq_id=go.dimension105;} //AudienceStream, Eloqua ID
                    if (typeof go.dimension115 !== "undefined") {ao.wa_elq_id_short=go.dimension115;} //AudienceStream, Eloqua ID short
                    if (typeof go.dimension106 !== "undefined") {ao.wa_audience_optin=go.dimension106;utag_data.wa_audience_optin=go.dimension106;} //AudienceStream, Opt-in Status
                    break;
                case (/registration:intel/.test(eventMap)):
                    go.dimension27 = 'registration';
                    go.dimension28 = 'registration:start';
                    go.metric1 = 1;
                    aao.event3 = 1;
                    break;
                case (/login:intel/.test(eventMap)):
                    go.dimension27 = 'login';
                    go.dimension28 = 'login:intel';
                    go.metric35 = 1;
                    aao.event37 = 1;
                    if(wap_tms.events.unique_g10){
                        go.metric71 = 1;
                        aao.event38 = 1;
                        to.g10=wap_tms.events.tog10;
                        wap_tms.events.unique_g10=false;
                    }
               //     go.dimension79 = wap_tms.events.g10;
                    go.dimension149=pts.login.name;
                    go.metric85=pts.login.val;
                    aao.event62 = pts.login.val;
                    aao.prop32 = pts.login.name;
                    aao.eVar42 = pts.login.name;                    
                    break;
                case (/login:social/.test(eventMap)):
                    go.dimension27 = 'login';
                    go.dimension28 = 'login:social';
                    go.metric35 = 1;
                    aao.event37 = 1;
                    if(wap_tms.events.unique_g10){
                        go.metric71 = 1;
                        aao.event38 = 1;
                        to.g10=wap_tms.events.tog10;
                        wap_tms.events.unique_g10=false;
                    }
                //    go.dimension79 = wap_tms.events.g10;
                    go.dimension149=pts.login.name;
                    go.metric85=pts.login.val;
                    aao.event62 = pts.login.val;
                    aao.prop32 = pts.login.name;
                    aao.eVar42 = pts.login.name;                    
                    break;
                case (/updateprofile|savecontent/.test(eventMap)):
                    go.dimension27 = 'save';
                    go.dimension28 = 'save:' + action.split(': ')[1].replace(/\s/g, '-');
                    go.metric34 = 1;
                    break;
                case (/survey:optin/.test(eventMap)):
                    go.dimension27 = 'survey';
                    go.dimension28 = 'survey:optin';
                    go.metric80 = 1;
                    aao.event61 = 1;
                    break;
                case (/survey:response/.test(eventMap)):
                    go.dimension27 = 'survey';
                    go.dimension28 = 'survey:response';
                    break;
                default:
                    defaultTracking = true;
                    break;
            }
            break;
        case (/^chat:/.test(eventMap)):
            go.eventCategory = 'Social';
            go.eventAction = go.eventAction.replace(/click:/g, 'chat:');
            go.dimension27 = 'chat';
            go.dimension28 = 'chat:' + opt_label.split(':')[0];
            go.metric36 = 1;
            aao.event39 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                aao.event32 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
         //   go.dimension79 = wap_tms.events.g9;
            go.dimension149=pts.chat.name;
            go.metric85=pts.chat.val;
            aao.event62 = pts.chat.val;
            aao.prop32 = pts.chat.name;
            aao.eVar42 = pts.chat.name;            
            break;
        case (/^tools/.test(eventMap)):
            go.dimension27 = 'tool';
            go.dimension28 = 'tool:' + action.split('\-tool:')[0];
            go.metric47 = 1;            
            break;
        case (/^comment/.test(eventMap)):
            if (eventMap == 'comment:reply') { go.metric58 = 1; }
            if (eventMap == 'comment:post') { go.metric59 = 1; }
            go.dimension29 = go.eventAction;
            go.eventCategory = 'Social';
            go.eventAction = 'comment: ' + go.eventAction;
            go.dimension27 = 'social';          
            go.dimension28 = 'social:comment';
            go.metric22 = 1;
            aao.event24 = 1;
            go.metric29 = 1;
            aao.event31 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                aao.event32 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
        //    go.dimension79 = wap_tms.events.g9;
            go.dimension149=pts.comment.name;
            go.metric85=pts.comment.val;
            aao.event62 = pts.comment.val;
            aao.prop32 = pts.comment.name;
            aao.eVar42 = pts.comment.name;            
            break;
        case (/^share|^email/.test(eventMap)):
            go.eventCategory = 'Social';
            go.dimension29 = go.eventAction;
            go.eventAction = (action == 'mailto') ? 'share: email' : 'share: ' + go.eventAction; //fix for PER (2/20/14, remove after cleanup)
            //go.eventAction='share: '+go.eventAction;
            go.dimension27 = 'social';
            go.dimension28 = 'social:share';
            go.metric26 = 1;
            aao.event28 = 1;
            go.metric29 = 1;
            aao.event31 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                aao.event32 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
         //   go.dimension79 = wap_tms.events.g9;
            if(/^share/.test(eventMap)){
                go.dimension149=pts.share.name;go.metric85=pts.share.val;
                aao.event62 = go.metric85=pts.share.val;
                aao.prop32 = pts.share.name;
                aao.eVar42 = pts.share.name;                
            } //share
            else{
                go.dimension149=pts.email.name;go.metric85=pts.email.val;
                aao.event62 = pts.email.val;
                aao.prop32 = pts.email.name;
                aao.eVar42 = pts.email.name;                
            } //email
            break;
        case (/^like/.test(eventMap)):
            go.eventCategory = 'Social';
            go.dimension29 = go.eventAction;
            go.eventAction = 'like: ' + go.eventAction;
            go.dimension27 = 'social';
            go.dimension28 = 'social:like';
            go.metric23 = 1;
            aao.event25 = 1;
            go.metric29 = 1;
            aao.event31 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                aao.event32 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
        //    go.dimension79 = wap_tms.events.g9;
            go.dimension149=pts.share.name;
            go.metric85=pts.share.val;
            aao.event62 = pts.share.val;
            aao.prop32 = pts.share.name;
            aao.eVar42 = pts.share.name;            
            break;
        case (/^rss/.test(eventMap)):
            go.dimension27 = go.eventCategory.toLowerCase();
            go.eventCategory = 'User Account Activity';
            go.eventAction = 'rss: ' + go.eventAction;
            go.dimension28 = 'rss:' + opt_label;
            break;
        case (/^follow/.test(eventMap)):
            go.eventCategory = 'Social';
            go.dimension29 = go.eventAction;
            go.eventAction = 'follow: ' + go.eventAction;
            go.dimension27 = 'social';
            go.dimension28 = 'social:follow';
            go.metric25 = 1;
            aao.event27 = 1;
            go.metric29 = 1;
            aao.event31 = 1;
            if(wap_tms.events.unique_g9){
                go.metric70 = 1;
                aao.event32 = 1;
                to.g9=wap_tms.events.tog9;
                wap_tms.events.unique_g9=false;
            }
        //    go.dimension79 = wap_tms.events.g9;
            break;
        case (/^third-party/.test(eventMap)):
            go.dimension27 = 'thirdparty';
            go.dimension28 = 'thirdparty:std';
            go.metric4 = 1;
            aao.event6 = 1;
            go.metric7 = 1;
            aao.event11 = 1;
            go.metric54 = 1;
            //go.eventLabel = opt_label; 
			go.eventLabel = opt_label + "#pir-exit";
            if(wap_tms.events.unique_g11){
                go.metric73 = 1;
				aao.event8 = 1;
                to.g11=wap_tms.events.tog11;
                wap_tms.events.unique_g11=false;
            }
        /*    go.dimension81 = wap_tms.events.g1;
            go.dimension82 = wap_tms.events.g11;*/
            go.dimension149=pts.exitpir.name;
            go.metric85=pts.exitpir.val;
            aao.event62 = pts.exitpir.val;
            aao.prop32 = pts.exitpir.name;
            aao.eVar42 = pts.exitpir.name;            
            break;
        case (/^social:/.test(eventMap)):
            switch (true) {
                case (/referral/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:referral';
                    go.metric21 = 1;
                    aao.event23 = 1;
                    go.metric29 = 1;
                    aao.event31 = 1;
					go.metric113 = 1;
					aao.event75 = 1;
                    go.dimension149=pts.exitother.name;
                    go.metric85=pts.exitother.val;
                    aao.event62 = pts.exitother.val;
                    aao.prop32 = pts.exitother.name;
                    aao.eVar42 = pts.exitother.name;                    
                    break;
                case (/rate:/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:rate';
                    go.metric28 = 1;
                    aao.event30 = 1;
                    go.metric29 = 1;
                    aao.event31 = 1;
					go.metric113 = 1;
					aao.event75 = 1;
                    if (!go.dimension29) {go.dimension29 = location.pathname.toLowerCase(); }
                    if(wap_tms.events.unique_g9){
                        go.metric70 = 1;
                        aao.event32 = 1;
                        to.g9=wap_tms.events.tog9;
                        wap_tms.events.unique_g9=false;
                    }
               //     go.dimension79 = wap_tms.events.g9;
                    go.dimension149=pts.rate.name;
                    go.metric85=pts.rate.val;
                    aao.event62 = pts.rate.val;
                    aao.prop32 = pts.rate.name;
                    aao.eVar42 = pts.rate.name;                    
                    break;
                case (/vote:/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:vote';
                    go.metric24 = 1;
                    aao.event26 = 1;
                    go.metric29 = 1;
                    aao.event31 = 1;
					go.metric113 = 1;
					aao.event75 = 1;
                    break;
                case (/share:/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:share';
                    go.metric24 = 1;
                    aao.event26 = 1;
                    go.metric26 = 1;
                    aao.event28 = 1;
                    go.metric29 = 1;
                    aao.event31 = 1;
					go.metric113 = 1;
					aao.event75 = 1;
                    break;
                case (/like/.test(eventMap)):
                    go.dimension27 = 'social';
                    go.dimension28 = 'social:like';
                    go.dimension29 = eventMap.substring(12); 
                    go.metric23 = 1;
                    aao.event25 = 1;
                    go.metric29 = 1;
                    aao.event31 = 1;
                    go.metric55 = 1; 
                    aao.event47 = 1;    
					go.metric113 = 1;
					aao.event75 = 1;					
            }
            break;
        case (/^navigation:/.test(eventMap)):
            go.dimension27 = 'nav';
            go.dimension149=pts.none.name;
            delete go.metric85;
            delete aao.event62;
            aao.prop32 = pts.none.name;
            aao.eVar42 = pts.none.name;            
            ao_track = false;
            switch (true) {
                case (/megamenu|menu/.test(eventMap)):
                    go.dimension28 = 'nav:menu';
                    go.dimension29 = 'nav:menu:' + opt_label;
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.eventAction = 'nav: menu';
                    break;
                case (/footer/.test(eventMap)):
                    go.dimension28 = 'nav:footer';
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.eventAction = 'nav: footer';
                    break;
                case (/header/.test(eventMap)):
                    go.dimension28 = 'nav:header';
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.eventAction = 'nav: header';
                    break;
                case (/sign-out/.test(eventMap)):
                    go.dimension28 = 'nav:sign-out';
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.eventAction = 'nav: sign-out';
                    break;
                case (/selectlanguage/.test(eventMap)):
                    go.dimension28 = 'nav:language';
                    go.dimension29 = 'nav:language:' + wap_ga.wa_local;
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.eventAction = 'nav: select language';
                    break;
                case (/scroll/.test(eventMap)):
                    go.dimension27 = 'scroll';
					go.metric110 = 1;
					aao.event72 = 1;
                    ao_track = true;
                    switch (true) {
                        case (/25/.test(action)):
                            go.metric48 = 1;
                            aao.event43 = 1;
                            go.dimension28 = 'scroll:25';
                            go.dimension149=pts.scroll25.name;
                            go.metric85=pts.scroll25.val;
                            aao.event62 = pts.scroll25.val;
                            aao.prop32 = pts.scroll25.name;
                            aao.eVar42 = pts.scroll25.name;                            
                            break;
                        case (/50/.test(action)):
                            go.metric49 = 1;
                            aao.event44 = 1;
                            go.dimension28 = 'scroll:50';
                            if(wap_tms.events.unique_g14){
                                go.metric72 = 1;    
                                aao.event70 = 1;                            
                                to.g14=wap_tms.events.tog14;
                                wap_tms.events.unique_g14=false;
                            }
                       //     go.dimension79 = wap_tms.events.g14;
                            go.dimension149=pts.scroll50.name;
                            go.metric85=pts.scroll50.val;
                            aao.event62 = pts.scroll50.val;
                            aao.prop32 = pts.scroll50.name;
                            aao.eVar42 = pts.scroll50.name;                            
                            break;
                        case (/75/.test(action)):
                            go.metric50 = 1;
                            aao.event45 = 1;
                            go.dimension28 = 'scroll:75';
                            go.dimension149=pts.scroll75.name;
                            go.metric85=pts.scroll75.val;
                            aao.event62 = pts.scroll75.val;
                            aao.prop32 = pts.scroll75.name;
                            aao.eVar42 = pts.scroll75.name;                            
                            break;
                        case (/100/.test(action)):
                            go.metric51 = 1;
                            aao.event46 = 1;
                            go.dimension28 = 'scroll:100';
                            go.dimension149=pts.scroll100.name;
                            go.metric85=pts.scroll100.val;
                            aao.event62 = pts.scroll100.val;
                            aao.prop32 = pts.scroll100.name;
                            aao.eVar42 = pts.scroll100.name;                            
                            break;
                    }
                    break;
                case (/filter/.test(eventMap)):
                    go.dimension28 = 'nav:filter';
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.metric32 = 1;
                    aao.event33 = 1;
                    go.eventAction = 'nav: filter';
                    break;
                case (/in-page/.test(eventMap)):
                    go.dimension28 = 'nav:in-page';
                    go.dimension29 = 'nav:in-page:' + opt_label.split(':')[0];
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.dimension149=pts.interaction.name;
                    go.metric85=pts.interaction.val;
                    aao.event62 = pts.interaction.val;
                    aao.prop32 = pts.interaction.name;
                    aao.eVar42 = pts.interaction.name;                    
                    ao_track = true;
                    break;
                case (/left/.test(eventMap)):
                    go.dimension28 = 'nav:leftnav';
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.eventAction = 'nav: left-nav';
                    ao_track = true;
                    break;
                default:
                    go.dimension28 = 'nav:in-page';
                    go.dimension29 = 'nav:in-page:' + opt_label.split(':')[0];
                    go.metric43 = 1;
                    aao.event35 = 1;
                    go.eventAction = 'click: in-page';
                    go.eventLabel = action.split(': ')[1] + ':' + opt_label;
                    go.dimension149=pts.interaction.name;
                    go.metric85=pts.interaction.val;
                    aao.event62 = pts.interaction.val;
                    aao.prop32 = pts.interaction.name;
                    aao.eVar42 = pts.interaction.name;                    
                    ao_track = true;
                    break;
            }
            break;
			case (/^page/.test(eventMap)):
				delete go.metric85;
				delete aao.event62;
				go.dimension149 = aao.prop32 = aao.eVar42 = pts.none.name;
				switch (true) {
					case (/clicktale/.test(eventMap)):
                        trackGA = false; 
						go.dimension27 = aao.eVar65 = 'ni';
						go.dimension28 = aao.eVar64 = 'ni:clicktale';
						break;
					case (/target/.test(eventMap)):
                        trackGA = false; 
						go.eventLabel = go.dimension76 + ": " + go.dimension40;
						go.dimension27 = 'ni';
						go.dimension19 = 'target';
						go.dimension28 = 'ni:target';
						go.metric64 = 1;
						aao.event69 = 1;						
						aao.eVar116 = ga_payload.dimension['40,page'] = go.dimension40;
						aao.eVar115 = ga_payload.dimension['76,page'] = go.dimension76;
						ga_payload.dimension['40,page'] = go.dimension40;
						ga_payload.dimension['76,page'] = go.dimension76;
						ga_payload.dimension['77,page'] = go.dimension77;
						utag_data.target_campaign_name += (',' + go.dimension76);
						utag_data.target_campaign_recipe_name += (',' + go.dimension40);
						utag_data.target_offer_name += (',' + go.dimension77);
						utag_data.target_campaign_name = utag_data.target_campaign_name.replace(/^,/, '');
						utag_data.target_campaign_recipe_name = utag_data.target_campaign_recipe_name.replace(/^,/, '');
						utag_data.target_offer_name = utag_data.target_offer_name.replace(/^,/, '');
						if (typeof utag_data.target_cookie !== "undefined") {
							ao.target_cookie = utag_data.target_cookie;
						}
						if (typeof(go.dimension114) == "string") {
							aao.eVar107 = go.dimension114;
							utag_data.target_cookie = go.dimension114; 
						}
						if (typeof(go.dimension76) == "string") {
							aao.eVar115 = go.dimension76;
						}
						if (typeof(go.dimension40) == "string") {
							aao.eVar116 = go.dimension40;
						}
						if (typeof(go.metric103) == "number") {
							aao.event71 = go.metric103;
						}
						break;
					case (/realusermonitoring/.test(eventMap)):
						if (sessionStorage.getItem("wapError") && sessionStorage.getItem("wapError") != "null") {
							var url = sessionStorage.getItem("wapErrorUrl");
							var msg = sessionStorage.getItem("wapErrorMessage");
							wap_tms.handle_error(msg, url);
							sessionStorage.setItem("wapError", null);
						}
						go.dimension27 = 'ni';
						go.dimension19 = 'rum';
						go.dimension28 = 'ni:rum';
						go.metric77 = 1;
						aao.event52 = 1;
						ao_track = false;
						aao.event51 = go.metric76;
						aao.event53 = go.metric81;
						aao.event54 = go.metric82;
						if (!wap_tms.clickTaleIntegrated && typeof(utag_data.load_clicktale) != "undefined" && utag_data.load_clicktale == "true") {
							wap_tms.clickTaleIntegrated = true;
							go.metric109 = 1;
							aao.event66 = 1;
							if (wap_tms.clickTaleGetUID_PID() != null) {
								wap_tms.clickTaleIDAvailable = true;
								utag_data.wa_clicktale_id = wap_tms.clickTaleGetUID_PID();
								go.dimension99 = utag_data.wa_clicktale_id;
								aao.eVar82 = utag_data.wa_clicktale_id;
							} else {
								utag_data.wa_clicktale_id = "notAvailable";
								go.dimension99 = "notAvailable";
								aao.eVar82 = "notAvailable";
							}
						}
						if (typeof(go.dimension135) == "string") {
							aao.eVar109 = go.dimension135;
						}
						if (typeof(go.dimension158) == "string") {
							aao.eVar114 = go.dimension158;
						}
						break;
					case (/dnb/.test(eventMap)):
						go.dimension27 = aao.eVar65 = 'ni';
						go.dimension28 = aao.eVar64 = 'ni: dnb';
						aao.eVar70 = go.dimension122 = utag_data.dnb_status;
						aao.eVar71 = go.dimension123 = utag_data.dnb_duns;
						aao.eVar72 = go.dimension124 = utag_data.dnb_company;
						aao.eVar74 = go.dimension125 = utag_data.dnb_ultimateduns;
						aao.eVar73 = go.dimension131 = utag_data.dnb_zip;
						aao.eVar75 = go.dimension137 = utag_data.dnb_naicscode;
						aao.eVar76 = go.dimension138 = utag_data.dnb_naicsdescription;
						aao.eVar80 = go.dimension171 = utag_data.dnb_jobseniority;
						aao.eVar81 = go.dimension172 = utag_data.dnb_jobfuncion;
						aao.eVar77 = go.dimension175 = utag_data.dnb_siccode;
						aao.eVar78 = go.dimension176 = utag_data.dnb_sicdescription;
						aao.eVar79 = go.dimension177 = utag_data.dnb_itexpense;
						break;
					case (/eloqua/.test(eventMap)):
						go.dimension27 = aao.eVar65 = 'ni';
						go.dimension28 = aao.eVar64 = 'ni:elq';
						aao.eVar92 = go.dimension182 = utag_data.elq_industry;
						aao.eVar93 = go.dimension183 = utag_data.elq_marketing_audience;
						aao.eVar94 = go.dimension184 = utag_data.elq_company_size;
						aao.eVar95 = go.dimension185 = utag_data.elq_country;
						aao.eVar96 = go.dimension186 = utag_data.elq_job_function;
						break;
					case (/non-interaction:/.test(eventMap)):
					go.eventCategory = 'Page';
					ao_track = false;
					switch (true) {
						case (/error/.test(eventMap)):
							go.eventAction = 'error';
							break;
						default:
							go.eventAction = 'goal:' + action.split(': ')[1];
							go.eventLabel = action;
							go.dimension27 = 'ni';
							go.metric55 = 0;
							go.metric53 = 0;
							go.dimension28 = 'ni:goals';
							break;
					}
						break;
				}
				break;
        default:
            defaultTracking = true;
            break;
    }
 
//CONFIGURE for default and KPI 
    
    //default tracking
    if (defaultTracking) {
        go.dimension27 = 'click';
        go.dimension28 = 'click:std';
        go.metric30 = 1;
    }
    //PCI Check (using same regEx logic to set GA goals)
    if (/Navigation|Components|Offline|Third-party|Tools|Shop|User Account Activity/g.test(go.eventCategory)) {
        if (/^click:|^print|^(.*)-tool|^shop:|^registration: (complete|intel)|^rss:/g.test(go.eventAction)) {
            go.metric55 = 1;
            aao.event47 = 1;
         //   go.dimension80 = wap_tms.events.g6;
        }
    }
    //PER Check (using same regEx logic to set GA goals)
  /*  if (/Navigation|Components|Offline|Videos|Downloads|Social|Third-party|Tools|Shop|User Account Activity/g.test(go.eventCategory)) {
        if (/^click:|^scroll: (50|75|100)|^video: (50|75|90|95|100|share|full)|^download:|^(.*)-tool|^shop:|^registration: (start:click|complete|intel)|^rss:|^comment:|^share:|^like:|^follow:|^rate:|^chat:|^referral|^print:|^login|^vote|^print/g.test(go.eventAction)) {
            go.metric53 = 1;
       //     go.dimension78 = wap_tms.events.g2;
            if (typeof go.dimension79 == "undefined") {go.dimension79 = 'Other';}
        }
    }*/
    
    //PIR Intel Shop Check
    if (/(\/buy\/)|(^\/content\/(.*)\/shop-)|(^\/..\/..\/products\/)|(pocket\.intel\.com)|(prcappzone\.intel\.com\/shop\/)|(beforeyoubuypc\.)|(buypc\.intel)|^\/(intel-shop|shop-)/.test(go.eventLabel)) {
        go.metric56 = 1; go.metric54 = 1;
        aao.event12 = 1;
        //go.eventLabel = go.eventLabel;
		go.eventLabel = go.eventLabel + "#pir-intel";
       if(wap_tms.events.unique_g13){
            go.metric75 = 1;
            aao.event13 = 1;
            to.g13=wap_tms.events.tog13;
            wap_tms.events.unique_g13=false;
        }
    /*    go.dimension81 = wap_tms.events.g1;
        go.dimension82 = wap_tms.events.g13;*/
    }
    //configure Unique PER instance 1x per page load
 /*   if (wap_tms.events.unique_per) {
        if (typeof go.metric53 !== "undefined") {
            if (go.metric53 == 1) {
                go.metric60 = 1;
                to.g2=wap_tms.events.tog2;
                wap_tms.events.unique_per = false;
            }
        }
    }*/
    //configure Unique PIR instance 1x per page load
  /*  if (wap_tms.events.unique_pir) {
        if (typeof go.metric54 !== "undefined") {
            if (go.metric54 == 1) {
                go.metric61 = 1;
                go.dimension81 = wap_tms.events.g1;
                to.g1=wap_tms.events.tog1;
                wap_tms.events.unique_pir = false;
            }
        }
    }*/
    //configure Unique PCI instance 1x per page load
    if (wap_tms.events.unique_pci) {
        if (typeof go.metric55 !== "undefined") {
            if (go.metric55 == 1) {
                go.metric63 = 1;
                aao.event48 = 1;
                to.g6=wap_tms.events.tog6;
                wap_tms.events.unique_pci = false;
            }
        }
    }  
    //fire PER tag(s) 1x per session
   /* var perEvent = (utag.loader.RC("utag_main").per !== "1") ? true : false;
    if (perEvent) {
        if (typeof go.metric53 !== "undefined" && utag_data.wa_env === "prod") {
            if (go.metric53 == 1) {
                //console.log("fire PER");
                //fire DCM Floodlight tag
                if (wap_tms.floodlight.fireTags) {
                    configDFAfloodiFrame(wap_tms.floodlight.adId, wap_tms.floodlight.per.type, wap_tms.floodlight.per.category, 'ses');
                }
                //set cookie so only fire 1x per session
                utag.loader.SC("utag_main", { "per": "1;exp-session" });
            }
        }
    }*/
    //fire PIR tag(s) 1x per session
 /*   var pirEvent = (utag.loader.RC("utag_main").pir !== "1") ? true : false;
    if (pirEvent) {
        if (typeof go.metric54 !== "undefined" && utag_data.wa_env === "prod") {
            if (go.metric54 == 1) {
                //console.log("fire PIR");  
                //fire DCM Floodlight tag
                if (wap_tms.floodlight.fireTags) {
                    if (wap_tms.floodlight.pir.type !== '0') { configDFAfloodiFrame(wap_tms.floodlight.adId, wap_tms.floodlight.pir.type, wap_tms.floodlight.pir.category, 'ses'); }
                }
                //set cookie so only fire 1x per session
                utag.loader.SC("utag_main", { "pir": "1;exp-session" });
            }
        }
    }*/
//*** START send to trackers/tags ***/
aao.eVar38 = go.eventCategory; 
aao.prop28 = go.eventCategory; 
aao.eVar39 = go.eventAction; 
aao.prop29 = go.eventAction; 
aao.eVar40 = go.eventLabel; 
aao.prop30 = go.eventLabel; 
aao.eVar41 = aao.eVar38+"|"+aao.eVar39+ ((aao.eVar40 !== "") ? ("|"+aao.eVar40) : "");
aao.prop31 = aao.eVar41;
if(go.dimension28){
    aao.eVar43 = go.dimension28;
    aao.prop33 = go.dimension28;
}
if(go.dimension29){
    aao.eVar44 = go.dimension29;
    aao.prop34 = go.dimension29;
}else if(ga_payload.dimension['29,hit']){
    aao.eVar44 = ga_payload.dimension['29,hit'];
    aao.prop34 = ga_payload.dimension['29,hit'];
}
if(go.dimension64){
    aao.eVar45 = go.dimension64;
    aao.prop35 = go.dimension64;
}else if(ga_payload.dimension['64,hit']){
    aao.eVar45 = ga_payload.dimension['64,hit'];
    aao.prop35 = ga_payload.dimension['64,hit'];
}
  
if(go.dimension41){
    aao.eVar48 = go.dimension41;
    aao.prop38 = go.dimension41;
}else if(ga_payload.dimension['41,hit']){
    aao.eVar48 = ga_payload.dimension['41,hit'];
    aao.prop38 = ga_payload.dimension['41,hit'];
} 
if(go.dimension49){
    aao.eVar49 = go.dimension49;
    aao.prop39 = go.dimension49;
}else if(ga_payload.dimension['49,hit']){
    aao.eVar49 = ga_payload.dimension['49,hit'];
    aao.prop39 = ga_payload.dimension['49,hit'];
}
if(go.dimension19){
    aao.eVar47 = go.dimension19;
    aao.prop37 = go.dimension19;
}else if(ga_payload.dimension['19,hit']){
    aao.eVar47 = ga_payload.dimension['19,hit'];
    aao.prop37 = ga_payload.dimension['19,hit'];
}
if (opt_noninteraction) {
    aao.event64 = 1;
}
else {
    aao.event63 = 1;    
}
if(trackGA){
    if(wap_ga.delayedHits){
        gaEventHit = {
            "go": go,
            "opt_noninteraction": opt_noninteraction,
            "debug": debug,
            "event": event
        }
        wap_tms.custom.delayedHitsQueue.push(gaEventHit);
        return;
    }
    /* Comment the code as part of a POC
    //GA
    wap_tms.events.ga(go,opt_noninteraction,debug,event);

    */

    //GA - implementation specific to ARK only for POC
    if (wap_ga.avoidEventBeforePageView) { 
    	gaEventHit = {
    		"go": go,
    		"opt_noninteraction": opt_noninteraction,
    		"debug": debug,
    		"event": event
    	}
    	wap_tms.custom.delayedHitsQueue.push(gaEventHit);
    }else {  
    	wap_tms.events.ga(go, opt_noninteraction, debug, event); 
    } 
}
//AA
if(trackAA){
    wap_tms.events.aa(aao, event);
}   
if(extendToTags || debug){
var eCat =  (typeof go.eventCategory != 'undefined') ? go.eventCategory : '',
    eAct  = (typeof go.eventAction != 'undefined') ? go.eventAction : '',
    eLab  = (typeof go.eventLabel != 'undefined') ? go.eventLabel : 'na';
    eo.category_action_label = ((eCat + "|" + eAct + "|" + eLab).replace(/ /g,"_")).toLowerCase(); //build match string
    if(debug)
        console.log('category_action_label: '+ eo.category_action_label);
    if(extendToTags){
        var eKpi = (typeof go.dimension149 != 'undefined') ? go.dimension149 : '';
        wap_tms.events.extendToTags(eo,debug);
    }
}
//AudienceStream
if(utag_data.load_audiencestream == 'true'){
    if(ao_track){
        //config AudienceStream Object (ao)
        ao.event_type = 'link';
        utag_data.event_type = 'link';
        ao.event_category = go.eventCategory;
        ao.event_action = go.eventAction;
        ao.event_label = go.eventLabel;
        if (typeof go.dimension149 !== "undefined") {ao.event_dmf_type=go.dimension149;utag_data.event_dmf_type=go.dimension149;} //assign DMF hit type
        if (typeof go.metric85 !== "undefined") {ao.event_dmf_points=go.metric85;utag_data.event_dmf_points=go.metric85;} //assign DMF hit point value
                utag.track("collect", ao); //send to AudienceStream
    }
}
//Target
if(typeof wap_tms.events.target !== "undefined"){ //only fire if Adobe Target Loader tag is present
    wap_tms.events.target(to,debug); //Adobe Target mbox conversion
}
//wap_tms.events.floodlight(go,debug);
//*** END send to trackers/tags ***/
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//Logic to check for manually appended GA cookie and eloqua id's by AEM Authors
if (wap_tms.jquery.ver_1_7_plus) {
    (function($) {
        $(document).ready(function() {
            // GA cookie fix
            var gaCrossDomainIssueFlag = false;
            var gaLinksToFix = $("a[href*='_ga']");
            for (i = 0; i < gaLinksToFix.length; i++) {  
                var wapOldHref   = gaLinksToFix[i].getAttribute("href"); 
                var wapRegex = /_ga=([0-9])\.([0-9]*)\.([0-9]*)\.([0-9]*)&?/;
                wapOldHref = wapOldHref.replace(wapRegex, "");
                gaLinksToFix[i].href= wapOldHref; 
                gaCrossDomainIssueFlag = true;
            }
            //Eloqua fix 
            var eloquaCrossDomainIssueFlag = false;
            var eloquaLinksToFix = $("a[href*='elq_cid=']");
            for (i = 0; i < eloquaLinksToFix.length; i++) {  
                var wapNewHref   = eloquaLinksToFix[i].getAttribute("href"); 
                var wapRegex = /elq_cid=([0-9]*)\&?/;
                wapNewHref = wapNewHref.replace(wapRegex, ""); wapNewHref = wapNewHref.replace("\?&", "?");          
                eloquaLinksToFix[i].href= wapNewHref; 
                eloquaCrossDomainIssueFlag = true;
            }
            //Error Flag
            if(gaCrossDomainIssueFlag && eloquaCrossDomainIssueFlag){
                ga_payload.metric['57,hit'] = '1';
				aa_payload.event['49,hit'] = '1';
                wap_tms.error.set(' ga link hard-coded, eloqua id hard-coded,', 'event.crossdomain:'); 
            }
            else if(gaCrossDomainIssueFlag){
                ga_payload.metric['57,hit'] = '1';
				aa_payload.event['49,hit'] = '1';
                wap_tms.error.set(' ga link hard-coded,', 'event.crossdomain:'); 
            }
            else if(eloquaCrossDomainIssueFlag){
                ga_payload.metric['57,hit'] = '1';
				aa_payload.event['49,hit'] = '1';
                wap_tms.error.set(' eloqua id hard-coded,', 'event.crossdomain:'); 
            }
        });
    }($wap));
};
    
//Scroll Tracking
wap_tms.custom.wa_scrol = function(){
		if (wap_tms.jquery.ver_1_7_plus) {
            (function($) {
				setTimeout(function() {
			var div = $('').appendTo('body');
			$(div).remove();
			getPropIE = function(name) {
				return Math.max(document.documentElement["client" + name], document.documentElement["scroll" + name], document.body["scroll" + name]);
			}
			var percentBelowFold = 50;
			var isIE = 'false';
			if (navigator.userAgent.toLowerCase().indexOf('msie') > -1) {
				isIE = 'true';
			}
			var hwin = (isIE && document.nodeType === 9) ? parseInt(getPropIE('Height')) : parseInt(this.height());
			var hview = parseInt($(window).height());
			var difference = hwin - hview;
			var percent = Math.round((difference / hwin) * 100);
			if (percent >= percentBelowFold) {} else {
				wap_ga.scroll = false;
				$(window).bind("scroll.wap", function(event) {
					wa_component_name = "page-scroll";
					ga_payload.dimension['29,hit'] = percent + "%";
					aa_payload.event['42,hit'] = '1';
					trackGaEvent('Navigation', 'scroll: disabled', percent + "%", null, true);
					$(window).unbind("scroll.wap");
				});
			}
				if (wap_ga.scroll) {
					docHeight = $(document).height();
					(function($, window, document, undefined) {
						"use strict";
						var defaults = {
							minHeight: 0,
							elements: [],
							percentage: true,
							userTiming: false,
							pixelDepth: true
						};
						var $window = $(window),
							cache = [],
							lastPixelDepth = 0;
						$.scrollDepth = function(options) {
							var startTime = +new Date;
							options = $.extend({}, defaults, options);
							if ($(document).height() < options.minHeight) {
								return;
							}

								function sendEvent(action, label, scrollDistance, timing) {
									lastPixelDepth = scrollDistance;
									wa_component_name = "page-scroll";
									ga_payload.dimension['29,hit'] = percent + "%";
									trackGaEvent('Navigation', 'scroll: ' + label, rounded(scrollDistance));
								}

								function calculateMarks(docHeight) {
									return {
										'25%': parseInt(docHeight * 0.25, 10),
										'50%': parseInt(docHeight * 0.50, 10),
										'75%': parseInt(docHeight * 0.75, 10),
										'100%': docHeight - 5
									};
								}

								function checkMarks(marks, scrollDistance, timing) {
									$.each(marks, function(key, val) {
										if ($.inArray(key, cache) === -1 && scrollDistance >= val) {
											sendEvent('Percentage', key, rounded(val), timing);
											cache.push(key);
										}
									});
								}

								function checkElements(elements, scrollDistance, timing) {
									$.each(elements, function(index, elem) {
										if ($.inArray(elem, cache) === -1 && $(elem).length) {
											if (scrollDistance >= $(elem).offset().top) {
												sendEvent('Elements', elem, scrollDistance, timing);
												cache.push(elem);
											}
										}
									});
								}

								function rounded(scrollDistance) {
									return (Math.floor(scrollDistance / 250) * 250).toString();
								}

								function throttle(func, wait) {
									var context, args, result;
									var timeout = null;
									var previous = 0;
									var later = function() {
										previous = new Date;
										timeout = null;
										result = func.apply(context, args);
									};
									return function() {
										var now = new Date;
										if (!previous) previous = now;
										var remaining = wait - (now - previous);
										context = this;
										args = arguments;
										if (remaining <= 0) {
											clearTimeout(timeout);
											timeout = null;
											previous = now;
											result = func.apply(context, args);
										} else if (!timeout) {
											timeout = setTimeout(later, remaining);
										}
										return result;
									};
								}
								$window.on('scroll.scrollDepth', throttle(function() {
									var docHeight = $(document).height(),
										winHeight = window.innerHeight ? window.innerHeight : $window.height(),
										scrollDistance = $window.scrollTop() + winHeight,
										marks = calculateMarks(docHeight),
										timing = +new Date - startTime;
									if (cache.length >= 4 + options.elements.length) {
										$window.off('scroll.scrollDepth');
										return;
									}
									if (options.elements) {
										checkElements(options.elements, scrollDistance, timing);
									}
									if (options.percentage) {
										checkMarks(marks, scrollDistance, timing);
									}
								}, 500));
							};
						$.scrollDepth();
						})($wap, window, document);
					}
				}, 1000);
			}($wap));
        }
	};

  
//END UNIVERSAL TAGGING FRAMEWORK       
}
//legacy functions, keep until full regression testing, some code may be using waGetCookie()
function waGetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return waGetCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0)
            break;
    }
    return null;
}
function waGetCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
function waSetCookie(name, value) {
    var wa_cookieExpDate = new Date();
    wa_cookieExpDate.setTime(wa_cookieExpDate.getTime() + (365 * 24 * 3600 * 1000));
    document.cookie = name + "=" + escape(value) +
        "; expires=" + wa_cookieExpDate.toGMTString() +
        "; path=/" +
        "; domain=.intel.com"
}
function checkMeta(tagNameIn) {
    var metas = document.getElementsByTagName('META');
    var i;
    for (i = 0; i < metas.length; i++)
        if (metas[i].getAttribute('name') == tagNameIn)
            var tagNameValue = metas[i].getAttribute('content');
    return tagNameValue;
}
    
    //-------------------------------------------------------------
    //Condition to check If Ad Blocker needs to be tracked
    
    //---------------------------------------------------------------------
 
    //Update a key-value pair in the URL query parameters
    wap_tms.custom.updateUrlParameter = function (uri, key, value) {
        // remove the hash part before operating on the uri
            var i = uri.indexOf('#');
            var hash = i === -1 ? ''  : uri.substr(i);
                 uri = i === -1 ? uri : uri.substr(0, i);
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                uri = uri.replace(re, '$1' + key + "=" + value + '$2');
            } else {
                uri = uri + separator + key + "=" + value;
            }
            return uri + hash;  // finally append the hash as well
    }
//Returns true if the hostname passed is a PIR 
wap_tms.custom.isExitToNonPIR = function(hostname) {
            return /(intel|altera|yournewpclove|wikipedia|mcafee|google|nationalgeographic|microsoft|adobe|doubleclick|rocketboards\.org|home\.mcafee|support\.google|windows\.microsoft|adobe|facebook|twitter|pinterest|intc|linkedin|youtube|truekey|instagram|americasgreatestmakers|resources\.hewitt|alteraforum|alterawiki)\.|\.intel/.test(hostname);
        }
//Returns true if the linkHref passed is an asset 
wap_tms.custom.isAsset = function(linkHref) {
    var wa_asset_download = new RegExp("\\.("+wap_tms.download.assets+")$");
    return (wa_asset_download.test(linkHref.toLowerCase()));
}
wap_tms.custom.isIntelOwned = function(linkHref) {
        return /^http(.*)(intel|americasgreatestmakers|mcafee|altera)\./.test(linkHref);
    }
    wap_tms.getHostname = function(linkHref){
        if (linkHref.indexOf("https") === 0) {
        protocol = "https://";
      } else if (linkHref.indexOf("http") === 0) {
        protocol = "http://";
      }
        if (protocol == "http://" || protocol == "https://") {
            linkHref = decodeURIComponent(linkHref);
            var host = linkHref.split(protocol)[1];
            var hostvar = host.split("/");
            var hostname;
            if (hostvar.length > 0)
                hostname = hostvar[0];
            else
                hostname = hostvar;
        }
        return hostname;
    }
    var wa_adblocker_checker;
    //Condition to check If Ad Blocker needs to be tracked
    wap_tms.custom.adblockers.wacheckAds = function() {
        //if cookie doesn't exist look to verify
        if(utag.loader.RC("utag_main").wa_adbchk !== "1"){
            wa_adblocker_checker = "adblocker:disabled";
            if (wap_tms.jquery.ver_1_7_plus) {
                (function($) {
                    $('<div id="adsense" class="adsense" data-wap="adblockerDetection" style="visibility: hidden; height:1px; font-size: 1px;"> &nbsp; </div>').insertAfter('body');
                }($wap));
            }
            var ads = document.getElementsByClassName('adsense');
            var ad = ads[ads.length - 1];
            if (!ad || ad.innerHTML.length == 0 || ad.clientHeight === 0) {
                wa_adblocker_checker = "adblocker:enabled";
            }
            if (wap_tms.jquery.ver_1_7_plus) {
                (function($) {
                   $("[data-wap='adblockerDetection']").remove();
                   utag.loader.SC("utag_main", { "wa_adbchk": "1;exp-session" }); //Set cookie to perform the operation 1x per session
                }($wap));
            }
        }
    }
    
    //Capture Eloqua ID from Eloqua start form
    wap_tms.captureEloquaContactId = function() {
        if (typeof waGetCookie != "undefined" && waGetCookie("contactId") && !/cookie/.test(waGetCookie("contactId"))) {
            var wa_elq_cookie = waGetCookie("contactId");
            ga_payload.dimension['105,page'] = ga_payload.dimension['105,hit'] = utag_data.wa_elq_id = wap_tms.eloqua.id_ext = wa_elq_cookie;
            ga_payload.dimension['115,page'] = ga_payload.dimension['115,hit'] = utag_data.wa_elq_id_short = genContactIdShort(wa_elq_cookie);
        }
    }
    wap_tms.captureEloquaContactId();
    
    //Funciton to add tag ids to 
    wap_tms.add_tags = function(tagid) {
            if((typeof utag_data.tag_id_onload !== 'undefined')? utag_data.tag_id_onload += "," + tagid : utag_data.tag_id_onload = tagid);
            utag_data.tag_id_onload = utag_data.tag_id_onload.replace(/^\,/, '');
            return utag_data.tag_id_onload;
    };
    wap_tms.page_error = false;
  wap_tms.wap_page_error = false;
  wap_tms.handle_error = function (msg, url) {
    var isUrlFromWap = function (url) {
      return url.indexOf('tags.tiqcdn') !== -1 || url.indexOf('/global/wap/') !== -1;
    }
    ga_payload.dimension['169,hit'] = url;
    ga_payload.dimension['170,hit'] = msg;
    aa_payload.eVar['68,hit'] = url;
    aa_payload.prop['50,hit'] = url;
    aa_payload.eVar['69,hit'] = msg;
    aa_payload.prop['51,hit'] = msg;
    if (typeof (url) !== 'undefined' && isUrlFromWap(url) && !wap_tms.wap_page_error) {
      wap_tms.error.set('javascript-wap,', 'page.error:');
      ga_payload.metric['92,hit'] = '1';
      aa_payload.event['50,hit'] = '1';
      wap_tms.wap_page_error = true;
    } else if (!wap_tms.page_error) {
      wap_tms.error.set('javascript-nonwap,', 'page.error:');
      ga_payload.metric['106,hit'] = '1';
      aa_payload.event['65,hit'] = '1';
      wap_tms.page_error = true;
    }
  }
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    if (!wap_tms.wap_page_error || !wap_tms.page_error) {
      wap_tms.handle_error(msg, url);
    }
  };


  
  //DNB code
  var dnbVariables = wap_tms.cookie.RC("utag_main").wa_dnb;
if (typeof dnbVariables != "undefined") {
    if (dnbVariables.indexOf('|') > -1) {
        var values = dnbVariables.split('|');
        for (counter = 0; counter < values.length; counter++) {
            if (values[counter].indexOf(':') > -1) {
                value = values[counter].split(':');
                switch (value[0]) {
                    case "duns":
                        //ga_payload.dimension['123,page'] = value[1];
                        utag_data.dnb_duns = value[1];
                        break;
                    case "status":
                        //ga_payload.dimension['122,page'] = value[1];
                        utag_data.dnb_status = value[1];
                        break;
                    case "companyName":
                        //ga_payload.dimension['124,page'] = value[1];
                        utag_data.dnb_company = value[1];
                        break;
                    case "naicsCodes":
                        //ga_payload.dimension['137,page'] = value[1];
                        utag_data.dnb_naicscode = value[1];
                        break;
                    case "industryNaics":
                        //ga_payload.dimension['138,page'] = value[1];
                        utag_data.dnb_naicsdescription = value[1];
                        break;
                    case "country":
                        utag_data.dnb_country = value[1];
                        break;
                    case "jobSeniority":
                        //ga_payload.dimension['171,page'] = value[1];
                        utag_data.dnb_jobseniority = value[1];
                        break;
                    case "jobFunction":
                        //ga_payload.dimension['172,page'] = value[1];
                        utag_data.dnb_jobfuncion = value[1];
                        break;
                    case "companyZip5":
                        //ga_payload.dimension['131,page'] = value[1];
                        utag_data.dnb_zip = value[1];
                        break;
                    case "ultimateDuns":
                        //ga_payload.dimension['125,page'] = value[1];
                        utag_data.dnb_ultimateduns = value[1];
                        break;
                    case "sicCodes":
                        //ga_payload.dimension['125,page'] = value[1];
                        utag_data.dnb_siccode = value[1];
                        break;
                    case "industrySic":
                        //ga_payload.dimension['125,page'] = value[1];
                        utag_data.dnb_sicdescription = value[1];
                        break;
                    case "itExpense":
                        //ga_payload.dimension['125,page'] = value[1];
                        utag_data.dnb_itexpense = value[1];
                        break;
                }
            }
        }
    }
}
  
  wap_tms.setCleanedLocation = function (tracker, trackerName) {
  var location = tracker.get('location');
  var cleanedLocation = wap_tms.cleanPii(location, 'url');
  gawap(trackerName + '.set', 'location', cleanedLocation);
}
    
//ClickTale Integration Start
	wap_tms.clickTaleIDAvailable = false;
    wap_tms.clickTaleGetUID_PID =  function() {
        if (document.cookie.indexOf("WRUID") > -1 && document.cookie.indexOf("WRIgnore=true") == -1) {
        var ca = document.cookie.split(';');var PID = 0, UID = 0;
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf("CT_Data") > -1) PID = c.substring(c.indexOf("apv_")).split("_")[1];
                if (((document.cookie.match(/WRUID/g) || []).length == 1 && c.indexOf("WRUID") > -1) || (c.indexOf("WRUID") > -1 && (document.cookie.match(/WRUID/g) || []).length > 1 && c.indexOf("WRUID=") == -1))
                    UID = c.split("=")[1];
                    }
                return (UID == 0 || PID == 0) ? null : (UID + "." + PID);
            }
        else return null;
    }
	
	window.ClickTalePIISelector = ".search-link.search-link-term";
	
	wap_tms.clickTaleEndtVirtualPage = function() {
       try {
            if(typeof clickTaleEndEventSignal==='function'){
                   window['clickTaleEndEventSignal']();
            }
        }
        catch(err) {}
    }

    wap_tms.clickTaleInitVirtualPage = function() {
       try {
             if(typeof clickTaleStartEventSignal==='function'){
        window['clickTaleStartEventSignal']();
            }
        }
        catch(err) {}       
    }

    
    wap_tms.clickTaleIntegrated = false;
	if (typeof (utag_data.load_clicktale) != "undefined" && utag_data.load_clicktale == "true") {
		wap_tms.clickTaleIntegrated = true;
		ga_payload.metric['109,hit'] = '1';
		aa_payload.event['66,hit'] = '1';
		if (wap_tms.clickTaleGetUID_PID() != null) {
			wap_tms.clickTaleIDAvailable = true;
			utag_data.wa_clicktale_id = wap_tms.clickTaleGetUID_PID();
			ga_payload.dimension['99,page'] = utag_data.wa_clicktale_id;
			aa_payload.eVar['82,page'] = utag_data.wa_clicktale_id;
		} else {
			utag_data.wa_clicktale_id = "notAvailable";
			ga_payload.dimension['99,page'] = "notAvailable";
			aa_payload.eVar['82,page'] = "notAvailable";
		}
	}
	window['ClickTaleOnReady'] = function() {
		if (wap_tms.clickTaleIDAvailable == false && wap_tms.clickTaleGetUID_PID() == null) {
			setTimeout(function() {
				if(!wap_tms.clickTaleIntegrated){
								wap_tms.clickTaleIntegrated = true;
								ga_payload.metric['109,hit'] = '1';
								aa_payload.event['66,hit'] = '1';
				};
				utag_data.wa_clicktale_id = wap_tms.clickTaleGetUID_PID();
				ga_payload.dimension['99,page'] = utag_data.wa_clicktale_id;
				aa_payload.eVar['82,page'] = utag_data.wa_clicktale_id;                                                                        
				trackGaEvent('Page', 'clicktale: integration', '', null, true);
			}, 2000);
		}
	};



//ClickTale Integration End 

wap_tms.unavLoad = false;
wap_tms.integrateHeaderFooter = function(isPageView) {
	if(typeof wap_header !== "undefined"){
	   wap_tms.unavLoad = true;
	   utag_data.element_header_version = wap_header.HeaderVersion;
	   utag_data.element_header_chosen = wap_header.HeaderChosen;
	   utag_data.element_header_subnav = wap_header.HeaderSubNav;
	   utag_data.element_header_geo = wap_header.HeaderGEO;
	   utag_data.element_footer_chosen = wap_header.FooterChosen;
	   utag_data.element_header_render = wap_header.RenderSettings;
	   utag_data.element_header_locale = wap_header.Locale;
	   if(!isPageView){
		  ga_payload.dimension['50,page'] = utag_data.element_header_version;
		  ga_payload.dimension['51,page'] = utag_data.element_header_chosen;
		  ga_payload.dimension['52,page'] = utag_data.element_header_subnav;
		  ga_payload.dimension['53,page'] = utag_data.element_header_geo;
		  ga_payload.dimension['54,page'] = utag_data.element_footer_chosen;
		  ga_payload.dimension['178,page'] = utag_data.element_header_render;
		  ga_payload.dimension['179,page'] = utag_data.element_header_locale;
		  
		  aa_payload.eVar['83,page'] = utag_data.element_header_version;
		  aa_payload.eVar['84,page'] = utag_data.element_header_chosen;
		  aa_payload.eVar['85,page'] = utag_data.element_header_subnav;
		  aa_payload.eVar['86,page'] = utag_data.element_header_geo;
		  aa_payload.eVar['87,page'] = utag_data.element_footer_chosen;
		  aa_payload.eVar['88,page'] = utag_data.element_header_render;
		  aa_payload.eVar['89,page'] = utag_data.element_header_locale;
	   }
	}
}
wap_tms.integrateHeaderFooter(true);

wap_tms.detectIE = function(){		
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

wap_tms.idenfityInternalUser = function(){               
	if (typeof(utag.loader.RC("utag_main").wa_internal_user) != "undefined" && utag.loader.RC("utag_main").wa_internal_user !== "true") { 
		ga_payload.dimension['91,user'] = "true";
		aa_payload.eVar['117,user'] = "true";
		utag_data.wa_internal_user = "true";
	}else{
		if(typeof(utag_data.dnb_company) == "string" && (utag_data.dnb_company == "intel corporation" || utag_data.dnb_company == "intel ireland limited" || utag_data.dnb_company == "intel network systems inc" || utag_data.dnb_company == "intel corp")){
			ga_payload.dimension['91,user'] = "true";
			aa_payload.eVar['117,user'] = "true";
			utag_data.wa_internal_user = "true";
		}  
	    else if (tmsGetCookie('IDSID') != null) {
			ga_payload.dimension['91,user'] = "true";
			aa_payload.eVar['117,user'] = "true";
		    utag_data.wa_internal_user = "true";
	   }
	    else if (typeof(utag_data.wa_membership_group) != "undefined" && utag_data.wa_membership_group != null){
		    if(utag_data.wa_membership_group.indexOf("contingent") != -1 || utag_data.wa_membership_group.indexOf("badge employees")  || utag_data.wa_membership_group.indexOf("employee") ) {
				ga_payload.dimension['91,user'] = "true";
				aa_payload.eVar['117,user'] = "true";
				utag_data.wa_internal_user = "true";
		   }
	   }
	   else if(typeof(utag_data.target_isp_name) == "string" && utag_data.target_isp_name  == "intel corporation"){
		    ga_payload.dimension['91,user'] = "true";
		    aa_payload.eVar['117,user'] = "true";
			utag_data.wa_internal_user = "true";
	   } 
	   if(utag_data.wa_internal_user == "true"){
			utag.loader.SC("utag_main", {"wa_internal_user": "true;exp-session"});
	   }
	}
}
  
//END - Extension: WAP Global (1)
}catch(e){}};
if(!utag_condload){try{
//config
wap_tms.custom=wap_tms.custom||{}; 

wap_tms.custom.base_linktracking = true;
wap_tms.custom.brightcove = true;
wap_tms.custom.youtube = true;

    //Metadata Capture
        //utag_data.wa_forums = (typeof wa_ssg_data.wa_ssg_forums !== "undefined" && wa_ssg_data.wa_ssg_forums) ? wa_ssg_data.wa_ssg_forums.toLowerCase() : 'unassigned';
        utag_data.wa_target_audience = (typeof wa_ssg_data.wa_ssg_audience !== "undefined" && wa_ssg_data.wa_ssg_audience != null) ? wa_ssg_data.wa_ssg_audience.toLowerCase() : 'unassigned';
        utag_data.wa_os = (typeof wa_ssg_data.wa_ssg_operating_system !== "undefined" && wa_ssg_data.wa_ssg_operating_system != null) ? wa_ssg_data.wa_ssg_operating_system.toLowerCase() : 'unassigned';
        utag_data.wa_zone = (typeof wa_ssg_data.wa_ssg_zone !== "undefined" && wa_ssg_data.wa_ssg_zone != null) ? wa_ssg_data.wa_ssg_zone.toLowerCase() : 'unassigned';
        utag_data.wa_program_lang = (typeof wa_ssg_data.wa_ssg_programming_language !== "undefined" && wa_ssg_data.wa_ssg_programming_language != null) ? wa_ssg_data.wa_ssg_programming_language.toLowerCase() : 'unassigned';
        //utag_data.wa_forums = (typeof wa_ssg_data.wa_ssg_forums !== "undefined" && wa_ssg_data.wa_ssg_forums != null) ? wa_ssg_data.wa_ssg_forums.toLowerCase() : 'unassigned';
        utag_data.wa_software = (typeof wa_ssg_data.wa_ssg_software !== "undefined" && wa_ssg_data.wa_ssg_software != null) ? wa_ssg_data.wa_ssg_software.toLowerCase() : 'unassigned';
        utag_data.wa_intel_technology = (typeof wa_ssg_data.wa_ssg_technology !== "undefined" && wa_ssg_data.wa_ssg_technology != null) ? wa_ssg_data.wa_ssg_technology.toLowerCase() : 'unassigned';
        utag_data.wa_topic = (typeof wa_ssg_data.wa_ssg_topic !== "undefined" && wa_ssg_data.wa_ssg_topic != null) ? wa_ssg_data.wa_ssg_topic.toLowerCase() : 'unassigned';
        utag_data.shop_formFactor = (typeof wa_ssg_data.wa_ssg_form_factor !== "undefined" && wa_ssg_data.wa_ssg_form_factor != null) ? wa_ssg_data.wa_ssg_form_factor.toLowerCase() : 'unassigned';
        //utag_data.wa_local = (typeof wa_ssg_data.wa_ssg_local_code !== "undefined" && wa_ssg_data.wa_ssg_local_code != null) ? wa_ssg_data.wa_ssg_local_code.toLowerCase() : 'unassigned';
        utag_data.wa_page_type_macro = (typeof wa_ssg_data.wa_ssg_type_macro !== "undefined" && wa_ssg_data.wa_ssg_type_macro != null) ? wa_ssg_data.wa_ssg_type_macro.toLowerCase() : 'unassigned';
        utag_data.wa_page_type_micro = (typeof wa_ssg_data.wa_ssg_type_micro !== "undefined" && wa_ssg_data.wa_ssg_type_micro != null) ? wa_ssg_data.wa_ssg_type_micro.toLowerCase() : 'unassigned';
        utag_data.wa_ssg_uuid = (typeof wa_ssg_data.wa_ssg_uuid !== "undefined" && wa_ssg_data.wa_ssg_uuid != null) ? wa_ssg_data.wa_ssg_uuid.toLowerCase() : 'unassigned';
        utag_data.wa_page_id = (typeof wa_ssg_data.wa_ssg_nid !== "undefined" && wa_ssg_data.wa_ssg_nid != null) ? wa_ssg_data.wa_ssg_nid.toLowerCase() : 'unassigned';
        utag_data.wa_english_title = (typeof wa_ssg_data.wa_ssg_forums !== "undefined" && wa_ssg_data.wa_ssg_forums) ? wa_ssg_data.wa_ssg_forums.toLowerCase() : 'unassigned';
        utag_data.wa_ssg_title = (typeof wa_ssg_data.wa_ssg_title !== "undefined" && wa_ssg_data.wa_ssg_title != null) ? wa_ssg_data.wa_ssg_title.toLowerCase() : '';
		if(document.head.querySelector("[name=description]") !== "null")
				utag_data.wa_ssg_description = document.head.querySelector("[name=description]").content;
        utag_data.wa_ssg_profile = "";

//additional Search-box tracking for the zero results scenario
if (/(software.intel.com\/).*(\/search\/gss)/.test(document.location.href)) {
            if($wap(".icon-article").length == 0){
                var wordSearched = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1); 
                ga_payload.dimension['43,page'] = wordSearched;
                ga_payload.metric['41,hit'] = '1';
            }    
        }

 //addition code to see if a user is logged in 
 if (/(software.intel.com\/)/.test(document.location.href)) {
    if($wap(".logged-in").length > 0){
          ga_payload.dimension['15,page'] = "logged-in";
    }
    else{
          ga_payload.dimension['15,page'] = "anonymous";
    }
 }
 
//capture Author details on click.
var wa_ArticleAuthor = ($wap('article header a.username').length) ? $wap('article header a.username').html().toLowerCase() : "";  
ga_payload.dimension['74,page'] = wa_ArticleAuthor;
  
wap_tms.custom.functionCustomTrackingCode_ssg = function () {
	if (wap_tms.jquery.ver_1_7_plus) {
            if (wap_tms.custom.base_linktracking) {
                (function($) {
//$wap(document).ready(function(){
  //Post message track
  $wap(".comment-form input#edit-submit").click(function () {
    var wa_pathName = location.pathname;
    trackGaEvent('Social', 'comment: post', wa_pathName);
  });
   //Search-box Tracking
   $wap("form[id^='idz-search-block-form']").submit(function(event){
     trackGaEvent('Search', 'search-box: text', event.currentTarget[0].value);
   });

   //Additional Search done on Search page
   $wap("form[id^='search-form']").submit(function(event){
      trackGaEvent('Search', 'search-results: additional keyword', event.currentTarget[0].value);
   });

    //Adding query string parameter for links after searching ( wapkw paramenter )
    if (/(software.intel.com\/).*(\/search\/gss)/.test(document.location.href)) {
       $wap('ol a').map(function(){ 
       var tempHref = $wap(this).attr("href"),
     wordSearched = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1); 
           if(tempHref.indexOf("?") >= 0){  //It has more query string parameters
       $wap(this).attr("href", tempHref + "&wapkw=" + wordSearched);                    }
   else{ //Doesn't has query string parameters
     $wap(this).attr("href", tempHref + "?wapkw=" + wordSearched); 
   } 
       })
    } 
  }($wap));
        }
    }
}
  wap_tms.custom.init('functionCustomTrackingCode_ssg');
//});
}catch(e){}};
if(!utag_condload){try{
//*********************************************************************************************
//* Extension: Brightcove - Pre-loader (-)                                                    *
//*********************************************************************************************

//used for custom WAP implementation (non-AEM implementation)
function onTemplateLoadWap(experienceID) {
	player = brightcove.api.getExperience(experienceID);
	APIModules = brightcove.api.modules.APIModules;
	if ((typeof myTemplateLoaded) !== "undefined") {
		myTemplateLoaded(experienceID);
	}
}
function onTemplateReadyWap(evt) {
	videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
}

//checks if flash is installed/enabled on the browser
function isFlashEnabled() {
	var hasFlash = false;
	try {
		var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		if (fo)
			hasFlash = true;
	} catch (e) {
		if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined)
			hasFlash = true;
	}
	return hasFlash;
}
//if(brightcove.checkFlashSupportStandard() === null)
if (isFlashEnabled() != true)
	wap_tms.custom.brightcove = true;
var track0 = 0,
	track25 = 0,
	track50 = 0,
	track75 = 0,
	track90 = 0,
	track95 = 0,
	trackPause = [];
if (wap_tms.custom.brightcove) { //enbale if config
	//*******Brightcove tracking starts ********
	var expId,
	modVP,
	player,
	contentModule;

	// Template Loaded method
	function myTemplateLoaded(experienceID) {
		expId = experienceID;
		player = brightcove.api.getExperience(experienceID);
		// modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
		modExp = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
		// contentModule = player.getModule(brightcove.api.modules.APIModules.CONTENT);
		modExp.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY, onBCTemplateReady);
	}

	// listening to events on template ready
	function onBCTemplateReady(evt) {
		modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
		if (wap_tms.custom.brightcove)
			modVP.getCurrentVideo(onGetCurrentVideoResult);
	}

	function onGetCurrentVideoResult(video) {
		if (video) {
			modVP.loadVideoByReferenceID(expId);
			//modVP.play();
			modVP.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onMediaEventFired);
			modVP.addEventListener(brightcove.api.events.MediaEvent.PLAY, onMediaEventFired);
			modVP.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, onMediaProgressFired);
			modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, onMediaEventFired);
			//  modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, onMediaEventFired);
		}
	}

	// listening to various events in onMediaEventFired method
	function onMediaEventFired(event) {
        var c;
        var pageUrl = document.location.href;
        var playername = event.media.displayName;
        var playerid = event.media.id;
        wap_tms.custom.video_duration = event.duration;
        var percentage = getPercentage(event);
        c = event.media.defaultURL;
        ga_payload.dimension['19,hit'] = "mobile";
        if ((event.type == brightcove.api.events.MediaEvent.PLAY) || (event.type == brightcove.api.events.MediaEvent.BEGIN)) {
          if (percentage == 0 && track0 == 0) {
            track0 = 1;
            trackGaEvent('Videos', "video: play", playername);
          }
        }
        if (event.type == brightcove.api.events.MediaEvent.COMPLETE) {
          trackGaEvent('Videos', "video: 100% complete", playername);
        }
      }
	
	// Percentage tracking inside onMediaProgressFired method
	function onMediaProgressFired(event) {
        var playername = event.media.displayName;
        var playerid = event.media.id;
        wap_tms.custom.video_duration = event.duration;
        ga_payload.dimension['19,hit'] = "mobile";
        if (event) {
          var percentage = getPercentage(event);
          var c = event.media.defaultURL;
          var events = "event63";
          var custom10 = "";
          if (percentage >= 50 && percentage <= 53) {
            percentage = "mid";
            custom10 = 'video:ump:partial';
            events = "event6,event61";
          }
          if (percentage == "mid") {
            if (track50 == 0) {
              percentage = 50;
              trackGaEvent('Videos', "video: 50% complete", playername);
              track50 = 1;
            }
          } else if (percentage >= 25 && percentage <= 28) {
            if (track25 == 0) {
              trackGaEvent('Videos', "video: 25% complete", playername);
              track25 = 1;
            }
          } else if (percentage >= 75 && percentage <= 78) {
            if (track75 == 0) {
              trackGaEvent('Videos', "video: 75% complete", playername);
              track75 = 1;
            }
          } else if (percentage >= 90 && percentage <= 93) {
            if (track90 == 0) {
              trackGaEvent('Videos', "video: 90% complete", playername);
              track90 = 1;
            }
          } else if (percentage >= 95 && percentage <= 98) {
            if (track95 == 0) {
              trackGaEvent('Videos', "video: 95% complete", playername);
              track95 = 1;
            }
          }
        }
      }

	//get percentage
	function getPercentage(event) {
		var percentage = event.position * 100 / event.duration;
		percentage = Math.round(percentage);
		return percentage;
	}
	//*******Brightcove tracking ends ********	
}


/*************************New HTML5 Brightcove Tracking***************************/

wap_tms.HTML5_brightcove = wap_tms.HTML5_brightcove || {};

wap_tms.HTML5_brightcove.videoPlay = function (duration, playername, id, iframe) {
	wap_tms.custom.video_duration = duration;
	ga_payload.dimension['19,hit'] = "html5";
	if(iframe)
					ga_payload.dimension['19,hit'] = "html5-iframe";
	ga_payload.dimension['29,hit'] = "brightcove:" + id;
	ga_payload.dimension['64,hit'] = id;
	trackGaEvent('videos', "video: play", playername);                                                          
}
wap_tms.HTML5_brightcove.videoProgress = function (duration, percentage, playername, id, iframe) {              
	wap_tms.custom.video_duration = duration;
	ga_payload.dimension['19,hit'] = "html5";
	if(iframe)
					ga_payload.dimension['19,hit'] = "html5-iframe";             
	ga_payload.dimension['29,hit'] = "brightcove:" + id;
	ga_payload.dimension['64,hit'] = id;
	switch(percentage){
					case 25: trackGaEvent('Videos', "video: 25% complete", playername);
					break;
					case 50: trackGaEvent('Videos', "video: 50% complete", playername);
					break;
					case 75: trackGaEvent('Videos', "video: 75% complete", playername);
					break;
					case 90: trackGaEvent('Videos', "video: 90% complete", playername);
					break;
					case 95: trackGaEvent('Videos', "video: 95% complete", playername);
					break;
	}
}
wap_tms.HTML5_brightcove.videoEnd = function (playername, id, iframe) {
	ga_payload.dimension['19,hit'] = "html5";
	if(iframe)
					ga_payload.dimension['19,hit'] = "html5-iframe";
	ga_payload.dimension['29,hit'] = "brightcove:" + id;
	ga_payload.dimension['64,hit'] = id;
	trackGaEvent('Videos', "video: 100% complete", playername);
}
								
window.addEventListener('message', function(e) {
  var checkEventMessage = function(ev) {
		var flag = typeof(ev) === 'object' && typeof(ev.data) === 'string' && e.data.indexOf('brightcove') !== -1
			&& typeof(ev.lastEventId) === 'string' && typeof(ev.origin) === 'string'
			&& typeof(ev.source) === 'object' && typeof(ev.ports) === 'object';
		return flag;
	};
  if(checkEventMessage(e)){
		videoValues = e.data.split(":");
		wap_tms.custom.video_duration = videoValues[2];
		ga_payload.dimension['19,hit'] = "html5-iframe";
		ga_payload.dimension['29,hit'] = "brightcove:" + videoValues[4];
		ga_payload.dimension['64,hit'] = videoValues[4];
		switchCase = videoValues[1];
		switch (switchCase) {
			case "25":
				trackGaEvent('Videos', "video: 25% complete", videoValues[3]);
				break;
			case "50":
				trackGaEvent('Videos', "video: 50% complete", videoValues[3]);
				break;
			case "75":
				trackGaEvent('Videos', "video: 75% complete", videoValues[3]);
				break;
			case "90":
				trackGaEvent('Videos', "video: 90% complete", videoValues[3]);
				break;
			case "95":
				trackGaEvent('Videos', "video: 95% complete", videoValues[3]);
				break;
			case "play":
				trackGaEvent('Videos', "video: play", videoValues[3]);
				break;
			case "end":
				trackGaEvent('Videos', "video: 100% complete", videoValues[3]);
				break;
		}
  }
});



/*************************New HTML5 Brightcove Tracking Ends**********************/
}catch(e){}};
if(!utag_condload){try{
//*********************************************************************************************
//* Extension: Standardized tracking (2)                                                         *
//*********************************************************************************************
    function wapMainEventHandler($wap, objRef, event) {
      var $componentId = $wap(objRef).closest('[id]').attr('id');
      wa_component_name = $componentId, 
      //Capture 'data-wap_type' defined on the link clicked
	  linkType_object = $wap(objRef).attr("data-wap_type"), 
    //Capture 'data-wap_type' defined on the nearest ID
	  linkType_ComponentId = $wap(objRef).closest('[id]').attr("data-wap_type"), 
    //Set linkType based on which 'data-wap_type' is defined. 
	  linkType = ((typeof linkType_object === "undefined") || (linkType_object == "")) ? linkType_ComponentId : linkType_object, 
    //Capture href attribute from the link clicked.
	  linkHref_object = $wap(objRef).attr("href") + "", 
	  linkHref = clearnHref(linkHref_object), 
	  linkHref = (linkHref.indexOf("javascript") > -1) ? "nav-link" : linkHref, 
    //Capture 'data-wap_ref' defined on the nearest ID
	  linkRef_ComponentId = $wap(objRef).closest('[id]').attr('data-wap_ref'), 
    //Replace linkHref with the value captured above.
	  linkHref = ((typeof linkRef_ComponentId  === "undefined") || (linkRef_ComponentId == "")) ? linkHref : linkRef_ComponentId.toLowerCase(), 
    //Capture 'data-wap_ref' defined on the link clicked
	  linkRef_object = $wap(objRef).attr("data-wap_ref"), 
    //Set linkHref based on which 'data-wap_type' is defined. 
    linkHref = ((typeof linkRef_object === "undefined") || (linkRef_object == "")) ? linkHref : linkRef_object.toLowerCase(), 
    //Capture 'data-wap' defined on the link clicked
	  componentData = $wap(objRef).attr("data-wap");
	    if(typeof(componentData) != "undefined") {componentData = removeCharacterFromValues(componentData, "\"") };
	  componentData = ((typeof componentData === "undefined") || (componentData == "")) ? "" : $wap.parseJSON(unescapeHTML(componentData)), 

	  page_url = location.pathname, hostname = linkHref.getHostname();
    
      $componentId = (typeof $componentId !== "undefined") ? $componentId : 'pagelinks';
      $componentId = (typeof linkType === "undefined") ? $componentId : linkType; 
      var waType = $componentId;
      var dataType_regex = new RegExp('wa_skip_track|navheader|header|navmenu|navfooter|footer|navfilter|navinpage|navleft|languagechooser|download|shopfilter|reset_shopfilter|buynow|shopcompare|buy-third-party|thirdparty|loginsocial|loginintel|subscribe|feedback|help|print|socialreply|socialpost|socialshare|sociallike|socialrate|socialreferral|socialfollow|socialvote|socialchat');
      if(!dataType_regex.test(waType))
				//if (linkHref.startsWith("http"))
				if (linkHref.indexOf("http") === 0)
					waType = wap_tms.custom.isIntelOwned(linkHref) ? $componentId : 'thirdparty';	
      waType = wap_tms.custom.isAsset(linkHref) ? 'download' : waType; //set to download if extention matches
      switch (waType) {
        //Avoid Tracking
      case "wa_skip_track":
        break;
        //Navigation Header Example: 'Navigation','nav: header','link_url'
      case "navheader":
	  case "header":
        trackGaEvent('Navigation', 'click: header', linkHref);
        break;
        //Navigation Menu Example: 'Navigation','nav: menu','submenu:position:link-type:link_url'
      case "navmenu":
        if(typeof componentData !== "undefined"){
          if(typeof componentData.submenu !== "undefined")
            linkHref = componentData.submenu +":"+ linkHref;
          if(typeof componentData.category !== "undefined")
            linkHref = componentData.category +":"+ linkHref;
          if(typeof componentData.linktype !== "undefined")
            linkHref = componentData.linktype +":"+ linkHref;
        }
        trackGaEvent('Navigation', 'click: menu', linkHref);
        break;
        //Navigation Footer Example: 'Navigation', 'nav: footer',  link_url
      case "navfooter":
	  case "footer":
        trackGaEvent('Navigation', 'click: footer', linkHref);
        break;
        //Navigation Filter EXample: 'Navigation', 'nav: filter', 'filter_id_or_name'
      case "navfilter":
        trackGaEvent('Navigation', 'click: filter', linkHref);
        break;
        //Navigation in-page EXample: 'Navigation', 'click: inpage', 'component_name:link_url'
      case "navinpage":
        if(typeof componentData !== "undefined"){
          if(typeof componentData.componentName !== "undefined")
            linkHref = componentData.componentName +":"+ linkHref;
        }
        trackGaEvent('Navigation', 'click: in-page', linkHref);
        break;
        // 'Navigation', 'nav: left', link_url
      case "navleft":
        trackGaEvent('Navigation', 'click: left-nav', linkHref);
        break;
        //'Navigation', 'nav: select language', 'link_url_of_language_site_or_lang_ID'
      case "languagechooser":
        trackGaEvent('Navigation', 'click: select language', linkHref);
        break;
        //'download_asset_url'
      case "download":
        if (linkType_object == "wa_skip_track") { break; }; 
        linkHref = linkHref.split("?")[0];
        trackGaEvent('Downloads', linkHref);
        break;
        //'Shop', 'shop: filter', "filter:filter_type:unique_id
      case "shopfilter":
        trackGaEvent('Shop', 'shop: filter', "filter: " + linkHref);
        break;
        //'Shop', 'shop: reset filters', 'page_url'
      case "reset_shopfilter":
        trackGaEvent('Shop', 'shop: reset filters', location.pathname);
        break;
        //'Shop', 'click: buy now', 'page_url'
      case "buynow":
        if (typeof componentData !== "undefined") {
					  
		  aa_payload.eVar['49,hit'] = componentData.formFactor.toLowerCase();
		   aa_payload.eVar['83,hit'] = componentData.manufacturer.toLowerCase();
		   aa_payload.eVar['84,hit'] = componentData.processor.toLowerCase();
		   aa_payload.eVar['85,hit'] = componentData.retailer.toLowerCase();
		   aa_payload.eVar['86,hit'] = componentData.model.toLowerCase();
		   aa_payload.eVar['87,hit'] = componentData.price.toLowerCase();

		  
          ga_payload.dimension["44,hit"] = componentData.manufacturer.toLowerCase();
          ga_payload.dimension["45,hit"] = componentData.processor.toLowerCase();
          ga_payload.dimension["46,hit"] = componentData.retailer.toLowerCase();
          ga_payload.dimension["47,hit"] = componentData.model.toLowerCase();
          ga_payload.dimension["48,hit"] = componentData.price.toLowerCase();
          ga_payload.dimension["49,hit"] = componentData.formFactor.toLowerCase();
		  
		  aa_payload.prop['49,hit'] = componentData.formFactor.toLowerCase();
		aa_payload.prop['53,hit'] = componentData.manufacturer.toLowerCase();
		aa_payload.prop['54,hit'] = componentData.processor.toLowerCase();
		aa_payload.prop['55,hit'] = componentData.retailer.toLowerCase();
		aa_payload.prop['56,hit'] = componentData.model.toLowerCase();
		aa_payload.prop['57,hit'] = componentData.price.toLowerCase();

        }
        trackGaEvent('Shop', 'click: buy now', linkHref);
        break;
        //'Shop', 'shop: compare', page_url
      case "shopcompare":
        trackGaEvent('Shop', 'shop: compare', location.pathname);
        break;
        //'Shop', 'shop: buy third-party', link_url
      case "buy-third-party":
        trackGaEvent('Shop', 'click: buy third-party-clickout', linkHref);
        break;
        //'Third-party', 'click: exit Intel', link_url
      case "thirdparty":
        trackGaEvent('Third-party', 'click: exit Intel', linkHref);
        break;
        //'User Account Activity', 'login: social', 'social_site'
      case "loginsocial":
        trackGaEvent('User Account Activity', 'login: social', linkHref);
        break;
        //'User Account Activity', 'login: intel', page_url
      case "loginintel":
        trackGaEvent('User Account Activity', 'login: intel', location.pathname);
        break;
        //'User Account Activity', 'rss: subscribe', view-feed or rss_url 
      case "subscribe":
        trackGaEvent('User Account Activity', 'rss: subscribe', linkHref);
        break;
        //'User Account Activity', 'click: feedback', 'feedback-type'
      case "feedback":
        trackGaEvent('User Account Activity', 'click: feedback', linkHref);
        break;
        //'User Account Activity', 'click: help', 'page_url'
      case "help":
        trackGaEvent('User Account Activity', 'click: help', location.pathname);
        break;
        //'Offline', 'print', page_url or asset_type:page_url
      case "print":
        trackGaEvent('Offline', 'print', location.pathname);
        break;
        //'Social', 'comment: reply', 'page_url''
      case "socialreply":
        trackGaEvent('Comment','reply', location.pathname);
        break;
        //'Social', 'comment: post', 'page_url'
      case "socialpost":
        trackGaEvent('Comment', 'post', location.pathname);
        break;
        //'Social', 'share: site', page_url
      case "socialshare":
        trackGaEvent('Share', linkHref, location.pathname);
        break;
        //'Social', 'like: site', page_url
      case "sociallike":
        trackGaEvent('Like', linkHref, location.pathname);
        break;
        //'Social', 'rate: rate_type', 'rate_value'
      case "socialrate":
        trackGaEvent('Social', 'rate: ' + linkType, linkHref);
        break;
        //'Social', 'referral', 'link_url'
      case "socialreferral":
        trackGaEvent('Social', 'referral', linkHref);
        break;
        //'Social', 'follow: site', 'link_url'
      case "socialfollow":
        trackGaEvent('Follow', linkType, linkHref);
        break;
        //'Social', 'vote: poll', '-'
      case "socialvote":
        trackGaEvent('Social', 'vote: poll', '-');
        break;
        //
      case "socialchat":
        var chatType = "chat button";
        if (typeof componentData !== "undefined" && typeof componentData.chatType !== "undefined") {
          chatType = componentData.chatType;
        }
        trackGaEvent('Chat', 'click: ' + chatType, linkHref + ":" + location.pathname);
        break;
      default:
        if (typeof linkType !== "undefined")
		  wap_tms.error.set('link type not set,','link.diy');
         trackGaEvent('Components', 'click: ' + $componentId, linkHref);
        break;
      }
    }


//regex to get domain
String.prototype.getHostname = function () {
    var value = '.intel'; //return Intel site match as default
    if (/^http/.test(this)) {
        var regEx = new RegExp('^(?:f|ht)tp(?:s)?\://([^/]+)', 'im');
        value = this.match(regEx)[1].toString();
    }
    return value;
}
function unescapeHTML(data) {
            return $wap("<div />").html(data).text();
};

function removeCharacterFromValues(linkData, character) {
            var cleanLinkData = ""
              , commaSplit = linkData.split('\",');
            reg = new RegExp(character,"g");
            for (i = 0; i < commaSplit.length; i++) {
                var colonSplit = commaSplit[i].split(':');
                colonSplit[1] = colonSplit[1].replace(reg, "");
                if (i < commaSplit.length - 1) {
                    cleanLinkData += colonSplit[0] + "\:\"" + colonSplit[1] + "\"\,";
                } else {
                    colonSplit[1] = colonSplit[1].replace(/\}/g, '');
                    cleanLinkData += colonSplit[0] + "\:\"" + colonSplit[1] + "\"\}";
                }
            }
            return cleanLinkData;
        }

//*********************************************************************************************
//* Event Handlers                                                                            *
//*********************************************************************************************
if (wap_tms.jquery.ver_1_7_plus) {
  if(wap_tms.custom.base_linktracking){
    (function ($) {
		$(document).ready(function() {
			$("body").on("click", "a,img[data-wap_ref],label[data-wap_ref],button[data-wap_ref],input[data-wap_ref]", function (event) {
				wapMainEventHandler($wap, this, event);
			});
		});
    }($wap));
}
}
}catch(e){}};
if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"intel.profile-ssg.intel",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log : [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined') {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?utag.cfg.template+a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_intel.profile-ssg.intel_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(a, b, c, d, f){
        try {
          if (typeof utag.data['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(utag.data['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0
                  }
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
        //o["_t_visitor_id"]=o["cp.utag_main_v_id"];
        //o["_t_session_id"]=o["cp.utag_main_ses_id"];
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o){
        // Read visitor attributes in local storage
        var readAttr = function(o, l ){
          var a = "", b;
          a = localStorage.getItem(l);
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(o,b,1);
        }
        try{
          readAttr(o, "tealium_va" );
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"] );
        }catch(e){ utag.DB(e) }
      },
      RDut: function(o, a){
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        o["ut.event"] = a || "view";
        o["ut.visitor_id"]=o["cp.utag_main_v_id"];
        o["ut.session_id"]=o["cp.utag_main_ses_id"];
        try{
          o["ut.account"] = utag.cfg.utid.split("/")[0];
          o["ut.profile"] = utag.cfg.utid.split("/")[1];
          o["ut.env"] = utag.cfg.path.split("/")[6];
        }catch(e){ utag.DB(e) }
      },
      RDses: function( o, a, c ) {
        a = (new Date()).getTime();
        c = ( a + parseInt( utag.cfg.session_timeout ) ) + "";

        // cp.utag_main_ses_id will not be in the data layer when it has expired or this is first page view of all time
	if ( !o["cp.utag_main_ses_id"] ) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__sn"] = ( 1 + parseInt( o["cp.utag_main__sn"] || 0 ) ) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
        }
        
        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;

        utag.loader.SC( "utag_main", { "_sn": ( o["cp.utag_main__sn"] || 1 ), "_ss": o["cp.utag_main__ss"], "_st": c, "ses_id": ( o["cp.utag_main_ses_id"] || a ) + ";exp-session", "_pn": o["cp.utag_main__pn"] + ";exp-session" } );
      },
      RDpv: function( o ) {
        if ( typeof utag.pagevars == "function" ) {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RD: function( o, a ) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        utag.loader.RDcp(o);

        if ( !utag.loader.rd_flag ) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
          o["cp.utag_main__pn"] = ( 1 + parseInt( o["cp.utag_main__pn"] || 0 ) ) + "";
          // the _st value is not-yet-set for first page view so we'll need wait to write in _pn value (which is exp-session)
          // The SC function expires (removes) cookie values that expired with the session
          utag.loader.SC( "utag_main", { "v_id": o["cp.utag_main_v_id"] } );
          utag.loader.RDses(o);
        }

        // first utag.track call for noview should not clear session start (_ss) value
        if(a && !utag.cfg.noview)utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (j[f] instanceof Array) {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (d[g] instanceof Array) {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g,"") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
              utag.DB("SENDING: "+a);
              try{
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: "+a);
                  while( d = utag.loader.sendq[a].shift() ) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view',utag.handler.C(utag.data));
                }
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
	        utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if(!utag.data){
            try {
              utag.cl = {'_all_': 1};
              utag.loader.initdata();    
              utag.loader.RD(utag.data);
            }catch(e){ utag.DB(e) };
          }
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	

        v = ".tiqcdn.com";
        w = utag.cfg.path.indexOf(v);
        if(w>0 && b["cp.utag_main__ss"]==1 && !utag.cfg.no_session_count)utag.ut.loader({src:utag.cfg.path.substring(0,w)+v+"/ut"+"ag/tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        var t;
        if(utag.ut.typeOf(a) == "object"){
          t=utag.handler.C(a)
        }else{
          t=a
        }
        utag.db_log.push(t);
        try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a, cfg:{cb:c,uids:d}})
    },
    link: function(a,c,d) {
      return this.track({event:'link', data:a, cfg:{cb:c,uids:d}})
    },
    track: function(a,b,c,d) {
      if (typeof a == "string") a = { event: a, data: b, cfg: {cb: c} };

      for(d in utag.loader.GV(utag.o)){
        try{
          utag.o[d].handler.trigger(a.event || "view", a.data || a, a.cfg)
        }catch(e){utag.DB(e)};
      }
      if(a.cfg && a.cfg.cb)try{a.cfg.cb()}catch(e){utag.DB(e)};
      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(b){
        utag.DB("Load Rules");
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c!="alr" && !this.cfg_extend){
          return 0; 
        }
        utag.DB("RE: "+c);
        if(c=="alr")utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || f[c]==0){
                  e=1
                }else{
                  if(f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a+(c && c.uids?":"+c.uids.join(","):""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }

        // update all values for AJAX pages
        utag.ut.merge(b,this.df,0);
        utag.loader.RD( b, a );

        // clearing noview flag after the RD function call
        utag.cfg.noview = false;

        function sendTag(a, b, d){
          try {
            if(typeof utag.sender[d]!="undefined"){
              utag.DB("SENDING: "+d);
              utag.sender[d].send(a, utag.handler.C(b));
	      utag.rpt['s_' + d] = 0;
            }else if (utag.loader.cfg[d].load!=2 && utag.loader.cfg[d].s2s!=1){
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({"event":a, "data":utag.handler.C(b)});
              utag.loader.sendq.pending++;
              utag.loader.AS({id : d, load : 1}); 
            }
          }catch (e) {utag.DB(e)}
        }
        
        // utag.track( { event : "view", data: {myvar : "myval" }, cfg: { uids : [1,2,10] } } );
        if(c && c.uids){
          this.RE(a,b,"alr");
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            // bypass load rules
            sendTag(a, b, d);
          }
        }else if(utag.cfg.load_rules_ajax){
          this.RE(a,b,"blr");
          // process load rules based on current data layer
          this.LR(b);
          this.RE(a,b,"alr");
          
          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
              sendTag(a, b, d);
            }
          }
        }else{
          // legacy behavior
          this.RE(a,b,"alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a,b,"end");
      },
      // "sort-of" copy
      C: function(a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(a[c] instanceof Array){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        if(!utag.v_id){
          a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;
        }
        return utag.v_id
      },
      hasOwn: function(o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          if (utag.ut.hasOwn(o,a))return false
        }
        return true
      },
      isEmpty: function(o) {
        var t = utag.ut.typeOf(o);
        if ( t == "number" ){
          return isNaN(o)
        }else if ( t == "boolean" ){
          return false
        }else if ( t == "string" ){
          return o.length === 0
        }else return utag.ut.isEmptyObject(o)
      },
      typeOf: function(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || c instanceof Array) {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      encode: function(a, b) {
        b = "";
        try{b = encodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
      },
      loader: function(o, a, b, c, l, m) {
        utag.DB(o);
        a=document;
        if (o.type=="iframe") {
          // if iframe of same ID already exists, just reset the src value (do not create a new iframe)
          m = a.getElementById( o.id );
          if ( m && m.tagName == "IFRAME" ) {
            b = m;
          } else {
            b = a.createElement("iframe");
          }
          o.attrs = o.attrs || {};
          utag.ut.merge( o.attrs, { "height" : "1", "width" : "1", "style" : "display:none" } , 0 );
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b = new Image();
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
        }
        if(o.id){b.id=o.id};
        for( l in utag.loader.GV(o.attrs) ){
          b.setAttribute( l, o.attrs[l] )
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }

        if ( o.type != "img" && !m ) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to "+l+": "+o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b)
            }
          }
        }
      }
    }
  };
  utag.o['intel.profile-ssg.intel']=utag;
  utag.cfg = {
    template : "ut4.40.",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    path: "//tags.tiqcdn.com/utag/intel/profile-ssg.intel/prod/",
    utid: "intel/profile-ssg.intel/201802141549"
  };
  utag.cfg.v = utag.cfg.template + "201802141549";
  utag.cond={106:0,107:0,108:0,109:0,110:0,111:0,112:0,113:0,114:0,115:0,116:0,117:0,118:0,119:0,120:0,121:0,122:0,123:0,124:0,125:0,126:0,127:0,128:0,129:0,130:0,131:0,132:0,133:0,135:0,136:0,37:0,43:0,44:0,46:0,48:0,49:0,51:0,52:0,54:0,59:0,62:0,63:0,65:0,72:0,74:0,76:0,77:0,79:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,89:0,90:0,91:0,92:0,93:0,96:0,97:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page.wap_tms.custom.youtube']=wap_tms.custom.youtube}catch(e){utag.DB(e)};};
utag.loader.chkCanRunTime = function(s,e,d,t,o,i) {   try {       o = {           is : [s,e],           dt : [],           tm : [],           hd : 0,           ms : 0       };       for (i=0;i<2;i++){           d = o.is[i].substring(0,8);           t = o.is[i].substring(8);           o.dt[i] = new Date();           if (d !== '--------'){               o.dt[i].setFullYear(d.substring(0,4));               o.dt[i].setMonth(parseInt(d.substring(4,6))-1);               o.dt[i].setDate(d.substring(6,8));           }           if (t !== '----'){               o.dt[i].setHours(t.substring(0,2));               o.dt[i].setMinutes(t.substring(2,4));           } else {               o.dt[i].setHours(o.hd);               o.dt[i].setMinutes(o.ms);           }           o.dt[i].setSeconds(o.ms);           o.tm[i] = o.dt[i].getTime();           o.hd = 23;           o.ms = 59;       }       o.n = new Date().getTime();       return (o.n >= o.tm[0] && o.n <= o.tm[1]);   } catch (e) {       return false;   }};utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '106':try{c[106]|=  (utag.loader.chkCanRunTime("20170821----","20180731----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/en-us/experts/ambassadors'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '107':try{c[107]|=  (utag.loader.chkCanRunTime("20170821----","20180731----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/en-us/ai-academy/journey'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '108':try{c[108]|=  (utag.loader.chkCanRunTime("20170821----","20180731----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/en-us/ai-academy/training'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '109':try{c[109]|=  (utag.loader.chkCanRunTime("20170822----","20180731----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/experts/ambassadors/apply'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '110':try{c[110]|=  (utag.loader.chkCanRunTime("20170822----","20180731----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/ai-academy/students'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '111':try{c[111]|=  (utag.loader.chkCanRunTime("20170822----","20180731----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/experts/ambassadors/team'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '112':try{c[112]|=  (utag.loader.chkCanRunTime("20171004----","20181004----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/vr'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '113':try{c[113]|=  (utag.loader.chkCanRunTime("20171004----","20181004----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/en-us/vr/training/get-started'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '114':try{c[114]|=  (utag.loader.chkCanRunTime("20171013----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/ai-academy/ambassadors'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '115':try{c[115]|=  (utag.loader.chkCanRunTime("20171013----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/ai-academy/ambassadors/apply'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '116':try{c[116]|=  (utag.loader.chkCanRunTime("20171013----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/ai-academy/journey'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '117':try{c[117]|=  (utag.loader.chkCanRunTime("20171013----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/ai-academy/students'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '118':try{c[118]|=  (utag.loader.chkCanRunTime("20171013----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/ai-academy/ambassadors/team'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '119':try{c[119]|=  (utag.loader.chkCanRunTime("20171013----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/ai-academy/basics'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '120':try{c[120]|=  (utag.loader.chkCanRunTime("------------","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/iot/documentation/code-samples'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '121':try{c[121]|=  (utag.loader.chkCanRunTime("20171023----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/iot/training'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '122':try{c[122]|=  (utag.loader.chkCanRunTime("20171023----","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/industrial'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '123':try{c[123]|=  (utag.loader.chkCanRunTime("------------","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/articles/introduction-to-smart-video-technologies-from-intel'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '124':try{c[124]|=  (utag.loader.chkCanRunTime("------------","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/iot/cloud-analytics/aws'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '125':try{c[125]|=  (utag.loader.chkCanRunTime("------------","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/iot-comm-devkit-labs'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '126':try{c[126]|=  (utag.loader.chkCanRunTime("------------","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/iot/journey/basics'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '127':try{c[127]|=  (utag.loader.chkCanRunTime("------------","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/iot/journey/production'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '128':try{c[128]|=  (utag.loader.chkCanRunTime("------------","20181130----")) && ((d['dom.url'].toString().toLowerCase().indexOf('https://software.intel.com/en-us/ai-academy/tools/devcloud'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '129':try{c[129]|=(/parallel-studio-xe\/choose-download$/i.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '130':try{c[130]|=(/\/iot\/arduino-create$/i.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '131':try{c[131]|=(/\/iot\/hardware\/up-squared-grove-dev-kit$/i.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '132':try{c[132]|=(d['wa_section']=='iq')||(d['wa_org3'].toString().toLowerCase()=='asmo-na:us-en:intc'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '133':try{c[133]|=(d['wa_page_url'].toString().toLowerCase().indexOf('/blogs/'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '135':try{c[135]|=  (utag.loader.chkCanRunTime("20180129----","201803312355")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('videos/is-python-almost-as-fast-as-native-code'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('videos/accelerating-ai-from-the-cloud-to-the-edge'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '136':try{c[136]|=(d['load_idio']=='true')}catch(e){utag.DB(e)}; break;
case '37':try{c[37]|=(d['wa_section']=='ssg-irc')}catch(e){utag.DB(e)}; break;
case '43':try{c[43]|=(/software\.intel\.com\/en-us$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/code-samples$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/code-samples\/github$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/free-software$/i.test(d['dom.url']))}catch(e){utag.DB(e)}; break;
case '44':try{c[44]|=(/software\.intel\.com\/en-us\/articles\/a-fast-flexible-and-scalable-path-to-commercial-iot-solutions$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/articles\/code-samples-for-detection-of-system-gpu-battery-mode-and-windows-8-on-screen-keyboard-in$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/articles\/quick-installation-guide-for-media-sdk-on-windows-with-intel-inde$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/articles\/what-is-code-modernization$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/support$/i.test(d['dom.url']))}catch(e){utag.DB(e)}; break;
case '46':try{c[46]|=(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/iot'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/articles/iot-reference-implementation-how-to-build-an-environment-monitor-solution'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/articles/tutorial-intel-iot-gateway-industrial-oil-gas-pressure-sensor-and-aws-iot'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/articles/sensor-to-cloud-connecting-intel-nuc-to-amazon-aws'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '48':try{c[48]|=(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/data-center'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '49':try{c[49]|=(/software\.intel\.com\/en-us\/videos$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/support\/intel-premier-support$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/recent-updates$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/meet-the-developers$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/all-dev-areas$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/meet-the-developers\/evangelists\/team$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/meet-the-developers\/evangelists$/i.test(d['dom.url']))}catch(e){utag.DB(e)}; break;
case '51':try{c[51]|=(/software\.intel\.com\/en-us\/ai$/i.test(d['dom.url']))}catch(e){utag.DB(e)}; break;
case '52':try{c[52]|=(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/recon'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '54':try{c[54]|=(typeof d['cp.utag_main_wa_dnb']=='undefined'&&d['wa_site_id'].toString().toLowerCase().indexOf('intc:asmo-na:us-en'.toLowerCase())>-1)||(typeof d['cp.utag_main_wa_dnb']=='undefined'&&d['wa_site_id'].toString().toLowerCase().indexOf('elq:asmo-na:us-en'.toLowerCase())>-1)||(typeof d['cp.utag_main_wa_dnb']=='undefined'&&d['wa_site_id'].toString().toLowerCase().indexOf('designintools:asmo-na:us-en'.toLowerCase())>-1)||(typeof d['cp.utag_main_wa_dnb']=='undefined'&&d['wa_site_id'].toString().toLowerCase().indexOf('chan:asmo-na:us-en'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '59':try{c[59]|=(typeof d['ghostery_pid']!='undefined'&&d['ghostery_pid']!='')}catch(e){utag.DB(e)}; break;
case '62':try{c[62]|=(d['load_eloqua']=='true')}catch(e){utag.DB(e)}; break;
case '63':try{c[63]|=(d['load_ghostery']=='true')}catch(e){utag.DB(e)}; break;
case '65':try{c[65]|=(d['js_page.wap_tms.custom.youtube'].toString().indexOf('true')>-1)}catch(e){utag.DB(e)}; break;
case '72':try{c[72]|=(/\/gpa$/.test(d['dom.url']))||(d['dom.url'].toString().indexOf('/gpa/')>-1)}catch(e){utag.DB(e)}; break;
case '74':try{c[74]|=  (utag.loader.chkCanRunTime("20170401----","20170531----")) && ((/software\.intel\.com\/en-us\/forums\/bigdata$/i.test(d['dom.url']))||(/software\.intel\.com\/ai\/academy$/i.test(d['dom.url']))||(/software\.intel\.com\/forums\/bigdata$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/ai\/academy$/i.test(d['dom.url'])))}catch(e){utag.DB(e)}; break;
case '76':try{c[76]|=(d['dom.url'].toString().toLowerCase().indexOf('system-studio/2017'.toLowerCase())>-1)||(/\/system-studio$/i.test(d['dom.url']))||(d['dom.url'].toString().toLowerCase().indexOf('system-studio/FreeBSD'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '77':try{c[77]|=(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/gamedev/code-samples'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/gamedev/tutorials'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/ai/academy'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/modern-code/training/short-video-series'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/modern-code/code-samples'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('software.intel.com/en-us/ai/documentation?search_api_views_fulltext=&page=0&value=20780'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '79':try{c[79]|=(d['load_clicktale']=='true')}catch(e){utag.DB(e)}; break;
case '81':try{c[81]|=  (utag.loader.chkCanRunTime("------------","20171231----")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('/gamedev/code-samples'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '82':try{c[82]|=  (utag.loader.chkCanRunTime("------------","20171231----")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('/gamedev/journey/build'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '83':try{c[83]|=  (utag.loader.chkCanRunTime("------------","20171231----")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('/gamedev/journey/design'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '84':try{c[84]|=  (utag.loader.chkCanRunTime("------------","20171231----")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('/gamedev/journey/ideate'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '85':try{c[85]|=  (utag.loader.chkCanRunTime("------------","20171231----")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('/gamedev/journey/launch'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '86':try{c[86]|=  (utag.loader.chkCanRunTime("------------","20171231----")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('/gamedev/journey/test'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '87':try{c[87]|=  (utag.loader.chkCanRunTime("------------","20171231----")) && ((d['dom.pathname'].toString().toLowerCase().indexOf('/gamedev/tutorials'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '89':try{c[89]|=  (utag.loader.chkCanRunTime("20170510----","20170610----")) && ((/software\.intel\.com\/en-us\/iot\/home$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/iot\/hardware\/curie\/dev-kit$/i.test(d['dom.url'])))}catch(e){utag.DB(e)}; break;
case '90':try{c[90]|=  (utag.loader.chkCanRunTime("20170517----","20170717----")) && ((/software\.intel\.com\/en-us\/runtimes\/python$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/modern-code$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/data-center$/i.test(d['dom.url'])))}catch(e){utag.DB(e)}; break;
case '91':try{c[91]|=  (utag.loader.chkCanRunTime("20170518----","20170718----")) && ((/software\.intel\.com\/en-us\/retail\/displays$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/articles\/introduction-to-developing-and-optimizing-display-technology$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/media-sdk$/i.test(d['dom.url']))||(/software\.intel\.com\/en-us\/amt-sdk$/i.test(d['dom.url'])))}catch(e){utag.DB(e)}; break;
case '92':try{c[92]|=(d['cp.utag_main_elq_enrich']!='1'&&/^CINCP/.test(d['wa_elq_id']))}catch(e){utag.DB(e)}; break;
case '93':try{c[93]|=  (utag.loader.chkCanRunTime("------------","20170831----")) && ((d['dom.url'].toString().toLowerCase().indexOf('/videos/iot-introduction-smart-home-basics-with-intel-ibm'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/videos/smart-home-data-analytics-with-intel-and-ibm'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/videos/introduction-to-iot-security-with-intel-and-ibm'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;
case '96':try{c[96]|=(d['dom.url'].toString().indexOf('software.intel.com/ai/sign-up')>-1)||(d['dom.url'].toString().indexOf('software.intel.com/en-us/ai-academy')>-1)}catch(e){utag.DB(e)}; break;
case '97':try{c[97]|=  (utag.loader.chkCanRunTime("201710010000","201712312355")) && ((d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/bigdl-distributed-deep-learning-on-apache-spark'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/machine-learning-and-knowledge-reasoning-probing-with-intel-architecture'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/power-system-infrastructure-monitoring-using-deep-learning-on-intel-architecture'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/unattended-baggage-detection-using-deep-neural-networks-in-intel-architecture'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/manufacturing-package-fault-detection-using-deep-learning'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/improve-performance-using-vectorization-and-intel-xeon-scalable-processors'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/intel-xeon-processor-scalable-family-technical-overview'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/build-and-install-tensorflow-on-intel-architecture'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/vector-api-developer-program-for-java'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/enhancing-vr-immersion-with-the-cpu-in-star-trek-bridge-crew'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/vr-content-developer-guide'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/chasing-the-vr-american-dream-from-australia'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/digital-happiness-taking-dreadeye-aim-at-vr'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/use-the-intel-spmd-program-compiler-for-cpu-vectorization-in-games'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/mount-blade-is-a-much-bigger-deal-than-you-think'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/the-open-vswitch-exact-match-cache'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/introduction-to-the-dpdk-sample-applications'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/get-started-with-ipsec-acceleration-in-the-fdio-vpp-project'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/yahoo-japan-accelerates-l7-performance-using-open-vswitch-with-dpdk'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('/en-us/articles/introduction-to-programming-with-persistent-memory-from-intel'.toLowerCase())>-1))}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();        };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b){ try{ if(b['dom.title'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_os'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_english_title'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_intel_technology'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_topic'].toString().toLowerCase().indexOf('android'.toLowerCase())>-1||b['wa_page_type_macro'].toString().indexOf('project')>-1){b['wa_data_view_name']='android'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){b['wa_data_view_name']='empty'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/ultrabook|windows/.test(b['wa_zone'])||/ultrabook|windows/.test(b['wa_os'])||/ultrabook|perceptual computing/.test(b['wa_topic'])||/ultrabook|perceptual computing/.test(b['wa_english_title'])||/ultrabook|perceptual computing/.test(b['wa_intel_technology'])||/ultrabook|perceptual computing/.test(b['wa_english_title'])||/ultrabook|perceptual computing/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "windows";      }else{          placeHolder = "windows";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/intel.com|\/pams\/|\/partner\//.test(b['dom.pathname'])||b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "windows" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/business client|vpro/.test(b['wa_zone'])||/business client|vpro/.test(b['wa_topic'])||/business client|vpro/.test(b['wa_english_title'])||/business client|vpro/.test(b['wa_intel_technology'])||/business client|vpro/.test(b['dom.title'])||/business-client|vpro/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "business client";      }else{          placeHolder = "business client";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "business client" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/cloud computing|hpc|parallel computing|avx and cpu instructions|parallel architectures|many integrated core architecture/.test(b['wa_topic'])||/cloud computing|hpc|parallel computing|avx and cpu instructions|parallel architectures|many integrated core architecture/.test(b['wa_english_title'])||b['dom.pathname'].toString().toLowerCase().indexOf('many-integrated-core'.toLowerCase())>-1||/server|multi-core|data-center|multicore|datacenter|xeon|mic-developer|intel-many-integrated-core/.test(b['dom.pathname'])||/multicore|multi core|datacenter|multi-core|data center|server|xeon|many integrated core architecture/.test(b['dom.title'])||b['wa_zone'].toString().toLowerCase().indexOf('server'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "server developer";      }else{          placeHolder = "server developer";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('datacentermanager'.toLowerCase())>-1||b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "server developer" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/compiler|development-products|fortran-library|intel-devtools|intel-devtools|-mpi-library|-sdp-home|-studio|tools-by-segment|-xe|sdk|-xdk|daal|ipp|threading-b|iss-|gpa|mkl|tbb|-analyzer|free-software|python|deep-learning-training-tool|opencl|intel-parallel-universe-magazine|analysis-library|intel-system-debugger|stress-bitstreams|performance-libraries|webrtc|intel-hardware-accelerated-execution-manager|\/multi-os-engine|\/xeon-phi\/mic|go-automotive-sdk/.test(b['dom.pathname'])||/development products|parallel|tools for os x|building blocks|library|mpi|development tools|software products|education offerings|tbb|system studio|\binde\b|native development exp/.test(b['dom.title'])||/vectorization|visual fortran compiler|array visualizer|parallel computing|integrated native dev|computer vision/.test(b['wa_topic'])||/development products|parallel|tools for os x|building blocks|library|mpi|development tools|software products|education offerings|tbb|system studio|\binde\b|native development exp/.test(b['wa_english_title'])||/performance primitives|[\s]xe|vtune|embedded|memory|collector|whatif|compiler|kernel|studio|cluster|cilk plus|integrated native dev|performance analyzers|intel® xdk|energy profiler|opencl™ code builder|media client solutions|system debugger|daal|python|threading building blocks|intel® advisor|intel® media sdk|intel® mpi library/.test(b['wa_software'])||/product support|product documentation/.test(b['wa_page_type_micro'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "dpd product";      }else{          placeHolder = "dpd product";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/\/translate\/|\/partner\//.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "dpd product" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/html5|intel-xdk/.test(b['dom.pathname'])||/html5|intel-xdk/.test(b['dom.title'])||b['wa_os'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||b['wa_topic'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||b['wa_english_title'].toString().toLowerCase().indexOf('html5'.toLowerCase())>-1||/html5|xdk/.test(b['wa_intel_technology'])||/html5|xdk/.test(b['wa_software'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "html5";      }else{          placeHolder = "html5";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "html5" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['wa_target_audience'].toString().toLowerCase().indexOf('professional'.toLowerCase())>-1&&b['wa_zone'].toString().toLowerCase().indexOf('internet of things'.toLowerCase())>-1)){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "iot-commercial";      }else{          placeHolder = "iot-commercial";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/vtune|visual\-fortran\-compiler|threading\-building|system\-studio|mkl|math\-kernel|many|IPP|integrated\-performance\-primitives|Inspector|fortran\-compiler\-for\-linux|debug\-solutions|Clusters|cilk|c\-compiler/.test(b['dom.pathname'])||/visual fortran compiler|ipp|integrated performance primitives|c\+\+ compiler|fortran compiler for linux|mkl|math kernel|threading building|vtune|clusters|licens|inspector/.test(b['dom.title'])||/visual fortran|integrated performance primitives|c\+\+ compiler|fortran compiler for linux|math|threading building|vtune|clusters|licensing|inspector|debug|intel® software development|many|advis|cilk|system studio|media processing/.test(b['wa_topic'])||/visual fortran|integrated performance primitives|c\+\+ compiler|fortran compiler for linux|math|threading building|vtune|clusters|licensing|inspector|debug|intel® software development|many|advis|cilk|system studio/.test(b['wa_english_title'])||/visual fortran|integrated performa|c\+\+ comp|fortran compiler for linux|math|threading building|vtune|clusters|license|intel® software development|advisor|xdk/.test(b['wa_intel_technology'])||/visual fortran|integrated performa|c\+\+ comp|fortran compiler for linux|math|threading building|vtune|clusters|license|intel® software development|advisor|xdk|python/.test(b['wa_software'])||/media-server|intel-media-sdk/.test(b['dom.pathname'])||b['dom.pathname'].toString().toLowerCase().indexOf('/forums/'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() {  	var placeHolder= utag_data.wa_data_view_name;   	if (placeHolder != 'empty'){              		placeHolder = placeHolder +":"+ "dpd support";     	}else{           		placeHolder= utag_data.wa_data_view_name;       	}       	return placeHolder;  })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('/forums/'.toLowerCase())<0){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "dpd support" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_intel_technology'].toString().toLowerCase().indexOf('software guard extension'.toLowerCase())>-1||/sgx/.test(b['dom.pathname'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "sgx";      }else{          placeHolder = "sgx";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/internet\-of\-things|\/iot|\-iot|\/retail\//.test(b['dom.pathname'])||b['dom.title'].toString().toLowerCase().indexOf('internet of things'.toLowerCase())>-1||/internet/.test(b['wa_topic'])||b['wa_zone'].toString().toLowerCase().indexOf('internet'.toLowerCase())>-1||/curie|edison|galileo|iot|quark|joule/.test(b['shop_formFactor'])||/System Studio IoT Edition|Intelligent Device Platform XT|MRAA|UPM library/.test(b['wa_software'])||b['wa_software'].toString().toLowerCase().indexOf('System Studio for Microcontrollers'.toLowerCase())>-1||b['dom.domain'].toString().toLowerCase().indexOf('iotdk'.toLowerCase())>-1||b['wa_software'].toString().toLowerCase().indexOf('XDK'.toLowerCase())>-1||/72199[0-9]/.test(b['wa_page_id'])||/73108[0-9]|73109[0-4]/.test(b['wa_page_id'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "iot";      }else{          placeHolder = "iot";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "iot" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_intel_technology'].toString().toLowerCase().indexOf('storage'.toLowerCase())>-1||b['wa_topic'].toString().toLowerCase().indexOf('storage'.toLowerCase())>-1||b['wa_english_title'].toString().toLowerCase().indexOf('storage'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "storage";      }else{          placeHolder = "storage";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/gamedev|games|game-dev/.test(b['dom.pathname'])||b['dom.title'].toString().toLowerCase().indexOf('game development'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('game'.toLowerCase())>-1||/game dev|games|Game Development/.test(b['wa_topic'])||/game dev|games/.test(b['wa_english_title'])||b['dom.url'].toString().toLowerCase().indexOf('venturebeat'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "game development";      }else{          placeHolder = "game development";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "game development" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/realsense|real-sense/.test(b['dom.pathname'])||b['dom.title'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1||b['wa_zone'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1||b['wa_intel_technology'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1||b['wa_software'].toString().toLowerCase().indexOf('realsense'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "real sense";      }else{          placeHolder = "real sense";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/\/pams\/|\/partner\//.test(b['dom.pathname'])||b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "real sense" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/\/forums\/networking\//.test(b['dom.pathname'])||b['wa_zone'].toString().toLowerCase().indexOf('networking'.toLowerCase())>-1||b['wa_intel_technology'].toString().toLowerCase().indexOf('networking'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "networking";      }else{          placeHolder = "networking";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.domain'].toString().toLowerCase()=='appshowcase.intel.com'.toLowerCase()){try{b['wa_data_view_name']=(function(){       var placeHolder= utag_data.wa_data_view_name;      console.log(placeHolder);      if (placeHolder == 'empty'){}else{           var index_data_view  = placeHolder.lastIndexOf(":");           if(placeHolder.substring(index_data_view+1) == "networking" ){                if(index_data_view != -1){                     placeHolder = placeHolder.substring(0,index_data_view);                }else{                    placeHolder = 'empty';                }           }      }       return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/modern-code/.test(b['dom.pathname'])||b['wa_english_title'].toString().indexOf('moderncode')>-1||b['wa_zone'].toString().indexOf('modern code')>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "modern code";      }else{          placeHolder = "modern code";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('machine-learning'.toLowerCase())>-1||/machine learning|artificial intelligence/.test(b['wa_zone'])||/machine learning|Artificial Intelligence/.test(b['wa_topic'])||b['dom.pathname'].toString().toLowerCase().indexOf('/ai'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "machine learning";      }else{          placeHolder = "machine learning";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/data-center/.test(b['dom.pathname'])||b['wa_topic'].toString().toLowerCase().indexOf('data center'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "Data-Center";      }else{          placeHolder = "Data-Center";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/reality/.test(b['wa_topic'])){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "virtualreality";      }else{          placeHolder = "virtualreality";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_topic'].toString().toLowerCase().indexOf('Persistent Memory'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('persistent-memory'.toLowerCase())>-1){try{b['wa_data_view_name']=(function() { var placeHolder= utag_data.wa_data_view_name;      if (placeHolder != 'empty'){             placeHolder = placeHolder +":"+ "persistentmemory";      }else{          placeHolder = "persistentmemory";      }      return placeHolder; })();}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_data_view_name'].toString().toLowerCase()=='empty'.toLowerCase()){try{b['wa_data_view_name']=delete utag_data.wa_data_view_name;}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['wa_data_view_name']!='undefined'){try{b['wa_custom_content_group']=wap_tms.content_group.set(b['wa_data_view_name'] , "ssg"); }catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['wa_local'];if(typeof d=='undefined')return;c=[{'tr-tr':'3956'},{'fr-fr':'3949'},{'se-sv':'3955'},{'nl-nl':'3959'},{'de-de':'3950'},{'it-it':'3960'},{'ru-ru':'3951'},{'pl-pl':'3953'},{'es-es':'3952'},{'ua-uk':'3958'},{'uk-en':'3957'},{'xe-en':'3957'},{'xl-es':'5835'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['ghostery_pid']=c[e][f];m=true};};if(m)break};if(!m)b['ghostery_pid']='';},
function(a,b){ try{ if((b['ghostery_pid'].toString().indexOf('3949')>-1&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3264'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3951'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3880'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3957'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3884'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3952'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3881'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3959'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3873'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3960'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3875'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3950'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3874'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3953'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3879'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3955'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3755'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3958'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3883'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='3956'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='3882'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['ghostery_pid']=='5835'&&b['dom.url'].toString().indexOf('/privacy/')>-1)){b['ghostery_pid']='5836'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['wa_local']=='us-en'&&b['dom.url'].toString().indexOf('/us/en/privacy/intel-cookie-notice.html')>-1&&b['wa_site_id'].toString().indexOf('intc:asmo-na:us-en')>-1)||(b['wa_local'].toString().indexOf('us-en')>-1&&b['dom.url'].toString().indexOf('/us/en/privacy/intel-privacy-notice.html')>-1&&b['wa_site_id'].toString().indexOf('intc:asmo-na:us-en')>-1)){b['ghostery_pid']='5838'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['user_agent'].toString().toLowerCase().indexOf('windows nt 6.1'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 6.0'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.2'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.1'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.01'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 5.0'.toLowerCase())>-1||b['user_agent'].toString().toLowerCase().indexOf('windows nt 4.0'.toLowerCase())>-1){b['content_ter_initiative']='ob'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['wa_erpm_id']!='undefined'&&b['wa_erpm_id']!=''){b['wa_user_type']='erpm'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['wa_erpm_id']!='undefined'&&b['wa_erpm_id']==''){b['wa_user_type']='anonymous'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_topic'].toString().indexOf('healthcare')>-1){b['content_industry']='healthcare'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_topic'].toString().indexOf('datacenter')>-1){b['content_org_initiative']='data-center'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('/articles/a-fast-flexible-and-scalable-path-to-commercial-iot-solutions'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/intel-architecture-and-processor-identification-with-cpuid-model-and-family-numbers'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/introducing-joule-module'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/understanding-the-iot-ecosystem'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/what-is-joule-module'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/what-is-the-gateway-and-why-should-i-care'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/what-the-intel-curie-compute-module-means-to-makers'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/09/19/trending-on-iot-our-most-popular-developer-stories-september'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/09/23/intel-iot-developer-kit-your-gateway-to-commercial-cloud-solutions-with-microsoft'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/10/20/trending-on-iot-our-most-popular-intel-iot-developer-stories-for-october'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/11/01/top-ten-intel-software-developer-stories-november'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/a-fast-flexible-and-scalable-path-to-commercial-iot-solutions'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/getting-to-know-the-arduino-101-platform'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/rapid-prototyping-with-the-intel-iot-developer-kit'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/when-should-i-use-a-gateway-in-iot-development'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/09/24/microsoft-azure-iot-cloud-capitalizes-on-intel-iot-developer-kit'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/09/24/which-intel-iot-gateway-is-right-for-you'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/10/09/networking-considerations-for-your-iot-project'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/10/29/choosing-cloud-services-for-your-iot-project'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/11/03/relating-a-problem-definition-to-intel-iot-architecture'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/02/22/announcing-intel-iot-developer-kit-support-for-intel-iot-gateways'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/09/19/trending-on-iot-our-most-popular-developer-stories-september'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/top-ten-stories'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/cloud-analytics/microsoft-azure'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/hardware/curie'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/hardware/dev-kit'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/hardware/joule'.toLowerCase())>-1){b['content_org_initiative']='internet-of-things';b['content_ter_initiative']='journey';b['content_sub_ter_initiative']='inspire'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('/articles/exploring-c-on-the-intel-joule'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/industrial-use-case-and-tutorial-intel-and-the-ibm-watson-iot-platform-0'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/iot-path-to-product-how-to-build-the-smart-home-prototype'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/iot-path-to-product-smart-home'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/iot-path-to-product-the-making-of-a-connected-transportation-solution'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/opencl-drivers'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/path-to-product-the-making-of-an-intelligent-vending-machine'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/18-how-to-intel-iot-code-samples-now-available-in-cpp'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/01/26/realsense-linux-osx-drivers'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/06/24/simple-obstacle-avoidance-robot'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-galileo-windows-step1'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/SetupGateway-hardware'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/videos/connect-intel-iot-gateway-and-ibm-watson-iot-platform'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/xdk/docs/release-notes-information-intel-xdk'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/a-comparison-of-iot-gateway-protocols-mqtt-and-modbus'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/azure-connectivity-with-edison-and-controlling-it-by-a-windows-phone-app'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/black-belt-developers-share-their-best-advice-and-the-biggest-mistakes-they-see'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/building-iot-teams-lessons-learned'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/connect-to-ibm-iot-foundation'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/game-on-intel-edison-with-the-xadow-wearable-kit'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/intel-and-the-national-taiwan-science-education-center-reach-for-the-stars'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/internet-of-things-using-mraa-to-abstract-platform-io-capabilities'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/smart-iot-stroller'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/value-what-why-you-need-a-value-proposition-how-to-write-one'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/04/06/using-edison-securely-connect-iot-sensor-to-the-internet-with-mqtt'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/05/05/efficient-data-sharing-using-interrupts-on-intel-edison'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/08/25/innovation-think'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/10/22/love-developing-in-java'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/03/04/adding-features-and-testing-on-intel-iot-architecture'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/03/04/scaling-to-a-prototype-on-intel-iot-architecture'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/03/04/scaling-your-project-to-production-on-intel-iot-architectur'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/brillo'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/cloud-analytics/microsoft-azure'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/documentation'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/documentation/code-samples'.toLowerCase())>-1){b['content_org_initiative']='internet-of-things';b['content_ter_initiative']='journey';b['content_sub_ter_initiative']='apply'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().toLowerCase().indexOf('/articles/communication-patterns-for-the-internet-of-things'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/designing-with-the-intel-curie-compute-module-in-mind'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/joule-vs-edison'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/sensor-to-cloud-connecting-the-intel-nuc-and-arduino-101-board-to-the-ibm-watson-iot'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/12/11/codecs-are-they-slowing-you-down'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/09/12/deprecate-pcommit-instruction'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/connecting-your-intel-edison-board-using-wifi'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/flashing-firmware-with-flash-tool-lite'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-arduino'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-arduino-install'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-edison-windows'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-edison-windows-step1'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-edison-windows-step2'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-edison-windows-step3'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-galileo-linux-step1'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/get-started-galileo-windows'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/intel-system-studio-iot-edition-guide-for-c'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/setting-up-serial-terminal-on-system-with-mac-os-x'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/setting-up-serial-terminal-on-system-with-windows'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/working-with-sensors-in-intel-system-studio-iot-edition'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/a-comparison-of-iot-gateway-protocols-mqtt-and-modbus'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/beyond-the-drone-zone'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/case-study-build-a-smart-conference-system-by-enabling-zigbee-on-the-intel-edison-platform'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/combining-language-and-ecosystem-for-desired-results'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/connect-a-gprs-modem-to-intel-edison'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/developing-with-node-red'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/fun-with-the-arduino-101-genuino-101'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/getting-started-with-node-red-and-arduino-101-with-the-grove-shield'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/intel-fuels-innovation-at-nasa-space-apps-challenge'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/iot-path-to-product-smart-home'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/send-sms-messages-using-twilio-and-arduino-on-intel-edison'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/smart-stove-top'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/the-past-present-and-future-of-iot'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/the-wearable-smart-gateway-revolutionary-wearable-tech-for-first-responders'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/what-is-the-gateway-and-why-should-i-care'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/articles/what-the-intel-curie-compute-module-means-to-makers'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/02/20/building-and-running-mosquitto-mqtt-on-intel-edison'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2015/11/04/announcing-18-new-how-to-intel-iot-code-samples'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/03/04/building-a-proof-of-concept-on-intel-iot-architecture'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/blogs/2016/03/04/identify-and-design-solutions-for-intel-iot-architecture'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/documentation/code-samples'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/iot/hardware/sensors'.toLowerCase())>-1||b['dom.pathname'].toString().toLowerCase().indexOf('/videos/open-source-robotics-via-cylonjs'.toLowerCase())>-1){b['content_org_initiative']='internet-of-things';b['content_ter_initiative']='journey';b['content_sub_ter_initiative']='learn'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['wa_elq_id_short']!='undefined'&&b['wa_elq_id_short']!=''){b['wa_user_type']='eloqua'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['wa_elq_id_short']!='undefined'&&b['wa_elq_id_short']!=''&&typeof b['wa_erpm_id']!='undefined'&&b['wa_erpm_id']!='')){b['wa_user_type']='erpm,eloqua'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['wa_section']!='undefined'){b['target_at_property']='7754c48e-1e95-645a-0148-70cc9c0e82fe'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['wa_section']!='undefined'){try{b['wa_custom_content_group']=wap_tms.content_group.set("loaded", "ssg");}catch(e){}} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
wap_tms.custom.crossdomain_move = (document.referrer !== "" && wap_tms.extractHostname(document.referrer).indexOf(location.hostname) === -1);

wap_tms.custom.setAffinity = function (affinity, value) {

	var points = 10;
	if (wap_tms.affinities[affinity]) { //if specific value already exist
		if (wap_tms.affinities[affinity]['values'][value] == undefined) {
			wap_tms.affinities[affinity]['values'][value] = {};
		}
	} else {
		wap_tms.affinities[affinity] = {};
		wap_tms.affinities[affinity]['values'] = {};
		wap_tms.affinities[affinity]['config'] = {};
		wap_tms.affinities[affinity]['values'][value] = {};
	}
	//Score assigment
	if (wap_tms.affinities[affinity]['config'].seen) {
		points = 5;
	}
	wap_tms.affinities[affinity]['values'][value].score = wap_tms.affinities[affinity]['values'][value].score ? wap_tms.affinities[affinity]['values'][value].score + points : points;

	//Index top1 value
	if (wap_tms.affinities[affinity]['config']["wap_top1"]) {
		if (wap_tms.affinities[affinity]['values'][value].score > wap_tms.affinities[affinity]['values'][wap_tms.affinities[affinity]['config']["wap_top1"]].score) {
			wap_tms.affinities[affinity]['config']["wap_top1"] = value;
			wap_tms.affinities[affinity]['config']["wap_top1_entity_id"] = utag_data["wa_page_name"];
		} else if (wap_tms.affinities[affinity]['config']["wap_top1"] === value) {
			wap_tms.affinities[affinity]['config']["wap_top1_entity_id"] = utag_data["wa_page_name"];
		}
	} else {
		wap_tms.affinities[affinity]['config']["wap_top1"] = value;
		wap_tms.affinities[affinity]['config']["wap_top1_entity_id"] = utag_data["wa_page_name"];
	}
};

wap_tms.custom.newSession = function () {
	var res = false;
	if (tmsGetCookie("wap_new_session") == null) {
		res = true;
	}
	var date = new Date();
	date.setTime(date.getTime() + (1800 * 1000));
	var expires = "; expires=" + date.toGMTString();
	document.cookie = 'wap_new_session=1;path=/;domain=' + tms_domain + expires;
	return res;
}

wap_tms.custom.loadStoredAffinities = function () {
	wap_tms.affinities = {};
	wap_tms.firstVisitPage = wap_tms.custom.newSession();
	var storedAffinity = localStorage.getItem("wap_affinities");
	if (storedAffinity) {
		wap_tms.affinities = JSON.parse(storedAffinity);
		if (wap_tms.firstVisitPage) {
			for (var key in wap_tms.affinities) {
				wap_tms.affinities[key]['config'].seen = false;
			}
		}
	}
}

wap_tms.custom.affinityPageParams = function () {
	var affinities = ['content_audience', 'content_sub_audience', 'content_org_initiative', 'content_sub_org_initiative',
		'wa_intel_platform', 'wa_system_type', 'wa_target_audience', 'wa_software', 'wa_intel_technology', 'shop_formFactor',
		'wa_topic'];

	var added;
	for (var key in affinities) {
		var val = utag_data[affinities[key]];

		if (typeof val !== 'undefined' && val !== '' && val !== 'unassigned' && val !== 'none') {
			var newVal = val.split(/[:,]+/);
			newVal = newVal.filter(function (elem, index, self) {
					return index === self.indexOf(elem);
				})
				added = false;
			for (i = 0; i < newVal.length; i++) {
				if (newVal[i] !== 'all' && newVal[i] !== 'all-audiences') {
					wap_tms.custom.setAffinity(affinities[key], newVal[i]);
					added = true;
				}
			}
			if (added) {
				wap_tms.affinities[affinities[key]]['config'].seen = true;
			}
		}

	}

	wap_tms.custom.target_profile = {};
	aa_payload.list['2,page'] = "";

	for (var key in wap_tms.affinities) {
		wap_tms.custom.target_profile[key + '_affinity'] = wap_tms.affinities[key]['config'].wap_top1;
		wap_tms.custom.target_profile[key + '_affinity_id'] = wap_tms.affinities[key]['config'].wap_top1_entity_id;
		wap_tms.custom.target_profile[key + '_affinity_score'] = wap_tms.affinities[key]['values'][wap_tms.affinities[key]['config'].wap_top1].score;
		utag_data['affinity_' + key] = wap_tms.affinities[key]['config'].wap_top1;
		if(wap_tms.affinities[key]['values'][wap_tms.affinities[key]['config'].wap_top1].score >= 15){
			aa_payload.list['2,page'] = aa_payload.list['2,page'] + key + ":" + wap_tms.affinities[key]['config'].wap_top1 + ",";
		}                                            

	}
	aa_payload.list['2,page'] = aa_payload.list['2,page'].slice(0, -1);

	localStorage.setItem("wap_affinities", JSON.stringify(wap_tms.affinities));
}
wap_tms.custom.loadStoredAffinities();
//If user is not moving across domains
if (typeof wap_tms.custom.affinitiesSet === "undefined" && !wap_tms.custom.crossdomain_move) {
	wap_tms.custom.affinityPageParams();
	wap_tms.custom.affinitiesSet = true;
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.url'].toString().indexOf('software.intel.com/en-us/ai-academy')>-1||b['dom.url'].toString().indexOf('software.intel.com/en-us/iot')>-1){b['load_clicktale']='true'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['wa_local'].toString().indexOf('-en')>-1){b['load_idio']='true'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/((downloadcenter|communities|compatibleproducts|ark-care|processormatch|realsenseapp|registrationcenter|security-center|supporttickets)(\.intel\.com))|((\/buy\/us\/en\/product\/)((desktop\/|laptops\/)))|(\/content\/www\/(ca|in|za|uk|us)\/en\/support)|(ark\.intel\.com\/(compare|search))|(altera\.com\/support)/.test(b['dom.url'])){b['load_idio']='false'} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.url'].toString().indexOf('software.intel.com')>-1){b['load_clicktale']='true'} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"alr":1,"bwq":0,"id":"30","blr":0,"end":0},{"alr":1,"bwq":0,"id":"31","blr":0,"end":0},{"alr":1,"bwq":0,"id":"39","blr":0,"end":0},{"alr":1,"bwq":0,"id":"40","blr":0,"end":0},{"alr":1,"bwq":0,"id":"41","blr":0,"end":0},{"alr":1,"bwq":0,"id":"42","blr":0,"end":0},{"alr":1,"bwq":0,"id":"43","blr":0,"end":0},{"alr":1,"bwq":0,"id":"44","blr":0,"end":0},{"alr":1,"bwq":0,"id":"45","blr":0,"end":0},{"alr":1,"bwq":0,"id":"46","blr":0,"end":0},{"alr":1,"bwq":0,"id":"47","blr":0,"end":0},{"alr":1,"bwq":0,"id":"48","blr":0,"end":0},{"alr":1,"bwq":0,"id":"52","blr":0,"end":0},{"alr":1,"bwq":0,"id":"54","blr":0,"end":0},{"alr":1,"bwq":0,"id":"55","blr":0,"end":0},{"alr":1,"bwq":0,"id":"56","blr":0,"end":0},{"alr":1,"bwq":0,"id":"57","blr":0,"end":0},{"alr":1,"bwq":0,"id":"58","blr":0,"end":0},{"alr":1,"bwq":0,"id":"59","blr":0,"end":0},{"alr":1,"bwq":0,"id":"60","blr":0,"end":0},{"alr":1,"bwq":0,"id":"61","blr":0,"end":0},{"alr":1,"bwq":0,"id":"62","blr":0,"end":0},{"alr":1,"bwq":0,"id":"63","blr":0,"end":0},{"alr":1,"bwq":0,"id":"64","blr":0,"end":0},{"alr":1,"bwq":0,"id":"65","blr":0,"end":0},{"alr":1,"bwq":0,"id":"72","blr":0,"end":0},{"alr":1,"bwq":0,"id":"84","blr":0,"end":0},{"alr":1,"bwq":0,"id":"93","blr":0,"end":0},{"alr":1,"bwq":0,"id":"131","blr":0,"end":0},{"alr":1,"bwq":0,"id":"133","blr":0,"end":0},{"alr":1,"bwq":0,"id":"70","blr":0,"end":0},{"alr":1,"bwq":0,"id":"134","blr":0,"end":0},{"alr":1,"bwq":0,"id":"96","blr":0,"end":0},{"alr":1,"bwq":0,"id":"97","blr":0,"end":0},{"alr":1,"bwq":0,"id":"98","blr":0,"end":0},{"alr":1,"bwq":0,"id":"99","blr":0,"end":0},{"alr":1,"bwq":0,"id":"100","blr":0,"end":0},{"alr":1,"bwq":0,"id":"101","blr":0,"end":0},{"alr":1,"bwq":0,"id":"102","blr":0,"end":0},{"alr":1,"bwq":0,"id":"103","blr":0,"end":0},{"alr":1,"bwq":0,"id":"104","blr":0,"end":0},{"alr":1,"bwq":0,"id":"105","blr":0,"end":0},{"alr":1,"bwq":0,"id":"106","blr":0,"end":0},{"alr":1,"bwq":0,"id":"107","blr":0,"end":0},{"alr":1,"bwq":0,"id":"108","blr":0,"end":0},{"alr":1,"bwq":0,"id":"109","blr":0,"end":0},{"alr":1,"bwq":0,"id":"112","blr":0,"end":0},{"alr":1,"bwq":0,"id":"113","blr":0,"end":0},{"alr":1,"bwq":0,"id":"114","blr":0,"end":0},{"alr":1,"bwq":0,"id":"115","blr":0,"end":0},{"alr":1,"bwq":0,"id":"116","blr":0,"end":0},{"alr":1,"bwq":0,"id":"121","blr":0,"end":0},{"alr":1,"bwq":0,"id":"122","blr":0,"end":0},{"alr":1,"bwq":0,"id":"123","blr":0,"end":0},{"alr":1,"bwq":0,"id":"124","blr":0,"end":0},{"alr":1,"bwq":0,"id":"125","blr":0,"end":0},{"alr":0,"bwq":0,"id":"129","blr":1,"end":0},{"alr":1,"bwq":0,"id":"130","blr":0,"end":0},{"alr":1,"bwq":0,"id":"135","blr":0,"end":0},{"alr":1,"bwq":0,"id":"136","blr":0,"end":0},{"alr":1,"bwq":0,"id":"143","blr":0,"end":0},{"alr":1,"bwq":0,"id":"144","blr":0,"end":0},{"alr":1,"bwq":0,"id":"145","blr":0,"end":0}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"68":{load:4,send:1,v:201802052211,wait:0,tid:1191},"114":{load:4,send:1,v:201802132029,wait:0,tid:20010},"127":{load:4,send:1,v:201801112153,wait:0,tid:7110},"128":{load:4,send:1,v:201802052211,wait:0,tid:19063},"18":{load:utag.cond[37],send:1,v:201603031531,wait:1,tid:20010},"137":{load:utag.cond[76],send:1,v:201703211701,wait:1,tid:8009},"38":{load:utag.cond[43],send:1,v:201607191852,wait:1,tid:8009},"131":{load:utag.cond[72],send:1,v:201702232047,wait:1,tid:8009},"41":{load:utag.cond[44],send:1,v:201607191852,wait:1,tid:8009},"42":{load:utag.cond[46],send:1,v:201607191852,wait:1,tid:8009},"43":{load:utag.cond[48],send:1,v:201610312115,wait:1,tid:8009},"44":{load:utag.cond[49],send:1,v:201611022051,wait:1,tid:8009},"155":{load:utag.cond[97],send:1,v:201707192020,wait:1,tid:8009},"46":{load:utag.cond[52],send:1,v:201611281830,wait:1,tid:8009},"47":{load:utag.cond[51],send:1,v:201611281830,wait:1,tid:8009},"134":{load:utag.cond[74],send:1,v:201703101612,wait:1,tid:20067},"135":{load:utag.cond[74],send:1,v:201703101612,wait:1,tid:20067},"90":{load:4,send:utag.cond[65],v:201612131734,wait:1,tid:20010},"129":{load:(utag.cond[59] && utag.cond[63]),send:1,v:201801112153,wait:1,tid:7122},"130":{load:utag.cond[62],send:0,v:201801112153,wait:1,tid:5001},"138":{load:utag.cond[77],send:1,v:201703212101,wait:1,tid:8009},"141":{load:utag.cond[54],send:1,v:201801260000,wait:1,tid:20010},"154":{load:utag.cond[79],send:1,v:201801112153,wait:1,tid:3117},"156":{load:utag.cond[81],send:1,v:201705011919,wait:1,tid:6031},"157":{load:utag.cond[82],send:1,v:201705011919,wait:1,tid:6031},"160":{load:utag.cond[83],send:1,v:201705011919,wait:1,tid:6031},"161":{load:utag.cond[84],send:1,v:201705011919,wait:1,tid:6031},"162":{load:utag.cond[85],send:1,v:201705011919,wait:1,tid:6031},"163":{load:utag.cond[86],send:1,v:201705011919,wait:1,tid:6031},"164":{load:utag.cond[87],send:1,v:201705011919,wait:1,tid:6031},"167":{load:utag.cond[89],send:1,v:201705102324,wait:1,tid:20067},"168":{load:utag.cond[90],send:1,v:201705102324,wait:1,tid:20067},"169":{load:utag.cond[91],send:1,v:201705102324,wait:1,tid:20067},"171":{load:utag.cond[89],send:1,v:201705121603,wait:1,tid:6026},"191":{load:utag.cond[92],send:1,v:201801112153,wait:1,tid:20010},"192":{load:utag.cond[93],send:1,v:201706142131,wait:1,tid:8009},"193":{load:utag.cond[96],send:1,v:201707122227,wait:1,tid:12047},"203":{load:utag.cond[106],send:1,v:201708220539,wait:1,tid:4001},"204":{load:utag.cond[107],send:1,v:201708220539,wait:1,tid:4001},"205":{load:utag.cond[108],send:1,v:201708220539,wait:1,tid:4001},"206":{load:utag.cond[109],send:1,v:201708220917,wait:1,tid:4001},"207":{load:utag.cond[110],send:1,v:201708220917,wait:1,tid:4001},"208":{load:utag.cond[111],send:1,v:201708220917,wait:1,tid:4001},"209":{load:utag.cond[112],send:1,v:201710040545,wait:1,tid:4001},"210":{load:utag.cond[113],send:1,v:201710040545,wait:1,tid:4001},"211":{load:utag.cond[114],send:1,v:201710130907,wait:1,tid:4001},"212":{load:utag.cond[115],send:1,v:201710130907,wait:1,tid:4001},"213":{load:utag.cond[116],send:1,v:201710130907,wait:1,tid:4001},"214":{load:utag.cond[117],send:1,v:201710130907,wait:1,tid:4001},"215":{load:utag.cond[118],send:1,v:201710130907,wait:1,tid:4001},"216":{load:utag.cond[119],send:1,v:201710130907,wait:1,tid:4001},"218":{load:utag.cond[120],send:1,v:201710230541,wait:1,tid:4001},"219":{load:utag.cond[121],send:1,v:201710230541,wait:1,tid:4001},"220":{load:utag.cond[122],send:1,v:201710230541,wait:1,tid:4001},"222":{load:utag.cond[123],send:1,v:201710230541,wait:1,tid:4001},"223":{load:utag.cond[124],send:1,v:201710230541,wait:1,tid:4001},"224":{load:utag.cond[125],send:1,v:201710230541,wait:1,tid:4001},"225":{load:utag.cond[126],send:1,v:201710230541,wait:1,tid:4001},"226":{load:utag.cond[127],send:1,v:201710230541,wait:1,tid:4001},"227":{load:utag.cond[128],send:1,v:201710240933,wait:1,tid:4001},"230":{load:utag.cond[129],send:1,v:201711291823,wait:1,tid:12047},"236":{load:utag.cond[130],send:1,v:201712070020,wait:1,tid:20067},"237":{load:utag.cond[131],send:1,v:201712070020,wait:1,tid:20067},"256":{load:utag.cond[132],send:1,v:201802052211,wait:1,tid:20010},"263":{load:utag.cond[133],send:1,v:201801112102,wait:1,tid:20067},"273":{load:4,send:utag.cond[136],v:201802132029,wait:1,tid:20010},"274":{load:utag.cond[135],send:1,v:201801292342,wait:1,tid:20067},"284":{load:1,send:1,v:201802132029,wait:1,tid:20010}};
utag.loader.cfgsort=["68","114","127","128","18","137","38","131","41","42","43","44","155","46","47","134","135","90","129","130","138","141","154","156","157","160","161","162","163","164","167","168","169","171","191","192","193","203","204","205","206","207","208","209","210","211","212","213","214","215","216","218","219","220","222","223","224","225","226","227","230","236","237","256","263","273","274","284"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // FUTURE: blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR(utag.data);
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].block == 1 || (a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!=''))){
        a[b].block = 1;
        c=1;
        this.bq[b]=1;
      }
    }
    if(c==1) {
      for (b in this.GV(a)) {
        if(a[b].block){
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id=b; 
          if(a[b].load==4)a[b].load=1; 
 	  a[b].cb=function(){
            var d=this.uid;
            utag.loader.cfg[d].cbf=1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr"); 

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      // s2s (ServerStream) tags do not load client-side
      if(b.block != 1 && b.s2s != 1){
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait||utag.cfg.noview) && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        }else if (b.wait == 1 && utag.loader.rf == 0) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}


//Configure
utag_data.visitor_auth_state = 1;
utag_data.visitor_auth_state_2 = 1;
wap_tms.amc = {}; //object used to configure Adobe Marketing Cloud (AMC)
var cookieDomain = tmsSetCookieDomain();

!function e(t,i,n){function r(s,o){if(!i[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return r(i||e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,i){(function(i){/** @license ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

Adobe Visitor API for JavaScript version: 3.0.0
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
*/
var n=e("./child/ChildVisitor"),r=e("./child/Message"),a=e("./child/makeChildMessageListener"),s=e("./utils/asyncParallelApply"),o=e("./utils/enums"),l=e("./utils/utils"),u=e("./utils/getDomain"),d=e("./units/version"),c=e("./units/crossDomain"),f=e("@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID"),g=e("./units/makeCorsRequest"),p=e("./units/makeDestinationPublishing"),m=e("./utils/constants"),_=function(e,t,n){function _(e){var t=e;return function(e){var i=e||M.location.href;try{var n=S._extractParamFromUri(i,t);if(n)return F.parsePipeDelimetedKeyValues(n)}catch(e){}}}function h(e){function t(e,t){e&&e.match(m.VALID_VISITOR_ID_REGEX)&&t(e)}t(e[b],S.setMarketingCloudVisitorID),S._setFieldExpire(L,-1),t(e[E],S.setAnalyticsVisitorID)}function C(e){e=e||{},S._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",S._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},S._supplementalDataIDLast=e.supplementalDataIDLast||"",S._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function D(e){function t(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)}function i(e,i){var n=i[0],r=i[1];return null!=r&&r!==w&&(e=t(n,r,e)),e}var n=e.reduce(i,"");return function(e){var t=F.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(n)}function I(e){var t=e.minutesToLive,i="";return(S.idSyncDisableSyncs||S.disableIdSyncs)&&(i=i||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(i=i||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(i=i||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(i=i||"Error: config.minutesToLive needs to be a positive number")),{error:i,ttl:t}}if(!n||n.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var S=this;S.version="3.0.0";var M=i,A=M.Visitor;A.version=S.version,A.AuthState=o.AUTH_STATE,A.OptOut=o.OPT_OUT,M.s_c_in||(M.s_c_il=[],M.s_c_in=0),S._c="Visitor",S._il=M.s_c_il,S._in=M.s_c_in,S._il[S._in]=S,M.s_c_in++,S._log={requests:[]},S.marketingCloudOrgID=e,S.cookieName="AMCV_"+e,S.sessionCookieName="AMCVS_"+e,S.cookieDomain=u(),S.cookieDomain===M.location.hostname&&(S.cookieDomain=""),S.loadSSL=M.location.protocol.toLowerCase().indexOf("https")>=0,S.loadTimeout=3e4,S.CORSErrors=[],S.marketingCloudServer=S.audienceManagerServer="dpm.demdex.net",S.sdidParamExpiry=30;var v=M.document,y=null,b="MCMID",O="MCIDTS",T="A",E="MCAID",k="AAM",L="MCAAMB",w="NONE",P=function(e){return!Object.prototype[e]},R=g(S,V);S.FIELDS=o.FIELDS,S.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+v.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1);return i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n))},S.cookieWrite=function(e,t,i){var n,r=S.cookieLifetime;if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r||0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var a=i.getYear();i.setYear(a+2+(a<1900?1900:0))}}else i=0;return e&&"NONE"!==r?(v.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(S.cookieDomain?" domain="+S.cookieDomain+";":""),S.cookieRead(e)===t):0},S.resetState=function(e){e?S._mergeServerState(e):C()},S._isAllowedDone=!1,S._isAllowedFlag=!1,S.isAllowed=function(){return S._isAllowedDone||(S._isAllowedDone=!0,(S.cookieRead(S.cookieName)||S.cookieWrite(S.cookieName,"T",1))&&(S._isAllowedFlag=!0)),S._isAllowedFlag},S.setMarketingCloudVisitorID=function(e){S._setMarketingCloudFields(e)},S._use1stPartyMarketingCloudServer=!1,S.getMarketingCloudVisitorID=function(e,t){if(S.isAllowed()){S.marketingCloudServer&&S.marketingCloudServer.indexOf(".demdex.net")<0&&(S._use1stPartyMarketingCloudServer=!0);var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField(b,n,e,t,i)}return""},S.getVisitorValues=function(e,t){var i={MCMID:{fn:S.getMarketingCloudVisitorID,args:[!0],context:S},MCOPTOUT:{fn:S.isOptedOut,args:[void 0,!0],context:S},MCAID:{fn:S.getAnalyticsVisitorID,args:[!0],context:S},MCAAMLH:{fn:S.getAudienceManagerLocationHint,args:[!0],context:S},MCAAMB:{fn:S.getAudienceManagerBlob,args:[!0],context:S}},n=t&&t.length?F.pluck(i,t):i;s(n,e)},S._currentCustomerIDs={},S._customerIDsHashChanged=!1,S._newCustomerIDsHash="",S.setCustomerIDs=function(e){function t(){S._customerIDsHashChanged=!1}if(S.isAllowed()&&e){S._readVisitor();var i,n;for(i in e)if(P(i)&&(n=e[i]))if("object"==typeof n){var r={};n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),S._currentCustomerIDs[i]=r}else S._currentCustomerIDs[i]={id:n};var a=S.getCustomerIDs(),s=S._getField("MCCIDH"),o="";s||(s=0);for(i in a)P(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""));S._newCustomerIDsHash=S._hash(o),S._newCustomerIDsHash!==s&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(t))}},S.getCustomerIDs=function(){S._readVisitor();var e,t,i={};for(e in S._currentCustomerIDs)P(e)&&(t=S._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=A.AuthState.UNKNOWN);return i},S.setAnalyticsVisitorID=function(e){S._setAnalyticsFields(e)},S.getAnalyticsVisitorID=function(e,t,i){if(!F.isTrackingServerPopulated()&&!i)return S._callCallback(e,[""]),"";if(S.isAllowed()){var n="";if(i||(n=S.getMarketingCloudVisitorID(function(t){S.getAnalyticsVisitorID(e,!0)})),n||i){var r=i?S.marketingCloudServer:S.trackingServer,a="";S.loadSSL&&(i?S.marketingCloudServerSecure&&(r=S.marketingCloudServerSecure):S.trackingServerSecure&&(r=S.trackingServerSecure));var s={};if(r){var o="http"+(S.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+S.version+"&mcorgid="+encodeURIComponent(S.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":""),u=["s_c_il",S._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];a=o+"?"+l+"&callback=s_c_il%5B"+S._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=u}return s.url=a,S._getRemoteField(i?b:E,a,e,t,s)}}return""},S.getAudienceManagerLocationHint=function(e,t){if(S.isAllowed()){if(S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})){var i=S._getField(E);if(!i&&F.isTrackingServerPopulated()&&(i=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})),i||!F.isTrackingServerPopulated()){var n=S._getAudienceManagerURLData(),r=n.url;return S._getRemoteField("MCAAMLH",r,e,t,n)}}}return""},S.getLocationHint=S.getAudienceManagerLocationHint,S.getAudienceManagerBlob=function(e,t){if(S.isAllowed()){if(S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})){var i=S._getField(E);if(!i&&F.isTrackingServerPopulated()&&(i=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})),i||!F.isTrackingServerPopulated()){var n=S._getAudienceManagerURLData(),r=n.url;return S._customerIDsHashChanged&&S._setFieldExpire(L,-1),S._getRemoteField(L,r,e,t,n)}}}return""},S._supplementalDataIDCurrent="",S._supplementalDataIDCurrentConsumed={},S._supplementalDataIDLast="",S._supplementalDataIDLastConsumed={},S.getSupplementalDataID=function(e,t){S._supplementalDataIDCurrent||t||(S._supplementalDataIDCurrent=S._generateID(1));var i=S._supplementalDataIDCurrent;return S._supplementalDataIDLast&&!S._supplementalDataIDLastConsumed[e]?(i=S._supplementalDataIDLast,S._supplementalDataIDLastConsumed[e]=!0):i&&(S._supplementalDataIDCurrentConsumed[e]&&(S._supplementalDataIDLast=S._supplementalDataIDCurrent,S._supplementalDataIDLastConsumed=S._supplementalDataIDCurrentConsumed,S._supplementalDataIDCurrent=i=t?"":S._generateID(1),S._supplementalDataIDCurrentConsumed={}),i&&(S._supplementalDataIDCurrentConsumed[e]=!0)),i},S.getOptOut=function(e,t){if(S.isAllowed()){var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField("MCOPTOUT",n,e,t,i)}return""},S.isOptedOut=function(e,t,i){if(S.isAllowed()){t||(t=A.OptOut.GLOBAL);var n=S.getOptOut(function(i){var n=i===A.OptOut.GLOBAL||i.indexOf(t)>=0;S._callCallback(e,[n])},i);return n?n===A.OptOut.GLOBAL||n.indexOf(t)>=0:null}return!1},S._fields=null,S._fieldsExpired=null,S._hash=function(e){var t,i,n=0;if(e)for(t=0;t<e.length;t++)i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n;return n},S._generateID=f,S._generateLocalMID=function(){var e=S._generateID(0);return N.isClientSideMarketingCloudVisitorID=!0,e},S._callbackList=null,S._callCallback=function(e,t){try{"function"==typeof e?e.apply(M,t):e[1].apply(e[0],t)}catch(e){}},S._registerCallback=function(e,t){t&&(null==S._callbackList&&(S._callbackList={}),void 0==S._callbackList[e]&&(S._callbackList[e]=[]),S._callbackList[e].push(t))},S._callAllCallbacks=function(e,t){if(null!=S._callbackList){var i=S._callbackList[e];if(i)for(;i.length>0;)S._callCallback(i.shift(),t)}},S._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=F.parseHash(e),s=F.hashlessUrl(e);if(-1===s.indexOf("?"))return s+"?"+r+a;var o=s.split("?"),l=o[0]+"?",u=o[1];return l+F.addQueryParamAtLocation(u,r,n)+a},S._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);if(n&&n.length)return decodeURIComponent(n[1])},S._parseAdobeMcFromUrl=_(m.ADOBE_MC),S._parseAdobeMcSdidFromUrl=_(m.ADOBE_MC_SDID),S._attemptToPopulateSdidFromUrl=function(t){var i=S._parseAdobeMcSdidFromUrl(t),n=1e9;i&&i.TS&&(n=F.getTimestampInSeconds()-i.TS),i&&i.SDID&&i.MCORGID===e&&n<S.sdidParamExpiry&&(S._supplementalDataIDCurrent=i.SDID,S._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},S._attemptToPopulateIdsFromUrl=function(){var t=S._parseAdobeMcFromUrl();if(t&&t.TS){var i=F.getTimestampInSeconds(),n=i-t.TS;if(Math.floor(n/60)>m.ADOBE_MC_TTL_IN_MIN||t.MCORGID!==e)return;h(t)}},S._mergeServerState=function(e){if(e)try{if(e=function(e){return F.isObject(e)?e:JSON.parse(e)}(e),e[S.marketingCloudOrgID]){var t=e[S.marketingCloudOrgID];!function(e){F.isObject(e)&&S.setCustomerIDs(e)}(t.customerIDs),C(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},S._timeout=null,S._loadData=function(e,t,i,n){t=S._addQuerystringParam(t,"d_fieldgroup",e,1),n.url=S._addQuerystringParam(n.url,"d_fieldgroup",e,1),n.corsUrl=S._addQuerystringParam(n.corsUrl,"d_fieldgroup",e,1),N.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===R.corsMetadata.corsType&&R.fireCORS(n,i,e)},S._clearTimeout=function(e){null!=S._timeout&&S._timeout[e]&&(clearTimeout(S._timeout[e]),S._timeout[e]=0)},S._settingsDigest=0,S._getSettingsDigest=function(){if(!S._settingsDigest){var e=S.version;S.audienceManagerServer&&(e+="|"+S.audienceManagerServer),S.audienceManagerServerSecure&&(e+="|"+S.audienceManagerServerSecure),S._settingsDigest=S._hash(e)}return S._settingsDigest},S._readVisitorDone=!1,S._readVisitor=function(){if(!S._readVisitorDone){S._readVisitorDone=!0;var e,t,i,n,r,a,s=S._getSettingsDigest(),o=!1,l=S.cookieRead(S.cookieName),u=new Date;if(null==S._fields&&(S._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2==1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&("MCCIDH"===i&&(n=""),r>0&&(r=u.getTime()/1e3-60)),i&&n&&(S._setField(i,n,1),r>0&&(S._fields["expire"+i]=r+(a?"s":""),(u.getTime()>=1e3*r||a&&!S.cookieRead(S.sessionCookieName))&&(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[i]=!0)));!S._getField(E)&&F.isTrackingServerPopulated()&&(l=S.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(m.VALID_VISITOR_ID_REGEX)&&S._setField(E,n)))}},S._appendVersionTo=function(e){var t="vVersion|"+S.version,i=e?S._getCookieVersion(e):null;return i?d.areVersionsDifferent(i,S.version)&&(e=e.replace(m.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},S._writeVisitor=function(){var e,t,i=S._getSettingsDigest();for(e in S._fields)P(e)&&S._fields[e]&&"expire"!==e.substring(0,6)&&(t=S._fields[e],i+=(i?"|":"")+e+(S._fields["expire"+e]?"-"+S._fields["expire"+e]:"")+"|"+t);i=S._appendVersionTo(i),S.cookieWrite(S.cookieName,i,1)},S._getField=function(e,t){return null==S._fields||!t&&S._fieldsExpired&&S._fieldsExpired[e]?null:S._fields[e]},S._setField=function(e,t,i){null==S._fields&&(S._fields={}),S._fields[e]=t,i||S._writeVisitor()},S._getFieldList=function(e,t){var i=S._getField(e,t);return i?i.split("*"):null},S._setFieldList=function(e,t,i){S._setField(e,t?t.join("*"):"",i)},S._getFieldMap=function(e,t){var i=S._getFieldList(e,t);if(i){var n,r={};for(n=0;n<i.length;n+=2)r[i[n]]=i[n+1];return r}return null},S._setFieldMap=function(e,t,i){var n,r=null;if(t){r=[];for(n in t)P(n)&&(r.push(n),r.push(t[n]))}S._setFieldList(e,r,i)},S._setFieldExpire=function(e,t,i){var n=new Date;n.setTime(n.getTime()+1e3*t),null==S._fields&&(S._fields={}),S._fields["expire"+e]=Math.floor(n.getTime()/1e3)+(i?"s":""),t<0?(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[e]=!0):S._fieldsExpired&&(S._fieldsExpired[e]=!1),i&&(S.cookieRead(S.sessionCookieName)||S.cookieWrite(S.sessionCookieName,"1"))},S._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&"NOTARGET"===(e=e.toUpperCase())&&(e=w),e&&(e===w||e.match(m.VALID_VISITOR_ID_REGEX))||(e="")),e},S._setFields=function(e,t){if(S._clearTimeout(e),null!=S._loading&&(S._loading[e]=!1),N.fieldGroupObj[e]&&N.setState(e,!1),"MC"===e){!0!==N.isClientSideMarketingCloudVisitorID&&(N.isClientSideMarketingCloudVisitorID=!1);var i=S._getField(b);if(!i||S.overwriteCrossDomainMCIDAndAID){if(!(i="object"==typeof t&&t.mid?t.mid:S._findVisitorID(t))){if(S._use1stPartyMarketingCloudServer&&!S.tried1stPartyMarketingCloudServer)return S.tried1stPartyMarketingCloudServer=!0,void S.getAnalyticsVisitorID(null,!1,!0);i=S._generateLocalMID()}S._setField(b,i)}i&&i!==w||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&S._setFields(k,t),S._use1stPartyMarketingCloudServer&&t.mid&&S._setFields(T,{id:t.id})),S._callAllCallbacks(b,[i])}if(e===k&&"object"==typeof t){var n=604800;void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));var r=x.getRegionAndCheckIfChanged(t,n);S._callAllCallbacks("MCAAMLH",[r]);var a=S._getField(L);(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),S._setFieldExpire(L,n),S._setField(L,a)),a||(a=""),S._callAllCallbacks(L,[a]),!t.error_msg&&S._newCustomerIDsHash&&S._setField("MCCIDH",S._newCustomerIDsHash)}if(e===T){var s=S._getField(E);s&&!S.overwriteCrossDomainMCIDAndAID||(s=S._findVisitorID(t),s?s!==w&&S._setFieldExpire(L,-1):s=w,S._setField(E,s)),s&&s!==w||(s=""),S._callAllCallbacks(E,[s])}if(S.idSyncDisableSyncs||S.disableIdSyncs)x.idCallNotProcesssed=!0;else{x.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,x.processIDCallData(o)}if(t===Object(t)){var l,u;S.isAllowed()&&(l=S._getField("MCOPTOUT")),l||(l=w,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),u=parseInt(t.d_ottl,10),isNaN(u)&&(u=7200),S._setFieldExpire("MCOPTOUT",u,!0),S._setField("MCOPTOUT",l)),S._callAllCallbacks("MCOPTOUT",[l])}},S._loading=null,S._getRemoteField=function(e,t,i,n,r){var a,s="",o=F.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(S.isAllowed()){S._readVisitor(),s=S._getField(e,!0===l[e]);if(function(){return(!s||S._fieldsExpired&&S._fieldsExpired[e])&&(!S.disableThirdPartyCalls||o)}()){if(e===b||"MCOPTOUT"===e?a="MC":"MCAAMLH"===e||e===L?a=k:e===E&&(a=T),a)return!t||null!=S._loading&&S._loading[a]||(null==S._loading&&(S._loading={}),S._loading[a]=!0,S._loadData(a,t,function(t){if(!S._getField(e)){t&&N.setState(a,!0);var i="";e===b?i=S._generateLocalMID():a===k&&(i={error_msg:"timeout"}),S._setFields(a,i)}},r)),S._registerCallback(e,i),s||(t||S._setFields(a,{id:w}),"")}else s||(e===b?(S._registerCallback(e,i),s=S._generateLocalMID(),S.setMarketingCloudVisitorID(s)):e===E?(S._registerCallback(e,i),s="",S.setAnalyticsVisitorID(s)):(s="",n=!0))}return e!==b&&e!==E||s!==w||(s="",n=!0),i&&n&&S._callCallback(i,[s]),s},S._setMarketingCloudFields=function(e){S._readVisitor(),S._setFields("MC",e)},S._mapCustomerIDs=function(e){S.getAudienceManagerBlob(e,!0)},S._setAnalyticsFields=function(e){S._readVisitor(),S._setFields(T,e)},S._setAudienceManagerFields=function(e){S._readVisitor(),S._setFields(k,e)},S._getAudienceManagerURLData=function(e){var t=S.audienceManagerServer,i="",n=S._getField(b),r=S._getField(L,!0),a=S._getField(E),s=a&&a!==w?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(S.loadSSL&&S.audienceManagerServerSecure&&(t=S.audienceManagerServerSecure),t){var o,l,u=S.getCustomerIDs();if(u)for(o in u)P(o)&&(l=u[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var d="http"+(S.loadSSL?"s":"")+"://"+t+"/id",c="d_visid_ver="+S.version+"&d_rtbd=json&d_ver=2"+(!n&&S._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(S.marketingCloudOrgID)+"&d_nsid="+(S.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===y?"&d_coop_safe=1":!1===y?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,f=["s_c_il",S._in,e];return i=d+"?"+c+"&d_cb=s_c_il%5B"+S._in+"%5D."+e,{url:i,corsUrl:d+"?"+c,callback:f}}return{url:i}},S.appendVisitorIDsTo=function(e){try{var t=[[b,S._getField(b)],[E,S._getField(E)],["MCORGID",S.marketingCloudOrgID]];return S._addQuerystringParam(e,m.ADOBE_MC,D(t))}catch(t){return e}},S.appendSupplementalDataIDTo=function(e,t){if(!(t=t||S.getSupplementalDataID(F.generateRandomString(),!0)))return e;try{var i=D([["SDID",t],["MCORGID",S.marketingCloudOrgID]]);return S._addQuerystringParam(e,m.ADOBE_MC_SDID,i)}catch(t){return e}};var F={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==E)return!1;var n;return t||(t=S.trackingServer),i||(i=S.trackingServerSecure),!("string"!=typeof(n=S.loadSSL?i:t)||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},isTrackingServerPopulated:function(){return!!S.trackingServer||!!S.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var i=t.split("=");return e[i[0]]=decodeURIComponent(i[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=i[Math.floor(Math.random()*i.length)];return t},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i]&&(e[i]=t);return e},pluck:function(e,t){return t.reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},Object.create(null))}};S._helpers=F;var x=p(S,A);S._destinationPublishing=x,S.timeoutMetricsLog=[];var V,N={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case"MC":!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case T:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case k:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};S.isClientSideMarketingCloudVisitorID=function(){return N.isClientSideMarketingCloudVisitorID},S.MCIDCallTimedOut=function(){return N.MCIDCallTimedOut},S.AnalyticsIDCallTimedOut=function(){return N.AnalyticsIDCallTimedOut},S.AAMIDCallTimedOut=function(){return N.AAMIDCallTimedOut},S.idSyncGetOnPageSyncInfo=function(){return S._readVisitor(),S._getField("MCSYNCSOP")},S.idSyncByURL=function(e){var t=I(e||{});if(t.error)return t.error;var i,n,r=e.url,a=encodeURIComponent,s=x;return r=r.replace(/^https:/,"").replace(/^http:/,""),i=l.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"},S.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,S.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},S._getCookieVersion=function(e){e=e||S.cookieRead(S.cookieName);var t=m.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},S._resetAmcvCookie=function(e){var t=S._getCookieVersion();t&&!d.isLessThan(t,e)||F.removeCookie(S.cookieName)},S.setAsCoopSafe=function(){y=!0},S.setAsCoopUnsafe=function(){y=!1},S.init=function(){!function(){if(t&&"object"==typeof t){S.configs=Object.create(null);for(var e in t)P(e)&&(S[e]=t[e],S.configs[e]=t[e]);S.idSyncContainerID=S.idSyncContainerID||0,y="boolean"==typeof S.isCoopSafe?S.isCoopSafe:F.parseBoolean(S.isCoopSafe),S.resetBeforeVersion&&S._resetAmcvCookie(S.resetBeforeVersion),S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl(),S._readVisitor();var i=S._getField(O),n=Math.ceil((new Date).getTime()/m.MILLIS_PER_DAY);S.idSyncDisableSyncs||S.disableIdSyncs||!x.canMakeSyncIDCall(i,n)||(S._setFieldExpire(L,-1),S._setField(O,n)),S.getMarketingCloudVisitorID(),S.getAudienceManagerLocationHint(),S.getAudienceManagerBlob(),S._mergeServerState(S.serverState)}else S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl()}(),function(){if(!S.idSyncDisableSyncs&&!S.disableIdSyncs){x.checkDPIframeSrc();var e=function(){var e=x;e.readyToAttachIframe()&&e.attachIframe()};M.addEventListener("load",function(){A.windowLoaded=!0,e()});try{c.receiveMessage(function(e){x.receiveMessage(e.data)},x.iframeHost)}catch(e){}}}(),function(){S.whitelistIframeDomains&&m.POST_MESSAGE_ENABLED&&(S.whitelistIframeDomains=S.whitelistIframeDomains instanceof Array?S.whitelistIframeDomains:[S.whitelistIframeDomains],S.whitelistIframeDomains.forEach(function(t){var i=new r(e,t),n=a(S,i);c.receiveMessage(n,t)}))}()}};_.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var r=function(){var t=i.s_c_il;if(t)for(var n=0;n<t.length;n++){var r=t[n];if(r&&"Visitor"===r._c&&r.marketingCloudOrgID===e)return r}}();if(r)return r;var a=e,s=a.split("").reverse().join(""),o=new _(e,null,s);!function(){i.s_c_il.splice(--i.s_c_in,1)}();var u=l.getIeVersion();if("number"==typeof u&&u<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var d=o.isAllowed(),c=function(){try{return i.self!==i.parent}catch(e){return!0}}()&&!d&&i.parent?new n(e,t,o,i.parent):new _(e,t,s);return o=null,c.init(),c},function(){function e(){_.windowLoaded=!0}i.addEventListener?i.addEventListener("load",e):i.attachEvent&&i.attachEvent("onload",e),_.codeLoadEnd=(new Date).getTime()}(),i.Visitor=_,t.exports=_}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./child/ChildVisitor":2,"./child/Message":3,"./child/makeChildMessageListener":4,"./units/crossDomain":8,"./units/makeCorsRequest":9,"./units/makeDestinationPublishing":10,"./units/version":11,"./utils/asyncParallelApply":12,"./utils/constants":14,"./utils/enums":15,"./utils/getDomain":16,"./utils/utils":18,"@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID":19}],2:[function(e,t,i){(function(i){e("../utils/polyfills");var n=e("./strategies/LocalVisitor"),r=e("./strategies/ProxyVisitor"),a=e("./strategies/PlaceholderVisitor"),s=e("../utils/callbackRegistryFactory"),o=e("./Message"),l=e("../utils/enums"),u=l.MESSAGES;t.exports=function(e,t,l,d){function c(e){Object.assign(I,e)}function f(e){Object.assign(I.state,e),I.callbackRegistry.executeAll(I.state)}function g(e){if(!A.isInvalid(e)){M=!1;var t=A.parse(e);I.setStateAndPublish(t.state)}}function p(e){!M&&S&&(M=!0,A.send(d,e))}function m(){c(new n(l._generateID)),I.getMarketingCloudVisitorID(),I.callbackRegistry.executeAll(I.state,!0),i.removeEventListener("message",_)}function _(e){if(!A.isInvalid(e)){var t=A.parse(e);M=!1,i.clearTimeout(this.timeout),i.removeEventListener("message",_),c(new r(I)),i.addEventListener("message",g),I.setStateAndPublish(t.state),I.callbackRegistry.hasCallbacks()&&p(u.GETSTATE)}}function h(){S&&postMessage?(i.addEventListener("message",_),p(u.HANDSHAKE),this.timeout=setTimeout(m,250)):m()}function C(){i.s_c_in||(i.s_c_il=[],i.s_c_in=0),I._c="Visitor",I._il=i.s_c_il,I._in=i.s_c_in,I._il[I._in]=I,i.s_c_in++}function D(){function e(e){0!==e.indexOf("_")&&"function"==typeof l[e]&&(I[e]=function(){})}Object.keys(l).forEach(e),I.getSupplementalDataID=l.getSupplementalDataID}var I=this,S=t.whitelistParentDomain;I.state={},I.version=l.version,I.marketingCloudOrgID=e;var M=!1,A=new o(e,S);I.callbackRegistry=s(),I.init=function(){C(),D(),c(new a(I)),h()},I.findField=function(e,t){if(I.state[e])return t(I.state[e]),I.state[e]},I.messageParent=p,I.setStateAndPublish=f}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/callbackRegistryFactory":13,"../utils/enums":15,"../utils/polyfills":17,"./Message":3,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7}],3:[function(e,t,i){var n=e("../utils/enums"),r=n.MESSAGES,a={0:"prefix",1:"orgID",2:"state"};t.exports=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,i){if(void 0!==e){t[a[i]]=2!==i?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(i){var n=this.parse(i);if(!n||Object.keys(n).length<2)return!0;var a=e!==n.orgID,s=!t||i.origin!==t,o=-1===Object.keys(r).indexOf(n.prefix);return a||s||o},this.send=function(i,n,r){var a=n+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{i.postMessage(a,t)}catch(e){}}}},{"../utils/enums":15}],4:[function(e,t,i){var n=e("../utils/enums"),r=e("../utils/utils"),a=n.MESSAGES,s=n.ALL_APIS,o=n.ASYNC_API_MAP,l=n.FIELDGROUP_TO_FIELD;t.exports=function(e,t){function i(){var t={};return Object.keys(s).forEach(function(i){var n=s[i],a=e[n]();r.isValueEmpty(a)||(t[i]=a)}),t}function n(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(i){if(e._loading[i]){var n=l[i];t.push(n)}}),t.length?t:null}function u(t){return function i(r){var a=n();if(a){var s=o[a[0]];e[s](i,!0)}else t()}}function d(e,n){var r=i();t.send(e,n,r)}function c(e){g(e),d(e,a.HANDSHAKE)}function f(e){u(function(){d(e,a.PARENTSTATE)})()}function g(i){function n(n){r.call(e,n),t.send(i,a.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=n}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===a.HANDSHAKE?c:f)(e.source)}}}},{"../utils/enums":15,"../utils/utils":18}],5:[function(e,t,i){var n=e("../../utils/enums"),r=n.STATE_KEYS_MAP;t.exports=function(e){function t(){}function i(t,i){var n=this;return function(){var t=e(0,r.MCMID),a={};return a[r.MCMID]=t,n.setStateAndPublish(a),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var n=this.findField(r.MCMID,e),a=i.call(this,r.MCMID,e);return void 0!==n?n:a()}}},{"../../utils/enums":15}],6:[function(e,t,i){var n=e("../../utils/enums"),r=n.ASYNC_API_MAP;t.exports=function(){Object.keys(r).forEach(function(e){this[r[e]]=function(t){this.callbackRegistry.add(e,t)}},this)}},{"../../utils/enums":15}],7:[function(e,t,i){var n=e("../../utils/enums"),r=n.MESSAGES,a=n.ASYNC_API_MAP,s=n.SYNC_API_MAP;t.exports=function(){function e(){}function t(e,t){var i=this;return function(){return i.callbackRegistry.add(e,t),i.messageParent(r.GETSTATE),""}}function i(i){this[a[i]]=function(n){n=n||e;var r=this.findField(i,n),a=t.call(this,i,n);return void 0!==r?r:a()}}function n(t){this[s[t]]=function(){return this.findField(t,e)||{}}}Object.keys(a).forEach(i,this),Object.keys(s).forEach(n,this)}},{"../../utils/enums":15}],8:[function(e,t,i){(function(e){var i=!!e.postMessage;t.exports={postMessage:function(e,t,n){var r=1;t&&(i?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+r+++"&"+e))},receiveMessage:function(t,n){var r;try{i&&(t&&(r=function(e){if("string"==typeof n&&e.origin!==n||"[object Function]"===Object.prototype.toString.call(n)&&!1===n(e.origin))return!1;t(e)}),e.addEventListener?e[t?"addEventListener":"removeEventListener"]("message",r):e[t?"attachEvent":"detachEvent"]("onmessage",r))}catch(e){}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,i){(function(e){t.exports=function(t,i){return{corsMetadata:function(){var t="none",i=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?t="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(i=!1),Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor")>0&&(i=!1)),{corsType:t,corsCookiesEnabled:i}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new e[this.corsMetadata.corsType]},fireCORS:function(i,n,r){function a(t){var n;try{if((n=JSON.parse(t))!==Object(n))return void s.handleCORSError(i,null,"Response is not JSON")}catch(e){return void s.handleCORSError(i,e,"Error parsing response as JSON")}try{for(var r=i.callback,a=e,o=0;o<r.length;o++)a=a[r[o]];a(n)}catch(e){s.handleCORSError(i,e,"Error forming callback function")}}var s=this;n&&(i.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",i.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=t.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&a(this.responseText)}),o.onerror=function(e){s.handleCORSError(i,e,"onerror")},o.ontimeout=function(e){s.handleCORSError(i,e,"ontimeout")},o.send(),t._log.requests.push(i.corsUrl)}catch(e){this.handleCORSError(i,e,"try-catch")}},handleCORSError:function(e,i,n){t.CORSErrors.push({corsData:e,error:i,description:n}),e.loadErrorHandler&&("ontimeout"===n?e.loadErrorHandler(!0):e.loadErrorHandler(!1))}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,i){(function(i){var n=e("../utils/constants"),r=e("./crossDomain"),a=e("../utils/utils");t.exports=function(e,t){var s=i.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",n="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(s.location.href);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=i+this.subdomain+".demdex.net/dest5.html"+n,this.iframeHost=this.getIframeHost(t),
this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(s.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:n.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return!e.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){n=s.createElement("iframe"),n.sandbox="allow-scripts allow-same-origin",n.title="Adobe ID Syncing iFrame",n.id=i.id,n.name=i.id+"_name",n.style.cssText="display: none; width: 0; height: 0;",n.src=i.url,i.newIframeCreated=!0,t(),s.body.appendChild(n)}function t(){n.addEventListener("load",function(){n.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,n=s.getElementById(this.id);n?"IFRAME"!==n.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==n.className?(this.originalIframeHasLoadedAlready=!1,t()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=n,this.requestToProcess())):e(),this.iframe=n},requestToProcess:function(t){function i(){a.jsonForComparison.push(t),a.jsonWaiting.push(t),a.processSyncOnPage(t)}var r,a=this;if(t===Object(t)&&t.ibs)if(r=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var s,o,l,u=!1;for(s=0,o=this.jsonForComparison.length;s<o;s++)if(l=this.jsonForComparison[s],r===JSON.stringify(l.ibs||[])){u=!0;break}u?this.jsonDuplicates.push(t):i()}else i();if((this.receivedThirdPartyCookiesNotification||!n.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var d=this.jsonWaiting.shift();this.process(d),this.requestToProcess()}!e.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){a.messageSendingInterval=n.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,i){var n=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return n?r&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",r),parseInt(n,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),n=r)):(n=r)&&(e._setFieldExpire("MCAAMLH",i),e._setField("MCAAMLH",n)),n||(n=""),n},processSyncOnPage:function(e){var t,i,n,r;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(n=0;n<i;n++)r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,i,n,r,s,o=encodeURIComponent,l=!1;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(l=!0,n=0;n<i;n++)r=t[n],s=[o("ibs"),o(r.id||""),o(r.tag||""),a.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(s.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,s.join("|")));l&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,i,r){var a="syncOnPage"===r,s=a?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,l,u=e._getField(s),d=!1,c=!1,f=Math.ceil((new Date).getTime()/n.MILLIS_PER_DAY);u?(o=u.split("*"),l=this.pruneSyncData(o,t.id,f),d=l.dataPresent,c=l.dataValid,d&&c||this.fireSync(a,t,i,o,s,f)):(o=[],this.fireSync(a,t,i,o,s,f))},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;for(r=0;r<e.length;r++)n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--);return{dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,i,n,r,a,s){var o=this;if(t){if("img"===i.tag){var l,u,d,c,f=i.url,g=e.loadSSL?"https:":"http:";for(l=0,u=f.length;l<u;l++){d=f[l],c=/^\/\//.test(d);var p=new Image;p.addEventListener("load",function(t,i,n,r){return function(){o.onPagePixels[t]=null,e._readVisitor();var s,l=e._getField(a),u=[];if(l){s=l.split("*");var d,c,f;for(d=0,c=s.length;d<c;d++)f=s[d],f.match("^"+i.id+"-")||u.push(f)}o.setSyncTrackingData(u,i,n,r)}}(this.onPagePixels.length,i,a,s)),p.src=(c?g:"")+d,this.onPagePixels.push(p)}}}else this.addMessage(n),this.setSyncTrackingData(r,i,a,s)},addMessage:function(t){var i=encodeURIComponent,r=i(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((n.POST_MESSAGE_ENABLED?"":r)+t)},setSyncTrackingData:function(t,i,n,r){t.push(i.id+"-"+(r+Math.ceil(i.ttl/60/24))),this.manageSyncsSize(t),e._setField(n,t.join("*"))},sendMessages:function(){var e,t=this,i="",r=encodeURIComponent;this.regionChanged&&(i=r("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?n.POST_MESSAGE_ENABLED?(e=i+r("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(i+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){r.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===s.readyState||"loaded"===s.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,i){return e._forceSyncIDCall||!t||i-t>n.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(s.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/constants":14,"../utils/utils":18,"./crossDomain":8}],11:[function(e,t,i){function n(e){for(var t=/^\d+$/,i=0,n=e.length;i<n;i++)if(!t.test(e[i]))return!1;return!0}function r(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function a(e,t){for(var i=0;i<e.length;i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);if(n>r)return 1;if(r>n)return-1}return 0}function s(e,t){if(e===t)return 0;var i=e.toString().split("."),s=t.toString().split(".");return n(i.concat(s))?(r(i,s),a(i,s)):NaN}t.exports={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}}},{}],12:[function(e,t,i){t.exports=function(e,t){function i(e){return function(i){n[e]=i,r++,r===a&&t(n)}}var n={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var n=e[t];if(n.fn){var r=n.args||[];r.unshift(i(t)),n.fn.apply(n.context||null,r)}})}},{}],13:[function(e,t,i){function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var i=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(i,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var i=this.callbacks[e].shift();"function"==typeof i?i.apply(null,t):i instanceof Array&&i[1].apply(i[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!r.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var i=void 0!==e[t]?e[t]:"";this.execute(t,i)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}var r=e("./utils");t.exports=n},{"./utils":18}],14:[function(e,t,i){(function(e){t.exports={POST_MESSAGE_ENABLED:!!e.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,i){i.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},i.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},i.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},i.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"},i.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},i.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},i.FIELDS={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},i.AUTH_STATE={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},i.OPT_OUT={GLOBAL:"global"}},{}],16:[function(e,t,i){(function(e){t.exports=function(t){var i;if(!t&&e.location&&(t=e.location.hostname),i=t)if(/^[0-9.]+$/.test(i))i="";else{var n=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",r=i.split("."),a=r.length-1,s=a-1;if(a>1&&r[a].length<=2&&(2===r[a-1].length||n.indexOf(","+r[a]+",")<0)&&s--,s>0)for(i="";a>=s;)i=r[a]+(i?".":"")+i,a--}return i}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,i){Object.assign=Object.assign||function(e){for(var t,i,n=1;n<arguments.length;++n){i=arguments[n];for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}},{}],18:[function(e,t,i){i.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},i.isValueEmpty=function(e){return""===e||i.isObjectEmpty(e)},i.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},i.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)}},{}],19:[function(e,t,i){t.exports=function(e){var t,i,n="0123456789",r="",a="",s=8,o=10,l=10;if(1==e){for(n+="ABCDEF",t=0;16>t;t++)i=Math.floor(Math.random()*s),r+=n.substring(i,i+1),i=Math.floor(Math.random()*s),a+=n.substring(i,i+1),s=16;return r+"-"+a}for(t=0;19>t;t++)i=Math.floor(Math.random()*o),r+=n.substring(i,i+1),0===t&&9==i?o=3:(1==t||2==t)&&10!=o&&2>i?o=10:2<t&&(o=10),i=Math.floor(Math.random()*l),a+=n.substring(i,i+1),0===t&&9==i?l=3:(1==t||2==t)&&10!=l&&2>i?l=10:2<t&&(l=10);return r+a}},{}]},{},[1]);

//tealium universal tag - utag.sender.1191 ut4.0.201802141549, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.41
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName == "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img") { utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    u.hasOwn = function(o, a) {
      return o != null && Object.prototype.hasOwnProperty.call(o, a);
    };
    u.isEmptyObject = function(o, a) {
      for (a in o) {
        if (u.hasOwn(o, a)) return false;
      }
      return true;
    };

    u.ev = {"view" : 1};
    u.initialized = false;

    u.map_func = function (arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.map_func(arr,obj[i], item);
      } else {
        obj[i] = item;
      }
    };

    u.clearEmptyKeys = function (object) {
      for (var key in object) {
        if (object[key] === "" || object[key] === undefined) {
          delete object[key];
        }
      }
      return object;
    };

      u.map={};
  u.extend=[];


    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:68");
        utag.DB(b);

        var c, d, e, f;

        u.data = {
          "adobe_org_id" : "AD2A1C8B53308E600A490D4D@AdobeOrg",
          "config"       : {
            "trackingServer"             : "www90.intel.com",
            "trackingServerSecure"       : "www91.intel.com",
            "marketingCloudServer"       : "www90.intel.com",
            "marketingCloudServerSecure" : "www91.intel.com",
	    "idSyncAttachIframeOnWindowLoad": true,
            "cookieDomain":cookieDomain,
            "loadTimeout":15000
          }
        };

        // Start tag-scoped extensions
        
        utag.DB("send:68:EXTENSIONS");
        utag.DB(b);
        // End tag-scoped extensions

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.map_func(e[f].split("."), u.data, b[d]);
            }
          }
        }
        utag.DB("send:68:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        // Report required config is missing, and stop tag from firing.
        if (!u.data.adobe_org_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated [adobe_org_id]");
          return;
        }

        /*if (!u.initialized) {
          u.inialised = !0;
          u.visitor = Visitor.getInstance(u.data.adobe_org_id, u.clearEmptyKeys(u.data.config));
        }

        u.data.customer_ids = u.clearEmptyKeys(u.data.customer_ids);
        if (!u.isEmptyObject(u.data.customer_ids)){
          u.visitor.setCustomerIDs(u.data.customer_ids);
        }*/			
        utag.DB("send:68:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("68", "intel.profile-ssg.intel"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */

//init obj
wap_tms.target = {}; //use to populate w/ mbox profile params
wap_tms.target_page = {}; //use to populate w/ mbox page params
wap_tms.target_entity = {}; //use to populate w/ mbox entity params (Recommendations)
//set mbox path URL
wap_tms.cb = (utag.cfg.v !== undefined) ? '?cb=' + utag.cfg.v : ''; //do we need cache buster? removed 4/22/16, may add back later
wap_tms.target_mbox_val = 'mbox.js';
wap_tms.target_version = '2.6'; //Tealium Target custom code version. Update each time we make updates to this tag.
wap_tms.dcp = {}; //used for DCP configuration
wap_tms.target_mbox = function() { //configure version of mbox to load
    var mbox = '';
    //mbox = (('https:' == document.location.protocol) ? 'https://www-ssl' : 'http://www') + '.intel.com/content/dam/www/global/wap/' + wap_tms.target_mbox_val;
	mbox = (('https:' == document.location.protocol) ? 'https' : 'http') + '://www.intel.com/content/dam/www/global/wap/' + wap_tms.target_mbox_val;
    mbox = ((utag_data.wa_section == "intc") ? '/content/dam/www/global/wap/' + wap_tms.target_mbox_val : mbox); //if on CQ platform call as relative URL
    return mbox;
};

function targetPageParams() {
  var atJson = {},
  profile = wap_tms.target,
  page = wap_tms.target_page,
  entity = wap_tms.target_entity,
  val = '',
  categoryId = [];
  atJson.entity = {};
  //atJson.profile = {};
  atJson.profile = wap_tms.custom.target_profile || {};
  atJson.user = {}; 
  if(wap_tms.custom.crossdomain_move){
	  page.datasync = 'true';
  } 
  
  //Set Target Page, Profile and Entity params configured in Tealium Target extension
  if (typeof page !== "undefined") {
    for (var i in page) {
      if (page.hasOwnProperty(i)) {
        atJson[i] = page[i];
      }
    }
  }
  if (typeof profile !== "undefined") {
    for (var i in profile) {
      if (profile.hasOwnProperty(i)) {
        atJson.profile[i] = profile[i];
      }
    }
  }
  if (typeof entity !== "undefined") {
    for (var i in entity) {
      if (entity.hasOwnProperty(i)) {
        atJson.entity[i] = entity[i];
      }
    }
  }

  //Configure Target Profile and Entity parms for global automated data collection
  var targetLogic = {
    'rec_entity_id': {
      'entity': 'id',
    },
    'meta.og:description': {
      'entity': 'message',
    },
    'meta.og:title': {
      'custom': function () {
        if (typeof (utag_data['wa_custom_content_group']) === 'undefined' || utag_data['wa_custom_content_group'].indexOf('simplecore') === -1) {
          atJson.entity['name'] = utag_data['meta.og:title'];
        }
      },
    },
    'postTitle': {
      'custom': function () {
        if (typeof (utag_data['wa_custom_content_group']) === 'string' && utag_data['wa_custom_content_group'].indexOf('simplecore') === 0) {
          atJson.entity['name'] = utag_data['postTitle'];
        }
      },
    },
    'wa_page_url': {
      'entity': 'pageURL',
    },
    'wa_thumbnail_url': { 
		'custom': function() {
			if (document.head.querySelector("[property=at\\:image]") != null && document.head.querySelector("[property=at\\:image]").content != undefined){
				atJson.entity['thumbnailURL'] = document.head.querySelector("[property=at\\:image]").content;
			}else{
				atJson.entity['name'] = utag_data['wa_thumbnail_url'];
			}
		},
    },
	'wa_thumbnail_icon': {
      'entity': 'thumbnailIcon',
    },
    'wa_geo': {
      'entity': 'geo',
    },
    'wa_local': {
      'entity': 'localCode',
    },
    'wa_org6': {
      'entity': 'wa_org6',
    },
	'wa_erpm_id': {
      'profile': 'wa_erpm_id',
    },
    'content_audience': {
	  'custom': function () {
		atJson.entity['content_audience'] = utag_data['content_audience'];
      }
    },
    'content_sub_audience': {
      'custom': function () {
		atJson.entity['content_sub_audience'] = utag_data['content_sub_audience'];
      }
    },
    'content_org_initiative': {
      'custom': function () {
		atJson.entity['content_org_initiative'] = utag_data['content_org_initiative'];
      }
    },
    'content_sub_org_initiative': {
      'custom': function () {
		atJson.entity['content_sub_org_initiative'] = utag_data['content_sub_org_initiative'];
      }
    },
	'wa_resource_type': {
		'custom': function () {
			atJson.entity['wa_resource_type'] = utag_data['wa_resource_type'];
		}
	},
	'wa_intel_platform': {
		'custom': function () {
			atJson.entity['wa_intel_platform'] = utag_data['wa_intel_platform'];
		}
	},
	'wa_system_type': {
		'custom': function () {
			atJson.entity['wa_system_type'] = utag_data['wa_system_type'];
		}
	},
	'wa_target_audience': {
		'custom': function () {
			atJson.entity['wa_target_audience'] = utag_data['wa_target_audience'];
		}
	},
	'wa_software': {
		'custom': function () {
			atJson.entity['wa_software'] = utag_data['wa_software'];
		}
	},
	'wa_intel_technology': {
		'custom': function () {
			atJson.entity['wa_intel_technology'] = utag_data['wa_intel_technology'];
		}
	},
    'wa_product_id': {
      'entity': 'productIdPrimary',
    },
    'wa_product_id_secondary': {
      'custom': function () {
        if (typeof utag_data['wa_product_id_secondary'] !== 'undefined' && utag_data['wa_product_id_secondary'] !== '') {
			atJson.entity['productIdSecondary'] = utag_data['wa_product_id_secondary'];
			if (typeof utag_data['wa_product_id'] !== 'undefined' && utag_data['wa_product_id'] !== '') {
				atJson.entity['productIdPrimaryAll'] = utag_data['wa_product_id'] + ',' + utag_data['wa_product_id_secondary'];
		    }
        }
      }
    },
    'shop_formFactor': {
	  'custom': function () {
		if (typeof utag_data['shop_formFactor'] !== 'undefined' && utag_data['shop_formFactor'] !== '') {
			atJson.entity['formFactor'] = utag_data['shop_formFactor'];
        }
      }
    },
    'wa_membership_group': {
      'profile': 'wa_membership_group',
    },
    'wa_topic': {
		'custom': function() {
			if (typeof(utag_data['wa_section']) === 'string') {
				atJson.entity['wa_topic'] = utag_data['wa_topic'];
				var val = utag_data['wa_topic'];
        if(atJson.entity['wa_topic'].indexOf(",") != -1){
            atJson.entity['wa_topic']=  utag_data['wa_topic'].split(",")[0]; 
        }
			}
		},
	},
	'wa_internal_search_referrer': {
            'entity': 'wa_search_term',
    },
    'wp_post_categories': {
      'custom': function () {
        if (typeof (utag_data['wa_section']) === 'undefined' || utag_data['wa_section'].indexOf('iq') === -1) {
          atJson.entity['wa_topic'] = utag_data['wp_post_categories'];
        }
      },
    },
    'wa_cquser_coverage_type': {
      'profile': 'wa_cquser_coverage_type',
    },
    'wa_page_type_micro': {
      'entity': 'pageType',
    },
    'dnb_company': {
      'profile': 'dnb_company',
    },
    'dnb_naicscode': {
      'profile': 'dnb_naicscode',
    },
    'dnb_naicsdescription': {
      'profile': 'dnb_naicsdescription',
    },
    'dnb_jobfuncion': {
      'profile': 'dnb_jobfuncion',
    },
    'dnb_jobseniority': {
      'profile': 'dnb_jobseniority',
    },
	'video_short_title': {
		'entity': 'video_short_title',
	},
	'video_long_desc': {
		'entity': 'video_long_desc',
	},
	'video_short_desc': {
		'entity': 'video_short_desc',
	},
	'wa_applications': { 
		'entity': 'wa_applications',
	},
	'video_duration': {
		'entity': function() {
			seconds = cq_tms.video_duration / 1000;
			finalSeconds = parseInt(seconds / 60);
			remainingSeconds = parseInt((((seconds / 60) % 1) * 60));
			atJson.entity['video_duration'] = finalSeconds + ":" + remainingSeconds;
		},
	},
	'video_thumbnail': {
		'entity': 'video_thumbnail',
	},
	'wa_env': {
      'custom': function () {
        atJson.entity['wa_env'] = utag_data['wa_env'];
		/*if (typeof (utag_data['wa_env']) === 'undefined' || utag_data['wa_env'].indexOf('prod') === -1) {
		  atJson.entity.event = {};
		  atJson.entity.event.detailsOnly=true; //if not in procution exclude for algorithm
        }*/
      },
    },
	'wa_ssg_title': {
		'custom': function() {
			if (typeof(utag_data['wa_section']) === 'string' && utag_data['wa_section'].indexOf('ssg') > -1) {
				atJson.entity['name'] = utag_data['wa_ssg_title'];
			}
		},
	},
	'wa_ssg_description': {
		'custom': function() {
				atJson.entity['message'] = utag_data['wa_ssg_description'];
		},
	}
  }
  
  //Set Target Profile and Entity parms for global automated data collection
  for (var key in utag_data) {
    if (targetLogic[key] && typeof (utag_data[key]) !== 'undefined' && utag_data[key] !== '') {
      for (var atJsonKey in targetLogic[key]) {
        var atJsonValue = targetLogic[key][atJsonKey];
        if (typeof (atJsonValue) === 'function') {
          atJsonValue();
        } else {
          atJson[atJsonKey][atJsonValue] = utag_data[key];
        }
      }
    }
  }
	/*
  //Set Category Ids for Profile and Entity
  if(categoryId.length > 0){
    var catIds = categoryId.join(","); //convert to comma delimited string
    atJson.entity.categoryId = catIds;
	atJson.user.categoryId = catIds;
  }
  */
  //Add Hard-coded Values here
  atJson.excludedIds = utag_data.wa_page_name;
  atJson.entity.hit_type='page'; //default is set to 'page' for page load. This value is overridden by different types of hits, i.e. 1) event 2) spa, etc.

  if(typeof utag_data.wa_erpm_id != 'undefined' && utag_data.wa_erpm_id != "" && utag_data.wa_erpm_id != null){ 
      atJson.mbox3rdPartyID = utag_data.wa_erpm_id;
  }

  if (location.pathname.indexOf('\/search\.html') != -1 && typeof utag_data['wa_section'] != 'undefined' && utag_data['wa_section'].indexOf('intc') != -1 )
		atJson.entity.hit_type = 'spa';
  
  //Set AT Property if configured in Tealium
  if(typeof utag_data['target_at_property'] != 'undefined' && utag_data['target_at_property'] != "n/a"){
	atJson['at_property'] = utag_data['target_at_property'];
  }
  return atJson;
}

//*********************************************************************************************
//* Target at.js version 1.2.2                                                                *
//*********************************************************************************************
wap_tms.at_version = "1.2.3";

wap_tms.utility = wap_tms.utility || {};
wap_tms.utility.wap_loadTarget_tealium = function () {

/**
 * @license
 * at.js 1.2.3 | (c) Adobe Systems Incorporated | All rights reserved
 * zepto.js | (c) 2010-2016 Thomas Fuchs | zeptojs.com/license
 * rx.js | (c) 2015-2016 Netflix, Inc., Microsoft Corp. and contributors | http://www.apache.org/licenses/LICENSE-2.0
 */

!function(t){"use strict";function e(t,e){Vi=t,Ui=e,Hi=e.documentElement,zi=t.screen,Bi=e.location}function n(t){Ou=t,Wi=Ou,Zi=Ou.enabled,Ji=Ou.clientCode,Yi=Ou.imsOrgId,Xi=Ou.serverDomain,Gi=Ou.crossDomain,Ki=Ou.timeout,Qi=Ou.globalMboxName,tu=Ou.globalMboxAutoCreate,eu=Ou.mboxParams,nu=Ou.globalMboxParams,ru=Ou.version,ou=Ou.defaultContentHiddenStyle,iu=Ou.defaultContentVisibleStyle,uu=Ou.bodyHiddenStyle,su=Ou.bodyHidingEnabled,cu=Ou.deviceIdLifetime/1e3,au=Ou.sessionIdLifetime/1e3,fu=Ou.selectorsPollingTimeout,lu=Ou.visitorApiTimeout,pu=Ou.overrideMboxEdgeServer,hu=Ou.overrideMboxEdgeServerTimeout,du=Ou.optoutEnabled,bu=Ou.cookieDomain,vu="disabled"!==Gi,mu="x-only"===Gi,yu=Ou.secureOnly?"https:":"",gu=Ou.supplementalDataIdParamTimeout}function r(t){return t}function o(){for(var t=[],e="0123456789abcdef",n=0;n<36;n++)t[n]=e.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]=Tu,t.join(Tu)}function i(t){setTimeout(t,0)}function u(t){for(var e=5381,n=0;n<t.length;n++){e=(e<<5)+e+t.charCodeAt(n)}return e}function s(){}function c(t){return"string"===Au.type(t)}function a(t){return c(t)&&Au.trim(t).length>0}function f(t){return!c(t)||0===t.length}function l(t){return"number"===Au.type(t)}function p(t){return"undefined"===Au.type(t)}function h(t){return Au.isArray(t)}function d(t){return Au.isFunction(t)}function b(t){return"null"===Au.type(t)}function v(t){return"object"===Au.type(t)}function m(t){return t&&1===t.nodeType&&"object"===Au.type(t)&&!Au.isPlainObject(t)}function y(t){return!(h(t)&&t.length>0)}function g(t){return v(t)&&a(t.error)?t.error:p(t)||b(t)||!a(t.message)?a(t)?t:hs:t.message}function w(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function x(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e)return void(r[t]=n);void 0===r[t]&&(r[t]={}),r[t][e[1]]=n};case"bracket":return function(t,n,r){return e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0===r[t]?void(r[t]=[n]):void(r[t]=[].concat(r[t],n)):void(r[t]=n)};default:return function(t,e,n){if(void 0===n[t])return void(n[t]=e);n[t]=[].concat(n[t],e)}}}function _(t){return Array.isArray(t)?t.sort():"object"==typeof t?_(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}function E(t){try{return encodeURIComponent(t)}catch(e){return t}}function O(t){try{return decodeURIComponent(t)}catch(e){return t}}function S(t){return Es[t]?Es[t]:(_s.href=t,Es[t]=ds(_s.href))}function T(t,e){if(!e)return"";var n="; "+t;return!0===e?n:n+"="+e}function j(t){if("number"==typeof t.expires){var e=new Date;e.setMilliseconds(e.getMilliseconds()+864e5*t.expires),t.expires=e}return T("Expires",t.expires?t.expires.toUTCString():"")+T("Domain",t.domain)+T("Path",t.path)+T("Secure",t.secure)}function A(t,e,n){return encodeURIComponent(t).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+j(n)}function C(t){for(var e={},n=t?t.split("; "):[],r=/(%[0-9A-Z]{2})+/g,o=0;o<n.length;o++){var i=n[o].split("="),u=i.slice(1).join("=");'"'===u.charAt(0)&&(u=u.slice(1,-1));try{e[i[0].replace(r,decodeURIComponent)]=u.replace(r,decodeURIComponent)}catch(t){}}return e}function k(){return C(document.cookie)}function N(t){return k()[t]}function P(t,e,n){document.cookie=A(t,e,Ss({path:"/"},n))}function D(t,e){P(t,"",Ss({},e,{expires:-1}))}function I(t){return/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(t)}function M(t){if(I(t))return t;var e=t.split(".").reverse(),n=e.length;return n>=3&&/^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i.test(e[1])?e[2]+"."+e[1]+"."+e[0]:1===n?e[0]:e[1]+"."+e[0]}function F(){ks(qs,Js,{domain:bu});var t=Cs(qs)===Js;return Ns(qs),t}function q(){var t=Cs(Hs),e=xs(Bi.search);return a(t)||a(e[Ws])}function $(){return Zi&&F()&&!q()}function R(){var t=Cs(Us),e=xs(Bi.search);return a(t)||a(e[Bs])}function L(){var t=Cs(zs),e=xs(Bi.search),n=xs(ws(Ui.referrer));return a(t)||a(e[Zs])||a(n[Zs])}function V(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];console.warn.apply(console,[].concat.apply([Ys],t))}function U(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];R()&&console.log.apply(console,[].concat.apply([Ys],t))}function H(){var t={};return t.valid=!0,t}function z(t){var e={};return e.valid=!1,e.error=t,e}function B(t){return f(t)?z(Pu):t.length>Ps?z(Du):H()}function W(t){if(!v(t))return z(Nu);var e=t.mbox,n=B(e);return n.valid?d(t.success)?d(t.error)?H():z(Mu):z(Iu):n}function Z(t){return v(t)?h(t.offer)?H():z(qu):z(Nu)}function J(t){if(!v(t))return z(Nu);var e=t.mbox,n=B(e);return n.valid?H():n}function Y(t,e){return-1!==e.indexOf(t)}function X(t){return Au.isEmptyObject(t)?[]:Object.keys(t)}function G(t,e){return Au.map(e,t)}function K(t,e){return Au.grep(e,t)}function Q(t){return[].concat.apply([],t)}function tt(t,e){Au.each(e,function(e,n){return t(n,e),!0})}function et(t,e){var n={};return tt(function(t,e){return n[e]=t},t),tt(function(t,e){return n[e]=t},e),n}function nt(t,e,n){var r=et({},t),o=X(e).filter(function(t){return!Y(t,n)});return tt(function(t){return r[t]=e[t]},o),r}function rt(t){return Au.isArray(t)&&t.length>0?t[0]:null}function ot(t,e){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function it(t){return Au.trim(t)}function ut(t){return{key:t,val:t.charAt(0)+"\\3"+t.charAt(1)+" "}}function st(t){var e=t.match(vc);if(y(e))return t;var n=G(ut,e),r=t;return tt(function(t){r=r.replace(t.key,t.val)},n),r}function ct(t){for(var e,n,r,o,i=[],u=it(t),s=u.indexOf(hc);-1!==s;)e=it(u.substring(0,s)),n=it(u.substring(s)),o=n.indexOf(dc),r=it(n.substring(bc,o)),u=it(n.substring(o+1)),s=u.indexOf(hc),e&&r&&i.push({sel:e,eq:Number(r)});return u&&i.push({sel:u}),i}function at(t){if(m(t))return Au(t);if(!c(t))return Au(t);var e=st(t);if(-1===e.indexOf(hc))return Au(e);var n=ct(e),r=Au(Ui);return tt(function(t){var e=t.sel,n=t.eq;r=r.find(e),l(n)&&(r=r.eq(n))},n),r}function ft(t){return at(t).length>0}function lt(t){at(t).remove()}function pt(t,e){at(t).before(e)}function ht(t){return Au("<"+cc+"/>").append(t)}function dt(t,e,n){var r=Au(t),o=r.attr(e);a(o)&&(r.removeAttr(e),r.attr(n,o))}function bt(t,e){return a(Au(t).attr(e))}function vt(t){return"function"==typeof t}function mt(t){return null!=t&&"object"==typeof t}function yt(){try{return wu.apply(this,arguments)}catch(t){return Tc.errorObject.e=t,Tc.errorObject}}function gt(t){return wu=t,yt}function wt(t){return t.reduce(function(t,e){return t.concat(e instanceof $c.UnsubscriptionError?e.errors:e)},[])}function xt(t,e,n){if(t){if(t instanceof ra.Subscriber)return t;if(t[oa.$$rxSubscriber])return t[oa.$$rxSubscriber]()}return t||e||n?new ra.Subscriber(t,e,n):new ra.Subscriber(ia.empty)}function _t(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}function Et(){return Ja in Vi&&Ya in new Vi[Ja]}function Ot(t){if(t.dataType===xa)return t.cache=!0,t;if(t.dataType!==ya)return t;if(Et()){var e={};e[Ya]=!0,t.xhrFields=e}else t.dataType=ga,t.jsonp=Ia;return t}function St(t){return va.create(function(e){var n=!1,r={success:function(t){n=!0,e.next({data:t}),e.complete()},error:function(t,r,o){var i=g(o||r);n=!0,e.next({status:r,error:i}),e.complete()}};Au.ajaxSettings.global=!1;var o=Au.ajax(Ot(Au.extend(!0,r,t)));return function(){n||o.abort()}})}function Tt(t){return!y(t)&&2===t.length&&a(it(t[0]))}function jt(t){var e=t.indexOf(Gs);return-1===e?[]:[t.substr(0,e),t.substr(e+1)]}function At(t,e,n,r){tt(function(t,o){v(t)?(e.push(o),At(t,e,n,r),e.pop()):y(e)?n[r(o)]=t:n[r(e.concat(o).join(tc))]=t},t)}function Ct(t){var e={},n=[],r=K(a,t);tt(function(t){return n.push(jt(t))},r);var o=K(Tt,n);return tt(function(t){return e[O(it(t[0]))]=O(it(t[1]))},o),e}function kt(t){var e={},n=xs(Ks+t);return tt(function(t,n){a(n)&&(e[n]=t)},n),e}function Nt(t,e){var n={};return p(e)?At(t,[],n,r):At(t,[],n,e),n}function Pt(t){p(Vi[Xa])||d(Vi[Xa][Ga])&&Vi[Xa][Ga](t)}function Dt(t,e,n){p(Vi[Xa])||d(Vi[Xa][Ka])&&Vi[Xa][Ka](t,e,n)}function It(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}function Mt(t){var e=t.Symbol;if("function"==typeof e)return e.iterator||(e.iterator=e("iterator polyfill")),e.iterator;var n=t.Set;if(n&&"function"==typeof(new n)["@@iterator"])return"@@iterator";var r=t.Map;if(r)for(var o=Object.getOwnPropertyNames(r.prototype),i=0;i<o.length;++i){var u=o[i];if("entries"!==u&&"size"!==u&&r.prototype[u]===r.prototype.entries)return u}return"@@iterator"}function Ft(t,e,n,r){var o=new qf.InnerSubscriber(t,n,r);if(o.closed)return null;if(e instanceof Mf.Observable)return e._isScalar?(o.next(e.value),o.complete(),null):e.subscribe(o);if(Pf.isArray(e)){for(var i=0,u=e.length;i<u&&!o.closed;i++)o.next(e[i]);o.closed||o.complete()}else{if(Df.isPromise(e))return e.then(function(t){o.closed||(o.next(t),o.complete())},function(t){return o.error(t)}).then(null,function(t){Nf.root.setTimeout(function(){throw t})}),o;if(e&&"function"==typeof e[Ff.$$iterator])for(var s=e[Ff.$$iterator]();;){var c=s.next();if(c.done){o.complete();break}if(o.next(c.value),o.closed)break}else if(e&&"function"==typeof e[$f.$$observable]){var a=e[$f.$$observable]();if("function"==typeof a.subscribe)return a.subscribe(new qf.InnerSubscriber(t,n,r));o.error(new TypeError("Provided object does not correctly implement Symbol.observable"))}else{var f=If.isObject(e)?"an invalid object":"'"+e+"'",l="You provided "+f+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";o.error(new TypeError(l))}}return null}function qt(t){return t&&"function"==typeof t.schedule}function $t(t,e){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return this.lift(new Ll(t,e))}function Rt(t,e,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"number"==typeof e&&(n=e,e=null),this.lift(new Xl(t,e,n))}function Lt(t){return t instanceof Date&&!isNaN(+t)}function Vt(t,e,n){void 0===n&&(n=Cp.async);var r=kp.isDate(t),o=r?+t-n.now():Math.abs(t);return this.lift(new Ip(o,r,e,n))}function Ut(t){return du&&d(t[Xp])&&!p(Vi.Visitor[th])}function Ht(t){return Ut(t)?va.create(function(e){t[Xp](function(t){e.next(t),e.complete()},Vi.Visitor[th].GLOBAL,!0)}):va.of(!1)}function zt(t){return Lp+t}function Bt(t){if(!d(t[Gp]))return{};var e=t[Gp]();return v(e)?Nt(e,zt):{}}function Wt(t){var e={};return a(t[Kp])&&(e[Vp]=t[Kp]),a(t[Qp])&&(e[Up]=t[Qp]),e}function Zt(t,e){var n={};return tt(function(t){return tt(function(t,e){return n[e]=t},t)},e),tt(function(t,e){return n[e]=t},Bt(t)),tt(function(t,e){return n[e]=t},Wt(t)),n}function Jt(t,e,n){return d(t[e])?va.create(function(r){t[e](function(t){var e={};e[n]=t,r.next(e),r.complete()},!0)}):va.of({})}function Yt(t){var e=[Jt(t,Bp,Ta),Jt(t,Wp,Oa),Jt(t,Zp,Ea),Jt(t,Jp,Sa)];return va.forkJoin.apply(va,e).map(function(e){return Zt(t,e)})}function Xt(t,e,n){var r=Qt(t,e);return a(r)&&(n[ja]=r),n}function Gt(){return{status:Qa,error:Fu}}function Kt(t,e){return e?va['throw'](Gt()):va.of(t)}function Qt(t,e){return d(t[Yp])?t[Yp](Rp+":"+Ji+":"+e):Xs}function te(){if(f(Yi))return null;if(p(Vi.Visitor))return null;if(b(Vi.Visitor))return null;if(!d(Vi.Visitor[Hp]))return null;var t={sdidParamExpiry:gu},e=Vi.Visitor[Hp](Yi,t);return v(e)&&d(e[zp])&&e[zp]()?e:null}function ee(t){var e=te();if(b(e))return va.of({});var n=++eh,r=""+uf+n,o=""+sf+n,i=cf+":request:"+n+":mbox:"+t,u=function(){Pt(r)},s=function(){Pt(o),Dt(i,r,o)};return va.of(e)['do'](u).flatMap(Ht).flatMap(function(t){return Kt(e,t)}).flatMap(Yt).timeoutWith(lu,va.of({})).map(function(n){return Xt(e,t,Zt(e,[n]))})['do'](s)}function ne(t,e,n){return{name:t,value:e,expires:n}}function re(t){return[E(t.name),E(t.value),t.expires].join(ec)}function oe(t){var e=t.split(ec);return y(e)||e.length<3?null:isNaN(parseInt(e[2],10))?null:ne(O(e[0]),O(e[1]),Number(e[2]))}function ie(t){return f(t)?[]:t.split(nc)}function ue(t){return t.expires}function se(t){var e=G(ue,t);return Math.max.apply(Math,e)}function ce(){var t={},e=Cs($s),n=G(oe,ie(e)),r=Math.ceil(Date.now()/1e3),o=K(function(t){return v(t)&&r<=t.expires},n);return tt(function(e){return t[e.name]=e},o),t}function ae(t){var e=G(r,t),n=Math.abs(1e3*se(e)-Date.now()),o=G(re,e).join(nc),i=new Date(Date.now()+n);ks($s,o,{domain:bu,expires:i})}function fe(t,e,n){if(!mu){var r=ce();r[t]=ne(t,e,Math.ceil(n+Date.now()/1e3)),ae(r)}}function le(t){if(mu)return Xs;var e=ce(),n=e[t];return v(n)?n.value:Xs}function pe(t){fe(Ls,t,au)}function he(){return mu?nh:(f(le(Ls))&&fe(Ls,nh,au),le(Ls))}function de(t){var e=t.split(tc);if(2!==e.length||f(e[1]))return Xs;var n=e[1].split(rc);return 2!==n.length||f(n[0])?Xs:n[0]}function be(t){if(pu){var e=de(t);if(!f(e)){var n=new Date(Date.now()+hu);ks(Vs,e,{domain:bu,expires:n})}}}function ve(){return le(Rs)}function me(t){fe(Rs,t,cu),be(t)}function ye(){return rh}function ge(){var t=new Date;return t.getTime()-6e4*t.getTimezoneOffset()}function we(){return oh++}function xe(){var t={};return t[Ua]=he(),mu||(t[Ba]=ve()),t[Va]=ye(),t[Za]=ru,t[$a]=Xs+we(),t[za]=Xs+ge(),t[Ra]=Bi.hostname,t[Wa]=Bi.href,t[Ha]=Ui.referrer,vu&&(t[qa]=Gi),t}function _e(){var t={};return t[Na]=Xs+Hi.clientHeight,t[Da]=Xs+Hi.clientWidth,t[Pa]=Xs+-(new Date).getTimezoneOffset(),t[Ca]=Xs+zi.height,t[ka]=Xs+zi.width,t[Aa]=Xs+zi.colorDepth,t}function Ee(t){if(!d(t))return{};var e=null;try{e=t()}catch(t){}return b(e)?{}:h(e)?Ct(e):a(e)?kt(e):v(e)?Nt(e):{}}function Oe(){return et(eu||{},Ee(Vi.targetPageParamsAll))}function Se(){return et(nu||{},Ee(Vi.targetPageParams))}function Te(t){return Qi!==t?Oe():et(Oe(),Se())}function je(){return Cs(Vs)}function Ae(){if(!pu)return Xi;var t=je();return f(t)?Xi:Xi.replace(Ji,[uh,t].join(Xs))}function Ce(){return ch.replace(sh,Ji)}function ke(){return[yu,ah,Ae(),Ce()].join(Xs)}function Ne(t,e){var n=e.mbox,r={};return r[La]=n,r=et(r,xe()),r=et(r,_e()),r=et(r,t),r=et(r,Te(n)),r=et(r,e.params)}function Pe(t,e){var n={};return n.type=ih,n.url=ke(),n.dataType=ya,n.data=Ne(t,e),n.timeout=e.timeout,n}function De(t){var e=t.mbox,n=++fh,r=""+af+n,o=""+ff+n,i=lf+":request:"+n+":mbox:"+e,u=function(){Pt(r)},s=function(){Pt(o),Dt(i,r,o)};return va.of(e).flatMap(ee).map(function(e){return Pe(e,t)})['do'](u).flatMap(St)['do'](s)}function Ie(t){var e=t.sessionId;a(e)&&pe(e)}function Me(t){var e=t.tntId;a(e)&&me(e)}function Fe(t){if(p(Vi[lh]))return void(Vi[lh]=[t]);h(Vi[lh])&&Vi[lh].push(t)}function qe(t){var e=t.trace;v(e)&&Fe(e)}function $e(t){var e=t.error;return a(e)?va['throw'](Xn(Qa,e)):va.of(t)}function Re(t){var e=t.message;return f(e)?hh:e}function Le(t){var e=t.duration;return l(e)?e:ph}function Ve(t){var e=Re(t),n=new Date(Date.now()+Le(t));ks(Hs,e,{domain:bu,expires:n})}function Ue(t){var e=t.disabled;return v(e)?(Ve(e),va['throw'](Xn(ef,Re(e)))):va.of(t)}function He(t){return a(t.html)}function ze(t){return v(t.json)||h(t.json)}function Be(t){return a(t.redirect)}function We(t){return!y(t.actions)}function Ze(t){return v(t.dynamic)&&a(t.dynamic.url)}function Je(t){return p(t.html)&&p(t.json)&&p(t.redirect)&&p(t.actions)&&p(t.dynamic)}function Ye(t){return a(t.clickToken)}function Xe(t){return!y(t.plugins)}function Ge(t){return Ye(t)?[{action:jh,clickTrackId:t.clickToken}]:[]}function Ke(t){return Xe(t)?[t.html].concat(t.plugins):[t.html]}function Qe(t){var e=K(He,t);if(y(e))return va.of([]);var n={};return n[Ph]=dh,n[qh]=Q(G(Ke,e)).join(Xs),va.of([n].concat(G(Ge,t)))}function tn(t){return t.json}function en(t){var e=[];return tt(function(t){e.push(tn(t))},t),e}function nn(t){var e=K(ze,t);if(y(e))return va.of([]);var n={};return n[Ph]=vh,n[qh]=en(e),va.of([n])}function rn(t,e){var n=t.split(ec),r=n[1],o=n[0];return e&&!~o.indexOf(e)&&(~o.indexOf(Ks)?o+=Qs+e:o+=Ks+e),r?o+ec+r:o}function on(){return[Ua,Gs,he()].join(Xs)}function un(t){return[od,Gs,E(t)].join(Xs)}function sn(t){var e=un(Ui.referrer),n=rn(t,e),r=te();return b(r)?n:d(r[id])?r[id](n):n}function cn(t){var e=String(t[Gh]),n=String(t[Kh]),r=Bi.search.substring(1),o=t[Xh];if(f(o))return U(Gu,t),null;e&&ud===e&&(o=rn(o,r)),n&&ud===n&&(o=rn(o,on()));var i=nt({},t,[Xh,Gh,Kh]);return i[Xh]=sn(o),i}function an(t){var e={action:Sh,url:t.redirect};return va.of([cn(e)])}function fn(t){return{action:Eh,content:t}}function ln(t){return Xe(t)?G(fn,t.plugins):[]}function pn(t){var e=t[ed];if(f(e))return Xs;var n=ld.exec(e);return y(n)?Xs:2!==n.length?Xs:n[1]}function hn(t,e){var n=ht(e);return n.children().first().attr(cd,t),n.html()}function dn(t){var e=t[qh],n=pn(t);if(f(n)||f(e))return et({},t);var r=t[ed],o=nt({},t,[ed,qh]);return o[ed]=r.replace(pd,Xs),o[qh]=hn(n,e),o}function bn(t){var e=[],n=t[Ih];if(f(n))return t;f(t[Mh])?e.push(Ih):e.push(Mh,Ih);var r=nt({},t,e);return r[qh]="<"+sc+" "+sd+'="'+n+'" />',r}function vn(t){var e=dn(t);if(!c(e[qh]))return U(Bu,e),null;var n=t[$h];return _a===n&&(e[Ph]=bh),nt({},e,[$h])}function mn(t){var e=dn(t);return c(e[qh])?e:(U(Bu,e),null)}function yn(t){var e=dn(t);return c(e[qh])?e:(U(Bu,e),null)}function gn(t){var e=dn(t);return c(e[qh])?e:(U(Bu,e),null)}function wn(t){var e=dn(bn(t));return c(e[qh])?e:(U(Bu,e),null)}function xn(t){var e=dn(bn(t));return c(e[qh])?e:(U(Bu,e),null)}function _n(t){return c(t[qh])?t:(U(Bu,t),null)}function En(t){var e=t[Dh],n=t[Ih];return f(e)||f(n)?(U(Wu,t),null):t}function On(t){var e=t[Qh],n=t[Ih];if(f(e)||f(n))return U(Zu,t),null;var r={},o=nt({},t,[Qh,Ih]);return r[e]=n,o[rd]=r,o}function Sn(t){var e=t[Rh],n=t[Lh];if(f(e)||f(n))return U(Ju,t),null;var r={},o=nt({},t,[Ph,Rh,Lh]);return r[Vh]=e,r[Uh]=n,o[rd]=r,o[Ph]=yh,o}function Tn(t){var e=Number(t[Hh]),n=Number(t[zh]);if(isNaN(e)||isNaN(n))return U(Yu,t),null;var r,o=t[Zh],i={};return a(o)?(i[Zh]=o,r=nt({},t,[Ph,Hh,zh,Zh])):r=nt({},t,[Ph,Hh,zh]),i[Bh]=e,i[Wh]=n,r[rd]=i,r[Ph]=yh,r}function jn(t){var e=Number(t[Jh]),n=Number(t[Yh]);return isNaN(e)||isNaN(n)?(U(Xu,t),null):t}function An(t){return cn(t)}function Cn(t){return f(t[Fh])?(U(Ku,t),null):t}function kn(t){switch(t[Ph]){case dh:return vn(t);case Oh:return mn(t);case kh:return yn(t);case Nh:return gn(t);case Ah:return wn(t);case Ch:return xn(t);case Eh:return _n(t);case mh:return En(t);case yh:return On(t);case wh:return Sn(t);case xh:return Tn(t);case _h:return t;case gh:return jn(t);case Sh:return An(t);case Th:return Cn(t);default:return null}}function Nn(t){return K(function(t){return!b(t)},G(function(t){return kn(t)},t))}function Pn(t){return va.of([].concat(Nn(t.actions),ln(t)))}function Dn(t){var e={};return tt(function(t){p(e[t.type])&&(e[t.type]={}),e[t.type][t.name]=t.defaultValue},t.params),e}function In(t){return p(t.request)?{}:t.request}function Mn(t){return-1!==t.indexOf(hd)}function Fn(t){var e={};return p(t.mbox)?e:(tt(function(t,n){Mn(n)||(e[n]=t)},t.mbox),e)}function qn(t,e,n,r){var o={};return o=et(o,et(t,e)),o=et(o,et(n,r))}function $n(t,e,n){var r={};return r.type=ih,r.url=t,r.dataType=wa,r.data=e,r.timeout=n,r}function Rn(t,e){var n={};return n[Ph]=dh,n[qh]=t.data,[n].concat(Ge(e),ln(e))}function Ln(t,e){var n=e.dynamic,r=Dn(n),o=In(r),i=Fn(r),u=xs(Bi.search),s=t.params,c=n.url,a=qn(o,u,i,s),f=t.timeout;return va.of($n(c,a,f)).flatMap(St).map(function(t){return Rn(t,e)})}function Vn(t){return va.of([].concat(Ge(t),ln(t)))}function Un(t,e){var n=[];return tt(function(e){return Be(e)?void n.push(an(e)):We(e)?void n.push(Pn(e)):Ze(e)?void n.push(Ln(t,e)):Je(e)?void n.push(Vn(e)):void 0},e),n.concat(Qe(e),nn(e))}function Hn(t){var e=[];return tt(function(t){var n=t.responseTokens;v(n)&&e.push(n)},t),e}function zn(t,e){var n=e.offers;if(!h(n))return va.of({actions:[],responseTokens:[]});var r=Un(t,n),o=Hn(n);return va.forkJoin.apply(va,r).map(Q).map(function(t){return{actions:t,responseTokens:o}})}function Bn(t,e,n){return this.lift(new md(t,e,n))}function Wn(t,e){return va.of(e)['do'](Ie)['do'](Me)['do'](qe).flatMap($e).flatMap(Ue).flatMap(function(e){return zn(t,e)})}function Zn(t){var e=t.data;return v(e)?va.of(e):va.of(t)}function Jn(t){var e=t.params;return v(e)?e:{}}function Yn(t){var e=t.timeout;return l(e)&&e>=0?e:Ki}function Xn(t,e){return{status:t,error:e}}function Gn(t){var e=[];return ht(t).find(_d).forEach(function(t){e.push(ht(t).html())}),e.join(Xs)}function Kn(t){return va.of(t).flatMap(De).flatMap(Zn).flatMap(function(e){return Wn(t,e)})}function Qn(t,e){var n=new Vi.CustomEvent(t,{detail:e});Ui.dispatchEvent(n)}function tr(){var t=he(),e=ve();return a(e)?{sessionId:t,deviceId:e}:{sessionId:t}}function er(t){var e=t.responseTokens,n={type:Ed,mbox:t.mbox,tracking:tr()};y(e)||(n.responseTokens=e),Qn(Ed,n)}function nr(t){Qn(Od,{type:Od,mbox:t.mbox,message:t.message,tracking:tr()})}function rr(t){Qn(Sd,{type:Sd,mbox:t.mbox,tracking:tr()})}function or(t){Qn(Td,{type:Td,mbox:t.mbox,message:t.message,selectors:t.selectors,tracking:tr()})}function ir(t,e){var n=t.mbox,r=e.actions,o=e.responseTokens;U(jd,Lu,r),t.success(r),er({mbox:n,responseTokens:o})}function ur(t,e){var n=t.mbox,r=e.status||nf,o=g(e);V(jd,Vu,e),t.error(r,o),nr({mbox:n,message:o})}function sr(t){var e={};return e.mbox=t.mbox,e.params=Jn(t),e.timeout=Yn(t),e}function cr(t){var e=W(t),n=e.error;if(!e.valid)return i(t.error(tf,n)),void V(jd,n);if(!$())return i(t.error(tf,Cu)),void V(Cu);var r=sr(t),o=function(e){return ir(t,e)},u=function(e){return ur(t,e)};Kn(r).subscribe(o,u)}function ar(){return Au(ic).eq(0)}function fr(t,e){return"<"+uc+" "+cd+'="'+t+'" '+ad+'="'+Cd+'">'+e+"</"+uc+">"}function lr(){!0===su&&ft(Id)&&(lt(Id),Pt(rf))}function pr(){!0===su&&(ft(Id)||(pt(ar(),fr(Dd,uu)),Pt(of)))}function hr(t){y(t)||tt(function(t){var e=Pd+u(t),n=t+" {"+ou+"}";pt(ar(),fr(e,n))},t)}function dr(t){lt("#"+(Pd+u(t)))}function br(t,e){at(t).removeClass(Ad).addClass(e?Nd:kd)}function vr(){if($()){var t=Au(oc),e="."+Ad+" {"+ou+"}",n="."+kd+" {"+iu+"}";t.append("<"+uc+" "+cd+'="'+Md+'">'+e+"</"+uc+">"),t.append("<"+uc+">"+n+"</"+uc+">")}}function mr(t){var e=Au(t).attr(sd);return a(e)?e:null}function yr(t){return K(a,G(mr,t.find(ic).get()))}function gr(t){var e={};return e.type=ih,e.url=t,e.dataType=xa,U(ps,t),St(e).map(function(t){return Xs})}function wr(t){return Au(t).attr(Ds)}function xr(t){return t.find(sc).forEach(function(t){return dt(t,sd,Ds)}),t}function _r(t){return t.find(sc).forEach(function(t){return dt(t,Ds,sd)}),t}function Er(t){var e=function(t){return bt(t,Ds)},n=K(e,t.find(sc).get());return y(n)?t:(tt(Or,G(wr,n)),t)}function Or(t){return U(ts,t),Au("<"+sc+"/>").attr(sd,t).attr(sd)}function Sr(t){return va.of(t).map(xr).map(Er).map(_r)}function Tr(t){var e=t.value,n=t.subscriber;n.closed||(n.next(e),n.complete())}function jr(t){var e=t.err,n=t.subscriber;n.closed||n.error(e)}function Ar(t){var e=t[Bd.$$iterator];if(!e&&"string"==typeof t)return new Jd(t);if(!e&&void 0!==t.length)return new Yd(t);if(!e)throw new TypeError("object is not iterable");return t[Bd.$$iterator]()}function Cr(t){var e=+t.length;return isNaN(e)?0:0!==e&&kr(e)?(e=Nr(e)*Math.floor(Math.abs(e)),e<=0?0:e>Xd?Xd:e):e}function kr(t){return"number"==typeof t&&Hd.root.isFinite(t)}function Nr(t){var e=+t;return 0===e?e:isNaN(e)?e:e<0?-1:1}function Pr(t,e){return void 0===e&&(e=0),this.lift(new hb(t,e))}function Dr(t){var e=new zb(t),n=this.lift(e);return e.caught=n}function Ir(t,e){return this.lift(new Yb.MergeMapOperator(t,e,1))}function Mr(t,e,n){var r=yr(n),o=function(n){return t(e,n)};return y(r)?va.of(n).map(o).map(function(){return Xs}):va.of(n).map(o).flatMap(function(){return va.from(r).concatMap(gr)})}function Fr(t){return function(e){return U(Ru,e),va.of(t)}}function qr(t,e){var n=e[qh],r=at(e[ed]),o=ht(n),i=function(e){return Mr(t,r,e)};return Sr(o).flatMap(i).map(function(){return e})['catch'](Fr(e))}function $r(t,e){return t.html(e.html())}function Rr(t){return U(zu,t),qr($r,t)}function Lr(t){var e=at(t[ed]),n=t[qh];return U(zu,t),e.text(n),va.of(t)}function Vr(t,e){return t.append(e.html())}function Ur(t){return U(zu,t),qr(Vr,t)}function Hr(t,e){return t.prepend(e.html())}function zr(t){return U(zu,t),qr(Hr,t)}function Br(t,e){var n=t.parent();return t.before(e.html()).empty().remove(),n}function Wr(t){return U(zu,t),qr(Br,t)}function Zr(t,e){return t.before(e.html()),t.prev()}function Jr(t){return U(zu,t),qr(Zr,t)}function Yr(t,e){return t.after(e.html()),t.next()}function Xr(t){return U(zu,t),qr(Yr,t)}function Gr(t,e){return t.before(e.html()).parent()}function Kr(t){return U(zu,t),qr(Gr,t)}function Qr(t,e){return sd===e&&t.is(sc)}function to(t,e){t.removeAttr(sd),t.attr(sd,Or(e))}function eo(t){var e=t[Dh],n=t[Ih],r=at(t[ed]);return U(zu,t),Qr(r,e)?to(r,n):r.attr(e,n),va.of(t)}function no(t,e,n){t.forEach(function(t){var r=X(e);tt(function(r){return t.style.setProperty(r,e[r],n)},r)})}function ro(t){var e=at(t[ed]),n=t[td];return U(zu,t),f(n)?e.css(t[rd]):no(e,t[rd],n),va.of(t)}function oo(t){var e=at(t[ed]);return U(zu,t),e.empty().remove(),va.of(t)}function io(t){var e=t[Jh],n=t[Yh],r=at(t[ed]),o=r.children(),i=o.eq(e),u=o.eq(n);return ft(i)&&ft(u)?(U(zu,t),e<n?u.after(i):u.before(i),va.of(t)):(U(Qu,t),va.of(t))}function uo(t){if(f(t))return!0;var e=S(t);return a(e.anchor)&&e.host===Bi.hostname&&e.port===Bi.port&&"http"===e.protocol.slice(0,4)}function so(t){var e=Au(t),n=e.attr(fd);return!(!e.is(pc)||!a(n)||n.toLowerCase()!==ev)||(!(!e.is(lc)||!a(n)||n.toLowerCase()!==ev)||!(!e.is(lc)||!f(n)))}function co(t){var e=t.currentTarget;return function(){Au(e).parent().trigger(tv),Bi.href=e.href}}function ao(t){var e=t.currentTarget;return function(){Au(e).parent().trigger(ev),e.submit()}}function fo(t){var e=t.currentTarget;return function(){Au(e).parent().trigger(tv),e.submit()}}function lo(t){return t.target===nv}function po(t){var e=Au(t.currentTarget);return t.type===tv&&e.is(ac)}function ho(t){var e=Au(t.currentTarget);return t.type===ev&&Au(e).is(fc)}function bo(t){var e=t.target,n=t.currentTarget;return t.type===tv&&e!==n&&so(e)}function vo(t){return po(t)&&mo(t)?co(t):bo(t)&&!lo(t.currentTarget)?fo(t):ho(t)&&!lo(t.currentTarget)?ao(t):s}function mo(t){var e=t.currentTarget,n=e.href;return!f(n)&&(t.type===tv&&!uo(n)&&!lo(e)&&!t.hasMetaKey)}function yo(t){return t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.which>1}function go(t){var e=et({},t);return e.params=Jn(t),e.timeout=Yn(t),e.success=d(t.success)?t.success:function(){},e.error=d(t.error)?t.error:function(t,e){},e}function wo(t){return a(t.type)&&(a(t.selector)||m(t.selector))}function xo(t){return function(){U(es,t),t.success()}}function _o(t){return function(e){var n=e.status||nf,r=g(e);V(ns,t,e),t.error(n,r)}}function Eo(t,e){xo(t)(),vo(e)()}function Oo(t,e,n){_o(t)(n),vo(e)()}function So(t,e,n){var r={};r.mbox=t.mbox,r.params=t.params,r.timeout=t.timeout,Kn(r).subscribe(e,n)}function To(t,e){var n=yo(e),r=e.target,o=e.currentTarget,i=e.type,u={target:r,currentTarget:o,type:i,hasMetaKey:n};return So(t,function(){return Eo(t,u)},function(e){return Oo(t,u,e)}),!(po(u)&&mo(u)||bo(u)&&!lo(o)||ho(u)&&!lo(o)||t.preventDefault)}function jo(t){var e=t.selector,n=t.type;tt(function(e){Au(e).on(n,function(e){return To(t,e)})},at(e))}function Ao(t){var e=J(t),n=e.error;return t=go(t),e.valid?$()?wo(t)?void jo(t):void So(t,xo(t),_o(t)):(i(t.error(tf,Cu)),void V(Cu)):(i(t.error(Qa,n)),void V(rv,n))}function Co(t,e){var n={};return n[t]=e,n}function ko(t,e,n){var r={};return r.mbox=t+Ms,r.type=tv,r.selector=e,r.params=n,r}function No(t,e,n){U(zu,t);var r=t[Fh];return Ao(ko(e,t[ed],Co(n,r))),va.of(t)}function Po(t,e){return No(e,t,Fa)}function Do(t,e){return No(e,t,Ma)}function Io(t){var e=t[qh];if(f(e))return t;if(!at(t[ed]).is(oc))return t;var n=nt({},t,[Ph,qh]);return n[Ph]=Oh,n[qh]=Gn(e),n}function Mo(t,e){var n=Io(e);switch(n[Ph]){case dh:return Rr(n);case bh:return Lr(n);case Oh:return Ur(n);case kh:return zr(n);case Nh:return Wr(n);case Ah:return Jr(n);case Ch:return Xr(n);case Eh:return Kr(n);case mh:return eo(n);case yh:return ro(n);case _h:return oo(n);case gh:return io(n);case Th:return Po(t,n);case jh:return Do(t,n);default:return va.of(n)}}function Fo(t){var e=t[Xh];return U(zu,t),Bi.replace(e),va.of(t)}function qo(t){return!Ev.isArray(t)&&t-parseFloat(t)+1>=0}function $o(t){return void 0===t&&(t=-1),0===t?new Uv.EmptyObservable:t<0?this.lift(new zv(-1,this)):this.lift(new zv(t-1,this))}function Ro(t){return this.lift(new Qv(t))}function Lo(t){return this.lift(new sm(t))}function Vo(t){return a(t)?t:m(t)?t:oc}function Uo(t,e){p(e[ed])&&(e[ed]=t)}function Ho(t,e){tt(function(e){return Uo(t,e)},e)}function zo(t){hr(K(a,G(function(t){return t[nd]},t)))}function Bo(t){var e=t[ed],n=t[nd];(a(e)||m(e))&&br(e,ym(t)),a(n)&&dr(n)}function Wo(t){tt(Bo,t)}function Zo(t,e){var n=""+pf+e,r=""+hf+e,o=df+":rendering:"+e+":mbox:"+t;Pt(r),Dt(o,n,r)}function Jo(t,e,n){var r=function(t){return t[ed]},o=function(t){return a(t)||m(t)},i=$u,u=K(o,G(r,n));Wo(n),V($u,n),or({mbox:t,message:i,selectors:u}),Zo(t,e)}function Yo(t,e,n){var r=K(vm,n);if(!y(r))return void Jo(t,e,r);U(Uu),rr({mbox:t}),Zo(t,e)}function Xo(t,e){Mo(t,e).subscribe(function(){U(Hu,e),Bo(e)},function(t){U(Ru,t),Bo(e)})}function Go(t,e){tt(function(e){ft(e[ed])&&(Xo(t,e),e.found=!0)},e)}function Ko(t,e){var n=va.timer(fu),r=++bm;Pt(""+pf+r),va.of(e,_v).repeat().takeUntil(n).takeWhile(function(t){return ot(vm,t)}).map(function(t){return K(vm,t)}).subscribe(function(e){Go(t,e)},function(){Yo(t,r,e)},function(){Yo(t,r,e)})}function Qo(t){t===Qi&&lr()}function ti(t,e){br(t),Qo(e)}function ei(t){var e=Z(t),n=e.error;if(!e.valid)return V(dm,n),void lr();var r=f(t.mbox)?Qi:t.mbox,o=Vo(t.selector),i=B(r),u=i.error;if(!i.valid)return V(dm,u),void ti(o,r);if(!$())return V(Cu),void ti(o,r);var s=t.offer;if(y(s))return U(dm,ss),void ti(o,r);var c=rt(K(mm,s));if(!b(c))return U(dm,cs),void Fo(c);Ho(o,s),zo(s),Qo(r),Ko(r,s)}function ni(){Em={logger:{log:U,error:V},settings:{clientCode:Ji,serverDomain:Xi,timeout:Ki,globalMboxAutoCreate:tu,globalMboxName:Qi}}}function ri(t){if(!v(t))throw new Error("Please provide options")}function oi(t){if(f(t))throw new Error("Please provide extension name");var e=t.split(".");tt(function(t){if(!_m.test(t))throw new Error("Name space should contain only letters")},e)}function ii(t,e){if(!h(t))throw new Error("Please provide an array of dependencies");if(0===t.length)throw new Error("Please provide an array of dependencies");tt(function(t){if(p(e[t]))throw new Error(t+" module does not exist")},t)}function ui(t){if(!d(t))throw new Error("Please provide extension registration function")}function si(t,e,n){for(var r=e.split("."),o=r.length,i=0;i<o-1;i++){var u=r[i];t[u]=t[u]||{},t=t[u]}t[r[o-1]]=n}function ci(t){ni();var e=Vi[gm][wm];ri(t);var n=t.name;oi(t.name);var r=t.modules;ii(r,Em);var o=t.register;ui(o),e[xm]=e[xm]||{};var i=[];tt(function(t){return i.push(Em[t])},r),si(e[xm],n,o.apply(void 0,i))}function ai(t){return!y(Om[t])}function fi(t,e){ai(t)?Om[t].push(e):Om[t]=[e]}function li(t){var e=Om[t];return y(e)?[]:e}function pi(t,e,n,r){var o={};return o.mbox=t,o.params=e,o.success=n,o.error=r,o}function hi(t,e,n){var r={};return r.mbox=t,r.selector=e,r.offer=n,r}function di(t,e,n,r){var o=hi(t,e,n);U(os,t),ei(o),r()}function bi(t,e,n,r,o){V(is,t,n,r),br(e),o()}function vi(t,e){Au(t).attr(Is,e).addClass(""+Fs+e)}function mi(t,e,n,r,o){cr(pi(t,e,function(e){return di(t,n,e,r)},function(e,r){return bi(t,n,e,r,o)}))}function yi(){return pm.find(function(t){return"interactive"===t.readyState})}function gi(){try{throw new Error}catch(t){return t.stack}}function wi(t,e){for(var n,r=/[^@\s\(]+$/gm,o=/(:\d+){1,2}\)?$/;n=r.exec(t);){n=n.pop();var i=n.search(o);if(!(i<0)){var u=e(n.slice(0,i));if(u)return u}}}function xi(t){if(!(t in hm))return _i(t)?pm.last():pm.find(function(e){return e.src===t||e.getAttribute("src")===t})}function _i(t){return"loading"===document.readyState&&location.href.replace(/#.*/,"")===t}function Ei(){
"currentScript"in Ui||(pm=Ui.getElementsByTagName("script"),pm.find=function(t){for(var e=0;e<this.length;e++)if(t(this[e]))return this[e]},pm.last=function(){return this[this.length-1]},hm=Object.create(null),Ui.addEventListener("load",function(t){var e=t.target;if("script"===e.nodeName.toLowerCase()){var n=e.src;n&&(hm[n]=null)}},!0))}function Oi(){return"currentScript"in Ui?Ui.currentScript:yi()||wi(gi(),xi)||null}function Si(t){var e=Oi();if(!m(e))return V(Sm,fs),null;var n=Au(e);if(n.parent().is(oc))return U(Sm,ls,t),Au(oc);var r=n.prev();return r.is(cc)&&r.hasClass(Ad)?r:(U(Sm,rs,as,t),Au(oc))}function Ti(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!$()&&!L())return void V(Cu);var r=B(t),o=r.error;if(!r.valid)return void V(Sm,o);var i=Si(t);if(!b(i)){var u=i.get(0);vi(u,t);var c=Ct(e);fi(t,{mbox:t,params:c,element:u}),U(Sm,t,c,u),$()&&mi(t,c,u,s,s)}}function ji(t,e){var n=Au("#"+t);return ft(n)?n:(U(Tm,rs,as,e),Au(oc))}function Ai(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!$()&&!L())return void V(Cu);if(f(t))return void V(Tm,us);var o=B(e),i=o.error;if(!o.valid)return void V(Tm,i);var u=ji(t,e).get(0);vi(u,e);var s=Ct(n);U(Tm,e,s,u),fi(e,{mbox:e,params:s,element:u})}function Ci(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!$())return void V(Cu);var r=B(t),i=r.error;if(!r.valid)return void V(jm,i);var u=Ct(e);u[Va]=o();var c=function(t){return mi(t.mbox,et(t.params,u),t.element,s,s)},a=li(t);U(jm,a),tt(c,a)}function ki(){Vi[km]=Vi[km]||{},Vi[km].querySelectorAll=at}function Ni(){Ui.addEventListener(tv,function(t){d(Vi[km][Nm])&&Vi[km][Nm](t)},!0)}function Pi(){var t={};return t.type=ih,t.url=Su,t.dataType=xa,t}function Di(){if(ki(),L()){var t=Pi(),e=function(t){return Ni()},n=function(t){return V(Am)};U(Cm),St(t).subscribe(e,n)}}function Ii(){if(!$())return void V(Cu);if(!tu)return void U(Pm,Dm);if(f(Qi))return void U(Pm,Im);var t=Qi,e={},n=Au(oc).get(0),r=function(){return lr()};U(os,Qi),pr(),mi(t,e,n,s,r)}function Mi(){R()&&U(Mm,Wi)}function Fi(t,e){t.enabled&&tt(function(n){void 0!==e[n]&&(t[n]=e[n])},Fm)}function qi(){var t=document,e=t.compatMode,n=t.documentMode,r=e&&"CSS1Compat"===e,o=!n||n>=9;return r&&o}function $i(t){t.cookieDomain=M(Bi.hostname),t.enabled=qi(),Fi(t,Vi.targetGlobalSettings||{})}function Ri(){var t=function(){},e=window;e.adobe=e.adobe||{},e.adobe.target={VERSION:"",event:{},___bootstrap:t,getOffer:t,applyOffer:t,trackEvent:t,registerExtension:t},e.mboxCreate=t,e.mboxDefine=t,e.mboxUpdate=t}function Li(t,r,o){return xu(),t.adobe&&t.adobe.target&&void 0!==t.adobe.target.getOffer?void V(ku):(e(t,r),$i(o),n(o),t.adobe.target.VERSION=ru,t.adobe.target.event={REQUEST_SUCCEEDED:Ed,REQUEST_FAILED:Od,CONTENT_RENDERING_SUCCEEDED:Sd,CONTENT_RENDERING_FAILED:Td},o.enabled?(Eu(),Ei(),vr(),Di(),Ii(),Mi(),t.adobe.target.getOffer=cr,t.adobe.target.applyOffer=ei,t.adobe.target.trackEvent=Ao,t.adobe.target.registerExtension=ci,t.mboxCreate=Ti,t.mboxDefine=Ai,void(t.mboxUpdate=Ci)):(Ri(),void V(Cu)))}if(!qi()||window.targetGlobalSettings&&!1===window.targetGlobalSettings.enabled)return Ri(),void("console"in window&&"warn"in window.console&&window.console.warn("AT: Adobe Target content delivery is disabled. Update your DOCTYPE to support Standards mode."));var Vi,Ui,Hi,zi,Bi,Wi,Zi,Ji,Yi,Xi,Gi,Ki,Qi,tu,eu,nu,ru,ou,iu,uu,su,cu,au,fu,lu,pu,hu,du,bu,vu,mu,yu,gu,wu,xu=function(){(function(t){"console"in this||(this.console=this.console||{}),"log"in this.console||(this.console.log=function(){}),"warn"in this.console||(this.console.warn=function(){}),Function.prototype.bind&&("object"==typeof this.console.log&&(this.console.log=Function.prototype.call.bind(this.console.log,this.console)),"object"==typeof this.console.warn&&(this.console.warn=Function.prototype.call.bind(this.console.warn,this.console)))}).call("object"==typeof window&&window||"object"==typeof self&&self||{})},_u=function(){(function(t){(function(t){if(!("Event"in t))return!1;if("function"==typeof t.Event)return!0;try{return new Event("click"),!0}catch(t){return!1}})(this)||function(){function e(t,e){for(var n=-1,r=t.length;++n<r;)if(n in t&&t[n]===e)return n;return-1}var n={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1},r=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(e,n){if(!e)throw new Error("Not enough arguments");if("createEvent"in document){var r=document.createEvent("Event"),o=!(!n||n.bubbles===t)&&n.bubbles,i=!(!n||n.cancelable===t)&&n.cancelable;return r.initEvent(e,o,i),r}var r=document.createEventObject();return r.type=e,r.bubbles=!(!n||n.bubbles===t)&&n.bubbles,r.cancelable=!(!n||n.cancelable===t)&&n.cancelable,r},r&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:r}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,r=arguments[0],o=arguments[1];if(t===window&&r in n)throw new Error("In IE8 the event: "+r+" is not available on the window object.");t._events||(t._events={}),t._events[r]||(t._events[r]=function(n){var r,o=t._events[n.type].list,i=o.slice(),u=-1,s=i.length;for(n.preventDefault=function(){!1!==n.cancelable&&(n.returnValue=!1)},n.stopPropagation=function(){n.cancelBubble=!0},n.stopImmediatePropagation=function(){n.cancelBubble=!0,n.cancelImmediate=!0},n.currentTarget=t,n.relatedTarget=n.fromElement||null,n.target=n.target||n.srcElement||t,n.timeStamp=(new Date).getTime(),n.clientX&&(n.pageX=n.clientX+document.documentElement.scrollLeft,n.pageY=n.clientY+document.documentElement.scrollTop);++u<s&&!n.cancelImmediate;)u in i&&(r=i[u],-1!==e(o,r)&&"function"==typeof r&&r.call(t,n))},t._events[r].list=[],t.attachEvent&&t.attachEvent("on"+r,t._events[r])),t._events[r].list.push(o)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,n=this,r=arguments[0],o=arguments[1];n._events&&n._events[r]&&n._events[r].list&&-1!==(t=e(n._events[r].list,o))&&(n._events[r].list.splice(t,1),n._events[r].list.length||(n.detachEvent&&n.detachEvent("on"+r,n._events[r]),delete n._events[r]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var r=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+n,r)};this.attachEvent("on"+n,r)}this.fireEvent("on"+n,t)}catch(r){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))}(),"CustomEvent"in this&&("function"==typeof this.CustomEvent||this.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)||(this.CustomEvent=function(t,e){if(!t)throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');var n;if(e=e||{bubbles:!1,cancelable:!1,detail:null},"createEvent"in document)try{n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail)}catch(r){n=document.createEvent("Event"),n.initEvent(t,e.bubbles,e.cancelable),n.detail=e.detail}else n=new Event(t,e),n.detail=e&&e.detail||null;return n},CustomEvent.prototype=Event.prototype)}).call("object"==typeof window&&window||"object"==typeof self&&self||{})},Eu=function(){_u()},Ou={},Su="//cdn.tt.omtrdc.net/cdn/target-vec.js",Tu="",ju=function(t){var e=function(){function e(t){return null==t?String(t):Y[X.call(t)]||"object"}function n(t){return"function"==e(t)}function r(t){return null!=t&&t==t.window}function o(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(t){return"object"==e(t)}function u(t){return i(t)&&!r(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){var e=!!t&&"length"in t&&t.length,n=S.type(t);return"function"!=n&&!r(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function c(t){return N.call(t,function(t){return null!=t})}function a(t){return t.length>0?S.fn.concat.apply([],t):t}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function p(t,e){return"number"!=typeof e||F[f(t)]?e:e+"px"}function h(t){var e,n;return I[t]||(e=D.createElement(t),D.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),I[t]=n),I[t]}function d(t){return"children"in t?P.call(t.children):S.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function b(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function v(t,e,n){for(O in e)n&&(u(e[O])||tt(e[O]))?(u(e[O])&&!u(t[O])&&(t[O]={}),tt(e[O])&&!tt(t[O])&&(t[O]=[]),v(t[O],e[O],n)):e[O]!==E&&(t[O]=e[O])}function m(t,e){return null==e?S(t):S(t).filter(e)}function y(t,e,r,o){return n(e)?e.call(t,r,o):e}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function w(t,e){var n=t.className||"",r=n&&n.baseVal!==E;if(e===E)return r?n.baseVal:n;r?n.baseVal=e:t.className=e}function x(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(e){return t}}function _(t,e){e(t);for(var n=0,r=t.childNodes.length;n<r;n++)_(t.childNodes[n],e)}var E,O,S,T,j,A,C=[],k=C.concat,N=C.filter,P=C.slice,D=t.document,I={},M={},F={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},q=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,V=/([A-Z])/g,U=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],z=D.createElement("table"),B=D.createElement("tr"),W={tr:D.createElement("tbody"),tbody:z,thead:z,tfoot:z,td:B,th:B,"*":D.createElement("div")},Z=/complete|loaded|interactive/,J=/^[\w-]*$/,Y={},X=Y.toString,G={},K=D.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly",'for':"htmlFor",'class':"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},tt=Array.isArray||function(t){return t instanceof Array};return G.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,o=t.parentNode,i=!o;return i&&(o=K).appendChild(t),r=~G.qsa(o,e).indexOf(t),i&&K.removeChild(t),r},j=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},A=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},G.fragment=function(t,e,n){var r,o,i;return $.test(t)&&(r=S(D.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===E&&(e=q.test(t)&&RegExp.$1),e in W||(e="*"),i=W[e],i.innerHTML=""+t,r=S.each(P.call(i.childNodes),function(){i.removeChild(this)})),u(n)&&(o=S(r),S.each(n,function(t,e){U.indexOf(t)>-1?o[t](e):o.attr(t,e)})),r},G.Z=function(t,e){return new b(t,e)},G.isZ=function(t){return t instanceof G.Z},G.init=function(t,e){var r;if(!t)return G.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&q.test(t))r=G.fragment(t,RegExp.$1,e),t=null;else{if(e!==E)return S(e).find(t);r=G.qsa(D,t)}else{if(n(t))return S(D).ready(t);if(G.isZ(t))return t;if(tt(t))r=c(t);else if(i(t))r=[t],t=null;else if(q.test(t))r=G.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==E)return S(e).find(t);r=G.qsa(D,t)}}return G.Z(r,t)},S=function(t,e){return G.init(t,e)},S.extend=function(t){var e,n=P.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){v(t,n,e)}),t},G.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],i=r||o?e.slice(1):e,u=J.test(i);return t.getElementById&&u&&r?(n=t.getElementById(i))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:P.call(u&&!r&&t.getElementsByClassName?o?t.getElementsByClassName(i):t.getElementsByTagName(e):t.querySelectorAll(e))},S.contains=D.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},S.type=e,S.isFunction=n,S.isWindow=r,S.isArray=tt,S.isPlainObject=u,S.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},S.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},S.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},S.camelCase=j,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.noop=function(){},S.map=function(t,e){var n,r,o,i=[];if(s(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&i.push(n);else for(o in t)null!=(n=e(t[o],o))&&i.push(n);return a(i)},S.each=function(t,e){var n,r;if(s(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},S.grep=function(t,e){return N.call(t,e)},t.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Y["[object "+e+"]"]=e.toLowerCase()}),S.fn={constructor:G.Z,length:0,forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,splice:C.splice,indexOf:C.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=G.isZ(e)?e.toArray():e;return k.apply(G.isZ(this)?this.toArray():this,n)},map:function(t){return S(S.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return S(P.apply(this,arguments))},ready:function(t){return Z.test(D.readyState)&&D.body?t(S):D.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===E?P.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){for(var e,n=this.length,r=0;r<n&&(e=this[r],!1!==t.call(e,r,e));)r++;return this},filter:function(t){return n(t)?this.not(this.not(t)):S(N.call(this,function(e){return G.matches(e,t)}))},add:function(t,e){return S(A(this.concat(S(t,e))))},is:function(t){return this.length>0&&G.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==E)this.each(function(n){t.call(this,n)||e.push(this)});else{var r="string"==typeof t?this.filter(t):s(t)&&n(t.item)?P.call(t):S(t);this.forEach(function(t){r.indexOf(t)<0&&e.push(t)})}return S(e)},has:function(t){return this.filter(function(){return i(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:S(t)},find:function(t){var e=this;return t?"object"==typeof t?S(t).filter(function(){var t=this;return C.some.call(e,function(e){return S.contains(e,t)})}):1==this.length?S(G.qsa(this[0],t)):this.map(function(){return G.qsa(this,t)}):S()},closest:function(t,e){var n=[],r="object"==typeof t&&S(t);return this.each(function(i,u){for(;u&&!(r?r.indexOf(u)>=0:G.matches(u,t));)u=u!==e&&!o(u)&&u.parentNode;u&&n.indexOf(u)<0&&n.push(u)}),S(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=S.map(n,function(t){if((t=t.parentNode)&&!o(t)&&e.indexOf(t)<0)return e.push(t),t});return m(e,t)},parent:function(t){return m(A(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||P.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return N.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var r=S(t).get(0),o=r.parentNode||this.length>1;return this.each(function(n){S(this).wrapAll(e?t.call(this,n):o?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var e;(e=t.children()).length;)t=e.first();S(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var r=S(this),o=r.contents(),i=e?t.call(this,n):t;o.length?o.wrapAll(i):r.append(i)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=S(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;S(this).empty().append(y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(O in t)g(this,O,t[O]);else g(this,t,y(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=Q[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(V,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?x(r):E},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=y(this,t,e,this.value)})):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=S(this),r=y(this,e,t,n.offset()),o=n.offsetParent().offset(),i={top:r.top-o.top,left:r.left-o.left};"static"==n.css("position")&&(i.position="relative"),n.css(i)});if(!this.length)return null;if(D.documentElement!==this[0]&&!S.contains(D.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,n){if(arguments.length<2){var r=this[0];if("string"==typeof t){if(!r)return;return r.style[j(t)]||getComputedStyle(r,"").getPropertyValue(t)}if(tt(t)){if(!r)return;var o={},i=getComputedStyle(r,"");return S.each(t,function(t,e){o[e]=r.style[j(e)]||i.getPropertyValue(e)}),o}}var u="";if("string"==e(t))n||0===n?u=f(t)+":"+p(t,n):this.each(function(){this.style.removeProperty(f(t))});else for(O in t)t[O]||0===t[O]?u+=f(O)+":"+p(O,t[O])+";":this.each(function(){this.style.removeProperty(f(O))});return this.each(function(){this.style.cssText+=";"+u})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&C.some.call(this,function(t){return this.test(w(t))},l(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){T=[];var n=w(this);y(this,t,e,n).split(/\s+/g).forEach(function(t){S(this).hasClass(t)||T.push(t)},this),T.length&&w(this,n+(n?" ":"")+T.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return w(this,"");T=w(this),y(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(l(t)," ")}),w(this,T.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=S(this);y(this,t,n,w(this)).split(/\s+/g).forEach(function(t){(e===E?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=L.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(S(t).css("margin-top"))||0,n.left-=parseFloat(S(t).css("margin-left"))||0,r.top+=parseFloat(S(e[0]).css("border-top-width"))||0,r.left+=parseFloat(S(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||D.body;t&&!L.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(n){var i,u=this[0];return n===E?r(u)?u["inner"+e]:o(u)?u.documentElement["scroll"+e]:(i=this.offset())&&i[t]:this.each(function(e){u=S(this),u.css(t,y(this,n,e,u[t]()))})}}),H.forEach(function(n,r){var o=r%2;S.fn[n]=function(){var n,i,u=S.map(arguments,function(t){var r=[];return n=e(t),"array"==n?(t.forEach(function(t){return t.nodeType!==E?r.push(t):S.zepto.isZ(t)?r=r.concat(t.get()):void(r=r.concat(G.fragment(t)))}),r):"object"==n||null==t?t:G.fragment(t)}),s=this.length>1;return u.length<1?this:this.each(function(e,n){i=o?n:n.parentNode,n=0==r?n.nextSibling:1==r?n.firstChild:2==r?n:null;var c=S.contains(D.documentElement,i),a=/^(text|application)\/(javascript|ecmascript)$/;u.forEach(function(e){if(s)e=e.cloneNode(!0);else if(!i)return S(e).remove();i.insertBefore(e,n),c&&_(e,function(e){if(null!=e.nodeName&&"SCRIPT"===e.nodeName.toUpperCase()&&(!e.type||a.test(e.type.toLowerCase()))&&!e.src){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},S.fn[o?n+"To":"insert"+(r?"Before":"After")]=function(t){return S(t)[n](this),this}}),G.Z.prototype=b.prototype=S.fn,G.uniq=A,G.deserializeValue=x,S.zepto=G,S}();return function(e){function n(t){return t._zid||(t._zid=h++)}function r(t,e,r,u){if(e=o(e),e.ns)var s=i(e.ns);return(m[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||s.test(t.ns))&&(!r||n(t.fn)===n(r))&&(!u||t.sel==u)})}function o(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function u(t,e){return t.del&&!g&&t.e in w||!!e}function s(t){return x[t]||g&&w[t]||t}function c(t,r,i,c,a,l,h){var d=n(t),b=m[d]||(m[d]=[]);r.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var r=o(n);r.fn=i,r.sel=a,r.e in x&&(i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return r.fn.apply(this,arguments)}),r.del=l;var d=l||i;r.proxy=function(e){if(e=f(e),!e.isImmediatePropagationStopped()){e.data=c;var n=d.apply(t,e._args==p?[e]:[e].concat(e._args));return!1===n&&(e.preventDefault(),e.stopPropagation()),n}},r.i=b.length,b.push(r),"addEventListener"in t&&t.addEventListener(s(r.e),r.proxy,u(r,h))})}function a(t,e,o,i,c){var a=n(t);(e||"").split(/\s/).forEach(function(e){r(t,e,o,i).forEach(function(e){delete m[a][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,u(e,c))})})}function f(t,n){if(n||!t.isDefaultPrevented){n||(n=t),e.each(S,function(e,r){var o=n[e];t[e]=function(){return this[r]=_,o&&o.apply(n,arguments)},t[r]=E});try{t.timeStamp||(t.timeStamp=Date.now())}catch(t){}(n.defaultPrevented!==p?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=_)}return t}function l(t){var e,n={originalEvent:t};for(e in t)O.test(e)||t[e]===p||(n[e]=t[e]);return f(n,t)}var p,h=1,d=Array.prototype.slice,b=e.isFunction,v=function(t){return"string"==typeof t},m={},y={},g="onfocusin"in t,w={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",e.event={add:c,remove:a},e.proxy=function(t,r){var o=2 in arguments&&d.call(arguments,2);if(b(t)){var i=function(){return t.apply(r,o?o.concat(d.call(arguments)):arguments)};return i._zid=n(t),i}if(v(r))return o?(o.unshift(t[r],t),e.proxy.apply(null,o)):e.proxy(t[r],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var _=function(){return!0},E=function(){return!1},O=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r,o,i){var u,s,f=this;return t&&!v(t)?(e.each(t,function(t,e){f.on(t,n,r,e,i)}),f):(v(n)||b(o)||!1===o||(o=r,r=n,n=p),o!==p&&!1!==r||(o=r,r=p),!1===o&&(o=E),f.each(function(f,p){i&&(u=function(t){return a(p,t.type,o),o.apply(this,arguments)}),n&&(s=function(t){var r,i=e(t.target).closest(n,p).get(0);if(i&&i!==p)return r=e.extend(l(t),{currentTarget:i,liveFired:p}),(u||o).apply(i,[r].concat(d.call(arguments,1)))}),c(p,t,o,r,n,s||u)}))},e.fn.off=function(t,n,r){var o=this;return t&&!v(t)?(e.each(t,function(t,e){o.off(t,n,e)}),o):(v(n)||b(r)||!1===r||(r=n,n=p),!1===r&&(r=E),o.each(function(){a(this,t,r,n)}))},e.fn.trigger=function(t,n){return t=v(t)||e.isPlainObject(t)?e.Event(t):f(t),t._args=n,this.each(function(){t.type in w&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var o,i;return this.each(function(u,s){o=l(v(t)?e.Event(t):t),o._args=n,o.target=s,e.each(r(s,t.type||t),function(t,e){if(i=e.proxy(o),o.isImmediatePropagationStopped())return!1})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){v(t)||(e=t,t=e.type);var n=document.createEvent(y[t]||"Events"),r=!0;if(e)for(var o in e)"bubbles"==o?r=!!e[o]:n[o]=e[o];return n.initEvent(t,r,!0),f(n)}}(e),function(e){function n(t,n,r){var o=e.Event(n);return e(t).trigger(o,r),!o.isDefaultPrevented()}function r(t,e,r,o){if(t.global)return n(e||x,r,o)}function o(t){t.global&&0==e.active++&&r(t,null,"ajaxStart")}function i(t){t.global&&!--e.active&&r(t,null,"ajaxStop")}function u(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===r(e,n,"ajaxBeforeSend",[t,e]))return!1;r(e,n,"ajaxSend",[t,e])}function s(t,e,n,o){var i=n.context;n.success.call(i,t,"success",e),o&&o.resolveWith(i,[t,"success",e]),r(n,i,"ajaxSuccess",[e,n,t]),a("success",e,n)}function c(t,e,n,o,i){var u=o.context;o.error.call(u,n,e,t),i&&i.rejectWith(u,[n,e,t]),r(o,u,"ajaxError",[n,o,t||e]),a(e,n,o)}function a(t,e,n){var o=n.context;n.complete.call(o,e,t),r(n,o,"ajaxComplete",[e,n]),i(n)}function f(t,e,n){if(n.dataFilter==l)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function l(){}function p(t,n){if(!("type"in t))return e.ajax(t);var r,o=x.createElement("script"),i=function(t){e(o).triggerHandler("error",t||"abort")},a={abort:i};return n&&n.promise(a),e(o).on("load error",function(i,u){clearTimeout(r),e(o).off().remove(),"error"==i.type?c(null,u||"error",a,t,n):s(null,a,t,n)}),!1===u(a,t)?(i("abort"),a):(o.src=t.url,x.head.appendChild(o),t.timeout>0&&(r=setTimeout(function(){i("timeout")},t.timeout)),a)}function h(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==S?"json":E.test(t)?"script":O.test(t)&&"xml")||"text"}function d(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function b(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=d(t.url,t.data),t.data=void 0)}function v(t,n,r,o){return e.isFunction(n)&&(o=r,r=n,n=void 0),e.isFunction(r)||(o=r,r=void 0),{url:t,data:n,success:r,dataType:o}}function m(t,n,r,o){var i,u=e.isArray(n),s=e.isPlainObject(n);e.each(n,function(n,c){i=e.type(c),o&&(n=r?o:o+"["+(s||"object"==i||"array"==i?n:"")+"]"),!o&&u?t.add(c.name,c.value):"array"==i||!r&&"object"==i?m(t,c,r,n):t.add(n,c)})}var y,g,w=+new Date,x=t.document,_=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,E=/^(?:text|application)\/javascript/i,O=/^(?:text|application)\/xml/i,S="application/json",T="text/html",j=/^\s*$/,A=x.createElement("a");A.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,r){if(!("type"in n))return e.ajax(n);var o,i,a=n.jsonpCallback,f=(e.isFunction(a)?a():a)||"Zepto"+w++,l=x.createElement("script"),p=t[f],h=function(t){e(l).triggerHandler("error",t||"abort")},d={abort:h};return r&&r.promise(d),e(l).on("load error",function(u,a){clearTimeout(i),e(l).off().remove(),"error"!=u.type&&o?s(o[0],d,n,r):c(null,a||"error",d,n,r),t[f]=p,o&&e.isFunction(p)&&p(o[0]),p=o=void 0}),!1===u(d,n)?(h("abort"),d):(t[f]=function(){o=arguments},l.src=n.url.replace(/\?(.+)=\?/,"?$1="+f),x.head.appendChild(l),n.timeout>0&&(i=setTimeout(function(){h("timeout")},n.timeout)),d)},e.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:S,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:l},e.ajax=function(n){var r,i,a=e.extend({},n||{}),v=e.Deferred&&e.Deferred();for(y in e.ajaxSettings)void 0===a[y]&&(a[y]=e.ajaxSettings[y]);o(a),a.crossDomain||(r=x.createElement("a"),r.href=a.url,r.href=r.href,a.crossDomain=A.protocol+"//"+A.host!=r.protocol+"//"+r.host),a.url||(a.url=t.location.toString()),(i=a.url.indexOf("#"))>-1&&(a.url=a.url.slice(0,i)),b(a);var m=a.dataType,w=/\?.+=\?/.test(a.url);if(w&&(m="jsonp"),!1!==a.cache&&(n&&!0===n.cache||"script"!=m&&"jsonp"!=m)||(a.url=d(a.url,"_="+Date.now())),"jsonp"==m)return w||(a.url=d(a.url,a.jsonp?a.jsonp+"=?":!1===a.jsonp?"":"callback=?")),e.ajaxJSONP(a,v);if(a.crossDomain&&"script"==m)return p(a,v);var _,E=a.accepts[m],O={},S=function(t,e){O[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(a.url)?RegExp.$1:t.location.protocol,C=a.xhr(),k=C.setRequestHeader;if(v&&v.promise(C),a.crossDomain||S("X-Requested-With","XMLHttpRequest"),S("Accept",E||"*/*"),(E=a.mimeType||E)&&(E.indexOf(",")>-1&&(E=E.split(",",2)[0]),
C.overrideMimeType&&C.overrideMimeType(E)),(a.contentType||!1!==a.contentType&&a.data&&"GET"!=a.type.toUpperCase())&&S("Content-Type",a.contentType||"application/x-www-form-urlencoded"),a.headers)for(g in a.headers)S(g,a.headers[g]);if(C.setRequestHeader=S,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=l,clearTimeout(_);var t,n=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==T){if(m=m||h(a.mimeType||C.getResponseHeader("content-type")),"arraybuffer"==C.responseType||"blob"==C.responseType)t=C.response;else{t=C.responseText;try{t=f(t,m,a),"script"==m?(0,eval)(t):"xml"==m?t=C.responseXML:"json"==m&&(t=j.test(t)?null:e.parseJSON(t))}catch(t){n=t}if(n)return c(n,"parsererror",C,a,v)}s(t,C,a,v)}else c(C.statusText||null,C.status?"error":"abort",C,a,v)}},!1===u(C,a))return C.abort(),c(null,"abort",C,a,v),C;var N=!("async"in a)||a.async;if(C.open(a.type,a.url,N,a.username,a.password),a.xhrFields)for(g in a.xhrFields)C[g]=a.xhrFields[g];for(g in O)k.apply(C,O[g]);return a.timeout>0&&(_=setTimeout(function(){C.onreadystatechange=l,C.abort(),c(null,"timeout",C,a,v)},a.timeout)),C.send(a.data?a.data:null),C},e.get=function(){return e.ajax(v.apply(null,arguments))},e.post=function(){var t=v.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=v.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var o,i=this,u=t.split(/\s/),s=v(t,n,r),c=s.success;return u.length>1&&(s.url=u[0],o=u[1]),s.success=function(t){i.html(o?e("<div>").html(t.replace(_,"")).find(o):t),c&&c.apply(i,arguments)},e.ajax(s),this};var C=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(t)+"="+C(n))},m(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],o=function(t){if(t.forEach)return t.forEach(o);r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,i){n=i.type,e=i.name,e&&"fieldset"!=i.nodeName.toLowerCase()&&!i.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||i.checked)&&o(t(i).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle;t.getComputedStyle=function(t,n){try{return e(t,n)}catch(t){return null}}}}(),function(t){var e=t.zepto,n=e.qsa,r=/^\s*>/,o="Zepto"+ +new Date;e.qsa=function(e,i){var u,s,c=i;try{c?r.test(c)&&(s=t(e).addClass(o),c="."+o+" "+c):c="*",u=n(e,c)}catch(t){throw t}finally{s&&s.removeClass(o)}return u}}(e),e}(window),Au=ju,Cu='Adobe Target content delivery is disabled. Ensure that you can save cookies to your current domain, there is no "mboxDisable" cookie and there is no "mboxDisable" parameter in query string.',ku="Adobe Target has already been initialized.",Nu="options argument is required",Pu="mbox option is required",Du="mbox option is too long",Iu="success option is required",Mu="error option is required",Fu="Disabled due to optout",qu="offer option is required",$u="Actions with missing selectors",Ru="Unexpected error",Lu="actions to be rendered",Vu="request failed",Uu="All actions rendered successfully",Hu="Action rendered successfully",zu="Rendering action",Bu="Action has no content",Wu="Action has no attribute or value",Zu="Action has no property or value",Ju="Action has no height or width",Yu="Action has no left, top or position",Xu="Action has no from or to",Gu="Action has no url",Ku="Action has no click track ID",Qu="Rearrange elements are missing",ts="Loading image",es="Track event request succeeded",ns="Track event request failed",rs="Mbox container not found",os="Rendering mbox",is="Rendering mbox failed",us="ID is missing",ss="No actions to be rendered",cs="Redirect action",as="default to HEAD",fs="document.currentScript is missing or not supported",ls="executing from HTML HEAD",ps="Script load",hs="unknown error",ds=function(t,e){e=e||{};for(var n={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},r=n.parser[e.strictMode?"strict":"loose"].exec(t),o={},i=14;i--;)o[n.key[i]]=r[i]||"";return o[n.q.name]={},o[n.key[12]].replace(n.q.parser,function(t,e,r){e&&(o[n.q.name][e]=r)}),o},bs=Object.getOwnPropertySymbols,vs=Object.prototype.hasOwnProperty,ms=Object.prototype.propertyIsEnumerable,ys=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,o=w(t),i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var u in n)vs.call(n,u)&&(o[u]=n[u]);if(bs){r=bs(n);for(var s=0;s<r.length;s++)ms.call(n,r[s])&&(o[r[s]]=n[r[s]])}}return o},gs=ys,ws=function(t){return t.split("?")[1]||""},xs=function(t,e){e=gs({arrayFormat:"none"},e);var n=x(e),r=Object.create(null);return"string"!=typeof t?r:(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),i=e.length>0?e.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(o),i,r)}),Object.keys(r).sort().reduce(function(t,e){var n=r[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=_(n):t[e]=n,t},Object.create(null))):r},_s=document.createElement("a"),Es={},Os="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ss=Os&&Os.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},Ts=N,js=P,As=D,Cs=Ts,ks=js,Ns=As,Ps=250,Ds="data-at-src",Is="data-at-mbox-name",Ms="-clicked",Fs="mbox-name-",qs="check",$s="mbox",Rs="PC",Ls="session",Vs="mboxEdgeCluster",Us="mboxDebug",Hs="mboxDisable",zs="mboxEdit",Bs="mboxDebug",Ws="mboxDisable",Zs="mboxEdit",Js="true",Ys="AT:",Xs="",Gs="=",Ks="?",Qs="&",tc=".",ec="#",nc="|",rc="_",oc="head",ic="script",uc="style",sc="img",cc="div",ac="a",fc="form",lc="button",pc="input",hc=":eq(",dc=")",bc=hc.length,vc=/((\.|#)\d{1})/g,mc=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){if(e.root="object"==typeof window&&window.window===window&&window||"object"==typeof self&&self.self===self&&self||"object"==typeof Os&&Os.global===Os&&Os,!e.root)throw new Error("RxJS could not find any global context (window, self, global)")}),yc=vt,gc={isFunction:yc},wc=Array.isArray||function(t){return t&&"number"==typeof t.length},xc={isArray:wc},_c=mt,Ec={isObject:_c},Oc={e:{}},Sc={errorObject:Oc},Tc=Sc,jc=gt,Ac={tryCatch:jc},Cc=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},kc=function(t){function e(e){t.call(this),this.errors=e;var n=Error.call(this,e?e.length+" errors occurred during unsubscription:\n  "+e.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"");this.name=n.name="UnsubscriptionError",this.stack=n.stack,this.message=n.message}return Cc(e,t),e}(Error),Nc=kc,Pc={UnsubscriptionError:Nc},Dc=xc,Ic=Ec,Mc=gc,Fc=Ac,qc=Sc,$c=Pc,Rc=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var n=this,r=n._parent,o=n._parents,i=n._unsubscribe,u=n._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var s=-1,c=o?o.length:0;r;)r.remove(this),r=++s<c&&o[s]||null;if(Mc.isFunction(i)){var a=Fc.tryCatch(i).call(this);a===qc.errorObject&&(e=!0,t=t||(qc.errorObject.e instanceof $c.UnsubscriptionError?wt(qc.errorObject.e.errors):[qc.errorObject.e]))}if(Dc.isArray(u))for(s=-1,c=u.length;++s<c;){var f=u[s];if(Ic.isObject(f)){var a=Fc.tryCatch(f.unsubscribe).call(f);if(a===qc.errorObject){e=!0,t=t||[];var l=qc.errorObject.e;l instanceof $c.UnsubscriptionError?t=t.concat(wt(l.errors)):t.push(l)}}}if(e)throw new $c.UnsubscriptionError(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var n=e;switch(typeof e){case"function":n=new t(e);case"object":if(n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if("function"!=typeof n._addParent){var r=n;n=new t,n._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(n),n._addParent(this),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.prototype._addParent=function(t){var e=this,n=e._parent,r=e._parents;n&&n!==t?r?-1===r.indexOf(t)&&r.push(t):this._parents=[t]:this._parent=t},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}(),Lc=Rc,Vc={Subscription:Lc},Uc={closed:!0,next:function(t){},error:function(t){throw t},complete:function(){}},Hc={empty:Uc},zc=mc,Bc=zc.root.Symbol,Wc="function"==typeof Bc&&"function"==typeof Bc['for']?Bc['for']("rxSubscriber"):"@@rxSubscriber",Zc={$$rxSubscriber:Wc},Jc=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Yc=gc,Xc=Vc,Gc=Hc,Kc=Zc,Qc=function(t){function e(n,r,o){switch(t.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=Gc.empty;break;case 1:if(!n){this.destination=Gc.empty;break}if("object"==typeof n){n instanceof e?(this.destination=n,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new ea(this,n));break}default:this.syncErrorThrowable=!0,this.destination=new ea(this,n,r,o)}}return Jc(e,t),e.prototype[Kc.$$rxSubscriber]=function(){return this},e.create=function(t,n,r){var o=new e(t,n,r);return o.syncErrorThrowable=!1,o},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this,e=t._parent,n=t._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=e,this._parents=n,this},e}(Xc.Subscription),ta=Qc,ea=function(t){function e(e,n,r,o){t.call(this),this._parentSubscriber=e;var i,u=this;Yc.isFunction(n)?i=n:n&&(u=n,i=n.next,r=n.error,o=n.complete,Yc.isFunction(u.unsubscribe)&&this.add(u.unsubscribe.bind(u)),u.unsubscribe=this.unsubscribe.bind(this)),this._context=u,this._next=i,this._error=r,this._complete=o}return Jc(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber;if(this._error)e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else{if(!e.syncErrorThrowable)throw this.unsubscribe(),t;e.syncErrorValue=t,e.syncErrorThrown=!0,this.unsubscribe()}}},e.prototype.complete=function(){if(!this.isStopped){var t=this._parentSubscriber;this._complete?t.syncErrorThrowable?(this.__tryOrSetError(t,this._complete),this.unsubscribe()):(this.__tryOrUnsub(this._complete),this.unsubscribe()):this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){throw this.unsubscribe(),t}},e.prototype.__tryOrSetError=function(t,e,n){try{e.call(this._context,n)}catch(e){return t.syncErrorValue=e,t.syncErrorThrown=!0,!0}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(Qc),na={Subscriber:ta},ra=na,oa=Zc,ia=Hc,ua=xt,sa={toSubscriber:ua},ca=mc,aa=_t,fa=_t(ca.root),la={getSymbolObservable:aa,$$observable:fa},pa=mc,ha=sa,da=la,ba=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,o=ha.toSubscriber(t,e,n);if(r?r.call(o,this.source):o.add(this._trySubscribe(o)),o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.syncErrorThrown=!0,t.syncErrorValue=e,t.error(e)}},t.prototype.forEach=function(t,e){var n=this;if(e||(pa.root.Rx&&pa.root.Rx.config&&pa.root.Rx.config.Promise?e=pa.root.Rx.config.Promise:pa.root.Promise&&(e=pa.root.Promise)),!e)throw new Error("no Promise impl found");return new e(function(e,r){var o=n.subscribe(function(e){if(o)try{t(e)}catch(t){r(t),o.unsubscribe()}else t(e)},r,e)})},t.prototype._subscribe=function(t){return this.source.subscribe(t)},t.prototype[da.$$observable]=function(){return this},t.create=function(e){return new t(e)},t}(),va=ba,ma={Observable:va},ya="json",ga="jsonp",wa="html",xa="script",_a="text",Ea="mboxMCAVID",Oa="mboxAAMB",Sa="mboxMCGLH",Ta="mboxMCGVID",ja="mboxMCSDID",Aa="colorDepth",Ca="screenHeight",ka="screenWidth",Na="browserHeight",Pa="browserTimeOffset",Da="browserWidth",Ia="mboxCallback",Ma="mboxTarget",Fa="clickTrackId",qa="mboxXDomain",$a="mboxCount",Ra="mboxHost",La="mbox",Va="mboxPage",Ua="mboxSession",Ha="mboxReferrer",za="mboxTime",Ba="mboxPC",Wa="mboxURL",Za="mboxVersion",Ja="XMLHttpRequest",Ya="withCredentials",Xa="performance",Ga="mark",Ka="measure",Qa="error",tf="warning",ef="disabled",nf="unknown",rf="mark_adobe_target_show_body",of="mark_adobe_target_hide_body",uf="mark_adobe_target_visitor_id_start_",sf="mark_adobe_target_visitor_id_end_",cf="measure_adobe_target_visitor_id",af="mark_adobe_target_request_start_",ff="mark_adobe_target_request_end_",lf="measure_adobe_target_request",pf="mark_adobe_target_render_start_",hf="mark_adobe_target_render_end_",df="measure_adobe_target_render",bf=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},vf=ma,mf=function(t){function e(e){t.call(this),this.scheduler=e}return bf(e,t),e.create=function(t){return new e(t)},e.dispatch=function(t){t.subscriber.complete()},e.prototype._subscribe=function(t){var n=this.scheduler;if(n)return n.schedule(e.dispatch,0,{subscriber:t});t.complete()},e}(vf.Observable),yf=mf,gf={EmptyObservable:yf},wf=It,xf={isPromise:wf},_f=mc,Ef=Mt,Of=Mt(_f.root),Sf={symbolIteratorPonyfill:Ef,$$iterator:Of},Tf=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},jf=na,Af=function(t){function e(e,n,r){t.call(this),this.parent=e,this.outerValue=n,this.outerIndex=r,this.index=0}return Tf(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(jf.Subscriber),Cf=Af,kf={InnerSubscriber:Cf},Nf=mc,Pf=xc,Df=xf,If=Ec,Mf=ma,Ff=Sf,qf=kf,$f=la,Rf=Ft,Lf={subscribeToResult:Rf},Vf=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Uf=na,Hf=function(t){function e(){t.apply(this,arguments)}return Vf(e,t),e.prototype.notifyNext=function(t,e,n,r,o){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(Uf.Subscriber),zf=Hf,Bf={OuterSubscriber:zf},Wf=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Zf=ma,Jf=gf,Yf=xc,Xf=Lf,Gf=Bf,Kf=function(t){function e(e,n){t.call(this),this.sources=e,this.resultSelector=n}return Wf(e,t),e.create=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];if(null===t||0===arguments.length)return new Jf.EmptyObservable;var r=null;return"function"==typeof t[t.length-1]&&(r=t.pop()),1===t.length&&Yf.isArray(t[0])&&(t=t[0]),0===t.length?new Jf.EmptyObservable:new e(t,r)},e.prototype._subscribe=function(t){return new tl(t,this.sources,this.resultSelector)},e}(Zf.Observable),Qf=Kf,tl=function(t){function e(e,n,r){t.call(this,e),this.sources=n,this.resultSelector=r,this.completed=0,this.haveValues=0;var o=n.length;this.total=o,this.values=new Array(o);for(var i=0;i<o;i++){var u=n[i],s=Xf.subscribeToResult(this,u,null,i);s&&(s.outerIndex=i,this.add(s))}}return Wf(e,t),e.prototype.notifyNext=function(t,e,n,r,o){this.values[n]=e,o._hasValue||(o._hasValue=!0,this.haveValues++)},e.prototype.notifyComplete=function(t){var e=this.destination,n=this,r=n.haveValues,o=n.resultSelector,i=n.values,u=i.length;if(!t._hasValue)return void e.complete();if(++this.completed===u){if(r===u){var s=o?o.apply(this,i):i;e.next(s)}e.complete()}},e}(Gf.OuterSubscriber),el={ForkJoinObservable:Qf},nl=el,rl=nl.ForkJoinObservable.create,ol={forkJoin:rl},il=ma,ul=ol;il.Observable.forkJoin=ul.forkJoin;var sl=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},cl=ma,al=function(t){function e(e,n){t.call(this),this.value=e,this.scheduler=n,this._isScalar=!0,n&&(this._isScalar=!1)}return sl(e,t),e.create=function(t,n){return new e(t,n)},e.dispatch=function(t){var e=t.done,n=t.value,r=t.subscriber;if(e)return void r.complete();r.next(n),r.closed||(t.done=!0,this.schedule(t))},e.prototype._subscribe=function(t){var n=this.value,r=this.scheduler;if(r)return r.schedule(e.dispatch,0,{done:!1,value:n,subscriber:t});t.next(n),t.closed||t.complete()},e}(cl.Observable),fl=al,ll={ScalarObservable:fl},pl=qt,hl={isScheduler:pl},dl=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},bl=ma,vl=ll,ml=gf,yl=hl,gl=function(t){function e(e,n){t.call(this),this.array=e,this.scheduler=n,n||1!==e.length||(this._isScalar=!0,this.value=e[0])}return dl(e,t),e.create=function(t,n){return new e(t,n)},e.of=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];var r=t[t.length-1];yl.isScheduler(r)?t.pop():r=null;var o=t.length;return o>1?new e(t,r):1===o?new vl.ScalarObservable(t[0],r):new ml.EmptyObservable(r)},e.dispatch=function(t){var e=t.array,n=t.index,r=t.count,o=t.subscriber;if(n>=r)return void o.complete();o.next(e[n]),o.closed||(t.index=n+1,this.schedule(t))},e.prototype._subscribe=function(t){var n=this.array,r=n.length,o=this.scheduler;if(o)return o.schedule(e.dispatch,0,{array:n,index:0,count:r,subscriber:t});for(var i=0;i<r&&!t.closed;i++)t.next(n[i]);t.complete()},e}(bl.Observable),wl=gl,xl={ArrayObservable:wl},_l=xl,El=_l.ArrayObservable.of,Ol={of:El},Sl=ma,Tl=Ol;Sl.Observable.of=Tl.of;var jl=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Al=ma,Cl=function(t){function e(e,n){t.call(this),this.error=e,this.scheduler=n}return jl(e,t),e.create=function(t,n){return new e(t,n)},e.dispatch=function(t){var e=t.error;t.subscriber.error(e)},e.prototype._subscribe=function(t){var n=this.error,r=this.scheduler;if(r)return r.schedule(e.dispatch,0,{error:n,subscriber:t});t.error(n)},e}(Al.Observable),kl=Cl,Nl={ErrorObservable:kl},Pl=Nl,Dl=Pl.ErrorObservable.create,Il={_throw:Dl},Ml=ma,Fl=Il;Ml.Observable['throw']=Fl._throw;var ql=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},$l=na,Rl=$t,Ll=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new Ul(t,this.project,this.thisArg))},t}(),Vl=Ll,Ul=function(t){function e(e,n,r){t.call(this,e),this.project=n,this.count=0,this.thisArg=r||this}return ql(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}($l.Subscriber),Hl={map:Rl,MapOperator:Vl},zl=ma,Bl=Hl;zl.Observable.prototype.map=Bl.map;var Wl=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Zl=Lf,Jl=Bf,Yl=Rt,Xl=function(){function t(t,e,n){void 0===n&&(n=Number.POSITIVE_INFINITY),this.project=t,this.resultSelector=e,this.concurrent=n}return t.prototype.call=function(t,e){return e.subscribe(new Kl(t,this.project,this.resultSelector,this.concurrent))},t}(),Gl=Xl,Kl=function(t){function e(e,n,r,o){void 0===o&&(o=Number.POSITIVE_INFINITY),t.call(this,e),this.project=n,this.resultSelector=r,this.concurrent=o,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}return Wl(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){this.add(Zl.subscribeToResult(this,t,e,n))},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},e.prototype.notifyNext=function(t,e,n,r,o){this.resultSelector?this._notifyResultSelector(t,e,n,r):this.destination.next(e)},e.prototype._notifyResultSelector=function(t,e,n,r){var o;try{o=this.resultSelector(t,e,n,r)}catch(t){return void this.destination.error(t)}this.destination.next(o)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(Jl.OuterSubscriber),Ql=Kl,tp={mergeMap:Yl,MergeMapOperator:Gl,MergeMapSubscriber:Ql},ep=ma,np=tp;ep.Observable.prototype.mergeMap=np.mergeMap,ep.Observable.prototype.flatMap=np.mergeMap;var rp=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},op=Vc,ip=function(t){function e(e,n){t.call(this)}return rp(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(op.Subscription),up=ip,sp={Action:up},cp=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},ap=mc,fp=sp,lp=function(t){function e(e,n){t.call(this,e,n),this.scheduler=e,this.work=n,this.pending=!1}return cp(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t,this.pending=!0;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),ap.root.setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){return void 0===n&&(n=0),null!==n&&this.delay===n?e:ap.root.clearInterval(e)&&void 0||void 0},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(t){n=!0,r=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.delay=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null))},e}(fp.Action),pp=lp,hp={AsyncAction:pp},dp=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=Date.now?Date.now:function(){return+new Date},t}(),bp=dp,vp={Scheduler:bp},mp=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},yp=vp,gp=function(t){function e(){t.apply(this,arguments),this.actions=[],this.active=!1,this.scheduled=void 0}return mp(e,t),e.prototype.flush=function(t){var e=this.actions;if(this.active)return void e.push(t);var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}},e}(yp.Scheduler),wp=gp,xp={AsyncScheduler:wp},_p=hp,Ep=xp,Op=new Ep.AsyncScheduler(_p.AsyncAction),Sp={async:Op},Tp=Lt,jp={isDate:Tp},Ap=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Cp=Sp,kp=jp,Np=Bf,Pp=Lf,Dp=Vt,Ip=function(){function t(t,e,n,r){this.waitFor=t,this.absoluteTimeout=e,this.withObservable=n,this.scheduler=r}return t.prototype.call=function(t,e){return e.subscribe(new Mp(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))},t}(),Mp=function(t){function e(e,n,r,o,i){t.call(this),this.destination=e,this.absoluteTimeout=n,this.waitFor=r,this.withObservable=o,this.scheduler=i,this.timeoutSubscription=void 0,this.index=0,this._previousIndex=0,this._hasCompleted=!1,e.add(this),this.scheduleTimeout()}return Ap(e,t),Object.defineProperty(e.prototype,"previousIndex",{get:function(){return this._previousIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasCompleted",{get:function(){return this._hasCompleted},enumerable:!0,configurable:!0}),e.dispatchTimeout=function(t){var e=t.subscriber,n=t.index;e.hasCompleted||e.previousIndex!==n||e.handleTimeout()},e.prototype.scheduleTimeout=function(){var t=this.index,n={subscriber:this,index:t};this.scheduler.schedule(e.dispatchTimeout,this.waitFor,n),this.index++,this._previousIndex=t},e.prototype._next=function(t){this.destination.next(t),this.absoluteTimeout||this.scheduleTimeout()},e.prototype._error=function(t){this.destination.error(t),this._hasCompleted=!0},e.prototype._complete=function(){this.destination.complete(),this._hasCompleted=!0},e.prototype.handleTimeout=function(){if(!this.closed){var t=this.withObservable;this.unsubscribe(),this.destination.add(this.timeoutSubscription=Pp.subscribeToResult(this,t))}},e}(Np.OuterSubscriber),Fp={timeoutWith:Dp},qp=ma,$p=Fp;qp.Observable.prototype.timeoutWith=$p.timeoutWith;var Rp="mbox",Lp="vst.",Vp=Lp+"trk",Up=Lp+"trks",Hp="getInstance",zp="isAllowed",Bp="getMarketingCloudVisitorID",Wp="getAudienceManagerBlob",Zp="getAnalyticsVisitorID",Jp="getAudienceManagerLocationHint",Yp="getSupplementalDataID",Xp="isOptedOut",Gp="getCustomerIDs",Kp="trackingServer",Qp="trackingServerSecure",th="OptOut",eh=0,nh=o(),rh=o(),oh=1,ih="GET",uh="mboxedge",sh="${clientCode}",ch=["/m2/",sh,"/mbox/json"].join(Xs),ah="//",fh=0,lh="___target_traces",ph=864e5,hh="3rd party cookies disabled",dh="setContent",bh="setText",vh="setJson",mh="setAttribute",yh="setStyle",gh="rearrange",wh="resize",xh="move",_h="remove",Eh="customCode",Oh="appendContent",Sh="redirect",Th="trackClick",jh="signalClick",Ah="insertBefore",Ch="insertAfter",kh="prependContent",Nh="replaceContent",Ph="action",Dh="attribute",Ih="value",Mh="asset",Fh="clickTrackId",qh="content",$h="contentType",Rh="finalHeight",Lh="finalWidth",Vh="height",Uh="width",Hh="finalLeftPosition",zh="finalTopPosition",Bh="left",Wh="top",Zh="position",Jh="from",Yh="to",Xh="url",Gh="includeAllUrlParameters",Kh="passMboxSession",Qh="property",td="priority",ed="selector",nd="cssSelector",rd="style",od="adobe_mc_ref",id="appendSupplementalDataIDTo",ud="true",sd="src",cd="id",ad="class",fd="type",ld=/CLKTRK#(\S+)/,pd=/CLKTRK#(\S+)\s/,hd="mbox",dd=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},bd=na,vd=Bn,md=function(){function t(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}return t.prototype.call=function(t,e){return e.subscribe(new yd(t,this.nextOrObserver,this.error,this.complete))},t}(),yd=function(t){function e(e,n,r,o){t.call(this,e);var i=new bd.Subscriber(n,r,o);i.syncErrorThrowable=!0,this.add(i),this.safeSubscriber=i}return dd(e,t),e.prototype._next=function(t){var e=this.safeSubscriber;e.next(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.next(t)},e.prototype._error=function(t){var e=this.safeSubscriber;e.error(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.error(t)},e.prototype._complete=function(){var t=this.safeSubscriber;t.complete(),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.complete()},e}(bd.Subscriber),gd={_do:vd},wd=ma,xd=gd;wd.Observable.prototype['do']=xd._do,wd.Observable.prototype._do=xd._do;var _d=[ic,"link",uc].join(","),Ed="at-request-succeeded",Od="at-request-failed",Sd="at-content-rendering-succeeded",Td="at-content-rendering-failed",jd="[getOffer()]",Ad="mboxDefault",Cd="at-flicker-control",kd="at-element-marker",Nd="at-element-click-tracking",Pd="at-",Dd="at-body-style",Id="#"+Dd,Md="at-mbox-default-style",Fd=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},qd=mc,$d=ma,Rd=function(t){function e(e,n){t.call(this),this.promise=e,this.scheduler=n}return Fd(e,t),e.create=function(t,n){return new e(t,n)},e.prototype._subscribe=function(t){var e=this,n=this.promise,r=this.scheduler;if(null==r)this._isScalar?t.closed||(t.next(this.value),t.complete()):n.then(function(n){e.value=n,e._isScalar=!0,t.closed||(t.next(n),t.complete())},function(e){
t.closed||t.error(e)}).then(null,function(t){qd.root.setTimeout(function(){throw t})});else if(this._isScalar){if(!t.closed)return r.schedule(Tr,0,{value:this.value,subscriber:t})}else n.then(function(n){e.value=n,e._isScalar=!0,t.closed||t.add(r.schedule(Tr,0,{value:n,subscriber:t}))},function(e){t.closed||t.add(r.schedule(jr,0,{err:e,subscriber:t}))}).then(null,function(t){qd.root.setTimeout(function(){throw t})})},e}($d.Observable),Ld=Rd,Vd={PromiseObservable:Ld},Ud=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Hd=mc,zd=ma,Bd=Sf,Wd=function(t){function e(e,n){if(t.call(this),this.scheduler=n,null==e)throw new Error("iterator cannot be null.");this.iterator=Ar(e)}return Ud(e,t),e.create=function(t,n){return new e(t,n)},e.dispatch=function(t){var e=t.index,n=t.hasError,r=t.iterator,o=t.subscriber;if(n)return void o.error(t.error);var i=r.next();return i.done?void o.complete():(o.next(i.value),t.index=e+1,o.closed?void("function"==typeof r['return']&&r['return']()):void this.schedule(t))},e.prototype._subscribe=function(t){var n=this,r=n.iterator,o=n.scheduler;if(o)return o.schedule(e.dispatch,0,{index:0,iterator:r,subscriber:t});for(;;){var i=r.next();if(i.done){t.complete();break}if(t.next(i.value),t.closed){"function"==typeof r['return']&&r['return']();break}}},e}(zd.Observable),Zd=Wd,Jd=function(){function t(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.length),this.str=t,this.idx=e,this.len=n}return t.prototype[Bd.$$iterator]=function(){return this},t.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.str.charAt(this.idx++)}:{done:!0,value:void 0}},t}(),Yd=function(){function t(t,e,n){void 0===e&&(e=0),void 0===n&&(n=Cr(t)),this.arr=t,this.idx=e,this.len=n}return t.prototype[Bd.$$iterator]=function(){return this},t.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.arr[this.idx++]}:{done:!0,value:void 0}},t}(),Xd=Math.pow(2,53)-1,Gd={IteratorObservable:Zd},Kd=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Qd=ma,tb=ll,eb=gf,nb=function(t){function e(e,n){t.call(this),this.arrayLike=e,this.scheduler=n,n||1!==e.length||(this._isScalar=!0,this.value=e[0])}return Kd(e,t),e.create=function(t,n){var r=t.length;return 0===r?new eb.EmptyObservable:1===r?new tb.ScalarObservable(t[0],n):new e(t,n)},e.dispatch=function(t){var e=t.arrayLike,n=t.index,r=t.length,o=t.subscriber;if(!o.closed){if(n>=r)return void o.complete();o.next(e[n]),t.index=n+1,this.schedule(t)}},e.prototype._subscribe=function(t){var n=this,r=n.arrayLike,o=n.scheduler,i=r.length;if(o)return o.schedule(e.dispatch,0,{arrayLike:r,index:0,length:i,subscriber:t});for(var u=0;u<i&&!t.closed;u++)t.next(r[u]);t.complete()},e}(Qd.Observable),rb=nb,ob={ArrayLikeObservable:rb},ib=ma,ub=function(){function t(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype['do']=function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this['do'](t,e,n)},t.prototype.toObservable=function(){switch(this.kind){case"N":return ib.Observable.of(this.value);case"E":return ib.Observable['throw'](this.error);case"C":return ib.Observable.empty()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):this.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return this.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}(),sb=ub,cb={Notification:sb},ab=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},fb=na,lb=cb,pb=Pr,hb=function(){function t(t,e){void 0===e&&(e=0),this.scheduler=t,this.delay=e}return t.prototype.call=function(t,e){return e.subscribe(new bb(t,this.scheduler,this.delay))},t}(),db=hb,bb=function(t){function e(e,n,r){void 0===r&&(r=0),t.call(this,e),this.scheduler=n,this.delay=r}return ab(e,t),e.dispatch=function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.add(this.scheduler.schedule(e.dispatch,this.delay,new mb(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(lb.Notification.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(lb.Notification.createError(t))},e.prototype._complete=function(){this.scheduleMessage(lb.Notification.createComplete())},e}(fb.Subscriber),vb=bb,mb=function(){function t(t,e){this.notification=t,this.destination=e}return t}(),yb=mb,gb={observeOn:pb,ObserveOnOperator:db,ObserveOnSubscriber:vb,ObserveOnMessage:yb},wb=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},xb=xc,_b=xf,Eb=Vd,Ob=Gd,Sb=xl,Tb=ob,jb=Sf,Ab=ma,Cb=gb,kb=la,Nb=function(t){return t&&"number"==typeof t.length},Pb=function(t){function e(e,n){t.call(this,null),this.ish=e,this.scheduler=n}return wb(e,t),e.create=function(t,n){if(null!=t){if("function"==typeof t[kb.$$observable])return t instanceof Ab.Observable&&!n?t:new e(t,n);if(xb.isArray(t))return new Sb.ArrayObservable(t,n);if(_b.isPromise(t))return new Eb.PromiseObservable(t,n);if("function"==typeof t[jb.$$iterator]||"string"==typeof t)return new Ob.IteratorObservable(t,n);if(Nb(t))return new Tb.ArrayLikeObservable(t,n)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")},e.prototype._subscribe=function(t){var e=this.ish,n=this.scheduler;return null==n?e[kb.$$observable]().subscribe(t):e[kb.$$observable]().subscribe(new Cb.ObserveOnSubscriber(t,n,0))},e}(Ab.Observable),Db=Pb,Ib={FromObservable:Db},Mb=Ib,Fb=Mb.FromObservable.create,qb={from:Fb},$b=ma,Rb=qb;$b.Observable.from=Rb.from;var Lb=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Vb=Bf,Ub=Lf,Hb=Dr,zb=function(){function t(t){this.selector=t}return t.prototype.call=function(t,e){return e.subscribe(new Bb(t,this.selector,this.caught))},t}(),Bb=function(t){function e(e,n,r){t.call(this,e),this.selector=n,this.caught=r}return Lb(e,t),e.prototype.error=function(e){if(!this.isStopped){var n=void 0;try{n=this.selector(e,this.caught)}catch(e){return void t.prototype.error.call(this,e)}this._unsubscribeAndRecycle(),this.add(Ub.subscribeToResult(this,n))}},e}(Vb.OuterSubscriber),Wb={_catch:Hb},Zb=ma,Jb=Wb;Zb.Observable.prototype['catch']=Jb._catch,Zb.Observable.prototype._catch=Jb._catch;var Yb=tp,Xb=Ir,Gb={concatMap:Xb},Kb=ma,Qb=Gb;Kb.Observable.prototype.concatMap=Qb.concatMap;var tv="click",ev="submit",nv="_blank",rv="[trackEvent()]",ov=mc,iv=function(){function t(t){t.requestAnimationFrame?(this.cancelAnimationFrame=t.cancelAnimationFrame.bind(t),this.requestAnimationFrame=t.requestAnimationFrame.bind(t)):t.mozRequestAnimationFrame?(this.cancelAnimationFrame=t.mozCancelAnimationFrame.bind(t),this.requestAnimationFrame=t.mozRequestAnimationFrame.bind(t)):t.webkitRequestAnimationFrame?(this.cancelAnimationFrame=t.webkitCancelAnimationFrame.bind(t),this.requestAnimationFrame=t.webkitRequestAnimationFrame.bind(t)):t.msRequestAnimationFrame?(this.cancelAnimationFrame=t.msCancelAnimationFrame.bind(t),this.requestAnimationFrame=t.msRequestAnimationFrame.bind(t)):t.oRequestAnimationFrame?(this.cancelAnimationFrame=t.oCancelAnimationFrame.bind(t),this.requestAnimationFrame=t.oRequestAnimationFrame.bind(t)):(this.cancelAnimationFrame=t.clearTimeout.bind(t),this.requestAnimationFrame=function(e){return t.setTimeout(e,1e3/60)})}return t}(),uv=iv,sv=new iv(ov.root),cv={RequestAnimationFrameDefinition:uv,AnimationFrame:sv},av=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},fv=hp,lv=cv,pv=function(t){function e(e,n){t.call(this,e,n),this.scheduler=e,this.work=n}return av(e,t),e.prototype.requestAsyncId=function(e,n,r){return void 0===r&&(r=0),null!==r&&r>0?t.prototype.requestAsyncId.call(this,e,n,r):(e.actions.push(this),e.scheduled||(e.scheduled=lv.AnimationFrame.requestAnimationFrame(e.flush.bind(e,null))))},e.prototype.recycleAsyncId=function(e,n,r){if(void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0)return t.prototype.recycleAsyncId.call(this,e,n,r);0===e.actions.length&&(lv.AnimationFrame.cancelAnimationFrame(n),e.scheduled=void 0)},e}(fv.AsyncAction),hv=pv,dv={AnimationFrameAction:hv},bv=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},vv=xp,mv=function(t){function e(){t.apply(this,arguments)}return bv(e,t),e.prototype.flush=function(t){this.active=!0,this.scheduled=void 0;var e,n=this.actions,r=-1,o=n.length;t=t||n.shift();do{if(e=t.execute(t.state,t.delay))break}while(++r<o&&(t=n.shift()));if(this.active=!1,e){for(;++r<o&&(t=n.shift());)t.unsubscribe();throw e}},e}(vv.AsyncScheduler),yv=mv,gv={AnimationFrameScheduler:yv},wv=dv,xv=gv,_v=new xv.AnimationFrameScheduler(wv.AnimationFrameAction),Ev=xc,Ov=qo,Sv={isNumeric:Ov},Tv=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},jv=Sv,Av=ma,Cv=Sp,kv=hl,Nv=jp,Pv=function(t){function e(e,n,r){void 0===e&&(e=0),t.call(this),this.period=-1,this.dueTime=0,jv.isNumeric(n)?this.period=Number(n)<1&&1||Number(n):kv.isScheduler(n)&&(r=n),kv.isScheduler(r)||(r=Cv.async),this.scheduler=r,this.dueTime=Nv.isDate(e)?+e-this.scheduler.now():e}return Tv(e,t),e.create=function(t,n,r){return void 0===t&&(t=0),new e(t,n,r)},e.dispatch=function(t){var e=t.index,n=t.period,r=t.subscriber,o=this;if(r.next(e),!r.closed){if(-1===n)return r.complete();t.index=e+1,o.schedule(t,n)}},e.prototype._subscribe=function(t){var n=this,r=n.period,o=n.dueTime;return n.scheduler.schedule(e.dispatch,o,{index:0,period:r,subscriber:t})},e}(Av.Observable),Dv=Pv,Iv={TimerObservable:Dv},Mv=Iv,Fv=Mv.TimerObservable.create,qv={timer:Fv},$v=ma,Rv=qv;$v.Observable.timer=Rv.timer;var Lv=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Vv=na,Uv=gf,Hv=$o,zv=function(){function t(t,e){this.count=t,this.source=e}return t.prototype.call=function(t,e){return e.subscribe(new Bv(t,this.count,this.source))},t}(),Bv=function(t){function e(e,n,r){t.call(this,e),this.count=n,this.source=r}return Lv(e,t),e.prototype.complete=function(){if(!this.isStopped){var e=this,n=e.source,r=e.count;if(0===r)return t.prototype.complete.call(this);r>-1&&(this.count=r-1),n.subscribe(this._unsubscribeAndRecycle())}},e}(Vv.Subscriber),Wv={repeat:Hv},Zv=ma,Jv=Wv;Zv.Observable.prototype.repeat=Jv.repeat;var Yv=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Xv=Bf,Gv=Lf,Kv=Ro,Qv=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){return e.subscribe(new tm(t,this.notifier))},t}(),tm=function(t){function e(e,n){t.call(this,e),this.notifier=n,this.add(Gv.subscribeToResult(this,n))}return Yv(e,t),e.prototype.notifyNext=function(t,e,n,r,o){this.complete()},e.prototype.notifyComplete=function(){},e}(Xv.OuterSubscriber),em={takeUntil:Kv},nm=ma,rm=em;nm.Observable.prototype.takeUntil=rm.takeUntil;var om=Os&&Os.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},im=na,um=Lo,sm=function(){function t(t){this.predicate=t}return t.prototype.call=function(t,e){return e.subscribe(new cm(t,this.predicate))},t}(),cm=function(t){function e(e,n){t.call(this,e),this.predicate=n,this.index=0}return om(e,t),e.prototype._next=function(t){var e,n=this.destination;try{e=this.predicate(t,this.index++)}catch(t){return void n.error(t)}this.nextOrComplete(t,e)},e.prototype.nextOrComplete=function(t,e){var n=this.destination;Boolean(e)?n.next(t):n.complete()},e}(im.Subscriber),am={takeWhile:um},fm=ma,lm=am;fm.Observable.prototype.takeWhile=lm.takeWhile;var pm,hm,dm="[applyOffer()]",bm=0,vm=function(t){return p(t.found)},mm=function(t){return!p(t[Xh])},ym=function(t){return t[Ph]===Th||t[Ph]===jh},gm="adobe",wm="target",xm="ext",_m=new RegExp("^[a-zA-Z]+$"),Em={},Om={},Sm="[mboxCreate()]",Tm="[mboxDefine()]",jm="[mboxUpdate()]",Am="Unable to load target-vec.js",Cm="Loading target-vec.js",km="_AT",Nm="clickHandlerForExperienceEditor",Pm="[global mbox]",Dm="auto-create disabled",Im="mbox name is blank",Mm="Settings",Fm=["enabled","clientCode","imsOrgId","serverDomain","cookieDomain","crossDomain","timeout","globalMboxAutoCreate","mboxParams","globalMboxParams","defaultContentHiddenStyle","defaultContentVisibleStyle","bodyHidingEnabled","bodyHiddenStyle","selectorsPollingTimeout","visitorApiTimeout","overrideMboxEdgeServer","overrideMboxEdgeServerTimeout","optoutEnabled","secureOnly","supplementalDataIdParamTimeout"],qm={___bootstrap:Li};t.target=qm}(window.adobe=window.adobe||{}),window.adobe.target.___bootstrap(window,document,{"clientCode":"intelcorporation","imsOrgId":"AD2A1C8B53308E600A490D4D@AdobeOrg","serverDomain":"intel.tt.omtrdc.net","crossDomain":"enabled","timeout":5000,"globalMboxName":"target-global-mbox","globalMboxAutoCreate":true,"version":"1.2.3","defaultContentHiddenStyle":"visibility:hidden;","defaultContentVisibleStyle":"visibility:visible;","bodyHiddenStyle":"body{opacity:0!important}","bodyHidingEnabled":true,"deviceIdLifetime":63244800000,"sessionIdLifetime":1860000,"selectorsPollingTimeout":5000,"visitorApiTimeout":2000,"overrideMboxEdgeServer":false,"overrideMboxEdgeServerTimeout":1860000,"optoutEnabled":false,"secureOnly":false,"supplementalDataIdParamTimeout":30});

};

wap_tms.enableTarget = function () {
	window.targetGlobalSettings = {
		globalMboxAutoCreate: false,
		cookieDomain: tmsSetCookieDomain()
	};
	if (typeof wap_tms.utility.wap_loadTarget_tealium == "function")
		wap_tms.utility.wap_loadTarget_tealium();
	window.wap_atjs = {};
	var ga_params = {};
	wap_atjs.integrate_data = true;
	wap_atjs.status = '';
	wap_atjs.error = '';

	wap_atjs.finishRendering = function () {
		if (typeof (wap_atjs) !== 'undefined') wap_atjs.flagSearch = true;
	}

	wap_atjs.checkFlagSearch = function () {
		var length = $('.result-item').length;
		if (length === wap_atjs.resultsLength) {
			wap_atjs.finishRendering();
		} else {
			wap_atjs.resultsLength = length;
		}
	}

	wap_tms.custom.isSearchPage = /search.htm/.test(window.location);

	wap_atjs.getRequest = function (interval, maximum) {
		if (interval == null) interval = 0;
		if (maximum == null) maximum = 0;
		if (wap_tms.custom.isSearchPage) {
			wap_atjs.flagSearch = false;
			wap_atjs.resultsLength = -1;
		}
		//Implementation - Targeted content 
		wap_tms.wapGetCustomOffer = function (wap_count){
			if(typeof wap_tms.custom.target_offers[wap_count] === "object"){
				adobe.target.getOffer({  
				  "mbox": wap_tms.custom.target_offers[wap_count].wap_mbox_name,  
				  "success": function(offers) {          
						adobe.target.applyOffer( { 
						   "mbox": wap_tms.custom.target_offers[wap_count].wap_mbox_name,
						   "offer": offers, 
						   "selector": "#"+wap_tms.custom.target_offers[wap_count].wap_css_generated
						} );
				  },  
				  "error": function(status, error) {          
					  if (console && console.log) {
						console.log(status);
						console.log(error);
					  }
				  },
				 "timeout": 5000
				});
			}
		}
						
		wap_tms.waitForCustomMbox = function(){
			if(typeof wap_tms.custom.target_offers === "object"){
				for(wap_count=0;wap_count<=wap_tms.custom.target_offers.length;wap_count++) {
					wap_tms.wapGetCustomOffer(wap_count);
				}
			}
			else{
				setTimeout(wap_tms.waitForCustomMbox, 250);
			}
		}
		//Call - Targeted content 
		
		wap_tms.waitForCustomMbox();
		
		adobe.target.getOffer({
			"mbox": "target-global-mbox",
			"success": function (offers) {
				if (wap_tms.custom.isSearchPage) {
					var checkFlagSearch = function (max) {
						wap_atjs.checkFlagSearch();
						if (wap_atjs.flagSearch) {
							adobe.target.applyOffer({
								"offer": offers
							});
						} else if (max > 0) setTimeout(function () {
							checkFlagSearch(max - 1);
						}, interval);
					}
					checkFlagSearch(maximum);
				} else {
					adobe.target.applyOffer({
						"offer": offers
					});
				}
				document.documentElement.style.opacity = "1";
			},
			"error": function (status, error) {
				document.documentElement.style.opacity = "1";
				wap_atjs.status = status;
				wap_atjs.error = error;
			}
		});
	}

	if (!wap_tms.custom.isSearchPage) wap_atjs.getRequest();

	document.addEventListener(adobe.target.event.REQUEST_SUCCEEDED, function (e) {		
		wap_tms.target.tokens = e.detail.responseTokens;
		if (!isEmpty(wap_tms.target.tokens)) {			
			var token = wap_tms.target.tokens[0];			
			if(wap_tms.custom.crossdomain_move){				
				if(token["profile.affinity_all_categories"]){
					var allCategories = token["profile.affinity_all_categories"]; 
					allCategories = allCategories.split("|");
					for(var i in allCategories){
						var affinity = allCategories[i].split("~")[0];
						var affinityValue = allCategories[i].split("~")[1].split("^");
						var affinityTop = affinityValue[0];
						var affinityId = affinityValue[1];
						var affinityScore = parseInt(affinityValue[2]);						
						if(affinityTop !== "null" && affinityId !== "null" && affinityScore !== "null" && !isNaN(affinityScore)){
							//If afinity exists
							if(wap_tms.affinities[affinity]){															
								//If MC Score is higher than local stored score
								if(affinityScore > wap_tms.affinities[affinity]["values"][wap_tms.affinities[affinity]["config"]["wap_top1"]].score){
									//If top1 affinity is different									
									wap_tms.affinities[affinity]["config"]["wap_top1"] = affinityTop;									
								}
								//Update affinity if only if user is getting to new content related to top affinity 
								if(wap_tms.affinities[affinity]["config"]["wap_top1"] === affinityTop){
									wap_tms.affinities[affinity]["config"]["wap_top1_entity_id"] = affinityId;
								}								
								//move this out (not only when >)
								if(wap_tms.affinities[affinity]["values"][affinityTop]){
									if(affinityScore > wap_tms.affinities[affinity]["values"][affinityTop].score){
										wap_tms.affinities[affinity]["values"][affinityTop].score = affinityScore;
									}									
								}else{
									wap_tms.affinities[affinity]["values"][affinityTop] = {};
									wap_tms.affinities[affinity]["values"][affinityTop].score = affinityScore;
								}	
								
							}else{
								wap_tms.affinities[affinity] = {};
								wap_tms.affinities[affinity]["values"] = {};
								wap_tms.affinities[affinity]["config"] = {};
								wap_tms.affinities[affinity]["values"][affinityTop] = {};
								wap_tms.affinities[affinity]["values"][affinityTop].score = affinityScore;
								wap_tms.affinities[affinity]["config"]["wap_top1"] = affinityTop;
								wap_tms.affinities[affinity]["config"]["wap_top1_entity_id"] = affinityId;
							}
						}											
					}
				}				
				wap_tms.custom.affinityPageParams();
			}
			utag_data.target_isp_name = token["geo.ispName"];
			wap_tms.idenfityInternalUser();
			wap_tms.target.deviceId = e.detail.tracking.deviceId;
			
			window.wap_at_meta = (typeof(window.wap_at_meta) != 'undefined') ? window.wap_at_meta : [];		
			window.ttMETA = (typeof(window.ttMETA) != 'undefined') ? window.ttMETA : [];			
						
			window.ttMBX = function (x) {
				var mbxList = [];
				for (i = 0; i < ttMETA.length; i++) {
					if (ttMETA[i].mbox == x.getName()) {
						mbxList.push(ttMETA[i])
					}
				}
				return mbxList[x.getId()]
			}
			
			
		}

		function isEmpty(val) {
			return (val === undefined || val == null || val.length <= 0) ? true : false;
		}
	});
	
	document.addEventListener(adobe.target.event.REQUEST_FAILED, function (e) {
		wap_atjs.ga_params = {
			'ga': {
				'dimension40': 'unassigned',
				'dimension76': 'unassigned',
				'dimension77': 'unassigned'
			}
		};
		if (wap_atjs.status != '') {
			if (wap_atjs.error != '') {
				if ((/timeout/.test(wap_atjs.status)) || (/timeout/.test(wap_atjs.error))) {
					wap_atjs.ga_params.ga.metric88 = 1;
					aa_payload.event['85,hit'] = 1;
					wap_tms.error.set('browser,', 'target.timeout:');
				}else{
					aa_payload.event['87,hit'] = 1;	
				}
				wap_atjs.ga_params.ga.metric103 = 1;
				ga_payload.dimension['170,hit'] = wap_atjs.error;
				aa_payload.eVar['69,hit'] = wap_atjs.error;
				aa_payload.prop['51,hit'] = wap_atjs.error;
				wap_tms.error.set(wap_atjs.status + ',', 'target.error:');
			}
		}
		trackGaEvent('Page', 'target integration', '', null, true, '', wap_atjs.ga_params);
	});
	
	document.addEventListener(adobe.target.event.CONTENT_RENDERING_FAILED, function (e) {
		wap_tms.error.set(e.detail.type + ',', 'target.error:'); //i.e.: at-content-rendering-failed
		var activities = [];
		if (!isEmpty(wap_tms.target.tokens)) {
		wap_tms.target.tokens.forEach(function (token) {
				// Extract and process values from tokens and send them as per business requirement.
				/*ga('send', 'event', {
				eventCategory: token["activity.name"],
				eventAction: token["option.id"],
				eventLabel: token["experience.name"]
				});*/				
				if (activities.indexOf(token["activity.id"]) === -1) {
					
					window.ttMETA.push({
						'mbox': e.detail.mbox,
						'campaign': token["activity.name"],
						'experience': token["experience.name"],
						'offer': token["option.name"]
					});
					
					window.wap_at_meta.push({
						'mbox': e.detail.mbox,
						'campaign': token["activity.name"],
						'campaignId': token["activity.id"],
						'experience': token["experience.name"],
						'experienceId': token["experience.id"],
						'offer': token["option.name"],
						'pcId': wap_tms.target.deviceId
					});
					
					var ga_params = {
						'ga': {
							'dimension40': token["experience.name"],
							'dimension76': token["activity.name"],
							'dimension77': token["option.name"],
							'dimension114': wap_tms.target.deviceId
						}
					}
					
					ga_params.ga.metric103 = 1;
					ga_payload.dimension['170,hit'] = e.detail.message; //e.g.: Actions with missing selectors
					aa_payload.eVar['69,hit'] = e.detail.message;
					aa_payload.prop['51,hit'] = e.detail.message;
					aa_payload.event['86,hit'] = 1;				
					trackGaEvent('Page', 'target integration', '', null, true, '', ga_params);
					activities.push(token["activity.id"]);
					var targetIdsTokens = token["activity.id"]+":"+token["experience.id"]+":"+token["option.id"];
					aa_payload.eVar['121,hit'] = targetIdsTokens;
					utag_data.target_activity_ids = targetIdsTokens;
				}
			});
		}
		
		function isEmpty(val) {
			return (val === undefined || val == null || val.length <= 0) ? true : false;
		}
	});
	
	document.addEventListener(adobe.target.event.CONTENT_RENDERING_SUCCEEDED, function (e) {		
		var activities = [];
		if (!isEmpty(wap_tms.target.tokens)) {
		wap_tms.target.tokens.forEach(function (token) {
				// Extract and process values from tokens and send them as per business requirement.
				/*ga('send', 'event', {
				eventCategory: token["activity.name"],
				eventAction: token["option.id"],
				eventLabel: token["experience.name"]
				});*/				
				if (activities.indexOf(token["activity.id"]) === -1) {
					
					window.ttMETA.push({
						'mbox': e.detail.mbox,
						'campaign': token["activity.name"],
						'experience': token["experience.name"],
						'offer': token["option.name"]
					});
					
					window.wap_at_meta.push({
						'mbox': e.detail.mbox,
						'campaign': token["activity.name"],
						'campaignId': token["activity.id"],
						'experience': token["experience.name"],
						'experienceId': token["experience.id"],
						'offer': token["option.name"],
						'pcId': wap_tms.target.deviceId
					});
					
					var ga_params = {
						'ga': {
							'dimension40': token["experience.name"],
							'dimension76': token["activity.name"],
							'dimension77': token["option.name"],
							'dimension114': wap_tms.target.deviceId
						}
					}
					trackGaEvent('Page', 'target integration', '', null, true, '', ga_params);
					activities.push(token["activity.id"]);
				}
			});
		}
			function isEmpty(val) {
				return (val === undefined || val == null || val.length <= 0) ? true : false;
			}
	});
	
	
};


//send mbox conversions to Target
wap_tms.events = wap_tms.events||{};
wap_tms.events.target = function(to, debug) { //called after GA Pageview sent, used to execute code in sequence
    window.targettest = to;

    /* scope examples - configured in Target extention. Values 1) none 2) all 3) primary 4) list
scope = /dmf-kpi-/, //all
scope = /dmf-kpi-(per|pir)$/, //primary
scope = /dmf-kpi-pir-buynow,dmf-kpi-per-clicktoregistration,dmf-kpi-per/, //fire per list
*/

    if (typeof mboxDefine == 'function') { //mbox exists, ok to fire mbox conversion tags 
        var target_name = 'dmf-kpi-',
            send_mbox = function(mbox) {
                if (wap_tms.target_kpi.test(mbox)) { //fire mbox per scope
					adobe.target.trackEvent({
						"mbox": mbox
					});
                }
            };
        for (var key in to) {
            send_mbox(target_name + to[key]);
        }
    }
};

//********** START DCP ******************
wap_tms.dcp_data = {}; //use isntead of mboxDcp_data

function mboxDcp(bk_results) {
    wap_tms.dcp_data.bk_results = bk_results;
}

function rtagDcp(rtag) {
    if (!rtag || rtag.err) {
        //console.log('rtagDcp: ' + rtag.err); 
        wap_tms.error.set('disabled,', 'target.dcp:');
        return;
    }

    wap_tms.dcp_data.rtag = rtag;
    realMboxDcp(wap_tms.dcp_data);
}

function realMboxDcp(dcp_results) {
    var dcp = {};
    for (var key in dcp_results.rtag) {
        if (dcp_results.rtag.hasOwnProperty(key)) {
            //console.log(key + " -> " + dcp_results.rtag[key]);
            dcp[key] = dcp_results.rtag[key];
        }
    }
  
    //config data to send to Target
    if (dcp.result === "true") {
        wap_tms.target.dcp_tag = dcp.tag;
        wap_tms.target.dcp_category = dcp.category;
    }
    wap_tms.enableTarget();
}

//Set referrer or allow hard-coded via querstring name/value pair ?referer=x

function temp_get_referer() {
    var referer = document.location.href;
    var i = referer.indexOf('?referer=');
    referer = (i != -1) ? referer.substring(i + '?referer='.length) : document.referrer;
    return encodeURI(referer);
}
//********** END DCP **************

/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.201802141549, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[function(a,b){ try{ if(b['dom.pathname'].toString().indexOf('/en-us/home')>-1||b['dom.pathname'].toString().indexOf('/en-us/ai')>-1){b['target_load']='true';b['target_kpi']='none';b['target_params_page']='';b['target_params_profile']='';b['target_params_entity']=''} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['wa_section']!='undefined'){b['target_load']='true';b['target_kpi']='none';b['target_params_page']='';b['target_params_profile']='';b['target_params_entity']=''} } catch(e){ utag.DB(e) }  }];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        /* End Tag-Scoped Extensions Code */

		//set Target config values from extension to UDO
		
		//determine if target should be loaded, load if 'true'
		//for testing newer mbox (or at.js) in production you can append ':test=' to include a WAP DAM path/filename. Default is mbox.js but can do 'true:test=mbox_v60.js' or 'true:test=target/mbox.js', etc.
		if (b['target_load'] !== undefined) {
			var target_load_val = b['target_load'];
			if (/:test\=/.test(target_load_val)) {
				var target_load_val_split = target_load_val.split(':test=');
				wap_tms.target_mbox_val = target_load_val_split[1];
				target_load_val = target_load_val_split[0];
			}
			utag_data.target_load = target_load_val;
			if (utag_data.target_load == "true") { 
				var wapTargetVersion = (typeof wap_tms.at_version != 'undefined') ? (wap_tms.target_version+"_atjs:"+wap_tms.at_version+",") : (wap_tms.target_version+"_atjs,");
				wap_tms.version.set(wapTargetVersion, 'target:'); //add to WAP Version config
			}
			else{
				document.documentElement.style.opacity = "1"; //show document since Target is disabled
			}
		}
		if (b['target_load_bluekai'] !== undefined) {
			utag_data.target_load_bluekai = b['target_load_bluekai'];
		}
		if (b['target_kpi'] !== undefined) {
			utag_data.target_kpi = b['target_kpi'].trim();
		}
		utag_data.target_load_dcp = (b['target_load_dcp'] !== undefined) ? b['target_load_dcp'] : 'false';
				
		//DEBUG, force test *** do not uncomment ***
		//b['target_kpi']='none';
		//b['target_kpi']='all';
		//b['target_kpi']='primary';
		//b['target_kpi']='dmf-kpi-per-video50,dmf-kpi-per,dmf-kpi-pir';
		
		//define scope for firing mbox conversion tags
		wap_tms.target_kpi_set = function (){
			var val=/none/; //set default to none if not set
			switch (b['target_kpi']) {
				case "none": //asset counts as 1 page and 1 asset page
					val=/none/;
					break;
				case "all":
					val=/^dmf-kpi/;
					break;
				case "primary":
					val=/^dmf-kpi-(per|pir)$/;
					break;
				default: //list
					var tmp=(b['target_kpi'].replace(/\,/g,"$|"))+"$";	
					val=new RegExp(tmp, "");
					break;
			}
			return val;
		};
		if(typeof b['target_kpi'] != 'undefined')	
			wap_tms.target_kpi=wap_tms.target_kpi_set(); //remember scope for this page
				
		wap_tms.target_set_params = function (str,type) {
			if(str==''){return;}; //exit if blank
			var strTemp,strTemp2;
			str=str.split(',');
			for(var i = 0; i < str.length; i++) {
			  strTmp = str[i].replace(/^\s*/,'').replace(/\s*$/,''); //trim whitespace
			  strTmp2 = (typeof utag_data[strTmp] === "undefined") ? strTmp : utag_data[strTmp]; 
			  if(strTmp!== undefined){
			    if(type=="profile"){wap_tms.target[strTmp] = strTmp2}; //map to UDO elements to Target Profile param
			    if(type=="page"){wap_tms.target_page[strTmp] = strTmp2} //map to UDO elements to Target page param
				if(type=="entity"){ //map to UDO elements to Target page param
					var parseStr = strTmp2.split('='),
					name = parseStr[0],
					val = parseStr[1]+'',
					a = val.split("|"),
					t,
					finalStr = '';
					for (t = 0; t < a.length; t++) {
					  if(a[t].match(/{(.*)}/)){
					    var udoVal = a[t].match(/{(.*)}/).pop();
					    finalStr += b[udoVal] + ":";
					  }else{
					    finalStr += a[t] + ":";
					  }		
					}
					finalStr = finalStr.substring(0, finalStr.length - 1);
					wap_tms.target_entity[name]=finalStr;
				}
			   }
			}
		};
		
		if(typeof b['target_params_profile'] != 'undefined')
			wap_tms.target_set_params(b['target_params_profile'],'profile'); //set profile params
			
		if(typeof b['target_params_page'] != 'undefined')	
			wap_tms.target_set_params(b['target_params_page'],'page'); //set page params
			
		if(b['target_params_entity']!== undefined){ //set entity params if defined
			wap_tms.target_set_params(b['target_params_entity'],'entity');
		}

        /* Start Mapping Code */
        /* for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
			  wap_tms.target[e[f]] = b[d]; //map to Target profile, integrated through targetPageParams()
            }
          }
        } */
        /* End Mapping Code */


        /* Start Tag Sending Code */

          // Insert your tag sending code here.

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        u.loader_cb = function () {
          u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        };

        /* End Loader Callback Function */
		
        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("114", "intel.profile-ssg.intel");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
//~~tv:7110.20140501
//~~tc: Adding support for Display Advertising Features. Adding list of cross-domain tracking domains from tag config.

//configure before GA tag
utag_data.wa_site_id_audience = utag_data.content_audience + ":" + utag_data.content_sub_audience + ":" + utag_data.content_org_initiative + ":" + utag_data.content_sub_org_initiative + ":" + utag_data.content_program + ":" + utag_data.content_product + ":" + utag_data.wa_site_id;

//Init GA object
window['GoogleAnalyticsObject'] = 'gawap';
window['gawap'] = window['gawap'] || function() {
    (window['gawap'].q = window['gawap'].q || []).push(arguments)
}, window['gawap'].l = 1 * new Date();

//START local copy of GA script: //www.google-analytics.com/analytics.js - 05/03/17
//While replacing version of analytics.js- search Math.min(c+e,20) and replace it with Math.min(c+e,40) - for GA to send more than 20 hits at a time.
(function(){var $c=function(a){this.w=a||[]};$c.prototype.set=function(a){this.w[a]=!0};$c.prototype.encode=function(){for(var a=[],b=0;b<this.w.length;b++)this.w[b]&&(a[Math.floor(b/6)]^=1<<b%6);for(b=0;b<a.length;b++)a[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b]||0);return a.join("")+"~"};var vd=new $c;function J(a){vd.set(a)}var Nd=function(a,b){var c=new $c(Dd(a));c.set(b);a.set(Gd,c.w)},Td=function(a){a=Dd(a);a=new $c(a);for(var b=vd.w.slice(),c=0;c<a.w.length;c++)b[c]=b[c]||a.w[c];return(new $c(b)).encode()},Dd=function(a){a=a.get(Gd);ka(a)||(a=[]);return a};var ea=function(a){return"function"==typeof a},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")},D=function(a,b){return 0==a.indexOf(b)},sa=function(a){return a?a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},ga=function(){for(var a=O.navigator.userAgent+(M.cookie?M.cookie:"")+(M.referrer?M.referrer:""),b=a.length,c=O.history.length;0<c;)a+=c--^b++;return[hd()^La(a)&2147483647,Math.round((new Date).getTime()/
1E3)].join(".")},ta=function(a){var b=M.createElement("img");b.width=1;b.height=1;b.src=a;return b},ua=function(){},K=function(a){if(encodeURIComponent instanceof Function)return encodeURIComponent(a);J(28);return a},L=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){J(27)}},f=/^[\w\-:/.?=&%!]+$/,wa=function(a,b,c,d){a&&(c?(d="",b&&f.test(b)&&(d=' id="'+b+'"'),f.test(a)&&M.write("<script"+d+' src="'+a+'">\x3c/script>')):(c=M.createElement("script"),
c.type="text/javascript",c.async=!0,c.src=a,d&&(c.onload=d),b&&(c.id=b),a=M.getElementsByTagName("script")[0],a.parentNode.insertBefore(c,a)))},Ud=function(){return"https:"==M.location.protocol},E=function(a,b){return(a=a.match("(?:&|#|\\?)"+K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==a.length?a[1]:""},xa=function(){var a=""+M.location.hostname;return 0==a.indexOf("www.")?a.substring(4):a},ya=function(a){var b=M.referrer;if(/^https?:\/\//i.test(b)){if(a)return b;a="//"+M.location.hostname;
var c=b.indexOf(a);if(5==c||6==c)if(a=b.charAt(c+a.length),"/"==a||"?"==a||""==a||":"==a)return;return b}},za=function(a,b){if(1==b.length&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=Math.min(a.length+1,b.length),e=0;e<d;e++)if("object"===typeof b[e]){for(var g in b[e])b[e].hasOwnProperty(g)&&(c[g]=b[e][g]);break}else e<a.length&&(c[a[e]]=b[e]);return c};var ee=function(){this.keys=[];this.values={};this.m={}};ee.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[":"+a]=b:this.values[":"+a]=b};ee.prototype.get=function(a){return this.m.hasOwnProperty(":"+a)?this.m[":"+a]:this.values[":"+a]};ee.prototype.map=function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var O=window,M=document;var F=window,G=function(a){var b=F._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===F["ga-disable-"+a])return!0;try{var c=F.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(d){}return!1};var Ca=function(a){var b=[],c=M.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b},zc=function(a,b,c,d,e,g){e=G(e)?!1:eb.test(M.location.hostname)||"/"==c&&vc.test(d)?!1:!0;if(!e)return!1;b&&1200<b.length&&(b=b.substring(0,1200),J(24));c=a+"="+b+"; path="+c+"; ";g&&(c+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");d&&"none"!=d&&(c+="domain="+d+";");d=M.cookie;M.cookie=c;if(!(d=d!=M.cookie))a:{a=
Ca(a);for(d=0;d<a.length;d++)if(b==a[d]){d=!0;break a}d=!1}return d},Cc=function(a){return K(a).replace(/\(/g,"%28").replace(/\)/g,"%29")},vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc=function(){return(Ba||Ud()?"https:":"http:")+"//www.google-analytics.com"},Da=function(a){this.name="len";this.message=a+"-8192"},ba=function(a,b,c){c=c||ua;if(2036>=b.length)wc(a,b,c);else if(8192>=b.length)x(a,b,c)||wd(a,b,c)||wc(a,b,c);else throw ge("len",b.length),new Da(b.length);},wc=function(a,b,c){var d=ta(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},wd=function(a,b,c){var d=O.XMLHttpRequest;if(!d)return!1;var e=new d;if(!("withCredentials"in e))return!1;
e.open("POST",a,!0);e.withCredentials=!0;e.setRequestHeader("Content-Type","text/plain");e.onreadystatechange=function(){4==e.readyState&&(c(),e=null)};e.send(b);return!0},x=function(a,b,c){return O.navigator.sendBeacon?O.navigator.sendBeacon(a,b)?(c(),!0):!1:!1},ge=function(a,b,c){1<=100*Math.random()||G("?")||(a=["t=error","_e="+a,"_v=j53","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+K(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc(oc()+"/collect",a.join("&"),ua))};var h=function(a){var b=O.gaData=O.gaData||{};return b[a]=b[a]||{}};var Ha=function(){this.M=[]};Ha.prototype.add=function(a){this.M.push(a)};Ha.prototype.D=function(a){try{for(var b=0;b<this.M.length;b++){var c=a.get(this.M[b]);c&&ea(c)&&c.call(O,a)}}catch(d){}b=a.get(Ia);b!=ua&&ea(b)&&(a.set(Ia,ua,!0),setTimeout(b,10))};function Ja(a){if(100!=a.get(Ka)&&La(P(a,Q))%1E4>=100*R(a,Ka))throw"abort";}function Ma(a){if(G(P(a,Na)))throw"abort";}function Oa(){var a=M.location.protocol;if("http:"!=a&&"https:"!=a)throw"abort";}
function Pa(a){try{O.navigator.sendBeacon?J(42):O.XMLHttpRequest&&"withCredentials"in new O.XMLHttpRequest&&J(40)}catch(c){}a.set(ld,Td(a),!0);a.set(Ac,R(a,Ac)+1);var b=[];Qa.map(function(c,d){d.F&&(c=a.get(c),void 0!=c&&c!=d.defaultValue&&("boolean"==typeof c&&(c*=1),b.push(d.F+"="+K(""+c))))});b.push("z="+Bd());a.set(Ra,b.join("&"),!0)}
function Sa(a){var b=P(a,gd)||oc()+"/collect",c=P(a,fa);!c&&a.get(Vd)&&(c="beacon");if(c){var d=P(a,Ra),e=a.get(Ia),e=e||ua;"image"==c?wc(b,d,e):"xhr"==c&&wd(b,d,e)||"beacon"==c&&x(b,d,e)||ba(b,d,e)}else ba(b,P(a,Ra),a.get(Ia));b=a.get(Na);b=h(b);c=b.hitcount;b.hitcount=c?c+1:1;b=a.get(Na);delete h(b).pending_experiments;a.set(Ia,ua,!0)}
function Hc(a){(O.gaData=O.gaData||{}).expId&&a.set(Nc,(O.gaData=O.gaData||{}).expId);(O.gaData=O.gaData||{}).expVar&&a.set(Oc,(O.gaData=O.gaData||{}).expVar);var b=a.get(Na);if(b=h(b).pending_experiments){var c=[];for(d in b)b.hasOwnProperty(d)&&b[d]&&c.push(encodeURIComponent(d)+"."+encodeURIComponent(b[d]));var d=c.join("!")}else d=void 0;d&&a.set(m,d,!0)}function cd(){if(O.navigator&&"preview"==O.navigator.loadPurpose)throw"abort";}
function yd(a){var b=O.gaDevIds;ka(b)&&0!=b.length&&a.set("&did",b.join(","),!0)}function vb(a){if(!a.get(Na))throw"abort";};var hd=function(){return Math.round(2147483647*Math.random())},Bd=function(){try{var a=new Uint32Array(1);O.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return hd()}};function Ta(a){var b=R(a,Ua);500<=b&&J(15);var c=P(a,Va);if("transaction"!=c&&"item"!=c){var c=R(a,Wa),d=(new Date).getTime(),e=R(a,Xa);0==e&&a.set(Xa,d);e=Math.round(2*(d-e)/1E3);0<e&&(c=Math.min(c+e,40),a.set(Xa,d));if(0>=c)throw"abort";a.set(Wa,--c)}a.set(Ua,++b)};var Ya=function(){this.data=new ee},Qa=new ee,Za=[];Ya.prototype.get=function(a){var b=$a(a),c=this.data.get(a);b&&void 0==c&&(c=ea(b.defaultValue)?b.defaultValue():b.defaultValue);return b&&b.Z?b.Z(this,a,c):c};var P=function(a,b){a=a.get(b);return void 0==a?"":""+a},R=function(a,b){a=a.get(b);return void 0==a||""===a?0:1*a};Ya.prototype.set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a.hasOwnProperty(d)&&ab(this,d,a[d],c);else ab(this,a,b,c)};
var ab=function(a,b,c,d){if(void 0!=c)switch(b){case Na:wb.test(c)}var e=$a(b);e&&e.o?e.o(a,b,c,d):a.data.set(b,c,d)},bb=function(a,b,c,d,e){this.name=a;this.F=b;this.Z=d;this.o=e;this.defaultValue=c},$a=function(a){var b=Qa.get(a);if(!b)for(var c=0;c<Za.length;c++){var d=Za[c],e=d[0].exec(a);if(e){b=d[1](e);Qa.set(b.name,b);break}}return b},yc=function(a){var b;Qa.map(function(c,d){d.F==a&&(b=d)});return b&&b.name},S=function(a,b,c,d,e){a=new bb(a,b,c,d,e);Qa.set(a.name,a);return a.name},cb=function(a,
b){Za.push([new RegExp("^"+a+"$"),b])},T=function(a,b,c){return S(a,b,c,void 0,db)},db=function(){};var gb=qa(window.GoogleAnalyticsObject)&&sa(window.GoogleAnalyticsObject)||"ga",Ba=!1,hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var Vd=S("useBeacon",void 0,!1),fa=S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");S("screenName","cd");
var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",function(){return M.title||void 0});cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");S("campaignMedium","cm");
S("campaignKeyword","ck");S("campaignContent","cc");var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");S("appName","an");
S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),m=S("exp","exp"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",function(a){return new bb(a[0],"cm"+a[1])});S("linkerParam",void 0,void 0,Bc,db);
var ld=S("usage","_u"),Gd=S("_um");S("forceSSL",void 0,void 0,function(){return Ba},function(a,b,c){J(34);Ba=!!c});var ed=S("_j1","jid"),ia=S("_j2","gjid");cb("\\&(.*)",function(a){var b=new bb(a[0],a[1]),c=yc(a[0].substring(1));c&&(b.Z=function(a){return a.get(c)},b.o=function(a,b,g,ca){a.set(c,g,ca)},b.F=void 0);return b});
var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),V=T("name"),Q=T("clientId","cid"),n=T("clientIdTime"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),
$b=T("legacyCookieDomain"),Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),I=T("_gid","_gid"),ja=T("_ge"),la=T("_gcn"),gd=S("transportUrl"),Md=S("_r","_r");function X(a,b,c,d){b[a]=function(){try{return d&&J(d),c.apply(this,arguments)}catch(e){throw ge("exc",a,e&&e.name),e;}}};var Od=function(a,b,c){this.V=a;this.fa=b;this.$=!1;this.oa=c;this.ea=1},Ed=function(a,b,c){if(a.fa&&a.$)return 0;a.$=!0;if(b){if(a.oa&&R(b,a.oa))return R(b,a.oa);if(0==b.get(dc))return 0}if(0==a.V)return 0;void 0===c&&(c=Bd());return 0==c%a.V?Math.floor(c/a.V)%a.ea+1:0};function fc(){var a,b;if((b=(b=O.navigator)?b.plugins:null)&&b.length)for(var c=0;c<b.length&&!a;c++){var d=b[c];-1<d.name.indexOf("Shockwave Flash")&&(a=d.description)}if(!a)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",e.AllowScriptAccess="always",a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=e.GetVariable("$version")}catch(g){}a&&
(e=a.match(/[\d]+/g))&&3<=e.length&&(a=e[0]+"."+e[1]+" r"+e[2]);return a||void 0};var aa=function(a){var b=Math.min(R(a,dc),100);return La(P(a,Q))%100>=b?!1:!0},gc=function(a){var b={};if(Ec(b)||Fc(b)){var c=b[Eb];void 0==c||Infinity==c||isNaN(c)||(0<c?(Y(b,Gb),Y(b,Jb),Y(b,Ib),Y(b,Fb),Y(b,Hb),Y(b,Kb),Y(b,Lb),a(b)):L(O,"load",function(){gc(a)},!1))}},Ec=function(a){var b=O.performance||O.webkitPerformance,b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;a[Jb]=b.connectEnd-b.connectStart;a[Ib]=
b.responseStart-b.requestStart;a[Fb]=b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;return!0},Fc=function(a){if(O.top!=O)return!1;var b=O.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();if(void 0==c)return!1;a[Eb]=c;return!0},Y=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},Fd=function(a){return function(b){if("pageview"==b.get(Va)&&!a.I){a.I=!0;var c=
aa(b);b=0<E(b.get(kb),"gclid").length;(c||b)&&gc(function(b){a.send(c?"timing":"adtiming",b)})}}};var hc=!1,mc=function(a){"cookie"==P(a,ac)&&(ma(a,Q,U),a.get(ja)&&ma(a,I,la,864E5))},ma=function(a,b,c,d){var e=nd(a,b);if(e){c=P(a,c);b=kc(P(a,Yb));var g=lc(P(a,W));d=d||1E3*R(a,Zb);var ca=P(a,Na);if("auto"!=g)zc(c,e,b,g,ca,d)&&(hc=!0);else{J(32);a:{e=[];g=xa().split(".");if(4==g.length){var l=g[g.length-1];if(parseInt(l,10)==l){l=["none"];break a}}for(l=g.length-2;0<=l;l--)e.push(g.slice(l).join("."));e.push("none");l=e}for(var k=0;k<l.length;k++)if(g=l[k],a.data.set(W,g),e=nd(a,Q),zc(c,e,b,g,ca,
d)){hc=!0;return}a.data.set(W,"auto")}}else a.get(ja)||J(54)},nc=function(a){if("cookie"==P(a,ac)&&!hc&&(mc(a),!hc))throw"abort";},Yc=function(a){if(a.get(Wc)){var b=P(a,W),c=P(a,$b)||xa(),d=Xc("__utma",c,b);d&&(J(19),a.set(Tc,(new Date).getTime(),!0),a.set(Rc,d.R),(b=Xc("__utmz",c,b))&&d.hash==b.hash&&a.set(Sc,b.R))}},nd=function(a,b){b=Cc(P(a,b));var c=lc(P(a,W)).split(".").length;a=jc(P(a,Yb));1<a&&(c+="-"+a);return b?["GA1",c,b].join("."):""},na=function(a,b){if(b&&!(1>b.length)){for(var c=[],
d=0;d<b.length;d++){var e=b[d].split(".");var g=e.shift();("GA1"==g||"1"==g)&&1<e.length?(g=e.shift().split("-"),1==g.length&&(g[1]="1"),g[0]*=1,g[1]*=1,e={H:g,s:e.join(".")}):e=void 0;e&&c.push(e)}if(1==c.length)return J(13),c[0].s;if(0==c.length)J(12);else{J(14);b=lc(P(a,W)).split(".").length;c=Gc(c,b,0);if(1==c.length)return c[0].s;a=jc(P(a,Yb));c=Gc(c,a,1);return c[0]&&c[0].s}}},Gc=function(a,b,c){for(var d=[],e=[],g,ca=0;ca<a.length;ca++){var l=a[ca];l.H[c]==b?d.push(l):void 0==g||l.H[c]<g?(e=
[l],g=l.H[c]):l.H[c]==g&&e.push(l)}return 0<d.length?d:e},lc=function(a){return 0==a.indexOf(".")?a.substr(1):a},kc=function(a){if(!a)return"/";1<a.length&&a.lastIndexOf("/")==a.length-1&&(a=a.substr(0,a.length-1));0!=a.indexOf("/")&&(a="/"+a);return a},jc=function(a){a=kc(a);return"/"==a?1:a.split("/").length};function Xc(a,b,c){"none"==b&&(b="");var d=[],e=Ca(a);a="__utma"==a?6:2;for(var g=0;g<e.length;g++){var ca=(""+e[g]).split(".");ca.length>=a&&d.push({hash:ca[0],R:e[g],O:ca})}if(0!=d.length)return 1==d.length?d[0]:Zc(b,d)||Zc(c,d)||Zc(null,d)||d[0]}function Zc(a,b){if(null==a)var c=a=1;else c=La(a),a=La(D(a,".")?a.substring(1):"."+a);for(var d=0;d<b.length;d++)if(b[d].hash==c||b[d].hash==a)return b[d]};var od=new RegExp(/^https?:\/\/([^\/:]+)/),pd=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;function Bc(a){var b=a.get(Q);if(a.get(ja)){a=a.get(I);var c=Ic(a+b,0);return"_ga=2."+K(c+"."+a+"-"+b)}c=Ic(b,0);return"_ga=1."+K(c+"."+b)}function Ic(a,b){var c=new Date,d=O.navigator,e=d.plugins||[];a=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b<e.length;++b)a.push(e[b].description);return La(a.join("."))}var Dc=function(a){J(48);this.target=a;this.T=!1};
Dc.prototype.ca=function(a,b){if(a.tagName){if("a"==a.tagName.toLowerCase()){a.href&&(a.href=qd(this,a.href,b));return}if("form"==a.tagName.toLowerCase())return rd(this,a)}if("string"==typeof a)return qd(this,a,b)};
var qd=function(a,b,c){var d=pd.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var e=b.indexOf("?"),d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));return b=b.replace(/&+_ga=/,"&_ga=")},rd=function(a,b){if(b&&b.action)if("get"==b.method.toLowerCase()){a=a.target.get("linkerParam").split("=")[1];for(var c=b.childNodes||[],d=0;d<c.length;d++)if("_ga"==c[d].name){c[d].setAttribute("value",a);return}c=M.createElement("input");
c.setAttribute("type","hidden");c.setAttribute("name","_ga");c.setAttribute("value",a);b.appendChild(c)}else"post"==b.method.toLowerCase()&&(b.action=qd(a,b.action))};
Dc.prototype.S=function(a,b,c){function d(c){try{c=c||O.event;a:{var d=c.target||c.srcElement;for(c=100;d&&0<c;){if(d.href&&d.nodeName.match(/^a(?:rea)?$/i)){var g=d;break a}d=d.parentNode;c--}g={}}("http:"==g.protocol||"https:"==g.protocol)&&sd(a,g.hostname||"")&&g.href&&(g.href=qd(e,g.href,b))}catch(k){J(26)}}var e=this;this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"keyup",d,!1));c&&L(M,"submit",function(b){b=b||O.event;if((b=b.target||b.srcElement)&&b.action){var c=b.action.match(od);c&&sd(a,c[1])&&
rd(e,b)}})};function sd(a,b){if(b==M.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1};var p=/^(GTM|OPT)-[A-Z0-9]+$/,q=/;_gaexp=[^;]*/g,r=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,t=function(a){function b(a,b){b&&(c+="&"+a+"="+K(b))}var c="https://www.google-analytics.com/gtm/js?id="+K(a.id);"dataLayer"!=a.B&&b("l",a.B);b("t",a.target);b("cid",a.ja);b("cidt",a.ka);b("gac",a.la);b("aip",a.ia);a.sync&&b("m","sync");b("cycle",a.G);a.qa&&b("gclid",a.qa);return c};var Jd=function(a,b,c){this.U=ed;this.aa=b;(b=c)||(b=(b=P(a,V))&&"t0"!=b?Wd.test(b)?"_gat_"+Cc(P(a,Na)):"_gat_"+Cc(b):"_gat");this.Y=b},Rd=function(a,b){var c=b.get(Wb);b.set(Wb,function(b){Pd(a,b,a.U);var d=c(b);Qd(a,b);return d});var d=b.get(Xb);b.set(Xb,function(b){var c=d(b);Id(a,b);return c})},Pd=function(a,b,c){b.get(c)||("1"==Ca(a.Y)[0]?b.set(c,"",!0):b.set(c,""+hd(),!0))},Qd=function(a,b){b.get(a.U)&&zc(a.Y,"1",b.get(Yb),b.get(W),b.get(Na),6E4)},Id=function(a,b){if(b.get(a.U)){var c=new ee,
d=function(a){$a(a).F&&c.set($a(a).F,b.get(a))};d(hb);d(ib);d(Na);d(Q);d(Ad);d(a.U);c.set($a(ld).F,Td(b));var e=a.aa;c.map(function(a,b){e+=K(a)+"=";e+=K(""+b)+"&"});e+="z="+hd();ta(e);b.set(a.U,"",!0)}},Wd=/^gtm\d+$/;var fd=function(a,b){a=a.b;if(!a.get("dcLoaded")){Nd(a,29);b=b||{};var c;b[U]&&(c=Cc(b[U]));b=new Jd(a,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",c);Rd(b,a);a.set("dcLoaded",!0)}};var Sd=function(a){if(!a.get("dcLoaded")&&"cookie"==a.get(ac)){Nd(a,51);var b=new Jd(a);Pd(b,a,b.U);Pd(b,a,ia);Qd(b,a);a.get(b.U)&&(a.set(Md,1,!0),a.set(gd,oc()+"/r/collect",!0))}};var Lc=function(){var a=O.gaGlobal=O.gaGlobal||{};return a.hid=a.hid||hd()};var ad,bd=function(a,b,c){if(!ad){var d=M.location.hash;var e=O.name,g=/^#?gaso=([^&]*)/;if(e=(d=(d=d&&d.match(g)||e&&e.match(g))?d[1]:Ca("GASO")[0]||"")&&d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))zc("GASO",""+d,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=e[1],wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+hd(),"_gasojs");ad=!0}};var H=function(a){return a?(1*a).toFixed(3):"0"},da=function(a){var b=O.performance;if(b&&b.getEntriesByName){J(35);var c="https://www.google-analytics.com/analytics.js?wpid="+a;wa(c,void 0,void 0,function(){try{var d=1,e=b.getEntriesByName("https://www.google-analytics.com/analytics.js");e&&0!=e.length||(e=b.getEntriesByName("http://www.google-analytics.com/analytics.js"),d=0);var g=b.getEntriesByName(c);if(e&&1==e.length&&g&&1==g.length){J(37);var ca=e[0],l=g[0],k={tid:a,ad:H(ca.duration),bd:H(l.duration),
ar:H(ca.responseEnd-ca.requestStart),br:H(l.responseEnd-l.requestStart),an:H(ca.domainLookupEnd-ca.domainLookupStart),bn:H(l.domainLookupEnd-l.domainLookupStart),ac:H(ca.connectEnd-ca.connectStart),bc:H(l.connectEnd-l.connectStart),as:d},d=[];d.push("_v=j53");d.push("id=10");for(var w in k)k.hasOwnProperty(w)&&d.push(w+"="+K(k[w]));d.push("z="+hd());wc("https://www.google-analytics.com/u/d",d.join("&"),ua)}}catch(ha){}})}};var wb=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){function b(a,b){d.b.data.set(a,b)}function c(a,c){b(a,c);d.filters.add(a)}var d=this;this.b=new Ya;this.filters=new Ha;b(V,a[V]);b(Na,sa(a[Na]));b(U,a[U]);b(W,a[W]||xa());b(Yb,a[Yb]);b(Zb,a[Zb]);b($b,a[$b]);b(Wc,a[Wc]);b(bc,a[bc]);b(cc,a[cc]);b(Ka,a[Ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(Ad,a[Ad]);b(n,a[n]);b(ja,a[ja]);b(hb,1);b(ib,"j53");c(Qb,Ma);c(dd,cd);c(Rb,Oa);c(md,vb);c(Sb,nc);c(Uc,Yc);c(Tb,Ja);c(Vb,Ta);c(Vc,Hc);c(zd,yd);c(Ld,Sd);c(Wb,
Pa);c(Xb,Sa);c(Cd,Fd(this));Jc(this.b,a[Q]);Kc(this.b);this.b.set(jb,Lc());bd(this.b.get(Na),this.b.get(W),this.b.get(Yb));this.ra=new Od(1E4,!0,"gaexp10")},Jc=function(a,b){if("cookie"==P(a,ac)){hc=!1;var c=Ca(P(a,U));if(!(c=na(a,c))){var c=P(a,W),d=P(a,$b)||xa();c=Xc("__utma",d,c);void 0!=c?(J(10),c=c.O[1]+"."+c.O[2]):c=void 0}c&&(a.data.set(Q,c),c=Ca(P(a,la)),(c=na(a,c))&&a.data.set(I,c),hc=!0)}a:if(c=a.get(cc),c=E(M.location[c?"href":"search"],"_ga"))if(a.get(bc))if(d=c.indexOf("."),-1==d)J(22);
else{var e=c.substring(0,d),g=c.substring(d+1),d=g.indexOf("."),c=g.substring(0,d),g=g.substring(d+1);if("1"==e){if(d=g,c!=Ic(d,0)&&c!=Ic(d,-1)&&c!=Ic(d,-2)){J(23);break a}}else if("2"==e){e=g.split("-",2);d=e[1];if(c!=Ic(e[0]+d,0)&&c!=Ic(e[0]+d,-1)&&c!=Ic(e[0]+d,-2)){J(53);break a}J(2);a.data.set(I,e[0])}else{J(22);break a}J(11);a.data.set(Q,d)}else J(21);b&&(J(9),a.data.set(Q,K(b)));a.get(Q)||((b=(b=O.gaGlobal&&O.gaGlobal.vid)&&-1!=b.search(/^(?:utma\.)?\d+\.\d+$/)?b:void 0)?(J(17),a.data.set(Q,
b)):(J(8),a.data.set(Q,ga())));a.data.set(ja,a.get(ja)||1==Ed(new Od(1,!0),void 0,La(a.get(Q))));a.get(ja)&&(b=P(a,U),a.data.set(la,"_ga"==b?"_gid":b+"_gid"));a.get(ja)&&!a.get(I)&&(J(3),a.data.set(I,ga()));mc(a)},Kc=function(a){var b=O.navigator,c=O.screen,d=M.location;a.set(lb,ya(a.get(ec)));if(d){var e=d.pathname||"";"/"!=e.charAt(0)&&(J(31),e="/"+e);a.set(kb,d.protocol+"//"+d.hostname+e+d.search)}c&&a.set(qb,c.width+"x"+c.height);c&&a.set(pb,c.colorDepth+"-bit");var c=M.documentElement,g=(e=M.body)&&
e.clientWidth&&e.clientHeight,ca=[];c&&c.clientWidth&&c.clientHeight&&("CSS1Compat"===M.compatMode||!g)?ca=[c.clientWidth,c.clientHeight]:g&&(ca=[e.clientWidth,e.clientHeight]);c=0>=ca[0]||0>=ca[1]?"":ca.join("x");a.set(rb,c);a.set(tb,fc());a.set(ob,M.characterSet||M.charset);a.set(sb,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||!1);a.set(nb,(b&&(b.language||b.browserLanguage)||"").toLowerCase());if(d&&a.get(cc)&&(b=M.location.hash)){b=b.split(/[?&#]+/);d=[];for(c=0;c<b.length;++c)(D(b[c],
"utm_id")||D(b[c],"utm_campaign")||D(b[c],"utm_source")||D(b[c],"utm_medium")||D(b[c],"utm_term")||D(b[c],"utm_content")||D(b[c],"gclid")||D(b[c],"dclid")||D(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(kb,a.get(kb)+b))}};pc.prototype.get=function(a){return this.b.get(a)};pc.prototype.set=function(a,b){this.b.set(a,b)};var qc={pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};
pc.prototype.send=function(a){if(!(1>arguments.length)){if("string"===typeof arguments[0]){var b=arguments[0];var c=[].slice.call(arguments,1)}else b=arguments[0]&&arguments[0][Va],c=arguments;b&&(c=za(qc[b]||[],c),c[Va]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={},Ed(this.ra,this.b)&&da(this.b.get(Na)))}};pc.prototype.ma=function(a,b){var c=this;u(a,c,b)||(v(a,function(){u(a,c,b)}),y(String(c.get(V)),a,void 0,b,!0))};var rc=function(a){if("prerender"==M.visibilityState)return!1;a();return!0},z=function(a){if(!rc(a)){J(16);var b=!1,c=function(){if(!b&&rc(a)){b=!0;var d=c,e=M;e.removeEventListener?e.removeEventListener("visibilitychange",d,!1):e.detachEvent&&e.detachEvent("onvisibilitychange",d)}};L(M,"visibilitychange",c)}};var td=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=function(a){if(ea(a[0]))this.u=a[0];else{var b=td.exec(a[0]);null!=b&&4==b.length&&(this.c=b[1]||"t0",this.K=b[2]||"",this.C=b[3],this.a=[].slice.call(a,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(qa(this.a[1])?this.X=this.a[1]:this.W=this.a[1])));b=a[1];a=a[2];if(!this.C)throw"abort";if(this.i&&(!qa(b)||""==b))throw"abort";
if(this.g&&(!qa(b)||""==b||!ea(a)))throw"abort";if(ud(this.c)||ud(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort";}};function ud(a){return 0<=a.indexOf(".")||0<=a.indexOf(":")};var Yd,Zd,$d,A;Yd=new ee;$d=new ee;A=new ee;Zd={ec:45,ecommerce:46,linkid:47};
var u=function(a,b,c){b==N||b.get(V);var d=Yd.get(a);if(!ea(d))return!1;b.plugins_=b.plugins_||new ee;if(b.plugins_.get(a))return!0;b.plugins_.set(a,new d(b,c||{}));return!0},y=function(a,b,c,d,e){if(!ea(Yd.get(b))&&!$d.get(b)){Zd.hasOwnProperty(b)&&J(Zd[b]);if(p.test(b)){J(52);a=N.j(a);if(!a)return!0;c=d||{};d={id:b,B:c.dataLayer||"dataLayer",ia:!!a.get("anonymizeIp"),sync:e,G:!1};a.get("&gtm")==b&&(d.G=!0);var g=String(a.get("name"));"t0"!=g&&(d.target=g);G(String(a.get("trackingId")))||(d.ja=String(a.get(Q)),
d.ka=Number(a.get(n)),c=c.palindrome?r:q,c=(c=M.cookie.replace(/^|(; +)/g,";").match(c))?c.sort().join("").substring(1):void 0,d.la=c,d.qa=E(a.b.get(kb)||"","gclid"));a=d.B;c=(new Date).getTime();O[a]=O[a]||[];c={"gtm.start":c};e||(c.event="gtm.js");O[a].push(c);c=t(d)}!c&&Zd.hasOwnProperty(b)?(J(39),c=b+".js"):J(43);c&&(c&&0<=c.indexOf("/")||(c=(Ba||Ud()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+c),d=ae(c),a=d.protocol,c=M.location.protocol,("https:"==a||a==c||("http:"!=a?0:"http:"==
c))&&B(d)&&(wa(d.url,void 0,e),$d.set(b,!0)))}},v=function(a,b){var c=A.get(a)||[];c.push(b);A.set(a,c)},C=function(a,b){Yd.set(a,b);b=A.get(a)||[];for(var c=0;c<b.length;c++)b[c]();A.set(a,[])},B=function(a){var b=ae(M.location.href);if(D(a.url,"https://www.google-analytics.com/gtm/js?id="))return!0;if(a.query||0<=a.url.indexOf("?")||0<=a.path.indexOf("://"))return!1;if(a.host==b.host&&a.port==b.port)return!0;b="http:"==a.protocol?80:443;return"www.google-analytics.com"==a.host&&(a.port||b)==b&&
D(a.path,"/plugins/")?!0:!1},ae=function(a){function b(a){var b=(a.hostname||"").split(":")[0].toLowerCase(),c=(a.protocol||"").toLowerCase(),c=1*a.port||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";D(a,"/")||(a="/"+a);return[b,""+c,a]}var c=M.createElement("a");c.href=M.location.href;var d=(c.protocol||"").toLowerCase(),e=b(c),g=c.search||"",ca=d+"//"+e[0]+(e[1]?":"+e[1]:"");D(a,"//")?a=d+a:D(a,"/")?a=ca+a:!a||D(a,"?")?a=ca+e[2]+(a||g):0>a.split("/")[0].indexOf(":")&&(a=ca+e[2].substring(0,
e[2].lastIndexOf("/"))+"/"+a);c.href=a;d=b(c);return{protocol:(c.protocol||"").toLowerCase(),host:d[0],port:d[1],path:d[2],query:c.search||"",url:a||""}};var Z={ga:function(){Z.f=[]}};Z.ga();Z.D=function(a){var b=Z.J.apply(Z,arguments),b=Z.f.concat(b);for(Z.f=[];0<b.length&&!Z.v(b[0])&&!(b.shift(),0<Z.f.length););Z.f=Z.f.concat(b)};Z.J=function(a){for(var b,c=[],d=0;d<arguments.length;d++)try{b=new sc(arguments[d]),b.g?C(b.a[0],b.a[1]):(b.i&&(b.ha=y(b.c,b.a[0],b.X,b.W)),c.push(b))}catch(e){}return c};
Z.v=function(a){try{if(a.u)a.u.call(O,N.j("t0"));else{var b=a.c==gb?N:N.j(a.c);if(a.A)"t0"!=a.c||N.create.apply(N,a.a);else if(a.ba)N.remove(a.c);else if(b)if(a.i){if(a.ha&&(a.ha=y(a.c,a.a[0],a.X,a.W)),!u(a.a[0],b,a.W))return!0}else if(a.K){var c=a.C,d=a.a,e=b.plugins_.get(a.K);e[c].apply(e,d)}else b[a.C].apply(b,a.a)}}catch(g){}};var N=function(a){J(1);Z.D.apply(Z,[arguments])};N.h={};N.P=[];N.L=0;N.answer=42;var uc=[Na,W,V];N.create=function(a){var b=za(uc,[].slice.call(arguments));b[V]||(b[V]="t0");var c=""+b[V];if(N.h[c])return N.h[c];b=new pc(b);N.h[c]=b;N.P.push(b);return b};N.remove=function(a){for(var b=0;b<N.P.length;b++)if(N.P[b].get(V)==a){N.P.splice(b,1);N.h[a]=null;break}};N.j=function(a){return N.h[a]};N.getAll=function(){return N.P.slice(0)};
N.N=function(){"ga"!=gb&&J(49);var a=O[gb];if(!a||42!=a.answer){N.L=a&&a.l;N.loaded=!0;var b=O[gb]=N;X("create",b,b.create);X("remove",b,b.remove);X("getByName",b,b.j,5);X("getAll",b,b.getAll,6);b=pc.prototype;X("get",b,b.get,7);X("set",b,b.set,4);X("send",b,b.send);X("requireSync",b,b.ma);b=Ya.prototype;X("get",b,b.get);X("set",b,b.set);if(!Ud()&&!Ba){a:{for(var b=M.getElementsByTagName("script"),c=0;c<b.length&&100>c;c++){var d=b[c].src;if(d&&0==d.indexOf("https://www.google-analytics.com/analytics")){J(33);
b=!0;break a}}b=!1}b&&(Ba=!0)}Ud()||Ba||!Ed(new Od(1E4))||(J(36),Ba=!0);(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc.prototype;C("linker",Dc);X("decorate",b,b.ca,20);X("autoLink",b,b.S,25);C("displayfeatures",fd);C("adfeatures",fd);a=a&&a.q;ka(a)?Z.D.apply(N,a):J(50)}};N.da=function(){for(var a=N.getAll(),b=0;b<a.length;b++)a[b].get(V)};var oa=N.N,pa=O[gb];pa&&pa.r?oa():z(oa);z(function(){Z.D(["provide","render",ua])});function La(a){var b=1,c;if(a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b};})(window);
//END local copy of GA script: //www.google-analytics.com/analytics.js

//START local copy of EC script: https://www.google-analytics.com/plugins/ua/ec.js Updated on: 05/03/17
(function(){var e=window,f="push",k="length",l="prototype",q=function(a){if(a.get&&a.set){this.clear();var d=a.get("buildHitTask");a.set("buildHitTask",n(this,d));a.set("_rlt",p(this,a.get("_rlt")))}},r={action:"pa",promoAction:"promoa",id:"ti",affiliation:"ta",revenue:"tr",tax:"tt",shipping:"ts",coupon:"tcc",step:"cos",label:"col",option:"col",options:"col",list:"pal",listSource:"pls"},t={id:"id",name:"nm",brand:"br",category:"ca",variant:"va",position:"ps",price:"pr",quantity:"qt",coupon:"cc","dimension(\\d+)":"cd",
"metric(\\d+)":"cm"},u={id:"id",name:"nm",creative:"cr",position:"ps"},v=function(a,d){this.name=a;this.source=d;this.e=[]},w="detail checkout checkout_option click add remove purchase refund".split(" ");q[l].clear=function(){this.b=void 0;this.f=[];this.a=[];this.g=[];this.d=void 0};q[l].h=function(a,d){var b=d||{};"promo_click"==a?b.promoAction="click":b.action=a;this.b=x(b)};q[l].j=function(a){(a=x(a))&&this.f[f](a)};
q[l].i=function(a){var d=x(a);if(d){var b,c=a.list||"";a=a.listSource||"";for(var g=0;g<this.a[k];g++)if(this.a[g].name==c){b=this.a[g];break}b||(b=new v(c,a),this.a[f](b));b.e[f](d)}};q[l].c=function(a){(a=x(a))&&this.g[f](a)};var y=function(a,d,b){if("[object Array]"==Object[l].toString.call(Object(a)))for(var c=0;c<a[k];c++)d.call(b,a[c])};
q[l].data=function(a){if(a&&a.ecommerce){a=a.ecommerce;a.promoView&&y(a.promoView.promotions,this.c,this);a.promoClick&&(this.h("promo_click",a.promoClick.actionField),y(a.promoClick.promotions,this.c,this));for(var d=0;d<w[k];d++){var b=a[w[d]];if(b){this.h(w[d],b.actionField);y(b.products,this.j,this);break}}y(a.impressions,this.i,this);a.currencyCode&&(this.d=a.currencyCode)}};
var n=function(a,d){return function(b){var c,g,h;a.b&&z(r,a.b,b,"&");for(c=0;c<a.f[k];c++)g="&pr"+(c+1),z(t,a.f[c],b,g);for(c=0;c<a.a[k];c++){h=a.a[c];g="&il"+(c+1);h.name&&b.set(g+"nm",h.name,!0);h.source&&b.set(g+"ls",h.source,!0);for(var m=0;m<h.e[k];m++)z(t,h.e[m],b,g+"pi"+(m+1))}for(c=0;c<a.g[k];c++)g="&promo"+(c+1),z(u,a.g[c],b,g);a.d&&b.set("&cu",a.d,!0);a.clear();return d(b)}},p=function(a,d){return function(b){var c=a.b&&a.b.action;if("purchase"!=c&&"refund"!=c)return d(b)}},x=function(a){var d=
0,b={};if(a&&"object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c],d++);return d?b:void 0},z=function(a,d,b,c){for(var g in d)if(d.hasOwnProperty(g))for(var h in a)if(a.hasOwnProperty(h)){var m=g.match("^"+h+"$");m&&b.set(c+a[h]+m.slice(1).join(""),d[g],!0)}};
(function(){e.gaplugins=e.gaplugins||{};e.gaplugins.EC=q;q[l].setAction=q[l].h;q[l].addProduct=q[l].j;q[l].addImpression=q[l].i;q[l].addPromo=q[l].c;q[l].clear=q[l].clear;q[l].data=q[l].data;var a=e.GoogleAnalyticsObject||"ga";e[a]=e[a]||function(){(e[a].q=e[a].q||[])[f](arguments)};e[a]("provide","ec",q)})();})();
//END local copy of EC script: https://www.google-analytics.com/plugins/ua/ec.js

var wap_ga = {}; //object for GA script usage
wap_ga.tms = {}; //hold TMS mappings
wap_ga.udo = {}; //hold GA UDO elements mapped to GA tag
wap_ga.qs = {}; //hold querstrings
wap_ga.config = {}; //config settings & functions
wap_ga.campaign = {}; //campaign settings & functions
wap_ga.ulit = {}; //utilities settings & functions

//tealium universal tag - utag.sender.7110 ut4.0.201802141549, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{
    (function(id,loader,u){
        try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
        u.ev={'view':1,'link':1};
        u.o=window[window.GoogleAnalyticsObject];
        u.cookieDomain="" || utag.loader.lh();
        u.created=false;
        u.name="gawap";
        window.ga_trackerName="gawap";
        u.account="UA-35949610-9";
        window.ga_account="UA-35949610-9";
        u.anonymizeIp=("true"==="true"?true:false);
        window.ga_anonymizeip=("true"==="true"?true:false);
        u.allowLinker=true;
        u.crossDomainTrack = ".intel";
        wap_ga.tms.enhancedLinkAttribution = "false";
        u.displayfeatures = "true";

        // TODO: Provide UI config option to call create before the Extensions run (if not using dynamic accounts)

      u.map={"wa_geo":"dimension1","wa_local":"dimension2","wa_section":"dimension3","wa_visit_id":"dimension100","wa_site_id":"dimension4","wa_site_id_audience":"dimension5","wa_org2":"dimension6","wa_page_type_micro":"dimension13","wa_page_type_macro":"dimension14","wa_login":"dimension15","wa_english_title":"dimension16","wa_target_audience":"dimension17","wa_resource_type":"dimension18","content_org_initiative":"dimension20","content_product":"dimension22","wa_product_id":"dimension24","wa_personalization_segment":"dimension26","wa_campaign":"dimension30","wa_metrics_campaign":"dimension31","wa_intel_technology":"dimension32","wa_metrics_segment":"dimension33","wa_system_type":"dimension34","wa_program_level":"dimension35","wa_sales_life_cycle":"dimension36","wa_topic":"dimension37","wa_applications":"dimension38","wa_intel_platform":"dimension39","wa_internal_search_referrer":"dimension42","wa_zero_search_results":"dimension43","content_audience":"dimension58","content_program":"dimension62","content_sub_audience":"dimension63","wa_profile_id":"dimension102","wa_business_id":"dimension103","wa_program_id":"dimension104","wa_elq_id":"dimension105","wa_sprinklr_id":"dimension108","wa_org3":"dimension7","wa_org4":"dimension8","wa_org5":"dimension9","wa_org6":"dimension10","wa_org7":"dimension11","wa_org8":"dimension12","wa_do_not_track":"dimension59","wa_campaign_cid":"dimension107","wa_user_task":"dimension65","wa_product_name":"dimension23","wa_external_id":"dimension109","wa_rwd":"dimension60","wa_error":"dimension66","wa_transl_status":"dimension73","wa_author":"dimension74","shop_manufacturer":"dimension44","shop_processor":"dimension45","shop_model":"dimension47","shop_formFactor":"dimension49","wa_elq_id_short":"dimension115","content_sub_org_initiative":"dimension25","element_header_version":"dimension50","element_header_chosen":"dimension51","element_header_subnav":"dimension52","element_header_geo":"dimension53","element_footer_chosen":"dimension54","elg_optin_channel":"dimension127","elg_optin_consumer":"dimension130","elg_optin_education":"dimension129","elg_optin_embedded":"dimension128","elg_optin_itdm":"dimension126","elq_industry":"dimension182","content_ter_initiative":"dimension143","content_sub_ter_initiative":"dimension144","wa_secondary_audience":"dimension146","wa_onresearch_id":"dimension118","content_industry":"dimension147","wa_product_id_secondary":"dimension132","wa_erpm_id":"dimension120","wa_erpm_bus_id":"dimension121","wa_programidentifier":"dimension84","wa_internal_promotion":"dimension86","wp_post_tags":"dimension87","wa_data_view_name":"dimension145","wa_program_lang":"dimension154","wa_software":"dimension155","wa_ssg_uuid":"dimension156","wa_page_id":"dimension152","wa_os":"dimension153","wa_zone":"dimension157","wa_custom_content_group":"dimension113","wa_cquser_coverage_type":"dimension119","wa_erpm_org_id":"dimension159","wa_google_click_id":"dimension92","wa_membership_group":"dimension97","wa_job_group":"dimension93","wa_reference_design":"dimension94","wa_codename":"dimension95","wa_intel_campaign":"dimension96","dnb_company":"dimension124","dnb_duns":"dimension123","dnb_ultimateduns":"dimension125","dnb_naicscode":"dimension137","dnb_itexpense":"dimension177","dnb_jobfuncion":"dimension172","dnb_jobseniority":"dimension171","dnb_naicsdescription":"dimension138","dnb_siccode":"dimension175","dnb_sicdescription":"dimension176","dnb_status":"dimension122","dnb_zip":"dimension131","wa_clicktale_id":"dimension99","element_header_locale":"dimension179","element_header_render":"dimension178","wa_master_account_id":"dimension180","wa_org9":"dimension181","elq_marketing_audience":"dimension183","elq_company_size":"dimension184","elq_country":"dimension185","elq_job_function":"dimension186","wa_amc_id":"dimension188","dnb_country":"dimension194"};
  u.extend=[];

        u.send=function(a,b){
            if(u.ev[a]||typeof u.ev.all!="undefined"){
      
              
                var c,d,e,f,g;
                for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){
                    u[e[f]]=b[d];
                    wap_ga.tms[e]=b[d]; //GA dimension to value mapping
                    wap_ga.udo[d]=b[d]; //GA UDO to value mapping, only includes UDO elements which are mapped to GA tag
                }}}

                //var id='tealium-tag-7110';
            }
        }
        try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
    })('127','intel.profile-ssg.intel');
}catch(e){}
//end tealium universal tag
//*********************************************************************************************
//* GA Custom Code                                                                            *
//*********************************************************************************************
        
//*********************************************************************************************
//* Config                                                                                    *
//*********************************************************************************************
wap_tms.version.set('2.30,','ga:'); //update version for earch release
if(typeof utag.data["ut.version"] !== "undefined"){wap_tms.version.set(utag.data["ut.version"]+"_"+utag.data["ut.profile"]+"_"+utag.data["ut.env"]+",",'tms:');}; //set Tealium version if available
wap_ga.doc = document;
wap_ga.win = window;
wap_ga.undef = undefined;
wap_ga.noset = 'unassigned';
wap_ga.env = (typeof wa_env !== "undefined") ? wa_env : true; //if wa_env is set we use that value otherwise set to 'true' when publishing to production, and 'false' when testing in pre-prod;
wap_ga.scroll = (typeof waTrackScroll !== "undefined") ? waTrackScroll : true; //if set to true then enable scroll tracking, default = true
wap_ga.wa_local = (typeof utag_data.wa_local !== "undefined") ? utag_data.wa_local : wap_ga.noset; //required for UA - TMS
wap_ga.section = (typeof utag_data.wa_section !== "undefined") ? utag_data.wa_section : wap_ga.noset; //required for UA - TMS
wap_ga.autofire = (typeof ga_auto_fire !== "undefined") ? ga_auto_fire : true; //set to false if you don't want the pageview to automatically occur on loading this script
wap_ga.pagename = (typeof ga_page_name !== "undefined") ? ga_page_name : '';
wap_ga.pagetitle = (typeof ga_page_title !== "undefined") ? ga_page_title : wap_ga.doc.title;
wap_ga.location = (typeof ga_page_location !== "undefined") ? ga_page_location : '';
wap_ga.callback = (typeof ga_callback !== "undefined") ? ga_callback : wap_ga.undef; //set callback function if set otherwise leave undefined
wap_ga.allowhash = (typeof ga_allow_hash !== "undefined") ? ga_allow_hash : false; //configure ga page to capture hash as part of URL, default is false
wap_ga.pageToLowercase = (typeof ga_page_to_lowercase !== "undefined") ? ga_page_to_lowercase : true; //optional: if set to true then we don't convert page to lowercase. This use case supports the Page Analytics Chrome plugin where it can't find pages.
wap_ga.avoidEventBeforePageView = true; // Delay hits so we can avoid sessions issue
wap_ga.delayedHits = (typeof ga_delayed_hits !== "undefined") ? ga_delayed_hits : false; //optional: if set to true then GA hits could be sent with a delay.
wap_ga.pagegroup = (typeof ga_page_group !== "undefined") ? ga_page_group : location.pathname; //optional page group
wap_ga.sitespeed = (wap_ga.win.ga_setSampleRate) ? wap_ga.win.ga_setSampleRate : 0; //set sample rate for Site Speed reports, default is 100%
wap_ga.user_agent = utag_data.user_agent;
wap_ga.name = (typeof ga_trackerName !== "undefined") ? "gawap" : "gawap"; //unique GA tracker object reference to avoid conflicts w/ other GA impelementations
wap_ga.qs.cid = tmsGetParamByName('cid'); //paid search, should be set with SEM campaigns
wap_ga.qs.eid = tmsGetParamByName('eid'); //SiteCatalyst legacy email/external ID tracking
wap_ga.qs.dfaid = tmsGetParamByName('dfaid'); //SiteCatalyst legacy DCM tagging
wap_ga.qs.dclid = tmsGetParamByName('dclid'); //DCM auto-tagging
wap_ga.qs.gclid = tmsGetParamByName('gclid'); //AdWords auto-tagging
wap_ga.qs.utm = tmsGetParamByName('utm_campaign'); //UTM manual tagging
wap_ga.pageViewTracked = false;
wap_ga.registrationFormName = "false";
wap_ga.qs.wapkw = tmsGetParamByName('wapkw'); //internal search click-through
wap_ga.campaign = (wap_ga.qs.cid || wap_ga.qs.eid) ? true : false; //check if click came from a paid campaign

wap_ga.config.campaign = function () {
    if (wap_ga.qs.utm) { wap_ga.campaign = false; } //if utm_source param found set to 'false' so we can use utm params exactly as set
    if (wap_ga.qs.dclid) { wap_ga.campaign = false; } //don't manual tag camapign if DoubleClick auto-tagging found
    if (wap_ga.qs.gclid) { wap_ga.campaign = false; } //don't manual tag camapign if AdWords auto-tagging found
    if (wap_ga.qs.cid) { ga_payload.dimension['107,page'] = wap_ga.qs.cid; } //set querystring cid value to Campaign ID (cd107)
    var errorType = 'campaign.other:', error = '', errorVal = '', errorwapkw = (wap_ga.qs.wapkw) ? 'internal search hard-coded,' : '';
    var errordouble = (/\?(.*)\?/.test(window.location)) ? 'illegal double ? in querystring,' : '';
    if (wap_ga.campaign) {
        ga_payload.metric['9,hit'] = '1'; //Page Views - campaigns
        ga_payload.dimension['27,hit'] = 'load';
        ga_payload.dimension['28,hit'] = 'load:page:std';
    }
    else {
        ga_payload.metric['8,hit'] = '1'; //Page Views - non-campaigns
        ga_payload.dimension['27,hit'] = 'load';
        ga_payload.dimension['28,hit'] = 'load:page:std';
    }

    //Error tracking
    //SEM
    if (wap_ga.qs.cid || wap_ga.qs.gclid) {
        //SEM Adwords
        if (wap_ga.qs.gclid) {
            errorType = "campaign.sem.google:";
            error += (wap_ga.qs.cid) ? '' : 'no campaign id,';
            error += (wap_ga.qs.utm) ? 'manual tagging with auto-tagging,' : '';
        }
        else { //Other
            errorType = "campaign.sem.other:";
            error += (wap_ga.qs.utm) ? '' : 'no utm tagging,';
        }
        error += errorwapkw + errordouble;
    }

    //DCM error tracking
    if (wap_ga.qs.dfaid || wap_ga.qs.dclid) {
        errorType = "campaign.dcm:";
        error += (wap_ga.qs.dfaid) ? '' : 'no dfaid,';
        error += (/%/.test(wap_ga.qs.dclid)) ? '% encoding error,' : '';
        error += (wap_ga.qs.dclid) ? '' : 'no auto-tagging,';
        error += (wap_ga.qs.utm) ? 'manual tagging with auto-tagging,' : '';
        error += errorwapkw + errordouble;
    }

    //capture campaign error
    if (error != '') {
        wap_tms.error.set(error, errorType);
    }

};
wap_ga.config.pageErrors = function () {
    var error = '', errorType = 'page.load:';
    error += (utag_data.wa_geo !== 'unassigned') ? '' : 'geo not set,';
    error += (utag_data.wa_local !== 'unassigned') ? '' : 'local code not set,';
    error += (utag_data.wa_section !== 'unassigned') ? '' : 'section not set,';
    if (error != '') {
        wap_tms.error.set(error, errorType);
    }
};

//sets GA opt-out cookie
wap_ga.config.optout = function () {
    var date = new Date();
    date.setTime(date.getTime() + (730 * 24 * 3600 * 1000)); //2yrs
    tms_doc.cookie = "gawap_optout=true; expires=" + date.toGMTString() + "; path=/; domain=" + tms_domain;
};


/*
wap_ga.config.pagePerformance = function () {
    // skip all collections if the timer is not present - no big deal
    if(!window.performance || !performance.timing) return;
    
    

    if(wap_tms.jquery.ver_1_7_plus){(function($){
        $(window).load( function(){
            //Calling the function to check for ad blockers
            if(wap_tms.custom.adblockers.check){
                wap_tms.custom.adblockers.wacheckAds();
            }
            setTimeout( function(){ // the 0 second delay is made so loadEventEnd value gets populated      
                if (performance.timing.loadEventEnd > 0) {
                    var loadTime = Number(performance.timing.loadEventEnd - performance.timing.navigationStart), //calculate percieved load time
                    nav_start = performance.timing.navigationStart,
                    first_byte = performance.timing.responseStart-nav_start,
                    dom_ready = performance.timing.domContentLoadedEventEnd-nav_start;
                    loadTimeSec = loadTime/1000; //convert to second
                    loadTimeSec = (Math.round(loadTimeSec*4)/4)+""; //round to closest 250ms & convert to string
                    //console.log("responseStart(First byte): " + first_byte+"ms\ndomContentLoadedEventEnd (DOM ready): " + dom_ready+"ms\nLoad Time (user-perceived): " + loadTime+"ms" +"\nloadTimeSec: " +loadTimeSec);
                    
                    if (loadTime >= 100000 || loadTime < 0 || dom_ready >= 100000 || dom_ready < 0 || first_byte >= 100000 || first_byte < 0) {return;} //if load time is greater than 100,000 MS do not send call. This is to fix for a IE9 bug that sends incorrect numbers skewing data
                    var ga_params = {'ga':{'metric76':loadTime,'metric81':first_byte,'metric82':dom_ready,'dimension135':'','dimension158':loadTimeSec}};
                    ga_payload.dimension['158,page'] = loadTimeSec;
                    //Setting custom dimension for ad blocker tracking
                    if(wap_tms.custom.adblockers.check){
                        ga_params.ga.dimension135=wa_adblocker_checker;
                    }
                    
					//Capture adobe Marketing cloud ID
					ga_payload.dimension['188,page'] = utag_data.wa_amc_id ;
					
                    //START temp code to capture font, OK to remove after 07/01/16
                    var font_check = function() {
                        try{
                            if(utag_data.wa_section!=="intc"){
                                var body=document.body;
                                var fs=(body.currentStyle || (window.getComputedStyle&&getComputedStyle(body,null)) || body.style).fontFamily;
                                ga_params.ga.dimension148 = fs;
                            }
                        }catch(e){};
                    };
                    font_check();
                    //END temp code
                    
					if(!wap_tms.unavLoad){
						wap_tms.integrateHeaderFooter(false);
					}

					
                    trackGaEvent('Page','real user monitoring','',null,true,'',ga_params);
                }
            }, 0);
            
            wa_utag_data = utag_data;
            
            setTimeout( function(){
                if(typeof utag_data.tag_id_onload !== 'undefined'){
                    var tags = utag_data.tag_id_onload .split(',');
                    for (i = 0; i < tags.length; i++) {
                        utag.view({}, null, [tags[i]]);
                    }
                }
            }, 200);

            
            });
    }($wap));}
};

*/

wap_tms.custom.pagePerformanceData = function (){
		if (!window.performance || !performance.timing) return;
		if (wap_tms.jquery.ver_1_7_plus) {

			//Calling the function to check for ad-blockers.
			if(wap_tms.custom.adblockers.check){
				wap_tms.custom.adblockers.wacheckAds();
			}

		
			//(function($) {
				setTimeout(function() {
				if (performance.timing.loadEventEnd > 0) {
						var loadTime = Number(performance.timing.loadEventEnd - performance.timing.navigationStart),
							nav_start = performance.timing.navigationStart,
							first_byte = performance.timing.responseStart - nav_start,
							dom_ready = performance.timing.domContentLoadedEventEnd - nav_start;
						loadTimeSec = loadTime / 1000;
						loadTimeSec = (Math.round(loadTimeSec * 4) / 4) + "";
						if (loadTime >= 100000 || loadTime < 0 || dom_ready >= 100000 || dom_ready < 0 || first_byte >= 100000 || first_byte < 0) {
							return;
						}
						var ga_params = {
							'ga': {
								'metric76': loadTime,
								'metric81': first_byte,
								'metric82': dom_ready,
								'dimension135': '',
								'dimension158': loadTimeSec
							}
						};
						ga_payload.dimension['158,page'] = loadTimeSec;
						if (wap_tms.custom.adblockers.check) {
							ga_params.ga.dimension135 = wa_adblocker_checker;
						}
						ga_payload.dimension['188,page'] = utag_data.wa_amc_id;
						var font_check = function() {
							try {
								if (utag_data.wa_section !== "intc") {
									var body = document.body;
									var fs = (body.currentStyle || (window.getComputedStyle && getComputedStyle(body, null)) || body.style).fontFamily;
									ga_params.ga.dimension148 = fs;
								}
							} catch (e) {};
						};
						font_check();
						if (!wap_tms.unavLoad) {
							wap_tms.integrateHeaderFooter(false);
						}
						trackGaEvent('Page', 'real user monitoring', '', null, true, '', ga_params);
				}
			}, 0);	
			
			setTimeout(function() {
				if (typeof utag_data.tag_id_onload !== 'undefined') {
					var tags = utag_data.tag_id_onload.split(',');
					for (i = 0; i < tags.length; i++) {
						utag.view({}, null, [tags[i]]);
					}
				}
			}, 200);
			
			//}($wap));
		}
	};

wap_ga.config.tms_map = function () {
    for (var key in wap_ga.tms) {
        if (wap_ga.tms.hasOwnProperty(key)) {
            if (/dimension/.test(key)) {
                var dimVal = key.split("dimension")[1] + ",page";
                var gk = wap_ga.tms[key];
                if(gk != null){
                    if (/24|50|51|52|53|54|76|92|100|101|102|103|104|105/.test(key)) {/*don't convert to lowercase*/ }
                    else { gk = gk.toLowerCase(); } //convert to lowercase      
                    ga_payload.dimension[dimVal] = gk;
                }                                  
            }
            if (/metric/.test(key)) {
                var dimVal = key.split("dimension")[1] + ",hit";
                ga_payload.metric[dimVal] = wap_ga.tms[key];
            }
            //console.log(key + " = " + wap_ga.tms[key]);
        }
    }
};

var ga_customVars = (wap_ga.win.ga_customVars) ? wap_ga.win.ga_customVars : {}, //GA custom variable object
ga_payload = (typeof ga_payload !== "undefined") ? ga_payload : { "dimension": {}, "metric": {} }, //GA UA payload object for custom dimensions or custom metrics (must be reset with each event)
ga_domain = setCookieDomainGA(), //domain for cookie setting
ua_account = setUaAccount(), //set GA UA account
ga_trackVideoJs = "true", //brightcove SWF looks for value to determine if we use JS tracking or Flash based tracking for videos **Don't REMOVE**
_gaq = _gaq || []; //GA Async object

//Set Eloqua ID to persistent cookie
wap_tms.eloqua.setcookie = function (id) {
    var id = genContactIdShort(id),
    id_ext = genContactId(id);
    utag.loader.SC("utag_main", { "elqid": id });
    wap_tms.eloqua.id = id;
    wap_tms.eloqua.id_ext = id_ext;
};
if (typeof utag_data.wa_elq_id_short !== "undefined") {
    wap_tms.eloqua.setcookie(utag_data.wa_elq_id_short);
}
wap_tms.eloqua.id = (utag.loader.RC("utag_main").elqid != undefined) ? utag.loader.RC("utag_main").elqid : ''; //short ID
wap_tms.eloqua.id_ext = genContactId(wap_tms.eloqua.id); //extended ID
if(wap_tms.eloqua.id!==''){
    utag_data.wa_elq_id = wap_tms.eloqua.id_ext;
    utag_data.wa_elq_id_short = wap_tms.eloqua.id;
}
ga_payload.dimension['105,page'] = wap_tms.eloqua.id_ext;
ga_payload.dimension['115,page'] = wap_tms.eloqua.id;
//END

//cookie functions
function setCookieDomainGA() { var cookieDomain = location.hostname; cookieDomain = cookieDomain.replace(/(.*)\.intel/, ".intel"); return cookieDomain; } function waSetCookieGA(b, c) { var a = new Date(); a.setTime(a.getTime() + (365 * 24 * 3600 * 1000)); wap_ga.doc.cookie = b + "=" + escape(c) + "; expires=" + a.toGMTString() + "; path=/; domain=" + ga_domain } function waNewIdGA() { var a = "{"; for (var b = 1; b <= 32; b++) { var c = Math.floor(Math.random() * 16).toString(16); a += c; if ((b == 8) || (b == 12) || (b == 16) || (b == 20)) { a += "-" } } a += "}"; return a }; function waGetCookieGA(d) { var b = d + "="; var f = b.length; var a = wap_ga.doc.cookie.length; var e = 0; while (e < a) { var c = e + f; if (wap_ga.doc.cookie.substring(e, c) == b) { return waGetCookieValGA(c) } e = wap_ga.doc.cookie.indexOf(" ", e) + 1; if (e == 0) { break } } return null }; function waGetCookieValGA(b) { var a = wap_ga.doc.cookie.indexOf(";", b); if (a == -1) { a = wap_ga.doc.cookie.length } return unescape(wap_ga.doc.cookie.substring(b, a)) };

function setUaAccount() {
    var gaAccount, gaDevAccount;
    //prod
    if (typeof wap_ga.win.ga_account !== "undefined") { gaAccount = wap_ga.win.ga_account; }
    else { gaAccount = 'UA-35949610-1'; } //default

    //prod account override, will ignore value set by TMS tag if set
    if (wa_env) {
        if (typeof wap_ga.win.ga_accountOverride !== "undefined") { gaAccount = wap_ga.win.ga_accountOverride; }
    }

    //dev
    if (typeof wap_ga.win.ga_dev_accounts !== "undefined") { gaDevAccount = wap_ga.win.ga_dev_accounts; }
    else { var gaDevAccount = 'UA-41505236-1'; } //default

    var ga_accounts = (wa_env) ? gaAccount : gaDevAccount;
    if(wa_env){ga_accounts = (wap_tms.events.rlsa_page) ? ga_accounts+',UA-35949610-16' : ga_accounts;} //set for RLSA, temp solution
    return ga_accounts;
}

//*********************************************************************************************
//* Functions                                                                                 *
//*********************************************************************************************

//set page name
wap_ga.config.pagename = function (virtualPage) {
    virtualPage = (typeof virtualPage === "undefined") ? location.pathname : virtualPage; //if undefined set to URL pathname
    virtualPage = (virtualPage == "") ? location.pathname : virtualPage; //if blank set to URL pathname
    virtualPage = (virtualPage.charAt(0) == '/') ? virtualPage : '/' + virtualPage; //check if path starts w/ forward slash, if not add (GA dp field requires)
    virtualPage = (wap_ga.allowhash) ? virtualPage + location.hash : virtualPage;
    virtualPage = wap_tms.cleanPii(virtualPage,'url'); //remove email if in URL
    if(wap_ga.pageToLowercase){virtualPage.toLowerCase();}
    return virtualPage;
};

//track GA page views
//track GA page views
function trackGaPage(virtualPage, callback) {
    ga_customVars.config('page'); //config GA variables accross all hits
    gawap(function () {
        var trackAAPageView = (typeof virtualPage === "string" && virtualPage !== "");
        virtualPage = wap_ga.config.pagename(virtualPage); //set page name
        var trackers = gawap.getAll();
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerId=tracker.get('trackingId'), trackerName = tracker.get('name');
            gawap(trackerName + '.set', 'page', virtualPage); //set pathname so it consitent accross all hits during lifetime of tracker, i.e. page
            if (typeof wap_ga.location != "undefined"){
                if(wap_ga.location!==''){
                    gawap(trackerName + '.set', 'location', wap_ga.location);
                }
            };
            var fo = { //field object
                'metric12': '1',
                'metric31': '1', //scroll baseline
                'metric42': '1',
                'dimension149': wap_tms.events.dmfpoints.pageload.name,
                'metric85': wap_tms.events.dmfpoints.pageload.val,
                'contentGroup1': utag_data.content_audience,
                'contentGroup2': utag_data.content_sub_audience,
                'dimension91': "false",
	        'dimension173' : "unassigned",
                'dimension174' : "unassigned",
                'hitCallback': function () {
                    //if (i == 0) { //track session goals, send only for first tracker
                    wap_tms.events.init('ga'); //init, used to execute code in sequence
                    var uacd_28 = (typeof fo.dimension28 !== "undefined") ? fo.dimension28 : '';
                    var pageTypeAsset = (/(:asset$)/.test(uacd_28)) ? true : false;
                    //}
                    //call callback function if set
                    if (typeof callback !== "undefined") {
                        callback(); //optional call back function
                    }
                }
            };
			var aao = { //field object
                'event1': '1',                                
                'eVar42': wap_tms.events.dmfpoints.pageload.name,
				'prop32': wap_tms.events.dmfpoints.pageload.name,
                'event62': wap_tms.events.dmfpoints.pageload.val,
                'eVar12': utag_data.content_audience,
				'prop12': utag_data.content_audience,
				'eVar13': utag_data.content_sub_audience,
				'prop13': utag_data.content_sub_audience,   
				'eVar117': 'false'
            };
			
	  
	   //Bandwidth dection for mobile

             if (navigator.connection) {
                //Network Information API is supported!
                var typeBandwidth  = navigator.connection.type;
                fo.dimension173 = typeBandwidth;
                if(navigator.connection.downlinkMax) {
                    var isnum = /^[0-9.,]+$/.test(navigator.connection.downlinkMax);
					fo.metric105 = 1;
                    if(isnum){
                       fo.dimension174  = navigator.connection.downlinkMax;
                       fo.metric104 = parseInt(navigator.connection.downlinkMax);  
                    }
                    if(navigator.connection.downlinkMax == Infinity){
                        fo.dimension174  = 100;
                        fo.metric104 = 100;
                    }
                }          
            }
	  
            //Check for internal users
            wap_tms.idenfityInternalUser();
            
            ga_customVars.payload(trackerName, fo); // set custom vars & metrics for tracker
            
            //Check if there are iframe parameters to populate
            if(utag_data.load_iframe_parameters == "true"){
                wap_tms.events.setIframeCampaigns(trackerName);
            }

            //Check if there are any native campaigns
            if(wap_tms.events.isNativeCampaignPresent()){
				wap_tms.utm_medium = "native";			
				wap_tms.utm_campaign = "native_referral";
                wap_tms.events.setNativeCampaigns(trackerName);
            }
            else if ( wap_tms.events.isNativeReferrerPresent()) {
				wap_tms.utm_source = tmsGetParamByName('utm_source', document.referrer) ? tmsGetParamByName('utm_source', document.referrer).toLowerCase() : "NA";
				wap_tms.utm_medium = "native";
				wap_tms.utm_term = tmsGetParamByName('utm_term', document.referrer) ? tmsGetParamByName('utm_term', document.referrer).toLowerCase() : "NA";
				wap_tms.utm_campaign = "native_referral";
				wap_tms.utm_content = tmsGetParamByName('utm_content', document.referrer) ? tmsGetParamByName('utm_content', document.referrer).toLowerCase() : "NA";
                wap_tms.events.setNativeReferrerCampaigns(trackerName);
            }
	  //Need to move this code to lib-global/AA tag.			
	  if(aa_payload !== "undefined" && (utag_data.wa_campaign_cid || wap_tms.utm_source !== "NA")){
	    aa_payload.eVar['29,page'] = (utag_data.wa_campaign_cid ? utag_data.wa_campaign_cid : "NA")+":"+wap_tms.utm_source+":"+wap_tms.utm_medium+":"+wap_tms.utm_term+":"+wap_tms.utm_campaign+":"+wap_tms.utm_content;
	  }
	  
            if(trackerId=='UA-35949610-16'){fo.hitCallback='';} //don't call page callback for RLSA
            
            //E-commerce
            var qs_type = wap_tms.events.dmfpoints.pageload.name;
            var qs_pid = 'p_dmf_qs:'+qs_type;
            var qs_tid = 't_dmf_qs:'+qs_type+'_'+(Math.floor(Math.random()*100000))+''; //transaction ID
            
            gawap(trackerName+'.ec:addProduct', {
                'id': qs_pid,
                'name': 'Quality Score - '+qs_type,
                'category': 'DMF',
                'brand': 'Intel',
                'price': wap_tms.events.dmfpoints.pageload.val,
                'quantity': 1
            });
            
            gawap(trackerName+'.ec:setAction', 'purchase', {
                'id': qs_tid,
                'revenue': wap_tms.events.dmfpoints.pageload.val   
            });
            //E-commerce
            
			//Option to modify document title
			if(typeof wap_ga.pagetitle != "undefined")
				gawap(trackerName + '.set', 'title', wap_ga.pagetitle);
			
            if(wap_ga.delayedHits){
                gaPageViewHit = {
                    "trackerName": trackerName + '.send', 
                    "fo": fo
                }
                wap_tms.custom.delayedPageViewsQueue.push(gaPageViewHit);
            }else{
	    wap_tms.setCleanedLocation(tracker, trackerName);
            gawap(trackerName + '.send', 'pageview', fo);			  
        }
		
		}
		
		//ARK POC to delay hits
		wap_ga.avoidEventBeforePageView = false;    
        wap_tms.custom.sendDelayedHits();
		
		if(trackAAPageView){
			aa_customVars.payload(aao, "page");
			aawap.t();
	    }
    });
}

// Function to set parameters to the iframe
wap_tms.events.setIframeCampaigns = function(trackerName) {
    var iframeUrl = (window.location != window.parent.location) ? document.referrer : document.location;
    var isIframe = (window.location != window.parent.location) ? true : false;
    if(isIframe && document.referrer.indexOf(document.location.host) == -1){
        var newDocumentLocation = document.location.origin + document.location.pathname; //+ document.location.search;     
        if(newDocumentLocation.indexOf("?") == -1){
            newDocumentLocation = newDocumentLocation + iframeUrl.substring(iframeUrl.indexOf("?"));
        }
        else{
            newDocumentLocation = newDocumentLocation + "&" + iframeUrl.substring(iframeUrl.indexOf("?") + 1);
        }
        gawap(trackerName + '.set', 'location', newDocumentLocation);
    }
}

//Function to set Native Campaigns
wap_tms.events.setNativeCampaigns = function(trackerName) {
    var newDocumentLocation = document.location.origin + document.location.pathname + "?utm_source=" + tmsGetParamByName('utm_source').toLowerCase() + "&utm_medium=native&utm_campaign=native_referral" + (tmsGetParamByName('utm_term') ? "&utm_term="+tmsGetParamByName('utm_term').toLowerCase() : "") + (tmsGetParamByName('utm_content') ? "&utm_content="+tmsGetParamByName('utm_content').toLowerCase() : "");
    gawap(trackerName + '.set', 'location', newDocumentLocation);
}

//Function to set Native Referrer Campaigns
wap_tms.events.setNativeReferrerCampaigns = function(trackerName) {
    var regexpReferrer = /(.*)?(outbrain|taboola|accuen|adnboost|buzzfeed|douban|wezeit|zol)(.*)?/;
    var regexpMatching = regexpReferrer.exec(document.referrer);
    var newDocumentLocation = document.location.origin + document.location.pathname + "?utm_source=" + regexpMatching[2].toLowerCase() + "&utm_medium=native&utm_campaign=native_referral" + (tmsGetParamByName('utm_term', document.referrer) ? "&utm_term="+tmsGetParamByName('utm_term', document.referrer).toLowerCase() : "") + (tmsGetParamByName('utm_content', document.referrer) ? "&utm_content="+tmsGetParamByName('utm_content', document.referrer).toLowerCase() : "");
    gawap(trackerName + '.set', 'location', newDocumentLocation);
}
//Function to check Native Campaigns
wap_tms.events.isNativeCampaignPresent = function() {
    if(/(.*)?(utm_source=)(outbrain|taboola|accuen|adnboost|buzzfeed|douban|wezeit|zol)(.*)?/.test(document.location.href)){
        return true;
    }
    return false
}
//Function to check Native Referrer Campaigns
wap_tms.events.isNativeReferrerPresent = function() {
    if(/(.*)?(outbrain|taboola|accuen|adnboost|buzzfeed|douban|wezeit|zol)(.*)?/.test(document.referrer)){
        return true;
    }
    return false
}
wap_tms.events.gaDebug = function (go,event) {
    for (var key in go) { //output GA custom dimension/metrics object
        if (!go.hasOwnProperty(key)) continue;
        var obj = go[key];
        //console.log(key+" = " + obj);
    }
    //prevent user from going to next page
    event.preventDefault();
};
        
wap_tms.events.ga = function (go,opt_noninteraction,debug, event) { //called after GA Pageview sent, used to execute code in sequence
    var fo=go; //set 'go' object to 'fo'
    ga_customVars.config('event'); //config GA variables accross all hits

    gawap(function () {
        var trackers = gawap.getAll(); //get all GA Trackers
        if (/^(https?:\/\/(.*)\.intel\.|\/)(.*)\?/.test(fo.eventLabel)) { //if link click on Intel domain contains querystrings, remove and add to querystring dimension (improves with click aggregation)
            fo.dimension56 = '?' + decodeURIComponent(fo.eventLabel.split('?')[1]);
            fo.dimension56 = wap_tms.cleanPii(fo.dimension56,'qs');
            fo.eventLabel = fo.eventLabel.replace(/\?(.*)$/g, ''); //remove querystring
        }else{
            try{
                fo.eventLabel = decodeURIComponent(fo.eventLabel);
            }catch(e){}
            finally{
                fo.eventLabel = wap_tms.cleanPii(fo.eventLabel,'label');
            }
        }

        
        ga_customVars.payload(trackerName, fo); // set custom vars & metrics for tracker
        
        //fire GA Event tag
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerName = tracker.get('name'), trackerId=tracker.get('trackingId'), trackHit=true;
            if(trackerId=='UA-35949610-16'){ //do not track if RLSA
                trackHit=wap_tms.events.rlsa_link;
            } 
            //check if hit is non interactive - boolean
            if (opt_noninteraction) {
                fo.nonInteraction = true;
            }
            else {
                fo.metric38 = 1;
                fo.metric42 = 1;
            }
            //for (var key in fo) {var obj = fo[key];console.log(key + ": " + obj);} //validate fo object
            if(trackHit){
            
                //E-commerce
                if(typeof fo.dimension149 != 'undefined' && fo.dimension149.indexOf('no points') == -1){
                    var qs_type = fo.dimension149; //type
                    var qs_pid = 'p_dmf_qs:'+qs_type; //product id
                    var qs_tid = 't_dmf_qs:'+qs_type+'_'+(Math.floor(Math.random()*100000))+''; //transaction ID
                    var qs_value = fo.metric85; //revenue/price
                    
                    gawap(trackerName+'.ec:addProduct', {
                         'id': qs_pid,
                         'name': 'Quality Score - '+qs_type,
                         'category': 'DMF',
                         'brand': 'Intel',
                         'price': qs_value,
                         'quantity': 1
                    });
                    
                    gawap(trackerName+'.ec:setAction', 'purchase', {
                     'id': qs_tid,
                     'revenue': qs_value   
                    });                 
                }
                if(debug){wap_tms.events.gaDebug(fo,event);}
                gawap(trackerName + '.send', 'event', fo);
            }
            //track social
            if (fo.eventCategory == "Social") { //send social event after event fires if "Social" category
                if (/^email|^referral|^reply|^post|^rate|^chat|^intel-/.test(fo.eventAction)) { //change social network to 'intel' for on-domain sharing
                    category = category + ': ' + action; action = 'intel';
                }
                if(trackHit){
                    trackGAsocial(fo.eventAction, fo.eventCategory.toLowerCase(), fo.eventLabel);
                }
            }           
        }
    });
};




//track Social events
function trackGAsocial(network, socialAction, opt_target, opt_pagePath, callback) {
    gawap(function () {
        var trackers = gawap.getAll();
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerName = tracker.get('name'),trackerId=tracker.get('trackingId');
            var fo = {  //field object
                'socialNetwork': network,
                'socialAction': socialAction,
                'socialTarget': opt_target,
                'dimension149': wap_tms.events.dmfpoints.none.name,
                'metric85': wap_tms.events.dmfpoints.none.val
            };
            //call callback function if set
            if (typeof callback !== "undefined") {
                fo.hitCallback = function () { callback(); }
            }
            var trackHit = (trackerId=='UA-35949610-16') ? false : true;
            if(trackHit){
                ga_customVars.payload(trackerName, fo); // set custom vars & metrics for tracker
                gawap(trackerName + '.send', 'social', fo);
            }
        }
    });
}

//legacy function, some emebedded code may be calling. Keep to avoid JS errors
function trackGaSocial() { }

//track brightcove videos

function gaBrightCoveTracking(trackType, gaEventCategory, gaEventAction, gaEventLabel, gaVideoDuration) {
    //wap_tms.custom.brightcove=false;
    //console.log("trackType: " + trackType + "\ngaEventCategory: " + gaEventCategory + "\ngaEventAction: " + gaEventAction + "\ngaEventLabel: " + gaEventLabel);
    wap_tms.custom.video_duration = gaVideoDuration; 
    ga_payload.dimension['29,hit'] = "brightcove:" + gaEventLabel.split(':')[2];
    ga_payload.dimension['19,hit'] ="flash";
    ga_payload.dimension['64,hit'] = gaEventLabel.split(':')[2];
    switch (gaEventAction) {
        case "video: share: link": case "video: share: embed": case "video: share: blog": case "video: share: email":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: play":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: 50% complete":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: 100% complete":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
        case "video: 25% complete": case "video: 75% complete": case "video: 90% complete": case "video: 95% complete": case "video: fullscreen":
            trackGaEvent(gaEventCategory, gaEventAction, gaEventLabel.split(':')[1]);
            break;
    }
}

function configGA(accountID, trackerId) {
    var fo = { //field object
        'name': 'waptracker' + trackerId,
        'cookieDomain': 'auto', //set to auto
        'siteSpeedSampleRate': wap_ga.sitespeed,
        'legacyHistoryImport': false,
        'allowLinker': true,
        'cookieName': 'gawap'
    };
    if (wap_tms.eloqua.id !== '') { fo.userId = wap_tms.eloqua.id; } //add user id if not blank

    //create tracker object
    gawap('create', accountID, fo);

    wap_ga.config.campaign(); //config campaign
    wap_ga.config.tms_map(); //set page values from TMS
    wap_ga.config.pageErrors(); //set page errors (if any)
    
    gawap(function () {
        var trackers = gawap.getAll();
        wap_ga.config.tracker = trackers[0]; //assign first tracker for other code to reference
        for (var i = 0; i < trackers.length; ++i) {
            var tracker = trackers[i], trackerId=tracker.get('trackingId'), trackerName = tracker.get('name'), clientId = tracker.get('clientId');
            ga_payload.dimension['101,page'] = clientId;
            utag_data.wa_client_id = clientId; //set GA client ID to UDO
            gawap(trackerName + '.require', 'displayfeatures'); //enable display features for DFA, remarketing and demographic
            gawap(trackerName + '.require', 'linker');
            if (wap_ga.tms.enhancedLinkAttribution == "true") {
                gawap(trackerName + '.require', 'linkid', { //enhanced link attribution
                    'cookieName': '_ela', // Cookie name
                    'duration': 45, // Cookie duration
                    'levels': 8
                }); //navigate up DOM to find id
            }
            gawap(trackerName + '.require', 'ec');//Enable EC
            //mask IP address for all trackers, do not modify as WAP team has a legal requirement to anonymize IP for all hits
            gawap(trackerName + '.set', 'anonymizeIp', true);
            if (wap_ga.campaign) { //config campaigns manually if necessary
                gawap(trackerName + '.set', 'campaignName', wap_ga.config.campaign.cname);
                gawap(trackerName + '.set', 'campaignSource', wap_ga.config.campaign.source);
                gawap(trackerName + '.set', 'campaignMedium', wap_ga.config.campaign.medium);
            }

            if (wap_tms.referrer !== '') {
                gawap(trackerName + '.set', 'dimension136', wa_doc.referrer.split("?")[0].toLowerCase());
                gawap(trackerName + '.set', 'dimension110', wap_tms.referrer.toLowerCase());  
                gawap(trackerName + '.set', 'contentGroup3', wap_tms.referrer);
            }
            //set site title to <title> tag or override using ga_page_title
            gawap(trackerName + '.set', 'title', wap_ga.pagetitle);
            
            //configure opt-out if gawap_optout cookie is set to "true"
            var ga_optout_cookie = tmsGetCookie('gawap_optout'),
            ga_optout = (ga_optout_cookie == "true") ? true : false;
            if(ga_optout){
                window['ga-disable-'+trackerId] = true;
            }
        }

        //START cross-domain custom solution, appends ?_ga=cookie to enable cross-domain using 1 first party cookie
        var domainRegExPattern = "(?!.*" + tms_domain + ")(.*)\\.intel(.*)"; //patter to match
        var domainRegEx = new RegExp(domainRegExPattern);
        if(utag_data.enable_crossdomain == 'true' && !wap_tms.ga_cross_domain_loaded){
        if (wap_tms.jquery.ver_1_7_plus) {
            (function ($) { //check if jQuery available
                wap_tms.ga_cross_domain_loaded = true;
                $("body").on("mousedown keydown", "a", function (event) {
                    var linkHref = $(this).attr("href") + "";
                    linkHref = decodeURIComponent(linkHref);
                    wap_ga.config.appendlink = (/^https?:\/\//.test(linkHref)) ? true : false; //check if starts with http(s)://
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (/(www\.intelserveredge\.com|japan\.intel\.com|appshowcase\.intel\.com)|((s-|b2b|())(download(()|center)\.)((mcafee|nai)\.com))/g.test(linkHref)) ? false : true; } //opt-out domains
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (/\_ga\=/.test(linkHref)) ? false : true; } //check if link is already tagged with _ga=val
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (/(.*)((#(.*)\?)|(\?(.*)#)|(\?(.*)\?))/g.test(linkHref)) ? false : true; } //do not add if link contains # AND ?, ? AND # or ? AND ? as they may break Intel websites
                    //if(wap_ga.config.appendlink){wap_ga.config.appendlink = (/(.*)(\?|#)(.*)/g.test(linkHref)) ? false : true;} //do not add if link contains # OR ?, safe way to ensure no broken apps
                    if (wap_ga.config.appendlink) {  //check if link matches criteria defined in regEx
						var linkHostName = wap_tms.extractHostname(linkHref).replace(/(.*)\.intel/, ".intel");
                        wap_ga.config.appendlink = tms_domain.indexOf(linkHostName) > -1 ? false : true;
						wap_ga.config.appendlink = linkHostName.indexOf(".intel") > -1 ? wap_ga.config.appendlink : false; 
					} 
                    //if (typeof crossDomainSurveyFlag != 'undefined'){ if (crossDomainSurveyFlag) wap_ga.config.appendlink = true; } //On Research Survey
                    //if (/onsite2\.researchintel\.com|mcafee\.com|intelsecurity\.com/.test(linkHref)){ wap_ga.config.appendlink = true;} //Opt in domains  ***** REMOVED McAfee cross-domain 3/16 due to MI *****
                    //if (/onsite2\.researchintel\.com/.test(linkHref)){ wap_ga.config.appendlink = true;} //Opt in domains
                    //if (/(onsite2\.researchintel\.com)|(((buy|())(altera\.co))|(rocketboards\.org))|(((blogs\.)|())mcafee\.co)|(intelsecurity\.com)/.test(linkHref)){ wap_ga.config.appendlink = true;} //Opt in domains
                    if (/(onsite2\.researchintel\.com)|(((buy|())(altera\.co))|(rocketboards\.org))/.test(linkHref)){ wap_ga.config.appendlink = true;} 
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (wap_tms.custom.isAsset(linkHref)) ? false : true; } //check if link matches criteria defined in regEx
                    if (wap_ga.config.appendlink) { wap_ga.config.appendlink = (/^ftp?:\/\//.test(linkHref)) ? false : true; } //check if starts with ftp://
                    if (wap_ga.config.appendlink) { //must match ALL the above criteria
                        var linker = new window.gaplugins.Linker(wap_ga.config.tracker);
                        var newHref = linker.decorate(linkHref);
                        try { //wrap in try catch to take care not break href when updating
                            if (typeof utag_data.wa_elq_id_short !== "undefined") { //append Eloqua contact ID if present
                                if (utag_data.wa_elq_id_short !== "") {
                                    var elqCookieLink = 'elq_cid='+utag_data.wa_elq_id_short;
                                    newHref += (/\?/.test(newHref)) ? '&'+elqCookieLink : '?'+elqCookieLink; //make to append correctly based in ? is present or not
                                }
                            }
							if (utag_data.wa_erpm_id) {
							  var erpmLink = 'erpm_id=' + utag_data.wa_erpm_id;
							  newHref += (/\?/.test(newHref)) ? '&' : '?';
							  newHref += erpmLink;
							}
                        }catch (e) {}
                        $(this).attr("href", newHref); //update href
                        ga_payload.metric['62,hit'] = '1';
                    }
                });
            }($wap));
        }
        }
        //END   
    });
}


wap_tms.ga_cross_domain_loaded = false; // Flag for load only once the cross domain solution 
var uaga_id = ua_account.split(',');
for (var i = 0; i < uaga_id.length; i++) {
    //console.log(i+": "+uaga_id[i]);
    configGA(uaga_id[i], i); //configure GA UA
}
//wap_ga.config.pagePerformance(); 

//capture percieved load time
if (typeof cq_tms !== 'undefined' && typeof cq_tms.wa_page_type_micro !== 'undefined' && cq_tms.wa_page_type_micro.indexOf('mf-') > -1) {
  setTimeout(function () {
    wap_tms.custom.wa_scrol();
    wap_tms.custom.pagePerformanceData();
  }, 500);
}if (typeof cq_tms !== 'undefined' && typeof cq_tms.wa_page_type_micro !== 'undefined' && cq_tms.wa_page_type_micro.indexOf('search') > -1) {
  wap_tms.custom.wa_scrol();
} else {
  window.addEventListener("load", function (event) {
    wap_tms.custom.wa_scrol();
    wap_tms.custom.pagePerformanceData();
  });
}




ga_customVars.config = function (hitType) {
    if (hitType == 'page') {        
        ga_payload.dimension['55,page'] = wap_ga.section + ":" + wap_tms.cleanPii(wap_ga.pagegroup.toLowerCase(), 'url');
        try { ga_payload.dimension['56,page'] = decodeURIComponent(location.search); } catch (e) { ga_payload.dimension['56,page'] = location.search; };        
        ga_payload.dimension['56,page'] = wap_tms.cleanPii(ga_payload.dimension['56,page'],'qs');
        ga_payload.dimension['57,page'] = wap_ga.user_agent;
        ga_payload.dimension['140,page'] = (("https:" == document.location.protocol) ? "https" : "http").toLowerCase();
        if (wap_ga.qs.wapkw) { ga_payload.dimension['42,page'] = wap_ga.qs.wapkw.toLowerCase(); ga_payload.metric['40,hit'] = '1'; } //track search results referal, look to see if wapkw is appended
    }
    /*
    if(hitType=='event'){
      if(wa_trackUA){ //GA UA
        //
      }
    }
    */
},
ga_customVars.payload = function (trackerName, fo) {
    for (var key in ga_payload) {
        var obj = ga_payload[key];
        for (var prop in obj) {
            var slot = prop.split(',');
            var keySlot = key + slot[0];
            if (obj[prop] !== '') { //only set if value is not blank
                if (key == "metric") {
                    //console.log(keySlot + ": " + obj[prop]);
                    if (slot[1] == 'hit') {
                        if (obj[prop] != 0) { //only set if not zero
                            fo[keySlot] = Number(obj[prop]);
                            ga_payload.metric[slot] = 0; //set zero to expire w/ hit
                        }
                    }
                    else {
                        gawap(trackerName + '.set', keySlot, Number(obj[prop]));
                    }
                }
                else { //dimension
                    //console.log(keySlot + ": " + obj[prop]);                   
                    fo[keySlot] = obj[prop] + "";
                    if (slot[1] == 'hit') {                       
                        ga_payload.dimension[slot] = ''; //set to blank to expire w/ hit, it does not expire if it's not hit
                    } 
                    else {                        
                        gawap(trackerName + '.set', keySlot, obj[prop] + "");
                    }                    
                }
            }
        }
    }
    return fo;
};

if (wap_ga.autofire) { //check if we should auto fire pageview
    trackGaPage(wap_ga.pagename, wap_ga.callback);
}

wap_tms.ga_loaded = true; /* Flag for test for GA script loaded, DO NOT REMOVE = should be last line */
//~~tv:19063.am163.20160810
//~~tc: Add Tag Version AppMeasurement 1.7
var wap_aa = {}; //WAP AA Object
wap_aa.tms = {}; //hold TMS mappings
wap_aa.config = {};
aa_customVars = (wap_ga.win.aa_customVars) ? wap_ga.win.aa_customVars : {};
wap_aa.autofire = (typeof ga_auto_fire !== "undefined") ? ga_auto_fire : true; //set to false if you don't want the pageview to automatically occur on loading this script

wap_aa.config.tms_map = function () {
  for (var key in wap_aa.tms) {
    if (wap_aa.tms.hasOwnProperty(key)) {
      var value = wap_aa.tms[key];			                          
      if(value != null){
	if (/eVar/.test(key)) {
	  if (/20|52|29|54|122/.test(key)) {/*don't convert to lowercase*/ }
	  else { value = wap_aa.tms[key].toLowerCase(); } //convert to lowercase
	  var dimVal = key.split("eVar")[1] + ",page";	  
	  aa_payload.eVar[dimVal] = value;	  
	} else 	if (/prop/.test(key)) {
	  if (/20/.test(key)) {/*don't convert to lowercase*/ }
	  else { value = wap_aa.tms[key].toLowerCase(); } //convert to lowercase
	  var dimVal = key.split("prop")[1] + ",page";
	  aa_payload.prop[dimVal] = value;
	} else if (/list/.test(key)) {
	  //if (/20/.test(key)) {/*don't convert to lowercase*/ }
	  //else { value = wap_aa.tms[key].toLowerCase(); } //convert to lowercase
	  value = wap_aa.tms[key].toLowerCase();
      var dimVal = key.split("list")[1] + ",page";
	  aa_payload.list[dimVal] = value;
	} else {
	  //if (/20/.test(key)) {/*don't convert to lowercase*/ }
	  //else { value = wap_aa.tms[key].toLowerCase(); } //convert to lowercase
	  value = wap_aa.tms[key].toLowerCase();
      //var dimVal = key.split("standar")[1] + ",page";
	  aa_payload.standar[key] = value;
	}         
		
    }
  }
  }
};

aa_customVars.payload = function (fo, scope) {
    aawap.linkTrackVars = "";    
    aawap.events = "";
    aawap.linkTrackEvents = "";
    var inverseScope = (scope === "page") ? "hit" : "page";     
    for (var key in fo) {
        var value = fo[key];
		if(value != null){
			if (/eVar/.test(key)) {
				var dimVal = key.split("eVar")[1] + "," + scope;
				var delVal = key.split("eVar")[1] + "," + inverseScope;                           
				aa_payload.eVar[dimVal] = value;             
				if(aa_payload.eVar[delVal]){
					delete aa_payload.eVar[delVal];
				}
			}else if (/prop/.test(key)) {
				var dimVal = key.split("prop")[1] + "," + scope;
				var delVal = key.split("prop")[1] + "," + inverseScope;
				aa_payload.prop[dimVal] = value;
				if(aa_payload.prop[delVal]){
					delete aa_payload.prop[delVal];
				}
			}else if (/event/.test(key)) {
				var dimVal = key.split("event")[1] + "," + scope;
				aa_payload.event[dimVal] = value;
			}
		}
    }
    
    //Iterates at aa_payload and set the eVars, props and events that should be tracked
    for (var key in aa_payload) {
        var obj = aa_payload[key];
        for (var prop in obj) {
            var slot = prop.split(',');
            var keySlot = key + slot[0];
            if (obj[prop] !== '') { //only set if value is not blank                
                if (key == "eVar") {
                    aawap[keySlot] = obj[prop];
                    aawap.linkTrackVars = aawap.linkTrackVars + keySlot + ",";                    
                    if (slot[1] == 'hit') {                        
                            aa_payload.eVar[slot] = ''; //set zero to expire w/ hit
                    }                   
                }else if (key == "prop"){ //dimension
                    aawap[keySlot] = obj[prop];
                    aawap.linkTrackVars = aawap.linkTrackVars + keySlot + ",";                    
                   if (slot[1] == 'hit') {
                            aa_payload.prop[slot] = ''; //set zero to expire w/ hit
                    }                                    
                }else if (key == "list"){ //dimension
                    aawap[keySlot] = obj[prop];
                    aawap.linkTrackVars = aawap.linkTrackVars + keySlot + ",";                    
                   if (slot[1] == 'hit') {
                            aa_payload.list[slot] = ''; //set zero to expire w/ hit
                    }
				}else if (key == "event"){ //dimension                    
                    aawap.linkTrackEvents = aawap.linkTrackEvents + keySlot + ",";
					//if(typeof obj[prop] === "number" && obj[prop] !== 1){
					if(typeof obj[prop] !== "undefined"){
                        aawap.events = aawap.events + keySlot + "=" + obj[prop] + ",";
                    }else{
                        aawap.events = aawap.events + keySlot + ",";
                    }
                    //Uncomment if need to have capability to set event at page level 
                   //if (slot[1] == 'hit') {
                        //if (obj[prop] != 0) { //only set if not zero                           
                            aa_payload.event[slot] = ''; //set zero to expire w/ hit
                        //}
                    //}                                      
                }else{
					aawap[prop] = obj[prop];
                    aawap.linkTrackVars = aawap.linkTrackVars + prop + ",";
		}
            }
        }
    }
    aawap.linkTrackEvents = aawap.linkTrackEvents + "prodView";
	aawap.events = aawap.events + "prodView";
    aawap.linkTrackVars = aawap.linkTrackVars + "events,products";
};

wap_tms.events.aa = function (aao, event /*,opt_noninteraction,debug, event*/) { //called after GA Pageview sent, used to execute code in sequence
    if (/^(https?:\/\/(.*)\.intel\.|\/)(.*)\?/.test(aao.eVar40)) { //if link click on Intel domain contains querystrings, remove and add to querystring dimension (improves with click aggregation)
		aao.eVar58 = '?' + decodeURIComponent(aao.eVar40.split('?')[1]);
		aao.eVar58 = wap_tms.cleanPii(aao.eVar58,'qs');
		aao.eVar40 = aao.eVar40.replace(/\?(.*)$/g, ''); //remove querystring
	}else{
		try{
			aao.eVar40 = decodeURIComponent(aao.eVar40);
		}catch(e){}
		finally{
			aao.eVar40 = wap_tms.cleanPii(aao.eVar40,'label');
		}
	}

	if (wap_ga.qs.wapkw) { 
		aao.eVar100 = wap_ga.qs.wapkw.toLowerCase();  
    }
    if (utag_data.user_agent) {
		aao.eVar101 = utag_data.user_agent.toLowerCase();  
    }

    
    aao.prop30 = aao.eVar40;
    aa_customVars.payload(aao, "hit");
    //s_objectID = aao.eVar41+";"; //Pending for future release
    if(wap_tms.lastClickedObject != null){
		aawap.tl(wap_tms.lastClickedObject, 'o', aao.eVar41);
		wap_tms.lastClickedObject = null; 
	}
	else{
		aawap.tl(true, 'o', aao.eVar41);
	} 	
    aawap.clearVars();
};

var wap_report_suite_id = "intlcrpglobal";
if(utag_data.wa_env !== "prod"){
	wap_report_suite_id = "intlcrpglobaldev";
}	

var aawap = new AppMeasurement(wap_report_suite_id);

/************************** CONFIG SECTION **************************/
aawap.account = wap_report_suite_id;
aawap.trackDownloadLinks=false;
aawap.trackExternalLinks=false;
aawap.trackInlineStats=true;
aawap.linkInternalFilters="javascript:,intel";
aawap.linkLeaveQueryString=false;
aawap.linkTrackVars="None";
aawap.linkTrackEvents="None";
aawap.usePlugins=false;
aawap.currencyCode="USD"; // override default with E-Commerce Extension
aawap.visitorNamespace = "";
aawap.trackingServer="www90.intel.com";
aawap.trackingServerSecure="www91.intel.com";

aawap.debugTracking=utag.cfg.utagdb;



if (window.Visitor && "AD2A1C8B53308E600A490D4D@AdobeOrg") {
  try {
    aawap.visitor = Visitor.getInstance("AD2A1C8B53308E600A490D4D@AdobeOrg");    
  } catch (e){}
}

var aao = {};
aao.eVar59 = (typeof ga_payload.dimension['61,page'] !== "undefined") ? ga_payload.dimension['61,page'] : "";
aao.prop44 = aao.eVar59;
aao.eVar62 = (typeof ga_payload.dimension['150,page'] !== "undefined") ? ga_payload.dimension['150,page'] : "";
aao.prop45 = aao.eVar62;
aao.eVar63 = (typeof ga_payload.dimension['151,page'] !== "undefined") ? ga_payload.dimension['151,page'] : "";
aao.prop46 = aao.eVar63;
aao.eVar42 = wap_tms.events.dmfpoints.pageload.name;
aao.prop32 = aao.eVar42;
aao.event62 = wap_tms.events.dmfpoints.pageload.val;
aao.eVar58 = wap_tms.getQuerystring();
aao.eVar117 = utag_data.wa_internal_user ? utag_data.wa_internal_user : "false"; 
aa_customVars.payload(aao, "page");


aawap.targetCalled = false;
aawap.usePlugins=true
function s_doPlugins(s) {

// use implementation plug-ins that are defined below
// in this section. For example, if you copied the append
// list plug-in code below, you could call:
// s.events=s.apl(s.events,"event1",",",1);
  //Code to initiate the Audience Management Module	
  //aawap.events="event1";
  //Setting  MCID UDO Element (mapped to eVar34)
  s.products = ";"+utag_data.wa_page_name;
  if(typeof wap_ga.allowhash != "undefined" && wap_ga.allowhash){
	pageURL = window.location.href.split('?')[0];
	if(typeof pageURL != "undefined" || pageURL){
		s.pageName = s.pageURL = pageURL;
	}
  }
  utag_data.wa_amc_id = s.visitor.getMarketingCloudVisitorID() ? s.visitor.getMarketingCloudVisitorID() : ""; 
  utag_data.wa_aam_profile_id = s.visitor.cookieRead("aam_uuid"); 
  s.eVar66 = utag_data.wa_aam_profile_id;
  s.eVar34 = utag_data.wa_amc_id;
  aa_payload.eVar['34,page'] = utag_data.wa_amc_id;
  aa_payload.eVar['66,page'] = utag_data.wa_aam_profile_id;
  var containerNSID = 0;
	switch (utag_data.wa_local) {
		case "jp-ja":
			containerNSID = 1;
			break;
		case "cn-zh":
			containerNSID = 2;
			break;
		case "us-en":
		case "ca-en":
		case "ca-fr":
            containerNSID = 3;
            break;
	}
	if(containerNSID == 0){
		switch (utag_data.wa_geo) {
	        case "asmo-lar":
	            containerNSID = 4;
	            break;
		}
	}
  s.AudienceManagement.setup({
             "partner":"intelcorp",
             "containerNSID":containerNSID,
             "uuidCookie": { //optional if you want to set the UUID in the first-party domain
                "name":"aam_uuid",
                "days": 30
            }
        });
  //set 1 or more AMC customer IDs
	wap_tms.amc.setCustomersIDs = function(){
		var userIDs = {},
		configure = false;
		if (typeof utag_data.wa_erpm_id !== "undefined") { //ERPM ID
			if(utag_data.wa_erpm_id){
				userIDs.intelidsyncerpm ={};
				userIDs.intelidsyncerpm["id"] = utag_data.wa_erpm_id;
				userIDs.intelidsyncerpm["authState"] = Visitor.AuthState.AUTHENTICATED;
				userIDs.erpmidsync ={};
				userIDs.erpmidsync["id"] = utag_data.wa_erpm_id;
				userIDs.erpmidsync["authState"] = Visitor.AuthState.AUTHENTICATED;
				configure = true;
			}
		}
		if (typeof utag_data.wa_elq_id_short !== "undefined") { //Eloqua Contact ID, user short version
			if(utag_data.wa_elq_id_short){
				userIDs.intelidsyncel ={};
				userIDs.intelidsyncel["id"] = utag_data.wa_elq_id_short;
				userIDs.intelidsyncel["authState"] = Visitor.AuthState.AUTHENTICATED;
				userIDs.eloquaidsync ={};
				userIDs.eloquaidsync["id"] = utag_data.wa_elq_id; //use long instead of short for customer attributes
				userIDs.eloquaidsync["authState"] = Visitor.AuthState.AUTHENTICATED;
				userIDs.intelidsyncelong = {};
				userIDs.intelidsyncelong["id"] = utag_data.wa_elq_id; //use long instead of short for IAH data ingestion
				userIDs.intelidsyncelong["authState"] = Visitor.AuthState.AUTHENTICATED;
				configure = true;
			}
		}
		
		//set AMC User IDs
		if(configure){
			s.visitor.setCustomerIDs(userIDs);
		}   
	        if (!s.targetCalled) {
			if (utag_data.target_load == "true") { //only load if target_load flag is set								
				wap_tms.enableTarget(); //init Target at.js
				s.targetCalled = true;
			}
		}
	};
	wap_tms.amc.setCustomersIDs();
}
aawap.doPlugins=s_doPlugins

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.7.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.7.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var p=k.AppMeasurement.Rb;p||(p=null);var n=k,m,s;try{for(m=n.parent,s=n.location;m&&m.location&&s&&""+m.location!=""+s&&n.location&&""+m.location!=""+n.location&&m.location.host==s.host;)n=m,m=n.parent}catch(u){}a.F=function(a){try{console.log(a)}catch(b){}};a.Ma=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.yb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ea&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ea=0<d?c.substring(d):c}return a.Ea};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.yb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.ub=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.jb(a,function(){}))};a.jb=function(a,b){for(var d in a)a.hasOwnProperty(d)&&"function"===typeof a[d]&&(a[d]=b)};
a.L=[];a.ia=function(c,b,d){if(a.Fa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.L.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,
a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.L.length;){d=a.L.shift();if(b&&!d.t&&d.t>c){a.L.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Fa=1;a[d.m].apply(a,d.a);a.Fa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=
c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.P,(h=a.lightTrackVars)&&(h=","+h+","+a.na.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Pb,f=a[e].Ob));h&&(h=","+h+","+a.H.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,
b,d,f,e){var g="",h,l,k,q,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.r(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==
f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),q=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Ma(q)&&("prop"==k?h="c"+q:"eVar"==k?h="v"+q:"list"==k?h="l"+q:"hier"==k&&(h="h"+q,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Bb=function(){var c="",b,d,f,e,g,h,l,k,q="",m="",n=e="";if(a.lightProfileID)b=a.P,(q=a.lightTrackVars)&&(q=","+q+","+a.na.join(",")+
",");else{b=a.g;if(a.pe||a.linkType)q=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(q=a[e].Pb,m=a[e].Ob));q&&(q=","+q+","+a.H.join(",")+",");m&&(m=","+m+",",q&&(q+=",events,"));a.events2&&(n+=(""!=n?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=p;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",
e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&n?(g=n,n=""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!q||0<=q.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e=
"D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&
a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;
case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":n&&(g+=(""!=g?",":"")+n);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=
(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],q,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],q,e));g="";break;default:a.Ma(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==
f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Ub||"undefined"!=""+a.Kb&&"HTML"!=(""+a.Kb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ia=function(a){var b=k.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");
e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.M=function(c){var b=a.D(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",
""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ia(c),e)?{id:e.substring(0,100),type:g}:0};a.Sb=function(c){for(var b=a.D(c),d=a.M(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.D(c),d=a.M(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Jb=function(){var c,b,d=a.linkObject,
f=a.linkType,e=a.linkURL,g,h;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.M(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.M(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&(e=a.Ia(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,q=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),
g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(n=g[h])&&l.substring(l.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.La(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=
0;h<g.length;h++)n=g[h],0<=l.indexOf(n)&&(q=1);q?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Cb=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||
f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]=
"");a.e=a.r("c",h)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+
"="+a.escape(l),h--);a.cookieWrite("s_sq",e)}}}return c};a.Db=function(){if(!a.Nb){var c=new Date,b=n.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",p="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?
screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.Tb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),p=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=p;a.homepage=m;a.Nb=1}};a.Q={};a.loadModule=function(c,
b){var d=a.Q[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.eb=function(){return d.ib};d.kb=function(b){if(d.ib=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.eb,set:d.kb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&
d[c]()))return 1;return 0};a.Fb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,h,l;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(l in a[g])h[l]||
(h[l]=a[g][l]);a[g]=h}};a.Va=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.xb=function(a){var b,d,f,e,g,h=0,l,k="",m="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(l=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":
0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&l)))){if((a=l.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?k+=(k?"&":"")+e:m+=(m?"&":"")+e;k&&m?l=k+"&"+m:m=""}d=253-(l.length-m.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+l}return a};a.ab=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],
function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.J=!1;a.mb=function(){a.J=!0;a.j()};a.ca=!1;a.V=!1;a.hb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.nb=function(c){a.visitorOptedOut=c;a.W=!0;a.j()};a.Z=!1;a.S=!1;a.Xa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Za=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Ya=function(c){a.audienceManagerBlob=c;a.T=!0;
a.j()};a.$a=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.I=!1;a.xa=function(){a.I=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.J||(a.ab(a.mb)?a.J=!0:a.ea=!0);if(a.ea&&!a.J)return!1;b&&b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.hb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||
!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.nb]),a.visitorOptedOut!=p&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Xa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Za]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=
!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ya]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,f=a.aa&&!a.T&&!a.audienceManagerBlob,e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.I||(a.$a(a.xa)?a.I=!0:a.da=!0);a.da&&!a.I&&(c=!1);return c};a.o=p;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.rb=c;f.qb=b;f.ob=d;a.o==p&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};
a.j=function(){var c;if(a.isReadyToTrack()&&(a.lb(),a.o!=p))for(;0<a.o.length;)c=a.o.shift(),c.qb.apply(c.rb,c.ob)};a.lb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.fb=function(c){var b,d,f=p,e=p;if(!a.isReadyToTrack()){b=[];if(c!=p)for(d in f={},c)f[d]=c[d];e={};a.Va(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.zb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,
f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");
a.fb(c)||(b&&a.R(b),c&&(d={},a.Va(d,0),a.R(c)),a.Fb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.zb()),a.Jb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Wa||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:n.document.referrer),a.Wa=1,a.referrer=a.xb(a.referrer),
a.p("_g")),a.Cb()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.Db(),g+=a.Bb(),a.Ib(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=
[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPreTrackCallback")};a.cb=function(c){a.wa(a.za,c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPostTrackCallback")};a.bb=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==
typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.F(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,
4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Ib=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),
e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Mb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.cb(d);a.vb(d);a.ka()};a.Ua=/{(%?)(.*?)(%?)}/;a.Qb=RegExp(a.Ua.source,
"g");a.wb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Qb),e=0;e<f.length;++e){var g=f[e],h=g.match(a.Ua),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.Ab());d.c=d.c.replace(g,a.escape(k))}}};a.Ab=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+
1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.wb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);
else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.vb=function(c){a.i||a.Eb();a.i.push(c);a.ma=a.C();a.Sa()};a.Eb=function(){a.i=a.Gb();a.i||(a.i=[])};a.Gb=function(){var c,b;if(a.ra()){try{(b=k.localStorage.getItem(a.pa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&
a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ja=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.G&&a.B.va(),a.q))return;a.Ka=p;if(a.qa)a.ma>a.O&&a.Qa(a.i),a.ua(500);else{var c=a.pb();if(0<c)a.ua(c);else if(c=a.Ga())a.q=1,a.Hb(c),a.Lb(c)}};a.ua=function(c){a.Ka||(c||(c=0),a.Ka=setTimeout(a.ka,c))};a.pb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Pa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.Ga=function(){if(0<a.i.length)return a.i.shift()};a.Hb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.F(b)}};a.gb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.X=function(a){return k.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Lb=function(c){var b,
d,f;a.gb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Ta&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?
f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=p}));b.Da=function(){try{b.G&&(clearTimeout(b.G),b.G=0)}catch(a){}};b.onload=b.va=function(){a.bb(c);b.Da();a.tb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ha=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.sb);a.q=0;a.ma>a.O&&a.Qa(a.i);
a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ha())};a.Pa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Na)try{f.removeChild(a.Na)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Na=a.B}b.G=setTimeout(function(){b.G&&(b.complete?b.va():(a.trackOffline&&
b.abort&&b.abort(),b.Ha()))},5E3);a.sb=c;a.B=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.K||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.tb=function(){if(a.ra()&&!(a.Oa>a.O))try{k.localStorage.removeItem(a.pa()),a.Oa=a.C()}catch(c){}};a.Qa=function(c){if(a.ra()){a.Sa();try{k.localStorage.setItem(a.pa(),k.JSON.stringify(c)),a.O=a.C()}catch(b){}}};a.Sa=function(){if(a.trackOffline){if(!a.offlineLimit||
0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ga()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.La=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Mb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==
d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,
cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){if(document.documentMode)return document.documentMode;
for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}};a.H="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.P=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.P.push("prop"+m)),a.g.push("eVar"+m),a.P.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(m);a.H=a.H.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Pa=0;a.ma=0;a.O=0;a.Oa=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ta=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Ta=!0}}catch(x){}a.ga=function(){a.ha&&(k.clearTimeout(a.ha),a.ha=p);a.l&&a.K&&a.l.dispatchEvent(a.K);a.A&&("function"==typeof a.A?a.A():
a.l&&a.l.href&&(a.d.location=a.l.href));a.l=a.K=a.A=0};a.Ra=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.N&&a.N==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var h=a.N=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.N==h&&(a.N=0)},1E4);f=a.Ja();a.track();if(f<a.Ja()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.La(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.K=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ra,30)};a.ub();a.Vb||(r?a.setAccount(r):a.F("Error, missing Report Suite ID in AppMeasurement initialization"),a.Ra(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,k=window.s_c_il,p,n,m=r.split(","),s,u,t=0;if(k)for(p=0;!t&&p<k.length;){a=k[p];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(n=a.account?a.account:a.oun,n=a.allAccounts?a.allAccounts:n.split(","),s=0;s<m.length;s++)for(u=0;u<n.length;u++)m[s]==n[u]&&(t=1);p++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,p,n;if(a)for(k=0;k<a.length;k++)p=a[k],n=s_gi(p.oun),n.setAccount(p.un),n.setTagContainer(p.tagContainerName);r.s_giq=0}s_pgicq();



/*
 * Plugin: getAndPersistValue 1.0 (Minified)
 */
aawap.getAndPersistValue=function(v,c,e){var s=this,a=new Date;e=e?e:0;c=c?c:"s_gapv";a.setTime(a.getTime()+e*864E5);if(v)s.c_w(c,v,e?a:0);return s.c_r(c)};																																																  
																																																  
// Integrate Module

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

// End Integrate Module

// AudienceManagement Module		
aawap.loadModule("AudienceManagement");																																																  
																																																  
function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?
a.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!==typeof window.DIL&&(window.DIL=function(c,f){var k=[],g,w;c!==Object(c)&&(c={});var u,l,D,N,A,y,E,F,O,P,G,B,z;u=c.partner;l=c.containerNSID;D=!!c.disableDestinationPublishingIframe;N=c.iframeAkamaiHTTPS;A=c.mappings;y=c.uuidCookie;E=!0===c.enableErrorReporting;F=c.visitorService;O=c.declaredId;P=!0===c.delayAllUntilWindowLoad;G=!0===c.disableIDSyncs;B="undefined"===typeof c.secureDataCollection||!0===c.secureDataCollection;z="boolean"===typeof c.isCoopSafe?c.isCoopSafe:null;var Q,L,H,
R,S;Q=!0===c.disableDefaultRequest;L=c.afterResultForDefaultRequest;H=c.dpIframeSrc;R=c.visitorConstructor;S=!0===c.disableCORS;E&&DIL.errorModule.activate();E=!0===window._dil_unit_tests;(g=f)&&k.push(g+"");if(!u||"string"!==typeof u)return g="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:g,filename:"dil.js"}),Error(g);g="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(l||"number"===typeof l)l=parseInt(l,
10),!isNaN(l)&&0<=l&&(g="");g&&(l=0,k.push(g),g="");w=DIL.getDil(u,l);if(w instanceof DIL&&w.api.getPartner()===u&&w.api.getContainerNSID()===l)return w;if(this instanceof DIL)DIL.registerDil(this,u,l);else return new DIL(c,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+u+" and containerNSID = "+l);var t={IS_HTTPS:B||"https:"===document.location.protocol,MILLIS_PER_DAY:864E5,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(u)+"_"+l,FIRST_PARTY_SYNCS:"AMSYNCS",
FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP",REGION:"REGION",SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var a=7;4<a;a--){var b=document.createElement("div");b.innerHTML="\x3c!--[if IE "+a+"]><span></span><![endif]--\x3e";if(b.getElementsByTagName("span").length)return a}return null}()};t.IS_IE_LESS_THAN_10="number"===typeof t.IE_VERSION&&10>t.IE_VERSION;var M={stuffed:{}},m={},p={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,
pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:l+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",
isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(a){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var b=this,e,d,h,n;if("function"===typeof a&&"function"===typeof a.getInstance){if(F===Object(F)&&(e=F.namespace)&&"string"===typeof e)d=a.getInstance(e,{idSyncContainerID:l});else{this.releaseType="no namespace";this.releaseRequests();return}if(d===Object(d)&&d instanceof a&&"function"===typeof d.isAllowed&&"function"===typeof d.getMarketingCloudVisitorID&&
"function"===typeof d.getCustomerIDs&&"function"===typeof d.isOptedOut){this.VisitorAPI=a;if(!d.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=d;h=function(a){"VisitorAPI"!==b.releaseType&&(b.mid=a,b.releaseType="VisitorAPI",b.releaseRequests())};n=d.getMarketingCloudVisitorID(h);if("string"===typeof n&&n.length){h(n);return}setTimeout(function(){"VisitorAPI"!==b.releaseType&&(b.releaseType="timeout",b.releaseRequests())},this.getLoadTimeout());
return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(c){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;p.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var a=r.isPopulatedString,b=this.getMarketingCloudVisitorID();a(this.mid)&&this.mid===b||(this.mid=b);return a(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?
this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(a){if(a===Object(a)){var b="",e=[],d=[],h,n;for(h in a)a.hasOwnProperty(h)&&(d[0]=h,n=a[h],n===Object(n)&&(d[1]=n.id||"",d[2]=n.authState||0,e.push(d),d=[]));if(d=e.length)for(a=0;a<d;a++)b+="&d_cid_ic="+q.encodeAndBuildRequest(e[a],"%01");return b}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=
!0)},isOptedOutCallback:function(a){this.isOptedOut=a;this.isOptedOutCallbackCalled=!0;p.registerRequest()},getLoadTimeout:function(){var a=this.instance;if(a){if("function"===typeof a.getLoadTimeout)return a.getLoadTimeout();if("undefined"!==typeof a.loadTimeout)return a.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(a,b){var e=r.isPopulatedString,d=encodeURIComponent;if(a===Object(a)&&e(b)){var h=
a.dpid,n=a.dpuuid,c=null;if(e(h)&&e(n)){c=d(h)+"$"+d(n);if(!0===this.declaredIdCombos[c])return"setDeclaredId: combo exists for type '"+b+"'";this.declaredIdCombos[c]=!0;this.declaredId[b]={dpid:h,dpuuid:n};return"setDeclaredId: succeeded for type '"+b+"'"}}return"setDeclaredId: failed for type '"+b+"'"},getDeclaredIdQueryString:function(){var a=this.declaredId.request,b=this.declaredId.init,e=encodeURIComponent,d="";null!==a?d="&d_dpid="+e(a.dpid)+"&d_dpuuid="+e(a.dpuuid):null!==b&&(d="&d_dpid="+
e(b.dpid)+"&d_dpuuid="+e(b.dpuuid));return d}},registerRequest:function(a){var b=this.firingQueue;a===Object(a)&&b.push(a);this.firing||!b.length||P&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,a=b.shift(),a.src=a.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),r.isPopulatedString(a.corsPostData)&&
(a.corsPostData=a.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),C.fireRequest(a),this.firstRequestHasFired||"script"!==a.tag&&"cors"!==a.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(R||window.Visitor)},getCoopQueryString:function(){var a="";!0===z?a="&d_coop_safe=1":!1===z&&(a="&d_coop_unsafe=1");return a}};B=function(){var a="http://fast.",b="?d_nsid="+l+"#"+encodeURIComponent(document.location.href);if("string"===typeof H&&H.length)return H+
b;t.IS_HTTPS&&(a=!0===N?"https://fast.":"https://");return a+u+".demdex.net/dest5.html"+b};var v={MAX_SYNCS_LENGTH:649,id:"destination_publishing_iframe_"+u+"_"+l,url:B(),onPagePixels:[],iframeHost:null,getIframeHost:function(a){if("string"===typeof a){var b=a.split("/");if(3<=b.length)return b[0]+"//"+b[2];k.push("getIframeHost: url is malformed: "+a);return a}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],ibsDeleted:[],jsonForComparison:[],
jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,attachIframe:function(){function a(){d=document.createElement("iframe");d.sandbox="allow-scripts allow-same-origin";d.title="Adobe ID Syncing iFrame";d.id=e.id;d.name=e.id+"_name";d.style.cssText="display: none; width: 0; height: 0;";d.src=e.url;e.newIframeCreated=!0;
b();document.body.appendChild(d)}function b(){d.addEventListener("load",function(){d.className="aamIframeLoaded";e.iframeHasLoaded=!0;e.requestToProcess()})}if(!t.IS_IE_LESS_THAN_10){var e=this,d=document.getElementById(this.id);d?"IFRAME"!==d.nodeName?(this.id+="_2",this.iframeIdChanged=!0,a()):(this.newIframeCreated=!1,"aamIframeLoaded"!==d.className?(this.originalIframeHasLoadedAlready=!1,b()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=d,this.requestToProcess())):
a();this.iframe=d}},requestToProcess:function(a,b){function e(){d.jsonForComparison.push(a);d.jsonWaiting.push([a,b])}var d=this,h,n;h=p.adms.instance;a===Object(a)&&h===Object(h)&&h.idSyncContainerID===l&&(v.ibsDeleted.push(a.ibs),delete a.ibs);if(a&&!r.isEmptyObject(a))if(h=JSON.stringify(a.ibs||[]),n=JSON.stringify(a.dests||[]),this.jsonForComparison.length){var c=!1,f,g,k;f=0;for(g=this.jsonForComparison.length;f<g;f++)if(k=this.jsonForComparison[f],h===JSON.stringify(k.ibs||[])&&n===JSON.stringify(k.dests||
[])){c=!0;break}c?this.jsonDuplicates.push(a):e()}else e();this.receivedThirdPartyCookiesNotification&&this.jsonWaiting.length&&(h=this.jsonWaiting.shift(),!1===this.newIframeCreated&&delete h[0].ibs,this.process(h[0],h[1]),this.requestToProcess());this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.sendingMessages=!0,this.sendMessages())},checkIfRegionChanged:function(a){var b=q.getDilCookieField(t.REGION);null!==b&&"undefined"!==typeof a.dcs_region&&parseInt(b,10)!==a.dcs_region&&
(this.regionChanged=!0,this.timesRegionChanged++,q.setDilCookieField(t.FIRST_PARTY_SYNCS_ON_PAGE,""),q.setDilCookieField(t.FIRST_PARTY_SYNCS,""));"undefined"!==typeof a.dcs_region&&q.setDilCookieField(t.REGION,a.dcs_region)},processSyncOnPage:function(a){var b,e,d;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(a=0;a<e;a++)d=b[a],d.syncOnPage&&this.checkFirstPartyCookie(d,"","syncOnPage")},process:function(a,b){var e=encodeURIComponent,d,h,n,c,f,g;b===Object(b)&&(g=q.encodeAndBuildRequest(["",
b.dpid||"",b.dpuuid||""],","));if((d=a.dests)&&d instanceof Array&&(h=d.length))for(n=0;n<h;n++)c=d[n],f=[e("dests"),e(c.id||""),e(c.y||""),e(c.c||"")],this.addMessage(f.join("|"));if((d=a.ibs)&&d instanceof Array&&(h=d.length))for(n=0;n<h;n++)c=d[n],f=[e("ibs"),e(c.id||""),e(c.tag||""),q.encodeAndBuildRequest(c.url||[],","),e(c.ttl||""),"",g,c.fireURLSync?"true":"false"],c.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(f.join("|")):c.fireURLSync&&this.checkFirstPartyCookie(c,f.join("|")));
this.jsonProcessed.push(a)},checkFirstPartyCookie:function(a,b,e){var d=(e="syncOnPage"===e?!0:!1)?t.FIRST_PARTY_SYNCS_ON_PAGE:t.FIRST_PARTY_SYNCS,h=this.getOnPageSyncData(d),c=!1,f=!1,g=Math.ceil((new Date).getTime()/t.MILLIS_PER_DAY);h?(h=h.split("*"),f=this.pruneSyncData(h,a.id,g),c=f.dataPresent,f=f.dataValid,c&&f||this.fireSync(e,a,b,h,d,g)):(h=[],this.fireSync(e,a,b,h,d,g))},getOnPageSyncData:function(a){var b=p.adms.instance;return b&&"function"===typeof b.idSyncGetOnPageSyncInfo?b.idSyncGetOnPageSyncInfo():
q.getDilCookieField(a)},pruneSyncData:function(a,b,e){var d=!1,h=!1,c,f,g;if(a instanceof Array)for(f=0;f<a.length;f++)c=a[f],g=parseInt(c.split("-")[1],10),c.match("^"+b+"-")?(d=!0,e<g?h=!0:(a.splice(f,1),f--)):e>=g&&(a.splice(f,1),f--);return{dataPresent:d,dataValid:h}},manageSyncsSize:function(a){if(a.join("*").length>this.MAX_SYNCS_LENGTH)for(a.sort(function(a,e){return parseInt(a.split("-")[1],10)-parseInt(e.split("-")[1],10)});a.join("*").length>this.MAX_SYNCS_LENGTH;)a.shift()},fireSync:function(a,
b,e,d,h,c){function f(a,b,d,e){return function(){g.onPagePixels[a]=null;var h=g.getOnPageSyncData(d),c=[];if(h){var h=h.split("*"),n,f,k;n=0;for(f=h.length;n<f;n++)k=h[n],k.match("^"+b.id+"-")||c.push(k)}g.setSyncTrackingData(c,b,d,e)}}var g=this;if(a){if("img"===b.tag){a=b.url;e=t.IS_HTTPS?"https:":"http:";var k,p,q;d=0;for(k=a.length;d<k;d++){p=a[d];q=/^\/\//.test(p);var l=new Image;l.addEventListener("load",f(this.onPagePixels.length,b,h,c));l.src=(q?e:"")+p;this.onPagePixels.push(l)}}}else this.addMessage(e),
this.setSyncTrackingData(d,b,h,c)},addMessage:function(a){this.messages.push(a)},setSyncTrackingData:function(a,b,e,d){a.push(b.id+"-"+(d+Math.ceil(b.ttl/60/24)));this.manageSyncsSize(a);q.setDilCookieField(e,a.join("*"))},sendMessages:function(){var a="",b=encodeURIComponent;this.regionChanged&&(a=b("---destpub-clear-dextp---"),this.regionChanged=!1);this.messages.length&&(a=a+b("---destpub-combined---")+this.messages.join("%01"),this.postMessage(a),this.messages=[]);this.sendingMessages=!1},postMessage:function(a){DIL.xd.postMessage(a,
this.url,this.iframe.contentWindow);this.messagesPosted.push(a)},receiveMessage:function(a){var b=/^---destpub-to-parent---/;"string"===typeof a&&b.test(a)&&(b=a.replace(b,"").split("|"),"canSetThirdPartyCookies"===b[0]&&(this.canSetThirdPartyCookies="true"===b[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))}},J={traits:function(a){r.isValidPdata(a)&&(m.sids instanceof Array||(m.sids=[]),q.extendArray(m.sids,a));return this},pixels:function(a){r.isValidPdata(a)&&
(m.pdata instanceof Array||(m.pdata=[]),q.extendArray(m.pdata,a));return this},logs:function(a){r.isValidLogdata(a)&&(m.logdata!==Object(m.logdata)&&(m.logdata={}),q.extendObject(m.logdata,a));return this},customQueryParams:function(a){r.isEmptyObject(a)||q.extendObject(m,a,p.reservedKeys);return this},signals:function(a,b){var e,d=a;if(!r.isEmptyObject(d)){if(b&&"string"===typeof b)for(e in d={},a)a.hasOwnProperty(e)&&(d[b+e]=a[e]);q.extendObject(m,d,p.reservedKeys)}return this},declaredId:function(a){p.declaredId.setDeclaredId(a,
"request");return this},result:function(a){"function"===typeof a&&(m.callback=a);return this},afterResult:function(a){"function"===typeof a&&(m.postCallbackFn=a);return this},useImageRequest:function(){m.useImageRequest=!0;return this},clearData:function(){m={};return this},submit:function(){C.submitRequest(m);m={};return this},getPartner:function(){return u},getContainerNSID:function(){return l},getEventLog:function(){return k},getState:function(){var a={},b={};q.extendObject(a,p,{registerRequest:!0});
q.extendObject(b,v,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{initConfig:c,pendingRequest:m,otherRequestInfo:a,destinationPublishingInfo:b}},idSync:function(a){if(G)return"Error: id syncs have been disabled";if(a!==Object(a)||"string"!==typeof a.dpid||!a.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof a.url||!a.url.length)return"Error: config.url is empty";var b=a.url,e=a.minutesToLive,d=encodeURIComponent,h=v,c,b=b.replace(/^https:/,"").replace(/^http:/,
"");if("undefined"===typeof e)e=20160;else if(e=parseInt(e,10),isNaN(e)||0>=e)return"Error: config.minutesToLive needs to be a positive number";c=q.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],",");a=["ibs",d(a.dpid),"img",d(b),e,"",c];h.addMessage(a.join("|"));p.firstRequestHasFired&&h.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(G)return"Error: id syncs have been disabled";if(a!==Object(a)||"string"!==typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";
a.url="//dpm.demdex.net/ibs:dpid="+a.dpid+"&dpuuid="+a.dpuuid;return this.idSync(a)},passData:function(a){if(r.isEmptyObject(a))return"Error: json is empty or not an object";v.ibsDeleted.push(a.ibs);delete a.ibs;C.defaultCallback(a);return a},getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var a=p,b=a.modStatsParams,e=a.platformParams,d;if(!b){b={};for(d in e)e.hasOwnProperty(d)&&!a.nonModStatsParams[d]&&(b[d.replace(/^d_/,"")]=e[d]);!0===z?b.coop_safe=1:
!1===z&&(b.coop_unsafe=1);a.modStatsParams=b}return b},setAsCoopSafe:function(){z=!0;return this},setAsCoopUnsafe:function(){z=!1;return this}},C={corsMetadata:function(){var a="none",b=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(b=!1),0<
Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(b=!1));return{corsType:a,corsCookiesEnabled:b}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(a){p.registerRequest(C.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var b=a.callback,e="img",d,h;if(!r.isEmptyObject(A)){var c;for(d in A)A.hasOwnProperty(d)&&(h=A[d],null==h||""===h||!(d in a)||h in a||h in p.reservedKeys||
(c=a[d],null!=c&&""!==c&&(a[h]=c)))}r.isValidPdata(a.sids)||(a.sids=[]);r.isValidPdata(a.pdata)||(a.pdata=[]);r.isValidLogdata(a.logdata)||(a.logdata={});a.logdataArray=q.convertObjectToKeyValuePairs(a.logdata,"=",!0);a.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof b&&(b=this.defaultCallback);d=this.makeRequestSrcData(a);(h=this.getCORSInstance())&&!0!==a.useImageRequest&&(e="cors");return{tag:e,src:d.src,corsSrc:d.corsSrc,callbackFn:b,postCallbackFn:a.postCallbackFn,useImageRequest:!!a.useImageRequest,
requestData:a,corsInstance:h,corsPostData:d.corsPostData}},defaultCallback:function(a,b){v.checkIfRegionChanged(a);v.processSyncOnPage(a);var e,d,h,c,f,g,k,l,m;if((e=a.stuff)&&e instanceof Array&&(d=e.length))for(h=0;h<d;h++)if((c=e[h])&&c===Object(c)){f=c.cn;g=c.cv;k=c.ttl;if("undefined"===typeof k||""===k)k=Math.floor(q.getMaxCookieExpiresInMinutes()/60/24);l=c.dmn||"."+document.domain.replace(/^www\./,"");m=c.type;f&&(g||"number"===typeof g)&&("var"!==m&&(k=parseInt(k,10))&&!isNaN(k)&&q.setCookie(f,
g,1440*k,"/",l,!1),M.stuffed[f]=g)}e=a.uuid;r.isPopulatedString(e)&&!r.isEmptyObject(y)&&(d=y.path,"string"===typeof d&&d.length||(d="/"),h=parseInt(y.days,10),isNaN(h)&&(h=100),q.setCookie(y.name||"aam_did",e,1440*h,d,y.domain||"."+document.domain.replace(/^www\./,""),!0===y.secure));D||p.abortRequests||v.requestToProcess(a,b)},makeRequestSrcData:function(a){a.sids=r.removeEmptyArrayValues(a.sids||[]);a.pdata=r.removeEmptyArrayValues(a.pdata||[]);var b=p,e=b.platformParams,d=q.encodeAndBuildRequest(a.sids,
","),c=q.encodeAndBuildRequest(a.pdata,","),f=(a.logdataArray||[]).join("&");delete a.logdataArray;var g=t.IS_HTTPS?"https://":"http://",k=b.declaredId.getDeclaredIdQueryString(),l=b.adms.instance?b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs()):"",m=[],x,v,I,w;for(x in a)if(!(x in b.reservedKeys)&&a.hasOwnProperty(x))if(v=a[x],x=encodeURIComponent(x),v instanceof Array)for(I=0,w=v.length;I<w;I++)m.push(x+"="+encodeURIComponent(v[I]));else m.push(x+"="+encodeURIComponent(v));a=m.length?"&"+
m.join("&"):"";b="d_nsid="+e.d_nsid+b.getCoopQueryString()+k+l+(d.length?"&d_sid="+d:"")+(c.length?"&d_px="+c:"")+(f.length?"&d_ld="+encodeURIComponent(f):"");e="&d_rtbd="+e.d_rtbd+"&d_jsonv="+e.d_jsonv+"&d_dst="+e.d_dst;g=g+u+".demdex.net/event";c=d=g+"?"+b+e+a;2048<d.length&&(d=d.substring(0,2048).substring(0,d.lastIndexOf("&")));return{corsSrc:g+"?_ts="+(new Date).getTime(),src:d,originalSrc:c,corsPostData:b+e+a,isDeclaredIdCall:""!==k}},fireRequest:function(a){if("img"===a.tag)this.fireImage(a);
else{var b=p.declaredId,b=b.declaredId.request||b.declaredId.init||{};this.fireCORS(a,{dpid:b.dpid||"",dpuuid:b.dpuuid||""})}},fireImage:function(a){var b=p,e,d;b.abortRequests||(b.firing=!0,e=new Image(0,0),b.sent.push(a),e.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},d=function(d){g="imgAbortOrErrorHandler received the event of type "+d.type;k.push(g);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},e.addEventListener("error",
d),e.addEventListener("abort",d),e.src=a.src)},fireCORS:function(a,b){var e=this,d=p,c=this.corsMetadata.corsType,f=a.corsSrc,l=a.corsInstance,q=a.corsPostData,m=a.postCallbackFn,r="function"===typeof m;if(!d.abortRequests&&!S){d.firing=!0;try{l.open("post",f,!0),"XMLHttpRequest"===c&&(l.withCredentials=!0,l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var c;try{if(c=JSON.parse(this.responseText),
c!==Object(c)){e.handleCORSError(a,b,"Response is not JSON");break a}}catch(h){e.handleCORSError(a,b,"Error parsing response as JSON");break a}G&&(v.ibsDeleted.push(c.ibs),delete c.ibs);try{var f=a.callbackFn;d.firing=!1;d.fired.push(a);d.num_of_cors_responses++;f(c,b);r&&m(c,b)}catch(h){h.message="DIL handleCORSResponse caught error with message "+h.message;g=h.message;k.push(g);h.filename=h.filename||"dil.js";h.partner=u;DIL.errorModule.handleError(h);try{f({error:h.name+"|"+h.message},b),r&&m({error:h.name+
"|"+h.message},b)}catch(n){}}finally{d.registerRequest()}}}),l.onerror=function(){e.handleCORSError(a,b,"onerror")},l.ontimeout=function(){e.handleCORSError(a,b,"ontimeout")},l.send(q)}catch(t){this.handleCORSError(a,b,"try-catch")}d.sent.push(a);d.declaredId.declaredId.request=null}},handleCORSError:function(a,b,e){p.num_of_cors_errors++;p.corsErrorSources.push(e)},handleRequestError:function(a,b){var e=p;k.push(a);e.abortRequests=!0;e.firing=!1;e.errored.push(b);e.registerRequest()}},r={isValidPdata:function(a){return a instanceof
Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,e=a.length,d,c=[],b=0;b<e;b++)d=a[b],"undefined"!==typeof d&&null!==d&&""!==d&&c.push(d);return c},isPopulatedString:function(a){return"string"===typeof a&&a.length}},q={convertObjectToKeyValuePairs:function(a,b,e){var d=[],c,f;b||(b="=");
for(c in a)a.hasOwnProperty(c)&&(f=a[c],"undefined"!==typeof f&&null!==f&&""!==f&&d.push(c+b+(e?encodeURIComponent(f):f)));return d},encodeAndBuildRequest:function(a,b){return a.map(function(a){return encodeURIComponent(a)}).join(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),e,d,c;e=0;for(d=b.length;e<d;e++){for(c=b[e];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(a))return decodeURIComponent(c.substring(a.length,c.length))}return null},setCookie:function(a,b,e,
d,c,f){var g=new Date;e&&(e*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(e?";expires="+(new Date(g.getTime()+e)).toUTCString():"")+(d?";path="+d:"")+(c?";domain="+c:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,e){var d;if(a===Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!r.isEmptyObject(e)&&d in e||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return t.SIX_MONTHS_IN_MINUTES},
getCookieField:function(a,b){var e=this.getCookie(a),d=decodeURIComponent;if("string"===typeof e){var e=e.split("|"),c,f;c=0;for(f=e.length-1;c<f;c++)if(d(e[c])===b)return d(e[c+1])}return null},getDilCookieField:function(a){return this.getCookieField(t.DIL_COOKIE_NAME,a)},setCookieField:function(a,b,c){var d=this.getCookie(a),f=!1,g=encodeURIComponent;b=g(b);c=g(c);if("string"===typeof d){var d=d.split("|"),k,g=0;for(k=d.length-1;g<k;g++)if(d[g]===b){d[g+1]=c;f=!0;break}f||(g=d.length,d[g]=b,d[g+
1]=c)}else d=[b,c];this.setCookie(a,d.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)},setDilCookieField:function(a,b){return this.setCookieField(t.DIL_COOKIE_NAME,a,b)},getDomain:function(a){!a&&window.location&&(a=window.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var b=a.split("."),c=b.length-1,d=c-1;1<c&&2>=b[c].length&&(2===b[c-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+b[c]+","))&&d--;if(0<d)for(a="";c>=d;)a=b[c]+(a?".":"")+a,c--}return a},replaceMethodsWithFunction:function(a,
b){var c;if(a===Object(a)&&"function"===typeof b)for(c in a)a.hasOwnProperty(c)&&"function"===typeof a[c]&&(a[c]=b)}};"error"===u&&0===l&&window.addEventListener("load",function(){DIL.windowLoaded=!0});var T=!1,K=function(){T||(T=!0,p.registerRequest(),U(),D||p.abortRequests||v.attachIframe())},U=function(){D||setTimeout(function(){Q||p.firstRequestHasFired||("function"===typeof L?J.afterResult(L).submit():J.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};w=document;"error"!==u&&(DIL.windowLoaded?
K():"complete"!==w.readyState&&"loaded"!==w.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0;K()}):(DIL.windowLoaded=!0,K()));if("error"!==u)try{DIL.xd.receiveMessage(function(a){v.receiveMessage(a.data)},v.getIframeHost(v.url))}catch(a){}p.declaredId.setDeclaredId(O,"init");p.processVisitorAPI();t.IS_IE_LESS_THAN_10&&q.replaceMethodsWithFunction(J,function(){return this});this.api=J;this.getStuffedVariable=function(a){var b=M.stuffed[a];b||"number"===typeof b||(b=q.getCookie(a))||
"number"===typeof b||(b="");return b};this.validators=r;this.helpers=q;this.constants=t;this.log=k;E&&(this.pendingRequest=m,this.requestController=p,this.setDestinationPublishingUrl=B,this.destinationPublishing=v,this.requestProcs=C,this.variables=M,this.callWindowLoadFunctions=K)},DIL.extendStaticPropertiesAndMethods=function(c){var f;if(c===Object(c))for(f in c)c.hasOwnProperty(f)&&(this[f]=c[f])},DIL.extendStaticPropertiesAndMethods({version:"7.0",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},
variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(c){this.windowLoaded="function"===typeof c?!!c():"boolean"===typeof c?c:!0},create:function(c){try{return new DIL(c)}catch(f){throw Error("Error in attempt to create DIL instance with DIL.create(): "+f.message);}},registerDil:function(c,f,k){f=f+"$"+k;f in this.dils||(this.dils[f]=c)},getDil:function(c,f){var k;"string"!==typeof c&&(c="");f||(f=0);k=c+"$"+f;return k in this.dils?
this.dils[k]:Error("The DIL instance with partner = "+c+" and containerNSID = "+f+" was not found")},dexGetQSVars:function(c,f,k){f=this.getDil(f,k);return f instanceof this?f.getStuffedVariable(c):""},xd:{postMessage:function(c,f,k){f&&k.postMessage(c,f.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))},receiveMessage:function(c,f){var k;try{c&&(k=function(g){if("string"===typeof f&&g.origin!==f||"[object Function]"===Object.prototype.toString.call(f)&&!1===f(g.origin))return!1;c(g)}),window[c?"addEventListener":
"removeEventListener"]("message",k,!1)}catch(g){}}}}),DIL.errorModule=function(){var c=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),f={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},k=!1;return{activate:function(){k=!0},handleError:function(g){if(!k)return"DIL error module has not been activated";g!==Object(g)&&
(g={});var w=g.name?(g.name+"").toLowerCase():"",u=[];g={name:w,filename:g.filename?g.filename+"":"",partner:g.partner?g.partner+"":"no_partner",site:g.site?g.site+"":document.location.href,message:g.message?g.message+"":""};u.push(w in f?f[w]:f.noerrortypedefined);c.api.pixels(u).logs(g).useImageRequest().submit();return"DIL error report sent"},pixelMap:f}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(c,f,k){var g="";f=f||"Error caught in DIL module/submodule: ";c===Object(c)?
g=f+(c.message||"err has no message"):(g=f+"err is not a valid object",c={});c.message=g;k instanceof DIL&&(c.partner=k.api.getPartner());DIL.errorModule.handleError(c);return this.errorMessage=g}}});

// End AudienceManagement Module

//tealium universal tag - utag.sender.19063.am161 v4.0.201802141549, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{
  (function(id,loader,u){
    try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
    u.ev={'view':1,'link':1,'video':1};
    u.o=aawap;
    u.varlist={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(var i=1;i<76;i++){u.varlist['prop'+i]='c'+i;u.varlist['eVar'+i]='v'+i};
    u.pushlt=function(l,v){if(typeof l!="undefined")l.push(v)};
  u.map={"wa_geo":"eVar1,prop1","wa_local":"eVar2,prop2","wa_section":"eVar3,prop3,channel","wa_site_id":"eVar4,prop4","wa_org2":"eVar5,prop5,hier1","wa_org3":"eVar6,prop6,hier2","wa_org4":"eVar7,prop7,hier3","wa_org5":"eVar8,prop8,hier4","wa_org6":"eVar9,prop9,hier5","wa_org7":"eVar10,prop10,hier6","wa_org8":"eVar11,prop11","content_audience":"eVar12,prop12","content_sub_audience":"prop13,eVar13","content_org_initiative":"eVar14,prop14","content_program":"eVar15,prop15","content_sub_org_initiative":"eVar16,prop16","content_industry":"prop17,eVar17","wa_product_id":"prop20,eVar20","wa_campaign":"eVar21,prop21","wa_login":"eVar22,prop22","wa_program_level":"eVar23,prop23","wa_user_type":"eVar24,prop24","wa_aid":"eVar25","wa_crid":"eVar26","wa_plid":"eVar27","wa_sid":"eVar28","wa_mid":"eVar29","wa_elq_id_short":"eVar30","wa_erpm_id":"eVar31","wa_erpm_org_id":"eVar32","wp_post_tags":"eVar33,prop25","wa_page_name":"pageName,eVar36,prop26","wa_page_url":"pageURL,eVar35","wa_campaign_cid":"campaign","wa_amc_id":"eVar34","dom.referrer":"eVar37,prop27","dom.domain":"server","wa_product_id_secondary":"eVar50,prop40","wa_onresearch_id":"eVar51","wa_client_id":"eVar52","wa_membership_group":"eVar53,list1","wa_elq_id":"eVar54","wa_secondary_audience":"eVar55,prop41","wa_resource_type":"eVar56,prop42","wa_topic":"eVar57,prop43","wa_programidentifier":"eVar60","wa_cquser_coverage_type":"eVar61","wa_page_type_micro":"eVar64,prop47","wa_page_type_macro":"eVar65,prop48","wa_aam_profile_id":"eVar66","dnb_status":"eVar70","dnb_duns":"eVar71","dnb_company":"eVar72","dnb_zip":"eVar73","dnb_ultimateduns":"eVar74","dnb_naicscode":"eVar75","dnb_naicsdescription":"eVar76","dnb_siccode":"eVar77","dnb_sicdescription":"eVar78","dnb_itexpense":"eVar79","dnb_jobfuncion":"eVar81","dnb_jobseniority":"eVar80","content_ter_initiative":"eVar18,prop18","content_sub_ter_initiative":"eVar19,prop19","wa_clicktale_id":"eVar82","wa_master_account_id":"eVar90","wa_org9":"prop52,eVar91","elq_industry":"eVar92","elq_marketing_audience":"eVar93","elq_company_size":"eVar94","elq_country":"eVar95","elq_job_function":"eVar96","wa_intel_technology":"eVar97","wa_system_type":"eVar98","wa_intel_platform":"eVar99","wa_internal_search_referrer":"eVar100","wa_rwd":"eVar102","wa_transl_status":"eVar103","wa_author":"eVar104","wa_reference_design":"eVar105","wa_custom_content_group":"eVar106","target_cookie":"eVar107","wa_page_id":"eVar110","wa_os":"eVar111","wa_program_lang":"eVar112","wa_software":"eVar113","search_keyword":"eVar118","wa_renewal_status":"eVar119","wa_google_click_id":"eVar122","dnb_country":"eVar120","wa_google_click_type":"eVar123"};
  u.extend=[];

  u.send=function(a,b,c,d,e,f,g,h,ev){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      utag.DB("send:128");
      u.data={
        a : {},
        serial : {}
      };
      u.a=a;
      b.sc_events=b.sc_events||{};

      u.addEvent = function (v, n) {
        var t = [];
        if (v instanceof Array) {
          t = v.slice(0);
        } else if (typeof n !== "undefined") {
          t.push(v + "=" + n);
        } else {
          t.push(v);
        }
        for (var i = 0; i < t.length; i++) {
          b.sc_events[t[i]] = 1;
          u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
        }
        return b.sc_events;
      };

      u.addProduct = function (v) {
        u.data.sc_addProd = "";
        if (v instanceof Array) {
          u.data.sc_addProd = v.join(',');
        } else {
          u.data.sc_addProd = v;
        }
      };

      if (u.a === "link") {
        u.ltflag = true;
        if (typeof b.linkTrackVars === "undefined") { u.ltv = []; }
        if (typeof b.linkTrackEvents === "undefined") { u.lte = []; }
      }
      // Dynamically override using extensions
      u.data.tagdevicetype = "standard";
      u.data.detectserial = "yes";

      

      // Mobile lifecycle var
      if (u.data.tagdevicetype === "mobile") {
        if (b.timestamp || b.timestamp_unix) {
          u.o.timestamp = b.timestamp || b.timestamp_unix;
        }
        u.data.a = {
          "AppID" : b.app_id || "",
          "CarrierName" : b.carrier || "",
          "DeviceName" : b.device || "",
          "HourOfDay" : b.lifecycle_hourofday_local || "",
          "DayOfWeek" : b.lifecycle_dayofweek_local || "",
          "OSVersion" : b.os_version || b.platform_version || "",
          "Resolution" : b.device_resolution || ""
        }
        if (b.lifecycle_type) {
          u.data.a.disable_wake_track = false;
          u.data.a.disable_sleep_track = false;
          u.data.a.DaysSinceFirstUse = b.lifecycle_dayssincelaunch || "";
          u.data.a.DaysSinceLastUpgrade = b.lifecycle_dayssinceupdate || "";
          u.data.a.DaysSinceLastUse = b.lifecycle_dayssincelastwake || "";
          u.data.a.Launches = b.lifecycle_launchcount || "";
          u.data.a.InstallDate =  b.lifecycle_firstlaunchdate_MMDDYYYY || "";
          u.data.a.UpgradeEvent = b.lifecycle_isfirstlaunchupdate || "";
          u.data.a.PrevSessionLength = b.lifecycle_priorsecondsawake || "";
        }
        if (b.lifecycle_isfirstlaunch) {
          u.data.a.InstallEvent = "InstallEvent";
        }
        if (b.lifecycle_diddetectcrash) {
          u.data.a.CrashEvent = "CrashEvent";
        }
        if (b.lifecycle_type === "launch") {
          u.data.a.LaunchEvent = "LaunchEvent";
        }
        if (b.lifecycle_isfirslaunchupdate) {
          u.data.a.UpgradeEvent = "UpgradeEvent";
        }
      }

      for (e in utag.loader.GV(u.map)) {
        if (u.data.tagdevicetype === "mobile") {
          if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
            f = u.map[e].split(",");
            for (g = 0; g < f.length; g++) {
              if (f[g].indexOf("contextData.a.") === 0){
                u.data.a[f[g].substring(14)] = b[e];
              }
            }
          }
        } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("SERIAL_") > -1) {
          f = u.map[e].split(",");
          for (g = 0; g < f.length; g++) {
            if (f[g].indexOf("SERIAL_") === 0){
              u.data.serial[f[g].substring(7)]=b[e];
            }
          }
        } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
          f = u.map[e].split(",");
          for (g = 0; g < f.length; g++) {
            if(f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")){
              u.data[f[g].substring(9)]=b[e];
            }
          }
        }
      }

      //Check for disabled lifecycles

      if(u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
        if (b.lifecycle_type === "wake") {
          return false;
        }
      }
      if(u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
        if (b.lifecycle_type === "sleep") {
          return false;
        }
      }

      u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
      u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
      u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
      u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
      if(typeof u.data.id!="undefined"&&u.data.id!=""){
        c=[];d={};ev={};for(e in utag.loader.GV(u.map)){if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){f=u.map[e].split(",");for( g=0;g<f.length;g++){
          var pv = f[g].substring(9);
          if(f[g].indexOf("PRODUCTS_evar")==0 || f[g].indexOf("PRODUCTS_eVar")==0){
            if (b[e] instanceof Array) {
              b.sc_prodevars = b.sc_prodevars || [];
              for (var i = 0; i < b[e].length; i++) {
                var prodvars = {};
                if(typeof b.sc_prodevars[i]!="undefined" && b.sc_prodevars[i]!=""){
                  b.sc_prodevars[i][pv]=b[e][i];
                }else{
                  prodvars[pv]=b[e][i];
                  b.sc_prodevars.push(prodvars);
                }
              }
            }else{
              d[pv] = (b[e]+"").split(",");
            }
          }else if(f[g].indexOf("PRODUCTS_event")==0){
            if(b[e] instanceof Array){
              b.sc_prodevents=b.sc_prodevents || [];
              for (var i = 0; i < b[e].length; i++) {
                var prodevents = {};
                if(typeof b.sc_prodevents[i]!="undefined" && b.sc_prodevents[i]!=""){
                  b.sc_prodevents[i][pv]=b[e][i];
                }else{
                  prodevents[pv]=b[e][i];
                  b.sc_prodevents.push(prodevents);
                }
              }
              u.addEvent(pv);
            }else if (b[e] !== ""){
              ev[pv]=b[e];
              u.addEvent(pv);
            }
          }
        }}}
        e="";for(f in utag.loader.GV(d)){for(g=0;g<d[f].length;g++){if(e!="")e+="|"+f+"="+d[f][g];else e=f+"="+d[f][g];}}
        h="";for(f in utag.loader.GV(ev)){if(h)h+="|"+f+"="+((isNaN(ev[f]))?"1":ev[f]);else h=f+"="+((isNaN(ev[f]))?"1":ev[f]);}
        b.sc_prodevents=b.sc_prodevents||[];
        b.sc_prodevars=b.sc_prodevars || [];
        for(d=0;d<u.data.id.length;d++){
          var h2=h;
          var h3=e;
          if(typeof b.sc_prodevents!="undefined"){
            for (f in b.sc_prodevents[d]) {
              if(typeof b.sc_prodevents[d][f]!="undefined"){
                var l =b.sc_prodevents[d][f];
                if(typeof l!="undefined" && l!="" && isNaN(l)==false){
                  if (h2){
                    h2 += "|" + f + '=' + l;
                  }else{
                    h2 = f + '=' + l;
                  }
                }
              }
            }
          }
          if(typeof b.sc_prodevars!="undefined"){
            for (f in b.sc_prodevars[d]) {
              if(typeof b.sc_prodevars[d][f]!="undefined"){
                var l =b.sc_prodevars[d][f];
                if(typeof l!="undefined" && l!=""){
                  if (h3){
                    h3 += "|" + f + '=' + l;
                  }else{
                    h3 = f + '=' + l;
                  }
                }
              }
            }
          }
          c.push((u.data.category[d]?u.data.category[d]:"")+";"+u.data.id[d]+";"+(u.data.quantity[d]?u.data.quantity[d]:"")+";"+(u.data.price[d]?((u.data.quantity[d]?parseInt(u.data.quantity[d]):1)*parseFloat(u.data.price[d])).toFixed(2):"")+";"+h2+";"+h3);
        }
        if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
          c.push(u.data.sc_addProd);
        }
        u.o.products=c.join(",");
      } else {
        u.o.products = "";
      }

      // Mapping would be b.event_name ==> "prod:event3,click:event4"
      // Data layer variable b.event_name will contain "prod,click" and trigger both event3,event4
      // To serialize, this would be "prod:12345,click"
      var evt=/^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
      for(c in utag.loader.GV(b)){
        if(b[c] !== ""){
          f=(""+b[c]).split(",");
          for(g=0;g<f.length;g++){
            h=f[g].split(":");
            d=[];
            if(u.data.detectserial === "no") {
              if(typeof u.map[c+":"+h.join(":")]!="undefined"){ //fix to check against whole string
                d=u.map[c+":"+h.join(":")].split(",");
              }else if(typeof u.map[c]!="undefined"){
                d=u.map[c].split(",");
              }
            } else {
              //h.length is determined by how many colons are found
              if(h.length>1){
                var subTrigger = h[0];
                //Subtrigger is a concatenation of all but the last index, which is a detected serialization
                for(var i=1; i<h.length-1;i++) {
                  subTrigger += ":"+h[i];
                }
                // Redefine h with subTrigger and detected serialization
                h[0] = subTrigger;
                h[1] = h[h.length-1];
              }
              if(typeof u.map[c+":"+h[0]]!="undefined"){
                d=u.map[c+":"+h[0]].split(",");
              }else if(typeof u.map[c]!="undefined"){
                d=u.map[c].split(",");
              }
            }
            for(e=0;e<d.length;e++){if(d[e]!="events"&&evt.test(d[e])&&d[e].indexOf("SERIAL_")!==0){
              if(u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "" ) {
                u.addEvent(d[e]+":"+u.data.serial[d[e]]);
              } else {
                if(u.data.detectserial === "yes") {
                  u.addEvent(d[e]+(h.length>1?":"+h[1]:""));
                } else {
                  u.addEvent(d[e]);
                }
              }
            }}
          }
        }
      }
      //Placing mobile data in contextData
      for (var m in u.data.a) {
        u.o.contextData["a."+m] = u.data.a[m];
        u.pushlt(u.ltv, "contextData.a." + m);
      }

      for(c in utag.loader.GV(b)){if(typeof u.map[c]!="undefined"){d=u.map[c].split(",");for(e=0;e<d.length;e++){
        // map to VALUE_event51 for events = "event51=60"
        if(d[e].indexOf("VALUE_")==0){
          // If an event serialization was mapped for this event
          if(u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== ""){
            u.addEvent( d[e].substring(6), b[c]+":"+u.data.serial[d[e]] );
          } else {
            u.addEvent(d[e].substring(6), b[c]);
          }
        }else if(d[e]=="doneAction"){
          b.doneAction=b[c];
          if(b.doneAction!="navigate"){
            b.doneAction=eval(b[c]);
          }
        }else if(d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0){
          d[e]=d[e].replace("contextData.", "c.");
          if (d[e][2] !== "a" && d[e][3] !== ".") {   // Exclude mobile vars
            u.o.contextData[d[e].substring(2)] = b[c];
            u.pushlt(u.ltv,"contextData."+d[e].substring(2))
          }
        } else {
          if(c=="sc_events" || c=="sc_prodevents" || c=="sc_prodevars"){
            utag.DB("Error:128: Mapping reserved object name " + c)
          }else{
            u.o[d[e]]=b[c];
	    wap_aa.tms[d[e]] = b[c]; //Integration between TMS and AA
          }
          // if linkTrackVars is mapped then turn off auto-generation of linkTrackVars
          if(d[e]=="s_account"){
            u.o.account=b[c];
          }else if(d[e]=="linkTrackVars"){
            u.ltflag=false;
          }else{
            u.pushlt(u.ltv,d[e]);
          }
        }
      }}}
      d=[];for(c in utag.loader.GV(b.sc_events)){if(b.sc_events[c])d.push(c)};
      if(d.length>0){
        u.o.events=d.join(",");
        u.pushlt(u.lte,u.o.events);
      } else {
        u.o.events = "";
      }

      if(b._ccurrency){
        u.o.currencyCode=b._ccurrency;
      }

      if(b._corder){
        u.pushlt(u.lte,"purchase");
        u.pushlt(u.ltv,"purchaseID");
        u.o.purchaseID=((u.o.purchaseID)?u.o.purchaseID:b._corder);
        u.o.events=((u.o.events)?u.o.events:"purchase");
        if(u.o.events.indexOf("purchase")<0){u.o.events+=",purchase"};
      }

      if(u.a=="view"){
	if (wap_aa.autofire) {
	  aawap.events="event1=1,event62=1,prodView";
	  if (tmsGetParamByName('cid')) {
			aawap.events=aawap.events+",event2=1";
		}
		if (tmsGetParamByName('wapkw')) {
			aawap.events=aawap.events+",event56=1";
		}
		if (utag_data.target_load == "true") { 
			aawap.events = aawap.events + ",event77=1";
		}
		
	  
	  var img = u.o.t();
	  /* still track on user agents Adobe cannot detect */
	  if(typeof img!="undefined" && img!=""){
	    u.img=new Image();u.img.src=img.substring(img.indexOf("src=")+5,img.indexOf("width=")-2);
	  }
	}
      }else if(u.a=="link"){
        if(typeof u.ltv!="undefined" && u.ltflag){
          if(u.o.events){u.ltv.push("events")};
          if(u.o.products){u.ltv.push("products")};
          b.linkTrackVars=u.ltv.join(',')
        }
        if(typeof u.lte!="undefined" && u.ltflag)b.linkTrackEvents=u.lte.join(',');
        u.o.linkTrackVars = (b.linkTrackVars)?b.linkTrackVars:"None";
        u.o.linkTrackEvents = (b.linkTrackEvents)?b.linkTrackEvents:"None";

        if(!u.o.linkType)u.o.linkType='o';
        if(b.link_name)b.link_text=b.link_name;
        b.link_text=(b.link_text)?b.link_text:"no link_name";
        if(b.link_type=='exit link'){u.o.linkType='e'}
        else if(b.link_type=='download link')u.o.linkType='d';

        u.o.tl(((b.link_obj)?b.link_obj:true),u.o.linkType,b.link_text,null,(b.doneAction?b.doneAction:null));
      }

      /* clear variables */
      if("yes"=="yes"){
        u.o.clearVars();
        u.o.contextData = {};
      }
      wap_aa.config.tms_map();
      utag.DB("send:128:COMPLETE");
    }
  }
    try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
  })('128','intel.profile-ssg.intel');
}catch(e){
  console.log(e);
};
//end tealium universal tag
//~~tv:20010.20140318
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Libloader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Libloader sections near the bottom of this file:
      - "Start Libloader Function Call"
      - "End Libloader Function Call"
      - "Start Libloader Callback Function"
      - "End Libloader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Libloader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */

if(wap_tms.custom.youtube){
    // Youtube functions start
    //get percentage of video completion
    function getPercentage(event) {
        var html5Player = event.target;
        var percentage = (html5Player.getCurrentTime() * 100) / html5Player.getDuration();
        percentage = Math.round(percentage);
        return percentage;
    }

	//Function to get video duration
	function getDuration(event) {
        var html5Player = event.target;     
        return html5Player.getDuration();
    }
	
    function onPlayerStateChange(event) {
        if (event) {
            var vidId = getYTplayerId(encodeURIComponent(event.target.getVideoUrl())); //set video id	
            var intervalID;
            var time = 500;
            vidPlayMap(vidId, 'on');
            percentage = getPercentage(event);
            intervalID = setInterval(function () {
                percentageTracking(event, vidId);
            }, time);
            ga_payload.dimension['19,hit'] = " ";
            ga_payload.dimension['64,hit'] = vidId;
            ga_payload.dimension['29,hit'] = "youtube:" + vidId;
            if (event.data == YT.PlayerState.PLAYING) {
                if (percentage == 0) {
                    //vpsIntel.config('video:ump:start'); 
                    //page level tracking
                    trackGaEvent('Videos', "video: play",getYTplayerTite(vidId));
                }
            }

            if (event.data == YT.PlayerState.ENDED) {
                //vpsIntel.config('video:ump:complete'); 
                trackGaEvent('Videos', "video: 100% complete",getYTplayerTite(vidId));
                clearInterval(intervalID);
            }
        }
    }

    //percentage tracking
    function percentageTracking(event, vidId) {
        //var vidId = getYTplayerId(encodeURIComponent(event.target.getVideoUrl())); //set video id
        percentage = getPercentage(event);
		wap_tms.custom.video_duration = getDuration(event);
        if (percentage >= 25 && percentage <= 28) {
            if (ytVideo25[vidId]) {
                percentage = 25;
                videoTracking(percentage, vidId);
                ytVideo25[vidId] = false;
            }
        }
        if (percentage >= 50 && percentage <= 53) { //track 50%		 
            //console.log("percentage: " + percentage); 
            if (ytVideo50[vidId]) {
                percentage = "mid";
                //vpsIntel.config('video:ump:partial'); 
                ga_payload.dimension['19,hit'] = " ";
                ga_payload.dimension['64,hit'] = vidId;
                ga_payload.dimension['29,hit'] = "youtube:" + vidId;
                trackGaEvent('Videos', "video: 50% complete",getYTplayerTite(vidId));
                ytVideo50[vidId] = false;
            }
        } else if (percentage >= 75 && percentage <= 78) { //track 75%		   
            //console.log("percentage: " + percentage); 
            if (ytVideo75[vidId]) {
                percentage = 75;
                videoTracking(percentage, vidId);
                ytVideo75[vidId] = false;
            }
        } else if (percentage >= 90 && percentage <= 93) { //track 90%		 
            //console.log("percentage: " + percentage); 
            if (ytVideo90[vidId]) {
                percentage = 90;
                videoTracking(percentage, vidId);
                ytVideo90[vidId] = false;
            }
        } else if (percentage >= 95 && percentage <= 98) { //track 95%		 
            //console.log("percentage: " + percentage); 
            if (ytVideo95[vidId]) {
                percentage = 95;
                videoTracking(percentage, vidId);
                ytVideo95[vidId] = false;
            }
        }
    }

    //tracking of videos
    function videoTracking(percentage, vidId) {
        ga_payload.dimension['19,hit'] = " ";
        ga_payload.dimension['64,hit'] = vidId;
        ga_payload.dimension['29,hit'] = "youtube:" + vidId;
        trackGaEvent('Videos', "video: " + percentage + "% complete",getYTplayerTite(vidId));
    }

    function vidPlayMap(vidId, status) {
        if (status == 'on') {
			ytVideo25[vidId] = true;
            ytVideo50[vidId] = true;
            ytVideo75[vidId] = true;
            ytVideo90[vidId] = true;
            ytVideo95[vidId] = true;
            ytVideo100[vidId] = true;
        } else {
			ytVideo25[vidId] = false;
            ytVideo50[vidId] = false;
            ytVideo75[vidId] = false;
            ytVideo90[vidId] = false;
            ytVideo95[vidId] = false;
            ytVideo100[vidId] = false;
        }
    }

    function getYTplayerId(c) {
        var decodedurl = decodeURIComponent(c);
        var id = decodedurl.split("?")[1];
        var playparam = id.split("&");
        var playerid;
        if (playparam.length > 0) {
            for (var i = 0; i < playparam.length; i++) {
                var params = playparam[i].split("=");
                if (params[0] == "v") {
                    playerid = params[1];
                }
            }
        } else if (playparam.length == 0) {
            var params = id.split("=");
            if (params[0] == "v") {
                playerid = params[1];
            }
        }
        playerid = (typeof playerid !== "undefined") ? playerid : "unknown";
        return playerid;
    }

    function getYTplayerTite(playerid) {
        var ytApiKey = 'AIzaSyCot8SIpGXEVYftadkWaevanRwebTU9cx0';
        var youTubeURL = 'https://www.googleapis.com/youtube/v3/videos?id=' + playerid + '&key=' + ytApiKey + '&fields=items(snippet(title))&part=snippet';
        var title = "";
        jQuery(function ($) {
            $.ajax({
                url: youTubeURL,
                async: false,
                success: function (data) {
                    title = data.items[0].snippet.title;
                }
            });
        });
        return title.toLowerCase();
    }


    //get YouTube title from API callback
    function ytFeedCallback(data) {     
        var vidId = data.entry.media$group.yt$videoid.$t;
        var vidTitle = data.entry.title.$t;
        ytVidDataObj = vidId;						//Add to ytVidDataObj
        ytTitle[ytVidDataObj] = vidTitle + "";
    }
    // Youtube functions end
		
		
    // Return "true" if there is at least one Youtube video on the page
    function checkYTonPage() {
        for (var e = document.getElementsByTagName('iframe'), x = e.length; x--;)
            if (/youtube.com\/embed/.test(e[x].src)) return true;
        return false;
    }

    //load YouTube API
	if(wap_tms.jquery.ver_1_7_plus){ 
		(function ($) {
			$(document).ready(function () {
				if(checkYTonPage()){
					var doc = document,
						wa = doc.createElement('script');
					wa.type = 'text/javascript';
					wa.async = true;
					wa.src = ('https:' == doc.location.protocol ? 'https' : 'http') + '://www.youtube.com/player_api';
					var s = doc.getElementsByTagName('script')[0];
					s.parentNode.insertBefore(wa, s);
					
					for (var e = document.getElementsByTagName("iframe"), x = e.length; x--;)
						if ( (/youtube.com\/embed/.test(e[x].src)) && (!(/autoplay\=1/.test(e[x].src))) )
							if(e[x].src.indexOf('enablejsapi=') === -1)
								e[x].src += (e[x].src.indexOf('?') ===-1 ? '?':'&') + 'enablejsapi=1';
					
				}
			});
		})($wap);
	}

    //*********************************************************************************************
    //* YouTube tracking config                                                                  *
    //*********************************************************************************************
    var ytVidDataObj = {}, //youTube video metadata object
		ytTitle = {}, //youTube title
		ytVideoId = {}, //youTube video ID
		ytVideoName = {}, //youTube video name = title (if not available we use URL)
		ytVideo25 = {},
		ytVideo50 = {},
		ytVideo75 = {},
		ytVideo90 = {},
		ytVideo95 = {},
		ytVideo100 = {},
		ytPageUrl = document.location.href; //parent page that YouTube video is playing on

    
        // event handlers :Find all YouTube instances and configure
        if(wap_tms.jquery.ver_1_7_plus){  
            (function ($) {
                $(document).ready(function() {
                    setTimeout(function() {					//5 second delay as DOM may not be ready	
						if(checkYTonPage()){
							$("iframe").each(function() {
								var src = $(this).attr('src');
								if (/www\.youtube\.com/.test(src) == true) {
									var vid = src.split("www.youtube.com/embed/")[1].split("?")[0];
		
									//call api to get video title and other metadata
									var ytApiKey = 'AIzaSyCot8SIpGXEVYftadkWaevanRwebTU9cx0';
						var youTubeURL = 'https://www.googleapis.com/youtube/v3/videos?id=' + vid + '&key=' + ytApiKey + '&part=snippet';								
					  $.ajax({
					type : "get",
					url : youTubeURL,
					dataType : "jsonp",
					cache : true,								
					  });			
									//configure player instance
									var player = new YT.Player(this, {
										videoId: vid,
										events: {
											//'onReady': onPlayerReady, 
											'onStateChange': onPlayerStateChange
										}
									});
								}
							});
						}
					}, 5000);
                });
            }($wap));
        }
    

}
/* End Tag Library Code */

/* Start Libloader Library Code */
/* Please Do Not Edit This Section */
if (typeof utag.ut == "undefined") {
    utag.ut = {};
}
utag.ut.libloader2 = function(o, a, b, c, l) {
    a = document;
    b = a.createElement('script');
    b.language = 'javascript';
    b.type = 'text/javascript';
    b.async = true;
    b.src = o.src;
    if (o.id) { b.id = o.id }
    if (typeof o.cb == 'function') {
        b.hFlag = 0;
        b.onreadystatechange = function() {
            if ((this.readyState == 'complete' || this.readyState == 'loaded') && !b.hFlag) {
                b.hFlag = 1;
                o.cb();
            }
        };
        b.onload = function() {
            if (!b.hFlag) {
                b.hFlag = 1;
                o.cb();
            }
        };
    }
    l = o.loc || 'head';
    c = a.getElementsByTagName(l)[0];
    if (c) {
        if (l == 'script') {
            c.parentNode.insertBefore(b, c);
        } else {
            c.appendChild(b);
        }
        utag.DB("Attach to " + l + ": " + o.src);
    }
};
/* End Libloader Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.201802141549, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */


        /* Start Tag Sending Code */

          // Insert your tag sending code here.

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_90' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_90' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("90", "intel.profile-ssg.intel");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Loader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Loader sections near the bottom of this file:
      - "Start Loader Function Call"
      - "End Loader Function Call"
      - "Start Loader Callback Function"
      - "End Loader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Loader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */
/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.201802141549, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */


        /* Start Tag Sending Code */
	!function(d,s){var ia=d.createElement(s);ia.async=1,s=d.getElementsByTagName(s)[0],ia.src='//js.idio.co/1187.js',s.parentNode.insertBefore(ia,s)}(document,'script');
        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_273' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_273' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("273", "intel.profile-ssg.intel");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag(function(){ if(typeof utag!='undefined'){utag.initcatch=true;for(var i in utag.loader.GV(utag.loader.cfg)){var b=utag.loader.cfg[i];if(b.load!=4){utag.initcatch=false;break};if(b.wait==1){utag.initcatch=false;break}};if(utag.initcatch)utag.handler.INIT();} })();