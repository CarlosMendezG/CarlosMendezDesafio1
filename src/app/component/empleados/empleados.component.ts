import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formularioReactivo = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rfc: new FormControl('', [Validators.required, Validators.minLength(13), Validators.pattern(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/)]),
      alta: new FormControl(new Date, [Validators.required]),
      baja: new FormControl(undefined, [])
    });
  }

  @Input()
  public empleadoOrigen: Empleados | undefined = undefined;

  @Output()
  public empleadosModificado = new EventEmitter<Empleados>();

  public empleado: Empleados | undefined = this.empleadoOrigen;

  public formularioReactivo: FormGroup;

  public editando: boolean = false;

  submitForm(): void {
    console.log(this.formularioReactivo.value);
    if (!this.formularioReactivo.get('id')?.value) {
      this.formularioReactivo.setValue({ 'id': 0 });
    }

    this.empleadosModificado.emit(this.formularioReactivo.value);
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
    this.empleado = new Empleados(0, '', '', new Date(), undefined, true);
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
    this.empleado = this.empleadoOrigen;
    if (!this.empleado) {
      this.empleado = new Empleados(0, '', '', new Date(), undefined, true);
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