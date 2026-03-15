import type { BlogPost } from './types';
import { PlaceHolderImages } from './placeholder-images';

const blogImage = PlaceHolderImages.find(p => p.id === 'blog-main');

const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-ai-revolution',
    title: 'The AI Revolution: How Artificial Intelligence is Changing Our World',
    author: "Rimsha",
    date: '2026-03-15',
    image: blogImage?.imageUrl || 'https://picsum.photos/seed/110/600/400',
    imageHint: blogImage?.imageHint || 'AI robot',
    excerpt: 'An exploration of the profound impact of Artificial Intelligence on society, industry, and our daily lives. Read the full post on my Blogger site.',
    content: ``,
    tags: ['AI', 'Blogger', 'Tech'],
    bloggerUrl: 'https://rimshatechblogs.blogspot.com/2026/03/the-ai-revolution-how-artificial.html',
    views: 9999
  }
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(count: number): BlogPost[] {
  return posts.sort((a, b) => b.views - a.views).slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}
