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

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden flex flex-col bg-transparent border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden relative aspect-video">
          <Image
            src={post.image}
            alt={post.title}
            fill
            data-ai-hint={post.imageHint}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className='flex flex-col flex-grow p-6 bg-card/50 backdrop-blur-sm'>
        <CardHeader className="p-0">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-primary/30 text-primary font-normal">{tag}</Badge>
            ))}
          </div>
          <CardTitle className="font-headline text-xl leading-tight">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow pt-4">
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-0 flex justify-between items-center mt-6">
          <div className="text-xs text-muted-foreground flex items-center gap-4">
              <div className='flex items-center gap-1.5'>
                  <User className="h-3 w-3" />
                  <span>{post.author}</span>
              </div>
              <div className='flex items-center gap-1.5'>
                  <Calendar className="h-3 w-3" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
              </div>
          </div>
          <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary/80 flex items-center gap-1 group-hover:text-primary group-hover:gap-2 transition-all">
            Read <ArrowRight className="h-4 w-4" />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
