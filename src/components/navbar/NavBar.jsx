import React from 'react';
import { navLinks } from './utils/NavDB';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import NavItem from './NavItem';

function NavBar() {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[304px] pt-8 px-1 flex flex-col'>
      <div className='pb-14 px-6 flex items-center justify-start'>
        <img src={logo} alt='logo' />
      </div>
      <div className='space-y-4 w-full '>
        {navLinks.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        <div className='w-full border-t border-gray-200' />
        <span className='text-gray-500 text-xs px-8'>OTHERS 1</span>
        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        <div className='w-full border-t border-gray-200' />
        <span className='text-gray-500 text-xs px-8'>OTHERS 1</span>
        {navLinks.slice(6, 9).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>

      <div className='flex items-center gap-3 pt-[12rem] px-7 w-full'>
        <img
          src={avatar}
          alt='profile image'
          className='rounded-full w-8 h-8'
        />
        <h3 className='text-sm font-semibold text-gray-600'>
          Blessing Daniels
        </h3>
      </div>
    </nav>
  );
}

export default NavBar;
