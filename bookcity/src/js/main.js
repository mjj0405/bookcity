require.config({
    baseUrl: '/js/',
    paths: {
        // 插件
        jquery: './libs/jquery-2.1.1.min',
        lazyload: './libs/jquery.lazyload',
        handlebars: './libs/handlebars-v4.0.11',
        page: './libs/page',
        swiper: './libs/swiper.min',
        // 页面
        index: './app/index',
        bookcity: './app/bookcity',
        bookshelf: './app/bookshelf',
        // 路由接口
        router: './router/index',
        // 公用方法
        get: './common/get',
        table: './common/tab',
        render: './common/render'
    }
})
require(['router']);