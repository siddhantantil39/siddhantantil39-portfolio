import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
 
const postsDirectory = path.join(process.cwd(), 'public',  'posts');
  
export  async function getSortedPostsData() {
  // Get file names under /posts
   const fileNames = fs.readdirSync(postsDirectory);
   const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

      return {
        id,
        date: matterResult.data.date,
        content: processedContent.toString(),
        ...matterResult.data,
      };
    })
  );

  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

