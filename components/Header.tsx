'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-content">
          <span><i className="fas fa-map-marker-alt"></i> Vaiyampatti, Manapparai, Trichy</span>
          <span className="top-bar-spacer">|</span>
          <span>Vinnarasi Vocational Training Centre</span>
        </div>
      </div>
      <header className="site-header">
        {/* Logo */}
        <Link href="/" className="site-logo" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ borderRadius: 6 }} />
          <span>Vinnarasi Community College</span>
        </Link>

        {/* Desktop nav */}
        <nav className="site-nav">
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'nav-active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button */}
        <button
          className={`hbg${open ? ' hbg--open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
          type="button"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile nav panel */}
      <div className={`mob-nav${open ? ' mob-nav--open' : ''}`}>
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? 'nav-active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a href="tel:+919942185370" className="mob-call" onClick={() => setOpen(false)}>
          <i className="fas fa-phone-alt" /> +91 99421 85370
        </a>
      </div>

      {open && <div className="mob-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
