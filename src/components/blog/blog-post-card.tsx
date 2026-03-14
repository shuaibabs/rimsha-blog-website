import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            data-ai-hint={post.imageHint}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
          ))}
        </div>
        <CardTitle className="font-headline text-xl leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-xs text-muted-foreground flex items-center gap-4">
            <div className='flex items-center gap-1.5'>
                <User className="h-3 w-3" />
                <span>{post.author}</span>
            </div>
            <div className='flex items-center gap-1.5'>
                <Calendar className="h-3 w-3" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
        </div>
         <Button variant="ghost" asChild className="text-accent group-hover:translate-x-1 transition-transform">
            <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
