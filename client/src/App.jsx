import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Applyjob } from './pages/Applyjob'
import { Application } from './pages/Application'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<Applyjob />} />
        <Route path='/applications' element={<Application />} />
      </Routes>
    </div>
  )
}

export default App
