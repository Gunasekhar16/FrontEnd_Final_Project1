import { Flex, Box, Text, Link, Divider,useBreakpointValue  } from "@chakra-ui/react";
import React from 'react';

const Footer = () => {
  const showParagraph = useBreakpointValue({ base: false, md: true });
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      py="8"
      px="8"
      bg="gray.800"
      color="white"
    >
      <Box flex="1">
        <Text fontSize="lg" fontWeight="bold" mb="2">EducationBit</Text>
        {showParagraph && (
          <Text fontSize="sm" mt="2">
            EducationBit stands as a premier online learning platform, offering an extensive array of courses designed to cater to students of varying proficiency levels. Our seasoned instructors are dedicated to delivering lucid explanations and illustrative examples, fostering a deeper understanding of concepts and facilitating skill enhancement.
          </Text>
        )}
      </Box>
      <Divider orientation="vertical" mx="4" h="20" />
      <Box flex="1">
        <Link href="#" mx="2">
          Facebook
        </Link>
        <Link href="#" mx="2">
          Twitter
        </Link>
        <Link href="#" mx="2">
          Instagram
        </Link>
      </Box>
      <Text flex="1" textAlign="right">© 2022 EducationBit</Text>
    </Flex>
  );
};

export default Footer;
