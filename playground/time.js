var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add("year", 1).subtract('month', 9);
// console.log(date.format('Do MMM YYYY'));

// 6:01 am
var date = moment();
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);