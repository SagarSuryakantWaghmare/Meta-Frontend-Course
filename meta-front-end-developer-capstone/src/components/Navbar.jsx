import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can use any icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#FFF8E7] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#495E57]">Little Lemon</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-[#333333]">
          <Link to="/" className="hover:text-[#F4CE14] transition">Home</Link>
          <Link to="/about" className="hover:text-[#F4CE14] transition">About</Link>
          <Link to="/menu" className="hover:text-[#F4CE14] transition">Menu</Link>
          <Link to="/reservation" className="hover:text-[#F4CE14] transition">Reservation</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 text-[#333333] font-medium animate-slideDown">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/menu" onClick={toggleMenu}>Menu</Link>
          <Link to="/reservation" onClick={toggleMenu}>Reservation</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
