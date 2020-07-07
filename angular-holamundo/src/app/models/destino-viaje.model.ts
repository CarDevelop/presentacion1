export class DestinoViaje{
    nombre:string;
    imagenUrl:string;
    des:string;

    constructor(n:string, u:string,desc:string){
        this.nombre=n;
        this.imagenUrl=u;
        this.des=desc;
    }
}