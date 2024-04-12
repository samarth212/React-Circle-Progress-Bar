import './App.css'
import { useState } from 'react';
import CircleProgressBar from './CircleProgress';

function App() {

  const [val, setVal] = useState(25);

  const infos = [
    "Step 1: ____",
    "Step 2: ____",
    "Step 3: ____",
    "Step 4: ____",
  ];

  const [infoIndex, setInfoIndex] = useState(0);

  const handleClick = () => {
    const nextVal = val + 25;

    setVal(nextVal <= 100 ? nextVal : 25);

    setInfoIndex((prevIndex) => (prevIndex + 1) % infos.length);
  };

  return (
    <div>
      <CircleProgressBar percent={val}
          info={infos[infoIndex]}
          circleWidth="500"
        />
  
      <p onClick={handleClick} style={{fontFamily:"arial", fontSize:"30px", cursor: "pointer"}}>Next step</p>
    </div>
    
  );
};

export default App;
