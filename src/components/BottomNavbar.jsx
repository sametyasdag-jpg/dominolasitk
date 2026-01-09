'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  HiOutlineShoppingCart, 
  HiShoppingCart,
  HiOutlineShoppingBag,
  HiShoppingBag,
  HiOutlineChatAlt2, 
  HiChatAlt2,
  HiOutlineHome,
  HiHome
} from 'react-icons/hi';
import { 
  GiCarWheel,
  GiSteeringWheel,
  GiSpeedometer,
  GiCarKey
} from 'react-icons/gi';
import { 
  FaMotorcycle, 
  FaCar,
  FaGasPump
} from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const navItems = [
  { 
    id: 'home',
    href: '/', 
    label: 'Ana Sayfa', 
    icon: HiOutlineHome,
    activeIcon: HiHome
  },
  { 
    id: 'orders',
    href: '/siparislerim', 
    label: 'Siparişlerim', 
    icon: HiOutlineShoppingBag,
    activeIcon: HiShoppingBag
  },
  { 
    id: 'logo',
    href: '/', 
    label: 'Ana Sayfa', 
    isLogo: true 
  },
  { 
    id: 'cart',
    href: '/sepet', 
    label: 'Sepet', 
    icon: HiOutlineShoppingCart,
    activeIcon: HiShoppingCart
  },
  { 
    id: 'chat',
    href: '/destek', 
    label: 'Destek', 
    icon: HiOutlineChatAlt2,
    activeIcon: HiChatAlt2
  },
];

// Lastik ve otomotiv temalı ikonlar
const icons = [
  { id: 'tire', Icon: GiCarWheel },                 // Lastik/Tekerlek
  { id: 'car', Icon: FaCar },                       // Araba
  { id: 'steering', Icon: GiSteeringWheel },        // Direksiyon
  { id: 'gas', Icon: FaGasPump },                   // Motor Yağı/Benzin
  { id: 'speedometer', Icon: GiSpeedometer },       // Hız Göstergesi
  { id: 'carkey', Icon: GiCarKey },                 // Araba Anahtarı
  { id: 'motorcycle', Icon: FaMotorcycle },         // Motorsiklet
];

// Sliding icon component with fade in/out
function SlidingIcons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % icons.length);
    }, 4000); // 4 saniye - daha sık geçiş
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIndex].Icon;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={icons[currentIndex].id}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeInOut'
          }}
          className="text-white absolute flex items-center justify-center"
        >
          <CurrentIcon className="w-8 h-8" />
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export default function BottomNavbar({ force = false }) {
  const pathname = usePathname();
  const { getCartCount, isLoaded: cartLoaded } = useCart();
  const [activeTab, setActiveTab] = useState('home');
  const [orderCount, setOrderCount] = useState(0);

  // Hide on admin, checkout, product, cart, and sudoadmin pages (unless forced)
  const isAdminPage = pathname.startsWith('/admin');
  const isCheckoutPage = pathname.startsWith('/checkout');
  const isProductPage = pathname.startsWith('/urun/');
  const isCartPage = pathname.startsWith('/sepet');
  const isSudoAdminPage = pathname.startsWith('/sudoadmin');

  useEffect(() => {
    if (pathname === '/') setActiveTab('home');
    else if (pathname === '/siparislerim') setActiveTab('orders');
    else if (pathname === '/sepet') setActiveTab('cart');
    else if (pathname === '/destek') setActiveTab('chat');
  }, [pathname]);

  // Load order count from localStorage
  useEffect(() => {
    const loadOrderCount = () => {
      try {
        const savedOrders = localStorage.getItem('userOrders');
        if (savedOrders) {
          const orders = JSON.parse(savedOrders);
          setOrderCount(orders.length);
        }
      } catch (error) {
        console.error('Error loading orders:', error);
      }
    };

    loadOrderCount();
    // Listen for storage changes
    window.addEventListener('storage', loadOrderCount);
    // Custom event for same-tab updates
    window.addEventListener('ordersUpdated', loadOrderCount);
    
    return () => {
      window.removeEventListener('storage', loadOrderCount);
      window.removeEventListener('ordersUpdated', loadOrderCount);
    };
  }, []);

  // If force is true, show the navbar regardless of page
  if (!force && (isAdminPage || isCheckoutPage || isProductPage || isCartPage || isSudoAdminPage)) return null;

  const cartCount = cartLoaded ? getCartCount() : 0;

  const leftItems = navItems.filter(item => item.id === 'home' || item.id === 'orders');
  const rightItems = navItems.filter(item => item.id === 'cart' || item.id === 'chat');

  const renderNavItem = (item) => {
    const isActive = activeTab === item.id;
    const Icon = isActive ? item.activeIcon : item.icon;

    return (
      <Link 
        key={item.id}
        href={item.href}
        onClick={() => setActiveTab(item.id)}
        className="relative flex flex-col items-center gap-1 py-2 flex-1"
      >
        <motion.div
          initial={false}
          animate={{ 
            scale: isActive ? 1.1 : 1,
            y: isActive ? -2 : 0
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative"
        >
          <Icon className={`w-6 h-6 transition-colors ${isActive ? 'text-red-500' : 'text-gray-400'}`} />
          
          {/* Badge for cart */}
          {item.id === 'cart' && cartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              {cartCount > 99 ? '99+' : cartCount}
            </motion.span>
          )}
          
          {/* Badge for orders */}
          {item.id === 'orders' && orderCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              {orderCount > 99 ? '99+' : orderCount}
            </motion.span>
          )}
        </motion.div>
        
        <motion.span 
          initial={false}
          animate={{ 
            opacity: isActive ? 1 : 0.6,
            scale: isActive ? 1.05 : 1
          }}
          className={`text-[10px] font-medium transition-colors ${isActive ? 'text-red-500' : 'text-gray-400'}`}
        >
          {item.label}
        </motion.span>

        {/* Active indicator */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="activeTab"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -bottom-1 w-1 h-1 rounded-full bg-red-500"
            />
          )}
        </AnimatePresence>
      </Link>
    );
  };

  return (
    <nav data-bottom-nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
      <div className="h-20 max-w-lg mx-auto px-2 flex items-center">
        {/* Left side - 2 items */}
        <div className="flex-1 flex items-center justify-around">
          {leftItems.map(renderNavItem)}
        </div>

        {/* Center - Animated Icons with Gradient Background */}
        <div className="flex items-center justify-center px-2">
          <Link 
            href="/"
            className="relative -mt-4"
            onClick={() => setActiveTab('home')}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl relative"
            >
              {/* Gradient Background - Siyah/Gri */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-neutral-800 to-zinc-900" />
              
              {/* Animated shine effect - Daha sık */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Second shine layer for more effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                animate={{
                  x: ['100%', '-100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Sliding Icons */}
              <div className="relative w-full h-full flex items-center justify-center">
                <SlidingIcons />
              </div>
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/30" />
            </motion.div>
          </Link>
        </div>

        {/* Right side - 2 items */}
        <div className="flex-1 flex items-center justify-around">
          {rightItems.map(renderNavItem)}
        </div>
      </div>
      
      {/* Safe area spacer */}
      <div className="h-safe-area-bottom bg-white" />
    </nav>
  );
}
