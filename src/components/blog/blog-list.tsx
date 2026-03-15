"use client";

import type { BlogPost } from '@/lib/types';
import { BlogPostCard } from './blog-post-card';

export function BlogList({ posts }: { posts: BlogPost[] }) {

  return (
    <div className="container mx-auto py-12 md:py-16">
      {posts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-headline font-semibold">No Posts Found</h2>
          <p className="text-muted-foreground mt-2">There are currently no posts available.</p>
        </div>
      )}
    </div>
  );
}
