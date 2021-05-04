import React from 'react';
import { Heading, Flex, useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import MoonIcon from '../icons/MoonIcon';
import { Link } from 'react-router-dom';
 
type IProps = {
  name: string
}

function Header({ name }: IProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const fontColor = useColorModeValue('brand.normal', 'white')
  return (
    <Flex p={6} justifyContent="space-between" alignItems="center" position="fixed" width="full" top="0">
      <Link to="/" title="Tew Tawan"><Heading as="h1" color={fontColor}>{name}</Heading></Link>
      {colorMode === 'dark' && <IconButton aria-label="theme" onClick={toggleColorMode} icon={<SunIcon />} />}
      {colorMode === 'light' && <IconButton aria-label="theme" onClick={toggleColorMode} icon={<MoonIcon />} />}
    </Flex>
  )
}

export default Header