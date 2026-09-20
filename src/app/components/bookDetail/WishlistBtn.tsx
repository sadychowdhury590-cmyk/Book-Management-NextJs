'use client'
import { BooksContext } from '@/app/context/BookContext';
import { Ibook } from '@/types/books.types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistBtn = ({book}:{book:Ibook}) => {
    const{wishlist,setWhislist}=useContext(BooksContext)
    const handleWishlistBtn=()=>{
        setWhislist([...wishlist,book])
        toast.success(`Successfully added to WishList ${book.bookName}`)
    }
    return   <button onClick={()=>handleWishlistBtn()} className="btn rounded-full border-gray-300 bg-white px-8 text-gray-700 hover:bg-gray-900 hover:text-white">
                  Add to Wishlist ♡
                </button>
};

export default WishlistBtn;