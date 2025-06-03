import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
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
  const [step, setStep] = useState(1);
  const calendarRef = useRef(null);
  
  // Occasions options
  const occasions = ['Birthday', 'Anniversary', 'Date', 'Business', 'Special Occasion', 'Other'];
  
  // Handle outside click for calendar popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  // Generate available times based on selected date
  useEffect(() => {
    if (formData.date) {
      setDateSelected(true);
      
      // Generate fake available time slots based on date
      const date = new Date(formData.date);
      const day = date.getDay(); // 0 = Sunday, 6 = Saturday
      
      // More slots on weekends, fewer on weekdays
      const slots = [];
      const startHour = day === 0 || day === 6 ? 10 : 11; // Earlier on weekends
      const endHour = day === 5 || day === 6 ? 22 : 21; // Later on Friday/Saturday
      
      for (let hour = startHour; hour <= endHour; hour++) {
        // Every half hour
        for (let minutes of ['00', '30']) {
          // Randomly make some slots "unavailable" for realism
          const available = Math.random() > 0.3;
          if (available) {
            slots.push({
              time: `${hour}:${minutes}`,
              display: `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`,
              popularity: Math.random() > 0.7 ? 'popular' : ''
            });
          }
        }
      }
      
      setAvailableTimes(slots);
      
      // Reset selected time if changing date
      setSelectedTimeSlot(null);
      setFormData(prev => ({ ...prev, time: '' }));
    } else {
      setDateSelected(false);
      setAvailableTimes([]);
    }
  }, [formData.date]);
  
  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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
  
  // Handle time slot selection
  const handleTimeSelect = (timeObj) => {
    setSelectedTimeSlot(timeObj.time);
    setFormData(prev => ({
      ...prev,
      time: timeObj.time
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Save reservation to localStorage for demo purposes
      try {
        const existingReservations = JSON.parse(localStorage.getItem('littleLemonReservations') || '[]');
        existingReservations.push({
          ...formData,
          id: Date.now(),
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('littleLemonReservations', JSON.stringify(existingReservations));
      } catch (error) {
        console.error('Error saving reservation:', error);
      }
      
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
      setStep(1);
      
      // Auto-hide success message after delay
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
  // Handle next step
  const handleNextStep = () => {
    let canProceed = true;
    const errors = {};
    
    if (step === 1) {
      // Validate date and time selection
      if (!formData.date) {
        errors.date = "Please select a date";
        canProceed = false;
      }
      if (!formData.time) {
        errors.time = "Please select a time";
        canProceed = false;
      }
      if (!formData.guests) {
        errors.guests = "Please select number of guests";
        canProceed = false;
      }
    } else if (step === 2) {
      // Validate personal information
      if (!formData.name.trim()) {
        errors.name = "Name is required";
        canProceed = false;
      }
      if (!formData.email.trim()) {
        errors.email = "Email is required";
        canProceed = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
        canProceed = false;
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
        canProceed = false;
      }
    }
    
    setFormErrors(errors);
    
    if (canProceed) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Handle previous step
  const handlePrevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                  <FaCheck className="h-12 w-12 text-[#F4CE14]" />
                </div>
                <h2 className="text-3xl font-bold text-[#495E57] mb-4">Reservation Confirmed!</h2>
                <p className="text-lg text-[#666] mb-6">
                  Thank you for booking with us. We look forward to serving you.
                </p>
                <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
                  <h3 className="font-bold text-xl mb-4 text-[#495E57]">Reservation Details</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-gray-500">Date</p>
                      <p className="font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Time</p>
                      <p className="font-medium">7:30 PM</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Party Size</p>
                      <p className="font-medium">2 people</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Confirmation #</p>
                      <p className="font-medium">LL-{Math.floor(100000 + Math.random() * 900000)}</p>
                    </div>
                  </div>
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
                <h2 className="text-3xl font-bold text-[#495E57] mb-4 text-center">Book Your Table</h2>
                
                {/* Progress indicator */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center w-full max-w-xs">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#495E57] text-white' : 'bg-gray-200 text-gray-500'}`}
                    >
                      1
                    </div>
                    <div className={`flex-1 h-1 ${step >= 2 ? 'bg-[#495E57]' : 'bg-gray-200'}`}></div>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#495E57] text-white' : 'bg-gray-200 text-gray-500'}`}
                    >
                      2
                    </div>
                    <div className={`flex-1 h-1 ${step >= 3 ? 'bg-[#495E57]' : 'bg-gray-200'}`}></div>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-[#495E57] text-white' : 'bg-gray-200 text-gray-500'}`}
                    >
                      3
                    </div>
                  </div>
                </div>
                
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-[#495E57] mb-6">Select Date & Time</h3>
                      
                      {/* Date Selection */}
                      <div className="mb-6">
                        <label className="flex items-center text-[#495E57] font-medium mb-2" htmlFor="date">
                          <FaCalendarAlt className="mr-2" />
                          Select a Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.date ? 'border-red-500' : 'border-[#ddd]'} focus:outline-none focus:ring-2 focus:ring-[#F4CE14]`}
                          />
                          {formErrors.date && (
                            <p className="text-red-500 text-sm mt-1 error-message">{formErrors.date}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Time Selection */}
                      {dateSelected && (
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <label className="flex items-center text-[#495E57] font-medium mb-2">
                            <FaClock className="mr-2" />
                            Select a Time *
                          </label>
                          {formErrors.time && (
                            <p className="text-red-500 text-sm mb-2 error-message">{formErrors.time}</p>
                          )}
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {availableTimes.map((timeObj, index) => (
                              <motion.button
                                key={index}
                                type="button"
                                className={`relative px-3 py-2 text-center rounded-lg border transition-all ${
                                  selectedTimeSlot === timeObj.time
                                    ? 'bg-[#495E57] text-white border-[#495E57]'
                                    : 'bg-white hover:bg-[#f0f0f0] border-gray-200'
                                }`}
                                onClick={() => handleTimeSelect(timeObj)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {timeObj.display}
                                {timeObj.popularity === 'popular' && (
                                  <span className="absolute -top-2 -right-2 bg-[#F4CE14] text-[#495E57] text-xs px-1 py-0.5 rounded-full">
                                    <FaStar className="inline-block mr-0.5" size={8} />
                                    Popular
                                  </span>
                                )}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Party Size */}
                      <div className="mb-6">
                        <label className="flex items-center text-[#495E57] font-medium mb-2" htmlFor="guests">
                          <FaUsers className="mr-2" />
                          Number of Guests *
                        </label>
                        <div className="relative">
                          <select
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.guests ? 'border-red-500' : 'border-[#ddd]'} focus:outline-none focus:ring-2 focus:ring-[#F4CE14] appearance-none`}
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                            <option value="11">11+ (Large Party)</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                          {formErrors.guests && (
                            <p className="text-red-500 text-sm mt-1 error-message">{formErrors.guests}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Seating Preference */}
                      <div className="mb-8">
                        <p className="flex items-center text-[#495E57] font-medium mb-3">
                          <FaUtensils className="mr-2" />
                          Seating Preference
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            className={`px-4 py-3 rounded-lg border transition-all ${
                              formData.seating === 'indoor'
                                ? 'bg-[#495E57] text-white border-[#495E57]'
                                : 'bg-white hover:bg-[#f0f0f0] border-gray-200'
                            }`}
                            onClick={() => setFormData({ ...formData, seating: 'indoor' })}
                          >
                            Indoor Seating
                          </button>
                          <button
                            type="button"
                            className={`px-4 py-3 rounded-lg border transition-all ${
                              formData.seating === 'outdoor'
                                ? 'bg-[#495E57] text-white border-[#495E57]'
                                : 'bg-white hover:bg-[#f0f0f0] border-gray-200'
                            }`}
                            onClick={() => setFormData({ ...formData, seating: 'outdoor' })}
                          >
                            Outdoor Seating
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-end">
                        <motion.button
                          type="button"
                          className="bg-[#495E57] text-white px-8 py-3 rounded-lg hover:bg-[#3a4841] transition duration-300 flex items-center"
                          onClick={handleNextStep}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={!formData.date || !formData.time}
                        >
                          Continue
                          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                  
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-[#495E57] mb-6">Your Information</h3>
                      
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
                          />
                          {formErrors.name && (
                            <p className="text-red-500 text-sm mt-1 error-message">{formErrors.name}</p>
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