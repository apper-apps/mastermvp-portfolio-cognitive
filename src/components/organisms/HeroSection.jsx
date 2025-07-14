import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-subtle/30 to-neon/5 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 rounded-full border border-neon/20"
          >
            <ApperIcon name="Sparkles" size={16} className="text-neon" />
            <span className="text-sm font-medium text-dark">AI-Powered MVP Development</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-dark leading-tight">
            Build your AI MVP in{" "}
            <span className="bg-gradient-to-r from-neon to-green-600 bg-clip-text text-transparent">
              days
            </span>
            ,<br />
            not months
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help startups, solo founders, and businesses rapidly build AI-powered MVPs 
            with agency-level design, execution, and support.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link to="/contact">
              <Button size="lg" className="group">
                Book Discovery Call
                <ApperIcon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" size="lg" className="group">
                <ApperIcon name="Play" size={20} className="mr-2" />
                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-dark mb-2">50+</div>
              <div className="text-gray-600">MVPs Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-dark mb-2">7 Days</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-dark mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;