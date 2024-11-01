import { key } from 'localforage';
import React from 'react';
import { Link } from 'react-router-dom';

function Book({ book }) {
  const { image, bookName, author, tags, bookId, category, rating, totalPages, review, publisher, yearOfPublishing } = book; 

  return (
    <Link to={`/books/${bookId}`}>
    <div className="container mx-auto card bg-base-100 w-96 shadow-xl p-6">
      <figure className='bg-blue-400 py-8 rounded-2xl'>
        <img src={image} className='h-[166px]' alt={bookName} />
      </figure>
      <div className="card-body">
      <div className='flex justify-between items-center shadow-lg mb-3'>
      {
        tags.map((tag, index) => <button
        key={index}
        className="btn btn-sm text-green-400">{tag}</button>)
      }
      </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Author: {author}</p>
        <div>Publisher: {publisher}</div>
        <div>Year of Publish: {yearOfPublishing}</div>
        <div className="border-t-2 border-dashed">Category: {category}</div>
        <div>Rating: {rating}</div>
        <div>TotalPages: {totalPages}</div>
        <div className="card-actions justify-between mt-6">
          <div className="badge badge-outline">Fashion</div>
          <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input
         type="radio"
         name="rating-2"
        className="mask mask-star-2 bg-orange-400"
         defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
        </div>
        </div>
      </div>
      <div>{review}</div>
    </div>
    </Link>
  );
}

export default Book;
