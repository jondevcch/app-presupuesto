import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { Gasto } from 'src/app/interfaces/gasto';
import { GastoService } from 'src/app/services/gasto-service.service';

@Component({
  selector: 'app-mant-gasto',
  templateUrl: './mant-gasto.component.html',
  styleUrls: ['./mant-gasto.component.css']
})
export class MantGastoComponent implements OnInit {

  tituloBotones: string = '';

  editionMode: boolean = true;

  gasto: Gasto = { _id: '', idPresupuesto: '', nombre: '', monto: 0 };

  @ViewChild('gastoForm') gastoForm!: NgForm;

  @Output() cargarGastos = new EventEmitter();

  @Input() gastoEdit!: Gasto;

  constructor(private gastoServices: GastoService) { }

  ngOnInit(): void {
    this.editionMode = (typeof this.gastoEdit === 'undefined') ? false : true;
    this.gasto = (typeof this.gastoEdit === 'undefined') ? this.gasto : this.gastoEdit;
    this.tituloBotones = this.editionMode ? 'Editar gasto' : 'Agregar gasto';
  }

  mantenimiento() {

    debugger;

    this.editionMode ? this.update_gasto() : this.add_gasto();
  }

  add_gasto() {
    this.gastoServices.add_Gasto(this.gastoForm.value).subscribe((pre) => {
      this.cargarGastos.next('');
    });
  }

  update_gasto() {

    debugger;

    this.gastoServices.update_Gasto(this.gastoEdit._id, this.gastoForm.value).subscribe((pre) => {
      this.cargarGastos.next('');
    });
  }

  // get_gasto(id: string){
  //   this.gastoServices.get_listGastos(id).subscribe((presupuesto)=> {
  //     this.presupuestoEdit = presupuesto;
  //  });
  // }

}
