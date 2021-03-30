// jshint esversion:6
// jshint node: true
"use strict"; // jshint ignore:line

//
//// 1. The Team
//

let teamName = "formacion";
let people = ["Amalia", "Karla","Silvana", "Manu", "Jonh", "Mike"];

(teamName, people) => window.alert(`Hay ${people.length} en el equipo de ${teamName}.\nEllos son ${people.toString()}`);

//
// Para testing
//
/*
function Teams(teamName, people)
{
    window.alert(`Hay ${people.length} en el equipo de ${teamName}.\nEllos son ${people.toString()}`);
}
*/

//
//// 2.Square of Pairs
//

let entrada1 = [2,4,6];
let entrada2 = [-3,2,-8,12,5];
let entrada3 = [1,2,3,4,5];

let input = entrada3;

//let squares = input.map((nn) => (nn >= 0) ? console.log(nn * nn):null);


//
//// 3. Inventario
//

    let objeto1 = 
    {
        categoria: "categoria1",
        precio:1,
    };
    let objeto2 =
    {
        categoria: "categoria1",
        precio:2,
    }
    let objeto3 =
    {
        categoria: "categoria2",
        precio:3,
    };
    let objeto4 =
    {
        categoria: "categoria2",
        precio:4,
    };

    let objetos = [objeto1, objeto2, objeto3, objeto4];



//
//// Devuelve todos los objetos en los cuales el campo categoria es "estrictamente igual a" "categoria1"
//// y a continuación devuelve la sumatoria de sus precios
//
let totalEjercicio3 =  (objetos.filter(objeto => objeto.categoria === "categoria1")).reduce((total, valor) => (total + valor.precio), 0);


let text = " laboratoria mexico";
let mayusculas = Array.from(text);
let primerLetra = 0;

for (let i = 0; i < mayusculas.length; i++)
{    
    (mayusculas[0] !== " ") ? mayusculas[0] = mayusculas[0].toUpperCase() : null;
    (mayusculas[i] === " ") ? mayusculas[i+1] = mayusculas[i+1].toUpperCase() : null;
    console.log(`ID:${i}\tCARACTER:${mayusculas[i]}`);
}
