import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Area,
  AreaChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import ChartCard from '@/components/ChartCard/ChartCard';
import getData from '@/services/api/getData';

const UserAreaChart = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData('USER_AVERAGE_SESSIONS', id);

      // Convert the day number to a string
      const convertDay = request?.data.sessions.map((item) => {
        switch (item.day) {
          case 1:
            return { ...item, day: 'L' };
          case 2:
            return { ...item, day: 'M' };
          case 3:
            return { ...item, day: 'M' };
          case 4:
            return { ...item, day: 'J' };
          case 5:
            return { ...item, day: 'V' };
          case 6:
            return { ...item, day: 'S' };
          case 7:
            return { ...item, day: 'D' };
          default:
            return { ...item };
        }
      });
      setData(convertDay);
    };
    fetchData();
  }, [id]);

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
            backgroundColor: '#fff',
            padding: '5px',
            color: 'black',
            fontSize: '10px',
            border: '1px solid #ccc',
          }}
        >
          {payload.map((item, index) => {
            return <p key={index}>{`${item.value} min`}</p>;
          })}
        </div>
      );
    }
    return null;
  };

  /**
   * Renders a semi-transparent black rectangle based on the provided points, width, and height props.
   * @returns A Rectangle component with the specified props is being returned.
   */
  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x } = points[0];
    return (
      <Rectangle
        fill='#000000'
        opacity={0.1}
        x={x - 10}
        width={width}
        height={height + 200}
      />
    );
  };

  return (
    <ChartCard backgroundColor='#ff0000'>
      <div className='sessions-title'>Durée moyenne des sessions</div>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 80, left: -15, right: 10, bottom: 20 }}
        >
          <XAxis
            dataKey='day'
            interval={0}
            dy={10}
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}
            padding={{ left: 25, right: 5 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <defs>
            <linearGradient id='strokeGradient' x1='0' y1='0' x2='100%' y2='0'>
              <stop offset='0%' stopColor='#ffffff' stopOpacity={0.1} />
              <stop offset='100%' stopColor='#ffffff' stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type='monotone'
            dataKey='sessionLength'
            stroke='url(#strokeGradient)'
            strokeWidth={3}
            fillOpacity={0}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default UserAreaChart;
