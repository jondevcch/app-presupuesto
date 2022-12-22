import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Gasto } from 'src/app/interfaces/gasto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { GastoService } from 'src/app/services/gasto-service.service';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { PresupuestoService } from 'src/app/services/presupuesto-service.service';
@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements AfterViewInit, OnInit {

  dataSource!: MatTableDataSource<Gasto>;
  listaGastos!: Gasto[];

  displayedColumns: string[] = ['nombre', 'monto', 'id'];
  editionMode = false;

  montoPresupuesto: number = 0;
  totalGastos: number = 0;
  Balance: number = 0;

  presupuesto!: Presupuesto;

  presupuestoID!: String;  //ID del presupuesto que se le esta asignando gastos

  gastoEdit !: Gasto;

  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('editGastoForm') editForm!: NgForm;

  constructor(private gastoService: GastoService, private presupuestoServices: PresupuestoService,
    private snackBar: MatSnackBar, private Activatedroute: ActivatedRoute, private router: Router) {
    this.presupuestoID = Activatedroute.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.presupuestoServices.get_Presupuesto(this.presupuestoID).subscribe((pre) => {
      this.presupuesto = pre;
      this.get_listGastos();
    });
  }

  ngAfterViewInit() {
    this.LoadTable();
  }

  mostrarMantenimiento(mostrar = false) {
    this.editionMode = mostrar;
  }

  get_listGastos() {
    this.gastoService.get_listGastos(this.presupuesto._id).subscribe((gastos) => {
      this.listaGastos = gastos;
      this.LoadTable();
      this.CalcularTotales(this.presupuesto.monto);
      this.mostrarMantenimiento(false);
    });
  }

  LoadTable() {
    this.dataSource = new MatTableDataSource(this.listaGastos);
    this.dataSource.paginator = this.paginator;
  }

  CalcularTotales(monto: number) {
    this.totalGastos = 0;
    this.montoPresupuesto = monto;
    this.listaGastos.forEach(element => { this.totalGastos += element.monto; });
    this.Balance = this.montoPresupuesto - this.totalGastos;
  }

  cargarGasto(id: String) {
    this.mostrarMantenimiento(false);

    if (id !== '') {
      this.gastoService.get_listGastos(this.presupuesto._id).subscribe((gastos) => {
        this.gastoEdit = gastos.filter(x => x._id == id)[0];
        this.mostrarMantenimiento(true);
      });
    }
  }

  borrarGasto(id: string) {
    this.mostrarMantenimiento(false);
    if (id !== '') {
      this.gastoService.delete_Gasto(id).subscribe((gastos) => {
        this.get_listGastos();
        this.showSnackbarTopPosition('El gasto se ha borrado exitosamente', '')
      });
    }
  }

  showSnackbarTopPosition(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ["custom-style-notificacion"],
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

  regresarIndex() {
    this.router.navigate(['presupuestos']);
  }
}
