import './App.css'
import CircleProgressBar from './CircleProgress';
import { useState } from 'react';

function App() {

  const [val, setVal] = useState(25);
  const [infoIndex, setInfoIndex] = useState(0)

  const infos = [
    "step 1: ____", 
    "step 2: ____",
    "step 3: ____", 
    "step 4: ____"
  ];

  const handleClick = () => {
    const nextVal = val + 25;

    setVal(nextVal <= 100 ? nextVal : 25);

    setInfoIndex((prevIndex) => (prevIndex + 1) % infos.length);

  };
  


  return (
    <div>
       <CircleProgressBar percent={val} info={infos[infoIndex]} circleWidth="500"></CircleProgressBar>
       <p onClick={handleClick}>Next step</p>
    </div>
    
  );
};

export default App;
