const ChartCard = ({ children, backgroundColor }) => {
  return (
    <div className='wrapper-card' style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export default ChartCard;
