import { motion } from 'framer-motion';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Our Story
          </motion.h1>
          <motion.p
            className="text-xl text-[#333333] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Spice Delight is more than just a restaurant - it's a celebration of family, tradition, and authentic Indian flavors.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#495E57] mb-6">
              Our Humble Beginnings
            </h2>
            <p className="text-lg text-[#666] mb-6">              Founded in 2010 by brothers Rajesh and Sunil Sharma, Spice Delight started as a small family-owned restaurant in the heart of Mumbai. Their vision was simple: to bring authentic Indian flavors from different regions to their community.
            </p>
            <p className="text-lg text-[#666] mb-6">
              Growing up in a family that cherished food traditions, the brothers learned recipes passed down through generations from their grandmother. Today, we honor those traditions while adding our own creative twist.
            </p>
            <div className="bg-[#FFF8E7] p-6 rounded-xl border-l-4 border-[#F4CE14]">
              <p className="italic text-[#495E57] font-medium">
                "Food is our way of sharing culture. Every dish tells a story of our heritage and passion for bringing people together through the magic of Indian spices."
              </p>
              <p className="mt-2 font-semibold text-[#EE9972]">— Rajesh & Sunil Sharma</p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
              alt="Restaurant interior"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#495E57] rounded-2xl shadow-xl z-[-1]"></div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-24 bg-[#495E57] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Family
          </motion.h2>
          <motion.p
            className="text-xl text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >            Our team is the heart of Spice Delight. Each member brings unique talents and passion to create unforgettable dining experiences.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Rajesh Sharma",
                role: "Co-Owner & Head Chef",
                bio: "With over 20 years of culinary experience, Rajesh ensures every dish meets our high standards of authenticity and flavor from Northern India.",
                img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548"
              },              {
                name: "Sunil Sharma",
                role: "Co-Owner & Restaurant Manager",
                bio: "Sunil manages operations with exceptional hospitality skills, ensuring every guest feels welcome while bringing business acumen to complement Rajesh's culinary expertise.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
              },
              {
                name: "Priya Patel",
                role: "Dessert Specialist",
                bio: "Our dessert maestro who brings creativity to traditional Indian sweets with her modern techniques and artistic presentations.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                className="bg-[#FFF8E7] text-[#333] rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#495E57] mb-1">{member.name}</h3>
                  <p className="text-[#EE9972] font-semibold mb-4">{member.role}</p>
                  <p className="text-[#666]">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#495E57] text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#F4CE14">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Authenticity",
                description: "We stay true to traditional recipes while thoughtfully incorporating modern techniques."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#F4CE14">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Quality",
                description: "Only the freshest, highest quality ingredients make it to your plate."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#F4CE14">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Community",
                description: "We believe food has the power to bring people together and strengthen bonds."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-[#FFF8E7] p-8 rounded-2xl text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="bg-[#495E57] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#495E57] mb-4">{value.title}</h3>
                <p className="text-[#666]">{value.description}</p>
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
            Experience Our Story Firsthand
          </motion.h2>          <motion.p
            className="text-xl text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Join us for a meal and become part of the Spice Delight family
          </motion.p>
          <motion.button
            className="bg-[#F4CE14] text-[#495E57] px-10 py-5 rounded-lg hover:bg-[#e6c213] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Table
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default About;