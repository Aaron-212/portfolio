import { error } from '@sveltejs/kit';

const postFiles = import.meta.glob('$lib/posts/*.{md,svx}');

export const load = async ({ params }) => {
  const { slug } = params;

  const matchKey = Object.keys(postFiles).find((path) => path.endsWith(`${slug}.md`) || path.endsWith(`${slug}.svx`));

  if (!matchKey) throw error(404, 'Post not found');

  const post = (await postFiles[matchKey]()) as any;

  return {
    PostContent: post.default,
    metadata: post.metadata
  };
};
