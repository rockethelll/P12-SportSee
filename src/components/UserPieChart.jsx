import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import ChartCard from '@/components/ui/ChartCard';

const UserPieChart = ({ data }) => {
  // Calculate the score for the pie chart : 1 - score is the second part of the pie
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - (data.todayScore || data.score) },
  ];

  return (
    <ChartCard backgroundColor='#fbfbfb'>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <circle cx='50%' cy='50%' r='30%' fill='#fff' />
          <text
            x='19%'
            y='12%'
            textAnchor='middle'
            dominantBaseline='central'
            style={{ fontSize: '15px', fontWeight: '700', fill: '#000' }}
          >
            Score
          </text>
          <text
            x='50%'
            y='45%'
            textAnchor='middle'
            dominantBaseline='middle'
            style={{ fontSize: '26px', fontWeight: '700', fill: '#282D30' }}
          >
            {score[0].value * 100}%
          </text>
          <text
            x='50%'
            y='56%'
            textAnchor='middle'
            dominantBaseline='middle'
            className='goal'
            style={{ fontSize: '16px', fontWeight: '500', fill: '#74798C' }}
          >
            de votre
          </text>
          <text
            x='50%'
            y='65%'
            textAnchor='middle'
            dominantBaseline='middle'
            className='goal'
            style={{ fontSize: '16px', fontWeight: '500', fill: '#74798C' }}
          >
            objectif
          </text>
          <Pie
            data={score}
            dataKey='value'
            innerRadius='65%'
            outerRadius='80%'
            startAngle={180}
            endAngle={-180}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill='#ff0000' />
              ) : (
                <Cell key={`cell-${entry}`} fill='#FBFBFB' stroke='#FBFBFB' />
              ),
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default UserPieChart;
