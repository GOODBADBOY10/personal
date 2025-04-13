import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense } from "react";
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Ademola!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>CREATIVE SOFTWARE DEVELOPER</motion.h2>
          <motion.p variants={awardVariants}>
            I specialize in crafting scalable and efficient web applications.
            I design and implement robust, data driven applications.
            I am eager to apply my skills to new challenges and contribute to innovative projects.
          </motion.p>
          {/* award list */}
          <motion.div variants={awardVariants} className="awardList">
            <motion.a variants={awardVariants} href="https://github.com/GOODBADBOY10" target="_blank">
              <FaGithub />
            </motion.a>
            <motion.a variants={awardVariants} href="https://x.com/Ademola102?t=IIyANhmhopVRIe4J1Z2SPQ&s=09" target="_blank">
              <FaTwitter />
            </motion.a>
            <motion.a variants={awardVariants} target="_blank" href="https://www.linkedin.com/in/idris-ademola-a0863b2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.div
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="scroll"
        >
          <Link to='services' smooth duration={100}>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
              />
              <motion.path
                animate={{ y: [0, 5] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
      <div className="hSection right">
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="https://github.com/GOODBADBOY10" target="_blank">
            <FaGithub />
          </motion.a>
          <motion.a variants={followVariants} href="https://x.com/Ademola102?t=IIyANhmhopVRIe4J1Z2SPQ&s=09" target="_blank">
            <FaTwitter />
          </motion.a>
          <motion.a variants={followVariants} target="_blank" href="https://www.linkedin.com/in/idris-ademola-a0863b2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        {/* <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="" />
          LMA CERTIFICED
          <br />
          PROFESSIONAL
          <br />
          UI DESIGNER
        </motion.div> */}
        {/* CONTACT BUTTON */}

        <motion.div
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <Link to='contact' smooth duration={100}>
            <motion.div
              className="contactButton"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="circleText">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          {/* Bg Image of Me */}
          <img src="/bg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
