define(['jquery'], function($) {
    var cache = {};

    function get(url, callback) {
        if (cache[url]) {
            callback(cache[url]);
            return;
        }
        $.ajax({
            url: url,
            dataType: 'text',
            success: function(data) {
                cache[url] = data;
                callback(data);
            }
        })
    }
    return get;
})