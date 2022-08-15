const personas = [
    {id: 1, nombre: "Pedro", profesion: ["carpintero", "madera"], precio: 600},
    {id: 2, nombre: "Martina", profesion: ["Developer", "Computadora"], precio: 450},
    {id: 3, nombre: "jaime", profesion: ["comunicador social", "ONGS", "trabajo social", ], precio: 750},
    {id: 4, nombre: "Maria", profesion: ["abogada", "nerd", "reuniones"], precio: 650},
    {id: 5, nombre: "Sofia", profesion: ["medica", "empatia"], precio: 900},
    {id: 6, nombre: "Tomas", profesion: ["Cocinero", "paella"], precio: 800}
]

console.log("---------------------------------------------------")
// a)

console.log("las personas con id impar son:")

let personasImpar = personas.filter( (personas) => personas.id % 2 != 0 )

personasImpar.forEach( (personas) => console.log(personas.nombre) )

console.log("---------------------------------------------------")
// b)

let resultado = personas.some( (personas) => personas.precio < 600 )

if(resultado){
    console.log("hay profesiones menores a $600")
}else{
    console.log("no hay pizzas con un precio menor a $600" + resultado)
}
console.log(resultado)

console.log("---------------------------------------------------")
// c)

personas.forEach( (personas) => {
    console.log(`la persona ${personas.nombre} tiene un precio por hora de $${personas.precio}`)
});

console.log("---------------------------------------------------")

let personasProfesion = personas.map( (personas) => {
    return {
        nombre: personas.nombre,
        profesion: personas.profesion + " " + personas.precio
    }
} )
console.log(personasProfesion)
if (personasProfesion.length > 4) {
console.log(`la persona ${personasProfesion[0].nombre} tiene las siguientes profesiones y cobra la hora: ${personasProfesion[3].profesion}`)
}
else if (personasProfesion.length > 1) {
    console.log(`la persona ${personasProfesion[1].nombre} + ${personasProfesion[1].profesion}`)
}