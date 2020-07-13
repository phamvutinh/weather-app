import React from "react";

export const convertDate = (date) => {
  const d = new Date(date);
  const dateString = d.toString().split(" ");
  return `${dateString[0]}, ${dateString[2]} ${dateString[1]}`;
};

export const convertDegree = (CDegree, unit) => {
  switch (unit) {
    case "C":
      return (
        <>
          {parseInt(+CDegree)} <span>℃</span>
        </>
      );
    case "F":
      return (
        <>
          {parseInt(+(CDegree * 9) / 5 + 32)} <span>℉</span>
        </>
      );
    default:
      return <span>Error When ConvertDecree</span>;
  }
};
