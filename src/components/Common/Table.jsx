import React from "react";
import "./table.css";
const Table = ({ headings, children }) => {
  return (
    <table className="common_table">
      <thead>
        {headings.map((item, index) => (
          <th key={index}>{item}</th>
        ))}
      </thead>
      {children}
    </table>
  );
};

export default Table;
