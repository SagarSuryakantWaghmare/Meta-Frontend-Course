import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaClock, FaUsers, FaGift, FaUtensils, FaCheck, FaTimes, FaStar } from 'react-icons/fa';

const Reservation = () => {
  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    seating: 'indoor',
    specialRequests: ''
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [dateSelected, setDateSelected] = useState(false);

  // Handle date selection
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    
    setFormData(prev => ({
      ...prev,
      date: selectedDate,
      time: '' // Reset time when date changes
    }));
    
    setSelectedTimeSlot(null);
    setDateSelected(true);
    
    // Generate available times for selected date
    const times = generateAvailableTimes(selectedDate);
    setAvailableTimes(times);
    
    // Close calendar
    setShowCalendar(false);
  };

  // Mock function to generate available times based on selected date
  const generateAvailableTimes = (date) => {
    // In a real app, this would be an API call to check available time slots
    const times = [];
    const selectedDate = new Date(date);
    const today = new Date();
    
    // If selected date is today, only show times in the future
    let startHour = 11;
    if (
      selectedDate.getDate() === today.getDate() && 
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear()
    ) {
      startHour = today.getHours() + 1;
      if (startHour > 22) {
        // No times available for today
        return [];
      }
    }
    
    // Generate time slots
    for (let hour = Math.max(startHour, 11); hour <= 22; hour++) {
      ['00', '30'].forEach(minutes => {
        if (hour === 22 && minutes === '30') return; // Restaurant closes at 10:30 PM
        const time = `${hour}:${minutes}`;
        const formatted = hour > 12 
          ? `${hour - 12}:${minutes} PM` 
          : hour === 12 
            ? `12:${minutes} PM` 
            : `${hour}:${minutes} AM`;
            
        // Simulate random availability
        const isAvailable = Math.random() > 0.3;
        
        times.push({
          value: time,
          label: formatted,
          available: isAvailable
        });
      });
    }
    
    return times;
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Select time slot
  const handleTimeSelect = (time) => {
    setSelectedTimeSlot(time);
    setFormData(prev => ({
      ...prev,
      time: time.value
    }));
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    const { name, email, phone, date, time } = formData;
    
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email";
    }
    
    if (!phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(phone.replace(/\D/g, ''))) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (!date) errors.date = "Please select a date";
    if (!time) errors.time = "Please select a time";
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Start loading state
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        seating: 'indoor',
        specialRequests: ''
      });
      
      setSelectedTimeSlot(null);
      setDateSelected(false);
      setAvailableTimes([]);
    }, 1500);
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
            Reserve Your Table
          </motion.h1>
          <motion.p
            className="text-xl text-[#333333] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join us for an unforgettable Mediterranean dining experience
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
                  <FaCheck className="h-10 w-10 text-[#F4CE14]" />
                </div>
                <h2 className="text-3xl font-bold text-[#495E57] mb-4">Reservation Confirmed!</h2>
                <p className="text-lg text-[#666] mb-6">
                  Thank you for booking with us. Your reservation details have been sent to your email.
                </p>
                <div className="bg-white p-6 rounded-lg mb-6 max-w-md mx-auto">
                  <div className="flex justify-center mb-4">
                    <FaStar className="text-[#F4CE14] w-6 h-6 mx-1" />
                    <FaStar className="text-[#F4CE14] w-6 h-6 mx-1" />
                    <FaStar className="text-[#F4CE14] w-6 h-6 mx-1" />
                  </div>
                  <p className="text-[#495E57] italic mb-2">
                    "We're excited to serve you! Feel free to call us if you have any questions before your visit."
                  </p>
                  <p className="font-semibold">- Little Lemon Team</p>
                </div>
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
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-[#ddd]'} focus:outline-none focus:ring-2 focus:ring-[#F4CE14]`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
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
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-[#ddd]'} focus:outline-none focus:ring-2 focus:ring-[#F4CE14]`}
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
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
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-[#ddd]'} focus:outline-none focus:ring-2 focus:ring-[#F4CE14]`}
                        placeholder="(123) 456-7890"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="date">
                        Date *
                      </label>
                      <div className="relative">
                        <div
                          className={`flex items-center w-full px-4 py-3 rounded-lg border ${
                            formErrors.date ? 'border-red-500' : 'border-[#ddd]'
                          } focus:outline-none focus:ring-2 focus:ring-[#F4CE14] cursor-pointer bg-white`}
                          onClick={() => setShowCalendar(prev => !prev)}
                        >
                          <FaCalendarAlt className="text-[#495E57] mr-2" />
                          <span className={formData.date ? 'text-[#333]' : 'text-gray-400'}>
                            {formData.date 
                              ? new Date(formData.date).toLocaleDateString('en-US', {
                                  weekday: 'short',
                                  month: 'short', 
                                  day: 'numeric'
                                })
                              : 'Select a date'}
                          </span>
                        </div>
                        
                        <AnimatePresence>
                          {showCalendar && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                              <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleDateChange}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full p-4 cursor-pointer"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {formErrors.date && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2">Time *</label>
                      <div className="relative">
                        {!dateSelected ? (
                          <div className="w-full px-4 py-3 rounded-lg border border-[#ddd] bg-gray-100 text-gray-500 flex items-center">
                            <FaClock className="mr-2" /> 
                            Please select a date first
                          </div>
                        ) : availableTimes.length > 0 ? (
                          <div className="grid grid-cols-3 gap-2 bg-white p-3 border border-[#ddd] rounded-lg">
                            {availableTimes.map((time, i) => (
                              <button
                                key={i}
                                type="button"
                                disabled={!time.available}
                                className={`py-2 px-1 rounded-md text-center text-sm ${
                                  selectedTimeSlot && selectedTimeSlot.value === time.value
                                    ? 'bg-[#F4CE14] text-[#495E57] font-bold'
                                    : time.available
                                    ? 'hover:bg-[#E8E0CF] bg-white'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                }`}
                                onClick={() => time.available && handleTimeSelect(time)}
                              >
                                {time.label}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="w-full px-4 py-3 rounded-lg border border-[#ddd] bg-gray-100 text-red-500 flex items-center">
                            <FaTimes className="mr-2" /> 
                            No available times for this date
                          </div>
                        )}
                        
                        {formErrors.time && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="guests">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <div className="flex items-center w-full overflow-hidden rounded-lg border border-[#ddd]">
                          <button
                            type="button"
                            className="px-4 py-3 bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#495E57] font-bold text-xl"
                            onClick={() => 
                              setFormData(prev => ({
                                ...prev,
                                guests: Math.max(1, parseInt(prev.guests) - 1).toString()
                              }))
                            }
                          >
                            −
                          </button>
                          <input
                            type="text"
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-center focus:outline-none"
                            readOnly
                          />
                          <button
                            type="button"
                            className="px-4 py-3 bg-[#f2f2f2] hover:bg-[#e6e6e6] text-[#495E57] font-bold text-xl"
                            onClick={() => 
                              setFormData(prev => ({
                                ...prev,
                                guests: Math.min(10, parseInt(prev.guests) + 1).toString()
                              }))
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <FaUsers className="mr-1" /> For parties larger than 10, please call us
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[#495E57] font-medium mb-2" htmlFor="occasion">
                        Occasion
                      </label>
                      <div className="relative">
                        <select
                          id="occasion"
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14] appearance-none bg-white"
                        >
                          <option value="">Select an occasion (optional)</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Date">Date Night</option>
                          <option value="Business">Business Meal</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                        {formData.occasion && (
                          <div className="flex items-center text-sm text-[#495E57] mt-1">
                            <FaGift className="mr-1" /> We'll prepare something special!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 mt-8">
                    <label className="block text-[#495E57] font-medium mb-2">Seating Preference</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          formData.seating === "indoor"
                            ? "border-[#F4CE14] bg-[#FFF8E7]"
                            : "border-[#ddd] hover:border-gray-400"
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, seating: "indoor" }))}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">Indoor</h3>
                          {formData.seating === "indoor" && (
                            <div className="w-5 h-5 bg-[#F4CE14] rounded-full flex items-center justify-center">
                              <FaCheck className="text-[#495E57] text-xs" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">Climate controlled, elegant ambiance</p>
                      </div>
                      
                      <div
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          formData.seating === "outdoor"
                            ? "border-[#F4CE14] bg-[#FFF8E7]"
                            : "border-[#ddd] hover:border-gray-400"
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, seating: "outdoor" }))}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold">Outdoor Patio</h3>
                          {formData.seating === "outdoor" && (
                            <div className="w-5 h-5 bg-[#F4CE14] rounded-full flex items-center justify-center">
                              <FaCheck className="text-[#495E57] text-xs" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">Beautiful garden view, weather permitting</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-[#495E57] font-medium mb-2" htmlFor="specialRequests">
                      Special Requests <span className="text-sm font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14] min-h-[100px]"
                      placeholder="Tell us about any dietary restrictions, allergies, or special occasions."
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

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-24 bg-[#FFF8E7]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#495E57] mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Questions About Your Reservation?
          </motion.h2>
          <motion.p
            className="text-lg text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Here are some common questions about our reservation policy
          </motion.p>

          <div className="space-y-6">
            {[
              {
                question: "What is your cancellation policy?",
                answer: "You can cancel or modify your reservation up to 3 hours before your scheduled time without any charge. For cancellations less than 3 hours in advance, a fee may apply."
              },
              {
                question: "Can I make special requests for my reservation?",
                answer: "Absolutely! Please use the special requests field in the reservation form, and we'll do our best to accommodate your needs."
              },
              {
                question: "How long can I keep my table?",
                answer: "We typically allocate 2 hours for parties of 2-4 guests and 2.5 hours for parties of 5-10. If you need more time, please let us know in advance."
              },
              {
                question: "Is there a dress code?",
                answer: "We suggest smart casual attire. While we don't enforce a strict dress code, we appreciate when guests avoid beachwear, athletic wear, or overly casual attire."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-[#495E57] mb-3">{item.question}</h3>
                <p className="text-[#666]">{item.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="mb-4">Need more assistance?</p>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-[#F4CE14] text-[#495E57] font-semibold rounded-lg hover:bg-[#e6c213] transition duration-300">
              <FaUtensils className="mr-2" /> Call us at (555) 123-4567
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
