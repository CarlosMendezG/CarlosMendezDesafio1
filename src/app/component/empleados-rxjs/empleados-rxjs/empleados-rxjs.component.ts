import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-rxjs',
  templateUrl: './empleados-rxjs.component.html',
  styleUrls: ['./empleados-rxjs.component.css']
})
export class EmpleadosRxjsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private empleadosService: EmpleadosService
  ) {
    this.formularioReactivo = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]),
      rfc: new FormControl('', [Validators.required, Validators.minLength(13), Validators.pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)]),
      alta: new FormControl(new Date, [Validators.required]),
      baja: new FormControl(undefined, [])
    });
  }

  public empleado: Empleados = this.empleadosService.obtenerEmpleadoActual();

  public formularioReactivo: FormGroup;

  public editando: boolean = false;

  submitForm(): void {
    console.log(this.formularioReactivo.value);
    if (!this.formularioReactivo) return;
    // if (!this.formularioReactivo.get('id')?.value) {
    //   this.formularioReactivo.setValue({ 'id': 0 });
    // }
    if (!this.empleado) this.empleado = new Empleados(0, '', '', new Date(), undefined, true, "");
    this.empleado.nombre = this.formularioReactivo.get('nombre')?.value;
    this.empleado.rfc = this.formularioReactivo.get('rfc')?.value;
    this.empleado.alta = this.getFechaT(this.formularioReactivo.get('alta')?.value);
    this.empleado.baja = this.getFechaTu(this.formularioReactivo.get('baja')?.value);

    let fechaVerificación: Date = new Date();
    this.empleado.esBaja = this.empleado.baja != undefined && fechaVerificación.getTime() > this.empleado.baja.getTime();
    this.empleado.esActivo = !this.empleado.baja && this.empleado.alta.getTime() <= fechaVerificación.getTime();
    if (this.empleado.id == 0) {
      // let i = Math.trunc((Math.random() * 100000) + 10);
      // this.empleado.id = i
      // this.empleado.imagen = `../../../assets/imagenes/empleado${i.toString().padStart(2, "0")}.jpg`;;
      this.empleado = this.empleadosService.agregarEmpleado(this.empleado);
      this.formularioReactivo.patchValue({
        id: this.empleado.id,
        nombre: this.empleado.nombre,
        rfc: this.empleado.rfc,
        alta: this.getDateText(this.empleado.alta),
        baja: this.getDateText(this.empleado.baja)
      });
      this.editando = false;
      return;
    }
    // let index = this.empleados.findIndex(x => x.id == empleado.id);
    // empleado.imagen = `../../../assets/imagenes/empleado${empleado.id.toString().padStart(2, "0")}.jpg`;;
    this.empleadosService.modificarEmpleado(this.empleado);
    this.editando = false;
  }

  getFechaT(fecha: string): Date {
    let año: number = parseInt(fecha.substring(0, 4));
    let mes: number = parseInt(fecha.substring(5, 7));
    let dia: number = parseInt(fecha.substring(8, 10));
    if (fecha.length < 12) return new Date(año, mes - 1, dia);

    let hora: number = parseInt(fecha.substring(11, 13));
    let minutos: number = parseInt(fecha.substring(14, 16));
    let segundos: number = parseInt(fecha.substring(17, 18));
    return new Date(año, mes - 1, dia, hora, minutos, segundos);
  }

  getFechaTu(fecha: string | undefined): Date | undefined {
    if (!fecha) return undefined;
    let año: number = parseInt(fecha.substring(0, 4));
    let mes: number = parseInt(fecha.substring(5, 7));
    let dia: number = parseInt(fecha.substring(8, 10));
    if (fecha.length < 12) return new Date(año, mes - 1, dia);

    let hora: number = parseInt(fecha.substring(11, 13));
    let minutos: number = parseInt(fecha.substring(14, 16));
    let segundos: number = parseInt(fecha.substring(17, 18));
    return new Date(año, mes - 1, dia, hora, minutos, segundos);
  }

  esValido(campo: string): boolean {
    if (!this.editando) return false;
    if (!this.formularioReactivo.get(campo)?.touched) return false;
    return this.formularioReactivo.get(campo)?.valid || false;
  }

  esRequerido(campo: string): boolean {
    if (!this.editando) return false;
    if (!this.formularioReactivo.get(campo)?.touched) return false;
    return this.formularioReactivo.get(campo)?.errors?.['required'] || false;
  }

  faltaLongitud(campo: string): boolean {
    if (!this.editando) return false;
    if (!this.formularioReactivo.get(campo)?.touched) return false;
    return this.formularioReactivo.get(campo)?.errors?.['minlength'] || false;
  }

  patronCorrecto(campo: string): boolean {
    if (!this.editando) return false;
    if (!this.formularioReactivo.get(campo)?.touched) return false;
    return this.formularioReactivo.get(campo)?.errors?.['pattern'] || false;
  }

  agregarEmpleado() {
    this.formularioReactivo.reset();
    this.empleado = new Empleados(0, '', '', new Date(), undefined, true, "");
    this.formularioReactivo.patchValue({
      id: this.empleado.id,
      nombre: this.empleado.nombre,
      rfc: this.empleado.rfc,
      alta: this.getDateText(this.empleado.alta),
      baja: this.getDateText(this.empleado.baja)
    });
    this.editando = true;
  }

  cargarDatosOriginales() {
    this.formularioReactivo.reset();
    this.empleado = this.empleadosService.obtenerEmpleadoActual();
    if (!this.empleado) {
      this.empleado = new Empleados(0, '', '', new Date(), undefined, true, "");
    }
    this.formularioReactivo.patchValue({
      id: this.empleado.id,
      nombre: this.empleado.nombre,
      rfc: this.empleado.rfc,
      alta: this.getDateText(this.empleado.alta),
      baja: this.getDateText(this.empleado.baja)
    });
    this.editando = this.empleado.id == 0;
  }

  getDateT(fecha: Date | undefined): string | undefined {
    if (!fecha) return undefined;
    let fechaTxt: string = fecha.getFullYear().toString().padStart(4, "0") + "-" +
      (1 + fecha.getMonth()).toString().padStart(2, "0") + "-" +
      fecha.getDate().toString().padStart(2, "0") + "T" +
      fecha.getHours().toString().padStart(2, "0") + ":" +
      fecha.getMinutes().toString().padStart(2, "0") + ":" +
      fecha.getSeconds().toString().padStart(2, "0");
    return fechaTxt;
  }

  getDateText(fecha: Date | undefined): string | undefined {
    if (!fecha) return undefined;
    let fechaTxt: string = fecha.getFullYear().toString().padStart(4, "0") + "-" +
      (1 + fecha.getMonth()).toString().padStart(2, "0") + "-" +
      fecha.getDate().toString().padStart(2, "0");
    return fechaTxt;
  }

  ngOnInit(): void {
    this.cargarDatosOriginales();
  }
}
