import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-md">{left}</div>
      <div className="col-md">{right}</div>
    </div>
  );
};

export default Row;
