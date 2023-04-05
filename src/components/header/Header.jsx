import React from 'react';

function Header() {
  return (
    <div className=' w-full py-6 bg-[#F0F5F5] items-center justify-between flex px-20'>
      {/* logo */}
      <div className='items-center w-full justify-start flex space-x-4'>
        <h1 className='text-sm xl:text-lg text-gray-900 font-bold'>
          {' '}
          Dashboard{' '}
        </h1>
      </div>
    </div>
  );
}

export default Header;
