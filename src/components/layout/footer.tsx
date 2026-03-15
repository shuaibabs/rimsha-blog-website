import Link from 'next/link';
import { Logo } from '../common/logo';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 text-center md:grid-cols-2 md:text-left md:px-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center space-x-3">
            <Logo />
            <span className="text-lg font-bold font-headline">Rimsha's Tech Blogs</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            A project by a B.Tech student from COER University, Roorkee.
            <br />
            Exploring the frontiers of AI and Robotics.
          </p>
        </div>
        <div className="md:justify-self-end">
          <h4 className="font-headline font-semibold tracking-wider text-foreground md:text-right">Navigate</h4>
          <ul className="mt-4 space-y-2 md:text-right">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/20">
        <div className="container mx-auto flex items-center justify-center h-16 px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rimsha's Tech Blogs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
