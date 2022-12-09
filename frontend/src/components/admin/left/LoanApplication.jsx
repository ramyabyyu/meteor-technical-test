import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import meteorLogo from '../../../images/meteorLogo.png';
import API from '../../../config/api';
import apiConfig from '../../../config/apiConfig';
import serverRoute from '../../../config/serverRoutes';
import MySwal from '../../MySwal';

const LoanApplication = ({ item }) => {
  const confirmModal = (borrowingStatus) => {
    try {
      MySwal.fire({
        title: `<span class='text-${
          borrowingStatus === 'approved' ? 'green' : 'red'
        }-600'>${borrowingStatus}</span> this loan application?`,
        icon: 'question',
        showCancelButton: true,
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          API.patch(
            serverRoute.BorrowingEditStatus + item.id,
            { status: borrowingStatus },
            apiConfig.withToken
          )
            .then((response) => {
              console.log(response.data);
              MySwal.fire({
                title: response.data.data,
                icon: 'success',
              });
            })
            .catch((error) => console.log(error.response.data));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full py-2 px-2 items-cener justify-between flex">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full  ">
        <div className="w-full space-y-1">
          <h1 className="font-bold">{item.bookTitle}</h1>
          <p className="text-sm">{item.userEmail}</p>
        </div>
      </div>
      {/* price + percent */}
      <div className="w-full items-end justify-end flex">
        <p
          className="text-green-600 cursor-pointer mr-5"
          onClick={() => confirmModal('approved')}
        >
          Approve
        </p>
        <p
          className="text-red-600 cursor-pointer"
          onClick={() => confirmModal('decline')}
        >
          Decline
        </p>
      </div>
    </div>
  );
};

export default LoanApplication;
