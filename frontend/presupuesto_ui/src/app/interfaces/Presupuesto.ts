export interface Presupuesto {    
    _id: string;
    nombre: string;
    categoria?: number;
    divisa?: string;
    idUsuario: string;
    monto: number;
    gastosTotales?: number;
    balance?: number;
  }
  
  