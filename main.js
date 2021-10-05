import Grupo from "./grupo.js";
import Persona from "./persona.js"

let grupo = new Grupo();
let  persona = new Persona("Juan",18);
grupo.agregar(persona)
let  siguiente = new Persona("Pedro",18);
grupo.agregar(siguiente)
siguiente = new Persona("Ernesto",18);
grupo.agregar(siguiente)
siguiente = new Persona("Manuel",18);
grupo.agregar(siguiente)
siguiente = new Persona("Roy",18);
grupo.agregar(siguiente)
console.log(grupo.listar())
console.log(grupo)