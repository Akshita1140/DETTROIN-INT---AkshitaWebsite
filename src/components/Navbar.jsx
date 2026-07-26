import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Campus Life', to: '/heritage' },
  { label: 'Faculty', to: '#' },
  { label: 'Alumni', to: '#' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background border-b border-stone-gray/20 fixed top-0 left-0 right-0 z-50 h-20">
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max-width mx-auto h-full">
        <Link
          to="/"
          className="font-headline-md text-headline-md font-bold text-aligarh-red hover:opacity-80 transition-opacity"
        >
          Excellence International
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                className={cnLink(isActive)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary" size="sm" className="rounded-lg">
            Login
          </Button>
          <Button variant="primary" size="sm" className="rounded-lg">
            Apply Now
          </Button>
        </div>

        <button
          className="md:hidden text-aligarh-red"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-stone-gray/20 px-gutter py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className={cnLink(pathname === link.to)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2">
            <Button variant="secondary" size="sm" className="rounded-lg flex-1">
              Login
            </Button>
            <Button variant="primary" size="sm" className="rounded-lg flex-1">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function cnLink(isActive) {
  return isActive
    ? 'text-aligarh-red font-bold border-b-2 border-excellence-gold pb-1 font-label-md text-label-md'
    : 'text-on-surface-variant hover:text-aligarh-red transition-colors font-label-md text-label-md'
}
