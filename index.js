'use strict'

function anyStatus (ctx, next) {
  const status = ctx.query.status
  if (status === 'default' || status === undefined) {
    return next()
  }
  try {
    ctx.status = parseInt(status)
  } catch (err) {
    console.error(err)
    ctx.status = 501
  }
  return next()
}

function anyHeader (ctx, next) {
  let query = JSON.parse(JSON.stringify(ctx.query))
  delete query.status // not set 'status' field in header
  try {
    ctx.set(query)
  } catch (err) {
    console.error(err)
    ctx.status = 501
  }
  if (!ctx.get('Access-Control-Allow-Origin')) {
    ctx.set('Access-Control-Allow-Origin', '*')
  }
  return next()
}

module.exports = {
  anyStatus: anyStatus,
  anyHeader: anyHeader
}
