# Down-N-Dirty-Detailing-
Down N Dirty Detailing - Website (single File React)
· typescript
import React from "react";
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
