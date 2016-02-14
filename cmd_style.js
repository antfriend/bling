//
// for all your console bling needs
//
var slog = [];

function log(entry)
{
    slog.push(entry);
    console.log(entry);
}
exports.log = log;

function timeslog() {
    return new Date().toString();
}

exports.timeslog = timeslog;

exports.slog = function() {
  return slog;
};

function conslogStart(entry) {
    if(entry)
    {
        log(this.box1(entry));
    }
};
exports.conslogStart = conslogStart;

function replayConslog()
{
    console.log(' ');
    console.log('==========================================');
    console.log(' ');
    slog.forEach(function(entry){
        console.log(entry);
    });  
}
exports.replayConslog = replayConslog;

function hr(char, this_many) {
  log(repeatSoMany(char, this_many));
};
exports.hr = hr;

exports.repeatIt = function(char, string_to_match) {
  return repeatSoMany(char, string_to_match.length);
};

function repeatSoMany(char, this_many) {
  var a = '';
  for (var i = 0; i < this_many; i++) {
    a = a + char;
  }
  return a;
};
exports.repeatSoMany = repeatSoMany;

exports.box = function(a_string, char, how_wide) {
  var a = repeatSoMany(char, how_wide);
  var b = a + ' ' + a_string + ' ' + a;
  log(this.repeatIt(char, b));
  log(b);
  log(this.repeatIt(char, b));
};

function multibox(a_string, char, wall_width)
{
    var the_strings = a_string.split('\r');
    var the_longest_length = 0;
    the_strings.forEach(function(item) {
        if(item.length > the_longest_length)
        {the_longest_length = item.length;}
    });
    var b = this;
    var inner_box_width = the_longest_length;
    
  var wall = repeatSoMany(char, wall_width);
  
  var lid = repeatSoMany(char, wall.length + inner_box_width + wall.length + 2);
  for (var index = 1; index < wall_width; index++) {
      log(lid);
  }
  log(lid);
  the_strings.forEach(function(item) {
      log(wall + ' ' + item + repeatSoMany(' ', inner_box_width - item.length) + ' ' + wall);
  });
  for (var index = 0; index < wall_width; index++) {
      log(lid);
  }
}

exports.style1 = function(a_string) {
    var b = this;
    var how_wide = a_string.length;
    b.hr(' | ',10);
    b.hr('_',13 + how_wide);
    b.box(a_string, '@',6);
    b.hr('~',13 + how_wide);
    b.hr(' | ',10);
};

function box1(a_string) {
    multibox(a_string, '.', 1)
};
exports.box1 = box1;

function tree(an_object) {
    //recurse an object
    log(an_object.toString());
}
exports.tree = tree;

//usage example
var b = this;
b.conslogStart('starting logging\r' + timeslog());
b.style1('cmd_style! by antfriend');
b.box('enjoy!', '*',3);
b.box1('Wow! This is\r so great!\rJust Incredible!!!');
b.replayConslog();
b.log('that was an instant replay');
var an_object = {
    "name":"blarg",
    "prop1":"test"
};
b.tree(an_object);
