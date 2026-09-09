import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../assets";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex lg:flex-row flex-col-reverse gap-10 lg:items-start items-center'>
        <div className='flex-1'>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.25 }}
            viewport={{ once: true }}
          >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            viewport={{ once: true }}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
             I'm a full-stack developer specializing in Django + JavaScript/TypeScript and Ruby on Rails. On the backend I build scalable REST APIs with Python and TypeScript; on the frontend I craft modern interfaces with React, Next.js, and Vue.js; and on mobile I ship cross-platform apps with Expo and React Native. My work spans e-commerce, LMS platforms, healthcare systems, election portals, and retail — with a strong focus on API design, authentication, payment integration, database architecture, and DevOps.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Lemuel Emmanuel — Bachelor of Engineering, Agricultural Engineering, University of Maiduguri, Maiduguri, Borno State.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1.25 }}
          viewport={{ once: true }}
          className='shrink-0 violet-gradient p-[3px] rounded-[20px] shadow-card'
        >
          <img
            src={profile}
            alt='Lemuel Emmanuel'
            className='w-48 h-48 sm:w-56 sm:h-56 rounded-[18px] object-cover'
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
