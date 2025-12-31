import { getSortedPostsData, getAllPostIds } from '@/app/lib/Posts';
import Date from '@/app/components/Date';
import utilStyles from '@/app/utils.module.css'
import Link from 'next/link';

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
    <article className='px-4'>
        <h1 className={utilStyles.headingLg}>{post.title}</h1>
        <div className={utilStyles.headingMd}>
          <Date dateString={post.date} />
        </div>
        <div className={utilStyles.mdContentH2} 
             dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link className="text-blue-500 hover:text-blue-700 py-4 text-lg font-bold" href="/blogs">← Go back</Link>    
      </article>
  );
}