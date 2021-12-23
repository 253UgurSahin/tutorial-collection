import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from '../components/Head';
import Post from '../components/Post'

export default function Home({ posts }) {
    return (
        <>
            <Head desc="Dit is de homepage!" />
            
            <div className="max-w-screen-lg mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
                {
                    posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))
                }
            </div>
        </>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '');

        const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

        const { data } = matter(mdWithMeta);

        return {
            slug,
            data
        }
    });

    return {
        props: {
            posts
        }
    }
}
