import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your vision, market, and users to understand exactly what needs to be built.",
      icon: "Search"
    },
    {
      number: "02", 
      title: "Ideation",
      description: "Together we refine the concept, define core features, and create a technical roadmap.",
      icon: "Lightbulb"
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers create beautiful, user-centered interfaces that convert and delight users.",
      icon: "Palette"
    },
    {
      number: "04",
      title: "Build",
      description: "Our developers bring the design to life with clean, scalable code and AI integrations.",
      icon: "Code"
    },
    {
      number: "05",
      title: "Launch",
      description: "We deploy your MVP, set up analytics, and provide ongoing support for iterations.",
      icon: "Rocket"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-subtle/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 5-step methodology that takes you from idea to launched MVP 
            with clarity and confidence at every stage.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className="text-6xl font-display font-bold text-neon/20">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-neon rounded-xl flex items-center justify-center">
                    <ApperIcon name={step.icon} size={24} className="text-dark" />
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold text-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-60 bg-gradient-to-br from-neon/10 to-green-200/20 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-neon/20 rounded-full flex items-center justify-center">
                    <ApperIcon name={step.icon} size={48} className="text-neon" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;