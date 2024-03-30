import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// sectionwrapper is a function that returns a function (higher order component)
const SectionWrapper = (Component, idName) => 
function HOC() {
  return (
    <motion.section
        variants={staggerContainer()}              //  which is going to animate
        initial = 'hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}       // the animation will happen once and for 0.25 seconds
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >

        {/* to make the button click work for taking us to next pannel :) */}
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        
        <Component />
    </motion.section>
  )
}

export default SectionWrapper
