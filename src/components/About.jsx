import React from "react";
import { Tilt } from "react-tilt"; // to tilt the card
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // fadein from the right side, type; spring,
        // the play is going to be 0.5 seconds but it's
        // gonna be multiplied for every index (ex: 0, 0.5*1, 1, ...)
        // and last propety is duration
        variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // tilt-option
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* to render icon */}
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          {/* render title */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-20 pt-20">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        It's a skilled software developer with experience in Javascript and
        Typescript, and experties in frameworks like React, Node.js, Next.js,
        and Three.js. I'm quick learner and a great collaborater. In my free
        time I make 3D and 2D models and animations. Let's work together to
        bring your ideas and visions to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
      About
    </>
  );
};

export default About;

// we'll create the space ' pl-7 pr-7 ' these for all the components and its elements using something called 'higher order component'
