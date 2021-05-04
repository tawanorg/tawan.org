
import { extendTheme, ThemeConfig, Colors, Theme } from "@chakra-ui/react"

import { createBreakpoints } from "@chakra-ui/theme-tools"

import { IFonts, IFrontWeights } from './type'

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors: Colors = {
  brand: {
    normal: "#111111",
    light: "#222222",
    thin: "#333333",
  },
}

const fonts: Record<keyof IFonts, string> = {
  body: "Raleway",
  heading: "Raleway",
  mono: "Raleway",
}

const fontWeights: Record<keyof IFrontWeights, number> = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}
 
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  // "2xl": "96em",
})

const shadows: Partial<Theme['shadows']> = {
  inner: "1px 1px 2px 0 rgb(88 102 126 / 12%), 1px 1px 40px 0 rgb(88 102 126 / 12%)",
}

const theme = extendTheme({ 
  config, 
  colors,
  fonts,
  fontWeights,
  breakpoints,
  shadows
 })
 
export default theme;