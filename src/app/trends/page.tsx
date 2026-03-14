import { getAllPosts } from '@/lib/blog-data';
import { BlogList } from '@/components/blog/blog-list';
import type { BlogPost } from '@/lib/types';

export const metadata = {
  title: 'AI Trends | Rimsha\'s Tech Blogs',
  description: 'Explore the latest trends in Artificial Intelligence.',
};

export default function AITrendsPage() {
  const allPosts = getAllPosts();
  const trendsPosts = allPosts.filter(post => 
    post.tags.includes('AI') || post.tags.includes('Future Tech')
  );

  return (
    <div>
      <section className="w-full pt-20 pb-12 md:pt-28 md:pb-20 text-center bg-background/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            AI Trends
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Cutting-edge developments and future-forward analysis of Artificial Intelligence.
          </p>
        </div>
      </section>
      <BlogList posts={trendsPosts} />
    </div>
  );
}
