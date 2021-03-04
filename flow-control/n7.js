// function capitalizeString(string) {
//     if (string.length > 10) {
//         let capitalizedString = string.toUpperCase();
//         return capitalizedString;
//     } else {
//         return string;
//     }
// }

function capitalizeString(string) {
    return (string.length > 10) ? string.toUpperCase() : string;
}

capitalizeString('hello world');