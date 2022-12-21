import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gasto } from 'src/app/interfaces/gasto';
import { GastoService } from 'src/app/services/gasto-service.service';

import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-mant-gasto',
  templateUrl: './mant-gasto.component.html',
  styleUrls: ['./mant-gasto.component.css']
})
export class MantGastoComponent implements OnInit {

  messageAction: string = '';
  tituloBotones: string = '';
  editionMode: boolean = true;
  gasto: Gasto = { _id: '', idPresupuesto: '', nombre: '', monto: 0 };

  @ViewChild('gastoForm') gastoForm!: NgForm;
  @Output() cargarGastos = new EventEmitter();
  @Input() gastoEdit!: Gasto;

  @Input() idPresupuesto!: string;

  constructor(private gastoServices: GastoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.editionMode = (typeof this.gastoEdit === 'undefined') ? false : true;
    this.gasto = (typeof this.gastoEdit === 'undefined') ? this.gasto : this.gastoEdit;
    this.tituloBotones = this.editionMode ? 'Editar gasto' : 'Agregar gasto';
    this.gasto.idPresupuesto = this.idPresupuesto;
  }

  mantenimiento() {
    this.editionMode ? this.update_gasto() : this.add_gasto();
  }

  add_gasto() {
    this.gasto = this.gastoForm.value;
    this.gasto.idPresupuesto = this.idPresupuesto;
    this.gastoServices.add_Gasto(this.gasto).subscribe(() => {
      this.cargarGastos.next('');
        this.showSnackbarTopPosition('El gasto se ha agregado exitosamente', '')
    });
  }

  update_gasto() {

    let gastoEditado = this.gastoForm.value;
    gastoEditado.idPresupuesto = this.idPresupuesto;

    this.gastoServices.update_Gasto(this.gastoEdit._id, this.gastoForm.value).subscribe((pre) => {
      this.cargarGastos.next('');
      this.showSnackbarTopPosition('El gasto se ha modificado exitosamente', '')
    });
  }

  
  showSnackbarTopPosition(message:string, action?:string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ["custom-style-notificacion"],
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

  // get_gasto(id: string){
  //   this.gastoServices.get_listGastos(id).subscribe((presupuesto)=> {
  //     this.presupuestoEdit = presupuesto;
  //  });
  // }

}
