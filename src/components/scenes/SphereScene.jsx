import {  Stars } from '@react-three/drei'
import MeshPlane from '../Meshes/MeshPlane'
import MeshSphere from '../Meshes/MeshSphere'
import PerspectiveCameraComponent from '../../Cameras/PerspectiveCameraComponent'


function SphereScene() {
  return (
    <>
      <PerspectiveCameraComponent />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <MeshSphere />
      <MeshPlane />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={1}
        fade
        
      />
    
  
    </>
  )
}
export default SphereScene
