import React, { useState, useRef } from "react";
import { Box, Button, Text, Textarea, Input, Divider, Image,useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
import ContactUsImage from './ContactUs.gif';

function ContactForm() {
  const showGif = useBreakpointValue({ base: false, md: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_uzj6bo8', 'template_hwjcp0h', form.current, 'JdS_BExbCoW4mCndR')
      .then((result) => {
        console.log(result.text);
        window.alert("Thank you for your message. We will get back to you shortly.");
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Box
      id="contact"
      ref={formRef}
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      p="6"
      boxShadow="lg"
      rounded="lg"
      display="flex"
      alignItems="center"
    >
      <Box width={{ base: "100%", md: "50%" }}>
        <Text fontWeight="bold" fontSize="2xl" mb="6">
          Contact Us
        </Text>
        <Box as="form" ref={form} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
            mb="4"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            mb="4"
          />
          <Textarea
            placeholder="Message"
            value={message}
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            mb="4"
          />
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Box>
      </Box>
      {showGif &&(<><Divider orientation={{ base: "vertical", md: "horizontal" }} mx={{ base: 0, md: 4 }} my={{ base: 4, md: 0 }} />
      <Image src={ContactUsImage} alt="Contact Us" width={{ base: "100%", md: "50%" }} maxHeight="400px" /></>)}
      

    </Box>
  );
}

export default ContactForm;
