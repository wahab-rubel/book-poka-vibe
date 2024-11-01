import React, { useEffect, useState } from 'react'
import Book from '../Book/Book';

function Books() {
 const [books, setBooks] = useState([]);


 useEffect(() => {
  fetch('/public/data/booksData.json')
  .then(res => res.json())
  .then(data => setBooks(data))
 }, [])
  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>Books</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
         books.map(book => <Book book={book} key={book.bookId}></Book>)
        }
       </div>
    </div>
  )
}

export default Books


/**
 * 1. state to store books
 * 2. useEffect
 * 
 * 
 */