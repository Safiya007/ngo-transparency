import { useNavigate } from 'react-router-dom'

const donations = [
  { id: 1, ngo: 'Smile Foundation', amount: 2000, date: '2026-05-10', status: 'Verified', usage: 'School supplies for 20 children' },
  { id: 2, ngo: 'Green Earth NGO', amount: 1500, date: '2026-05-18', status: 'Verified', usage: 'Planted 150 trees in Tamil Nadu' },
  { id: 3, ngo: 'Hunger Free India', amount: 3000, date: '2026-06-01', status: 'Pending', usage: 'Awaiting usage report' },
]

const ngos = [
  { id: 1, name: 'Smile Foundation', cause: 'Education', score: 94, raised: '₹12,00,000' },
  { id: 2, name: 'Green Earth NGO', cause: 'Environment', score: 88, raised: '₹8,50,000' },
  { id: 3, name: 'Hunger Free India', cause: 'Food', score: 91, raised: '₹15,20,000' },
]

export default function DonorDashboard() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-lg">NGO Transparency</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-green-200">Donor Dashboard</span>
          <button onClick={() => navigate('/')} className="bg-green-600 px-4 py-1 rounded-lg hover:bg-green-500 text-sm">Logout</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome, Safiya 👋</h1>
        <p className="text-gray-500 mb-8">Track your donations and see real impact.</p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <div className="text-3xl font-bold text-green-600">₹6,500</div>
            <div className="text-gray-500 text-sm mt-1">Total Donated</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <div className="text-3xl font-bold text-green-600">3</div>
            <div className="text-gray-500 text-sm mt-1">NGOs Supported</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow text-center">
            <div className="text-3xl font-bold text-green-600">2</div>
            <div className="text-gray-500 text-sm mt-1">Verified Impacts</div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-700 mb-4">My Donations</h2>
        <div className="bg-white rounded-xl shadow overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-green-50 text-green-700">
              <tr>
                <th className="text-left px-4 py-3">NGO</th>
                <th className="text-left px-4 py-3">Amount</th>
                <th className="text-left px-4 py-3">Date</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Fund Usage</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(d => (
                <tr key={d.id} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium">{d.ngo}</td>
                  <td className="px-4 py-3 text-green-700 font-semibold">₹{d.amount}</td>
                  <td className="px-4 py-3 text-gray-500">{d.date}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${d.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{d.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-gray-700 mb-4">Discover NGOs</h2>
        <div className="grid grid-cols-1 gap-4">
          {ngos.map(n => (
            <div key={n.id} className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
              <div>
                <div className="font-bold text-gray-800">{n.name}</div>
                <div className="text-gray-500 text-sm">{n.cause} · {n.raised} raised</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{n.score}</div>
                  <div className="text-xs text-gray-400">AI Score</div>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}