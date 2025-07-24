import { getAllPosts } from '$lib/posts';

export const load = async () => ({
  posts: await getAllPosts()
});
