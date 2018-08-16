define(['page', 'index'], function(page, init) {
    // 此模块只做路由处理,只放路由接口。
    page('*', init.start);
    page('/', '/index/bookcity');
    page('/index/bookcity', init.bookcity);
    page('/index/bookshelf', init.bookshelf);
    page('*', init.render);
    page(); // 调用
})