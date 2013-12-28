// Exporting function.
module.exports = function(password, salt) {
    return password + "MD5" + salt;
};
