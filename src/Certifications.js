import React from "react";

import cert1 from "./assets/certificates/certificate1.png";


const certificates = [
  {
    title: "Sales Hub Software",
    organization: "Hubspot",
    year: "2026",
    image: cert1,
  },
  {
    title: "Certificate Name 2",
    organization: "Issuing Organization",
    year: "2026",
    image: cert2,
  },
  {
    title: "Certificate Name 3",
    organization: "Issuing Organization",
    year: "2026",
    image: cert3,
  },
  {
    title: "Certificate Name 4",
    organization: "Issuing Organization",
    year: "2026",
    image: cert4,
  },
  {
    title: "Certificate Name 5",
    organization: "Issuing Organization",
    year: "2026",
    image: cert5,
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#2C2C2C] font-sans">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F4EF]/95 backdrop-blur border-b border-[#E9D8A6]/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <a
            href="/"
            className="font-semibold text-lg hover:text-[#9A7B2F] transition"
          >
            Christine Martin
          </a>

          <a
            href="/"
            className="text-sm text-[#555] hover:text-[#9A7B2F] transition"
          >
            ← Back to Portfolio
          </a>

        </div>
      </nav>

      {/* Header */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-4">
            Certifications & Learning
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold">
            Continuous learning.
          </h1>

          <p className="mt-6 text-lg text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
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
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#E9D8A6]/40 hover:shadow-lg transition"
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

                {/* Certificate Details */}
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
                    className="inline-block mt-5 text-sm underline hover:text-[#9A7B2F] transition"
                  >
                    View Certificate →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-10">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Christine Martin. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}