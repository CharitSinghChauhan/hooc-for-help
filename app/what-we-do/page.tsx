import Image from "next/image";
import {
  MapPin,
  Users,
  BookOpen,
  School,
  GraduationCap,
} from "lucide-react";
import Awards from "@/components/awards";

const statistics = [
  {
    value: "46",
    suffix: "million",
    description: "children, between 6-18 years of age, do not go to school",
    source: "Estimated based on Census 2011 projection 2018 and U-DISE 2016-17",
  },
  {
    value: "33",
    suffix: "million",
    description: "child labourers go to work instead of school",
    source: "Census 2011",
  },
  {
    value: "3%",
    suffix: "",
    description:
      "of schools in India provide complete school education from Class 1 to 12",
    source: "",
  },
];

const projects = [
  {
    id: 1,
    title: "Project VSS",
    location: "Madhya Pradesh",
    goal: "$62,193",
    raised: "$0",
    image: "",
  },
  {
    id: 2,
    title: "Project SWATI",
    location: "Odisha",
    goal: "$31,274",
    raised: "$0",
    image: "",
  },
  {
    id: 3,
    title: "Project SIJIKS",
    location: "Rajasthan",
    goal: "$55,852",
    raised: "$0",
    image: "",
  },
];

const programs = [
  {
    title: "Enrolling Children In Schools",
    icon: <School className="w-10 h-10 text-[var(--primary)]" />,
  },
  {
    title: "Re-Enrolling Out-Of-School Children",
    icon: <Users className="w-10 h-10 text-[var(--primary)]" />,
  },
  {
    title: "Linking To Government Programs",
    icon: <BookOpen className="w-10 h-10 text-[var(--primary)]" />,
  },
  {
    title: "Conducting Support Classes",
    icon: <GraduationCap className="w-10 h-10 text-[var(--primary)]" />,
  },
];

const impacts = [
  { value: "342,558", label: "Children 6-18 years in schools" },
  { value: "212,079", label: "Children mainstreamed into schools" },
  {
    value: "40,479",
    label: "Children provided education support (non-formal)",
  },
  {
    value: "5,311",
    label:
      "Rescued children (labor or trafficked) mainstreamed in formal education",
  },
  { value: "50,832", label: "Children in the Children's Collectives" },
];

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Child Education: Unlocking Every <br />
            <span className="text-[var(--primary)] italic font-medium">
              Child&apos;s Potential
            </span>
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Education is a fundamental right that empowers children to reach
            their full potential. At CRY America, we believe that every child,
            regardless of background, deserves access to quality education. CRY
            America&apos;s projects focusing on children&apos;s education work
            to ensure that children from marginalized communities are enrolled
            in schools, and complete their education.
          </p>

          <div className="relative w-full aspect-[21/9] rounded-[var(--radius)] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1481437156560-3205f6a5553a?q=80&w=1200&auto=format&fit=crop"
              alt="Group of smiling children"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Statistics About{" "}
            <span className="text-[var(--primary)] italic font-semibold">
              Child Education
            </span>{" "}
            in India
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            There has been significant progress in facilitating children&apos;s
            access to education over the last decade, yet the journey is far
            from what we aim to achieve. The statistics below highlight the need
            to provide children with education, which requires your urgent
            support.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-[var(--radius)] shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black text-[#333]">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-xl font-bold text-[var(--primary)] uppercase">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 font-medium mb-4">
                  {stat.description}
                </p>
                {stat.source && (
                  <p className="text-[10px] text-gray-400 mt-auto leading-tight italic">
                    {stat.source}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">
                Our Projects That Work to Protect <br />
                <span className="text-[var(--primary)] italic font-semibold">
                  Children&apos;s Right to Education
                </span>
              </h2>
              <p className="text-gray-600">
                Every child deserves the opportunity to learn, grow, and achieve
                their dreams. CRY America&apos;s projects focus on breaking
                barriers to education and empowering children with knowledge.
                With your valuable support, we undertake the following
                initiatives to safeguard every child&apos;s right to education.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-[var(--radius)] border border-gray-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {project.location}
                  </p>
                  <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">
                        Funding Goal
                      </p>
                      <p className="font-bold">{project.goal}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold text-gray-400">
                        Funds Raised
                      </p>
                      <p className="font-bold">{project.raised}</p>
                    </div>
                  </div>
                  <button className="w-full bg-[#1a1a1a] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[var(--primary)] hover:text-black transition-colors rounded-[var(--radius)]">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Learn More About Our <br />
            <span className="text-[var(--primary)] italic font-semibold">
              Child Education Programs
            </span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-16">
            CRY America Supported Projects are committed to building a brighter
            future for children by making education accessible, regardless of
            their socio-economic background. Our projects drive sustainable
            change by educating parents, teachers, schools, and communities to
            address the root causes of educational inequalities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-[var(--radius)] shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="mb-6 bg-[var(--primary)]/10 p-4 rounded-full">
                  {prog.icon}
                </div>
                <h4 className="font-bold text-sm leading-snug">{prog.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Impact in Empowering{" "}
            <span className="text-[var(--primary)] italic font-semibold">
              Children Through Education
            </span>
          </h2>

          <div className="relative">
            {/* Top Row Impacts */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {impacts.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--primary)] p-8 rounded-[var(--radius)] text-center shadow-lg transform hover:-translate-y-1 transition-transform"
                >
                  <p className="text-3xl font-black mb-1">{item.value}</p>
                  <p className="text-xs font-bold uppercase tracking-tight leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Illustration in Middle */}
            <div className="flex justify-center mb-12">
              <div className="relative w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center border-4 border-[var(--primary)] overflow-hidden">
                <img
                  src=""
                  alt="Impact Illustration"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Row Impacts */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {impacts.slice(3).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--primary)] p-8 rounded-[var(--radius)] text-center shadow-lg transform hover:-translate-y-1 transition-transform"
                >
                  <p className="text-3xl font-black mb-1">{item.value}</p>
                  <p className="text-xs font-bold uppercase tracking-tight leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate Page Component Placeholder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="max-w-md">
              <h2 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
                Donate To
              </h2>
              <h3 className="text-4xl font-bold mb-6">
                Make a <br />
                <span className="text-[var(--primary)] italic font-semibold">
                  Difference
                </span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                There are many ways you can contribute to a child&apos;s
                education and ensure they have a safe and joyful childhood.
                Whether as a one-time donor or a monthly supporter, your
                contribution can give children the gift of a brighter future.
              </p>
            </div>

            <div className="flex-1 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-[var(--radius)] overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src=""
                  alt="Help Digital"
                  width={400}
                  height={200}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h4 className="text-center font-bold text-xs mb-4">
                    Help establish Digital Support Centers
                  </h4>
                  <button className="bg-[var(--primary)] px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    Donate Now
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-[var(--radius)] overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src=""
                  alt="Re-enroll"
                  width={400}
                  height={200}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h4 className="text-center font-bold text-xs mb-4">
                    Re-enroll dropout children
                  </h4>
                  <button className="bg-[var(--primary)] px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    Donate Monthly
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-[var(--radius)] overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src=""
                  alt="Protect"
                  width={400}
                  height={200}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4 flex flex-col items-center">
                  <h4 className="text-center font-bold text-xs mb-4">
                    Protect from early marriage and child labor
                  </h4>
                  <button className="bg-[var(--primary)] px-4 py-2 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    Support A Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Hope */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Stories{" "}
              <span className="text-[var(--primary)] italic font-semibold">
                of Hope
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6 italic text-gray-800">
                Leiyarin&apos;s path towards education
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Like many other girls affected by the ethnic unrest in
                  Manipur, Leiyarin&apos;s life turned upside down. With schools
                  shut and families displaced, she lost touch with her books and
                  spent her days with her parents in fear at a relief camp.
                </p>
                <p>
                  When CRY America&apos;s Project Needs team identified her as
                  high-risk during a vulnerability mapping exercise, they
                  stepped in immediately. They encouraged Leiyarin to join the
                  CRY-supported learning center.
                </p>
                <p>
                  But returning to studies wasn&apos;t easy. The ongoing
                  conflict had deeply impacted her mental well-being. She had
                  lost her confidence and showed little interest in learning, or
                  even speaking with others.
                </p>
                <p>
                  To bring back her confidence, the team engaged her in group
                  activities, storytelling sessions, and peer discussions.
                  Slowly, she opened up. She shared that she needed support in
                  specific subjects. The team responded by arranging
                  subject-wise guidance sessions and giving her notebooks,
                  books, and pencils, simple things that brought back her joy in
                  learning.
                </p>
                <p>
                  To make sure nothing held her back, they also counseled her
                  hesitant parents and encouraged them to send her back to
                  school once it reopened.
                </p>
                <p>
                  The school finally reopened, Leiyarin excelled in her 3rd
                  grade with 1st rank, and has been promoted to 4th grade.
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/5 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src=""
                alt="Story of Hope"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-[10px] rounded-full backdrop-blur-sm italic">
                Image used for representational purposes only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--primary)]/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Testimonials from <br />
            <span className="text-[var(--primary)] italic font-semibold">
              Beneficiaries, Educators, And Parents
            </span>
          </h2>

          <div className="mt-16">
            <p className="text-lg italic text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              &quot;What makes CRY America special is the drive and the
              genuineness of the volunteer team, year after year. By adopting
              projects themselves, some of these volunteers have put their money
              where their mouth is. Thank you CRY America for making giving so
              easy and impactful.&quot;
            </p>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl mb-1">Usha Rao</p>
              <p className="text-sm text-[var(--primary)] font-semibold uppercase tracking-wider">
                CRY America Donor
              </p>
              <div className="flex gap-2 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === 1 ? "bg-[var(--primary)]" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Frequently Asked{" "}
              <span className="text-[var(--primary)] italic font-semibold">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-6">
              <h4 className="text-lg font-bold mb-3">
                Why is supporting child education important?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Supporting child education is important because it empowers
                children to break the cycle of poverty and uplift their
                communities. Education provides children with the knowledge,
                skills, and confidence to create a better future for themselves
                and those around them. It promotes equality, reduces child labor
                and early marriage, and ensures long-term social and economic
                growth. Every child deserves the opportunity to learn and
                fulfill their dreams, regardless of their background or
                circumstances.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h4 className="text-lg font-bold mb-3">
                How can I contribute to child education?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can support children&apos;s education by becoming a monthly
                or one-time donor for CRY America. Your generous contribution
                will help children enroll in school, re-enroll those who have
                dropped out, and protect them from the harmful impacts of child
                labor and early marriage. Together, we can empower children
                through education and create a brighter future for all.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h4 className="text-lg font-bold mb-3">
                How is my donation used to support education?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Donations help provide essential resources such as study
                materials, support classes, and enrollment efforts for children.
                CRY America&apos;s projects also focus on raising awareness
                about the importance of education and the ill effects of child
                labor and child marriage, creating safe learning environments
                through community outreach and children&apos;s collectives.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h4 className="text-lg font-bold mb-3">
                Are donations for child education tax-deductible?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                CRY America is a 501(c)3 tax-exempt organization and all
                donations made to CRY America are tax-deductible. Please note
                that these tax exemption receipts apply only to U.S. residents
                and cannot be used for tax deductions outside the United States.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h4 className="text-lg font-bold mb-3">
                Can I support education for a specific group, like girls or
                children with disabilities?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                No, donations cannot be directed towards supporting the
                education of a specific individual or group. CRY America&apos;s
                projects work to empower children in the community by providing
                much needed opportunities that address barriers such as poverty,
                lack of access to schools, health services, child labor, and
                early marriages, ultimately shaping a brighter future for
                children.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Awards />
    </main>
  );
}
