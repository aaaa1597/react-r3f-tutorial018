import React, {useRef} from 'react';
import './App.css';
import { Canvas, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { useControls } from 'leva'
import { Model } from './Bedroom3d'

const Lights = () => {
  const directionalRef = useRef<THREE.DirectionalLight>(null!)

  useControls('Directional Light', {
    intensity: {
      value: 1, min: 0, max: 5, step: 0.1,
      onChange: (v) => {
        directionalRef.current.intensity = v
      },
    },
    position: {
      value: [3.3,1.0,4.4],
      onChange: (v) => {
        directionalRef.current.position.x = v[0]
        directionalRef.current.position.y = v[1]
        directionalRef.current.position.z = v[2]
      },
    },
  })
  
  return (
    <directionalLight ref={directionalRef} castShadow />
  )
}

const App = () => {
  const texture = useLoader(THREE.TextureLoader, './imgs/grid.png')

  return (
    <div style={{ width: "75vw", height: "75vh" }}>
      <Canvas camera={{ position: [4, 4, 3] }} shadows>
        <Lights />
        <Environment preset="forest" background />
        <Model />
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
        <Stats />
      </Canvas>
    </div>
  );
}

export default App;
