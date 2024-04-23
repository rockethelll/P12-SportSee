const Spinner = () => {
  return (
    <>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className='sr-only'>Loading...</span>
    </>
  );
};

export default Spinner;
