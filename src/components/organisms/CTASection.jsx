import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-neon via-green-400 to-emerald-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark/10 rounded-full">
            <ApperIcon name="Clock" size={16} className="text-dark" />
            <span className="text-sm font-medium text-dark">Limited Availability - Book Now</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark">
            Ready to build your MVP?
          </h2>
          
          <p className="text-xl md:text-2xl text-dark/80 max-w-2xl mx-auto">
            Join 50+ successful founders who've launched their AI-powered MVPs with us. 
            Your idea deserves to see the light of day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <Button 
                variant="secondary" 
                size="lg" 
                className="group bg-dark text-white hover:bg-surface"
              >
                Book Discovery Call
                <ApperIcon name="Calendar" size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/work">
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-dark text-dark hover:bg-dark hover:text-white"
              >
                <ApperIcon name="Eye" size={20} className="mr-2" />
                See Our Work
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-dark">
              <ApperIcon name="CheckCircle" size={20} />
              <span className="font-medium">7-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-dark">
              <ApperIcon name="Shield" size={20} />
              <span className="font-medium">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-dark">
              <ApperIcon name="Users" size={20} />
              <span className="font-medium">Dedicated Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;