import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './features/auth/login/Loginpage'
import Signuppage from './features/auth/signup/Signuppage'
import Dashboard from './features/events/dashboard/Dashboard'
import { LoginRoute, SignUpRoute } from './constants/routes'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path={LoginRoute} element={<Loginpage />} />
      <Route path={SignUpRoute} element={<Signuppage />} />
    </Routes>
  )
}

export default App
