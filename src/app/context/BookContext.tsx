'use client'
import React, { createContext, useState } from 'react';
export const BooksContext=createContext({});

const BooksProvider = ({children}) => {

const[readBooks,setReadBooks]=useState([]);
const[wishlist,setWhislist]=useState([])
const sharedData={
    readBooks,setReadBooks,wishlist,setWhislist
}





    return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
};

export default BooksProvider;