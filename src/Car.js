import { useEffect, useMemo, useState, useRef, Children } from "react";
import { applyProps, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, PresentationControls, Html} from "@react-three/drei";
  
const Car = (props) => {
  const { scene, nodes, materials, animations } = useGLTF('Base.glb');
  const tire1 = useGLTF('VLEAP_Car_Tire1.glb');
  const tire2 = useGLTF('VLEAP_Car_Tire2.glb');

  const doorAnim = useAnimations(animations, scene);
  const doorAction = doorAnim.actions[doorAnim.names[0]];  
  doorAnim.mixer._actions[0].repetitions = 1;
  doorAction.paused = true; 


  useEffect(() => {
    doorAction.paused = false;
    doorAnim.mixer.setTime(props.doorAnim / 50);
    doorAction.play();
    doorAction.paused = true;
  }, [props.doorAnim])

  const tireAnim = useAnimations(tire1.animations, tire1.scene);
  const tireAction = tireAnim.actions[tireAnim.names[0]];  
  tireAnim.mixer._actions[0].repetitions = 1;
  tireAction.paused = true;


  useEffect(() => {
    console.log(props.tireAnimTime);
    tireAction.paused = false;
    tireAnim.mixer.setTime(props.tireAnimTime/ 50);
    tireAction.play();
    tireAction.paused = true;
  }, [props.tireAnim, props.tireAnimTime])

  applyProps(materials.CarMaincolor, { roughness: 0.1, metalness: 0.5, color: props.colorDetail, envMapIntensity: 1 });

  useEffect(() => {
    if(props.light) {
      applyProps(materials.FlontLightGlass,  { color: 'white', roughness: 0, envMapIntensity: 100, metalness: 1 });
    } else {
      applyProps(materials.FlontLightGlass,  { color: 'black', roughness: 0, envMapIntensity: 2, metalness: 0 });
    }
  }, [props.light])

  useMemo(() => {
    Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
    //applyProps(tire1.materials.tyre, { color: '#000', roughness: 0.3, roughnessMap: null, normalScale: [4, 4] })
    applyProps(materials.GLASS, { color: '#fff', roughness: 0, clearcoat: 0.9 })
    applyProps(materials.FlontLightGlass, { color: '#ffffe0', roughness: 0, clearcoat: 1 })
    applyProps(materials.FrontLightWhite, { color: '#ff7f50', roughness: 0, clearcoat: 1, envMapIntensity: 1 })
    applyProps(materials.BackLED, { color: 'red', roughness: 0, envMapIntensity: 1, metalness: 0 })
    applyProps(materials.BackBlackGlass, { color: 'red', roughness: 0, clearcoat: 0.6 })
    applyProps(materials.CarMaincolor, { roughness: 0.1, metalness: 0.5, color: props.carColor, envMapIntensity: 1 })
  }, [nodes, materials])

  return (
    <PresentationControls
      cursor
      snap={false}
    >
      <primitive 
        object={scene} {...props}
        dispose={null}
        position={props.position}
        rotation={props.rotation} 
        scale={[1, 1, 1]}
        className='aaa'
      >
        {props.animation ? 
          <Html
            transform
            className="animationDot"
            zIndexRange={[100000000000000, 0]}
            position={[1, 1.2, -0.75]}
            rotation={[0, 1.5, 0]}
            calculatePosition={[0, 0, 0]}
            occlude
            onClick={() => console.log('aa')}
          >
          </Html>
        : undefined}
      </primitive>
      <primitive
        object={ props.tire == 2 ? tire2.scene : tire1.scene} {...props}
        dispose={null}
        position={props.position}
        rotation={props.rotation} 
        scale={[1, 1, 1]}
      ></primitive>
    </PresentationControls>
  )
}

export default Car;