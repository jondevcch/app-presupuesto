import { Injectable } from '@angular/core';

import { listaDivisas } from '../dataDivisa';
import { listaCategorias } from '../dataCategorias';
import { Divisa } from '../interfaces/divisa';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CatalogosServices {

  listaDivisas: Divisa[] = listaDivisas;
  listaCategorias: Categoria[] = listaCategorias;

  constructor() { }

  get_listaDivisas(): Divisa[] {
    return this.listaDivisas;
  }

  get_listaCategorias(): Categoria[] {
    return this.listaCategorias;
  }
}
