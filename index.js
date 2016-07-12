'use strict'

function * anyStatus (next) {
  const ctx = this
  const status = ctx.query.status
  if (status === 'default' || status === undefined) {
    return yield next
  }
  try {
    ctx.status = parseInt(status)
  } catch (err) {
    console.error(err)
    ctx.status = 501
  }
  return yield next
}

function * anyHeader (next) {
  const ctx = this
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
  return yield next
}

module.exports = {
  anyStatus: anyStatus,
  anyHeader: anyHeader
}
