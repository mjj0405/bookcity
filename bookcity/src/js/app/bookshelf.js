define(['jquery', 'table'], function($, table) {
    return function(info) {
        table({
            parent: '.header',
            tag: 'a',
            index: info.index
        })
        $('.main').html(info.context);
    }
})