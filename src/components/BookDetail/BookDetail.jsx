import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb'; // make sure you have this utility function correctly

function BookDetail() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  
  const book = data.find(book => book.bookId === id);

 
  if (!book) return <p>Book not found.</p>;

  const { bookId: currentBookId, image, bookName } = book;

  const handleMarkAsRead = (bookId) => {
   
    addToStoredReadList(bookId);
    console.log(`Marked book ID ${bookId} as read.`);
  };

  return (
    <div className="my-6">
      <h1>Book Details: {bookName}</h1>
      <img className="w-36" src={image} alt={bookName} />
      <div className="mt-6 mb-6">
        <button onClick={() => handleMarkAsRead(currentBookId)} type="submit" className="btn btn-outline mr-4">
          Mark as Read
        </button>
        <button type="submit" className="btn btn-outline text-white">Add to Wish List</button>
      </div>
    </div>
  );
}

export default BookDetail;
