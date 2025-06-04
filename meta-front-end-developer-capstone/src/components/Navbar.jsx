import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaUtensils, FaRegClock, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close mobile menu when location changes
    setIsOpen(false);
    setShowCart(false);
    setUserDropdown(false);
    
    // Get cart items from localStorage if available
    const savedCart = localStorage.getItem('spiceDelightCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart.length || 0);
      } catch (e) {
        console.error('Error parsing cart data', e);
      }
    }

    // Listen for storage events to update cart
    const handleStorageChange = () => {
      const updatedCart = localStorage.getItem('spiceDelightCart');
      if (updatedCart) {
        try {
          const parsedCart = JSON.parse(updatedCart);
          setCartItems(parsedCart.length || 0);
        } catch (e) {
          console.error('Error parsing cart data', e);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const addToCart = () => {
    const newCount = cartItems + 1;
    setCartItems(newCount);
    
    // Save to localStorage (simple implementation)
    const currentCart = JSON.parse(localStorage.getItem('spiceDelightCart') || '[]');
    currentCart.push({ 
      id: Date.now(), 
      name: 'Special Thali', 
      price: 14.99 
    });
    localStorage.setItem('spiceDelightCart', JSON.stringify(currentCart));
    
    // Show cart dropdown briefly
    setShowCart(true);
    setTimeout(() => setShowCart(false), 2000);
  };
  
  const clearCart = () => {
    setCartItems(0);
    localStorage.setItem('spiceDelightCart', '[]');
    setShowCart(false);
  };

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#495E57] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaRegClock className="mr-1" />
              <span className="text-sm">Open: 11am - 11pm</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-1" />
              <span className="text-sm">(555) 789-4321</span>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-sm mr-3 hover:text-[#F4CE14]">Online Order</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-sm hover:text-[#F4CE14]">Table Booking</a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-[#FFF8E7] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center">
              <div className="mr-3 h-12 w-12 bg-[#F4CE14] rounded-full flex items-center justify-center">
                <FaUtensils className="h-6 w-6 text-[#495E57]" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h1 className="text-3xl font-bold text-[#495E57] cursor-pointer">Spice Delight</h1>
                <p className="text-xs text-[#EE9972] -mt-1 ml-1">Authentic Indian Cuisine</p>
              </motion.div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-[#333333]">
            <Link to="/" className={`hover:text-[#F4CE14] transition-all duration-300 pb-1 border-b-2 ${isActive('/') ? 'border-[#F4CE14] text-[#F4CE14]' : 'border-transparent'}`}>Home</Link>
            <Link to="/about" className={`hover:text-[#F4CE14] transition-all duration-300 pb-1 border-b-2 ${isActive('/about') ? 'border-[#F4CE14] text-[#F4CE14]' : 'border-transparent'}`}>About</Link>
            <Link to="/menu" className={`hover:text-[#F4CE14] transition-all duration-300 pb-1 border-b-2 ${isActive('/menu') ? 'border-[#F4CE14] text-[#F4CE14]' : 'border-transparent'}`}>Menu</Link>
            <div className="relative group">
              <button type="button" className={`hover:text-[#F4CE14] transition-all duration-300 pb-1 border-b-2 flex items-center focus:outline-none ${location.pathname.startsWith('/menu?category=') ? 'border-[#F4CE14] text-[#F4CE14]' : 'border-transparent'}`}>Specialties
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-xl py-2 z-50 hidden group-hover:block">
                <Link to="/menu?category=north" className="block px-4 py-2 hover:bg-gray-100">North Indian</Link>
                <Link to="/menu?category=south" className="block px-4 py-2 hover:bg-gray-100">South Indian</Link>
                <Link to="/menu?category=tandoor" className="block px-4 py-2 hover:bg-gray-100">Tandoor Specials</Link>
                <Link to="/menu?category=vegetarian" className="block px-4 py-2 hover:bg-gray-100">Vegetarian Delights</Link>
              </div>
            </div>
            <Link to="/reservation" className={`hover:text-[#F4CE14] transition-all duration-300 pb-1 border-b-2 ${isActive('/reservation') ? 'border-[#F4CE14] text-[#F4CE14]' : 'border-transparent'}`}>Reservation</Link>
            <Link to="/contact" className={`hover:text-[#F4CE14] transition-all duration-300 pb-1 border-b-2 ${isActive('/contact') ? 'border-[#F4CE14] text-[#F4CE14]' : 'border-transparent'}`}>Contact</Link>
          </div>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Button */}
            <div className="relative">
              <motion.button 
                className="p-2 rounded-full hover:bg-[#E8E0CF] relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCart(!showCart)}
              >
                <FaShoppingCart className="text-[#495E57]" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#F4CE14] text-[#495E57] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItems}
                  </span>
                )}
              </motion.button>
              
              {/* Cart Dropdown */}
              <AnimatePresence>
                {showCart && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cartItems > 0 ? (
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">Your Cart ({cartItems})</h3>
                        <p className="text-sm text-gray-500 mb-3">You have {cartItems} items in your cart</p>
                        <div className="flex justify-between">
                          <button 
                            className="text-[#495E57] hover:underline text-sm"
                            onClick={clearCart}
                          >
                            Clear Cart
                          </button>
                          <button 
                            className="bg-[#F4CE14] text-[#495E57] px-3 py-1 rounded-md hover:bg-[#E0BB12] transition text-sm"
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 text-center">
                        <p className="text-gray-500">Your cart is empty</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* User Button */}
            <div className="relative">
              <motion.button 
                className="p-2 rounded-full hover:bg-[#E8E0CF]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setUserDropdown(!userDropdown)}
              >
                <User className="text-[#495E57]" />
              </motion.button>
              
              {/* User Dropdown */}
              <AnimatePresence>
                {userDropdown && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Login</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sign Up</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">My Account</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Order History</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Loyalty Points</button>
                    <button 
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        alert('Demo: User preferences would be shown here');
                      }}
                    >
                      Preferences
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Order Now Button */}
            <motion.button 
              className="bg-[#495E57] text-white px-4 py-2 rounded-lg hover:bg-[#3a4841] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addToCart}
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Cart Icon */}
            <div className="relative">
              <motion.button 
                className="p-2 rounded-full hover:bg-[#E8E0CF] relative"
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCart(!showCart)}
              >
                <FaShoppingCart className="text-[#495E57]" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#F4CE14] text-[#495E57] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItems}
                  </span>
                )}
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2 rounded-lg hover:bg-[#E8E0CF]" 
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} className="text-[#495E57]" /> : <Menu size={24} className="text-[#495E57]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden py-4 bg-[#FFF8E7] border-t border-gray-200"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-1 text-[#333333] font-medium">
                <Link 
                  to="/" 
                  className={`w-full text-center py-2 ${isActive('/') ? 'bg-[#F4CE14] text-[#495E57]' : 'hover:bg-[#E8E0CF]'}`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`w-full text-center py-2 ${isActive('/about') ? 'bg-[#F4CE14] text-[#495E57]' : 'hover:bg-[#E8E0CF]'}`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link 
                  to="/menu" 
                  className={`w-full text-center py-2 ${isActive('/menu') ? 'bg-[#F4CE14] text-[#495E57]' : 'hover:bg-[#E8E0CF]'}`}
                  onClick={toggleMenu}
                >
                  Menu
                </Link>
                <div className="w-full text-center py-2 hover:bg-[#E8E0CF] font-semibold">
                  Our Specialties
                </div>
                <div className="w-full bg-[#FFF8E7]">
                  <Link to="/menu?category=north" className="block w-full text-center py-2 text-sm hover:bg-[#E8E0CF]" onClick={toggleMenu}>
                    North Indian
                  </Link>
                  <Link to="/menu?category=south" className="block w-full text-center py-2 text-sm hover:bg-[#E8E0CF]" onClick={toggleMenu}>
                    South Indian
                  </Link>
                  <Link to="/menu?category=tandoor" className="block w-full text-center py-2 text-sm hover:bg-[#E8E0CF]" onClick={toggleMenu}>
                    Tandoor Specials
                  </Link>
                  <Link to="/menu?category=vegetarian" className="block w-full text-center py-2 text-sm hover:bg-[#E8E0CF]" onClick={toggleMenu}>
                    Vegetarian Delights
                  </Link>
                </div>
                <Link 
                  to="/reservation" 
                  className={`w-full text-center py-2 ${isActive('/reservation') ? 'bg-[#F4CE14] text-[#495E57]' : 'hover:bg-[#E8E0CF]'}`}
                  onClick={toggleMenu}
                >
                  Reservation
                </Link>
                <Link 
                  to="/contact" 
                  className={`w-full text-center py-2 ${isActive('/contact') ? 'bg-[#F4CE14] text-[#495E57]' : 'hover:bg-[#E8E0CF]'}`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <button 
                  className="w-full bg-[#495E57] text-white py-2"
                  onClick={() => {
                    addToCart();
                    toggleMenu();
                  }}
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Mobile Cart Dropdown */}
        <AnimatePresence>
          {showCart && (
            <motion.div 
              className="md:hidden fixed inset-x-0 top-[72px] mx-4 bg-white rounded-lg shadow-xl z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Your Cart ({cartItems})</h3>
                  <button onClick={() => setShowCart(false)}>
                    <X size={20} />
                  </button>
                </div>
                
                {cartItems > 0 ? (
                  <>
                    <p className="text-sm text-gray-500 mb-3">You have {cartItems} items in your cart</p>
                    <div className="flex justify-between">
                      <button 
                        className="text-[#495E57] hover:underline text-sm"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </button>
                      <button 
                        className="bg-[#F4CE14] text-[#495E57] px-3 py-1 rounded-md hover:bg-[#E0BB12] transition text-sm"
                      >
                        Checkout
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-gray-500">Your cart is empty</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
