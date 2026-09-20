import React from 'react'

const BookDetailLoadingg = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="flex flex-col items-center justify-center text-center">

        <span className="loading loading-spinner loading-lg text-primary"></span>

        <h2 className="mt-5 text-xl sm:text-2xl font-bold">
          Book Detail Page Loading...
        </h2>

        <p className="mt-2 text-sm sm:text-base text-base-content/60">
          Please wait while we load the page
        </p>

      </div>
    </div>
  )
}

export default BookDetailLoadingg