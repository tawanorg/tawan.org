import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box width="full" shadow="inner" borderRadius="3xl"
      transitionDuration="0.3s"
      _hover={{
        transform: `translate(0,-3px)`
      }} {...props}>{children}</Box>
  )
}

export default Card