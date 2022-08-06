import { Heading, Text, Flex, SimpleGrid} from '@chakra-ui/react';
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
    <Flex pos="fixed" bottom={0} justifyContent="center">
    <Flex p={6} justifyContent="space-between" alignItems="center" width="full" maxW="4xl">
      <Flex pl="6" py={4} backgroundColor="brand.normal" width="full" borderRadius="3xl" minH="12" justifyContent="space-between">
        <Flex flexDir="column" alignItems="flex-start" color="white">
          <Heading fontSize="xl">{title}</Heading>
          <Text display={['none', 'inline-block']} fontSize="sm">{subtitle}</Text>
        </Flex>
        <SimpleGrid templateColumns="repeat(5, 1fr)" gap={6} alignItems="center">
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
      </Flex>
    </Flex>
          </Flex>
  )
}

export default Footer
