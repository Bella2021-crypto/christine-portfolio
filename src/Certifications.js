import React from "react";

import cert1 from "./assets/certificates/certificate1.jpg";
import cert2 from "./assets/certificates/certificate2.jpg";
import cert3 from "./assets/certificates/certificate3.jpg";
import cert4 from "./assets/certificates/certificate4.jpg";

const certificates = [
  {
    title: "Certificate Name",
    organization: "Issuing Organization",
    year: "2026",
    image: cert1,
  },
  {
    title: "Certificate Name",
    organization: "Issuing Organization",
    year: "2026",
    image: cert2,
  },
  {
    title: "Certificate Name",
    organization: "Issuing Organization",
    year: "2026",
    image: cert3,
  },
  {
    title: "Certificate Name",
    organization: "Issuing Organization",
    year: "2026",
    image: cert4,
  },
];

function Certifications() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#292723]">

      {/* Header */}
      <header className="border-b border-[#E9D8A6]/40 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

          <a
            href="/"
            className="font-semibold text-lg hover:text-[#9A7B2F]"
          >
            Christine Martin
          </a>

          <a
            href="/"
            className="text-sm hover:text-[#9A7B2F]"
          >
            ← Back to Portfolio
          </a>

        </div>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            Certifications
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold">
            Continuous learning.
          </h1>

          <p className="mt-6 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
            A collection of certifications and courses that reflect my
            continued development in technology, software development,
            and professional skills.
          </p>

        </div>
      </section>

      {/* Certificates */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="bg-white border border-[#E9D8A6]/50 rounded-2xl overflow-hidden hover:shadow-lg transition"
              >

                {/* Certificate Image */}
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="w-full h-64 object-cover hover:opacity-90 transition"
                  />
                </a>

                {/* Details */}
                <div className="p-6">

                  <h2 className="text-xl font-semibold">
                    {certificate.title}
                  </h2>

                  <p className="text-[#777] mt-2">
                    {certificate.organization}
                  </p>

                  <p className="text-sm text-[#9A7B2F] mt-2">
                    {certificate.year}
                  </p>

                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 text-sm underline hover:text-[#9A7B2F]"
                  >
                    View Certificate →
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E9D8A6]/40 bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-[#777]">
          © 2026 Christine Martin. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Certifications;
