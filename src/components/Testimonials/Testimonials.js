import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo1 from './test1.jpg';
import logo2 from './test2.jpg';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 },
  };
  return (
    <section id="testimonials" ref={ref}>
      <h2>Testimonials</h2>
      <motion.div
        className="testimonial"
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
      >
        <img src={logo1} alt="Testimonial 1" />
        <p>"
Initially hesitant about venturing into online courses, my skepticism quickly transformed into admiration after completing my first course on this platform. The content's exceptional quality, coupled with the user-friendly interface, exceeded my expectations. The instructors' expertise and the captivating video lessons made the learning experience truly enjoyable. I wholeheartedly endorse this website for individuals seeking skill improvement or the thrill of acquiring new knowledge."</p>
        <p>- Doe John</p>
      </motion.div>
      <motion.div
        className="testimonial"
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={logo2} alt="Testimonial 2" />
        <p>"Initially harboring skepticism about enrolling in a course from this website, I am now genuinely pleased that I took the leap. The course content was delivered in a compelling and easily digestible manner, with an instructor who displayed remarkable knowledge and support. The learning experience proved to be enriching, and I now feel assured in my newly acquired skills. I wholeheartedly recommend it!"</p>
        <p>- Jane Doe</p>
      </motion.div>
    </section>
  );
};

export default Testimonials;
