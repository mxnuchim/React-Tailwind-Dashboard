import { CashIcon, CreditCardIcon } from '@heroicons/react/outline';
import React from 'react';
import Chart from './chart/Chart';
import { InvestDB } from './utils/InvestmentsDB';
import InvestItem from './InvestItem';

function RightPart() {
  return (
    <div className='col-span-3  flex flex-col w-full px-20'>
      {/* top section */}
      <div className='flex flex-col items-start justify-start'>
        <h2 className='text-lg font-bold leading-8'>
          Good morning, Blessing 🌥️
        </h2>
        <h3 className='text-sm text-gray-600 leading-0'>
          Check out your dashboard summary
        </h3>
      </div>
      <div className='border-t border-gray-200 w-full my-4' />
      {/* chart */}
      <div className='w-full items-start justify-start flex flex-col px-12 py-2 '>
        <Chart />
      </div>
      {/* bottom part */}
      <div className='w-full items-center justify-between flex py-6'>
        <div className='w-[40%] py-5'>
          <h1 className='text-xl font-bold xl:text-3xl py-4 '>
            {' '}
            Top locations{' '}
          </h1>
          <div className='flex flex-col items-center justify-center space-x-6 overflow-x-auto w-full py-4 '>
            {InvestDB.map((item) => (
              <InvestItem item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className='w-[40%] py-5'>
          <h1 className='text-xl font-bold xl:text-2xl py-4 '>
            {' '}
            Top Referral Source{' '}
          </h1>
          <div className='flex flex-col items-center justify-center space-x-6 overflow-x-auto w-full py-4 '>
            {InvestDB.map((item) => (
              <InvestItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPart;
