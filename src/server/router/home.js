const router = require("koa-router")();

router
  .get('/home', async (ctx, next) => {
    ctx.body = 123
  })



module.exports = router;