# angular-seconds-time

[![Build Status](https://travis-ci.org/donnfelker/angular-seconds-time.png?branch=master)](https://travis-ci.org/donnfelker/angular-seconds-time)

AngularJS filter for converting a number of seconds to a simple time of day

## Usage

Include angular-seconds-time.js in your application.

```html
<script src="angular-seconds-time.js"></script>
```

Add the `secondsTime` module to your application's dependencies.

```js
angular.module('myApp', ['secondsTime']);
```

Use the filter by passing it a number of seconds.

```html
<p>{{ 60 | secondsTime }}</p>
<p>{{ 72000 | secondsTime }}</p>
```

The above example will look something like this:

> 12:01AM
>
> 8:00PM

## License

Released under the terms of MIT License:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
