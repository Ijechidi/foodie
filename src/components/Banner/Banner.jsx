import React from 'react';
import BannerPng from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          
          {/** Image Section */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            className="relative flex items-center justify-center"
          >
            <div className="w-[320px] h-[320px] md:h-[400px] md:w-[400px] bg-lightYellow rounded-full overflow-hidden flex items-center justify-center">
              <motion.img 
                src={BannerPng} 
                alt="Delicious food" 
                initial={{ x: "-100%" }} 
                animate={{ x: 0 }} 
                transition={{ duration: 1, delay: 0.5 }} 
                className="w-full lg:max-w-[350px] img-shadow" 
              />
            </div>
          </motion.div>
          
          {/** Text Content Section */}
          <motion.div 
            variants={SlideUp(0.8)} 
            initial="hidden" 
            whileInView="show" 
            className="space-y-5 lg:max-w-[400px] text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase font-semibold font-league leading-tight">
              The best yummy food in the town
            </h1>
            <motion.button 
              variants={SlideUp(1)} 
              className="btn-primary"
            >
              Order Now
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
