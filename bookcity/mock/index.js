var bookcity = require('./index/home.json');
var bookshelf = require('./index/recommend1.json');
var data = {
    '/api/bookcity': bookcity,
    '/api/bookshelf': bookshelf
}
module.exports = function(url) {
    return JSON.stringify(data[url]);
}