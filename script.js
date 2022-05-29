
//use strict;
// Это комментарий. Дальше идет весь код JS-файла
function timer(hour, min) {
    message = min == 0 ? `${hour} год.` : `${hour} год. ${min} хв.`;

    return message;

}
const nam = 12;
const age = 0;

console.log(timer(nam, age));

