import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-dark">{testimonial.author}</h4>
            <p className="text-gray-600 text-sm">{testimonial.company}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <ApperIcon key={i} name="Star" size={16} className="text-neon fill-current" />
          ))}
        </div>
        <blockquote className="text-gray-700 italic">
          "{testimonial.quote}"
        </blockquote>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;