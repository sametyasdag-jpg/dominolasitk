'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiBadgeCheck } from 'react-icons/hi';

export default function PromoBanner() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generate snowflakes
    const flakes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: Math.random() * 5 + 3,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60]">
      {/* Kış Kampanyası Banner - En Üst */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white h-[38px] px-3 overflow-hidden relative"
      >
        {/* Animated background shine */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        />

        {/* Snowfall Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {snowflakes.map((flake) => (
            <motion.div
              key={flake.id}
              className="absolute text-white/60"
              style={{
                left: `${flake.left}%`,
                top: '-10px',
                fontSize: `${flake.size}px`,
              }}
              animate={{
                y: [0, 50],
                x: [0, Math.sin(flake.id) * 8],
                rotate: [0, 360],
                opacity: [0.8, 0.3, 0],
              }}
              transition={{
                duration: flake.duration,
                repeat: Infinity,
                delay: flake.delay,
                ease: 'linear',
              }}
            >
              ❄
            </motion.div>
          ))}
        </div>

        {/* Animated Tire - Left to Right */}
        <motion.div
          className="absolute bottom-0.5 text-lg"
          animate={{
            x: ['-50px', 'calc(100vw + 50px)'],
            rotate: [0, 720],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          🛞
        </motion.div>

        {/* Speed lines effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              top: `${20 + i * 12}%`,
              width: '25px',
            }}
            animate={{
              x: ['-50px', 'calc(100vw + 50px)'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'linear',
            }}
          />
        ))}
        
        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center">
          {/* Center - Main Message */}
          <div className="flex items-center gap-2">
            <HiSparkles className="w-3 h-3 text-yellow-300 animate-pulse" />
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold tracking-wide bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                YIL BAŞI KAMPANYASI
              </span>
              <span className="text-[9px] sm:text-[11px] font-medium text-white/90">
                Tüm Lastiklerde %45'e varan indirim
              </span>
            </div>
            
            <HiSparkles className="w-3 h-3 text-yellow-300 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Continental Yetkili Satıcısı - Kış Kampanyası ile Navbar Arasında */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-zinc-900 via-neutral-800 to-zinc-900 text-white h-[28px] px-3 overflow-hidden relative"
      >
        {/* Subtle animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
          animate={{
            x: ['-200%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeInOut',
          }}
        />
        
        <div className="relative h-full flex items-center justify-center gap-2">
          <HiBadgeCheck className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-gray-200">
            Continental Yetkili Satıcısı
          </span>
          <HiBadgeCheck className="w-3.5 h-3.5 text-amber-400" />
        </div>
      </motion.div>
    </div>
  );
}
