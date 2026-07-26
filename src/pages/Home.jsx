import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, MapPin, Phone, Navigation as NavigationIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SafeImage, useSafeImage, placeholder } from '@/components/SafeImage'

const testimonials = [
  {
    quote:
      "Excellence International School has been amazing for my child. The teachers are caring, lessons are fun, and my child is growing in confidence and enjoying school every day.",
    name: 'Rakesh Sharma',
    role: 'Parent of Aarav, Class 5',
  },
  {
    quote:
      "I love how safe and welcoming the school is. The staff know every student well and create a positive environment where learning and friendship thrive.",
    name: 'Neha Verma',
    role: 'Parent of Anaya, Class 3',
  },
  {
    quote:
      "The school balances academics with fun activities, helping children grow socially, emotionally, and intellectually in a supportive environment.",
    name: 'Amit Gupta',
    role: 'Parent of Vivaan, Class 7',
  },
]

const programs = [
  {
    span: 'md:col-span-5',
    title: 'Pre-Primary School',
    desc: 'Play-based learning for the curious little minds.',
    cta: 'Learn More',
    ctaClass: 'bg-excellence-gold text-ink-black',
    overlay: 'from-aligarh-red/90',
    img: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1200&q=80',
    fallback: placeholder('pre-primary'),
  },
  {
    span: 'md:col-span-7',
    title: 'Middle School',
    desc: 'Advanced curriculum preparing students for future success.',
    cta: 'Explore Subjects',
    ctaClass: 'bg-white text-aligarh-red',
    overlay: 'from-ink-black/80',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    fallback: placeholder('middle-school'),
  },
]

const HERO_IMG = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80'
const HERO_FALLBACK = placeholder('school-hero', 1600, 1000)
const PRIMARY_IMG = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80'
const PRIMARY_FALLBACK = placeholder('primary-school')
const CTA_IMG = 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80'
const CTA_FALLBACK = placeholder('admissions-lab', 1000, 800)

export default function Home() {
  const [slide, setSlide] = useState(0)
  const heroBg = useSafeImage(HERO_IMG, HERO_FALLBACK)
  const ctaBg = useSafeImage(CTA_IMG, CTA_FALLBACK)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-black h-[85vh] flex items-center -mt-20">
        <div className="absolute inset-0 opacity-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${heroBg}')` }}
          />
        </div>
        <div className="relative z-10 max-w-container-max-width mx-auto px-gutter grid md:grid-cols-2 gap-stack-lg items-center">
          <div className="text-white space-y-stack-md">
            <span className="inline-block px-4 py-1 bg-excellence-gold text-ink-black font-label-md text-label-md rounded uppercase tracking-widest">
              Admissions Open 2026-27
            </span>
            <h1 className="font-headline-xl text-headline-xl leading-tight">
              Shaping Future Leaders Through Enlightened Tradition
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-lg">
              Excellence International School provides a prestigious
              education where heritage meets innovation, cultivating
              creative, confident, and compassionate global citizens.
            </p>
            <div className="flex gap-4 pt-4">
              <Link to="/academics">
                <Button variant="primary">Explore Programs</Button>
              </Link>
              <Button variant="outlineWhite" className="bg-white/10 backdrop-blur-md">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-20 -mt-12 max-w-container-max-width mx-auto px-gutter">
        <div className="bg-white rounded-lg shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-gray/10 py-stack-md">
          {[
            ['12:1', 'Student Ratio'],
            ['15+', 'Acres Campus'],
            ['25+', 'Years Excellence'],
            ['100%', 'University Placement'],
          ].map(([stat, label]) => (
            <div key={label} className="flex flex-col items-center justify-center p-4">
              <span className="font-headline-lg text-headline-lg text-aligarh-red">{stat}</span>
              <span className="font-label-md text-label-md text-stone-gray">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="relative py-section-padding-desktop overflow-hidden">
        <div className="jali-pattern absolute inset-0" />
        <div className="relative z-10 max-w-container-max-width mx-auto px-gutter">
          <div className="text-center mb-stack-lg">
            <span className="text-excellence-gold font-label-md text-label-md uppercase tracking-tighter">
              Our Core Identity
            </span>
            <h2 className="font-headline-lg text-headline-lg text-aligarh-red mt-2">
              Vision &amp; Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-stack-lg">
            <div className="bg-heritage-cream p-12 border border-stone-gray/10 rounded-lg space-y-4 relative overflow-hidden group">
              <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-excellence-gold opacity-10 text-[180px] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                stars
              </span>
              <h3 className="font-headline-md text-headline-md text-aligarh-red">Our Mission</h3>
              <p className="font-body-md text-body-md text-stone-gray leading-relaxed">
                To nurture a community of learners who excel academically and
                socially, equipped with the critical thinking skills and
                moral compass needed to navigate a complex global landscape.
                We are dedicated to providing an environment that honors
                traditional values while embracing modern pedagogy.
              </p>
            </div>
            <div className="bg-heritage-cream p-12 border border-stone-gray/10 rounded-lg space-y-4 relative overflow-hidden group">
              <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-excellence-gold opacity-10 text-[180px] -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                visibility
              </span>
              <h3 className="font-headline-md text-headline-md text-aligarh-red">Our Vision</h3>
              <p className="font-body-md text-body-md text-stone-gray leading-relaxed">
                To be a global beacon of educational excellence, recognized
                for developing compassionate leaders who drive positive
                change. We envision a school where heritage architecture and
                cutting-edge technology coexist to inspire the next
                generation of innovators and thinkers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs bento */}
      <section className="py-section-padding-desktop bg-white">
        <div className="max-w-container-max-width mx-auto px-gutter">
          <div className="flex justify-between items-end mb-stack-lg">
            <div>
              <span className="text-excellence-gold font-label-md text-label-md uppercase">
                Academic Excellence
              </span>
              <h2 className="font-headline-lg text-headline-lg text-aligarh-red mt-2">
                Curated Learning Programs
              </h2>
            </div>
            <Link
              to="/academics"
              className="text-aligarh-red font-label-md text-label-md flex items-center gap-2 hover:underline"
            >
              View All Curricula <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {programs.map((p) => (
              <div
                key={p.title}
                className={`${p.span} relative group overflow-hidden rounded-lg border border-stone-gray/20 card-hover transition-all duration-300`}
              >
                <div className="absolute inset-0 z-0">
                  <SafeImage
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={p.img}
                    fallback={p.fallback}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.overlay} via-transparent to-transparent`} />
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-10">
                  <h3 className="font-headline-md text-headline-md text-white mb-2">{p.title}</h3>
                  <p className="text-white/80 font-body-md text-body-md mb-4">{p.desc}</p>
                  <button className={`${p.ctaClass} px-4 py-2 text-label-md font-label-md rounded`}>
                    {p.cta}
                  </button>
                </div>
              </div>
            ))}
            <div className="md:col-span-12 relative group overflow-hidden rounded-lg border border-stone-gray/20 h-64 md:h-auto card-hover transition-all duration-300">
              <div className="absolute inset-0 z-0">
                <SafeImage
                  alt="Primary School"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={PRIMARY_IMG}
                  fallback={PRIMARY_FALLBACK}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-excellence-gold/80 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center p-12 z-10">
                <div className="max-w-md">
                  <h3 className="font-headline-md text-headline-md text-ink-black mb-2">Primary School</h3>
                  <p className="text-ink-black/80 font-body-md text-body-md mb-4">
                    Building strong foundations in core disciplines through inquiry.
                  </p>
                  <button className="bg-aligarh-red text-white px-6 py-2 text-label-md font-label-md rounded">
                    Admission Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-padding-desktop bg-heritage-cream">
        <div className="max-w-container-max-width mx-auto px-gutter overflow-hidden">
          <div className="text-center mb-stack-lg">
            <span className="text-aligarh-red font-label-md text-label-md uppercase">The Excellence Voice</span>
            <h2 className="font-headline-lg text-headline-lg text-ink-black mt-2">What Parents Say</h2>
          </div>
          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-10 rounded-lg shadow-sm border border-stone-gray/10 text-center space-y-6">
                    <span className="material-symbols-outlined text-excellence-gold text-5xl">format_quote</span>
                    <p className="font-callquote text-callquote text-on-surface-variant italic max-w-3xl mx-auto">
                      "{t.quote}"
                    </p>
                    <div>
                      <h4 className="font-label-md text-label-md text-aligarh-red">{t.name}</h4>
                      <p className="text-stone-gray text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`w-3 h-3 rounded-full ${idx === slide ? 'bg-excellence-gold' : 'bg-stone-gray/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-section-padding-desktop">
        <div className="max-w-container-max-width mx-auto px-gutter">
          <div className="bg-aligarh-red rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 text-white flex flex-col justify-center">
              <h2 className="font-headline-lg text-headline-lg mb-4">Admissions Open for 2026-2027</h2>
              <p className="font-body-lg text-body-lg mb-8 text-primary-fixed">
                Secure your child's future today. Our holistic admissions
                process looks beyond grades to discover the leader within.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="bg-excellence-gold text-ink-black px-8 py-4 rounded font-label-md text-label-md hover:brightness-110 transition-all flex items-center gap-2"
                >
                  Apply Online <ArrowRight size={18} />
                </Link>
                <Link
                  to="/admissions"
                  className="border border-white/30 text-white px-8 py-4 rounded font-label-md text-label-md hover:bg-white/10 transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 min-h-[300px]">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${ctaBg}')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-section-padding-desktop bg-heritage-cream relative overflow-hidden">
        <div className="jali-pattern absolute inset-0 opacity-10" />
        <div className="max-w-container-max-width mx-auto px-gutter relative z-10">
          <div className="mb-stack-lg">
            <span className="text-excellence-gold font-label-md text-label-md uppercase tracking-widest">
              Location &amp; Visit
            </span>
            <h2 className="font-headline-lg text-headline-lg text-aligarh-red mt-2">Visit Our Campus</h2>
            <p className="font-body-lg text-body-lg text-stone-gray mt-4">
              Experience the heritage and excellence of our Aligarh campus in person.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-aligarh-red flex-shrink-0" />
                  <div>
                    <h4 className="font-label-md text-label-md text-ink-black font-bold uppercase">Address</h4>
                    <p className="font-body-md text-body-md text-stone-gray mt-1">
                      Excellence International School,
                      <br />
                      Ramghat Road, Aligarh 202001,
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-aligarh-red flex-shrink-0" />
                  <div>
                    <h4 className="font-label-md text-label-md text-ink-black font-bold uppercase">Contact</h4>
                    <p className="font-body-md text-body-md text-stone-gray mt-1">+91 7055582117</p>
                  </div>
                </div>
              </div>
              <Button variant="primary" className="flex items-center gap-2">
                Get Directions <NavigationIcon size={18} />
              </Button>
            </div>
            <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden border border-stone-gray/20 shadow-xl">
              <div className="absolute inset-0 bg-stone-gray/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-aligarh-red mx-auto mb-2" size={48} />
                  <p className="font-label-md text-label-md text-stone-gray">
                    Interactive Map Placeholder
                    <br />
                    Aligarh Campus
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 jali-pattern opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating enquiry */}
      <button className="fixed right-6 bottom-6 z-50 bg-excellence-gold text-ink-black p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 active:scale-95 transition-all">
        <MessageCircle size={20} />
        <span className="font-label-md text-label-md font-bold hidden md:inline">Quick Enquiry</span>
      </button>
    </>
  )
}
