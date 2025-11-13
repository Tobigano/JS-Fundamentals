const { argv } = require('node:process');

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
// console.log (argv)
// checking for one argv
if (argv.length==3){
    console.log ("Argument found")
}
else if (argv.length<3){
    console.log ("No argument")
}
if (argv.length>3){
    console.log ("Arguments found")
}