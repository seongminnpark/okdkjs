// utils.js

var _okdk;

module.exports = function(okdk) {
    return new Utils(okdk);
};

/**
 * Initialize utility module.
 * @ignore
 * @constructor
 *
 * @param {Object} okdk - OkeyDokey module instance.
 */
function Utils(okdk) {
	_okdk = okdk;
}

/**
 * Create byte array from string.
 *
 * @param {string} string - String to convert to byte array.
 * @param {byte[]} bytes - Converted byte array.
 */
Utils.prototype.stringToByteArray = function(string) {
	let utf8 = unescape(encodeURIComponent(string));

	let array = [];
	for (let i = 0; i < utf8.length; i++) {
	    array.push(utf8.charCodeAt(i));
	}

	return array;
};

/**
 * Calculate grid id from latitude and longitude.
 *
 * @param {int} latitude - Latitude of coordinate.
 * @param {int} longitude - Longitude of coordinate.
 * @param {boolean} gridId - Id within the Earth's grid.
 */
Utils.prototype.getGridId = function(latitude, longitude) {
	return 0;
};