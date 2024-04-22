import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import HookManager from '@/services/HookManager';

/**
 * Custom tooltip for the chart
 * @function CustomTooltip
 * @param {object} props - The props of the component
 * @param {boolean} props.active - The active state of the tooltip
 * @param {array} props.payload - The payload of the tooltip
 * @return {JSX.Element} - The tooltip component
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

/**
 * User activity component
 * @function UserActivity
 * @param {object} props - The props of the component
 * @param {string} props.id - The id of the user
 * @return {JSX.Element} - The component
 */
const UserActivity = ({ id }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const hookManager = new HookManager();
    hookManager.getUserActivity(id, setUserData);
  }, [id]);

  // Convert data to chart format
  const chartData = userData?.sessions.map((session, index) => {
    return {
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

  // Calculate ticks for YAxis
  const calculateYAxisTicks = (min, max) => {
    const middle = (min + max) / 2;
    return [min, middle, max];
  };

  // Calculate values for YAxis
  const minPoids = chartData
    ? Math.min(
        ...chartData.map((session) => {
          return session.kilogram;
        }),
      ) - 1
    : 0;

  const maxPoids = chartData
    ? Math.max(
        ...chartData.map((session) => {
          return session.kilogram;
        }),
      ) + 1
    : 0;

  // Calculate ticks for YAxis
  const yAxisTicks = calculateYAxisTicks(minPoids, maxPoids);

  return (
    <div className='topGraph'>
      <ResponsiveContainer
        width='90%'
        height={180}
        style={{ margin: '0 auto' }}
      >
        <h2>Activité quotidienne</h2>
        <BarChart data={chartData}>
          {/* slice is used for not display the first line of XAxis, only the middle and top dashlines */}
          {yAxisTicks.slice(1).map((tick, index) => {
            return (
              <ReferenceLine
                key={`${index}-${tick}`}
                yAxisId='right'
                y={tick}
                strokeDasharray='3 3'
                stroke='#ccc'
              />
            );
          })}
          {/* Setting up X and Y axes with custom ticks */}
          <XAxis
            dataKey='day'
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            axisLine={{ stroke: '#9B9EAC', strokeWidth: 1 }}
            margin={{ left: 0 }}
            padding={{ left: -50, right: -50 }}
          />
          <YAxis yAxisId='left' hide />
          <YAxis
            yAxisId='right'
            orientation='right'
            domain={[minPoids, maxPoids]}
            ticks={yAxisTicks}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            tickMargin={25}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => {
              return value === 0 ? '' : value;
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              color: '#282D30',
              fontSize: '14px',
              top: '-80px',
            }}
            iconType='circle'
            verticalAlign='top'
            align='right'
            iconSize={8}
          />
          <Bar
            key='bar-1'
            yAxisId='right'
            dataKey='kilogram'
            fill='#282D30'
            name='Poids (kg)'
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId='left'
            dataKey='calories'
            fill='#ff0101'
            name='Calories brûlées (kCal)'
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivity;
