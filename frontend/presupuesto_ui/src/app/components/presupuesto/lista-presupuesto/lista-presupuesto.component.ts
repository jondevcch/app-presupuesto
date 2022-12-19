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
  displayedColumns: string[] = ['nombre', 'monto', 'id'];
  editionMode = false;

  @ViewChild('paginator') paginator!: MatPaginator
  @ViewChild('editPresupuestoForm') editForm!: NgForm;

  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.get_listPresupuestos();
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.listaPresupuesto);
    this.dataSource.paginator = this.paginator;
  }

  get_listPresupuestos() {
    this.presupuestoService.get_listPresupuestos().subscribe((presupuestos)=> {
      this.listaPresupuesto = presupuestos;
    });
  }

  // search_contact(id: string) {
  //   this.edit_id = id;
  //   this.presupuestoService.get_Presupuesto(id).subscribe((contact) => {
    
  //     this.editForm.setValue({
  //       first_name: contact.first_name,
  //       last_name: contact.last_name,
  //       email: contact.email,
  //       _id: contact._id,
  //     });

  //   });
  // }
}
