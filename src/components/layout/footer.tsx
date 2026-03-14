import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NewsletterForm } from '../common/newsletter-form';
import { Logo } from '../common/logo';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center space-x-3">
            <Logo />
            <span className="text-lg font-bold font-headline">Rimsha's Tech Blogs</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            A project by a B.Tech student from COER University, Roorkee.
            <br />
            Exploring the frontiers of AI and Robotics.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:cu240251326@coeruniversity.ac.in" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="md:justify-self-center">
          <h4 className="font-headline font-semibold tracking-wider text-foreground">Navigate</h4>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline font-semibold tracking-wider text-foreground">Subscribe to Newsletter</h4>
          <p className="text-sm text-muted-foreground">Get the latest insights on AI and robotics delivered to your inbox.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-border/20">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rimsha's Tech Blogs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
