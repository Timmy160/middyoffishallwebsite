import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DiscopraphyImg from '../assets/IMG/discography.jpg'; 
import MiddyArtWorkImg from '../assets/IMG/MiddyArtwork.jpg'; 

function Discography() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroFinished(true);
    }, 6000); 
    return () => clearTimeout(timer);
  }, []);

  const boxes = [
    { type: 'image', content: MiddyArtWorkImg, bg: '#0A0A0A' },
    { type: 'color', bg: '#888888' },
    { type: 'color', bg: '#727272' },
    { type: 'color', bg: '#E5E5E5' },
  ];

  return (
    <motion.section
    id="discography"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full overflow-hidden bg-center bg-cover -mt-[70px] min-h-[600px] lg:h-[560px]"
      style={{ backgroundImage: `url(${DiscopraphyImg})` }}
    >
      {/* --- ZIG-ZAG FLAME INTRO --- */}
      {!isIntroFinished && (
        <motion.div className="fixed inset-0 z-[100] pointer-events-none">
          <motion.div
            className="absolute bg-[#ff3300] rounded-full"
            style={{ width: '35px', height: '35px', boxShadow: '0 0 30px #ff3300, 0 0 60px #ffae00' }}
            animate={{ 
              x: ["5vw", "85vw", "15vw", "75vw", "50vw"], 
              y: ["10vh", "40vh", "70vh", "20vh", "50vh"],
            }}
            transition={{ duration: 6, ease: "easeInOut" }}
          >
            <span className="absolute left-10 top-0 text-[#ff1800] text-xl font-medium italic uppercase whitespace-nowrap">
              MiddyOffishall
            </span>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-[1512px] mx-auto relative min-h-[600px] lg:h-[560px]">
        
        {/* --- TITLE SECTION --- */}
        <div className="relative pt-32 lg:pt-0 px-6 lg:px-0 lg:absolute lg:top-[150px] lg:left-[70px] z-30">
          <h1
            className="text-[50px] md:text-[96px] leading-[0.78] uppercase pointer-events-none select-none font-normal"
            style={{
              fontFamily: '"Cinema Sunday", serif',
              color: '#0F0F0F',
              mixBlendMode: 'color-burn',
            }}
          >
            Disco<br />
            gra<br />
            <span className="relative inline-block">
              phy
              
              {/* THE RESPONSIVE BLINKING RED DOT */}
              <motion.div 
                className="absolute bg-[#ff1800] rounded-full w-[22px] h-[22px] md:w-[30px] md:h-[30px] lg:w-[41px] lg:h-[41px]"
                initial={{ opacity: 0, scale: 0 }}
                animate={isIntroFinished ? { 
                  opacity: [1, 0.3, 1], // Blink effect
                  scale: [1, 1.1, 1],   // Pulse effect
                } : { 
                  opacity: 0, 
                  scale: 0 
                }}
                transition={isIntroFinished ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {}}
                style={{ 
                  left: '100%', 
                  bottom: '0',
                  boxShadow: isIntroFinished ? '0 0 20px rgba(255, 24, 0, 0.4)' : 'none'
                }}
              />
            </span>
          </h1>
        </div>

        {/* --- LATEST RELEASE GRID (SLIDER) --- */}
        <div className="flex flex-col lg:absolute lg:top-[155px] lg:left-[480px] w-full lg:w-auto z-20">
          <h2
            className="px-6 lg:px-0 text-[40px] md:text-[48px] text-black mb-6 lg:mb-4 mt-10 lg:mt-0"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            Latest Release
          </h2>

          <div className="w-full lg:w-[720px] overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: [0, -720] }} 
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[...boxes, ...boxes].map((box, index) => (
                <div 
                  key={index}
                  className="w-[180px] h-[180px] flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: box.bg }}
                >
                  {box.type === 'image' && (
                    <img src={box.content} alt="Middy Artwork" className="w-[118px] h-[118px] object-cover" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Discography;