import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { ApplyJob } from './pages/ApplyJob'
import { Application } from './pages/Application'
import RecruiterLogin from './components/RecruiterLogin'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJobs from './pages/AddJobs'
import ViewApplications from './pages/ViewApplications'
import ManageJobs from './pages/ManageJobs'

function App() {

  const {showRucruiterLogin} = useContext(AppContext);
  return (
    <div>
      { showRucruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Application />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='add-job' element={<AddJobs />} />
          <Route path='manage-jobs' element={<ManageJobs />} />
          <Route path='view-applications' element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
