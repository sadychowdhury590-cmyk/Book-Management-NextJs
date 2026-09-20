import Image from "next/image";
import { Ibook } from "@/types/books.types";
import ReadNowBtn from "@/app/components/bookDetail/ReadNowBtn";
import WishlistBtn from "@/app/components/bookDetail/WishlistBtn";

interface BookDetail {
  params: Promise<{
    bookId: string;
  }>;
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailPage = async ({ params }: BookDetail) => {
  const { bookId } = await params;

  const booksData = await getData();

  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(bookId)
  );

  if (!book) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">
          Book not found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f9f7] px-4 py-10 md:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          Home / Books /{" "}
          <span className="font-medium text-gray-800">
            {book.bookName}
          </span>
        </div>

        {/* Main Details */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="grid md:grid-cols-2">

            {/* Book Image */}
            <div className="flex min-h-[450px] items-center justify-center bg-gray-100 p-8 md:min-h-[600px]">
              <div className="relative h-[380px] w-[270px] overflow-hidden rounded-lg shadow-2xl transition duration-500 hover:scale-105 md:h-[480px] md:w-[330px]">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Book Information */}
            <div className="flex flex-col justify-center p-7 md:p-12">

              {/* Category */}
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                  {book.category}
                </span>

                {book.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-4 text-base text-gray-500">
                Written by{" "}
                <span className="font-semibold text-gray-800">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex text-xl text-yellow-400">
                  ★★★★★
                </div>

                <span className="font-semibold text-gray-800">
                  {book.rating}
                </span>

                <span className="text-sm text-gray-400">
                  / 5.0
                </span>
              </div>

              {/* Description */}
              <p className="mt-7 text-sm leading-7 text-gray-600 md:text-base">
                {book.review}
              </p>

              {/* Book Info */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-gray-200 py-6 sm:grid-cols-4">
                <div>
                  <p className="text-xs text-gray-400">Pages</p>
                  <p className="mt-1 font-semibold text-gray-800">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Published</p>
                  <p className="mt-1 font-semibold text-gray-800">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Publisher</p>
                  <p className="mt-1 font-semibold text-gray-800">
                    {book.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">Category</p>
                  <p className="mt-1 font-semibold text-gray-800">
                    {book.category}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ReadNowBtn book={book}/>

              <WishlistBtn book={book}/>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section
        <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-10">
          <h2 className="text-2xl font-bold text-gray-900">
            About This Book
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-600 md:text-base">
            {book.review}
          </p>
        </div> */}

      </div>
    </main>
  );
};

export default BookDetailPage;