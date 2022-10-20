import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Empleados } from 'src/app/models/empleados';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../dialogs/error/error.component';
import { DialogComponent } from '../../dialogs/dialog/dialog.component';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { from, interval, Observable, of, Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-empleados-mat-listado',
  templateUrl: './empleados-mat-listado.component.html',
  styleUrls: ['./empleados-mat-listado.component.css']
})
export class EmpleadosMatListadoComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    private dialog: MatDialog,
    private empleadosService: EmpleadosService
  ) {
    empleadosService.obtenerEmpleadosAsync().then(
      (empleados: Empleados[]) => {
        this.empleados = empleados;
        console.log(`Empleados cargados Promesa: ${this.empleados}`);
        // console.log(`Empleados originales por Input: ${this.empleadosOrigen}`);
      }).catch((error: { codigo: number, mensaje: string }) => {
        console.log(`Error: código ${error.codigo} -> ${error.mensaje}. Empleados: ${this.empleados}`);
        // console.log(`Empleados originales por Input: ${this.empleadosOrigen}`);
      });

    this.empleadosSubscription = empleadosService.obtenerEmpleadosObservable().subscribe({
      next: (empleados: Empleados[]) => {
        this.empleados = empleados;
        console.log(`Empleados cargados Observable: ${this.empleados}`);
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  public empleadosSubscription: Subscription;

  // @Input()
  // public empleadosOrigen: Empleados[] = [];
  public empleados: Empleados[] = [];

  @Output()
  public empleadoEditar = new EventEmitter<number>();
  public editarEmpleado(empleadoId: number) {
    this.empleadoEditar.emit(empleadoId);
  }

  // @Output()
  // public eliminarEmpleado = new EventEmitter<number>();
  public eliminarEmpleadoClick(empleadoAEliminar: number) {
    let indexEmpleado: number = this.empleados.findIndex(x => x.id == empleadoAEliminar);
    if (indexEmpleado < 0) {
      this.dialog.open(ErrorComponent, {
        data: "No se puede localizar al empleado seleccionado",
        width: '350px'
      });
      return;
    }
    let empleadoActual: Empleados = this.empleados[indexEmpleado];
    const dialogRef = this.dialog.open(DialogComponent, {
      data: empleadoActual,
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed ${result}`);
      if (empleadoActual.nombre != result) return;
      this.empleadosService.eliminarEmpleado(empleadoAEliminar);
      // this.empleados = this.empleadosOrigen.filter(x => x.id != empleadoAEliminar);
      // this.dataSource = new MatTableDataSource<Empleados>(this.empleados);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      // this.eliminarEmpleado.emit(empleadoId);
    });
  }

  public aplicarFiltro(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    return;

    // this.dataSource.filterPredicate = function (empleado: Empleados, filtro: string) {
    //   return empleado.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    // };
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public columnas: string[] = ['id', 'nombre', 'rfc', 'alta', 'baja', 'acciones'];
  public dataSource: MatTableDataSource<Empleados> = new MatTableDataSource<Empleados>(this.empleados);
  public clickedRows: Set<Empleados> = new Set<Empleados>();
  private merge$!: Observable<any>;

  ngOnInit(): void {
    // this.empleados = this.empleadosOrigen;
    this.dataSource = new MatTableDataSource<Empleados>(this.empleados);
    this.clickedRows = new Set<Empleados>();


    of(this.empleados).subscribe((empleados) => {
      console.log('Desde el of', empleados);
    });

    from(this.empleados).subscribe((empleados) => {
      console.log('Desde el from', empleados);
    });

    // pipe  es para todos los observables
    of(this.empleados).pipe(
      // filter((empleados: Empleados[]) => empleados.nombre == 'Carlos')
      map((empleados: Empleados[]) => empleados.filter((empleado: Empleados) => empleado.nombre == 'Carlos'))
    ).subscribe((empleados) => {
      console.log('Desde el of con filtro', empleados);
    });

    from(this.empleados).pipe(
      filter((empleado: Empleados) => empleado.nombre == 'Carlos')
    ).subscribe((empleados) => {
      console.log('Desde el from con filtro', empleados);
    });

    of(this.empleados).pipe(
      mergeMap(
        (empleados: Empleados[]) => interval(1000).pipe(map(i => i + empleados[i].nombre))
      )
    ).subscribe((empleados) => {
      console.log('Desde el of con mergeMap', empleados);
    });

    this.merge$ = of(['a', 'b', 'c', 'd']).pipe(
      mergeMap(
        letras => interval(2000).pipe(
          map((i) => i + letras[i])
        )
      )
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.empleadosSubscription.unsubscribe();
    // this.merge$.unsubscribe();
  }
}
