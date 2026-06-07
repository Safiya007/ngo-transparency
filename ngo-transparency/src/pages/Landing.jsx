import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  const stories = [
    {
      name: 'Aisha',
      age: '11 Years',
      image:
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop',
      story:
        'I thought I would never return to school. Today I dream of becoming a teacher.',
    },
    {
      name: 'Ravi',
      age: '14 Years',
      image:
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop',
      story:
        'The donated books and mentorship changed my future.',
    },
    {
      name: 'Lakshmi',
      age: '58 Years',
      image:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&auto=format&fit=crop',
      story:
        'Community support helped me receive the treatment I desperately needed.',
    },
  ]

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&auto=format&fit=crop"
          alt="Helping Community"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl text-white">

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
            TrustBridge
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Every Smile Has a Story.
            <br />
            Every Donation Creates a Future.
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Connecting donors with verified NGOs through
            complete transparency, accountability, and measurable impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              onClick={() => navigate('/login')}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-bold shadow-xl"
            >
              Login
            </button>

            <button
              onClick={() => navigate('/register')}
              className="bg-white text-green-700 px-8 py-4 rounded-xl text-lg font-bold shadow-xl"
            >
              Register
            </button>

          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-green-800">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-green-50 rounded-3xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-3">🎓</div>
              <h3 className="text-4xl font-bold text-green-700">
                25,000+
              </h3>
              <p className="text-gray-600 mt-2">
                Children Educated
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-3">🏠</div>
              <h3 className="text-4xl font-bold text-blue-700">
                12,000+
              </h3>
              <p className="text-gray-600 mt-2">
                Families Supported
              </p>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-3">🏢</div>
              <h3 className="text-4xl font-bold text-orange-700">
                150+
              </h3>
              <p className="text-gray-600 mt-2">
                Verified NGOs
              </p>
            </div>

            <div className="bg-purple-50 rounded-3xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-3">❤️</div>
              <h3 className="text-4xl font-bold text-purple-700">
                100%
              </h3>
              <p className="text-gray-600 mt-2">
                Donation Transparency
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY TRUSTBRIDGE */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-green-800">
            Why TrustBridge?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">
                Complete Transparency
              </h3>
              <p className="text-gray-600">
                Track every donation from contribution to impact.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3">
                Verified NGOs
              </h3>
              <p className="text-gray-600">
                Only trusted organizations can participate.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">
                Impact Analytics
              </h3>
              <p className="text-gray-600">
                View measurable social impact and reports.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-green-800">
            Stories of Hope
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {story.name}
                  </h3>

                  <p className="text-green-600 font-semibold mb-3">
                    {story.age}
                  </p>

                  <p className="text-gray-600">
                    "{story.story}"
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* DONATION JOURNEY */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-green-800">
            Your Donation Journey
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              'Donation Made',
              'NGO Verified',
              'Funds Allocated',
              'Project Executed',
              'Impact Delivered',
            ].map((step) => (
              <div
                key={step}
                className="bg-green-50 rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-14 h-14 bg-green-600 rounded-full mx-auto mb-4"></div>

                <p className="font-semibold">
                  {step}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-green-700 text-white py-20 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-4xl italic">
            "No act of kindness, no matter how small,
            is ever wasted."
          </p>

          <p className="mt-6 text-xl">
            — Aesop
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-24 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-6">
            Be the Reason Someone Smiles Tomorrow
          </h2>

          <p className="text-xl mb-10">
            Transparency builds trust. Trust changes lives.
          </p>

          <button
            onClick={() => navigate('/register')}
            className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg"
          >
            Join TrustBridge
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 text-center">

        <h3 className="text-2xl font-bold mb-2">
          TrustBridge
        </h3>

        <p className="text-gray-400">
          Turning Donations Into Visible Change
        </p>

        <p className="mt-4 text-sm text-gray-500">
          © 2026 TrustBridge. All rights reserved.
        </p>

      </footer>
    </div>
  )
}