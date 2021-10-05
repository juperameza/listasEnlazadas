export default class Grupo{
    constructor(){
        this.inicio=null;
    }
    agregar(nuevo){
        if (this.inicio==null){
            this.inicio=nuevo;
        } else {
            let aux=this.inicio;
            while(aux.siguiente!=null)
                aux=aux.siguiente;
            aux.siguiente=nuevo;
        }
    }
    listar(){
        let aux=this.inicio;
        let resultado=`${aux.nombre} ${aux.edad} 
`
        do {
            aux=aux.siguiente;
            resultado+=`${aux.nombre} ${aux.edad}
`  
        }while(aux.siguiente!=null)
        return resultado;
    }
}