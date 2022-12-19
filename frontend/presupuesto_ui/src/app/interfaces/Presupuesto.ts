export interface Presupuesto {
    id: number;
    nombre: string;
    idCaterogia: number;
    idUsuario: string;
    monto: number;
    gastosTotales?: number;
    balance?: number;
  }
  
  