const data = require('./data');
const moment = require('moment');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  let url = ctx.url;
  let request = ctx.request;
  let userTime = request.query.time;

  let dataFilter = data.map((item) => {
    if (Date.parse(item.createAt) > Date.parse(new Date(userTime))) {
      return moment(item.createAt).format();
    }
  });

  ctx.body = {
    errno:0,
    datamsg:"请求成功",
    data:dataFilter,
  }

});
app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000');
});
