require('index', function() {
    var arr = 1;

    function req() {
        return arr;
    }
    console.log(req())
})

require.define('index', function() {
    var arr = 1;
    return arr;
})