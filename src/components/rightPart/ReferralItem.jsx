import React from 'react';

function ReferralItem({ item }) {
  const { source, count, percent } = item; //destructuring

  function getLogoUrl(companyName) {
    let formattedName = companyName.toLowerCase().replace(/\s/g, '-');
    return `https://logo.clearbit.com/${formattedName}.com`;
  }

  return (
    <div className='w-full py-2 items-center justify-between flex'>
      {/* icon + text */}
      <div className='flex items-center justify-center space-x-4 w-full  '>
        <div className='bg-[#DBEEF4] rounded-full py-2 px-2'>
          <img src={getLogoUrl(source)} alt='' className='w-5 h-4' />
        </div>
        <div className='w-full flex gap-2 items-center justify-start capitalize'>
          <h1 className='font-bold'>{source}</h1>
          <h1 className='font-bold'>{percent} %</h1>
        </div>
      </div>
    </div>
  );
}

export default ReferralItem;
