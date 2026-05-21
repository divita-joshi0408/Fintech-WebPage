'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#9abd2d] border-b border-[#1E3A8A] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo Container */}
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <div className="bg-white rounded-2xl shadow-md px-3 py-2 transition-all duration-300 hover:shadow-lg">
                <Image
                  src="/rksWealth-logo-image.png"
                  alt="RksWealth Logo"
                  width={120}
                  height={50}
                  className="w-[90px] sm:w-[130px] h-auto object-contain"
                  loading="eager"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-lg">
            <Link
              href="/"
              className="hover:text-[#1E3A8A] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/mutual-funds"
              className="hover:text-[#1E3A8A] transition-colors duration-200"
            >
              MutualFund Page
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } md:hidden bg-[#9abd2d] border-t border-white/10 absolute left-0 right-0 shadow-lg`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-2 text-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-3 rounded-md text-base font-medium hover:bg-white/10 transition-colors duration-200 border-b border-white/5"
          >
            Home
          </Link>
          <Link
            href="/mutual-funds"
            onClick={() => setIsOpen(false)}
            className="block py-3 rounded-md text-base font-medium hover:bg-white/10 transition-colors duration-200"
          >
            MutualFund Page
          </Link>
        </div>
      </div>
    </nav>
  )
}
