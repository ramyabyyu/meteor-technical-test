import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import BookList from '../components/BookList';
import API from '../config/api';
import apiConfig from '../config/apiConfig';
import serverRoute from '../config/serverRoutes';

const Home = () => {
  const [filterData, setFilterData] = useState([]);

  const { data } = useQuery(['getAllBookCache'], async () => {
    try {
      const response = await API.get(serverRoute.BookAll);
      if (response.status === 200) {
        setFilterData(response.data.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  });

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
          {filterData?.map((book) => (
            <BookList book={book} key={book.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
