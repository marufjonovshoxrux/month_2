
let month = +prompt("какой месяц")

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("31 дней")
        break;

    case 2:
        alert("28 дней")
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        alert("30 дней")
        break;

    default:
        alert("Такого месяца нету")
        break;
}