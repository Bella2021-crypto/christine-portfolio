// @ts-nocheck
import calmworkspace from "./calm-workspace.jpg";

export default function ChristineMartinPortfolio() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#2C2C2C] font-sans">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F8F4EF]/95 backdrop-blur border-b border-[#E9D8A6]/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg">Christine Martin</div>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-[#9A7B2F]">About</a>
            <a href="#journey" className="hover:text-[#9A7B2F]">Journey</a>
            <a href="#skills" className="hover:text-[#9A7B2F]">Skills</a>
            <a href="#projects" className="hover:text-[#9A7B2F]">Projects</a>
            <a href="#goals" className="hover:text-[#9A7B2F]">Goals</a>
            <a href="#contact" className="hover:text-[#9A7B2F]">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#9A7B2F] mb-5">
              Aspiring Software Engineer
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Christine
              <span className="block">Martin</span>
            </h1>

            <p className="text-xl text-[#7A766B] leading-relaxed mb-8">
              Digital product builder passionate about software engineering,
              web development, and creating practical technology solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full hover:opacity-90"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="border border-[#2C2C2C] px-6 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={calmworkspace}
              alt="Christine's workspace"
              className="rounded-3xl shadow-lg object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            From solving problems to building solutions.
          </h2>

          <p className="text-lg leading-relaxed text-[#555]">
            I am a self-driven technology learner transitioning from customer
            service and administrative support into software engineering.
            My professional experience has taught me how to communicate
            effectively, understand people's needs, solve problems, stay
            organized, and work under pressure.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#555]">
            I am now applying those skills to technology by learning software
            development and building digital products. I enjoy taking an idea
            from concept to something functional that people can actually use.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#555]">
            My goal is to become a professional software engineer capable of
            building reliable, accessible, and impactful digital solutions.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              My Tech Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Learning by building.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            
            <JourneyCard
              number="01"
              title="Discover"
              text="Developed an interest in technology and started exploring how digital products are created."
            />

            <JourneyCard
              number="02"
              title="Learn"
              text="Started developing foundational skills in web development and programming."
            />

            <JourneyCard
              number="03"
              title="Build"
              text="Began creating practical digital projects and experimenting with modern web technologies."
            />

            <JourneyCard
              number="04"
              title="Grow"
              text="Working toward stronger software engineering skills through continued learning and hands-on projects."
            />

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Technical Skills
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Technologies I'm learning and using.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <SkillCard
              title="Frontend"
              skills="HTML • CSS • JavaScript • React • Next.js"
            />

            <SkillCard
              title="Backend"
              skills="APIs • Databases • Prisma • Server-side development"
            />

            <SkillCard
              title="Tools & Platforms"
              skills="Git • GitHub • Vercel • Cloudinary • VS Code"
            />

            <SkillCard
              title="Payments"
              skills="Paystack • Flutterwave"
            />

            <SkillCard
              title="Product Development"
              skills="Marketplace concepts • E-commerce • Digital products"
            />

            <SkillCard
              title="Professional Skills"
              skills="Problem solving • Communication • Organization • Customer empathy"
            />

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
              Featured Projects
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Things I've been building.
            </h2>

            <p className="mt-4 text-[#7A766B] max-w-2xl mx-auto">
              My projects are part of my journey toward becoming a stronger
              software engineer. Each project gives me an opportunity to learn,
              experiment, solve problems, and improve.
            </p>
          </div>

          {/* Gemora */}
          <ProjectCard
            title="Gemora"
            subtitle="Full-Stack Marketplace Concept"
            description="A luxury-focused online marketplace concept designed to connect buyers and sellers through a modern e-commerce experience."
            technologies="Next.js • React • Prisma • Neon Database • Paystack • Flutterwave • Cloudinary • Vercel"
            features={[
              "Marketplace and product experience",
              "Database-driven application architecture",
              "Payment integration exploration",
              "Image and media management",
              "Deployment and troubleshooting",
            ]}
          />

          {/* Nuvistine */}
          <ProjectCard
            title="Nuvistine Global"
            subtitle="Fashion Marketplace Concept"
            description="A fashion marketplace concept focused on connecting customers with clothing and fashion products through a modern digital shopping experience."
            technologies="Web Development • E-commerce • Product Design"
            features={[
              "Marketplace concept development",
              "Fashion-focused product experience",
              "Digital commerce exploration",
              "Brand and product positioning",
            ]}
          />

        </div>
      </section>

      {/* Why Software Engineering */}
      <section className="bg-[#2C2C2C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#E9D8A6] mb-3">
            Why Software Engineering?
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            I want to turn ideas into solutions.
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            Software engineering interests me because it gives me the ability
            to turn ideas and problems into solutions that people can actually
            use. I don't want to only understand how technology works. I want
            to learn how to design, build, test, and deploy useful products.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            I have already started that journey independently. My next step is
            to strengthen my foundations, learn professional development
            practices, work with experienced mentors, and become capable of
            building production-ready applications.
          </p>

        </div>
      </section>

      {/* Career Goals */}
      <section id="goals" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            Where I'm Going
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Building a sustainable career in technology.
          </h2>

          <p className="text-lg leading-relaxed text-[#555]">
            My goal is to become an employable software engineer, contribute
            to meaningful digital products, and eventually build technology
            solutions of my own.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">

            <GoalCard
              title="Short Term"
              text="Strengthen my software engineering foundations and build more real-world projects."
            />

            <GoalCard
              title="Medium Term"
              text="Gain professional experience working on production software and collaborate with other developers."
            />

            <GoalCard
              title="Long Term"
              text="Build technology products that solve practical problems and create opportunities for others."
            />

          </div>
        </div>
      </section>

      {/* Scholarship / Opportunity */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-3">
            The Next Step
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Why access to better technology matters.
          </h2>

          <p className="text-lg leading-relaxed text-[#555]">
            Developing software requires more than motivation. It requires
            access to reliable tools that can support modern development
            environments, databases, browsers, design tools, APIs, and
            development workflows.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#555]">
            Access to a capable development computer would allow me to practise
            more consistently, work on more demanding projects, improve my
            portfolio, and accelerate my transition into a professional
            software engineering career.
          </p>

          <p className="mt-6 text-lg font-medium text-[#2C2C2C]">
            I see technology access not simply as a personal benefit, but as a
            tool that can help me build a sustainable career.
          </p>

        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="text-center py-16 border-t border-[#E9D8A6]/40"
      >
        <p className="uppercase tracking-[0.2em] text-sm text-[#9A7B2F] mb-4">
          Let's Connect
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Interested in what I'm building?
        </h2>

        <p className="mb-6">
          📧{" "}
          <a
            href="mailto:bellarosennaji@gmail.com"
            className="underline hover:text-[#9A7B2F]"
          >
            bellarosennaji@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/christinemartin"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#9A7B2F]"
          >
            LinkedIn
          </a>

          <a
            href="#projects"
            className="underline hover:text-[#9A7B2F]"
          >
            Projects
          </a>
        </div>

        <p className="mt-10 text-sm text-[#7A766B]">
          © {new Date().getFullYear()} Christine Martin
        </p>
      </footer>
    </div>
  );
}


/* -------------------------------- */
/* Reusable Components */
/* -------------------------------- */

function JourneyCard({ number, title, text }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="text-[#9A7B2F] font-semibold text-sm mb-4">
        {number}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-[#666] leading-relaxed">
        {text}
      </p>
    </div>
  );
}


function SkillCard({ title, skills }) {
  return (
    <div className="border border-[#E9D8A6]/50 rounded-2xl p-6">
      <h3 className="font-semibold text-xl mb-3">
        {title}
      </h3>

      <p className="text-[#666] leading-relaxed">
        {skills}
      </p>
    </div>
  );
}


function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  features,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 mb-8">

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <p className="uppercase tracking-[0.15em] text-xs text-[#9A7B2F] mb-3">
            {subtitle}
          </p>

          <h3 className="text-3xl font-semibold mb-4">
            {title}
          </h3>

          <p className="text-[#555] leading-relaxed mb-6">
            {description}
          </p>

          <div className="bg-[#F8F4EF] rounded-xl p-4">
            <p className="text-sm font-medium">
              Technologies
            </p>

            <p className="text-sm text-[#666] mt-2">
              {technologies}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            What I worked on
          </h4>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex gap-3 text-[#555]"
              >
                <span className="text-[#9A7B2F]">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}


function GoalCard({ title, text }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-[#666] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
