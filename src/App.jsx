import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Academics from '@/pages/Academics'
import Admissions from '@/pages/Admissions'
import Heritage from '@/pages/Heritage'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-excellence-gold selection:text-ink-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/academics" element={<Layout><Academics /></Layout>} />
        <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
        <Route path="/heritage" element={<Layout><Heritage /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
