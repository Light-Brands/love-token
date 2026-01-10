'use client';

import React from 'react';
import Link from 'next/link';
import { HeartIcon, GlobalIcon } from '@/components/icons';

const footerLinks = {
  product: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Love Farmers', href: '/roles/love-farmer' },
    { name: 'Donors', href: '/roles/donor' },
    { name: 'Vendors', href: '/roles/vendor' },
    { name: 'Meditate', href: '/meditate' },
  ],
  community: [
    { name: 'Impact Dashboard', href: '/impact' },
    { name: 'Love Farms', href: '/communities' },
    { name: 'Sunrise Village', href: '/communities/sunrise-village' },
    { name: 'Energy Vision', href: '/energy' },
    { name: 'Impact Stories', href: '/impact/stories/maria-sunrise-village' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Values', href: '/about/values/dignity-first' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/join' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep-root text-white/80">
      <div className="container-love py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-love-flow flex items-center justify-center">
                <HeartIcon size={20} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-white">
                Love Token
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-4">
              Building the world&apos;s first functioning Love Economy.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <GlobalIcon size={16} />
              <span>The World&apos;s Greatest Experiment</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-sunlit-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-sunlit-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-sunlit-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-sunlit-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Love Token. All rights reserved.
          </p>
          <p className="text-sm text-white/40 text-center md:text-right">
            &quot;Love is not given. Love is shared. Love is earned. Love circulates.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
