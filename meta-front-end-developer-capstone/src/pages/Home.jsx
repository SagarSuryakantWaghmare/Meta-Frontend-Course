import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaStar, FaLeaf, FaUtensilSpoon, FaRegClock } from 'react-icons/fa';

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [heroImage, setHeroImage] = useState(0);
  const navigate = useNavigate();
  
  const heroImages = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d"
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Rotate hero images every 5 seconds
    const interval = setInterval(() => {
      setHeroImage(prev => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleReservation = () => {
    navigate('/reservation');
  };
  
  const showToast = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };
  
  const addToCart = (itemName) => {
    // Get existing cart or create new one
    const cart = JSON.parse(localStorage.getItem('littleLemonCart') || '[]');
    
    // Add new item
    cart.push({
      id: Date.now(),
      name: itemName,
      price: itemName === 'Greek Salad' ? 12.99 : 
             itemName === 'Bruschetta' ? 7.99 : 5.99
    });
    
    // Save back to localStorage
    localStorage.setItem('littleLemonCart', JSON.stringify(cart));
    
    // Show notification
    showToast(`${itemName} added to your cart!`);
    
    // Force navbar to update (this would be better with context or Redux)
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="font-sans text-[#333] bg-[#FFF8E7] overflow-x-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-4 flex items-center"
          >
            <div className="bg-[#F4CE14] p-2 rounded-full mr-3">
              <FaUtensilSpoon className="text-[#495E57]" />
            </div>
            <p>{notificationMessage}</p>
            <button 
              className="ml-4 text-gray-500 hover:text-gray-700" 
              onClick={() => setShowNotification(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F4CE14] to-[#EE9972] py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-2 inline-flex items-center rounded-full bg-[#495E57] py-1 pl-1 pr-3">
              <span className="mr-1 rounded-full bg-[#F4CE14] p-1">
                <FaStar className="h-3 w-3 text-[#495E57]" />
              </span>
              <span className="text-xs font-medium text-white">Featured Restaurant</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[#495E57] leading-tight mb-6">
              Little Lemon
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-4">
              Chicago
            </h2>
            
            <div className="flex flex-wrap gap-4 my-5">
              <div className="flex items-center">
                <FaRegClock className="text-[#495E57] mr-2" />
                <span>Open 11am - 10pm</span>
              </div>
              <div className="flex items-center">
                <FaLeaf className="text-[#495E57] mr-2" />
                <span>Fresh Ingredients</span>
              </div>
            </div>
            
            <p className="mt-4 text-xl text-[#333333] mb-8 max-w-lg">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                className="mt-2 bg-[#495E57] text-white px-8 py-4 rounded-lg hover:bg-[#3a4841] transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReservation}
              >
                Reserve a Table
                <FaArrowRight className="ml-2" />
              </motion.button>
              
              <motion.button 
                className="mt-2 border-2 border-[#495E57] text-[#495E57] bg-transparent px-8 py-4 rounded-lg hover:bg-[#495E57] hover:text-white transition duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/menu')}
              >
                Our Menu
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={heroImage}
                src={heroImages[heroImage]}
                alt="Mediterranean cuisine"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-8 border-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#495E57] rounded-2xl shadow-xl z-[-1]"></div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {heroImages.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === heroImage ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setHeroImage(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>      {/* Specials Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#495E57]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              This Week's Specials!
            </motion.h2>
            <motion.button
              className="bg-[#F4CE14] text-[#495E57] px-6 py-3 rounded-lg hover:bg-[#e6c213] transition duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/menu')}
            >
              Online Menu
            </motion.button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Greek Salad",
                price: "$12.99",
                description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
                image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3",
                tags: ["Vegetarian", "Healthy", "Fresh"]
              },
              {
                name: "Bruschetta",
                price: "$7.99",
                description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
                image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69b?ixlib=rb-4.0.3",
                tags: ["Appetizer", "Italian", "Popular"]
              },
              {
                name: "Lemon Dessert",
                price: "$5.99",
                description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
                image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3",
                tags: ["Sweet", "Dessert", "Homemade"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#FFF8E7] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-xl mb-6 w-full h-60 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-white/80 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-[#495E57] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#333]">{item.name}</h3>
                  <span className="text-lg font-semibold text-[#EE9972]">{item.price}</span>
                </div>
                
                <p className="text-[#666] mb-6 flex-grow">
                  {item.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <button 
                    className="flex-1 mr-2 bg-[#495E57] text-white py-3 rounded-lg hover:bg-[#3a4841] transition duration-300 font-semibold flex justify-center items-center"
                    onClick={() => addToCart(item.name)}
                  >
                    Add to Cart
                  </button>
                  
                  <motion.button 
                    className="flex items-center font-semibold text-[#495E57] hover:text-[#3a4841] bg-white/50 hover:bg-white p-3 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => showToast(`More details about ${item.name}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-24 bg-[#495E57]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                rating: 5,
                comment: "The best Mediterranean food I've had outside of Greece! The flavors are incredible."
              },
              {
                name: "Jane Smith",
                rating: 4,
                comment: "Wonderful atmosphere and service. The lemon dessert is to die for!"
              },
              {
                name: "Michael Johnson",
                rating: 5,
                comment: "Authentic flavors and generous portions. I'll definitely be back."
              },
              {
                name: "Sarah Williams",
                rating: 5,
                comment: "Every dish we tried was exceptional. The staff made us feel like family."
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star < testimonial.rating ? 'text-[#F4CE14]' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#F4CE14] rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-[#495E57] mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                </div>
                <p className="text-[#666] italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 px-6 md:px-24 bg-[#333] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to experience authentic Mediterranean flavors?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Book your table today and enjoy our seasonal specials
          </motion.p>
          <motion.button
            className="bg-[#F4CE14] text-[#495E57] px-10 py-5 rounded-lg hover:bg-[#e6c213] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Now
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default Home;