define(['handlebars', 'jquery'], function(Handlebars, $) {
    return function(text, data, parent) {
        $(parent).html(Handlebars.compile(text)(data));
    }
})