import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };
  
  // Handle scroll to top button visibility
  useState(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Social media click handler
  const handleSocialClick = (platform) => {
    // In a real app, these would link to actual social pages
    alert(`Redirecting to ${platform} page...`);
  };
  
  return (
    <footer className="bg-[#495E57] text-white py-12 px-6 md:px-24 relative">
      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-8 right-8 bg-[#F4CE14] text-[#495E57] rounded-full p-3 shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Logo Section with Newsletter */}
          <div className="mb-8 md:mb-0">
            <motion.h2 
              className="text-3xl font-bold text-[#F4CE14] mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/')}
            >
              Little Lemon
            </motion.h2>
            <p className="text-[#EDEFEE] mb-4">
              Authentic Mediterranean cuisine with a modern twist.
            </p>
            
            {/* Newsletter subscription */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">SUBSCRIBE TO OUR NEWSLETTER</h4>
              {isSubscribed ? (
                <div className="bg-[#5a6f68] p-2 rounded-md text-white text-sm">
                  Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="px-3 py-2 bg-[#5a6f68] text-white placeholder-gray-300 rounded-l-md w-full focus:outline-none"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F4CE14] text-[#495E57] px-3 py-2 font-medium rounded-r-md"
                  >
                    Join
                  </motion.button>
                </form>
              )}
            </div>
            
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#F4CE14] transition"
                onClick={() => handleSocialClick('Facebook')}
              >
                <FaFacebook size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#F4CE14] transition"
                onClick={() => handleSocialClick('Instagram')}
              >
                <FaInstagram size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#F4CE14] transition"
                onClick={() => handleSocialClick('Twitter')}
              >
                <FaTwitter size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#F4CE14] transition"
                onClick={() => handleSocialClick('YouTube')}
              >
                <FaYoutube size={24} />
              </motion.button>
            </div>
          </div>          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F4CE14]">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-[#F4CE14] transition flex items-center"
                  onMouseEnter={(e) => e.target.classList.add('translate-x-1')}
                  onMouseLeave={(e) => e.target.classList.remove('translate-x-1')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-[#F4CE14] transition flex items-center"
                  onMouseEnter={(e) => e.target.classList.add('translate-x-1')}
                  onMouseLeave={(e) => e.target.classList.remove('translate-x-1')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="hover:text-[#F4CE14] transition flex items-center"
                  onMouseEnter={(e) => e.target.classList.add('translate-x-1')}
                  onMouseLeave={(e) => e.target.classList.remove('translate-x-1')}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/reservation" 
                  className="hover:text-[#F4CE14] transition flex items-center"
                  onMouseEnter={(e) => e.target.classList.add('translate-x-1')}
                  onMouseLeave={(e) => e.target.classList.remove('translate-x-1')}
                >
                  Reservations
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    // Add item to cart
                    const cart = JSON.parse(localStorage.getItem('littleLemonCart') || '[]');
                    cart.push({ id: Date.now(), name: 'Quick Order Item' });
                    localStorage.setItem('littleLemonCart', JSON.stringify(cart));
                    // Force navbar to update (this would be better with context or Redux)
                    window.dispatchEvent(new Event('storage'));
                    // Alert user
                    alert('Item added to cart for online ordering!');
                  }}
                  className="hover:text-[#F4CE14] transition flex items-center"
                  onMouseEnter={(e) => e.target.classList.add('translate-x-1')}
                  onMouseLeave={(e) => e.target.classList.remove('translate-x-1')}
                >
                  Order Online
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F4CE14]">Contact</h3>
            <address className="not-italic space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center hover:text-[#F4CE14] transition w-full text-left"
                onClick={() => window.open('https://maps.google.com/?q=123+Lemon+Street+Chicago+IL+60601', '_blank')}
              >
                <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                <div>
                  <p>123 Lemon Street</p>
                  <p>Chicago, IL 60601</p>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center hover:text-[#F4CE14] transition"
                onClick={() => window.open('tel:5551234567')}
              >
                <FaPhone className="mr-2" />
                <p>(555) 123-4567</p>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }} 
                className="flex items-center hover:text-[#F4CE14] transition"
                onClick={() => window.open('mailto:info@littlelemon.com')}
              >
                <FaEnvelope className="mr-2" />
                <p>info@littlelemon.com</p>
              </motion.button>
            </address>
          </div>          {/* Hours with Open/Closed Status */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F4CE14]">Hours</h3>
            
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Open Now</span>
              </div>
              <button 
                className="text-xs underline hover:text-[#F4CE14]"
                onClick={() => navigate('/reservation')}
              >
                Make a reservation
              </button>
            </div>
            
            <ul className="space-y-2">
              {[
                { day: 'Mon-Fri', hours: '11am - 10pm', isToday: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(new Date().toLocaleString('en-us', {weekday:'short'})) },
                { day: 'Sat', hours: '10am - 11pm', isToday: new Date().toLocaleString('en-us', {weekday:'short'}) === 'Sat' },
                { day: 'Sun', hours: '10am - 9pm', isToday: new Date().toLocaleString('en-us', {weekday:'short'}) === 'Sun' }
              ].map((schedule, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className={schedule.isToday ? 'font-medium text-[#F4CE14]' : ''}>
                    {schedule.day}:
                  </span>
                  <span className={schedule.isToday ? 'font-medium text-[#F4CE14]' : ''}>
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 border border-[#F4CE14] text-[#F4CE14] rounded-lg px-3 py-1 text-sm hover:bg-[#F4CE14] hover:text-[#495E57] transition-all w-full"
              onClick={() => navigate('/reservation')}
            >
              Reserve a Table
            </motion.button>
          </div>
        </motion.div>

        {/* Copyright and Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border-t border-[#6b7d76] mt-12 pt-6 text-[#EDEFEE]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0 justify-center">
              <button className="text-sm hover:text-[#F4CE14] transition">Privacy Policy</button>
              <button className="text-sm hover:text-[#F4CE14] transition">Terms of Service</button>
              <button 
                className="text-sm hover:text-[#F4CE14] transition"
                onClick={() => {
                  // Demo cookie consent functionality
                  alert('Cookie preferences saved!');
                }}
              >
                Cookie Preferences
              </button>
              <button 
                className="text-sm hover:text-[#F4CE14] transition"
                onClick={() => {
                  // Scroll to top as a site map alternative for this demo
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Sitemap
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;