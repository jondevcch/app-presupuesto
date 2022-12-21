import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { PresupuestoService } from 'src/app/services/presupuesto-service.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-mant-presupuesto',
  templateUrl: './mant-presupuesto.component.html',
  styleUrls: ['./mant-presupuesto.component.css']
})
export class MantPresupuestoComponent implements OnInit  {

  tituloBotones: string = '';

  editionMode: boolean = true;

  presupuesto: Presupuesto = { _id : '', nombre : '', monto: 0, idUsuario: ''  };  

  @ViewChild('presupuestoForm') presupuestoForm!: NgForm;

  @Output() cargarPresupuestos = new EventEmitter();

  @Input() presupuestoEdit!: Presupuesto;

  constructor(private presupuestoServices: PresupuestoService, private snackBar: MatSnackBar){}

  ngOnInit(): void {
      this.editionMode = (typeof this.presupuestoEdit === 'undefined') ? false : true;
      this.presupuesto = (typeof this.presupuestoEdit === 'undefined') ? this.presupuesto : this.presupuestoEdit;
      this.tituloBotones = this.editionMode ? 'Editar presupuesto' : 'Agregar presupuesto';
  }

  mantenimiento(){    
    this.editionMode ? this.update_presupuesto() : this.add_presupuesto();
  }

  add_presupuesto(){
  
   this.presupuestoServices.add_Presupuesto(this.presupuestoForm.value).subscribe((pre)=> {
      this.cargarPresupuestos.next('');
   });
  }

  update_presupuesto(){
    this.presupuestoServices.update_Presupuesto(this.presupuestoEdit._id, this.presupuestoForm.value).subscribe((pre)=> {
       this.cargarPresupuestos.next('');
    });
   }

  get_presupuesto(id: string){
    this.presupuestoServices.get_Presupuesto(id).subscribe((presupuesto)=> {
      this.presupuestoEdit = presupuesto;
   });
  }

  showSnackbarTopPosition(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ["custom-style-notificacion"],
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

}
