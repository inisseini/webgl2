import { Html } from "@react-three/drei";

const BackGroundBehind = () => {
  return(
    <Html 
      fullscreen 
      zIndexRange={[-10, 0]}
      calculatePosition={ () => [0, 0, 0] }
      className="BackGroundBehind"
    >
      <header>
        <h2>S4 Celestial</h2>
        <ul>
          <li>概要</li>
          <li>特徴</li>
          <li>オプション</li>
          <li>価格</li>
        </ul>
      </header>

      <div className="main">
        <span className="triangle1"></span>
        <span className="triangle2"></span> 
      </div>
    </Html>
  )
}

export default BackGroundBehind;