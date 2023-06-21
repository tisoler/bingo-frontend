import { Carton, PayloadGenerarCartones } from "../Tipos"

const { REACT_APP_BACKEND_URL } = process.env

export const GenerarCartonesParaJugada = async (idJugada: number, payload: PayloadGenerarCartones): Promise<Carton[] | null> => {
  try {
		const opcionesRequest = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await fetch(`${REACT_APP_BACKEND_URL}/cartonesJugada/${idJugada}`, opcionesRequest)
    const resultado = await res.json()

    return resultado
  } catch (e) {
    console.log(`error: ${e}`)
    return null
  }
}
