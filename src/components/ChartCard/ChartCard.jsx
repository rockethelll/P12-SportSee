const ChartCard = ({ children, backgroundColor }) => {
  return (
    <div className='chart-card' style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export default ChartCard;
