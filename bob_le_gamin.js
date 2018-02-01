function Bob() {

  function isSilence(message) {
    return message.replace(/\s+/g,'') === '';
  }
  function isShouting(message) {
    return message.toUpperCase() === message &&  /[A-Z]/.test(message);
  }
  function isQuestion(message) {
    return message[message.length-1] == "?";
  }
  this.hey = function(str) {
var message = str.trim();
    if (isSilence(message)) {
      return 'Fine. Be that way!'
    }
    else if (isShouting(message)) {
      return 'Whoa, chill out!';
    }
    else if (isQuestion(message)) {
       return 'Sure.'
    }else{
     return "Whatever.";
    }
  }
}