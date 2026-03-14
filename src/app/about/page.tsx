import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Mail, Code } from 'lucide-react';

export const metadata = {
  title: 'About | Rimsha\'s Tech Blogs',
  description: 'Learn more about the author and the mission behind Rimsha\'s Tech Blogs.',
};

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-me');

  return (
    <div className="container max-w-5xl mx-auto py-12 md:py-20 px-4">
      <section className="w-full pt-12 pb-8 md:pt-20 md:pb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          About the Author
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          A passionate technologist exploring the digital frontier.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-primary/50">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt="Portrait of Rimsha"
                fill
                data-ai-hint={aboutImage.imageHint}
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <h2 className="font-headline text-3xl font-semibold text-primary">Rimsha</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="outline" className="flex items-center gap-2 text-md py-1 px-3 border-accent/50 text-accent">
              <GraduationCap className="h-4 w-4" />
              B.Tech Student, COER University, Roorkee
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 text-md py-1 px-3 border-accent/50 text-accent">
              <Code className="h-4 w-4" />
              AI & Robotics Enthusiast
            </Badge>
          </div>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p>
              I am a B.Tech student at COER University, Roorkee, with a profound passion for Artificial Intelligence, Robotics, and the future of technology. This blog is my digital canvas, where I document my journey, share insights, and explore the cutting-edge innovations that are shaping our world.
            </p>
            <p>
              My goal is to demystify complex topics and make the fascinating world of AI accessible to everyone. From deep dives into neural networks to discussions on the ethical implications of automation, I strive to provide content that is both informative and thought-provoking.
            </p>
            <p>
              Thank you for joining me on this exploration of tomorrow's technology. Let's learn and grow together!
            </p>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <Button asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              or email at: <a href="mailto:cu240251326@coeruniversity.ac.in" className="text-accent hover:underline">cu240251326@coeruniversity.ac.in</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
