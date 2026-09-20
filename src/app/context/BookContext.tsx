'use client'

import React, {
  createContext,
  useState,
  ReactNode,
} from 'react'
import { Ibook } from '@/types/books.types'

interface BooksContextType {
  readBooks: Ibook[]
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>
  wishlist: Ibook[]
  setWishlist: React.Dispatch<React.SetStateAction<Ibook[]>>
}

export const BooksContext = createContext<BooksContextType>(
  {} as BooksContextType
)

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Ibook[]>([])
  const [wishlist, setWishlist] = useState<Ibook[]>([])

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider