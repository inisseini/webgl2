import './style.css';
import { useState } from 'react';
import Description from './Description.js';
import Demo from './Demo.js';

function App() {
  const [values, setValues] = useState({
    isDemo: true,
    tabs: [0, 1, 2, 3]
  })

  return (
    <div className="App">
      {!values.isDemo ? 
        <Description
          values={values}
          setValues={setValues}
        />
      : 
        <Demo
          values={values}
          setValues={setValues}
        />
      }
      {/*<button className={values.isDemo ? 'switchPagesA' : 'switchPagesB'} onClick={() => setValues({ ...values, isDemo: !values.isDemo})}>切り替える</button>*/}
    </div>
  );
}

export default App;
