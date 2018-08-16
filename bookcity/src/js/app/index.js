define(['get'], function(get) {

    // ctx所有的路由对象
    var init = {};
    init.start = function(ctx, next) {
        // console.log(ctx);
        ctx.data = {};
        next();
    };
    init.bookcity = function(ctx, next) {
        get('/views/bookcity.html', function(html) {
            ctx.data.index = 0;
            ctx.data.script = 'bookcity'; // js文件名
            ctx.data.url = '/api/bookcity'; // 获取数据接口
            ctx.data.context = html;
            next();
        });
        // console.log(11);
    }
    init.bookshelf = function(ctx, next) {
            get('/views/bookshelf.html', function(html) {
                ctx.data.index = 1;
                ctx.data.script = 'bookshelf'; // js文件名
                ctx.data.url = '/api/bookshelf'; // 获取数据接口
                ctx.data.context = html;
                next();
            });
            // console.log(22)
        }
        // 所有操作
    init.render = function(ctx) {
        require([ctx.data.script], function(cb) {
            cb(ctx.data);
        })
    }
    return init;
})