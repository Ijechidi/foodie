import React from "react";
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const HotDessertData = [
  {
    id: 1,
    name: "Hot Dessert",
    img: Food1,
    price: "$5.44",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Hot Cake",
    img: Food2,
    price: "$5.00",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Hot Cake",
    img: Food3,
    price: "$5.00",
    delay: 1.2,
  },
];

const HotDessert = () => {
  return (
    <section>
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container py-12"
      >
        {/** Heading Section */}
        <motion.h3 
          variants={SlideUp(0)} 
          className="text-2xl font-semibold text-darkgreen uppercase py-8 text-center"
        >
          Hot Dessert
        </motion.h3>

        {/** Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDessertData.map((item) => (
            <motion.div 
              key={item.id} 
              variants={SlideUp(item.delay)} 
              className="group bg-white/50 shadow-md p-3 flex items-center gap-3 rounded-lg overflow-hidden"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-24 h-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]" 
              />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-xl text-yellow-500">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HotDessert;
