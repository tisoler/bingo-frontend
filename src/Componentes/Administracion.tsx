import { useEffect, useState } from "react"
import { GenerarCartonesParaJugada } from "../Servicios/Cartones"
import { ObtenerColores } from "../Servicios/Colores"
import { GenerarJugada, ObtenerJugadas } from "../Servicios/Jugadas"
import { Color, Jugada } from "../Tipos"

export default () => {
	const [colores, setColores] = useState<Color[]>([])
	const [colorSeleccionado, setColorSeleccionado] = useState<number>(1)
	const [codigo, setCodigo] = useState<string>('')

	const [jugadas, setJugadas] = useState<Jugada[]>([])
	const [jugadaSeleccionada, setJugadaSeleccionada] = useState<number>(1)
	const [limiteCartones, setLimitesCartones] = useState<number>(5000)

	useEffect(() => {
		const obtenerJugadas = async () => {
			const jugadasBD = await ObtenerJugadas()
			if (jugadasBD?.length) setJugadas(jugadasBD)
		}

		const obtenerColores = async () => {
			const coloresBD = await ObtenerColores()
			if (coloresBD?.length) setColores(coloresBD)

			await obtenerJugadas()
		}

		obtenerJugadas()
		obtenerColores()
	}, [])

	const generarJugada = async () => {
		const jugada: Jugada = {
			codigo,
			idColor: colorSeleccionado
		}
		await GenerarJugada(jugada)
	}

	const generarCartones = async () => {
		await GenerarCartonesParaJugada(jugadaSeleccionada, { limiteMaximo: limiteCartones })
	}

	return (
		<>
			<>
				<span>Generar jugada:</span>
				Código: <input onChange={e => setCodigo(e.target.value)} value={codigo} />
				Color: <select onChange={e => setColorSeleccionado(parseInt(e.target.value))} value={colorSeleccionado}>
					{colores.map(color => <option key={color.id} value={color.id}>{color.nombre}</option>)}
				</select>
				<button value='Generar jugada' onClick={() => generarJugada()}>Generar jugada</button>
			</>
			<>
				<span>Elegir jugada:</span>
				Jugada: <select onChange={e => setJugadaSeleccionada(parseInt(e.target.value))} value={jugadaSeleccionada}>
					{jugadas.map(jugada => <option key={jugada.id} value={jugada.id}>{`${jugada.codigo} - ${jugada.fecha}`}</option>)}
				</select>
				Límite de cartones: <input onChange={e => setLimitesCartones(parseInt(e.target.value))} value={limiteCartones} />
				<button value='Generar cartones' onClick={() => generarCartones()}>Generar jugada</button>
			</>
		</>
	)
}
