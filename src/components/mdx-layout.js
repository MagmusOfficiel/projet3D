import React from 'react';
import { Flex, Grid } from '@chakra-ui/core';

const mobile = `
'icon    .'
'product  product'
'text text'
`;
const desktop = `
'edge   .       .         .'
'edge   text    product   .'
`;

/**
 * The base layout for the MDX pages. You can configure this to set how your pages layout should be.
 */
const MDXLayout = ({ children }) => {
  return (
    <Grid
      templateColumns={['1fr', '10% 1fr 1fr 10% ']}
      templateRows={['10% 1fr 1fr', '10% 1fr 1fr']}
      templateAreas={[mobile, desktop]}
      bg="brand.background"
      h="100vh"
    >
      {children}

    </Grid>
  );
};

export default MDXLayout;
