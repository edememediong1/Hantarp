import React from 'react'
import ParallaxBackground from '@/components/parallel_background'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import BlogSearch from '@/components/Blog/BlogSearch'




async function Pages() {
  const {data: posts} = await sanityFetch({query: POSTS_QUERY});
  console.log(posts)
  return (
    <div>
      <ParallaxBackground imageUrl="blog_hero.svg" height="350px">
        <div className="flex items-center justify-center  md:justify-start h-full p-8">
          <div className="max-w-xl text-center ">
            <h2 className="text-3xl font-bold mb-4 text-[#FFDAA3]">Blog</h2>
            <p className="text-base text-[#FFDAA3]">Home &gt; Blog</p>
          </div>
        </div>
      </ParallaxBackground>
      <main className="container grid grid-cols-1 gap-6 md:p-12">
        <BlogSearch posts={posts}/>
        <Link href="/">&larr; Return home</Link>
      </main>
    </div>
  );
}

export default Pages