import React from 'react';
import Chart from './chart/Chart';
import LocationItem from './LocationItem';

import axios from 'axios';
import { useEffect, useState } from 'react';
import ReferralItem from './ReferralItem';
import PieChart from './chart/PieChart';
import { sampleData } from './utils/sampleData';

function RightPart() {
  const [data, setData] = useState(sampleData);

  return (
    <div className="col-span-3 flex flex-col w-full px-3 md:px-20">
      {/* top section */}
      <div className="flex flex-col items-start justify-start">
        <h2 className="text-lg font-bold leading-8">
          Good morning, Manuchim 🌥️
        </h2>
        <h3 className="text-sm text-gray-600 leading-0">
          Check out your dashboard summary
        </h3>
      </div>
      <div className="border-t border-gray-200 w-full my-4" />
      {/* chart */}
      <div className="w-full">
        <Chart />
      </div>
      {/* bottom part */}
      <div className="w-full justify-between items-start flex flex-col md:flex-row py-6 px-12">
        <div className="py-5 flex items-center justify-center gap-5">
          <div>
            <h1 className="text-xl font-bold xl:text-3xl "> Top locations </h1>
            <div className="flex flex-col items-center justify-center overflow-x-auto w-full py-4 ">
              {data &&
                data?.top_locations?.map((item) => (
                  <LocationItem item={item} key={item.id} />
                ))}
            </div>
          </div>
          <div className="hidden md:flex">
            <PieChart
              data={data && data?.top_locations}
              title="Location"
              isLocation={true}
            />
          </div>
        </div>
        <div className="py-5 flex items-center justify-center gap-5">
          <div>
            <h1 className="text-xl font-bold xl:text-3xl "> Top sources </h1>
            <div className="flex flex-col items-center justify-center overflow-x-auto w-full py-4 ">
              {data &&
                data?.top_sources?.map((item) => (
                  <ReferralItem item={item} key={item.id} />
                ))}
            </div>
          </div>
          <div className="hidden md:flex">
            <PieChart
              data={data && data?.top_locations}
              title="Source"
              isLocation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPart;
