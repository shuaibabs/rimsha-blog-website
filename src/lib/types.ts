export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  imageHint: string;
  excerpt: string;
  content: string;
  tags: string[];
  bloggerUrl: string;
  views: number;
}
