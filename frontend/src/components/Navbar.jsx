import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import meteorLogo from '../images/meteorLogo.png';
import Path from '../routes/name';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="shadow-sm w-full bg-gray-800 sticky top-0 left-0 z-40 p-4 mb-10 border border-2 border-gray-800 border-b-red-400">
      <div className="flex flex-col md:flex-row items-start md:justify-between bg-gray-800 -z-40 text-gray-200 py-2 md:px-10 px-7">
        {/* Left */}
        <Link to={Path.Home} className="cursor-pointer flex items-center">
          <img src={meteorLogo} alt="Meteor" width={80} />
        </Link>

        {/* Right */}
        <button
          className="icon-btn text-3xl absolute right-8 top-6 md:hidden"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineMenu className="icons" />
        </button>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1]  w-full left-0 md:w-auto md:pl-0 pl-9 transiiton-all duration-500 ease-in md:opacity-100 ${
            open ? 'top-20 opacity-100' : 'top-[-500px] opacity-0'
          }`}
        >
          <li className="nav-links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-links">
            <Link to="/">Sign Out</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
