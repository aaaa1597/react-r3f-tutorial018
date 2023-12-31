/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/bedroom3d.glb --types --shadows 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Floor: THREE.Mesh
    Bed_frame: THREE.Mesh
    Cube011: THREE.Mesh
    Cube011_1: THREE.Mesh
    Cube011_2: THREE.Mesh
    Cube012: THREE.Mesh
    Cube012_1: THREE.Mesh
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    Cube008_2: THREE.Mesh
    Pillow001: THREE.Mesh
    Pillow002: THREE.Mesh
    Cube016: THREE.Mesh
    Cube016_1: THREE.Mesh
    Cube017: THREE.Mesh
    Cube017_1: THREE.Mesh
    Cube020: THREE.Mesh
    Cube020_1: THREE.Mesh
    Cube020_2: THREE.Mesh
    Cube020_3: THREE.Mesh
    Cube022: THREE.Mesh
    Cube022_1: THREE.Mesh
    Cube022_2: THREE.Mesh
    Cube022_3: THREE.Mesh
    Coffe_table: THREE.Mesh
    Plane: THREE.Mesh
    Plane_1: THREE.Mesh
    Cushion: THREE.Mesh
    Cube028: THREE.Mesh
    Cube028_1: THREE.Mesh
    Cube028_2: THREE.Mesh
    Cube028_3: THREE.Mesh
    Cushion001: THREE.Mesh
    Cube035: THREE.Mesh
    Cube035_1: THREE.Mesh
    Cube040: THREE.Mesh
    Cube040_1: THREE.Mesh
    Cube040_2: THREE.Mesh
    Cube040_3: THREE.Mesh
    Cube052: THREE.Mesh
    Cube052_1: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder005_1: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder006_1: THREE.Mesh
    Cube015: THREE.Mesh
    Cube015_1: THREE.Mesh
    Cube015_2: THREE.Mesh
    Cube019: THREE.Mesh
    Cube019_1: THREE.Mesh
    Cube019_2: THREE.Mesh
    Cube021: THREE.Mesh
    Cube021_1: THREE.Mesh
    Cube023: THREE.Mesh
    Cube023_1: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder_1: THREE.Mesh
    Cylinder_2: THREE.Mesh
    Cylinder_3: THREE.Mesh
    Wall: THREE.Mesh
    Cube004: THREE.Mesh
    Cube004_1: THREE.Mesh
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
    Cube050_2: THREE.Mesh
    Cube050_3: THREE.Mesh
    Cube050_4: THREE.Mesh
    Cube050_5: THREE.Mesh
    Cube050_6: THREE.Mesh
    Cube050_7: THREE.Mesh
    Cube050_8: THREE.Mesh
    Wallshelf: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder001_1: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder002_1: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Frame: THREE.MeshStandardMaterial
    Pillow: THREE.MeshStandardMaterial
    Blanket: THREE.MeshStandardMaterial
    ['Pin picture.001']: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    Coffe: THREE.MeshStandardMaterial
    ['Pin picture.002']: THREE.MeshStandardMaterial
    ['Pin picture']: THREE.MeshStandardMaterial
    Leaves: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    Board: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('assets/bedroom3d.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Floor.geometry} material={materials.White} scale={[4, 0.2, 4]} />
      <mesh castShadow receiveShadow geometry={nodes.Bed_frame.geometry} material={materials.Frame} position={[-2.66, 0.203, 2.206]} />
      <group position={[-2.66, 0.875, 2.206]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube011.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube011_1.geometry} material={materials.Pillow} />
        <mesh castShadow receiveShadow geometry={nodes.Cube011_2.geometry} material={materials.Blanket} />
      </group>
      <group position={[-2.66, 1.337, 3.599]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube012.geometry} material={materials.Blanket} />
        <mesh castShadow receiveShadow geometry={nodes.Cube012_1.geometry} material={materials.Pillow} />
      </group>
      <group position={[-0.007, 0.204, 3.486]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube008.geometry} material={materials.Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube008_1.geometry} material={materials.Blanket} />
        <mesh castShadow receiveShadow geometry={nodes.Cube008_2.geometry} material={materials['Pin picture.001']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Pillow001.geometry} material={materials.Pillow} position={[0.153, 1.239, 3.649]} />
      <mesh castShadow receiveShadow geometry={nodes.Pillow002.geometry} material={materials.Pillow} position={[0.59, 1.285, 3.771]} rotation={[-1.18, 0.143, 0.13]} />
      <group position={[2.63, 0.204, 3.657]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube016.geometry} material={materials.Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube016_1.geometry} material={materials['Pin picture.001']} />
      </group>
      <group position={[-3.23, 0.198, -1.541]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube017.geometry} material={materials.Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube017_1.geometry} material={materials['Pin picture.001']} />
      </group>
      <group position={[3.378, 1.88, 3.675]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube020.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube020_1.geometry} material={materials.Red} />
        <mesh castShadow receiveShadow geometry={nodes.Cube020_2.geometry} material={materials.Blue} />
        <mesh castShadow receiveShadow geometry={nodes.Cube020_3.geometry} material={materials.Yellow} />
      </group>
      <group position={[2.587, 2.612, 3.682]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube022.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube022_1.geometry} material={materials.Yellow} />
        <mesh castShadow receiveShadow geometry={nodes.Cube022_2.geometry} material={materials.Red} />
        <mesh castShadow receiveShadow geometry={nodes.Cube022_3.geometry} material={materials.Blue} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Coffe_table.geometry} material={materials.Frame} position={[1.197, 0.554, -0.881]} />
      <group position={[1.186, 0.208, -0.871]} rotation={[0, 0.455, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.Pillow} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials.White} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Cushion.geometry} material={materials.Blanket} position={[2.772, 0.282, -0.848]} rotation={[0, 0.349, 0]} />
      <group position={[3.394, 1.271, 3.672]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube028.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_1.geometry} material={materials.Red} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_2.geometry} material={materials.Blue} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_3.geometry} material={materials.Yellow} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Cushion001.geometry} material={materials.Blanket} position={[1.416, 0.282, -2.391]} rotation={[-Math.PI, 1.403, -Math.PI]} />
      <group position={[-3.568, 0.174, -3.313]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube035.geometry} material={materials.Blanket} />
        <mesh castShadow receiveShadow geometry={nodes.Cube035_1.geometry} material={materials.Pillow} />
      </group>
      <group position={[2.496, 1.877, 3.672]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube040.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube040_1.geometry} material={materials.Blue} />
        <mesh castShadow receiveShadow geometry={nodes.Cube040_2.geometry} material={materials.Red} />
        <mesh castShadow receiveShadow geometry={nodes.Cube040_3.geometry} material={materials.Yellow} />
      </group>
      <group position={[-1.738, 1.057, -1.254]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube052.geometry} material={materials.Blanket} />
        <mesh castShadow receiveShadow geometry={nodes.Cube052_1.geometry} material={materials.Frame} />
      </group>
      <group position={[1.687, 0.667, -0.803]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder005.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder005_1.geometry} material={materials.Coffe} />
      </group>
      <group position={[1.306, 0.684, -1.454]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_1.geometry} material={materials.Coffe} />
      </group>
      <group position={[2.568, 1.491, 3.646]} rotation={[0, 0.315, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube015.geometry} material={materials.Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube015_1.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube015_2.geometry} material={materials['Pin picture.002']} />
      </group>
      <group position={[1.911, 1.491, 3.646]} rotation={[0, -0.354, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube019.geometry} material={materials.Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube019_1.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube019_2.geometry} material={materials['Pin picture']} />
      </group>
      <group position={[-3.654, 1.444, -1.056]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube021.geometry} material={materials.Pillow} />
        <mesh castShadow receiveShadow geometry={nodes.Cube021_1.geometry} material={materials['Pin picture.001']} />
      </group>
      <group position={[-2.953, 1.441, -1.105]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube023.geometry} material={materials.Pillow} />
        <mesh castShadow receiveShadow geometry={nodes.Cube023_1.geometry} material={materials['Pin picture.001']} />
      </group>
      <group position={[-3.659, 1.445, -2.442]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials.Coffe} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_1.geometry} material={materials.Blanket} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_2.geometry} material={materials.Leaves} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder_3.geometry} material={materials.Frame} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Wall.geometry} material={materials.White} />
      <group position={[0.038, 2.932, 4.276]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials.Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube004_1.geometry} material={materials.Material} />
      </group>
      <group position={[-4.004, 3.051, -1.324]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube050.geometry} material={materials.White} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_1.geometry} material={materials['Pin picture']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_2.geometry} material={materials.Frame} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_3.geometry} material={materials.Board} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_4.geometry} material={materials.Red} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_5.geometry} material={materials['Pin picture.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_6.geometry} material={materials.Yellow} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_7.geometry} material={materials['Pin picture.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube050_8.geometry} material={materials.Blue} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Wallshelf.geometry} material={materials.Frame} position={[-3.77, 3.25, 2.269]} />
      <group position={[-3.717, 3.193, 2.867]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001.geometry} material={materials.Red} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder001_1.geometry} material={materials.Leaves} />
      </group>
      <group position={[-3.74, 2.79, 1.657]}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={materials.Blue} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials.Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('assets/bedroom3d.glb')
