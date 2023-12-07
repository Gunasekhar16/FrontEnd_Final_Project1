import React from 'react';
import logo from './educationBit.jpg';
import { Box, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Hero.css'

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <Box
      id="hero"
      bg="blue.600"
      color="white"
      textAlign="center"
      py="20"
      ref={ref}
    >
      <motion.img 
        src={logo} 
        alt="Hero banner"
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        Take Your Skills to the Next Level with EducationBit
      </motion.h1>
      <motion.div 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <Button colorScheme="blue" size="lg" mt="8" href="#courses">
          <a href="#courses">Learn More</a>
        </Button>
      </motion.div>
    </Box>
  );
};

export default Hero;