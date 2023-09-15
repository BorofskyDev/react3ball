import { PerspectiveCamera } from '@react-three/drei'

function PerspectiveCameraComponent() {
  const position = [0, 0, 2]
  return <PerspectiveCamera makeDefault position={position} />
}
export default PerspectiveCameraComponent
