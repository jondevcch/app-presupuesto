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

  get_nombreDivisas(id: string) : string | undefined {
    return this.listaDivisas.find(f=>f.idDivisa === id)?.nombreDivisa;
  }

  get_nombreCategoria(id: number) : string | undefined {
    return this.listaCategorias.find(f=>f.idCategoria === id)?.nombreCategoria;
  }
}
