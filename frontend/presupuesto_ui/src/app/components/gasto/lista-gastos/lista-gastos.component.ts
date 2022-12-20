import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Gasto } from 'src/app/interfaces/gasto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { GastoService } from 'src/app/services/gasto-service.service';

@Component({
  selector: 'app-lista-gastos',
  templateUrl: './lista-gastos.component.html',
  styleUrls: ['./lista-gastos.component.css']
})
export class ListaGastosComponent implements AfterViewInit, OnInit {
 
  dataSource!: MatTableDataSource<Gasto>;
  listaGastos!: Gasto[];
  displayedColumns: string[] = ['nombreGasto', 'monto', 'id'];
  editionMode = false;

  montoPresupuesto: number = 0;
  totalGastos: number = 0;
  Balance: number = 0;
  
  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('editGastoForm') editForm!: NgForm;

  constructor(private gastoService: GastoService) { }

  ngOnInit(): void {
    this.get_listGastos();
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.listaGastos);
    this.dataSource.paginator = this.paginator;
  }

  get_listGastos() {
    this.montoPresupuesto = 50000;
    this.listaGastos = this.gastoService.get_listGastos();
    this.listaGastos.forEach(element => { this.totalGastos += element.monto; });
    this.Balance = this.montoPresupuesto - this.totalGastos;
  }
}
