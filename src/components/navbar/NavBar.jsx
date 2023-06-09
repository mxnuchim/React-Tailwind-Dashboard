import React from 'react';
import { navLinks } from './utils/NavDB';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.jpg';
import NavItem from './NavItem';

function NavBar() {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[304px] pt-8 px-1 hidden md:flex flex-col'>
      <div className='pb-14 px-6 flex items-center justify-start'>
        <img src={logo} alt='logo' className='object-contain' />
      </div>
      <div className='space-y-4 w-full '>
        {navLinks.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}

        <span className='text-gray-500 text-xs px-8 xl:flex hidden'>
          OTHERS
        </span>
        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        <div className='w-full border-t border-gray-200' />
        <span className='text-gray-500 text-xs px-8 xl:flex hidden'>
          OTHERS
        </span>
        {navLinks.slice(6, 9).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>

      <div className=' items-center gap-3 pt-[12rem] px-7 w-full xl:flex hidden'>
        <img
          src={avatar}
          alt=''
          className='rounded-full md:rounded-full w-8 h-8'
        />
        <h3 className='text-sm font-semibold text-gray-600'>Manuchim Oliver</h3>
      </div>
    </nav>
  );
}

export default NavBar;
