import Link from 'next/link';

export default function Post({ post }) {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="relative h-62 w-full mb-3">
                    <img src={post.data.cover_image} alt={post.data.title} className="w-full object-fill rounded-2xl" />
                </div>

                <div className="mb-10">
                    <div className="flex flex-wrap ">
                        <div className="w-full text-sm flex items-center text-gray-600">                                
                            <span className="text-gray-400 whitespace-nowrap mr-3">Posted on {post.data.date}</span>
                        </div>

                        <div className="flex items-center w-full justify-between mb-2">
                            <h2 className="text-2xl font-bold mr-auto cursor-pointer transition hover:text-purple-500 truncate">{post.data.title}</h2>
                        </div>

                        <div className="w-full">
                            <p>{post.data.excerpt}</p>
                        </div>
                    </div>                       
                </div>

                <Link className="" href={`/blog/${post.slug}`}>
                    <button className="transition ease-in duration-300 self-end h-10 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600" >
                        <span>Read More</span>
                    </button>                    
                </Link>
            </div>
        </>
    )
}
