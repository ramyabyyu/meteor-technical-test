import React from 'react';
import { FaAmbulance, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import meteorLogo from '../images/meteorLogo.png';
import API from '../config/api';
import serverRoute from '../config/serverRoutes';
import apiConfig from '../config/apiConfig';

const BookDetail = () => {
  const { id } = useParams();

  const { data } = useQuery(['bookOneCache'], async () => {
    try {
      const response = await API.get(
        serverRoute.BookOne + id,
        apiConfig.withToken
      );
      return response.data.data;
    } catch (error) {
      console.log(error.response.data);
    }
  });

  return (
    <div className="px-10 pb-10 flex justify-center items-center flex-col">
      <div className="col-span-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Detail Information
        </h1>
      </div>

      <div className="w-1/2">
        <section aria-labelledby="book-heading">
          <h2 id="book-heading" className="sr-only">
            {data?.title}
          </h2>

          <ul
            role="list"
            className="divide-y divide-gray-200 border-t border-b border-gray-200"
          >
            <li className="flex py-6 sm:py-10">
              <div className="flex-shrink-0">
                <img
                  src={meteorLogo}
                  alt="Meteor"
                  className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative flex">
                  <div className="flex-1 pr-8">
                    <div className="flex justify-between">
                      <h3 className="text-md">{data?.title}</h3>
                    </div>
                    <div className="mt-4 text-sm">
                      <p className="text-gray-500">By {data?.author}</p>
                      <p className="border-gray-200 text-gray-500">
                        {data?.pages} pages
                      </p>
                    </div>
                    <div className="mt-4 flex w-full items-center text-sm font-medium">
                      <span
                        className={`inline-flex items-center rounded-full ${
                          data?.isBorrowed ? 'bg-gray-300' : 'bg-green-300'
                        } px-2.5 py-0.5 text-xs font-medium`}
                      >
                        {data?.isBorrowed ? 'Loaned' : 'Available'}
                      </span>

                      <FaStar className="ml-4 mr-2 h-6 w-6 text-yellow-300" />
                      <span className="mr-4">4.8/5</span>
                    </div>

                    <div className="mt-6">
                      <button className="w-full rounded-md border border-transparent bg-red-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                        Loan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <div className="sticky top-24 w-1/2 h-fit">
        <section
          aria-labelledby="book-description"
          className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2
            id="book-description"
            className="text-lg font-medium text-gray-900"
          >
            Description
          </h2>

          <p className="mt-6 text-justify">
            &nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rerum ad officia corrupti saepe distinctio ex possimus
            deserunt nemo explicabo? Dolorem, beatae. Officiis cum inventore
            quisquam alias voluptates minima eaque non suscipit molestiae,
            laudantium ad tempore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda reprehenderit blanditiis voluptatem
            inventore, quisquam placeat voluptas impedit, eligendi facere,
            repellendus voluptate unde quasi sapiente rerum! Minus, culpa ipsam
            similique voluptatibus recusandae maxime cumque perspiciatis.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BookDetail;
