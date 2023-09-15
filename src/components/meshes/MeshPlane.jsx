import { MeshReflectorMaterial, Plane } from '@react-three/drei'


function MeshPlane() {
  return (
    <mesh>
      <Plane
        args={[100, 100, 10, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -4, 0]}
      >
        {/* <meshStandardMaterial metalness={1} roughness={0.2} color={'gray'} /> */}
      <MeshReflectorMaterial blur={[1, 1]} mirror={1} />
      </Plane>
    </mesh>
  )
}
export default MeshPlane
