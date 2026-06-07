import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [role, setRole] = useState('donor')

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🌿</div>
          <h2 className="text-2xl font-bold text-green-700">Create Account</h2>
          <p className="text-gray-500 text-sm">Join the transparency movement</p>
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Safiya Begam"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
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
        <label className="block text-sm font-medium text-gray-700 mb-1">Register as</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="donor">Donor</option>
          <option value="ngo">NGO</option>
        </select>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 shadow"
        >
          Create Account
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="text-green-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}