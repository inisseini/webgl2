import { Html } from "@react-three/drei";

const ChangePages = (props) => {
  const itemList = props.num.map((section, index) =>{
    const dotClass = props.slideNum == index + 1 ? 'selected dot num' : 'dot num';
    return ( 
      <li 
        key={index}
        className={dotClass + section}
        onClick={() => props.setSlideNum(section)}
      ></li>
    )
  });

  return(
    <Html
      fullscreen 
      zIndexRange={[10000000000000, 0]}
      calculatePosition={ () => [0, 0, 0] }
      className="ChangePages"
    >
      <div className="dotList">
        {itemList}
      </div>
    </Html>
  )
}

export default ChangePages;