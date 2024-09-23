import { calcularEdad, tirandoFruta } from "./ejercicios.js";

let nombre, fechaNacimiento;
function pedirCadenaContenido(mensaje) {
    let cadena;
    do {
        cadena = prompt(mensaje);
    } while (cadena === "");
}
function pedirFecha(mensaje) {
    let cadenaFecha, fecha;
    do {
        cadenaFecha = prompt(mensaje);
        fecha = new Date(cadenaFecha);
    } while (!(fecha instanceof Date) || isNaN(fecha));
    return fecha;
}
function pedirFechaPasada(mensaje) {
    let fecha;
    do {
        fecha = pedirFecha(mensaje);
    } while (Date.now() < fecha.valueOf());
    return fecha;
}

// Calcular edad
nombre = pedirCadenaContenido("Ingrese su nombre:");
fechaNacimiento = pedirFechaPasada("Ingrese su fecha de nacimiento:");
console.log("Hola " + nombre + ", tienes " + calcularEdad(fechaNacimiento) + " años!");