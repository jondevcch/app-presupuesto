import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { listaPresupuestos } from '../dataPresupuestos';
import { Presupuesto } from '../interfaces/Presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  url_services = 'https://api-presupuesto.vercel.app/curso_angular/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  listado: Presupuesto[] = listaPresupuestos;

  constructor(private http: HttpClient) { }

  get_listPresupuestos(): Observable<Presupuesto[]> {
    return this.http.get<Presupuesto[]>(`${this.url_services}/presupuestos`);
  }

  get_Presupuesto(id: number): Presupuesto | undefined {
    return this.listado.find((r) => r.id === id);
  }

  


}
