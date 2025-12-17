import React from 'react';
import { motion } from 'framer-motion';
import MiddyHeader from '../assets/IMG/MiddyHeader.png';  
import Playimg from '../assets/IMG/play.png'; 
import Spotify from '../assets/IMG/spotifyimg.png';  
import Applemusic from '../assets/IMG/applemusic.png';  
import AudioMark from '../assets/IMG/audiomark.png';  
import Youtube from '../assets/IMG/youtube.png';  
import { CirclePlay } from 'lucide-react';

function Hero() {
  // --- ANIMATION VARIANTS ---
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- DESKTOP STYLES ---
  const specificTextStyle = {
    position: 'absolute', top: '157px', left: '67px', width: '556px',
    zIndex: 10, margin: 0, fontFamily: "'Bodoni Moda', serif", fontWeight: 600,
    fontSize: '72px', lineHeight: '98%', textTransform: 'uppercase',
    background: 'linear-gradient(88.38deg, #C7C7C7 1.37%, #FFFFFF 42.15%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  };

  const buttonsWrapperStyle = {
    position: 'absolute', top: '340px', left: '67px',
    display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10,
  };

  const rightSectionContainer = {
    position: 'absolute', top: '410px', left: '840px',
    display: 'flex', alignItems: 'center', gap: '32px', zIndex: 10,
  };

  const AfroCommandBlock = () => (
    <div style={{ fontFamily: 'Helvetica Neue, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '.7', textAlign: 'center' }}>
      <span style={{ background: 'linear-gradient(90deg, #999999 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Afro-dancehall</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
        <motion.div 
          animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '8px', height: '8px', background: 'rgba(255, 24, 0, 1)', borderRadius: '50%', flexShrink: 0 }} 
        />
        <span style={{ background: 'linear-gradient(90deg, #999999 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in full Command</span>
      </div>
    </div>
  );

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVars}
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${MiddyHeader})` }}
    >
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* --- MOBILE LAYOUT --- */}
      <div className="lg:hidden relative z-10 h-full flex flex-col justify-between px-6 pt-20 pb-10">
        <motion.div variants={itemLeft}>
          <h1 className="text-[52px] font-semibold uppercase leading-[95%] font-serif bg-gradient-to-r from-[#C7C7C7] to-white bg-clip-text text-transparent">
            Middy<br />Offishall
          </h1>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex items-center justify-center w-12 h-10 rounded-md bg-[#626262] border border-[#A9A9A9]"><CirclePlay className="w-5 h-5 text-white" /></div>
            <div className="flex items-center justify-center px-4 h-10 rounded-md bg-[#626262] border border-[#A9A9A9] text-white font-medium">Listen Now</div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-10">
          <motion.div variants={itemUp}><AfroCommandBlock /></motion.div>
          <motion.div variants={itemUp} className="flex gap-4">
             {[Spotify, Applemusic, AudioMark, Youtube].map((icon, i) => (
                <div key={i} className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><img src={icon} className="w-4 h-4 object-contain" /></div>
             ))}
          </motion.div>
          
          <motion.div variants={itemUp} className="w-full">
            <div className="flex items-center gap-4">
              <img src={Playimg} alt="Play" className="w-[14px] h-auto flex-shrink-0" />
              <div className="flex-1 h-[3px] bg-[#7C7C7C] rounded-full overflow-hidden">
                <div className="h-full w-[8%] bg-white" />
              </div>
            </div>
            {/* TIGHTER MARGIN HERE */}
            <div className="pl-[30px] mt-1">
              <span className="text-[12px] text-[#909090] font-medium">0:00</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden lg:block">
        <motion.h1 variants={itemLeft} style={specificTextStyle}>Middy<br />Offishall</motion.h1>

        <motion.div variants={itemLeft} style={buttonsWrapperStyle}>
          <div className="flex items-center justify-center w-[48px] h-[40px] rounded-[6px] bg-[#626262] border border-[#A9A9A9] cursor-pointer hover:scale-105 transition-transform">
            <CirclePlay className="w-[18px] h-[18px] text-white" />
          </div>
          <div className="flex items-center justify-center w-[115px] h-[40px] rounded-[6px] bg-[#626262] border border-[#A9A9A9] cursor-pointer hover:scale-105 transition-transform">
            <span className="text-white font-sans font-medium text-[16px]">Listen Now</span>
          </div>
        </motion.div>

        <motion.div variants={itemRight} style={rightSectionContainer}>
          <AfroCommandBlock />
          <div className="flex gap-[12px]">
            {[Spotify, Applemusic, AudioMark, Youtube].map((icon, i) => (
               <div key={i} className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"><img src={icon} className="w-4 h-4 object-contain" /></div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemUp} className="absolute bottom-[40px] left-[67px] z-10">
          <div className="flex items-center gap-[16px]">
            <img src={Playimg} alt="Play" className="w-[14px] h-auto flex-shrink-0" />
            <div className="w-[1100px] h-[3px] bg-[#7C7C7C] rounded-[200px] overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-[8%] bg-white rounded-[200px]" />
            </div>
          </div>
          {/* TIGHTER MARGIN HERE */}
          <div className="pl-[30px] -mt-2">
            <span className="text-[12px] text-[#909090] font-medium">0:00</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;