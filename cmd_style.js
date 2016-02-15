//
// for all your console bling needs
//
var slog = [];

function log(entry) {
    if (typeof(entry) === 'object') {
        slog.push("objective");
        console.log("objective");
    } else {
        slog.push(entry);
        console.log(entry);
    }
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
    if (entry) {
        box1(entry);
    }
}
exports.conslogStart = conslogStart;

function replayConslog() {
    slog.forEach(function(entry) {
        console.log(entry);
    });
}
exports.replayConslog = replayConslog;

function hr(char, this_many) {
    log(repeatSoMany(char, this_many));
}
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
}
exports.repeatSoMany = repeatSoMany;

exports.box = function(a_string, char, how_wide) {
    var a = repeatSoMany(char, how_wide);
    var b = a + ' ' + a_string + ' ' + a;
    log(this.repeatIt(char, b));
    log(b);
    log(this.repeatIt(char, b));
};

function multibox(a_string, char, wall_width) {
    var the_strings = a_string.split('\r');
    var the_longest_length = 0;
    the_strings.forEach(function(item) {
        if (item.length > the_longest_length) {
            the_longest_length = item.length;
        }
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
    for (index = 0; index < wall_width; index++) {
        log(lid);
    }
}
exports.multibox = multibox;

exports.style1 = function(a_string) {
    var b = this;
    var how_wide = a_string.length;
    b.hr(' | ', 10);
    b.hr('_', 13 + how_wide);
    b.box(a_string, '@', 6);
    b.hr('~', 13 + how_wide);
    b.hr(' | ', 10);
};

function box1(a_string) {
    multibox(a_string, '.', 1);
}
exports.box1 = box1;

function tree(an_object) {
    var give_a_response = false; //doing nothing for invalid cases - maybe raise an error or something later
    var myType = typeof(an_object);
    if (myType === 'object') {
        //null is a special case objects
        if (an_object === null) {
            if (give_a_response) {
                log('cant tree a null');
            }
            return;
        }
        //all other object types
        var muh_obj_type = Object.prototype.toString.call(an_object);
        if (muh_obj_type === '[object Object]') {
            //recurse an object
            //check for arrays and dates or just don't match on those
            for (var field in an_object) {
                if (an_object.hasOwnProperty(field)) {
                    var thisField = an_object[field];
                    box1(field + ': ' + thisField.toString());
                    //log to depth here if object properties are objects or arrays or dates

                }
            }
        } else {
            //could check for arrays and dates or just don't match on those
            if (give_a_response) {
                log(muh_obj_type);
            }
        }
    } else {
        if (give_a_response) {
            log('cant tree a ' + myType);
        }
    }

}
exports.tree = tree;

function test(b) {
    //usage example
    //var b = require('cmd_style')
    b.conslogStart('starting logging\r' + b.timeslog());
    b.style1('cmd_style! by antfriend');
    b.box('enjoy!', '*', 3);
    b.box1('Wow! This is\r so great!\rJust Incredible!!!');
    //replay what is in the log so far
    console.log('___ instant replay _____________________');
    console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv');
    console.log('= ' + b.timeslog() + ' =');
    b.replayConslog();
    console.log('^^^ that was an instant replay ^^^^^^^^');

    //tree view of an object
    var an_object = {
        "name": "blarg",
        "prop1": "test",
        "obj_prop1": {
            "subprop1": "bloop"
        }
    };
    b.tree(an_object);
    b.tree([an_object, an_object]);
    b.tree([1, 2, 3]);
    b.tree('what am i?');
    b.tree(null);
    b.tree(function() {});
    b.tree(new Date());
}

function cmd_test_startup(me) {

    var c = process.argv;
    if (c.length > 2) {
        if (c[2] === 'test') {
            test(me);
        }
    }
}

cmd_test_startup(this);
