import { getAllPosts } from '@/lib/blog-data';
import { BlogList } from '@/components/blog/blog-list';
import type { BlogPost } from '@/lib/types';

export const metadata = {
  title: 'Future of Robotics | Rimsha\'s Tech Blogs',
  description: 'Discover the latest advancements in the field of robotics and automation.',
};

export default function RoboticsPage() {
  const allPosts = getAllPosts();
  const roboticsPosts = allPosts.filter(post => 
    post.tags.includes('Robotics') || post.tags.includes('Automation')
  );

  return (
    <div>
      <section className="w-full pt-20 pb-12 md:pt-28 md:pb-20 text-center bg-background/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Future of Robotics
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Insights into automation, humanoid robots, and their impact on our world.
          </p>
        </div>
      </section>
      <BlogList posts={roboticsPosts} />
    </div>
  );
}
