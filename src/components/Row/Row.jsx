import React from 'react';

const Row = ({ left, right }) => {
  return (
    <div className="row">
      <div className="col-md-4">{left}</div>
      <div className="col-md-7 offset-md-1">{right}</div>
    </div>
  );
};

export default Row;
