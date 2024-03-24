import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // State to store animation offset
  const [offsetY, setOffsetY] = useState(0);

  // function to handle animation
  useEffect(() => {
    const startTime = performance.now(); // Get start time
    const animateText = () => {
      const elapsed = performance.now() - startTime; // Calculate elapsed time
      const offsetY = Math.sin(elapsed / 350) * 10; // Calculate offset
      setOffsetY(offsetY); // Update state with new offset
      requestAnimationFrame(animateText);
    };
    requestAnimationFrame(animateText); // Start animation loop
  }, []);       //  run only once on component mount

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.div
            className={`${styles.heroHeadText} text-white`}
            style={{ translateY: offsetY }} // Apply translateY animation
          >
            Hi, I'm <span className="text-[#915eff]">Soumya</span>
          </motion.div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D models, 3D and 2D animations,
            <br className="sm:block hidden" />
            user interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        style={{ top: "820px" }}
      >
        <a href="#about">
          <div
            className="w-[35px h-[64px]
          rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
