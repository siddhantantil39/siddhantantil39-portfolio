import { getSortedPostsData, getAllPostIds } from '@/app/lib/Posts';

export type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
};

export async function generateStaticParams() {
  const posts = getAllPostIds();

  return posts.map((post: { params: { id: any; }; }) => ({
    id: post.params.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const post = (await getSortedPostsData()).find((p) => p.id === id) as Post ;

  if(!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Basic render; enhance with Markdown later */}
    </article>
  );
}