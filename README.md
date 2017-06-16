# string-utils

Stringn utils for Javascript, similar to Commons Lang StringUtils in Java world

### Server-side usage

Install the library with `npm install string-utils-js`

```javascript
var stringUtils = require('string-utils-js');

function init (isEnabled) {
  this.isEnabled = stringUtils.toBooleanNonStrict(isEnabled);
}
```

### Conversion

- **toBooleanNonStrict(entity [, defaultValue])** - convert entity to boolean.

Conversion rules:
* Boolean: returns original value
* String: returns TRUE if 'true' (case-insensitive) or '1', FALSE otherwise;
* Number: returns TRUE if 1, FALSE otherwise;
* Null or undefined: default if default value is provided, FALSE otherwise;
* Object: throw an error.

### Tests

```sh
$ npm test
```

### License (MIT)

```
Copyright (c) 2017 Igor Savin <kibertoad@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
