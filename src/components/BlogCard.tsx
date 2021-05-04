import  React from "react";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

function BlogCard() {
  return (
    <Box p="5" maxW="320px" borderWidth="1px">
      <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">Life</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          Melbourne &bull; Australia
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Study & Work
      </Text>
      <Text mt={2}>$119/night</Text>
    </Box>
  );
}

export default BlogCard;