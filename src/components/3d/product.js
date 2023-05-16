import React from 'react';
import Model from './model';
import { Flex, Box, Text } from '@chakra-ui/react';
import { OrbitControls } from '@react-three/drei';
import CanvasContainer from './canvas-container';
import { useState } from 'react';
const colors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
  '#ff00ff',
  '#00ffff',
];
/**
 * A trainers modal
 */
const Product = ({ color }) => {
  return (
    <CanvasContainer height={500} width={700} position={[20, 30, 20]} fov={75}>
      <Model
        scenePath="shoes/scene.gltf"
        position={[0, 0, 0]}
        rotation={[0, 0.005, 0]}
        color={color}
      />
      <OrbitControls enableZoom={false} />
    </CanvasContainer>
  );
};

const YourComponent = () => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  return (
    <>
      <Flex
        justify="center"
        direction="column">
        <Text fontWeight="bold" fontSize="16">
          Choisir la couleur :
        </Text>
        <Flex direction="row" mb={4}>
          {colors.map((color, index) => (
            <Box
              key={index}
              w={20}
              zIndex="50"
              h={20}
              bg={color}
              mx={8}
              my={8}
              onClick={() => setCurrentColor(color)}
              cursor="pointer"
            />
          ))}
        </Flex>
      </Flex>
      <Product color={currentColor} />
    </>
  );
};

export default YourComponent;
