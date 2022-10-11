import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Empleados } from 'src/app/models/empleados';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../../dialogs/error/error.component';
import { DialogComponent } from '../../dialogs/dialog/dialog.component';


@Component({
  selector: 'app-empleados-mat-listado',
  templateUrl: './empleados-mat-listado.component.html',
  styleUrls: ['./empleados-mat-listado.component.css']
})
export class EmpleadosMatListadoComponent implements OnInit, AfterViewInit {

  constructor(
    private dialog: MatDialog
  ) { }

  @Input()
  public empleadosOrigen: Empleados[] = [];
  public empleados: Empleados[] = [];

  @Output()
  public empleadoEditar = new EventEmitter<number>();
  public editarEmpleado(empleadoId: number) {
    this.empleadoEditar.emit(empleadoId);
  }

  @Output()
  public eliminarEmpleado = new EventEmitter<number>();
  public eliminarEmpleadoClick(empleadoId: number) {
    let indexEmpleado: number = this.empleados.findIndex(x => x.id == empleadoId);
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
      this.empleados = this.empleadosOrigen.filter(x => x.id != empleadoId);
      this.dataSource = new MatTableDataSource<Empleados>(this.empleados);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.eliminarEmpleado.emit(empleadoId);
    });
  }

  public aplicarFiltro(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    return;

    this.dataSource.filterPredicate = function (empleado: Empleados, filtro: string) {
      return empleado.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public columnas: string[] = ['id', 'nombre', 'rfc', 'alta', 'baja', 'acciones'];
  public dataSource: MatTableDataSource<Empleados> = new MatTableDataSource<Empleados>(this.empleados);
  public clickedRows: Set<Empleados> = new Set<Empleados>();

  ngOnInit(): void {
    this.empleados = this.empleadosOrigen;
    this.dataSource = new MatTableDataSource<Empleados>(this.empleados);
    this.clickedRows = new Set<Empleados>();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
