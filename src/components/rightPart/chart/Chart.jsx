import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import axios from 'axios';
import { useEffect, useState } from 'react';

const apiUrl = 'https://fe-task-api.mainstack.io/';

const Chart = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  const option = {
    color: ['var(--orange)'],

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
      backgroundColor: 'rgba(0, 0, 0, 0.59)',
      borderWidth: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false,
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: data && Object.keys(data?.graph_data?.views),
        axisLabel: {
          formatter: function (value) {
            const date = new Date(value);
            const day = date.getDate();
            const month = date.toLocaleString('default', { month: 'short' });
            return `${day} ${month}`;
          },
        },
      },
    ],
    yAxis: {
      type: 'value',
      data: [0, 200, 400, 600, 800, 1000],
    },
    series: [
      {
        type: 'line',
        smooth: false,
        lineStyle: {
          color: '#FF5403',
          width: 2,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: '#FE4C00',
            },
            {
              offset: 1,
              color: 'rgba(255,144,70,0.1)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        showSymbol: false,
        data: data && Object.values(data?.graph_data?.views),
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col gap-2'>
        <h1 className='font-semibold text-xs'>Page Views</h1>
        <h1 className='font-bold text-4xl'>
          {data &&
            Object.values(data?.graph_data?.views).reduce(
              (sum, value) => sum + value,
              0
            )}
        </h1>
      </div>
      <ReactECharts option={option} />
    </>
  );
};

export default Chart;
