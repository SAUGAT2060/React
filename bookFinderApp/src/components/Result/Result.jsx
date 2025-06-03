import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Result() {
  const book = useLoaderData();

  if (!book || !book.volumeInfo) {
    return <div>Book not found or data incomplete.</div>;
  }

const title = book.volumeInfo.title;
const authors = book.volumeInfo.authors;
const imageLinks = book.volumeInfo.imageLinks;
const description = book.volumeInfo.description;


  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-700 mb-4">By {authors?.join(', ')}</p>
      <img
        className="w-40 mb-4"
        src={imageLinks?.thumbnail}
        alt={title}
      />
      <p className="text-sm text-gray-600">{description || 'No description available.'}</p>
    </div>
  );
}

export default Result;
