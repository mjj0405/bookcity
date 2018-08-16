define(['jquery', 'table', 'get', 'render', 'swiper'], function($, table, get, render, Swiper) {
    return function(info) {
        // console.log(info);
        table({
            parent: '.header',
            tag: 'a',
            index: info.index
        })
        get(info.url, function(data) {
                var data = JSON.parse(data);
                // 渲染轮播和其他大盒子
                render(info.context, data.items[0], '.main');
                new Swiper('.banner', {
                    loop: true,
                    autoplay: 3000
                })
            })
            // $('.main').html(info.context);
    }
})