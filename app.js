var userDate = prompt("What is the Date you were born in? Please Enter in Number")
var userMonth = prompt("What is the Month you were born in? Please Enter in Number")
var userYear = prompt("What is the Year you were born in? Please Enter in Number")

var userDob = userDate + ' ' + userMonth + ' ' + userYear

console.log(userDob);

var d = new Date();

console.log(d)

var currentMonth = d.getMonth();
var currentDate = d.getDate();
var currentYear = d.getFullYear();

var now = currentDate + ' ' + currentMonth + ' ' + currentYear

console.log(now)

var nowYear = currentYear - userYear

console.log('You are ' + nowYear + ' Years old')
alert('You are ' + nowYear + ' Years old')

var nowMonth = nowYear * 12

console.log( 'You are ' + nowMonth + ' Months old')
alert( 'You are ' + nowMonth + ' Months old')

var nowDays = 365.25 * nowYear

console.log('You are ' + nowDays + ' Days old')
alert('You are ' + nowDays + ' Days old')

var nowHours = nowDays * 24

console.log('You are ' + nowHours + ' Hours old')
alert('You are ' + nowHours + ' Hours old')
