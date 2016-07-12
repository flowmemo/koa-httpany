'use strict'
var Koa = require('koa')
var httpAny = require('.')
var app = new Koa()
app.use(httpAny.anyStatus)
app.use(httpAny.anyHeader)
app.use(function * (next) {
  let ctx = this
  const originStatus = ctx.status
  ctx.body = JSON.stringify(ctx, null, 2)
  ctx.status = originStatus
  return yield next
})
app.listen(3000)
console.log('open http://localhost:3000/?status=201&foo=bar&answer=42 to see result')
