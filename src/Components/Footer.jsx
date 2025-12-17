import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiInstagram, 
  SiX, 
  SiSpotify, 
  SiAudiomack, 
  SiYoutube 
} from 'react-icons/si';
import { FaMusic } from 'react-icons/fa'; 
import RypeLogo from '../assets/IMG/Rypelogo.png';

function Footer() {
  const [email, setEmail] = useState('');

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <footer className="w-full flex flex-col font-sans overflow-hidden">
      
      {/* --- RED SECTION (Newsletter) --- */}
      <div className="w-full bg-[#8A0D00] flex justify-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full max-w-[1512px] min-h-[130px] flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-0 lg:px-20 gap-8"
        >
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <h2 className="text-[28px] md:text-[31px] uppercase text-white leading-tight" 
                style={{ fontFamily: '"Cinema Sunday", serif' }}>
              Join the Offishall Tribe
            </h2>
            <p className="text-white text-sm md:text-base opacity-90">
              Get exclusive updates, new drops, and early access to shows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-[323px] h-[51px] bg-transparent border border-[#A9A9A9] rounded-md px-4 text-white placeholder-white/70 outline-none focus:border-white transition-colors"
            />
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-[152px] h-[51px] bg-transparent border border-[#A9A9A9] rounded-md text-white font-bold hover:bg-white/10 transition-all cursor-pointer"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* --- BLACK SECTION (Links & Socials) --- */}
      <div className="w-full bg-black flex justify-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full max-w-[1512px] flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 py-16 lg:px-20 lg:pt-20 lg:pb-12 gap-12 lg:gap-0 text-[#9F9F9F]"
        >
          
          {/* Left Column: Copyright & Logo */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-sm leading-relaxed">
              © 2025 Middy Offishall / <br className="hidden lg:block" /> Rype MuziQ. All rights reserved.
            </span>
            
            {/* Sharp Logo */}
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={RypeLogo} 
              alt="Rype Logo" 
              className="w-24 mt-8 brightness-0 invert-[0.6] sepia-0 contrast-125 hover:invert transition-all duration-300"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>

          {/* Middle: Brand Tagline */}
          <div className="hidden xl:block">
             <span className="text-sm">Powered by Rype MuziQ</span>
          </div>

          {/* Right Column: Navigation & Socials */}
          <div className="flex flex-col items-center lg:items-end gap-10">
            
            {/* Links */}
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:text-white transition-colors duration-200">BIO</a>
              <a href="#discography" className="hover:text-white transition-colors duration-200">Discography</a>
              <a href="#video" className="hover:text-white transition-colors duration-200">Videos</a>
            </div>

            {/* Social Icons Group */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              
              {/* Social Media */}
              <div className="flex gap-4">
                <SiInstagram className="text-xl cursor-pointer hover:text-white transition-all transform hover:scale-110" />
                <SiX className="text-xl cursor-pointer hover:text-white transition-all transform hover:scale-110" />
              </div>

              {/* Streaming Platforms */}
              <div className="flex gap-4">
                {[
                  { Icon: SiSpotify, key: 'spot' },
                  { Icon: FaMusic, key: 'apple', size: 'text-[12px]' },
                  { Icon: SiAudiomack, key: 'audio' },
                  { Icon: SiYoutube, key: 'yt' }
                ].map((item) => (
                  <motion.div 
                    key={item.key}
                    whileHover={{ y: -4, backgroundColor: '#f3f3f3' }}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <item.Icon className={`text-black ${item.size || 'text-sm'}`} />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;