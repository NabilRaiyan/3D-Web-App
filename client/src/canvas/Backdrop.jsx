import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {

  const shadows = useRef();

  return (
    <AccumulativeShadows 
          position={[0, 0, -0.14]}
          ref={shadows}
          frames={60}
          temporal
          alphaTest={0.40}
          scale={4}
          rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight 
          amount={4}
          radius={10}
          intensity={0.55}
          ambient={0.20}
          position={[5, 5, -10]}
       />

        <RandomizedLight 
          amount={4}
          radius={9}
          intensity={0.25}
          ambient={0.50}
          position={[-5, 5, -9]}
       />

    </AccumulativeShadows>
  )
}

export default Backdrop
