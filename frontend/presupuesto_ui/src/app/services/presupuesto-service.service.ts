import { Injectable } from '@angular/core';
import { listaPresupuestos } from '../dataPresupuestos';
import { Presupuesto } from '../interfaces/Presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  listado: Presupuesto[] = listaPresupuestos;

  constructor() {}

  get_listPresupuestos(): Presupuesto[] {
    return this.listado;
  }

  get_Presupuesto(id: number): Presupuesto | undefined {
    return this.listado.find((r) => r.id === id);
  }
}
