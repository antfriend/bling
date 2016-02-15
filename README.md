
# cmd_style


Console bling to fancy up your logs and response text.


useage:
>npm install cmd_style

example code:
```javascript
var b = require('cmd_style');
b.conslogStart('starting logging\r' + b.timeslog());
b.style1('cmd_style! by antfriend');
b.box('enjoy!', '*',3);
b.box1('Wow! This is\r so great!\rJust Incredible!!!');
//replay what is in the log so far
console.log('=== instant replay ====================');
console.log('= ' + b.timeslog() + ' =')
b.replayConslog();
console.log('=== that was an instant replay =========');
//tree view of an object
var an_object = {
    "name":"blarg",
    "prop1":"test"
};
b.tree(an_object);
```
### exports functions(incomplete):


log(entry)
>use like console.log

box1(a_string)
>use like console.log where you want a simple dot box around the message

multibox(a_string, char, wall_width)
>customize a single or multiline box around message
