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

let entrada1 = [2,4,6];
let entrada2 = [-3,2,-8,12,5];
let entrada3 = [1,2,3,4,5];

input = entrada3;

let squares = input.map((nn) => (nn >= 0) ? console.log(nn * nn):null);
