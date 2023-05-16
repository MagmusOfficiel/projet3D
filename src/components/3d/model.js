import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import ModelLights from './model-lights';
import { Color } from 'three'; 

const Model = ({ scenePath, position, rotation, color }) => {
  const gltf = useGLTF(scenePath, true);
  const mesh = React.useRef();

  // Modification de la couleur du modèle
  useMemo(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new Color(color);
      }
    });
  }, [color, gltf]);

  useFrame(() => {
    mesh.current.rotation.x += rotation[0];
    mesh.current.rotation.y += rotation[1];
  });

  return (
    <mesh ref={mesh} position={position}>
      <ModelLights />
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;