import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { SafeImage, placeholder } from '@/components/SafeImage'

const HERO_IMG = 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80'
const HERO_FALLBACK = placeholder('academics-hero', 1000, 1000)
const EXPERIENTIAL_IMG = 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80'
const EXPERIENTIAL_FALLBACK = placeholder('experiential')
const MOMENT_IMG = 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80'
const MOMENT_FALLBACK = placeholder('learning-moment', 800, 600)
const ENV_IMG = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
const ENV_FALLBACK = placeholder('school-environment', 800, 800)
const FACULTY_IMG = 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1400&q=80'
const FACULTY_FALLBACK = placeholder('faculty', 1400, 900)

const stages = [
  {
    icon: 'child_care',
    title: 'Pre-Primary',
    desc: 'Foundational years focused on play-based inquiry, sensory exploration, and early literacy through the Montessori-inspired approach.',
    points: ['Motor Skill Development', 'Social-Emotional Learning', 'Language Phonics Program'],
    highlight: false,
  },
  {
    icon: 'school',
    title: 'Primary School',
    desc: 'Transitioning to conceptual understanding, critical thinking, and a robust foundation in numeracy and literacy.',
    points: ['IB PYP Framework Alignment', 'Interdisciplinary Units', 'Language Immersion (Arabic/French)'],
    highlight: true,
  },
  {
    icon: 'account_tree',
    title: 'Middle School',
    desc: 'Empowering adolescents with specialized subject knowledge and leadership opportunities to navigate a complex world.',
    points: ['Research-Led Inquiries', 'Competitive Exam Preparation', 'Leadership Mentorship'],
    highlight: false,
  },
]

const pillars = [
  {
    title: 'Personalized Mentorship',
    desc: "Small class sizes ensure that every child's learning style is identified and nurtured.",
  },
  {
    title: 'Digital Integration',
    desc: 'Smart classrooms and a robust LMS platform create a borderless learning experience.',
  },
  {
    title: 'Global Perspectives',
    desc: 'Curriculum enriched with international exchange programs and global awareness units.',
  },
]

export default function Academics() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-section-padding-desktop bg-heritage-cream/50 overflow-hidden">
        <div className="jali-pattern absolute inset-0 opacity-20" />
        <div className="max-w-container-max-width mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md">
            <span className="inline-block px-3 py-1 bg-excellence-gold text-ink-black font-label-md text-label-md rounded uppercase tracking-widest">
              Prestige &amp; Excellence
            </span>
            <h1 className="font-headline-xl text-headline-xl text-aligarh-red leading-tight">
              The Academic Journey: <br />
              <span className="text-on-surface italic font-normal">Nurturing Tomorrow's Global Leaders</span>
            </h1>
            <p className="font-body-lg text-body-lg text-stone-gray max-w-xl">
              At Excellence International, Aligarh, we blend rigorous
              international standards with local cultural wisdom to create a
              holistic learning environment that fosters curiosity,
              character, and competence.
            </p>
            <div className="flex gap-4 pt-stack-sm">
              <Button variant="primary">Download Curriculum</Button>
              <Button variant="secondary" className="border-aligarh-red text-aligarh-red hover:bg-white">
                Virtual Tour
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white border border-stone-gray/20 p-2 transform rotate-2">
              <SafeImage
                alt="School Atmosphere"
                className="w-full h-full object-cover"
                src={HERO_IMG}
                fallback={HERO_FALLBACK}
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-aligarh-red -z-10 opacity-10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-section-padding-desktop px-gutter max-w-container-max-width mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-aligarh-red">Stages of Intellectual Growth</h2>
          <div className="w-24 h-1 bg-excellence-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          {stages.map((s) => (
            <div
              key={s.title}
              className={
                s.highlight
                  ? 'group bg-white border border-stone-gray/20 p-8 shadow-sm scale-105 relative z-10 border-b-4 border-b-excellence-gold'
                  : 'group bg-heritage-cream border border-stone-gray/10 p-8 hover:border-excellence-gold transition-all duration-500'
              }
            >
              <div
                className={
                  s.highlight
                    ? 'w-12 h-12 bg-aligarh-red flex items-center justify-center mb-6 text-white shadow-lg shadow-aligarh-red/20'
                    : 'w-12 h-12 bg-aligarh-red/10 flex items-center justify-center mb-6 text-aligarh-red group-hover:bg-aligarh-red group-hover:text-white transition-colors'
                }
              >
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{s.title}</h3>
              <p className="font-body-md text-body-md text-stone-gray mb-6">{s.desc}</p>
              <ul className="space-y-3 font-label-md text-label-md text-on-surface-variant">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-excellence-gold rotate-45" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond conventional */}
      <section className="py-section-padding-desktop bg-ink-black text-white relative">
        <div className="max-w-container-max-width mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-stack-md">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary-fixed">
                Beyond Conventional Schooling
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary-fixed max-w-xl mt-4">
                We redefine excellence through avant-garde methodologies that
                prepare students for the fourth industrial revolution.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 bg-tertiary-container relative overflow-hidden group">
              <SafeImage
                alt="Experiential Learning"
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                src={EXPERIENTIAL_IMG}
                fallback={EXPERIENTIAL_FALLBACK}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-transparent p-10 flex flex-col justify-end">
                <h4 className="font-headline-md text-headline-md mb-2">Experiential Learning</h4>
                <p className="font-body-md text-body-md text-tertiary-fixed max-w-md">
                  Knowledge applied in real-world contexts through field
                  trips, internships, and laboratory experimentation.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="bg-primary/20 border border-primary-container p-8 flex flex-col justify-center">
                <span className="material-symbols-outlined text-4xl text-excellence-gold mb-4">rocket_launch</span>
                <h4 className="font-headline-md text-headline-md mb-2">STREAM Education</h4>
                <p className="font-body-md text-body-md text-tertiary-fixed">
                  Science, Technology, Research, Engineering, Arts, and
                  Mathematics integrated seamlessly.
                </p>
              </div>
              <div className="bg-excellence-gold/10 border border-excellence-gold/30 p-8 flex flex-col justify-center">
                <span className="material-symbols-outlined text-4xl text-excellence-gold mb-4">construction</span>
                <h4 className="font-headline-md text-headline-md mb-2 text-white">Skill Based Learning</h4>
                <p className="font-body-md text-body-md text-tertiary-fixed">
                  Coding, public speaking, financial literacy, and design
                  thinking as core curriculum components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogical framework */}
      <section className="py-section-padding-desktop">
        <div className="max-w-container-max-width mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <SafeImage
                alt="Learning Moment"
                className="w-full h-64 object-cover border border-stone-gray/10"
                src={MOMENT_IMG}
                fallback={MOMENT_FALLBACK}
              />
              <div className="bg-heritage-cream p-8">
                <p className="font-callquote text-callquote text-aligarh-red italic">
                  "Intelligence plus character—that is the goal of true education."
                </p>
                <p className="mt-4 font-label-md text-label-md text-stone-gray">— Excellence Academic Creed</p>
              </div>
            </div>
            <div className="pt-12">
              <SafeImage
                alt="School Environment"
                className="w-full h-[400px] object-cover border border-stone-gray/10"
                src={ENV_IMG}
                fallback={ENV_FALLBACK}
              />
            </div>
          </div>
          <div className="space-y-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-aligarh-red">Our Holistic Pedagogical Framework</h2>
            <p className="font-body-lg text-body-lg text-stone-gray">
              Our academic model is built on the pillars of Inquiry,
              Empathy, and Innovation. We encourage students to ask 'Why?'
              and 'How can we make it better?' at every turn.
            </p>
            <div className="space-y-6 mt-8">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <div className="bg-excellence-gold w-6 h-6 flex-shrink-0 mt-1 rotate-45" />
                  <div>
                    <h5 className="font-label-md text-label-md text-ink-black uppercase tracking-wide">{p.title}</h5>
                    <p className="font-body-md text-body-md text-stone-gray">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-section-padding-desktop bg-heritage-cream">
        <div className="max-w-container-max-width mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-stack-md">
            <div className="text-center md:text-left">
              <h2 className="font-headline-lg text-headline-lg text-aligarh-red">Dedicated Faculty</h2>
              <p className="font-body-lg text-body-lg text-stone-gray mt-2">The architects of our students' futures.</p>
            </div>
            <button className="px-8 py-3 bg-white border border-stone-gray/20 font-label-md text-label-md hover:border-excellence-gold transition-all">
              Meet the Team
            </button>
          </div>
          <div className="relative group">
            <div className="overflow-hidden rounded-lg shadow-xl shadow-aligarh-red/5">
              <SafeImage
                alt="Experienced and Dedicated Faculty"
                className="w-full h-auto max-h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                src={FACULTY_IMG}
                fallback={FACULTY_FALLBACK}
              />
            </div>
            <div className="absolute -bottom-10 right-10 bg-white p-10 max-w-md shadow-2xl border-l-8 border-excellence-gold hidden lg:block">
              <h4 className="font-headline-md text-headline-md text-aligarh-red mb-4">Scholars and Mentors</h4>
              <p className="font-body-md text-body-md text-stone-gray">
                Our educators are not just teachers; they are researchers,
                artists, and innovators who undergo over 100 hours of
                professional development annually to stay at the vanguard of
                education.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-excellence-gold">50+</p>
                  <p className="text-xs text-stone-gray uppercase tracking-widest">Ph.D &amp; Master's Holders</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-excellence-gold">15:1</p>
                  <p className="text-xs text-stone-gray uppercase tracking-widest">Student-Teacher Ratio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-padding-desktop px-gutter text-center">
        <div className="max-w-2xl mx-auto space-y-stack-md">
          <span className="material-symbols-outlined text-6xl text-excellence-gold">auto_stories</span>
          <h2 className="font-headline-lg text-headline-lg text-aligarh-red">Begin the Transformation Today</h2>
          <p className="font-body-lg text-body-lg text-stone-gray">
            Admissions for the 2026-27 session are now open. Secure a seat
            for your child in the most prestigious academic environment in
            Aligarh.
          </p>
          <div className="pt-stack-sm">
            <Link to="/admissions">
              <Button variant="primary" size="lg" className="uppercase tracking-widest shadow-lg shadow-aligarh-red/20">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
