import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import BookList from '../components/BookList';

const Home = () => {
  return (
    <>
      <div>
        <div className="flex items-center w-1/4 mx-auto mb-10">
          <input
            type="text"
            name="search"
            id="search"
            className="form-input"
            placeholder="Search"
          />
          <label htmlFor="search">
            <AiOutlineSearch className="text-2xl ml-3" />
          </label>
        </div>
      </div>
      <div className="bg-white px-10 pb-10">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-y-4 gap-x-4">
          <BookList />
        </div>
      </div>
    </>
  );
};

export default Home;
