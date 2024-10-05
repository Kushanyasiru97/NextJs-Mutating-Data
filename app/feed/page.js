import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

/*export const metadata ={
  title: "Browse all our X posts",
  description: "Browse all our Posts"
}*/

export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return{
    title:`Brows all our ${numberOfPosts} posts`,
    description:"Brows All our Posts"
  }

}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
