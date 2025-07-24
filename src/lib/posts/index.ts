import type { PageLoad } from './$types';

interface Post {
  slug: string;
  metadata: {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
  };
}

// Collect all .md/.svx files inside lib/posts
const postFiles = import.meta.glob('./*.{md,svx}');

export async function getAllPosts(): Promise<Post[]> {
  const iterablePosts = Object.entries(postFiles);

  const posts: Post[] = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const { metadata } = (await resolver()) as any;
      const slug = path
        .split('/')
        .pop()!
        .replace(/\.(md|svx)$/, '');
      return { slug, metadata };
    })
  );

  return posts.sort((a, b) => +new Date(b.metadata.date) - +new Date(a.metadata.date));
}
