let date = new Date();
let newDate = [date.getFullYear(),date.getMonth(),date.getDate()];
let newTime = [date.getHours(),date.getMinutes(),date.getSeconds()];
newTime = newTime.join(":");
newDate = newDate.join("-");

newDate = newDate.concat(" ",newTime);

module.exports = newDate;