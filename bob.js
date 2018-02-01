var Bob = function() {
  this.hey = function(string) {
    string = string.trim();
    var lengthString = string.length;
    if (string === '') {return 'Fine. Be that way!'}
    if (string === string.toUpperCase() && string !== string.toLowerCase()) {return 'Whoa, chill out!'}
    if (string.charAt(lengthString - 1) === '?') {return 'Sure.'}
    else {
      return 'Whatever.';
    }
  }
}

module.exports = Bob;
