import React from "react";

type InputData = {
  companyName: string;
  numberOfUsers: number;
  numberOfProducts: number;
  percentage: number;
};

const recentInputs: InputData[] = [
  {
    companyName: "ABC Inc.",
    numberOfUsers: 50,
    numberOfProducts: 100,
    percentage: 50,
  },
  {
    companyName: "XYZ Ltd.",
    numberOfUsers: 30,
    numberOfProducts: 60,
    percentage: 50,
  },
];

const RecentInputs: React.FC = () => {
  return (
    <table
      style={{ borderCollapse: "collapse", width: "100%" }}
      className="mt-10"
    >
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Company Name</th>
          <th style={tableHeaderStyle}>Number of Users</th>
          <th style={tableHeaderStyle}>Number of Products</th>
          <th style={tableHeaderStyle}>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {recentInputs.map((input, index) => (
          <tr key={index}>
            <td style={tableCellStyle}>{input.companyName}</td>
            <td style={tableCellStyle}>{input.numberOfUsers}</td>
            <td style={tableCellStyle}>{input.numberOfProducts}</td>
            <td style={tableCellStyle}>{input.percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  borderBottom: "2px solid #ddd",
  padding: "12px",
  textAlign: "center",
};

const tableCellStyle: React.CSSProperties = {
  borderBottom: "1px solid #ddd",
  padding: "12px",
  textAlign: "center",
};

export default RecentInputs;
