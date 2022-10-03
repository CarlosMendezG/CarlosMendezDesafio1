export class Empleados {
    // constructor() {

    // };

    constructor(
        id: number,
        nombre: string,
        rfc: string,
        alta: Date,
        baja: Date | undefined,
        activo: boolean
    ) {
        let fechaVerificación: Date = new Date();

        this.id = id;
        this.nombre = nombre;
        this.rfc = rfc;
        this.alta = alta;
        this.baja = baja;
        this.seleccionado = activo;
        this.esBaja = this.baja != undefined && fechaVerificación.getTime() > this.baja.getTime();
        this.esActivo = this.alta.getTime() <= fechaVerificación.getTime() && !this.baja;
    }

    public id: number = 0;
    public nombre: string = "";
    public rfc: string = "";
    public alta: Date = new Date();
    public baja: Date | undefined;
    public seleccionado: boolean = true;
    public esActivo: boolean = true;
    public esBaja: boolean = false;

    public activo(fechaVerificación: Date | undefined): boolean {
        if (!fechaVerificación) fechaVerificación = new Date();
        return this.alta.getTime() <= fechaVerificación.getTime() && (!this.baja || fechaVerificación.getTime() > this.baja.getTime());
    }

}