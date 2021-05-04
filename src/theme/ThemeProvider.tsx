import * as React from "react"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

import theme from './theme';
import './style.css';

const ThemeProvider: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    {children}
  </ChakraProvider>
)
 
export default ThemeProvider;
 