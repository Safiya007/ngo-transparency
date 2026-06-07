import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ngos = [
  { id: 1, name: 'Smile Foundation', cause: 'Education', status: 'Verified', score: 94, donations: '₹12,00,000' },
  { id: 2, name: 'Green Earth NGO', cause: 'Environment', status: 'Verified', score: 88, donations: '₹8,50,000' },
  { id: 3, name: 'Hunger Free India', cause: 'Food', status: 'Pending', score: 72, donations: '₹3,20,000' },
  { id: 4, name: 'Hope & Care Trust', cause: 'Healthcare', status: 'Flagged', score: 45, donations: '₹1,10,000' },
]

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState(ngos)

  function verify(id) {
    setData(data.map(n => n.id === id ? { ...n, status: 'Verified' } : n))
  }
  function flag(id) {
    setData(data.map(n => n.id === id ? { ...n, status: 'Flagged' } : n))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-lg">NGO Transparency</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-green-200">Admin Dashboard</span>
          <button onClick={() => navigate('/')} className="bg-green-600 px-4 py-1 rounded-lg hover:bg-green-500 text-sm">Logout</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Control Panel</h1>
        <p className="text-gray-500 mb-8">Verify NGOs, monitor donations, flag suspicious activity.</p>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <div className="text-3xl font-bold text-green-600">48</div>
            <div className="text-gray-500 text-sm mt-1">Total NGOs</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <div className="text-3xl font-bold text-green-600">38</div>
            <div className="text-gray-500 text-sm mt-1">Verified</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <div className="text-3xl font-bold text-yellow-500">6</div>
            <div className="text-gray-500 text-sm mt-1">Pending</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <div className="text-3xl font-bold text-red-500">4</div>
            <div className="text-gray-500 text-sm mt-1">Flagged</div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-700 mb-4">NGO Management</h2>
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-green-50 text-green-700">
              <tr>
                <th className="text-left px-4 py-3">NGO Name</th>
                <th className="text-left px-4 py-3">Cause</th>
                <th className="text-left px-4 py-3">AI Score</th>
                <th className="text-left px-4 py-3">Donations</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(n => (
                <tr key={n.id} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">{n.name}</td>
                  <td className="px-4 py-3 text-gray-500">{n.cause}</td>
                  <td className="px-4 py-3">
                    <span className={`font-bold ${n.score >= 80 ? 'text-green-600' : n.score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {n.score}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-green-700 font-semibold">{n.donations}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      n.status === 'Verified' ? 'bg-green-100 text-green-700' :
                      n.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-600'}`}>
                      {n.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button onClick={() => verify(n.id)} className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs hover:bg-green-200">
                      Verify
                    </button>
                    <button onClick={() => flag(n.id)} className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-xs hover:bg-red-200">
                      Flag
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}