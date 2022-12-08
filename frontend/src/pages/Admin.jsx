import React from 'react';
import HeaderAdmin from '../components/admin/header/HeaderAdmin';
import NavbarAdmin from '../components/admin/navbar/NavbarAdmin';
import LeftPart from '../components/admin/left/LeftPart';

const Admin = () => {
  return (
    <div className="overflow-y-hidden">
      <HeaderAdmin />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <NavbarAdmin />
        <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
          <LeftPart />
        </div>
      </div>
    </div>
  );
};

export default Admin;
