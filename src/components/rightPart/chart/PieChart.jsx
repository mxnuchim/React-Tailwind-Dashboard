import ReactEcharts from 'echarts-for-react';

export default function PieChart({ data, title, isLocation }) {
  const options = {
    series: [
      {
        name: `${title}`,
        type: 'pie',
        radius: ['40%', '70%'], // set the radius to create a donut chart
        avoidLabelOverlap: false,
        label: {
          show: false, // hide the label
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false, // hide the line connecting the label and the data point
        },
        data:
          data &&
          data.map((item) => ({
            name: isLocation ? item.country : item.source,
            value: item.percent,
          })),
      },
    ],
  };

  return (
    <ReactEcharts
      option={options}
      style={{ height: '160px', width: '160px' }}
    />
  );
}
