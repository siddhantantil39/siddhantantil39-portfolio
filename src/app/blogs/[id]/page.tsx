import { getSortedPostsData, getAllPostIds } from '@/app/lib/Posts';
import Date from '@/app/components/Date';
import Link from 'next/link';
import BlogPostContent from '@/app/components/BlogPostContent';

export type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
  subHeadings: string[];
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
    <article className='mx-auto max-w-3xl px-4 py-8'>
        <header className="mb-8 border-b border-primary/10 pb-6">
        <h1 className="text-4xl font-bold leading-tight text-primary font-montserrat">{post.title}</h1>
        <div className="mt-3 text-sm text-secondary-300 font-montserrat">
          <Date dateString={post.date} />
        </div>
        </header>
        <BlogPostContent html={post.content} />
        <Link className="mt-8 inline-flex text-blue-500 hover:text-blue-700 text-base font-bold" href="/blogs">← Go back</Link>    
      </article>
  );
}
