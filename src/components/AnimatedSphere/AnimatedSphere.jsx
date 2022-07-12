import React from 'react'

import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import texture from '../../assets/liq7.jpg';

import { useMediaQuery } from 'react-responsive'


const AnimatedSphere = () => {

  const colorMap = useLoader(TextureLoader, texture);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  let scale = isMobile ? 1.25 : 1.75;

  return (
      <Sphere visible args={[1, 50, 100]} scale={scale}>
          <MeshDistortMaterial
              map={colorMap}
              attach="material"
              distort={0.7}
              speed={0.7}
              roughness={1}
              metalness={0.9}
          />
      </Sphere>
  )
}

export default AnimatedSphere