
export interface Color {
	id?: number,
	nombre: string,
}

export interface Jugada {
	id?: number,
	codigo: string,
	idColor: number,
	fecha?: string,
	activo?: boolean,
}

export interface PayloadGenerarCartones {
	limiteMaximo?: number,
}

export interface Carton {
  id?: number,
  numeroSerie: number,
  idJugada: number,
  comprador?: string,
  ganadorLinea?: boolean,
  ganadorBingo?: boolean,
  numeros: string,
}
