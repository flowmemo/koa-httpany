# koa-httpany

koa middleware that makes your app response with arbitrary http status and headers, based on user's query string.

For koa 2.x support, see `master` branch.

[![Travis](https://img.shields.io/travis/flowmemo/koa-httpany.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/flowmemo/koa-httpany)
[![Coveralls branch](https://img.shields.io/coveralls/flowmemo/koa-httpany/master.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/flowmemo/koa-httpany?branch=master)
[![npm](https://img.shields.io/npm/v/koa-httpany.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/koa-httpany)

## Installation
```shell
$ npm install koa-httpany
```

## Example

```js
'use strict'
var koa = require('koa')
var httpAny = require('.')
var app = koa()
app.use(httpAny.anyStatus)
app.use(httpAny.anyHeader)
app.use(function * (next) {
  ctx.body = JSON.stringify(ctx, null, 2)
  return yield next
})
app.listen(3000)
console.log('open http://localhost:3000/?status=201&foo=bar&answer=42 to see result')
```

You can see that response http status is 201, and headers contain "foo: bar" and "answer: 42".

## WARNING
Don't use this middleware in a production environment for safety considerations. 

## License
MIT © [flowmemo](http://weibo.com/flowmemo)