'use client'

import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {Search, ChevronLeft, ChevronRight} from 'lucide-react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
// import { Title } from './Title'
import { POST_QUERYResult } from '@/sanity/types'
// import { SanityImageSource } from '@sanity/image-url/lib/types/types'


function BlogSearch(posts : { posts : POST_QUERYResult[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    //Filter posts based on search term (show all posts if no search term is provided)
    const filteredPosts = searchTerm ?
        posts.posts.filter((post) => post && post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) : posts.posts;

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

    // Handle page changes
  const handlePageChange = (pageNumber : number ) : void => {
    setCurrentPage(pageNumber)
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Reset to first page when search term changes
  const handleSearchChange = (e : ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

   return (
    <div className="container md:mx-auto px-4 py-6">
      <div className="max-w-md mb-16">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Blog..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004A61] focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
            <Search className="h-9 w-9 text-white bg-[#004A61] p-2 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Post List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            post ? (
              <li key={post._id} className="bg-white shadow-sm rounded-lg overflow-hidden p-4 flex flex-col justify-between space">
                
                {post.mainImage ? (
                  <div className="relative mb-4 ">
                    <Image
                      className="w-full h-[250px] object-cover rounded-lg"
                      src={urlFor(post.mainImage.asset?._ref || '')
                        .width(400)
                        .height(400)
                        .quality(80)
                        .auto("format")
                        .url()  }
                      alt={post.title || "Blog post image"}
                      width={400}
                      height={300}
                    />
                  </div>
                ) : null}
              
                <h2 className='font-medium text-bold'>{post.title}</h2>
                <Link className=" p-3 text-sm bg-[#004A61] hover:bg-[#232f3f] w-1/2 text-white rounded-lg flex justify-center items-center" href={`/blog/${post.slug?.current}`}>
                  Read More
                </Link>
              </li>
            ) : null
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">No posts found matching your search</li>
        )}
      </ul>

      {/* Pagination Controls */}
      {filteredPosts.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1 ? "text-[#004A61] cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page ? "bg-[#FFDAA3] text-gray-800 font-medium" : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Results Summary */}
      <div className="text-sm text-gray-500 text-center mt-4">
        {filteredPosts.length > 0 ? (
          <p>
            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length}{" "}
            posts
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default BlogSearch