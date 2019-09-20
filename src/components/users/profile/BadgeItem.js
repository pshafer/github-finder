import React from "react";

const BadgeItem = ({ type, label, value }) => {
  return (
    <div className={`badge badge-${type}`}>
      {label}: {value}
    </div>
  );
};

export default BadgeItem;
