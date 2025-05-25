
import { Categories } from "@/components/Blog/Categories"
import { PublishedAt } from "@/components/Blog/PublishedAtProps"
import { POST_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import {components} from "@/sanity/portableTextComponents";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="grid grid-cols-1 md:mx-auto gap-6 px-4 py-8 md:p-12">

        {post?.mainImage ? (
            <Image
            className="w-full h-[200px] md:h-[300px]"
            src={urlFor(post.mainImage)
                .width(800)
                .height(300)
                .quality(80)
                .auto("format")
                .url()}
            alt={post?.mainImage?.alt || ""}
            width="800"
            height="300"
            />
      ) : null}
      <h1 className="text-2xl md:text-4xl font-bold text-balance">{post?.title}</h1>
      
      <div className='flex bg-slate-200 p-4 gap-4 rounded-md'>
        <span className='relative w-[80px] h-[80px]'>
          {post?.author?.image ? (
            <Image
              className="rounded-full"
              src={urlFor(post.author.image)
                .width(100)
                .height(100)
                .quality(80)
                .auto("format")
                .url()}
              alt={post?.author?.name || ""}
              width="100"
              height="100"
            />
          ) : null}
        </span>

        <article className="space-y-1">
          <p className="font-medium">{post?.author?.name}</p>
          <PublishedAt publishedAt={post?.publishedAt}/>  
          <Categories categories={post?.categories} />
        </article>
      </div>
      <hr />

      {post?.body ? (
        <div className="prose text-justify">
          <PortableText value={post.body} components={components}/>
        </div>
      ) : null}
      
      <Link href="/blog" className="bg-slate-100 rounded-md p-2 text-sm w-[160px] text-amber-950">&larr; Back to all blogs</Link>
    </main>
  );
}