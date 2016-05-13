// Apache md5.
var md5 = require('../lib/apache-md5');

module.exports = {
    // Test for valid password.
    testValid$apr1$Password: function(test) {
        var encrypted = md5("su/P3R%se#ret!", "$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/");

        test.equal(encrypted, "$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/", "Wrong password!");
        test.done();
    },

    // Test for valid short password.
    testValid$1$Password: function(test) {
        var encrypted = md5("123456", "$1$VV5.4y5.$JbhytGQBPmDHBbrSjF2i7.");

        test.equal(encrypted, "$1$VV5.4y5.$JbhytGQBPmDHBbrSjF2i7.", "Wrong password!");
        test.done();
    },

    // Test for invalid password.
    testInValid$apr1$Password: function(test) {
        var encrypted = md5("invalidPass", "$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/");

        test.notEqual(encrypted, "$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/", "Wrong password!");
        test.done();
    },

    // Test for invalid short password.
    testInValid$1$Password: function(test) {
        var encrypted = md5("passw0rdpa55wore", "$1$VV5.4y5.$9981ZZhKTHmeXFKQur4cV0");

        test.notEqual(encrypted, "$1$VV5.4y5.$9981ZZhKTHmeXFKQur4cV0", "Wrong password!");
        test.done();
    }
};