"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/common/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/trends', label: 'AI Trends' },
  { href: '/robotics', label: 'Robotics' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full p-2 md:top-4 md:p-0">
        <div className="container flex h-14 items-center rounded-full bg-background/50 px-4 shadow-lg shadow-black/5 backdrop-blur-lg md:h-16 md:px-6">
          <Link href="/" className="mr-auto flex items-center space-x-3">
            <Logo />
            <span className="hidden font-bold font-headline sm:inline-block text-lg">
              Rimsha's Tech Blogs
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors rounded-full px-4 py-2 hover:text-primary hover:bg-primary/10',
                  pathname === item.href ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-lg md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "transition-opacity duration-300 ease-in-out"
        )}
      >
        <div className="container flex flex-col items-center justify-center h-full gap-8 pt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-2xl font-headline transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
