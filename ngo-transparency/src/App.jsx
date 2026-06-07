import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import DonorDashboard from './pages/DonorDashboard'
import NGODashboard from './pages/NGODashboard'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/donor" element={<DonorDashboard />} />
      <Route path="/ngo" element={<NGODashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}