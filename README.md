# koa-httpany

Koa middleware that make your app response with arbitrary http status and headers, based on query string.

[![Travis](https://img.shields.io/travis/flowmemo/koa-httpany.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/flowmemo/koa-httpany)
[![Coveralls branch](https://img.shields.io/coveralls/flowmemo/koa-httpany/master.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/flowmemo/koa-httpany?branch=master)

## Installation
```shell
$ npm install koa-httpany
```

## Example

```js
'use strict'
var Koa = require('koa')
var httpAny = require('.')
var app = new Koa()
app.use(httpAny.anyStatus)
app.use(httpAny.anyHeader)
app.use((ctx, next) => {
  ctx.body = JSON.stringify(ctx, null, 2)
  return next()
})
app.listen(3000)
console.log('open http://localhost:3000/?status=201&foo=bar&answer=42 to see result')
```

You can see that response http status is 201, and headers contains "foo: bar" and "answer: 42".

## WARNING
Don't use this middleware in production environment for safety considerations. 

## License
MIT © [flowmemo](http://weibo.com/flowmemo)