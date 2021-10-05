import Grupo from "./grupo.js";
import Persona from "./persona.js"

let grupo = new Grupo();
let  persona = new Persona("Juan",18);
grupo.agregar(persona)
for (let i = 0; i < 1000; i++) {
    let r = (Math.random() + 1).toString(36).substring(7);
 
    grupo.agregar(new Persona(r,Math.floor(Math.random()*80)))
}

console.log(grupo.listar())
console.log(grupo.ultimo())

