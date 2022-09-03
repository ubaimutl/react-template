import React from "react";

export const CircularProgress = ({
  sqSize = "200",
  strokeWidth = "3",
  percentage = "100",
  color = "var(--text-color)",
  textSize = "3em",
  title = false,
}) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className={`text-center ${title ? "mb-4" : ""}`}>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          fill="none"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          stroke={color}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          fontSize={textSize}
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${percentage}%`}
        </text>
      </svg>
      {title && (<h3 className="h3 mt-4">{title}</h3> )}
    </div>
  );
};
