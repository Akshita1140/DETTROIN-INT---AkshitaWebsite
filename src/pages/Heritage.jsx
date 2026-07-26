import React from 'react'
import { Globe, Star, School, Shield, Bus, ArrowRight, Download } from 'lucide-react'
import { SafeImage, useSafeImage, placeholder } from '@/components/SafeImage'

const HERO_IMG = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80'
const HERO_FALLBACK = placeholder('heritage-hero', 1600, 1000)
const LIBRARY_IMG = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80'
const LIBRARY_FALLBACK = placeholder('heritage-library', 900, 1100)
const SAFETY_IMG = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80'
const SAFETY_FALLBACK = placeholder('safe-campus', 900, 600)
const TRANSPORT_IMG = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80'
const TRANSPORT_FALLBACK = placeholder('transport-bus', 900, 600)

export default function Heritage() {
  const heroBg = useSafeImage(HERO_IMG, HERO_FALLBACK)
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-aligarh-red/90 mix-blend-multiply z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBg}')` }}
        />
        <div className="relative z-20 text-center px-gutter max-w-4xl mx-auto">
          <span className="font-label-md text-label-md text-excellence-gold uppercase tracking-widest mb-4 block">
            Tradition Meets Innovation
          </span>
          <h1 className="font-headline-xl text-headline-xl text-white mb-6">Aligarh Heritage &amp; Global Identity</h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl mx-auto">
            Grounding the prestige of our institution in the intellectual
            weight of Aligarh's storied past while pioneering the AI-driven
            futures of tomorrow.
          </p>
          <div className="mt-stack-lg flex justify-center items-center gap-4">
            <div className="w-16 h-[2px] bg-excellence-gold" />
            <span className="font-callquote text-callquote text-excellence-gold italic">
              Character • Discipline • Learning
            </span>
            <div className="w-16 h-[2px] bg-excellence-gold" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-section-padding-desktop px-gutter max-w-container-max-width mx-auto jali-pattern">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-excellence-gold/30" />
            <div className="aspect-[4/5] bg-heritage-cream overflow-hidden border border-stone-gray/20">
              <SafeImage
                className="w-full h-full object-cover"
                alt="Student with AI projection in a heritage library"
                src={LIBRARY_IMG}
                fallback={LIBRARY_FALLBACK}
              />
            </div>
          </div>
          <div className="flex flex-col gap-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-aligarh-red">The Story of Our Roots</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant italic border-l-4 border-excellence-gold pl-6 py-2">
              "Enlightened Tradition: Where the etiquette of 'Adab' meets the precision of Artificial Intelligence."
            </p>
            <p className="font-body-md text-body-md text-on-surface">
              Excellence International School is not merely a center of
              learning; it is an extension of Aligarh's architectural and
              intellectual legacy. We cultivate the soul through traditional
              values of respect and poise while equipping the mind with
              world-class technological literacy.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-white p-6 border border-stone-gray/20">
                <h4 className="font-label-md text-label-md text-aligarh-red mb-2">Heritage Values</h4>
                <p className="text-sm text-stone-gray">
                  Upholding the legendary hospitality and etiquette of the Aligarh culture.
                </p>
              </div>
              <div className="bg-white p-6 border border-stone-gray/20">
                <h4 className="font-label-md text-label-md text-aligarh-red mb-2">AI Integration</h4>
                <p className="text-sm text-stone-gray">
                  Leveraging adaptive learning platforms to personalize the educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy bento */}
      <section className="bg-heritage-cream py-section-padding-desktop border-y-4 border-excellence-gold/20">
        <div className="max-w-container-max-width mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-aligarh-red">Globally Minded, Locally Rooted</h2>
            <p className="font-body-md text-body-md text-stone-gray max-w-xl mx-auto mt-4">
              Our philosophy is anchored in our prestigious location,
              ensuring students never lose sight of their identity as they
              conquer global stages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-7 bg-white border border-stone-gray/10 p-10 flex flex-col justify-end relative overflow-hidden group">
              <Globe className="absolute top-8 right-8 text-stone-gray opacity-10 group-hover:opacity-20 transition-opacity" size={120} />
              <h3 className="font-headline-md text-headline-md text-aligarh-red relative z-10">World-Class Exposure</h3>
              <p className="font-body-md text-body-md text-stone-gray mt-2 relative z-10">
                International curriculum standards integrated with Aligarh's rich literary and cultural context.
              </p>
            </div>
            <div className="md:col-span-5 bg-aligarh-red p-10 flex flex-col justify-center text-white">
              <Star className="text-excellence-gold mb-4" fill="currentColor" />
              <h3 className="font-headline-md text-headline-md">Prestige &amp; Pedigree</h3>
              <p className="font-body-md text-body-md opacity-80 mt-2">
                A campus designed to evoke the grandeur of classical universities.
              </p>
            </div>
            <div className="md:col-span-5 bg-white border border-stone-gray/10 p-10 flex flex-col justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-excellence-gold" />
                <div className="w-2 h-2 bg-excellence-gold" />
                <div className="w-2 h-2 bg-excellence-gold" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-aligarh-red">Safe Environment</h3>
                <p className="font-body-md text-body-md text-stone-gray mt-2">
                  Nurturing growth in a secure, surveillance-monitored facility.
                </p>
              </div>
            </div>
            <div className="md:col-span-7 bg-excellence-gold/10 border border-excellence-gold/20 p-10 flex items-center gap-8">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-excellence-gold/30">
                <School className="text-aligarh-red" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-aligarh-red">Locally Rooted Vision</h3>
                <p className="font-body-md text-body-md text-stone-gray mt-1">
                  Empowering local students with the tools to innovate for their community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-section-padding-desktop">
        <div className="max-w-container-max-width mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="font-label-md text-label-md text-excellence-gold">Campus Facilities</span>
              <h2 className="font-headline-lg text-headline-lg text-aligarh-red mt-2">
                Modern Infrastructure for Modern Minds
              </h2>
            </div>
            <button className="font-label-md text-label-md px-8 py-3 bg-white border border-aligarh-red text-aligarh-red hover:bg-aligarh-red hover:text-white transition-all">
              Take a Virtual Tour
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-lg border border-stone-gray/20 bg-white">
              <div className="aspect-[1.5] overflow-hidden">
                <SafeImage
                  alt="Safe and Secure Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={SAFETY_IMG}
                  fallback={SAFETY_FALLBACK}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-aligarh-red" />
                  <h3 className="font-headline-md text-headline-md">Safe Campus Environment</h3>
                </div>
                <p className="font-body-md text-body-md text-stone-gray">
                  Excellence International provides a sanctuary for
                  learning, featuring state-of-the-art surveillance and
                  trained personnel to ensure the highest safety standards
                  for every student.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-stone-gray/20 bg-white">
              <div className="aspect-[1.5] overflow-hidden">
                <SafeImage
                  alt="Transportation Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={TRANSPORT_IMG}
                  fallback={TRANSPORT_FALLBACK}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Bus className="text-aligarh-red" />
                  <h3 className="font-headline-md text-headline-md">Elite Transportation Facility</h3>
                </div>
                <p className="font-body-md text-body-md text-stone-gray">
                  Connecting the entire Aligarh region with our premium,
                  GPS-tracked fleet, ensuring a comfortable and timely
                  commute for our scholars from doorstep to desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aligarh-red py-24 relative overflow-hidden">
        <div className="absolute inset-0 jali-pattern opacity-10" />
        <div className="max-w-container-max-width mx-auto px-gutter relative z-10 text-center">
          <h2 className="font-headline-xl text-headline-xl text-white mb-8">Join the Legacy of Excellence</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              className="bg-excellence-gold text-ink-black px-12 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
              href="/admissions"
            >
              Enquire Now <ArrowRight size={18} />
            </a>
            <button className="border border-white/30 text-white px-12 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Download Brochure <Download size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
