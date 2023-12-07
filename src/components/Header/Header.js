import React, { useState,useEffect } from "react";
import { Box, Flex, IconButton, Heading, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "./educationBit.jpg";
import { motion } from "framer-motion";
var x=1;
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [username, setUsername] = useState("");

//   const params = new URLSearchParams(window.location.search);
//   const usernameParam = params.get('username');
//   useEffect(() => {
//   if(usernameParam){
//     setUsername(usernameParam);
//   }},[usernameParam]);
  
//   if(!usernameParam){
//     if(x===1){
//       window.location.href = 'http://localhost:4000/';
//       x=0;
//     }
//   }
//   const handleLogout = () => {
    
//     setUsername("");
//     window.location.href = 'http://localhost:4000/';
// };

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Box as="header" bg="gray.800"
      color="white" boxShadow="sm" py={10} px={6}>
      <Flex justify="space-between" align="center">
        <img src={logo} alt="EducationBit logo" width="30" height="30" />
        <Heading as="h1" fontSize="2xl" fontWeight="bold" letterSpacing="tight" color="white" ml={4} >
        EducationBit
        </Heading>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={isOpen ? onClose : onOpen}
          colorScheme="gray.800"
        />
        <Flex
          justify="flex-end"
          align="center"
          flex={1}
          display={{ base: "none", md: "flex" }}
        >
          <Box as="nav">
            <Box as="ul" listStyleType="none" display="flex" m={0} p={0}>
              <Box as="li" px={3}>
                <a href="#home">Home</a>
              </Box>
              <Box as="li" px={3}>
                <a href="#courses">Courses</a>
              </Box>
              <Box as="li" px={3}>
                <a href="#about">About</a>
              </Box>
              <Box as="li" px={3}>
                <a href="#contact">Contact</a>
              </Box>
            
              
                  {/* <Box as="li" px={3} onClick={handleLogout} cursor="pointer">
                    Logout
                  </Box>
                  <Box as="li" px={3}>{username}</Box> */}
                
             
            </Box>
          </Box>
        </Flex>
      </Flex>
      <motion.div
        variants={navVariants}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
      >
        {isOpen && (
          <Box as="nav" mt={4}>
            <Box as="ul" listStyleType="none" m={0} p={0}>
              <Box as="li" py={2}>
                <a href="#home" onClick={onClose}>
                  Home
                </a>
              </Box>
              <Box as="li" py={2}>
                <a href="#courses" onClick={onClose}>
                  Courses
                </a>
              </Box>
              <Box as="li" py={2}>
                <a href="#about" onClick={onClose}>
                  About
                </a>
              </Box>
              <Box as="li" py={2}>
                <a href="#contact" onClick={onClose}>
                  Contact
                </a>
              </Box>
              
                  {/* <Box as="li" py={2}>
                    <a href="#contact" onClick={handleLogout}>
                      Logout
                    </a>
                  </Box>
                  <Box as="li" py={2}>
                    <a href="#home">{username}</a>
                  </Box> */}
                
             
            </Box>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default Header;