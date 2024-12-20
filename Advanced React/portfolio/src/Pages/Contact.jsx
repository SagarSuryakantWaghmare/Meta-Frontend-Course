import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 via-white to-amber-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="flex-1 mb-8 md:mb-0 md:mr-12"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Have a question or want to work together? Feel free to reach out
              through the form, or contact me via email or phone.
            </p>
            <div className="text-lg text-gray-600 space-y-4">
              <p>Email: <a href="mailto:youremail@example.com" className="text-blue-600">youremail@example.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+123-456-7890</a></p>
              <p>Location: Your City, Country</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1 bg-white p-8 rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
