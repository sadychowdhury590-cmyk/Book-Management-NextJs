import React from 'react';
import BooksCard from './BooksCard';
import { Ibook } from '@/types/books.types';
const getData=async()=>{
    const res=await fetch("http://localhost:3000/booksData.json")
    const data=await res.json()
    return data
}
const BooksPage = async() => {
    const booksData=await getData()
    
    return (
        <div className="grid container mx-auto px-10 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {booksData.slice(0,6).map((book:Ibook) => {
      return <BooksCard key={book.bookId} book={book} />;
    })}
  </div>
    );
};

export default BooksPage;