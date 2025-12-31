import {getSortedPostsData} from '@/app/lib/Posts';
import Link from 'next/link';

export default async function BlogPage(){
    const allPostsData = await getSortedPostsData();

    return(
        <div>
            <section className="px-8 pb-8 pt-6">
                <h2 className="text-4xl leading-tight my-4">Blogs</h2>
                <ul className="list-none p-0 m-0">
                {allPostsData.map(({ id, date }) => (
                    <li className="mb-5" key={id}>
                         <span className="text-lg font-bold text-blue-500 font-montserrat">
                            <Link href={`/blogs/${id}`}>{id}</Link>
                         </span>
                         <span className='px-6'>{date}</span>
                        <br />
                    </li>
                ))}
                </ul>
            </section>  
        </div>
    )
}