'use client'

import { BooksContext } from '@/app/context/BookContext'
import { Ibook } from '@/types/books.types'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

interface BooksContextType {
  wishlist: Ibook[]
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>
}

const WishlistBtn = ({ book }: { book: Ibook }) => {
  const { wishlist, setWishlist }: BooksContextType =
    useContext(BooksContext)

  const handleWishlistBtn = () => {
    const alreadyAdded = wishlist.some(
      (item) => item.bookId === book.bookId
    )

    if (alreadyAdded) {
      toast.warning(`${book.bookName} is already in your wishlist`)
      return
    }

    setWishlist([...wishlist, book])

    toast.success(
      `Successfully added to Wishlist ${book.bookName}`
    )
  }

  return (
    <button
      onClick={handleWishlistBtn}
      className="btn rounded-full border-gray-300 bg-white px-8 text-gray-700 hover:bg-gray-900 hover:text-white"
    >
      Add to Wishlist ♡
    </button>
  )
}

export default WishlistBtn