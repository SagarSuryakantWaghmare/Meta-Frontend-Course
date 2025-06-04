import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-[#333] bg-[#FFF8E7] min-h-screen">
      <section className="relative bg-gradient-to-r from-[#F4CE14] to-[#EE9972] py-20 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#495E57] mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-[#333333] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We'd love to hear from you! Reach out for reservations, catering, or any questions about Spice Delight.
          </motion.p>
        </div>
      </section>
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FFF8E7] p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#495E57] mb-4">Our Address</h2>
            <p className="mb-2">Spice Delight Restaurant</p>
            <p className="mb-2">123 Mumbai Street, Andheri West, Mumbai, India</p>
            <p className="mb-2">Phone: (555) 789-4321</p>
            <p className="mb-6">Email: info@spicedelight.com</p>
            <h2 className="text-2xl font-bold text-[#495E57] mb-4 mt-8">Send Us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14]" />
              <textarea placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#F4CE14] min-h-[100px]"></textarea>
              <button type="submit" className="bg-[#495E57] text-white px-8 py-3 rounded-lg hover:bg-[#3a4841] transition duration-300 font-semibold">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
