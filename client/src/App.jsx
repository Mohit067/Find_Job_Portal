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
import 'quill/dist/quill.snow.css'
import { ToastContainer, toast } from 'react-toastify'

function App() {

  const {showRucruiterLogin, companyToken} = useContext(AppContext);
  return (
    <div>
      { showRucruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Application />} />
        <Route path='/dashboard' element={<Dashboard />}>
          {companyToken ? 
            <>
              <Route path='add-job' element={<AddJobs />} />
              <Route path='manage-jobs' element={<ManageJobs />} />
              <Route path='view-applications' element={<ViewApplications />} />
            </> : null
          }
        </Route>
      </Routes>
    </div>
  )
}

export default App
