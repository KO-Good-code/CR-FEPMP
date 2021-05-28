const Koa = require("koa");
const json = require("koa-json");
const onerror = require("koa-error");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const cors = require("koa2-cors");
const router = require('./router/index')


const app = new Koa();

onerror(app);

app.use(bodyparser({
  enableTypes:['json', 'form', 'text','formdata']
}))

app.use(json())
app.use(logger())
app.use(cors({
  origin: "*",
  allowMethods: ['GET', 'POST', 'DELETE','OPTIONS']
}))

app.use((ctx, next) => {
  return next().catch((err) => {
      if (401 == err.status) {
          ctx.status = 401;
          ctx.body = err;
      } else {
          throw err;
      }
  });
});


app.use(router.routes(), router.allowedMethods())


module.exports = app;