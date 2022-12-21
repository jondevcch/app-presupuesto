import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto-service.service';
import { Presupuesto } from 'src/app/interfaces/Presupuesto';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-presupuesto',
  templateUrl: './lista-presupuesto.component.html',
  styleUrls: ['./lista-presupuesto.component.css']
})
export class ListaPresupuestoComponent implements AfterViewInit, OnInit {

  dataSource!: MatTableDataSource<Presupuesto>;
  listaPresupuesto!: Presupuesto[];
  displayedColumns: string[] = ['nombre', 'divisa', 'monto', 'id'];
  editionMode = false;

  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('editPresupuestoForm') editForm!: NgForm;

  presupuesto!: Presupuesto;

  presupuestoEdit !: Presupuesto;

  @ViewChild('presupuestoForm') presupuestoForm!: NgForm;

  constructor(private presupuestoServices: PresupuestoService) { }

  ngOnInit(): void {
    this.get_listPresupuestos();
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.listaPresupuesto);
    this.dataSource.paginator = this.paginator;
  }

  get_listPresupuestos() {
    this.presupuestoServices.get_listPresupuestos().subscribe((presupuestos)=> {
      this.listaPresupuesto = presupuestos;
    });
  }

  
  deletePresupuesto(id: string) {
    this.presupuestoServices.delete_Presupuesto(id).subscribe((presupuesto)=> {
      this.get_listPresupuestos();
   });
  }

  visualizarGastos(presupuesto : Presupuesto) {
    console.log(presupuesto);
  }

  mostrarMantenimiento(mostrar = false){
    this.editionMode = mostrar;
  }

  cargarPresupuesto(id: String){
    this.mostrarMantenimiento(false);
    if(id !== '')
    {
       this.presupuestoServices.get_Presupuesto(id).subscribe((pre)=> {
          this.presupuestoEdit = pre;
          this.mostrarMantenimiento(true);
       });
    }
  }
}
