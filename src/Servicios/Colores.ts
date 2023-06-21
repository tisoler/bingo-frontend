import { Color } from "../Tipos"

const { REACT_APP_BACKEND_URL } = process.env

export const ObtenerColores = async (): Promise<Color[] | null> => {
  try {
    const res = await fetch(`${REACT_APP_BACKEND_URL}/colores`)
    const colores = await res.json()

    return colores
  } catch (e) {
    console.log(`error: ${e}`)
    return null
  }
}
