import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaGastos } from '../dataGastos';

import { Gasto } from '../interfaces/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  listaGastos: Gasto[] = listaGastos;

  url_services = 'https://api-presupuesto.vercel.app/curso_angular/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  get_listGastos(id: string): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.url_services}/gastosPresupuesto/${id}`);
  }
}
