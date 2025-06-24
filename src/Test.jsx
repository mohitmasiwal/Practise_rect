 import React from 'react';

const Test = ({ name, loding }) => {
  return (
    <>
      <h2>Hello, {name}</h2>
      <p>Loading status: {loding ? "True" : "False"}</p>
    </>
  );
};

export default Test;
