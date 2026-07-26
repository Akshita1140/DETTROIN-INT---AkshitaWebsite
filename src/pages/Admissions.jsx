import React, { useState } from 'react'
import {
  Phone,
  Mail,
  Download,
  PlayCircle,
  ChevronDown,
  EditIcon,
  MapPin,
  ClipboardCheck,
  GraduationCap,
  CalendarDays,
  FileText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SafeImage, placeholder } from '@/components/SafeImage'

const STUDENT_IMG = 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80'
const STUDENT_FALLBACK = placeholder('admissions-student', 800, 900)

const journeySteps = [
  { icon: EditIcon, title: '1. Enquiry', desc: 'Submit the form to express interest.' },
  { icon: MapPin, title: '2. Campus Visit', desc: 'Tour the facilities and meet teachers.' },
  { icon: ClipboardCheck, title: '3. Assessment', desc: 'Interactive session for the student.' },
  { icon: GraduationCap, title: '4. Enrollment', desc: 'Welcome to the Excellence family.' },
]

const faqs = [
  {
    q: 'What is the student-teacher ratio?',
    a: 'We maintain an elite student-teacher ratio of 15:1 to ensure personalized attention and academic growth for every child.',
  },
  {
    q: 'Does the school provide transport?',
    a: 'Yes, we have a fleet of air-conditioned, GPS-tracked buses covering all major areas within Aligarh city.',
  },
  {
    q: 'What curriculum is followed?',
    a: 'Excellence International follows the CBSE curriculum integrated with global STEM and Liberal Arts pedagogies.',
  },
]

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', grade: 'Nursery - KG', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden hero-clip min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
        <div className="relative z-20 max-w-container-max-width mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center py-stack-lg">
          <div className="text-white space-y-6">
            <span className="inline-block bg-excellence-gold text-ink-black px-4 py-1 font-label-md text-label-md rounded-full">
              ADMISSIONS OPEN 2026-2027
            </span>
            <h1 className="font-headline-xl text-headline-xl leading-tight">
              Where Heritage Meets <br />
              <span className="text-excellence-gold">Global Excellence.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-md">
              Join a community dedicated to nurturing intellectual curiosity
              and moral character in the heart of Aligarh.
            </p>
            <div className="flex gap-4">
              <a
                className="bg-white text-aligarh-red px-8 py-3 rounded font-label-md text-label-md font-bold transition-all hover:bg-heritage-cream"
                href="#enquiry"
              >
                Begin Enquiry
              </a>
              <button className="border border-white/30 text-white px-8 py-3 rounded font-label-md text-label-md hover:bg-white/10 transition-all flex items-center gap-2">
                <PlayCircle size={20} /> Virtual Tour
              </button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 bg-excellence-gold/20 blur-3xl rounded-full" />
            <SafeImage
              alt="Excellence International Student"
              className="relative z-10 w-full h-[450px] object-cover rounded-xl border border-white/20 shadow-2xl"
              src={STUDENT_IMG}
              fallback={STUDENT_FALLBACK}
            />
          </div>
        </div>
      </section>

      {/* Dashboard layout */}
      <section className="max-w-container-max-width mx-auto px-gutter py-section-padding-desktop grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
        {/* Enquiry form */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-heritage-cream p-stack-md rounded-xl border border-stone-gray/20" id="enquiry">
            <h3 className="font-headline-md text-headline-md text-aligarh-red mb-stack-sm">Quick Enquiry</h3>
            <p className="font-body-md text-body-md text-stone-gray mb-6">
              Enter your details and our admissions officer will reach out within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-white border border-excellence-gold rounded p-6 text-center space-y-2">
                <p className="font-label-md text-label-md text-aligarh-red font-bold">Thank you!</p>
                <p className="font-body-md text-body-md text-stone-gray">
                  Your enquiry has been noted. Our team will reach out soon.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="font-label-md text-label-md block mb-1 text-on-surface-variant">
                    Student Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white border border-stone-gray/20 rounded focus:ring-2 focus:ring-excellence-gold focus:border-excellence-gold transition-all outline-none"
                    placeholder="Enter full name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md block mb-1 text-on-surface-variant">
                    Parent Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white border border-stone-gray/20 rounded focus:ring-2 focus:ring-excellence-gold focus:border-excellence-gold transition-all outline-none"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="font-label-md text-label-md block mb-1 text-on-surface-variant">
                    Grade Applying For
                  </label>
                  <select
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border border-stone-gray/20 rounded focus:ring-2 focus:ring-excellence-gold focus:border-excellence-gold transition-all outline-none"
                  >
                    <option>Nursery - KG</option>
                    <option>Class I - V</option>
                    <option>Class VI - VIII</option>
                    <option>Class IX - XII</option>
                  </select>
                </div>
                <div>
                  <label className="font-label-md text-label-md block mb-1 text-on-surface-variant">
                    Mobile Number
                  </label>
                  <div className="flex">
                    <span className="bg-stone-gray/10 px-3 py-3 border border-r-0 border-stone-gray/20 rounded-l text-stone-gray">
                      +91
                    </span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white border border-stone-gray/20 rounded-r focus:ring-2 focus:ring-excellence-gold focus:border-excellence-gold transition-all outline-none"
                      placeholder="98765 43210"
                      type="tel"
                    />
                  </div>
                </div>
                <Button variant="primary" type="submit" className="w-full font-bold shadow-lg shadow-aligarh-red/10">
                  Submit Interest
                </Button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-stone-gray/20">
              <p className="font-label-md text-label-md text-on-surface-variant mb-4">
                Direct Admissions Contact
              </p>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-aligarh-red" size={20} />
                <span className="font-body-md text-body-md text-on-surface">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-aligarh-red" size={20} />
                <span className="font-body-md text-body-md text-on-surface">admissions@excellence.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-8 space-y-section-padding-mobile">
          {/* Journey */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-lg">Admission Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-excellence-gold/20 -z-10" />
              {journeySteps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-background border-2 border-excellence-gold rounded-full flex items-center justify-center mb-4 transition-all group-hover:bg-excellence-gold group-hover:text-ink-black shadow-xl">
                    <Icon size={32} />
                  </div>
                  <h4 className="font-headline-md text-[20px] text-aligarh-red">{title}</h4>
                  <p className="font-body-md text-body-md text-stone-gray mt-2 px-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key info bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-stack-md bg-white border border-stone-gray/20 rounded-xl hover:border-excellence-gold transition-colors">
              <div className="flex justify-between items-start mb-4">
                <CalendarDays className="text-aligarh-red" size={40} />
                <span className="bg-excellence-gold/10 text-excellence-gold px-3 py-1 rounded-full text-label-md">
                  Key Dates
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">Upcoming Sessions</h4>
              <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                <li className="flex justify-between">
                  <span>Scholarship Exam</span> <span className="font-bold text-aligarh-red">Nov 15</span>
                </li>
                <li className="flex justify-between">
                  <span>Open House Day</span> <span className="font-bold text-aligarh-red">Dec 01</span>
                </li>
                <li className="flex justify-between">
                  <span>Registration Deadline</span> <span className="font-bold text-aligarh-red">Jan 10</span>
                </li>
              </ul>
            </div>
            <div className="p-stack-md bg-white border border-stone-gray/20 rounded-xl hover:border-excellence-gold transition-colors">
              <div className="flex justify-between items-start mb-4">
                <FileText className="text-aligarh-red" size={40} />
                <span className="bg-excellence-gold/10 text-excellence-gold px-3 py-1 rounded-full text-label-md">
                  Documents
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">Checklist</h4>
              <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                <li className="flex gap-2 items-start">
                  <span className="text-excellence-gold font-bold">■</span> Birth Certificate
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-excellence-gold font-bold">■</span> Previous Report Cards
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-excellence-gold font-bold">■</span> 4 Passport Size Photos
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div key={f.q} className="border border-stone-gray/20 rounded-lg bg-white overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-heritage-cream transition-all group"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-headline-md text-[18px] text-on-surface group-hover:text-aligarh-red transition-colors">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 py-4 bg-heritage-cream/50 text-body-md text-on-surface-variant border-t border-stone-gray/20">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-excellence-gold py-stack-lg relative overflow-hidden">
        <div className="jali-pattern absolute inset-0" />
        <div className="max-w-container-max-width mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md relative z-10">
          <div className="text-ink-black">
            <h3 className="font-headline-lg text-headline-lg">Ready to transform your child's future?</h3>
            <p className="font-body-lg text-body-lg text-ink-black/80">
              Download our complete school prospectus for 2026-2027.
            </p>
          </div>
          <button className="bg-aligarh-red text-white px-10 py-4 rounded font-bold font-label-md text-label-md flex items-center gap-3 hover:shadow-xl transition-all">
            <Download size={20} /> Download Prospectus
          </button>
        </div>
      </section>
    </>
  )
}
