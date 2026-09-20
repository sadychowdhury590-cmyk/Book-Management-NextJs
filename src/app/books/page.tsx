import BooksCard from '@/app/components/BooksAll/BooksCard'
import { Ibook } from '@/types/books.types';
const getData=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
    const data=await res.json()
    return data
}
const BooksPage = async() => {
    const booksData=await getData()
    
   return (
  <div className="container mx-auto px-4 py-10 md:px-10">
    {/* Heading */}
    <div className="mb-10 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
        Explore Our Collection
      </p>

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Discover Your Next Favorite Book
      </h1>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
        Browse our collection of timeless classics, inspiring stories, and
        unforgettable books curated for every kind of reader.
      </p>
    </div>

    {/* Books Grid */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {booksData.map((book: Ibook) => {
        return <BooksCard key={book.bookId} book={book} />;
      })}
    </div>
  </div>
);
};

export default BooksPage;