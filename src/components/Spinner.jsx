import React from "react";

function Spinner() {
  return (
    <div
      style={{height: '90vh'}}
      className="container  d-flex justify-content-center  align-items-center "
    >
      <div className="spinner-grow  top-50" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
