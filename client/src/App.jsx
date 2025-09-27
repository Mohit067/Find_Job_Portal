import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { ApplyJob } from './pages/ApplyJob'
import { Application } from './pages/Application'
import RecruiterLogin from './components/RecruiterLogin'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {

  const {showRucruiterLogin} = useContext(AppContext);
  return (
    <div>
      { showRucruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Application />} />
      </Routes>
    </div>
  )
}

export default App
