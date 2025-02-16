import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MonitorModel(props) {
  const { nodes, materials } = useGLTF('/monitor.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1575.703, 30, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube_Case_0.geometry} material={materials.Case} />
        <mesh geometry={nodes.Cube_RenderMonitor_0.geometry} material={materials.RenderMonitor} />
        <mesh geometry={nodes.Cube_USB_0.geometry} material={materials.material} />
      </group>
      <mesh geometry={nodes.Button_Button_Material_0.geometry} material={materials.Button_Material} position={[-695.83, -497.371, 28.549]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Button_two_ButtonTwoMaterial_0.geometry} material={materials.ButtonTwoMaterial} position={[-740.479, -496.832, 27.902]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 10, 8]} />
      <mesh geometry={nodes.Button_two001_ButtonTwoMaterial001_0.geometry} material={materials['ButtonTwoMaterial.001']} position={[-792.221, -496.832, 27.902]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 10, 8]} />
    </group>
  )
}

useGLTF.preload('/monitor.glb')
