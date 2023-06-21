import { Route, Routes } from 'react-router-dom'
import Monitor from './Componentes/Monitor'
import Administracion from './Componentes/Administracion'

const Rutas = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Monitor />} />
      <Route path={'/monitor'} element={<Monitor />} />
      <Route path={'/administracion'} element={<Administracion />} />
    </Routes>
  )
}

export default Rutas