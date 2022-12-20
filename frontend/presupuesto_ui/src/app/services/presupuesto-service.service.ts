import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  listado!: Presupuesto[];

  constructor(private http: HttpClient) { }

  get_listPresupuestos(): Observable<Presupuesto[]> {
    return this.http.get<Presupuesto[]>(`${this.url_services}/presupuestos`);
  }

  get_Presupuesto(id: String): Observable<Presupuesto> {
    return this.http.get<Presupuesto>(`${this.url_services}/presupuesto/${id}`);
  }

  add_Presupuesto(presupuesto: Presupuesto): Observable<Presupuesto> {
    return this.http.post<Presupuesto>(`${this.url_services}/presupuesto`, presupuesto, this.httpOptions);
  }

  update_Presupuesto(id:string, presupuestoEditado: Presupuesto): Observable<Presupuesto> {
    return this.http.put<Presupuesto>(`${this.url_services}/presupuesto/${id}`, presupuestoEditado, this.httpOptions);
  }

}
