import React from 'react';
import { Link } from 'react-router-dom';
import meteorLogo from '../images/meteorLogo.png';
import Path from '../routes/name';

const BookList = () => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-square overflow-hidden bg-gray-200 group-hover:opacity-75">
        <img src={meteorLogo} alt="Meteor" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-gray-500">
          <Link to={Path.BookDetail}>
            <span aria-hidden="true" className="absolute inset-0"></span>
          </Link>
        </h3>
        <p className="text-sm font-medium text-gray-500">By Author</p>
        <div className="flex justify-center items-center mt-6 h-10 w-full rounded-full bg-gray-300">
          Loaned
        </div>
      </div>
    </div>
  );
};

export default BookList;
