import React from 'react';
import { Box } from '@chakra-ui/react';

const BodyBox: React.FC = ({ children }) => {
  return (
    <Box
      backgroundImage={`url("https://assets-global.website-files.com/5f3306add5c511a054f17da5/5f34c6b072cfa97f26431ac4_blur2.svg"),url("https://assets-global.website-files.com/5f3306add5c511a054f17da5/5f34c6afb1c1f26cf8023e7d_blur1.svg")`}
      backgroundPosition={`120% 300%, -410px -110px`}
      backgroundSize={`800px, 60%`}
      backgroundRepeat="no-repeat, no-repeat"
    >{children}</Box>
  )
}

export default BodyBox