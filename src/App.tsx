
 // @ts-nocheck

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import calmworkspace from "./calm-workspace.jpg";
import Certifications from "./Certifications";


const cvDocuments = [
  {
    title: "Administrative & Project Support",
    description:
      "A CV focused on administrative support, coordination, scheduling, and office operations.",
    file: "/cvs/Christine-Martin-Administrative-CV.pdf",
  },
  {
    title: "Customer Support & Virtual Assistant",
    description:
      "A CV focused on customer communication, handling enquiries, records, and remote administrative support.",
    file: "/cvs/Christine-Martin-Customer-Support-CV.pdf",
  },
  {
    title: "Software Developer",
    description:
      "A CV focused on computer science studies, technical skills, and software projects.",
    file: "/cvs/Christine-Martin-Software-Developer-CV.pdf",
  },
];

function ChristineMartinHome() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#2C2C2C] font-sans">
     
     {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F4EF]/95 backdrop-blur border-b border-[#E9D8A6]/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="font-semibold text-lg hover:text-[#9A7B2F] transition"
          >
            Christine Martin
          </Link>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#555]">
            <a href="#about" className="hover:text-[#9A7B2F] transition">
              About
            </a>
            <a href="#skills" className="hover:text-[#9A7B2F] transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#9A7B2F] transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#9A7B2F] transition">
              Experience
            </a>
            <a href="#my-cvs" className="hover:text-[#9A7B2F] transition">
              My CVs
            </a>
            <Link
              to="/certifications"
              className="hover:text-[#9A7B2F] transition"
            >
              Certifications
            </Link>
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
      <section id="about" className="bg-white py-20 scroll-mt-24">
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
      <section id="skills" className="py-20 scroll-mt-24">
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

      {/* Projects */}
      <section id="projects" className="py-20 bg-white scroll-mt-24">
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
              description="An e-commerce project focused on creating a modern shopping experience with product discovery and digital commerce functionality."
              technologies="React • Next.js • TypeScript • Prisma • Neon • Paystack • Vercel"
              features={[
                "Product discovery and organization",
                "Responsive shopping interface",
                "Customer registration and login",
                "Cart and order functionality",
                "Database integration and deployment",
              ]}
            />

            <ProjectCard
              title="Student Marketplace"
              category="Student-Focused Digital Product"
              description="A marketplace concept designed to help students buy and sell products within a simple and accessible digital environment."
              technologies="React • Next.js • Database • APIs • Vercel"
              features={[
                "Student-focused marketplace concept",
                "Product listing experience",
                "User-centered interface",
                "Responsive design",
                "Practical digital solution",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Experience
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Professional experience.
            </h2>

            <p className="mt-5 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
              Experience in customer communication, administration, and
              operational support, bringing transferable skills into
              software development.
            </p>
          </div>

          <article className="bg-white rounded-3xl border border-[#E9D8A6]/50 p-8 md:p-10 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Customer Service & Administrative Support
                </h3>

                <p className="mt-2 text-[#9A7B2F]">
                  D.E.R Limited — Lagos
                </p>
              </div>

              <span className="text-sm text-[#777]">
                Professional Experience
              </span>
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
          </article>
        </div>
      </section>

      {/* My CVs */}
      
<section
  id="cvs"
  className="py-20 px-6"
  style={{ backgroundColor: "#F8F4EF", color: "#2C2C2C" }}
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <p
        className="text-sm uppercase tracking-widest mb-3"
        style={{ color: "#9A7B2F" }}
      >
        My Resume
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        My CVs
      </h2>

      <p className="max-w-2xl mx-auto">
        Explore or download the CV tailored to the role you are hiring for.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cvDocuments.map((cv) => (
        <article
          key={cv.file}
          className="rounded-2xl border p-6 flex flex-col"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#E9D8A6",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
            style={{ backgroundColor: "#F8F4EF", color: "#9A7B2F" }}
          >
            <span className="font-semibold">PDF</span>
          </div>

          <h3 className="text-xl font-semibold mb-3">
            {cv.title}
          </h3>

          <p className="text-sm leading-6 mb-6 flex-grow">
            {cv.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            <a
              href={cv.file}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-sm font-medium border"
              style={{ borderColor: "#9A7B2F", color: "#2C2C2C" }}
            >
              View CV
            </a>

            <a
              href={cv.file}
              download
              className="rounded-full px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: "#9A7B2F", color: "#FFFFFF" }}
            >
              Download PDF
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* Certifications Preview */}
      <section id="certifications-preview" className="py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            Certifications & Learning
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Growing through continuous learning.
          </h2>

          <p className="mt-5 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
            Explore my certifications and learning experiences as I
            continue developing my technical knowledge, software
            development skills, and professional capabilities.
          </p>

          <div className="mt-8">
            <Link
              to="/certifications"
              className="inline-block bg-[#2C2C2C] text-white px-7 py-3 rounded-full hover:bg-[#9A7B2F] transition"
            >
              View All Certifications →
            </Link>
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

      {/* Direction / Goals */}
      <section className="py-20">
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
              description="Create practical digital products that demonstrate technical ability and problem-solving."
            />

            <GoalCard
              title="Grow"
              description="Gain professional experience, collaborate with other developers, and continue developing my technical career."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-20 scroll-mt-24">
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
              className="bg-[#2C2C2C] text-white px-7 py-3 rounded-full hover:bg-[#9A7B2F] transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/christine-martin-a59691344/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2C2C2C] px-7 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
            >
              LinkedIn ↗
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

          <a
            href="#"
            className="inline-block mt-4 text-sm text-[#E9D8A6] hover:text-white transition"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

/* Skill Card */
function SkillCard({ title, items }) {
  return (
    <article className="bg-white rounded-2xl border border-[#E9D8A6]/50 p-7 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-5">{title}</h3>

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
    </article>
  );
}

/* Project Card */
function ProjectCard({
  title,
  category,
  description,
  technologies,
  features,
}) {
  return (
    <article className="bg-[#F8F4EF] rounded-3xl border border-[#E9D8A6]/50 p-8 md:p-10 hover:shadow-lg transition">
      <div>
        <p className="uppercase tracking-[0.15em] text-xs text-[#9A7B2F] mb-2">
          {category}
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
      </div>

      <p className="mt-5 text-[#6F6B63] leading-relaxed max-w-3xl">
        {description}
      </p>

      <div className="mt-6">
        <p className="text-sm font-medium mb-3">Technologies</p>
        <p className="text-sm text-[#777] leading-relaxed">
          {technologies}
        </p>
      </div>

      <div className="mt-7">
        <p className="text-sm font-medium mb-3">Key Features</p>

        <ul className="grid md:grid-cols-2 gap-3 text-sm text-[#6F6B63]">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="text-[#9A7B2F]" aria-hidden="true">
                •
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* Goal Card */
function GoalCard({ title, description }) {
  return (
    <article className="bg-[#F8F4EF] rounded-2xl border border-[#E9D8A6]/40 p-7">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-[#6F6B63] leading-relaxed text-sm">
        {description}
      </p>
    </article>
  );
}

/* React Router */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChristineMartinHome />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </BrowserRouter>
  );
}
