import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Gasto } from '../interfaces/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

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
    gasto.idPresupuesto = '63a0ab96eae9fac894e51140';
    return this.http.post<Gasto>(`${this.url_services}/gasto`, gasto, this.httpOptions);
  }

  update_Gasto(id: string, gastoEditado: Gasto): Observable<Gasto> {
    return this.http.put<Gasto>(`${this.url_services}/gasto/${id}`, gastoEditado, this.httpOptions);
  }
}
