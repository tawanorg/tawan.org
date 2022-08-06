import { Heading, Text, Flex, SimpleGrid, Box } from '@chakra-ui/react';
import IGIcon from '../icons/IGIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import TwitterIcon from '../icons/TwitterIcon';
import DribbleIcon from '../icons/DribbleIcon';

type IProps = {
  title: string
  subtitle: string
}

function Footer({ title, subtitle }: IProps) {
  return (
    <Flex pos="fixed" bottom={0} justifyContent="flex-end" w="full">
      <Flex p={6}>
        <Box p={6} backgroundColor="brand.normal" width="full" borderRadius="3xl">
          <SimpleGrid templateColumns="repeat(4, 1fr)" gap={6} alignItems="center">
            <a rel="noreferrer" href="https://dribbble.com/tawanorg" target="_blank">
              <DribbleIcon boxSize={8} color="white" />
            </a>
            <a rel="noreferrer" href="https://twitter.com/tawanorg" target="_blank">
              <TwitterIcon boxSize={8} color="white" />
            </a>
            <a rel="noreferrer" href="https://instagram.com/tawanorg" target="_blank">
              <IGIcon boxSize={8} color="white" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/tawanorg/" target="_blank">
              <LinkedInIcon boxSize={8} color="white" />
            </a>
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Footer
