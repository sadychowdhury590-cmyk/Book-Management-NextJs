'use client'

import { BooksContext } from '@/app/context/BookContext'
import React, { useContext, useState } from 'react'
import ListCard from '../components/shared/ListCard'
import { Ibook } from '@/types/books.types'

interface TwoComponents {
  readBooks: Ibook[]
  wishlist: Ibook[]
}

const ListedBooks = () => {
  const { readBooks, wishlist }: TwoComponents = useContext(BooksContext)

  const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>('rating')

//   const sortBooks = (books: Ibook[]) => {
//     return [...books].sort((a, b) => {
//       if (sortBy === 'rating') {
//         return b.rating - a.rating
//       }

//       if (sortBy === 'pages') {
//         return b.totalPages - a.totalPages
//       }

//       if (sortBy === 'year') {
//         return b.yearOfPublishing - a.yearOfPublishing
//       }

//       return 0
//     })
//   }

const sortBooks=(books:Ibook[])=>{
    return [...books].sort((a,b)=>{
        if(sortBy==='rating'){
            return b.rating - a.rating
        }

        if(sortBy==='pages'){
            return b.totalPages - a.totalPages
        }

        if(sortBy==='year'){
            return b.yearOfPublishing - a.yearOfPublishing
        }

        return 0
    })
}

  const sortedReadBooks = sortBooks(readBooks)
  const sortedWishlistBooks = sortBooks(wishlist)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

      {/* Page Title */}
      <div className="mb-6 sm:mb-8">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Listed Books
        </h1>

        {/* Sort */}
        <div className="text-center my-6">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as 'rating' | 'pages' | 'year'
              )
            }
            className="select select-success"
          >
            <option value="rating">Rating</option>
            <option value="pages">Number of pages</option>
            <option value="year">Publisher year</option>
          </select>
        </div>

        <p className="text-center text-gray-500 mt-2 text-sm sm:text-base">
          Manage your read books and wishlist
        </p>

      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift w-full">

        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />

        <div className="tab-content bg-base-100 border-base-300 p-3 sm:p-5 md:p-6">
          <ListCard
            books={sortedReadBooks}
            emptyText="No Read Books Found"
          />
        </div>

        {/* Wishlist */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-3 sm:p-5 md:p-6">
          <ListCard
            books={sortedWishlistBooks}
            emptyText="No Books in Wishlist"
          />
        </div>

      </div>
    </div>
  )
}

export default ListedBooks