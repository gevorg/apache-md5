// Apache md5.
var md5 = require('../lib/apache-md5');

module.exports = {
    // Test for valid password.
    testValidPassword: function(test) {
        var hash = md5("validPass", "B5xBYM2HbnPqI");

        test.equal(hash, "B5xBYM2HbnPqI", "Wrong password!");
        test.done();
    },
    // Test for invalid password.
    testInValidPassword: function(test) {
        var hash = md5("invalidPass", "B5xBYM2HbnPqI");

        test.notEqual(hash, "B5xBYM2HbnPqI", "Wrong password!");
        test.done();
    }
};