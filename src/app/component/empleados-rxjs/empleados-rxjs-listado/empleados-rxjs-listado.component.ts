import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { DialogComponent } from '../../dialogs/dialog/dialog.component';
import { ErrorComponent } from '../../dialogs/error/error.component';

@Component({
  selector: 'app-empleados-rxjs-listado',
  templateUrl: './empleados-rxjs-listado.component.html',
  styleUrls: ['./empleados-rxjs-listado.component.css']
})
export class EmpleadosRxjsListadoComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private empleadosService: EmpleadosService
  ) {
    this.empleadosSubscription = empleadosService.obtenerEmpleadosBehaviorSubject().subscribe({
      next: (empleados: Empleados[]) => {
        this.empleados = empleados;
        this.dataSource = new MatTableDataSource<Empleados>(this.empleados);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(`Empleados cargados Observable: ${this.empleados}`);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  public empleadosSubscription: Subscription;
  public empleados: Empleados[] = [];
  public empleados$: Observable<Empleados[]> = this.empleadosService.obtenerEmpleadosBehaviorSubject();

  @Output()
  public empleadoEditar = new EventEmitter<number>();
  public editarEmpleado(empleadoId: number) {
    this.empleadoEditar.emit(empleadoId);
  }

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
    });
  }

  public aplicarFiltro(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value.toLowerCase();
    this.empleados$.pipe(
      map((empleados: Empleados[]) => empleados.filter((empleado: Empleados) => empleado.nombre.toLowerCase().includes(valorFiltro)))
    ).subscribe((empleados) => {
      this.empleados = empleados;
      this.dataSource = new MatTableDataSource<Empleados>(this.empleados);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public columnas: string[] = ['id', 'nombre', 'rfc', 'alta', 'baja', 'acciones'];
  public dataSource: MatTableDataSource<Empleados> = new MatTableDataSource<Empleados>(this.empleados);
  public clickedRows: Set<Empleados> = new Set<Empleados>();

  ngOnInit(): void {
    this.clickedRows = new Set<Empleados>();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.empleadosSubscription.unsubscribe();
  }

}
