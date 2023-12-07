
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ContactForm from './components/ContactForm/ContactForm.js'
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header.js'
import Hero from './components/Hero/Hero.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import Testimonials from './components/Testimonials/Testimonials';
import Courses from './components/Courses/Courses';
function App() {
  return (
    <>
    <ChakraProvider>
   <Header/>
   <Hero/>
   <AboutUs/>
   <Courses/>
   <Testimonials/>
   <ContactForm/>
   <Footer/>
    </ChakraProvider>
   </>
  );
}

export default App;
