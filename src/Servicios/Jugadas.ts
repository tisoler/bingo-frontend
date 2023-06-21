import { Jugada } from "../Tipos"

const { REACT_APP_BACKEND_URL } = process.env

export const ObtenerJugadas = async (): Promise<Jugada[] | null> => {
  try {
    const res = await fetch(`${REACT_APP_BACKEND_URL}/jugadas`)
    const jugadas = await res.json()

    return jugadas
  } catch (e) {
    console.log(`error: ${e}`)
    return null
  }
}

export const GenerarJugada = async (payload: Jugada): Promise<Jugada | null> => {
  try {
		const opcionesRequest = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await fetch(`${REACT_APP_BACKEND_URL}/jugadas`, opcionesRequest)
    const resultado = await res.json()

    return resultado
  } catch (e) {
    console.log(`error: ${e}`)
    return null
  }
}
