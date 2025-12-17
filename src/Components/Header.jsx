import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: '500',
  };

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 }
  };

  // Define nav items with their corresponding section IDs
  const navItems = [
    { name: 'Bio', id: 'about' }, // Takes you to the About section
    { name: 'Discography', id: 'discography' },
    { name: 'Videos', id: 'videos' }
  ];

  return (
    <header className="fixed inset-x-0 -top-[1px] h-[63px] bg-[rgba(98,98,98,1)] z-[100] border-b border-white/5">
      <div className="h-full max-w-full px-6 lg:px-[67px]">
        <div className="flex h-full items-center justify-between">
          
          {/* LEFT — Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white whitespace-nowrap z-[110]"
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: '15px',
              fontWeight: '600',
              lineHeight: '100%',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            MIDDY OFFISHALL
          </motion.div>

          {/* RIGHT — Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                style={navLinkStyle}
                className="text-[rgba(204,204,204,1)] uppercase text-[12px] leading-[100%] tracking-[0.12em] transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-white z-[110] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 w-full h-screen bg-[rgba(40,40,40,0.98)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden z-[105]"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                variants={linkVariants}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                style={navLinkStyle}
                className="text-white uppercase text-[14px] tracking-[0.25em] hover:text-gray-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;