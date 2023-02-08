import Stage from './Stage.js';
import Car from './Car.js';
import BackGroundBehind from './BackGroundBehind.js';
import BackGroundFront from './BackGroundFront.js';
import ChangePages from './ChangePages.js';
import { useState } from 'react';

const Animation = (props) => {
  const [slideNum, setSlideNum] = useState(1);
  const [animation, setAnimation] = useState(true);

  let stagePosition = 
    slideNum == 1 ? [-1.5, 0, 5.5] 
    : slideNum == 2 ? [0, 0, 5.5] 
    : slideNum == 3 ? [-0.8, -0.3, 3] 
    : slideNum == 4 ? [0.9, -0.2, 3] 
    : slideNum == 5 ? [0.8, -0.3, 3] 
    : slideNum == 6 ? [0.6, 0, 3.7] 
    : slideNum == 7 ? [0, -0.3, 0.4] 
    : slideNum == 8 ? [-0.5, -0.2, 0.5] 
    : slideNum == 9 ? [0, -0.1, 0.1] 
    : slideNum == 10 ? [0.3, -0.3, 0.2] 
    : slideNum == 11 ? [0, 0, 5.5] 
    : undefined
  let stageRotation = 
    slideNum == 1 ? [0, 0, 0] 
    : slideNum == 2 ? [0, 0, 0] 
    : slideNum == 3 ? [0, 0, 0] 
    : slideNum == 4 ? [0, 0, 0] 
    : slideNum == 5 ? [0, 0, 0] 
    : slideNum == 6 ? [0, 0, 0] 
    : slideNum == 7 ? [0, 0, 0] 
    : slideNum == 8 ? [0, 0, 0] 
    : slideNum == 9 ? [0, 0, 0] 
    : slideNum == 10 ? [0, 0, 0] 
    : slideNum == 11 ? [0, 0, 0] 
    : undefined
  let carPosition = 
    slideNum == 1 ? [0, -1, 0] 
    : slideNum == 2 ? [0, -1, 0] 
    : slideNum == 3 ? [0, -1, 0] 
    : slideNum == 4 ? [0, -1, 0] 
    : slideNum == 5 ? [0, -1, 0] 
    : slideNum == 6 ? [0, -1, 0] 
    : slideNum == 7 ? [0, -1, 0] 
    : slideNum == 8 ? [0, -1, 0] 
    : slideNum == 9 ? [0, -1, 0] 
    : slideNum == 10 ? [0, -1, 0] 
    : slideNum == 11 ? [0, -1, 0] 
    : undefined
  let carRotation = 
    slideNum == 1 ? [0, -1.5, 0] 
    : slideNum == 2 ? [0.1, -0.7, 0] 
    : slideNum == 3 ? [-0.05, -0.1, 0] 
    : slideNum == 4 ? [-0.02, -3, 0] 
    : slideNum == 5 ? [0.15, -3.5, 0] 
    : slideNum == 6 ? [0, -2.7, 0] 
    : slideNum == 7 ? [0, -3.15, 0] 
    : slideNum == 8 ? [0, 1.2, 0] 
    : slideNum == 9 ? [0, 0, 0] 
    : slideNum == 10 ? [0, -2.6, 0] 
    : slideNum == 11 ? [0, -1.5, 0] 
    : undefined

  return(
    <>
      <Stage position={stagePosition} rotation={stageRotation}/>
      <Car position={carPosition} rotation={carRotation} animation={animation} setAnimation={setAnimation}/>
      <BackGroundBehind/>
      <BackGroundFront num={slideNum}/>
      <ChangePages num={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} slideNum={slideNum} setSlideNum={setSlideNum}/>
    </>
  );
}

export default Animation;