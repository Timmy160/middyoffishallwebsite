import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/IMG/about.jpg';
import abouttext from '../assets/IMG/abouttext.png';
import RypeLogo from '../assets/IMG/Rypelogo.png';

function About() {
  // Variant for the Heading (Slides from deep left)
  const slideFromLeft = {
    hidden: { opacity: 0, x: -150 }, // Starting point off-screen
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  // Variant for Paragraphs (Fade up)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <>
      {/* Black Shade Divider */}
      <div className="relative z-[40] w-full h-[63px] bg-[#0f0f0f]" />

      <section
      id="about" 
        className="relative z-[30] w-full mx-auto bg-black overflow-hidden flex flex-col lg:flex-row min-h-[750px]"
        style={{
          maxWidth: '1512px',
          backgroundImage: `url(${abouttext})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center -80px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* IMAGE SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of image is seen
          transition={{ duration: 1 }}
          className="flex-[0_0_100%] lg:flex-[0_0_50%] relative h-[500px] lg:h-auto order-1 lg:order-2 z-10"
        >
          <img 
            src={aboutImage} 
            alt="Middy Offishall" 
            className="w-full h-full object-cover object-top"
          />
          {/* THE SHADOW FADE */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
        </motion.div>

        {/* TEXT CONTENT SECTION */}
        <div className="flex-[0_0_100%] lg:flex-[0_0_50%] pt-10 pb-20 px-8 lg:pl-[70px] lg:pt-10 flex flex-col gap-[40px] lg:gap-[50px] z-20 box-border order-2 lg:order-1 bg-black lg:bg-transparent">
          
          {/* TOP BLOCK */}
          <div className="max-w-[380px]">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Heading waits until half visible
              variants={slideFromLeft}
              className="text-[28px] lg:text-[31px] leading-none uppercase text-white mb-6 lg:mb-[30px]"
              style={{ fontFamily: '"Cinema Sunday", serif' }}
            >
              Who Is <br /> Middy Offishall?
            </motion.h2>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              className="text-[#9F9F9F] text-[15px] lg:text-[16px] leading-[115%] font-sans"
            >
              Middy Offishall is an Afro-dancehall artist whose sound embodies street romance, and global swagger. His music blends Afrobeats rhythm with Caribbean energy, bold, addictive, and unfiltered. He is a voice for the streets.
            </motion.p>
          </div>

          {/* MIDDLE BLOCK */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-[420px] lg:ml-[60px]"
          >
            <p className="text-[#9F9F9F] text-[15px] lg:text-[16px] leading-[115%] font-sans">
              Born and raised in Lagos, Nigeria, Middy Offishall’s songs channel stories that breeds love, ambition, loyalty, and vibe. He is part of the new wave of Nigerian acts redefining afrobeats for the world.
            </p>
          </motion.div>

          {/* BOTTOM BLOCK */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="relative max-w-[380px]"
          >
            <span className="absolute w-2 h-2 bg-[#ff1800] rounded-full -left-5 lg:-left-[21px] top-1" />
            <p className="text-[#9F9F9F] text-[15px] lg:text-[16px] leading-[115%] font-sans mb-[15px]">
              Managed by Rype MuziQ, Middy Offishall stands for originality, resilience, and evolution. He is opening a lane that feels both familiar and fresh. This is the journey of The Middy Show.
            </p>
            <img 
              src={RypeLogo} 
              alt="Rype MuziQ Logo" 
              className="h-[25px] lg:h-[30px] w-auto block mt-[10px] object-contain"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;