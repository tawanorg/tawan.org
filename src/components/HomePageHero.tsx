import React from 'react';
import { Box, Heading, Text, Image, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import Card from './Card';
import { ISkill } from '../types';
import Emoji from './Emoji';

type IProps = {
  skills: ISkill[]
  title: string
  subtitle: string
}

function HomePageHero({ title, subtitle, skills = [] }: IProps) {
  return (
    <Box minHeight="100vh">
      <Box textAlign="center" pt="28">
        <Flex flexDir="column" alignItems="center">
          <Box mb="4">
            <Image shadow="inner" boxSize="200px" src="tawan.png" alt="Tew Tawan" borderRadius="full" fallback={<Spinner />} />
          </Box>
          <Heading size="2xl" my="4">
            <Emoji label="Hi, I'm Tawan" symbol="👋" /> {title}
          </Heading>
          <Text fontSize="2xl" color="gray.500" maxW="xl">
            {subtitle}
          </Text>
        </Flex>
        <Flex flexWrap="wrap" mt={20}>
          <SimpleGrid width="full" templateColumns={[`repeat(2, 1fr)`, null, null, `repeat(3, 1fr)`]} gap={6}>
            {skills.map((skill, key) => (
              <Box width="full" key={key} data-testid={`skill-box-${key}`} tabIndex={key}>
                <Card p="6" display={['block', 'flex']} alignItems="center">
                  {React.createElement(skill.iconComponent, { boxSize: skill.iconSize })}
                  <Box ml={[0, 4]} flexDir="column" textAlign="left" display={['none', 'flex']}>
                    <Text fontSize="2xl">{skill.name}</Text>
                    <Text>{skill.description}</Text>
                  </Box>
                </Card>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  )
}

export default HomePageHero
