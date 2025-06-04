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
        name: "Paneer Tikka",
        price: "$8.99",
        description: "Marinated cottage cheese cubes, grilled in our tandoor oven with bell peppers and onions, served with mint chutney.",
        popular: true
      },
      {
        name: "Samosa",
        price: "$6.50",
        description: "Crispy pastry triangles stuffed with spiced potatoes and peas, served with tamarind and mint chutneys.",
        popular: true
      },
      {
        name: "Onion Bhaji",
        price: "$7.25",
        description: "Crispy fritters of sliced onions and gram flour, seasoned with Indian spices, served with mint yogurt dip.",
        popular: false
      }
    ],    mains: [
      {
        name: "Butter Chicken",
        price: "$18.99",
        description: "Tender chicken pieces cooked in a rich, creamy tomato sauce with aromatic spices and finished with butter.",
        popular: true
      },
      {
        name: "Lamb Rogan Josh",
        price: "$20.50",
        description: "Aromatic Kashmiri lamb curry cooked with yogurt, caramelized onions, and signature blend of spices.",
        popular: false
      },
      {
        name: "Vegetable Biryani",
        price: "$16.75",
        description: "Fragrant basmati rice slow-cooked with seasonal vegetables, saffron, and whole spices, served with raita.",
        popular: true
      }
    ],    desserts: [
      {
        name: "Gulab Jamun",
        price: "$6.50",
        description: "Soft milk solids dumplings, deep-fried and soaked in rose and cardamom flavored sugar syrup.",
        popular: true
      },
      {
        name: "Rasmalai",
        price: "$7.25",
        description: "Soft cottage cheese patties immersed in creamy, cardamom-flavored milk, garnished with pistachios.",
        popular: false
      },
      {
        name: "Kulfi",
        price: "$5.99",
        description: "Traditional Indian ice cream flavored with saffron, cardamom and topped with crushed pistachios.",
        popular: true
      }
    ],    drinks: [
      {
        name: "Masala Chai",
        price: "$4/cup",
        description: "Traditional Indian spiced tea with ginger, cardamom, cinnamon and cloves, served with milk.",
        popular: true
      },
      {
        name: "Mango Lassi",
        price: "$5.50",
        description: "Refreshing yogurt drink blended with ripe mangoes, cardamom, and a touch of honey.",
        popular: true
      },
      {
        name: "Rose Sherbet",
        price: "$4.50",
        description: "Refreshing drink made with rose syrup, lemon juice, and garnished with basil seeds.",
        popular: false
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
            Discover authentic Indian flavors from across different regions, crafted with passion and tradition
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
            {[              { id: 'starters', label: 'Appetizers' },
              { id: 'mains', label: 'Main Curries' },
              { id: 'desserts', label: 'Sweets' },
              { id: 'drinks', label: 'Beverages' }
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

          <div className="grid md:grid-cols-2 gap-10">            <motion.div
              className="bg-[#FFF8E7] text-[#333] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#495E57]">Royal Thali</h3>
                  <span className="text-lg font-bold text-[#EE9972]">$59.99</span>
                </div>
                <p className="text-[#666] mb-6">
                  Experience a complete royal Indian feast with our family thali including two curries, dal, rice, assorted breads, raita, papad, pickles and dessert. Serves 4 people.
                </p>
                <div className="bg-[#F4CE14] text-[#495E57] px-4 py-2 rounded-lg font-semibold inline-block">
                  Available until Sunday
                </div>
              </div>
            </motion.div>            <motion.div
              className="bg-[#FFF8E7] text-[#333] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#495E57]">Couple's Special Dinner</h3>
                  <span className="text-lg font-bold text-[#EE9972]">$69.00</span>
                </div>
                <p className="text-[#666] mb-6">
                  Perfect for couples: shared appetizer platter of paneer tikka and samosas, choice of two main curries, naan bread, rice, and gulab jamun dessert with two mango lassis.
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
          >            Craving Authentic Indian Flavors?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Reserve your table now and experience our regional delicacies
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