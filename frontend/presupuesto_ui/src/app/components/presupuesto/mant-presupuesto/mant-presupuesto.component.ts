import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { CatalogosServices } from 'src/app/services/catalogos-services.service';
import { PresupuestoService } from 'src/app/services/presupuesto-service.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Divisa }  from 'src/app/interfaces/divisa';
import { Categoria } from 'src/app/interfaces/categoria';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mant-presupuesto',
  templateUrl: './mant-presupuesto.component.html',
  styleUrls: ['./mant-presupuesto.component.css']
})
export class MantPresupuestoComponent implements OnInit  {

  tituloBotones: string = '';
  editionMode: boolean = true;
  presupuesto: Presupuesto = this.inicializarObjeto();  

  listadoCategorias: Categoria[] | undefined;
  listadoDivisas: Divisa[] | undefined;

  @ViewChild('presupuestoForm') presupuestoForm!: NgForm;

  @Output() cargarPresupuestos = new EventEmitter();

  @Output() mostrarMantenimiento = new EventEmitter();

  @Input() presupuestoEdit!: Presupuesto;

  constructor(private presupuestoServices: PresupuestoService,  private catalogosServices: CatalogosServices, private route: Router, private snackBar: MatSnackBar){}

  ngOnInit(): void {
      this.editionMode = (typeof this.presupuestoEdit === 'undefined') ? false : true;
      this.presupuesto = (typeof this.presupuestoEdit === 'undefined') ? this.presupuesto : this.presupuestoEdit;
      this.tituloBotones = this.editionMode ? 'Editar' : 'Agregar';
      
      this.listadoCategorias = this.get_catalogosCategorias();
      this.listadoDivisas = this.get_catalogosDivisas();
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
    this.presupuestoServices.update_Presupuesto(this.presupuestoEdit._id, this.presupuestoForm.value).subscribe((presupuesto)=> {
       this.cargarPresupuestos.next('');
    });
   }

  get_presupuesto(id: string){
    this.presupuestoServices.get_Presupuesto(id).subscribe((presupuesto)=> {
      this.presupuestoEdit = presupuesto;
   });
  }

  redirect_presupuesto(){
    this.presupuesto = this.inicializarObjeto();
    this.mostrarMantenimiento.next(false);
  }

  
  get_catalogosDivisas(id?: string) : any{
    return (typeof id === 'undefined') ? this.catalogosServices.get_listaDivisas() : this.catalogosServices.get_nombreDivisas(id);
  }

  get_catalogosCategorias(id?: number) : any{
    return (typeof id === 'undefined') ? this.catalogosServices.get_listaCategorias() : this.catalogosServices.get_nombreCategoria(id);
  }

  inicializarObjeto() : Presupuesto{
    return { _id : '', nombre : '', monto: 0, idUsuario: ''  }; 
  }
  
  showSnackbarTopPosition(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: ["custom-style-notificacion"],
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });

}
