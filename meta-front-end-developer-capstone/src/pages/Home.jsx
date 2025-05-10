import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-[#333] bg-[#FFF8E7] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#F4CE14] to-[#EE9972] py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#495E57] leading-tight mb-6">
              Little Lemon
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-4">
              Chicago
            </h2>
            <p className="mt-4 text-xl text-[#333333] mb-8 max-w-lg">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className="mt-6 bg-[#495E57] text-white px-8 py-4 rounded-lg hover:bg-[#3a4841] transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
              Reserve a Table
            </button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Mediterranean cuisine"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#495E57] rounded-2xl shadow-xl z-[-1]"></div>
          </motion.div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
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
            >
              Online Menu
            </motion.button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Greek Salad",
                price: "$12.99",
                description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              },
              {
                name: "Bruschetta",
                price: "$7.99",
                description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
              },
              {
                name: "Lemon Dessert",
                price: "$5.99",
                description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
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
                <img
                  src={`https://source.unsplash.com/600x400/?${item.name.replace(' ', '')}`}
                  alt={item.name}
                  className="rounded-xl mb-6 w-full h-60 object-cover"
                />
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#333]">{item.name}</h3>
                  <span className="text-lg font-semibold text-[#EE9972]">{item.price}</span>
                </div>
                <p className="text-[#666] mb-6 flex-grow">
                  {item.description}
                </p>
                <button className="mt-auto flex items-center font-semibold text-[#495E57] hover:text-[#3a4841]">
                  Order for delivery
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
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