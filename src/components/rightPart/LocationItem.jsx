import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

function LocationItem({ item }) {
  const { country, count, source, percent } = item; //destructuring

  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCountryCode(data[0].alpha2Code);
        }
      })
      .catch((error) => console.log(error));
  }, [country]);

  return (
    <div className='w-full py-2 px-2 items-center justify-between flex'>
      {/* icon + text */}
      <div className='flex items-center justify-center space-x-4 w-full  '>
        <div className='bg-[#DBEEF4] rounded-full py-2 px-2'>
          <ReactCountryFlag
            className='emojiFlag'
            countryCode={countryCode}
            style={{
              fontSize: '1em',
              lineHeight: '1em',
            }}
          />
        </div>
        <div className='w-full flex gap-2 items-center justify-start'>
          <h1 className='font-bold'>{country}</h1>
          <h1 className='font-bold'>{percent} %</h1>
        </div>
      </div>
    </div>
  );
}

export default LocationItem;
