var scanf = require('scanf');

console.log('Tu Nota');
console.log('\n');
console.log('Ingresa el Nota que obtuviste');
console.log('\n');

let puntaje = scanf('%d');

if (0 <= puntaje <= 3) {
    console.log("Tu calificacion es: muy deficiente")
} else if (3 <= puntaje <= 5) {
    console.log("Tu calificacion es: deficiente")

} else if (5 <= puntaje <= 6){
    console.log("Tu calificacion es: insuficiente")
    
} else if (6 <= puntaje <= 7){
    console.log("Tu calificacion es: bien")

} else if (7<= puntaje <= 9){
    console.log("Tu calificacion es: notable")

} else if (9 <= puntaje <= 10){
    console.log("Tu calificacion es: sobresaliente")
}