import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Reservation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        specialRequests: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  // Generate time options
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 11; hour <= 22; hour++) {
      ['00', '30'].forEach(minutes => {
        if (hour === 22 && minutes === '30') return; // Skip 22:30
        const time = `${hour}:${minutes}`;
        times.push(
          <option key={time} value={time}>
            {hour > 12 ? `${hour - 12}:${minutes} PM` : `${hour}:${minutes} AM`}
          </option>
        );
      });
    }
    return times;
  };

  return (
    <div className="font-sans text-[#333] bg-[#FFF8E7] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F4CE14] to-[#EE9972] py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#495E57] mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Make a Reservation
          </motion.h1>
          <motion.p
            className="text-xl text-[#333333] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Book your table and experience authentic Mediterranean flavors
          </motion.p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-[#FFF8E7] p-8 md:p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {submitSuccess ? (
              <motion.div
                className="text-center p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-20 h-20 bg-[#495E57] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#F4CE14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#495E57] mb-4">Reservation Confirmed!</h2>
                <p className="text-lg text-[#666] mb-6">
                  Thank you for booking with us. We look forward to serving you.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-[#495E57] text-white px-8 py-3 rounded-lg hover:bg-[#3a4841] transition duration-300"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-[#495E57] mb-8 text-center">Book Your Table</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="email">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="date">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="time">
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                      >
                        <option value="">Select a time</option>
                        {generateTimeOptions()}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="guests">
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                        <option value="9+">9+ people (large party)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-[#495E57] font-medium mb-2" htmlFor="occasion">
                      Occasion (optional)
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                    >
                      <option value="">None</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="celebration">Celebration</option>
                      <option value="date">Date Night</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="block text-[#495E57] font-medium mb-2" htmlFor="specialRequests">
                      Special Requests (optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]"
                    ></textarea>
                  </div>

                  <div className="mt-8">
                    <motion.button
                      type="submit"
                      className="w-full bg-[#495E57] text-white px-8 py-4 rounded-lg hover:bg-[#3a4841] transition duration-300 text-lg font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Confirm Reservation"
                      )}
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
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
            Questions About Your Reservation?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Contact us at (555) 123-4567 or hello@littlelemon.com
          </motion.p>
          <motion.button
            className="bg-[#F4CE14] text-[#495E57] px-10 py-5 rounded-lg hover:bg-[#e6c213] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default Reservation;