import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './features/auth/login/Loginpage'
import Signuppage from './features/auth/signup/Signuppage'
import Dashboard from './features/events/dashboard/Dashboard'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/login' element={<Loginpage />} />
      <Route path='/signup' element={<Signuppage />} />
    </Routes>
  )
}

export default App
