import "./circle.css"

const CircleProgressBar = ({percent, info, circleWidth}) => {
    const radius = 200;
    const dashArray = radius * Math.PI * 2;
  
    const dashOffset = dashArray - (dashArray * percent) / 100;
  
    return (
      <div className='progress'>
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={"40px"}
            r={radius}
            className="circle-bg"
          />
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={"40px"}
            r={radius}
            className="circle-progress"
            style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
          <text
            x="50%"
            y="50%"
            dy="0.3em"
            textAnchor="middle"
            className="circle-text"
          >
            {info}
          </text>
        </svg>
      </div>
    );
};  

export default CircleProgressBar;