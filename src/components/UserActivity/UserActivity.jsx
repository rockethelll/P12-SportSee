// import {
//   Bar,
//   BarChart,
//   Legend,
//   ReferenceLine,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from 'recharts';
// import useFetchActivity from '@/api/useFetchMainData';
// import { USER_ACTIVITY } from '@/data/data';

const UserActivity = () => {
  // const { userData } = useFetchActivity(USER_ACTIVITY, +id);
  // console.log('userData from UserActivity page', userData);

  return (
    <div>TEST graph</div>
    // <div className="topGraph">
    //   <ResponsiveContainer
    //     width="95%"
    //     height={180}
    //     style={{ margin: '0 auto' }}
    //   >
    //     <h2>Activité quotidienne</h2>
    //     <BarChart data={sessions}>
    //       <ReferenceLine
    //         y={70}
    //         strokeDasharray="3 3"
    //         stroke="#ccc"
    //         yAxisId="right"
    //       />
    //       {/* <CartesianGrid strokeDasharray="2 2" vertical={false} /> */}
    //       <XAxis dataKey="name" tickLine={false} />
    //       <YAxis
    //         orientation="right"
    //         stroke="#282D30"
    //         ticks={[69, 70, 71, 72, 200]}
    //         tickLine={false}
    //       />
    //       <Tooltip wrapperStyle={{ background: '#ff0101', color: 'white' }} />
    //       <Legend
    //         iconType="circle"
    //         verticalAlign="top"
    //         align="right"
    //         iconSize={8}
    //         style={{ marginRight: '10px' }}
    //       />
    //       <Bar
    //         dataKey="kilogram"
    //         name="Poids (kg)"
    //         fill="#020203"
    //         barSize={10}
    //       />
    //       <Bar
    //         dataKey="calories"
    //         name="Calories brûlées (kCal)"
    //         fill="#ff0101"
    //         barSize={10}
    //         radius={[10, 10, 0, 0]}
    //       />
    //     </BarChart>
    //   </ResponsiveContainer>
    // </div>
  );
};

export default UserActivity;
