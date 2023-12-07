import React from 'react';
import './AboutUs.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <Box as={motion.section}
      id="about"
      ref={ref}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      bg="gray.100"
      p={8}
      rounded="md"
      boxShadow="md"
    >
      <Box as="h2" fontSize="3xl" fontWeight="bold" mb={4}>About Us</Box>

      <Box as="p" fontSize="lg" lineHeight="tall">
      Our goal at educationBit is to enable people to reach their maximum potential by providing them with top-notch training and educational opportunities. We genuinely think that everyone should have the chance to achieve, and our main goal is to help people achieve their goals by offering a wide range of courses and teaching services.

Our team is made up of seasoned instructors and business professionals who have painstakingly created a wide range of courses to suit students of all skill levels, from beginners to seasoned pros. With educationBit, you can achieve your goals of learning a new skill, growing professionally, or improving personally.

Our courses are intentionally created to be useful, interesting, and interactive, guaranteeing a rewarding educational experience. Our method is based on flexibility, which lets you study at your own speed and on a timetable that works for you. We tailor our teaching services to each student's specific needs, ensuring that everyone gets the help and direction they need to succeed.

Understanding how important it is to keep up with the newest technological advancements and trends in the industry, we are dedicated to updating and improving our courses on a regular basis to guarantee their applicability and currency. In addition, we offer our students continuous support, creating an environment where learning never ends even after courses are finished.






      </Box>
    </Box>
  );
};

export default AboutUs;
