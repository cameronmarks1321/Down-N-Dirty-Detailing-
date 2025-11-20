import React from "react";

export default function DownNDirtyWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Simple SVG logo */}
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 8l2-3h8l2 3" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold leading-tight">Down n Dirty Detailing</h1>
              <p className="text-sm opacity-75">“Triple the D. Triple the Shine.”</p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm">Call or Text</div>
            <a href="tel:5049522932" className="text-lg font-bold">504-952-2932</a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Professional Mobile & Shop Detailing</h2>
            <p className="mb-6 leading-relaxed">We bring showroom shine to your ride. Full exterior and interior detailing using premium products and techniques — fast, dependable, and priced clearly.</p>
            <a href="#pricing" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold shadow">View Packages</a>
          </div>

          <div className="rounded-lg overflow-hidden shadow">
            <div className="w-full h-56 bg-gradient-to-r from-gray-300 to-gray-200 flex items-center justify-center">
              <span className="text-gray-600">[Hero image placeholder — replace with your photo]</span>
            </div>
          </div>
        </section>

        {/* Services / Pricing */}
        <section id="pricing" className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Service & Pricing Breakdown</h3>
          <p className="mb-6">Prices may vary depending on the vehicle's condition. Extremely dirty vehicles may incur a $25–$100 "Down n Dirty" surcharge (pet hair, mud, mold, heavy stains). Multi-car discounts available.</p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Basic Wash */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">🧼 BASIC WASH PACKAGE</h4>
              <table className="w-full text-sm mb-4">
                <thead className="text-left text-gray-600">
                  <tr>
                    <th className="pb-2">Vehicle Size</th>
                    <th className="pb-2 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">Small</td>
                    <td className="py-2 text-right">$135</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Medium</td>
                    <td className="py-2 text-right">$155</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Large</td>
                    <td className="py-2 text-right">$180</td>
                  </tr>
                </tbody>
              </table>

              <ul className="text-sm space-y-2">
                <li>✔ Hand wash & dry</li>
                <li>✔ Wheel & tire clean</li>
                <li>✔ Exterior windows</li>
                <li>✔ Light interior wipe-down</li>
                <li>✔ Quick vacuum</li>
              </ul>
            </div>

            {/* Standard Detail */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">✨ STANDARD DETAIL (Inside & Out)</h4>
              <table className="w-full text-sm mb-4">
                <thead className="text-left text-gray-600">
                  <tr>
                    <th className="pb-2">Vehicle Size</th>
                    <th className="pb-2 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">Small</td>
                    <td className="py-2 text-right">$150</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Medium</td>
                    <td className="py-2 text-right">$180</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Large</td>
                    <td className="py-2 text-right">$210</td>
                  </tr>
                </tbody>
              </table>

              <ul className="text-sm space-y-2">
                <li>✔ Full exterior wash</li>
                <li>✔ Tire shine</li>
                <li>✔ Interior vacuum</li>
                <li>✔ Interior wipe-down</li>
                <li>✔ Interior windows</li>
                <li>✔ Door jambs</li>
              </ul>
            </div>

            {/* Triple D */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">💎 Triple D PACKAGE</h4>
              <table className="w-full text-sm mb-4">
                <thead className="text-left text-gray-600">
                  <tr>
                    <th className="pb-2">Vehicle Size</th>
                    <th className="pb-2 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">Small</td>
                    <td className="py-2 text-right">$180</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Medium</td>
                    <td className="py-2 text-right">$220</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Large</td>
                    <td className="py-2 text-right">$260</td>
                  </tr>
                </tbody>
              </table>

              <p className="font-medium mb-2">Includes STANDARD Package +:</p>
              <ul className="text-sm space-y-2">
                <li>✔ Carpet</li>
                <li>✔ Deep interior cleaning</li>
                <li>✔ Stain & odor treatment (light)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Notes and Surcharges */}
        <section className="mt-10 bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2">Notes</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Prices may vary depending on the vehicle's condition.</li>
            <li>Extremely dirty vehicles may incur a <strong>$25–$100</strong> “Down n Dirty” surcharge (pet hair, mud, mold, heavy stains).</li>
            <li>Multi-car discounts available — ask about fleet and referral pricing.</li>
          </ul>
        </section>

        {/* Booking / Contact */}
        <section className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-3">Book an Appointment</h4>
            <p className="text-sm mb-4">Call or text to schedule or request a quote. We offer mobile service in the surrounding area.</p>

            <div className="space-y-3">
              <a href="tel:5049522932" className="block w-full text-center border border-black rounded-md px-4 py-3 font-semibold">Call/Text 504-952-2932</a>
              <a href="mailto:info@downndirtydetailing.com" className="block w-full text-center bg-black text-white rounded-md px-4 py-3 font-semibold">Email: info@downndirtydetailing.com</a>
            </div>

            <div className="mt-4 text-sm">
              <p><strong>Location:</strong> Mobile service + shop (service area: enter your city)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-3">Visit / Follow</h4>
            <p className="text-sm mb-4">Follow us for tips, before & afters, and specials.</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="px-4 py-2 border rounded">@downndirtydetailing</a>
              <a href="#" aria-label="TikTok" className="px-4 py-2 border rounded">@downndirtydetailing</a>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold">Business Hours</h5>
              <p className="text-sm">Mon – Sat: 8:00 AM – 6:00 PM<br/>Sun: Closed / By appointment</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Down n Dirty Detailing</p>
          <p className="text-sm">Designed & maintained by Down n Dirty Detailing — contact <a href="tel:5049522932" className="underline">504-952-2932</a></p>
        </div>
      </footer>
    </div>
  );
}
