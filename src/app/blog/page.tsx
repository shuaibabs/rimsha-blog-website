import { getAllPosts } from '@/lib/blog-data';
import { BlogList } from '@/components/blog/blog-list';

export const metadata = {
  title: 'Blog | Rimsha\'s Tech Blogs',
  description: 'Explore all articles on Artificial Intelligence, Robotics, and the Future of AI.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="w-full pt-20 pb-12 md:pt-28 md:pb-20 text-center bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Knowledge Hub
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Dive into our collection of articles on AI, robotics, and future technologies.
          </p>
        </div>
      </section>
      <BlogList posts={posts} />
    </div>
  );
}
