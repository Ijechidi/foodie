import React from 'react';
import { motion } from "framer-motion";
import t1 from "../../assets/food/t1.jpg";
import t2 from "../../assets/food/t2.jpg";
import t3 from "../../assets/food/t3.jpg";
import { SlideUp } from "../Hero/Hero"; // Assuming you have SlideUp in your Hero folder

// Example Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    photo: t2, 
    feedback: "This is the best service I've ever used! Highly recommend it to everyone.",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: t1, 
    feedback: "The food quality is amazing, and the delivery was super fast. Totally worth it!",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Alice Brown",
    photo: t3, 
    feedback: "I loved everything! From the taste to the presentation, everything was perfect.",
    delay: 1.2,
  },
];

const Testimonial = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl text-center font-league font-semibold uppercase py-8"
        >
          What Our Customers Say
        </motion.h3>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: testimonial.delay }}
              className="bg-white shadow-md p-6 rounded-md flex flex-col items-center gap-4"
            >
              <motion.img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-lg text-gray-500 italic">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
