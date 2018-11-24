const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    // let url =ctx.url;
    // let request =ctx.request;
    // let req_query = request.query;
    // let req_querystring = request.querystring;
    ctx.body={
        // url,
        // req_query,
        // req_querystring
        data:[
          {
            name:"todo1",
            createAt:new Date().getTime()
          },
          {
            name:"todo2",
            createAt:new Date().getTime()
          },
          {
            name:"todo3",
            createAt:new Date().getTime()
          },
        ]
    }
});
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});