import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Gasto } from 'src/app/interfaces/gasto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { GastoService } from 'src/app/services/gasto-service.service';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements AfterViewInit, OnInit {

  dataSource!: MatTableDataSource<Gasto>;
  listaGastos!: Gasto[];
  // listadoGastos!: Gasto[];

  displayedColumns: string[] = ['nombre', 'monto', 'id'];
  editionMode = false;

  montoPresupuesto: number = 0;
  totalGastos: number = 0;
  Balance: number = 0;

  presupuesto!: Presupuesto;

  gastoEdit !: Gasto;


  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('editGastoForm') editForm!: NgForm;

  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.presupuesto = this.gastoService.presupuesto;
    this.get_listGastos();
  }

  ngAfterViewInit() {
    this.LoadTable();
  }

  mostrarMantenimiento(mostrar = false) {
    this.editionMode = mostrar;
  }

  get_listGastos() {

    // let oPresupuesto: Presupuesto = {
    //   _id: '63a0ab96eae9fac894e51140',
    //   monto: 50000,
    //   idUsuario: '',
    //   nombre: ''
    // };

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
      });
    }
  }
}
