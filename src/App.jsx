import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

import LocalLayout from './pages/local/LocalLayout'
import Events from './pages/local/sections/Events'
import Mantenaince from './pages/local/sections/Mantenaince'
import Illumination from './pages/local/sections/Illumination'
import Architecture from './pages/local/sections/Architecture'
import Fire from './pages/local/sections/Fire'
import Roof from './pages/local/sections/Roof'
import AirConditioning from './pages/local/sections/AirConditioning'
import FoodCooling from './pages/local/sections/FoodCooling'
import SteelScreen from './pages/local/sections/SteelScreen'
import ElectricSys from './pages/local/sections/ElectricSys'
import ElectricGen from './pages/local/sections/ElectricGen'
import Gases from './pages/local/sections/Gases'

import Loader from './components/loader/Loader'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/app' element={<Home />} />
          <Route path='/local/:ceco/' element={<LocalLayout />} >
            <Route index element={<Events />} />
            <Route path='arquitectura' element={<Architecture />} />
            <Route path='incendios' element={<Fire />} />
            <Route path='mantencion' element={<Mantenaince />} />
            <Route path='ilum-ventas' element={<Illumination />} />
            <Route path='cubierta' element={<Roof />} />
            <Route path='climatizacion' element={<AirConditioning />} />
            <Route path='frio-alimentario' element={<FoodCooling />} />
            <Route path='cortina' element={<SteelScreen />} />
            <Route path='sistema-electrico' element={<ElectricSys />} />
            <Route path='generacion-electrica' element={<ElectricGen />} />
            <Route path='gases' element={<Gases />} />
          </Route>
          <Route path='*' element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App