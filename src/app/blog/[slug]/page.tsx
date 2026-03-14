import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User, Eye, Bot } from 'lucide-react';

import { getPostBySlug, getAllPosts } from '@/lib/blog-data';
import { generateBlogSummary } from '@/ai/flows/generate-blog-summary-flow';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from '@/components/common/social-share';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | Rimsha's Tech Blogs`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { summary } = await generateBlogSummary({ blogPostContent: post.content });

  return (
    <article className="container max-w-4xl mx-auto py-12 md:py-20 px-4">
      <header className="mb-8 md:mb-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <h1 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>{post.views.toLocaleString()} views</span>
          </div>
        </div>
      </header>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 md:mb-12 shadow-lg shadow-primary/10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          data-ai-hint={post.imageHint}
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-8 md:mb-12 p-6 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm">
        <h2 className="flex items-center gap-3 font-headline text-xl font-semibold mb-3 text-primary">
          <Bot className="h-6 w-6" />
          AI-Generated Summary
        </h2>
        <p className="text-muted-foreground italic">{summary}</p>
      </div>

      <div
        className="prose prose-invert prose-lg max-w-none mx-auto
                   prose-headings:font-headline prose-headings:text-foreground prose-headings:font-semibold
                   prose-p:text-muted-foreground
                   prose-a:text-primary hover:prose-a:text-accent prose-a:transition-colors
                   prose-strong:text-foreground
                   prose-blockquote:border-primary prose-blockquote:text-muted-foreground
                   prose-code:bg-secondary prose-code:p-1 prose-code:rounded-md prose-code:text-foreground
                   "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-6">
        <SocialShare title={post.title} url={`/blog/${post.slug}`} />
        <Button variant="outline" asChild>
          <a href={post.bloggerUrl} target="_blank" rel="noopener noreferrer">
            Read on Original Platform
          </a>
        </Button>
      </div>
    </article>
  );
}
