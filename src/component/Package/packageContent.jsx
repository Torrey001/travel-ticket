import React from 'react';

const PackageContent = () => (
  <main className="p-8">
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Top Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Repeat for each package */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src="/path/to/package-image.jpg" alt="Package" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-bold mt-4">Package Name</h3>
          <p className="text-gray-600">Brief description of the package.</p>
          <p className="text-gray-800 font-bold mt-2">$500 per person</p>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
      <div className="space-y-4">
        {/* Repeat for each testimonial */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-600">"This package was a great experience! Highly recommend it."</p>
          <p className="text-gray-800 font-bold mt-2">- Customer Name</p>
        </div>
      </div>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
      <form className="bg-white p-4 rounded-lg shadow-md">
        <input type="email" placeholder="Your email address" className="w-full p-2 border rounded mb-4" />
        <button type="submit" className="w-full bg-[#605DEC] text-white py-2 rounded">Sign Up</button>
      </form>
    </section>
  </main>
);

export default PackageContent;