import { Text, Flex, Container, Box, Heading } from '@chakra-ui/react';

import Header from '../../components/Header';
import BodyBox from '../../components/BodyBox';
import HomePageHero from '../../components/HomePageHero';
import Footer from '../../components/Footer';
// import BlogCard from '../../components/BlogCard';

import { APP_NAME, SKILLS, APP_TITLE, APP_SUBTITLE } from '../../constants';
// import Emoji from '../../components/Emoji';

function HomePage() {
  return (
    <>
      <BodyBox>
        <Header name={APP_NAME} />
        <Container maxW="container.lg">
          <HomePageHero 
            title={APP_TITLE}
            subtitle={APP_SUBTITLE}
            skills={SKILLS}
          />
          {/* <Box my={20} />
          <Flex justifyContent="center">
            <Heading fontSize="6xl">How-to? <Emoji label="How to do things" symbol="🤔" /></Heading>
          </Flex>
          <BlogCard /> */}
        </Container>
        <Box my={20} />
        <Footer title={APP_NAME} subtitle={APP_TITLE} />
      </BodyBox>
    </>
  )
}

export default HomePage