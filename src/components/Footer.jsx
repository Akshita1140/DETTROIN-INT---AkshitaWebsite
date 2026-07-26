import React from 'react'
import { MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-heritage-cream border-t-4 border-excellence-gold">
      <div className="w-full py-section-padding-desktop px-gutter max-w-container-max-width mx-auto flex flex-col gap-stack-lg">
        <div className="grid md:grid-cols-4 gap-stack-lg">
          <div className="space-y-4">
            <div className="font-headline-sm text-headline-sm font-bold text-aligarh-red">
              Excellence International
            </div>
            <p className="text-stone-gray font-body-md text-body-md">
              Empowering the next generation with a blend of cultural
              heritage and global standards.
            </p>
          </div>

          <div>
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Mandatory Disclosure', 'Privacy Policy', 'Careers', 'Contact Us', 'Virtual Tour'].map(
                (item) => (
                  <li key={item}>
                    <a
                      className="text-stone-gray hover:text-aligarh-red font-body-md text-body-md hover:underline transition-all"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-4 text-stone-gray font-body-md text-body-md">
              <li className="flex gap-2">
                <MapPin className="text-excellence-gold flex-shrink-0" size={20} />
                Civil Lines, Aligarh, Uttar Pradesh, India
              </li>
              <li className="flex gap-2">
                <Phone className="text-excellence-gold flex-shrink-0" size={20} />
                +91 123 456 7890
              </li>
              <li className="flex gap-2">
                <Mail className="text-excellence-gold flex-shrink-0" size={20} />
                admissions@excellence.edu
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-md text-label-md text-on-surface font-bold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded bg-aligarh-red text-white flex items-center justify-center hover:bg-excellence-gold hover:text-ink-black transition-colors"
                href="#"
              >
                <Share2 size={18} />
              </a>
              <a
                className="w-10 h-10 rounded bg-aligarh-red text-white flex items-center justify-center hover:bg-excellence-gold hover:text-ink-black transition-colors"
                href="#"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-gray/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-gray font-body-md text-body-md">
            © 2026 Excellence International School Aligarh. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
