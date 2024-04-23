import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

import ChartCard from '@/components/ChartCard/ChartCard';
import getData from '@/services/api/getData';

const UserRadarChart = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData('USER_PERFORMANCE', id);
      const convertCategory = request?.data.map((item) => {
        switch (item.kind) {
          case 1:
            return { ...item, kind: 'Cardio' };
          case 2:
            return { ...item, kind: 'Énergie' };
          case 3:
            return { ...item, kind: 'Endurance' };
          case 4:
            return { ...item, kind: 'Force' };
          case 5:
            return { ...item, kind: 'Vitesse' };
          case 6:
            return { ...item, kind: 'Intensité' };
          default:
            return { ...item };
        }
      });
      // Reverse the array to display the radar chart in the right order
      const reverseData = convertCategory.reverse();

      setData(reverseData);
    };
    fetchData();
  }, [id]);

  return (
    <ChartCard backgroundColor='#282D30'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey='kind'
            stroke='#fff'
            fontSize={12}
            tickLine={false}
            tickMargin={30}
            tickSize={15}
            dy={5}
          />
          <Radar
            dataKey='value'
            stroke='#FF0101'
            fill='#FF0101'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default UserRadarChart;
