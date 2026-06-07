import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('donor')

  function handleLogin() {
    if (role === 'donor') navigate('/donor')
    if (role === 'ngo') navigate('/ngo')
    if (role === 'admin') navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🌿</div>
          <h2 className="text-2xl font-bold text-green-700">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Login to your account</p>
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">Login as</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="donor">Donor</option>
          <option value="ngo">NGO</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 shadow"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          No account?{' '}
          <span onClick={() => navigate('/register')} className="text-green-600 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  )
}