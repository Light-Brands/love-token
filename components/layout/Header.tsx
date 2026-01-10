'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { HeartIcon, MenuIcon, CloseIcon, ChevronDownIcon } from '@/components/icons';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Impact', href: '/impact' },
  { name: 'Communities', href: '/communities' },
  { name: 'Join', href: '/join' },
  { name: 'Meditate', href: '/meditate' },
];

const moreLinks = [
  { name: 'Whitepaper', href: '/whitepaper' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Energy Vision', href: '/energy' },
  { name: 'Our Values', href: '/about/values/dignity-first' },
  { name: 'Roadmap', href: '/about/phases/mvp-core' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sacred-cream/80 backdrop-blur-lg border-b border-border-mist">
      <nav className="container-love flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-love-flow flex items-center justify-center shadow-warm-glow group-hover:scale-105 transition-transform">
            <HeartIcon size={20} className="text-white" />
          </div>
          <span className="text-xl font-semibold text-deep-root">
            Love Token
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-deep-root/70 hover:text-heart-rose transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="flex items-center gap-1 text-deep-root/70 hover:text-heart-rose transition-colors font-medium"
            >
              More
              <ChevronDownIcon
                size={16}
                className={cn(
                  'transition-transform duration-200',
                  moreDropdownOpen && 'rotate-180'
                )}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={cn(
                'absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-border-mist overflow-hidden',
                'transition-all duration-200 ease-out',
                moreDropdownOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 -translate-y-2 invisible'
              )}
            >
              {moreLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-deep-root/70 hover:text-heart-rose hover:bg-sacred-cream/50 transition-colors"
                  onClick={() => setMoreDropdownOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-deep-root"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-[73px] bg-sacred-cream border-b border-border-mist',
          'transition-all duration-300 ease-in-out',
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="container-love py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-lg text-deep-root/80 hover:text-heart-rose transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 space-y-2 border-t border-border-mist">
            <span className="text-xs text-stone-grey uppercase tracking-wide">More</span>
            {moreLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-deep-root/60 hover:text-heart-rose transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 space-y-3 border-t border-border-mist">
            <Button variant="ghost" className="w-full">
              Sign In
            </Button>
            <Button variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
