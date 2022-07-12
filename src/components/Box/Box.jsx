import React from 'react';

import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import texture from '../../assets/damascus_map.jpg';
import snopas from '../../assets/snopas_map.png';

const Box = () => {

  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach={"geometry"} args={[3, 3, 3]} />
      <meshNormalMaterial attach={"material"} />
    </mesh>
  )
}

export default Box