import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('starters');

  const menuItems = {
    starters: [
      {
        name: "Hummus Platter",
        price: "$8.99",
        description: "Creamy chickpea dip with tahini, lemon, and garlic, served with warm pita bread.",
        popular: true
      },
      {
        name: "Dolmades",
        price: "$9.50",
        description: "Stuffed grape leaves with herbed rice, pine nuts, and lemon zest.",
        popular: false
      },
      {
        name: "Spanakopita",
        price: "$10.25",
        description: "Flaky phyllo pastry filled with spinach, feta cheese, and herbs.",
        popular: true
      }
    ],
    mains: [
      {
        name: "Moussaka",
        price: "$18.99",
        description: "Layers of eggplant, spiced ground lamb, and creamy béchamel sauce.",
        popular: true
      },
      {
        name: "Grilled Octopus",
        price: "$24.50",
        description: "Tender octopus with lemon, oregano, and extra virgin olive oil.",
        popular: false
      },
      {
        name: "Lamb Kleftiko",
        price: "$22.75",
        description: "Slow-roasted lamb with garlic, lemon, and Mediterranean herbs.",
        popular: true
      }
    ],
    desserts: [
      {
        name: "Baklava",
        price: "$7.50",
        description: "Layers of phyllo dough with walnuts, honey, and cinnamon.",
        popular: true
      },
      {
        name: "Galaktoboureko",
        price: "$8.25",
        description: "Custard pie with semolina cream and syrup-soaked phyllo.",
        popular: false
      },
      {
        name: "Loukoumades",
        price: "$6.99",
        description: "Greek doughnut holes drizzled with honey and cinnamon.",
        popular: true
      }
    ],
    drinks: [
      {
        name: "House Red Wine",
        price: "$9/glass",
        description: "Greek Agiorgitiko, full-bodied with dark fruit notes.",
        popular: false
      },
      {
        name: "Ouzo",
        price: "$8",
        description: "Traditional anise-flavored aperitif, served chilled.",
        popular: true
      },
      {
        name: "Fresh Lemonade",
        price: "$4.50",
        description: "Homemade with fresh lemons and a hint of mint.",
        popular: true
      }
    ]
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
            Our Menu
          </motion.h1>
          <motion.p
            className="text-xl text-[#333333] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover authentic Mediterranean flavors crafted with passion and tradition
          </motion.p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="sticky top-0 z-10 bg-white shadow-md py-4 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex overflow-x-auto pb-2 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { id: 'starters', label: 'Starters' },
              { id: 'mains', label: 'Main Courses' },
              { id: 'desserts', label: 'Desserts' },
              { id: 'drinks', label: 'Drinks' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-lg font-medium transition-colors ${activeCategory === category.id ? 'bg-[#495E57] text-white' : 'bg-[#FFF8E7] text-[#495E57] hover:bg-[#F4CE14]'}`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#495E57] mb-8 capitalize">
              {activeCategory.replace('-', ' ')}
            </h2>
            
            <div className="space-y-8">
              {menuItems[activeCategory].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#FFF8E7] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-[#495E57] flex items-center">
                        {item.name}
                        {item.popular && (
                          <span className="ml-3 bg-[#F4CE14] text-[#495E57] text-sm font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </h3>
                      <p className="text-[#666] mt-2">{item.description}</p>
                    </div>
                    <span className="text-lg font-bold text-[#EE9972] whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-24 px-6 md:px-24 bg-[#495E57] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Weekly Special Offers
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              className="bg-[#FFF8E7] text-[#333] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#495E57]">Family Feast</h3>
                  <span className="text-lg font-bold text-[#EE9972]">$49.99</span>
                </div>
                <p className="text-[#666] mb-6">
                  Enjoy a complete Mediterranean experience with our family platter including hummus, falafel, grilled meats, fresh salads, and pita bread. Serves 4 people.
                </p>
                <div className="bg-[#F4CE14] text-[#495E57] px-4 py-2 rounded-lg font-semibold inline-block">
                  Available until Sunday
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#FFF8E7] text-[#333] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#495E57]">Date Night Package</h3>
                  <span className="text-lg font-bold text-[#EE9972]">$65.00</span>
                </div>
                <p className="text-[#666] mb-6">
                  Perfect for couples: shared appetizer platter, two main courses, dessert to share, and a bottle of house wine.
                </p>
                <div className="bg-[#F4CE14] text-[#495E57] px-4 py-2 rounded-lg font-semibold inline-block">
                  Weekdays only
                </div>
              </div>
            </motion.div>
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
            Hungry for Mediterranean Flavors?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Reserve your table now and experience our authentic dishes
          </motion.p>
          <motion.button
            className="bg-[#F4CE14] text-[#495E57] px-10 py-5 rounded-lg hover:bg-[#e6c213] transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default Menu;