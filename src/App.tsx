// @ts-nocheck

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import calmworkspace from "./calm-workspace.jpg";
import Certifications from "./Certifications";

function ChristineMartinHome() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#2C2C2C] font-sans">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F4EF]/95 backdrop-blur border-b border-[#E9D8A6]/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            to="/"
            className="font-semibold text-lg hover:text-[#9A7B2F] transition"
          >
            Christine Martin
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm text-[#555]">
            <a href="#about" className="hover:text-[#9A7B2F] transition">
              About
            </a>

            <a href="#skills" className="hover:text-[#9A7B2F] transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-[#9A7B2F] transition">
              Projects
            </a>

            <Link
              to="/certifications"
              className="hover:text-[#9A7B2F] transition"
            >
              Certifications
            </Link>

            <a href="#experience" className="hover:text-[#9A7B2F] transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-[#9A7B2F] transition">
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-5">
              Software Engineering • Digital Products
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Christine Martin
            </h1>

            <p className="mt-6 text-xl text-[#6F6B63] leading-relaxed max-w-xl">
              Aspiring Software Engineer and digital product builder
              passionate about creating useful and thoughtful technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="bg-[#2C2C2C] text-white px-7 py-3 rounded-full hover:opacity-90 transition"
              >
                Explore My Projects
              </a>

              <a
                href="#contact"
                className="border border-[#2C2C2C] px-7 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
              >
                Get In Touch
              </a>

            </div>
          </div>


          <div className="flex justify-center">
            <img
              src={calmworkspace}
              alt="Calm workspace"
              className="rounded-3xl shadow-xl w-full max-w-lg object-cover"
            />
          </div>

        </div>
      </section>


      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              From problem-solving to building technology.
            </h2>
          </div>


          <div className="max-w-3xl mx-auto text-[#6F6B63] leading-relaxed space-y-5">

            <p>
              I am a customer service and administrative professional
              developing my skills in software engineering and digital
              product development.
            </p>

            <p>
              My professional experience has taught me the importance of
              understanding user needs, communicating clearly, solving
              problems, managing information, and staying organized.
            </p>

            <p>
              I am now applying these skills to technology, learning how
              digital products are designed, developed, integrated, and
              improved to solve practical problems.
            </p>

            <p>
              My long-term goal is to become a skilled software engineer
              capable of building useful, reliable, and user-focused
              digital products.
            </p>

          </div>

        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Skills
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Building a strong technical foundation.
            </h2>

            <p className="mt-5 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
              I am continuously developing technical and professional
              skills through structured learning and hands-on projects.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <SkillCard
              title="Frontend Development"
              items={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Responsive Design",
              ]}
            />

            <SkillCard
              title="Backend Development"
              items={[
                "Node.js",
                "APIs",
                "Server-side concepts",
                "Application architecture",
              ]}
            />

            <SkillCard
              title="Development Tools"
              items={[
                "Git",
                "GitHub",
                "VS Code",
                "Vercel",
                "Debugging",
                "Deployment",
              ]}
            />

            <SkillCard
              title="Database & Media"
              items={[
                "Prisma",
                "Neon",
                "Cloudinary",
                "Database concepts",
                "Image management",
              ]}
            />

            <SkillCard
              title="Payments & Integrations"
              items={[
                "Paystack",
                "Flutterwave",
                "API integration",
                "Third-party services",
              ]}
            />

            <SkillCard
              title="Professional Skills"
              items={[
                "Customer Service",
                "Problem Solving",
                "Communication",
                "Data Entry",
                "Time Management",
                "Organization",
              ]}
            />

          </div>

        </div>
      </section>


      {/* Certifications Preview */}
      <section id="certifications-preview" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            Certifications & Learning
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Growing through continuous learning.
          </h2>

          <p className="mt-5 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
            A selection of certifications and learning experiences that
            reflect my continued development in technology, software
            development, and professional skills.
          </p>

          <div className="mt-8">

            <Link
              to="/certifications"
              className="inline-block bg-[#2C2C2C] text-white px-7 py-3 rounded-full hover:opacity-90 transition"
            >
              View All Certifications →
            </Link>

          </div>

        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Projects
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Learning by building.
            </h2>

            <p className="mt-5 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
              Practical projects where I explore software development,
              product thinking, integrations, and real-world application
              architecture.
            </p>

          </div>


          <div className="grid gap-8">

            <ProjectCard
              title="Gemora"
              category="Full-Stack Marketplace"
              description="A luxury-focused marketplace concept exploring how buyers and sellers can interact through a modern e-commerce experience."
              technologies="Next.js • React • Prisma • Neon • Paystack • Flutterwave • Cloudinary • Vercel"
              features={[
                "Marketplace and product experience",
                "Database-driven application architecture",
                "Payment integration",
                "Image and media management",
                "Deployment and troubleshooting",
              ]}
            />


            <ProjectCard
              title="Nuvistine Global"
              category="Digital Marketplace"
              description="A marketplace concept focused on creating a modern shopping experience with structured product discovery and digital commerce functionality."
              technologies="React • Next.js • Database • APIs • Cloudinary • Vercel"
              features={[
                "Product marketplace concept",
                "Modern responsive interface",
                "Product organization",
                "Database integration",
                "Deployment and testing",
              ]}
            />


            <ProjectCard
              title="Student Marketplace"
              category="Student-Focused Digital Product"
              description="A marketplace concept designed to help students buy and sell products within a simple and accessible digital environment."
              technologies="React • Next.js • Database • APIs • Vercel"
              features={[
                "Student-focused marketplace",
                "Product listings",
                "User-centered interface",
                "Responsive design",
                "Practical digital solution",
              ]}
            />

          </div>

        </div>
      </section>


      {/* How I Learn */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            How I Learn
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Learning by building.
          </h2>

          <p className="mt-6 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
            I combine structured learning with practical experimentation.
            Instead of only studying concepts, I use projects to understand
            how different technologies work together and how they can be
            used to solve real problems.
          </p>


          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">

            <GoalCard
              title="Learn"
              description="Develop strong foundations in programming, software engineering, databases, APIs, and modern development tools."
            />

            <GoalCard
              title="Build"
              description="Turn what I learn into practical projects that demonstrate technical skills and product thinking."
            />

            <GoalCard
              title="Grow"
              description="Continuously improve through feedback, new technologies, certifications, and hands-on experience."
            />

          </div>

        </div>
      </section>


      {/* Experience */}
      <section id="experience" className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Experience
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Professional experience.
            </h2>

          </div>


          <div className="bg-white rounded-3xl border border-[#E9D8A6]/50 p-8 md:p-10">

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

              <div>

                <h3 className="text-2xl font-semibold">
                  Customer Service & Administrative Support
                </h3>

                <p className="mt-2 text-[#9A7B2F]">
                  D.E.R Limited — Lagos
                </p>

              </div>

              <p className="text-sm text-[#777]">
                Professional Experience
              </p>

            </div>


            <div className="mt-7 text-[#6F6B63] leading-relaxed">

              <p>
                My professional experience has involved customer
                communication, administrative support, information
                management, scheduling, document preparation, and
                problem-solving.
              </p>

              <p className="mt-4">
                These responsibilities have strengthened my ability to
                understand problems, communicate with different people,
                manage multiple tasks, and work carefully with information.
              </p>

              <p className="mt-4">
                I am now combining these transferable skills with software
                engineering and digital product development.
              </p>

            </div>


            <div className="mt-7 flex flex-wrap gap-3">

              {[
                "Customer Service",
                "Administrative Support",
                "Communication",
                "Scheduling",
                "Data Management",
                "Problem Solving",
                "Organization",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-[#F8F4EF] text-sm text-[#555]"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* Direction / Goals */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            Direction
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Where I am going.
          </h2>

          <p className="mt-6 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
            My goal is to grow from an aspiring software engineer into a
            well-rounded developer capable of contributing to meaningful
            digital products and building solutions that people can use.
          </p>


          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">

            <GoalCard
              title="Learn"
              description="Strengthen my understanding of software engineering and modern development practices."
            />

            <GoalCard
              title="Build"
              description="Create practical digital products that demonstrate both technical ability and problem-solving."
            />

            <GoalCard
              title="Grow"
              description="Gain professional experience, collaborate with other developers, and continue developing my technical career."
            />

          </div>

        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Let's connect.
          </h2>

          <p className="mt-6 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
            I am open to opportunities to learn, collaborate, contribute,
            and grow within the technology and digital product space.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-4">

  <a
    href="mailto:bellarosennaji@gmail.com"
    className="bg-[#2C2C2C] text-white px-7 py-3 rounded-full hover:opacity-90 transition"
  >
    📧 Email Me
  </a>

  <a
    href="https://www.linkedin.com/in/christine-martin-a59691344/"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-[#2C2C2C] px-7 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
  >
    LinkedIn
  </a>

</div>

        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-10">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Christine Martin. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Aspiring Software Engineer & Digital Product Builder
          </p>

        </div>

      </footer>

    </div>
  );
}


/* -------------------------------- */
/* Skill Card                       */
/* -------------------------------- */

function SkillCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E9D8A6]/50 p-7 hover:shadow-lg transition">

      <h3 className="text-xl font-semibold mb-5">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">

        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-2 rounded-full bg-[#F8F4EF] text-sm text-[#555]"
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  );
}


/* -------------------------------- */
/* Project Card                     */
/* -------------------------------- */

function ProjectCard({
  title,
  category,
  description,
  technologies,
  features,
}) {
  return (
    <article className="bg-white rounded-3xl border border-[#E9D8A6]/50 p-8 md:p-10 hover:shadow-lg transition">

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

        <div>

          <p className="uppercase tracking-[0.15em] text-xs text-[#9A7B2F] mb-2">
            {category}
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold">
            {title}
          </h3>

        </div>

      </div>


      <p className="mt-5 text-[#6F6B63] leading-relaxed max-w-3xl">
        {description}
      </p>


      <div className="mt-6">

        <p className="text-sm font-medium mb-3">
          Technologies
        </p>

        <p className="text-sm text-[#777]">
          {technologies}
        </p>

      </div>


      <div className="mt-7">

        <p className="text-sm font-medium mb-3">
          Key Features
        </p>

        <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#6F6B63]">

          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="text-[#9A7B2F]">•</span>
              <span>{feature}</span>
            </li>
          ))}

        </ul>

      </div>

    </article>
  );
}


/* -------------------------------- */
/* Goal Card                        */
/* -------------------------------- */

function GoalCard({ title, description }) {
  return (
    <div className="bg-[#F8F4EF] rounded-2xl border border-[#E9D8A6]/40 p-7">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-[#6F6B63] leading-relaxed text-sm">
        {description}
      </p>

    </div>
  );
}


/* -------------------------------- */
/* React Router                     */
/* -------------------------------- */

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<ChristineMartinHome />}
        />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

      </Routes>

    </BrowserRouter>
  );
}