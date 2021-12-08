import React from "react";

const Badge = React.forwardRef(({ onClick, name }, ref) => {
  return (
    <span
      className="badge bg-purple-light rounded-pill me-1 text-dark p-2 mb-2"
      onClick={onClick}
      ref={ref}
    >
      {name}
    </span>
  );
});

Badge.displayName = "Badge";
export default Badge;
