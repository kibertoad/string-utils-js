const _ = require('lodash');

/**
 * @param {*} source
 *
 * Rules for the conversion of source:
 *
 * Boolean: returns original value
 * String: returns TRUE if 'true' (case-insensitive) or '1', FALSE otherwise;
 * Number: returns TRUE if 1, FALSE otherwise;
 * Null or undefined: default if default value is provided, FALSE otherwise;
 * Object: throw an error.
 *
 * @returns {boolean}
 */
function toBooleanNonStrict(source, defaultValue) {
  if (_.isNil(source) || source == 0) {
    return defaultValue || false;
  }

  if (_.isBoolean(source)) {
    return source;
  }

  if (_.isString(source)) {
    return (source.toLowerCase() === 'true' || source == 1);
  }

  throw new Error('Expected to receive String, Number or Boolean, instead received: ' + JSON.stringify(source));
}

module.exports = {toBooleanNonStrict};
