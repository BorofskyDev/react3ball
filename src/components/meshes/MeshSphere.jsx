import { useRef } from 'react'
import * as THREE from 'three'
import { Sphere, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function MeshSphere() {
  const pointLightRef = useRef()

  useFrame(({ clock }) => {})

  // useHelper(pointLightRef, THREE.PointLightHelper, 0.6) // Arguments: 1. ref, 2. THREE helper class, 3. size of the helper

  return (
    <>
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial
          color={new THREE.Color('darkblue')}
          transparent={true}
          opacity={0.5}
          metalness={1}
          roughness={0}
        />
        {/* Bright Red Point Light Inside */}
      </Sphere>
      <pointLight
        ref={pointLightRef}
        color={new THREE.Color('red')}
        // distance={0.2}
        intensity={7}
      />
    </>
  )
}

export default MeshSphere
