import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#495E57] text-white py-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-[#F4CE14] mb-4">Little Lemon</h2>
            <p className="text-[#EDEFEE] mb-4">
              Authentic Mediterranean cuisine with a modern twist.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#F4CE14] transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#F4CE14] transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#F4CE14] transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F4CE14]">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F4CE14] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition">About</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition">Menu</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition">Reservations</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition">Order Online</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F4CE14]">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">123 Lemon Street</p>
              <p className="mb-2">Chicago, IL 60601</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@littlelemon.com</p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#F4CE14]">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Mon-Fri:</span>
                <span>11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sat:</span>
                <span>10am - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sun:</span>
                <span>10am - 9pm</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border-t border-[#6b7d76] mt-12 pt-6 text-center text-[#EDEFEE]"
        >
          <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;