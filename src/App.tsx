// @ts-nocheck
import calmworkspace from "./calm-workspace.jpg";

export default function ChristineMartinPortfolio() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#2C2C2C] font-sans">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F4EF]/95 backdrop-blur border-b border-[#E9D8A6]/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <a href="#" className="font-semibold text-lg">
            Christine Martin
          </a>

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

            <a href="#experience" className="hover:text-[#9A7B2F] transition">
              Experience
            </a>

            <a href="#contact" className="hover:text-[#9A7B2F] transition">
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-24 md:py-32">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>

            <p className="uppercase tracking-[0.25em] text-sm text-[#9A7B2F] mb-5">
              Software Engineering • Digital Products
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Christine
              <span className="block">Martin</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#6F6B63] leading-relaxed max-w-xl mb-8">
              Aspiring Software Engineer and digital product builder
              passionate about creating useful and thoughtful technology.
            </p>

            <p className="text-[#666] leading-relaxed max-w-xl mb-9">
              I'm developing my skills in software development while exploring
              how technology can be used to solve practical problems and create
              better digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
              >
                Explore My Projects
              </a>

              <a
                href="#contact"
                className="border border-[#2C2C2C] px-6 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
              >
                Get In Touch
              </a>

            </div>

          </div>


          <div className="flex justify-center md:justify-end">

            <div className="relative">

              <div className="absolute -inset-3 border border-[#E9D8A6] rounded-[2rem] rotate-3"></div>

              <img
                src={calmworkspace}
                alt="Christine's workspace"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-[2rem] shadow-lg"
              />

            </div>

          </div>

        </div>

      </header>


      {/* About Section */}
      <section id="about" className="bg-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            A professional background with a growing focus on technology.
          </h2>

          <p className="text-lg leading-relaxed text-[#555]">
            I'm Christine, a customer service and administrative professional
            developing my skills in software engineering and digital product
            development.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#555]">
            My professional experience has taught me how to understand people's
            needs, communicate effectively, solve problems, manage information,
            and stay organized in fast-moving environments.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#555]">
            I'm now applying those skills to technology. I enjoy learning how
            digital products work, experimenting with new technologies, and
            turning ideas into practical solutions that people can use.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#555]">
            My long-term goal is to grow into a skilled software engineer and
            contribute to products that make everyday experiences simpler,
            more useful, and more accessible.
          </p>

        </div>

      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Skills & Technologies
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Tools I'm learning and working with.
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <SkillCard
              title="Frontend Development"
              description="Building responsive interfaces and exploring modern web development."
              skills="HTML • CSS • JavaScript • React • Next.js"
            />

            <SkillCard
              title="Backend Development"
              description="Learning how applications communicate with servers, databases, and APIs."
              skills="APIs • Prisma • Server-side development • Databases"
            />

            <SkillCard
              title="Development Tools"
              description="Using modern tools to develop, manage, and deploy projects."
              skills="Git • GitHub • VS Code • Vercel"
            />

            <SkillCard
              title="Database & Media"
              description="Working with application data and digital media management."
              skills="Neon • Prisma • Cloudinary"
            />

            <SkillCard
              title="Payments & Integrations"
              description="Exploring how digital products connect with external services."
              skills="Paystack • Flutterwave • APIs"
            />

            <SkillCard
              title="Professional Skills"
              description="Skills developed through professional experience and applied to technology."
              skills="Problem Solving • Communication • Organization • Customer Empathy"
            />

          </div>

        </div>

      </section>


      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Selected Projects
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Things I've been building.
            </h2>

            <p className="mt-5 text-[#6F6B63] max-w-2xl mx-auto leading-relaxed">
              These projects reflect my interest in software development,
              digital products, e-commerce, and creating useful online
              experiences.
            </p>

          </div>


          {/* Gemora */}
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


          {/* Nuvistine */}
          <ProjectCard
            title="Nuvistine Global"
            category="Fashion Marketplace"
            description="A fashion marketplace concept focused on bringing clothing and related fashion products into a modern digital shopping experience."
            technologies="Web Development • E-commerce • Product Design"
            features={[
              "Fashion marketplace concept",
              "Product and shopping experience",
              "Brand development",
              "Digital commerce exploration",
            ]}
          />


          {/* Student Marketplace */}
          <ProjectCard
            title="Student Marketplace"
            category="Digital Product Concept"
            description="A marketplace concept designed around the needs of students, exploring how students could buy, sell, and discover useful products within a digital community."
            technologies="Product Development • Web Development • Marketplace Design"
            features={[
              "Identified a specific user community",
              "Explored marketplace functionality",
              "Focused on practical user needs",
              "Developed the concept around accessibility and usability",
            ]}
          />

        </div>

      </section>


      {/* Project Philosophy */}
      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            How I Learn
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Learning by building.
          </h2>

          <p className="text-lg leading-relaxed text-[#555]">
            I learn best when I can apply new concepts to something practical.
            Instead of only studying technology theoretically, I enjoy taking
            an idea and exploring how it could become a functional product.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#555]">
            Each project gives me an opportunity to experiment, encounter
            problems, research solutions, and understand how different parts
            of a digital product work together.
          </p>

        </div>

      </section>


      {/* Experience */}
      <section id="experience" className="bg-white py-20">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Experience
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Where technology meets professional experience.
            </h2>

          </div>


          <div className="border-l-2 border-[#E9D8A6] pl-8">

            <div className="mb-12">

              <p className="text-sm text-[#9A7B2F] font-medium mb-2">
                Customer Service & Administrative Support
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Professional Experience
              </h3>

              <p className="text-[#555] leading-relaxed">
                My professional experience has involved customer
                communication, administrative coordination, scheduling,
                document management, data entry, and supporting day-to-day
                business operations.
              </p>

              <p className="mt-4 text-[#555] leading-relaxed">
                These experiences have strengthened my ability to understand
                users, identify problems, communicate clearly, and create
                organized processes — skills I now bring into my technology
                journey.
              </p>

            </div>


            <div>

              <p className="text-sm text-[#9A7B2F] font-medium mb-2">
                Current Focus
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Software Engineering & Digital Products
              </h3>

              <p className="text-[#555] leading-relaxed">
                I am currently developing my technical skills through
                independent learning and hands-on projects, with a particular
                interest in web development, full-stack applications,
                marketplaces, and digital products.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Goals */}
      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            Direction
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Building toward a career in software engineering.
          </h2>

          <p className="text-lg leading-relaxed text-[#555]">
            I'm focused on strengthening my foundations in software
            development, expanding my full-stack capabilities, and gaining
            experience building real-world applications.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">

            <GoalCard
              title="Learn"
              text="Continue developing strong foundations in programming, web development, databases, and software engineering."
            />

            <GoalCard
              title="Build"
              text="Create practical projects that challenge me to apply what I learn and develop better problem-solving skills."
            />

            <GoalCard
              title="Grow"
              text="Build professional experience and contribute to meaningful digital products and technology solutions."
            />

          </div>

        </div>

      </section>


      {/* Contact */}
      <footer
        id="contact"
        className="bg-[#2C2C2C] text-white py-16"
      >

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#E9D8A6] mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Let's connect.
          </h2>

          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            I'm always interested in connecting with people working on
            interesting ideas, digital products, and technology.
          </p>


          <div className="flex flex-col md:flex-row justify-center items-center gap-5">

            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bellarosennaji@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            📧 Email Me
            </a>
            
            <a
              href=" https://www.linkedin.com/in/christine-martin-a59691344/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-6 py-3 rounded-full hover:bg-white hover:text-[#2C2C2C] transition"
            >
              LinkedIn
            </a>

          </div>


          <p className="mt-12 text-sm text-gray-500">
            © {new Date().getFullYear()} Christine Martin. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ================================= */
/* Reusable Components */
/* ================================= */

function SkillCard({ title, description, skills }) {
  return (
    <div className="bg-[#F8F4EF] rounded-2xl p-7 border border-[#E9D8A6]/30">

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-sm text-[#777] leading-relaxed mb-5">
        {description}
      </p>

      <p className="text-sm font-medium text-[#4F4B45]">
        {skills}
      </p>

    </div>
  );
}


function ProjectCard({
  title,
  category,
  description,
  technologies,
  features,
}) {
  return (
    <article className="border border-[#E9D8A6]/40 rounded-3xl p-8 md:p-10 mb-8 hover:shadow-md transition">

      <div className="grid md:grid-cols-2 gap-10">

        <div>

          <p className="uppercase tracking-[0.15em] text-xs text-[#9A7B2F] mb-3">
            {category}
          </p>

          <h3 className="text-3xl font-semibold mb-5">
            {title}
          </h3>

          <p className="text-[#555] leading-relaxed mb-6">
            {description}
          </p>

          <div className="bg-[#F8F4EF] rounded-xl p-5">

            <p className="text-sm font-semibold mb-2">
              Technologies
            </p>

            <p className="text-sm text-[#666] leading-relaxed">
              {technologies}
            </p>

          </div>

        </div>


        <div>

          <h4 className="font-semibold text-lg mb-5">
            Project Highlights
          </h4>

          <ul className="space-y-4">

            {features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-3 text-[#555]"
              >
                <span className="text-[#9A7B2F] mt-1">
                  ✦
                </span>

                <span>
                  {feature}
                </span>

              </li>
            ))}

          </ul>

        </div>

      </div>

    </article>
  );
}


function GoalCard({ title, text }) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#E9D8A6]/30">

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-[#666] leading-relaxed">
        {text}
      </p>

    </div>
  );
}
