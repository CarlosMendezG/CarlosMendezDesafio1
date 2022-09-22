export class Empleados {
    // constructor() {

    // };

    constructor(
        id: number,
        nombre: string,
        rfc: string,
        alta: Date,
        activo: boolean
    ) {
        this.id = id;
        this.nombre = nombre;
        this.rfc = rfc;
        this.alta = alta;
        this.baja = undefined;
        this.activo = activo;
    }

    public id: number = 0;
    public nombre: string = "";
    public rfc: string = "";
    public alta: Date = new Date();
    public baja: Date | undefined;
    public activo: boolean = true;
}