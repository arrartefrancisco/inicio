// jshint esversion:6
// jshint node: true
"use strict"; // jshint ignore:line

//
//// 1. Implementar localmente la clase Person y Teacher, con la herencia correspondiente tal cual el material de MDN mencionado, usando ECMAScript 2015.
//



//
//// 2. Crear una nueva clase Student que herede de Person con las mismas características que Teacher
//// a. Además de compartir características con Teacher, vamos a agregar las siguientes propiedades a la clase Student: homework y exams
//// b. Implementar getters y setters para homework y exams
//// c. Construir objetos nuevos para cada clase (student, teacher y person por separado)
//


//
//// 3. Modificar la clase Person con dos métodos nuevos: eating() y sleeping() con sus respectivas variables de clase (eat y sleep).
//// a. Construir objetos nuevos de teacher y de student usando los métodos nuevos agregados en Person: eating() y sleeping()

//
//// Métodos Arrays
//

const items = 
[
  { description: 'Tomates', quantity: 1, price: 3, total: 55 },
  { description: 'Cebolla', quantity: 3, price: 5, total: 5.5 },
  { description: 'Zanahoria', quantity: 2, price: 6, total: 17 },
  { description: 'Zapallo', quantity: 2, price: 9, total: 17 }
];

//
//// Mostrar total de items
//// Mostrar precio sumado de todos los ítems
//// Mostrar sólo los ítems que contengan la property quantity igual a 2
//// Mostrar un ítem con quantity igual a 3
//

const totalItems = items.reduce((total, valor) => (total + valor.total),0);


console.log(`TOTAL DE ITEMS:${totalItems}`);


