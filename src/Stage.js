import { Environment, Lightformer, OrbitControls, PerspectiveCamera, CameraControls, Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Stage = (props) => {
  const {camera} = useThree();
  const zoomCamera = (event) => {
    camera.position.z += event.wheelDelta / 400;
  }
  window.addEventListener('wheel', zoomCamera);

  const changeColor = (color) => {
    props.setCarState((m) => ({...m, 'colorDetail': color}))
  }

  const changeTire = (num) => {
    props.setCarState((m) => ({...m, 'tire': num}))
  }

  const changeTireAnim = (num) => {
    console.log(num)
    props.setCarState((m) => ({...m, 'tireAnim': num}))
  }

  return(
    <>
      <ambientLight intensity={1.2}/>
      {props.configulater ? 
        <>
          <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/modern_buildings_night_2k.hdr'} ground={{ height: 3, radius: 50, scale:10 }}>
            {/* Ceiling */}
            <Lightformer intensity={10} rotation-x={Math.PI / 2} position={[0, 5, -5]} scale={[10, 10, 1]} />
            {/* Sides */}
            <Lightformer intensity={40} rotation-y={Math.PI / 2} position={[-2, 1, -2]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
            <Lightformer intensity={10} rotation-y={Math.PI} position={[0, 0, 2]} scale={[20, 0.1, 1]} />
          </Environment>

          <Html
            fullscreen
            className="configulaterHtml"
            zIndexRange={[1000000000000, 0]}
            calculatePosition={() => [0, 0, 0]}
          >
            <h1>S4 Celestial</h1>
            <div className="navi">
              <ul className="parameter">
                <li>
                  <span role="img" aria-label="" className='iconSvg carCustom'/>
                  <input type='checkbox' onChange={() => props.setCarState((m) => ({m:false, 'custom': !props.carState.custom}))}/>
                </li>
                <li>
                  <span role="img" aria-label="" className='iconSvg carHandle'/>
                  <input type='checkbox' onChange={() => props.setCarState((m) => ({m:false, 'handle': !props.carState.handle}))}/>
                </li>
                <li>
                  <span role="img" aria-label="" className='iconSvg carInto'/>
                  <input type='checkbox' onChange={() => props.setCarState((m) => ({m:false, 'into': !props.carState.into}))}/>
                </li>
                <li>
                  <span role="img" aria-label="" className='iconSvg carLight'/>  
                  <input type='checkbox' onChange={() => props.setCarState((m) => ({m:false, 'light': !props.carState.light}))}/>
                </li>
                <li>
                  <span role="img" aria-label="" className='iconSvg carColor'/>
                  <input type='checkbox' onChange={() => props.setCarState((m) => ({m:false, 'color': !props.carState.color}))}/>
                </li>
              </ul>
              <div className="action">
                {props.carState.custom ? 
                  <div className="actionContent">
                    <h2>オプション</h2>
                    <select onChange={(e) => changeTire(e.target.value)}>
                      <option value={1}>タイヤ1</option>
                      <option value={2}>タイヤ2</option>
                    </select>
                  </div>
                : props.carState.handle ? 
                  <div className="actionContent">
                    <h2>ステアリング</h2>
                    <input type='range' min='0' max='100' value={props.carState.tireAnim} step='5' onChange={(e) => changeTireAnim(e.target.value)}/>
                  </div>
                : props.carState.color ? 
                  <div className="actionContent">
                    <h2>カラー</h2>
                    <input type='color' value='#205ABC' onChange={(e) => changeColor(e.value)}/>
                  </div>
                : undefined }
              </div>
            </div>
            <button onClick={() => props.setConfigulater(false)}>コンフィギュレーターを停止する</button>
          </Html>
        </>
      :
        <Environment 
          frames={Infinity} 
          resolution={256}
        >
          {/* Ceiling */}
          <Lightformer intensity={10} rotation-x={Math.PI / 2} position={[0, 5, -5]} scale={[10, 10, 1]} />
          {/* Sides */}
          <Lightformer intensity={40} rotation-y={Math.PI / 2} position={[-2, 1, -2]} scale={[20, 0.1, 1]} />
          <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
          <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
          <Lightformer intensity={10} rotation-y={Math.PI} position={[0, 0, 2]} scale={[20, 0.1, 1]} />
        </Environment>
      }

      <PerspectiveCamera
        makeDefault
        position={props.position}
        rotation={props.rotation}
      />
    </>
  )
}

export default Stage;