import React from 'react'
import BookCard from '../BooksAll/BooksCard'
import { Ibook } from '@/types/books.types'

interface ListCardProps {
  books: Ibook[]
  emptyText: string
}

const ListCard = ({ books, emptyText }: ListCardProps) => {
  return (
    <>
      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {books.map((book: Ibook) => (
            <BookCard
              book={book}
              key={book.bookId}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 sm:py-16">
          <h2 className="text-lg sm:text-xl font-semibold">
            {emptyText}
          </h2>

          <p className="text-gray-500 text-sm mt-2 text-center">
            Your books will appear here.
          </p>
        </div>
      )}
    </>
  )
}

export default ListCard