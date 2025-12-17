import React from 'react';
import { motion } from 'framer-motion';
import  MainImageRight from '../assets/IMG/MainImageRight.png';
import  MainImageLeft from '../assets/IMG/MainImageLeft.png';

function Show() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 1, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative w-full h-[600px] md:h-[497px] overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Images Layer */}
      <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">
        {/* Left Image (Top on Mobile) */}
        <div className="relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden border-b border-white/10 md:border-b-0">
          <img
            src={MainImageLeft}
            alt="Main artist face left"
            className="w-full h-full object-cover object-center md:object-right-top brightness-[0.45] md:brightness-50"
          />
        </div>

        {/* Right Image (Bottom on Mobile) */}
        <div className="relative w-full h-1/2 md:w-1/2 md:h-full overflow-hidden">
          <img
            src={MainImageRight}
            alt="Main artist face right"
            className="w-full h-full object-cover object-center md:object-left-top brightness-[0.45] md:brightness-50"
          />
        </div>
      </div>

      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/20 z-10" />

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
        
        {/* Play Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 md:w-24 md:h-24 border-4 border-white rounded-full flex justify-center items-center mb-6 cursor-pointer pl-2 hover:bg-white/10 transition-all"
        >
          <div className="w-0 h-0 border-l-[25px] border-l-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent" />
        </motion.div>

        {/* Text Group */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-2xl md:text-3xl uppercase text-white leading-tight tracking-wide" 
              style={{ fontFamily: '"Cinema Sunday", serif' }}>
            Welcome To The Middy Show
          </h2>
          <p className="max-w-[320px] md:max-w-[385px] text-sm md:text-base text-[#9F9F9F] font-sans">
            The sound hits different when you see it.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Show;