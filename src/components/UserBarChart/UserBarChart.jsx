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

import getData from '@/services/api/getData';

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
    <div className='wrapper-activity'>
      <div className='head'>
        <h2>Activité quotidienne</h2>
        <div className='legend'>
          <div className='info'>
            <div className='icon black' />
            <div className='text'>Poids (kg)</div>
          </div>
          <div className='info'>
            <div className='icon red' />
            <div className='text'>Calories brûlées (kCal)</div>
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
