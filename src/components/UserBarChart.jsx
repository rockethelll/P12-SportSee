import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import getData from '@/services/getData';

export default function UserBarChart() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData('USER_ACTIVITY', id);
      setData(request?.data.sessions);
    };
    fetchData();
  }, [id]);
  if (data.length === 0) return null;
  //format data.day to convert it to a number and start from 1
  for (let i = 0; i < data.length; i++) {
    data[i].day = i + 1;
  }

  /**
   * CustomTooltip function.
   * @param {Object} props - The props object containing active and payload properties.
   * @param {boolean} props.active - Indicates whether the tooltip is active.
   * @param {Array} props.payload - The payload array containing data points.
   * @returns {JSX.Element|null} A JSX element representing the tooltip content, or null if the tooltip is not active.
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div
          style={{
            backgroundColor: '#ff0101',
            padding: '5px',
            color: 'white',
            fontSize: '12px',
          }}
        >
          {payload.map((item, index) => {
            return (
              <p
                key={index}
              >{`${item.value} ${item.dataKey === 'kilogram' ? 'kg' : 'Kcal'}`}</p>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='mb-8 h-80 w-[650px] lg:h-72 2xl:h-90 xl:w-[750px] 2xl:w-[835px] rounded-md bg-tertiary shadow-custom p-6'>
      <div className='flex justify-between mb-5 mr-5'>
        <h2 className='text-base font-bold'>Activité quotidienne</h2>
        <div className='flex'>
          <div className='flex items-center'>
            <div className='self-center w-2 h-2 ml-8 rounded-full bg-primary' />
            <div className='text-sm ml-2.5 text-customGrey'>Poids (kg)</div>
          </div>
          <div className='flex items-center'>
            <div className='self-center w-2 h-2 ml-8 rounded-full bg-secondary' />
            <div className='text-sm ml-2.5 text-customGrey'>
              Calories brûlées (kCal)
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={200}>
        <BarChart data={data} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray='3' />
          <XAxis
            dataKey='day'
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            axisLine={{ stroke: '#9B9EAC', strokeWidth: 1 }}
            dy={15}
            stroke='1 1'
            padding={{ left: -43 }}
          />
          <YAxis
            yAxisId='kilogram'
            dataKey='kilogram'
            type='number'
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount='3'
            axisLine={false}
            orientation='right'
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            dx={15}
          />
          <YAxis
            yAxisId='calories'
            dataKey='calories'
            type='number'
            domain={['dataMin - 20', 'dataMax + 10']}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId='kilogram'
            dataKey='kilogram'
            fill='#282D30'
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId='calories'
            dataKey='calories'
            fill='#E60000'
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
