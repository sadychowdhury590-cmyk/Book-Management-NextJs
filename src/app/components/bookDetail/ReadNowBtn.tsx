'use client'

import { BooksContext } from "@/app/context/BookContext";
import { Ibook } from "@/types/books.types";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadNowBtn = ({book}:{book:Ibook}) => {
    const { readBooks,setReadBooks}=useContext(BooksContext)
    const handleReadBook=()=>{
              setReadBooks([...readBooks,book])
                toast.success(`Successfully added to ReadList ${book.bookName}`)
    }
    return   <button onClick={()=>handleReadBook()} className="btn rounded-full border-none bg-emerald-600 px-8 text-white hover:bg-emerald-700">
                  Read Now
                </button>
};

export default ReadNowBtn;