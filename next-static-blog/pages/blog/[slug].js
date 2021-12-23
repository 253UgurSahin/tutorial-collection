import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';

export default function PostPage({ data: { title, date, cover_image }, slug, content, }) {
    return (
        <>
            <div className="w-full flex flex-row justify-between">
                <Link href="/">
                    <small className="cursor-pointer">Go Back</small>
                </Link>
                
                <small className="post-date">Posted on {date}</small>
            </div>
            
            <div className="relative h-vh-50 bg-center bg-cover bg-no-repeat w-full my-3 object-fill rounded-2xl" style={{ backgroundImage: `url(${cover_image})`,  }}></div>

            <div className="">
                <div className="max-w-screen-md mx-auto">
                    <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:texl-6xl transition hover:text-purple-500">{title}</h1>
                </div>

                <div className="prose mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map((filename) => ({ params: { slug: filename.replace('.md', ''), }, }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');

    const { data, content } = matter(markdownWithMeta);

    return {
        props: {
            data,
            slug,
            content,
        },
    }
}
