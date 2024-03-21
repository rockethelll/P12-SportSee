import PropTypes, { array } from 'prop-types';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import HookManager from '@/services/HookManager';

// Custom tooltip for the chart
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

CustomTooltip.propTypes = {
  payload: array,
};

const UserActivity = ({ id }) => {
  const [userData, setUserData] = useState();
  const hookManager = new HookManager();

  useEffect(() => {
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
  const calculateYAxisTicksTicks = (min, max) => {
    const middle = (max + min) / 2;
    return [min, middle, max];
  };

  // Calculate values for YAxis
  const minPoids = chartData
    ? Math.min(
        ...chartData.map((session) => {
          return session.kilogram;
        })
      ) - 2
    : 0;

  const maxPoids = chartData
    ? Math.max(
        ...chartData.map((session) => {
          return session.kilogram;
        })
      ) + 2
    : 0;

  // Calculate ticks for YAxis
  const yAxisTicks = calculateYAxisTicksTicks(minPoids, maxPoids);

  console.info('userData', chartData);

  return (
    <div className="topGraph">
      <ResponsiveContainer
        width="90%"
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
                yAxisId="right"
                y={tick}
                strokeDasharray="3 3"
                stroke="#ccc"
              />
            );
          })}
          {/* Setting up X and Y axes with custom ticks */}
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            axisLine={{ stroke: '#9B9EAC', strokeWidth: 1 }}
            margin={{ left: 0 }}
            padding={{ left: -50, right: -50 }}
          />
          <YAxis yAxisId="left" hide />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[minPoids, maxPoids]}
            ticks={yAxisTicks}
            tick={{ fill: '#9B9EAC', fontSize: '14px' }}
            tickMargin={30}
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
              top: '-30px',
              marginRight: '10px',
            }}
            iconType="circle"
            verticalAlign="top"
            align="right"
            iconSize={8}
          />
          <Bar
            key="bar-1"
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#ff0101"
            name="Calories brûlées (kCal)"
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
          <Scatter dataKey="cnt" fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

UserActivity.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserActivity;
