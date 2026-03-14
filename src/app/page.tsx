import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Zap } from 'lucide-react';
import { getFeaturedPosts } from '@/lib/blog-data';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const featuredPosts = getFeaturedPosts(4);

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'Latest AI Innovations',
      description: 'Explore breakthroughs in machine learning, neural networks, and generative AI.',
      href: '/trends',
    },
    {
      icon: <Bot className="h-8 w-8 text-accent" />,
      title: 'Future of Robotics',
      description: 'Discover advancements in automation, humanoid robots, and their societal impact.',
      href: '/robotics',
    },
    {
      icon: <Cpu className="h-8 w-8 text-accent" />,
      title: 'AI in Everyday Life',
      description: 'Learn how artificial intelligence is shaping our daily routines and industries.',
      href: '/blog',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 text-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary animate-fade-in-up">
              From the Desk of a COER University Student
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up [animation-delay:200ms]">
              Exploring the Future of <span className="text-primary">Artificial Intelligence</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:400ms]">
              Your portal to the latest in AI innovation, robotics, and emerging technologies.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
              <Button asChild size="lg">
                <Link href="/blog">
                  Explore Blogs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 w-full bg-background/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="flex flex-col items-center text-center p-6 rounded-lg border border-transparent hover:border-primary/50 hover:bg-card transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-headline font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                 <Button variant="link" asChild className="mt-4 text-accent">
                  <Link href={feature.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Posts
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground md:text-xl">
              Hand-picked articles to get you started on your journey into the future of tech.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
