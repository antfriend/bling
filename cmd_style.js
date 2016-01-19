//
// for all your console bling needs
//

exports.hr = function(char, this_many) {
  console.log(this.repeatSoMany(char, this_many));
};

exports.repeatIt = function(char, string_to_match) {
  return this.repeatSoMany(char, string_to_match.length);
};

exports.repeatSoMany = function(char, this_many) {
  var a = '';
  for (var i = 0; i < this_many; i++) {
    a = a + char;
  }
  return a;
};

exports.box = function(a_string, char, how_wide) {
  var a = this.repeatSoMany(char, how_wide);
  var b = a + ' ' + a_string + ' ' + a;
  console.log(this.repeatIt(char, b));
  console.log(b);
  console.log(this.repeatIt(char, b));
};

exports.style1 = function(a_string) {
    var b = this;
    var how_wide = a_string.length;
    b.hr(' | ',10);
    b.hr('_',13 + how_wide);
    b.box(a_string, '@',6);
    b.hr('~',13 + how_wide);
    b.hr(' | ',10);
};

//usage example
var b = this;
b.style1('cmd_style! by antfriend');
b.box('enjoy!', '*',3);