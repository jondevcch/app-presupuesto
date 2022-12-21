import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gasto } from '../interfaces/gasto';
import { Presupuesto } from '../interfaces/Presupuesto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  presupuesto!: Presupuesto;

  url_services = 'https://api-presupuesto.vercel.app/curso_angular/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  get_listGastos(id: String): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.url_services}/gastosPresupuesto/${id}`);
  }

  add_Gasto(gasto: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(`${this.url_services}/gasto`, gasto, this.httpOptions);
  }

  update_Gasto(id: string, gastoEditado: Gasto): Observable<Gasto> {
    return this.http.put<Gasto>(`${this.url_services}/gasto/${id}`, gastoEditado, this.httpOptions);
  }

  delete_Gasto(id: string): Observable<Gasto> {
    return this.http.delete<Gasto>(`${this.url_services}/gasto/${id}`, this.httpOptions);
  }
}
