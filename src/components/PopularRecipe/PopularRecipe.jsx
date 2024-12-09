import React from 'react';
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const PopularRecipeData = [
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

const PopularRecipe = () => {
  return (
    <section>
      <div className="container py-24">
        
        {/** Section Title */}
        <motion.h3
          variants={SlideUp(0.5)} 
          initial="hidden" 
          whileInView="show" 
          className="text-4xl text-center font-league font-semibold uppercase py-8"
        >
          Our Popular Recipe
        </motion.h3>

        {/** Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {PopularRecipeData.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: item.delay }} 
              className="group bg-white/50 shadow-md p-6 rounded-md flex flex-col items-center gap-4 relative"
            >
              {/** Updated Image Animation */}
              <motion.img 
                src={item.img} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-full img-shadow"
                whileHover={{
                  rotate: 50, 
                  x: 30, 
                  y: -20, 
                  scale: 1.1 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-lg text-yellow-500">{item.price}</p>

              {/** Buy Now Button: Hidden by Default */}
              <motion.button 
                className="btn-primary text-white font-semibold px-6 py-2 mt-2 rounded-md shadow-md hover:bg-slate-100 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:translate-y-2 transition-all ease-in-out"
                whileTap={{ scale: 0.95 }} 
              >
                Buy Now
              </motion.button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularRecipe;
