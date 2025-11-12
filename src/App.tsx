// @ts-nocheck
import calmworkspace from "./calm-workspace.jpg"; // Adjust path as needed
import notionDashboard from "./assets/notion-dashboard.png";
import organisedinbox from "./assets/organised inbox.png";
import calendarlayout from "./assets/calender-layout.png";
import supportDashboard from "./assets/support-dashboard.png";
export default function ChristineMartinPortfolio() {
  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#2C2C2C] font-sans">
      {/* Header */}
      <header className="text-center py-12 border-b border-[#E9D8A6]/40">
        <h1 className="text-4xl font-semibold text-[#2C2C2C] mb-2">
          Christine Martin’s Digital Portfolio
        </h1>
        <p className="text-[#7A766B] text-lg">
          Virtual & Administrative Assistant | Customer Service Specialist
        </p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <img
          src={calmworkspace}
          alt="Christine's workspace"
          className="mx-auto rounded-2xl shadow-md object-cover mb-8 w-40 h-40 md:w-64 md:h-64 lg:w-96 lg:h-96"
        />
        <p className="text-lg leading-relaxed">
          Hi, I’m Christine — I help teams bring structure to their workflow. I
          specialize in task organization, communication management, and client
          support that feels human. I believe that organization is the
          foundation of growth. My dual experience in high-touch customer
          support and proactive administrative management means I don’t just
          complete tasks — I design processes that anticipate needs and elevate
          the client experience.
        </p>
        <p className="mt-6 text-lg font-medium text-[#7A766B]">
          Let’s partner to give your team the structure it needs to focus on
          impact, not administrative clutter.
        </p>
        <div className="flex justify-center gap-3 mt-8">
          <span className="bg-[#E9D8A6] text-[#2C2C2C] px-4 py-2 rounded-full">
            🗂️ Admin Systems
          </span>
          <span className="bg-[#E9D8A6] text-[#2C2C2C] px-4 py-2 rounded-full">
            📅 Scheduling
          </span>
          <span className="bg-[#E9D8A6] text-[#2C2C2C] px-4 py-2 rounded-full">
            💬 Client Support
          </span>
        </div>
      </section>

      {/* Section Template */}
      <Section
        title="Task & Project Management"
        visual={notionDashboard}
        challenge="Team struggling with tracking weekly deliverables."
        action="Built a shared Notion dashboard for tasks, deadlines, and reports."
        result="Reduced missed deadlines by 70% and improved weekly updates."
        tools="Notion, Google Sheets, Gmail"
      />

      <Section
        title="Communication & Inbox Systems"
        visual={organisedinbox}
        challenge="Overflowing inbox and missed client messages."
        action="Created templated responses, labeled folders, and an email automation system."
        result="Inbox-to-response time improved from 2 days → 6 hours."
        tools="Gmail, Google Workspace"
      />

      <Section
        title="Scheduling & Workflow Coordination"
        visual={calendarlayout}
        challenge="Uncoordinated meeting times across departments."
        action="Centralized schedules using shared calendars and reminders."
        result="Increased on-time meeting attendance by 50%."
        tools="Google Calendar, Trello"
      />

      <Section
        title="Client Support & Customer Relations"
        visual={supportDashboard}
        challenge="Clients often repeated questions already answered."
        action="Designed a quick-reply guide and FAQs for the customer service team."
        result="Cut repetitive tickets by 40%, improved satisfaction score."
        tools="Google Docs, WhatsApp Business, Canva"
      />

      {/* Footer */}
      <footer className="text-center py-12 border-t border-[#E9D8A6]/40 mt-16">
        <p className="italic text-[#7A766B] mb-3">
          “Every organized system begins with someone who cares about the
          details.”
        </p>
        <p>
          📧{" "}
          <a
            href="mailto:bellarosennaji@gmail.com"
            className="underline hover:text-[#E9D8A6]"
          >
            bellarosennaji@gmail.com
          </a>{" "}
          | 🌐{" "}
          <a
            href="https://linkedin.com/in/christinemartin"
            className="underline hover:text-[#E9D8A6]"
          >
            linkedin.com/in/christinemartin
          </a>
        </p>
      </footer>
    </div>
  );
}

function Section({ title, visual, challenge, action, result, tools }) {
  return (
    <section className="max-w-5xl mx-auto py-14 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-[#2C2C2C] text-center">
        {title}
      </h2>
      <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
        <img
          src={visual}
          alt={title}
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div className="flex-1">
          <p className="mb-3">
            <strong>Challenge:</strong> {challenge}
          </p>
          <p className="mb-3">
            <strong>Action:</strong> {action}
          </p>
          <p className="mb-3">
            <strong>Result:</strong> {result}
          </p>
          <p>
            <strong>Tools:</strong> {tools}
          </p>
        </div>
      </div>
    </section>
  );
}
