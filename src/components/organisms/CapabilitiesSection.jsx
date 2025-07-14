import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: "Brain",
      title: "AI MVPs",
      description: "Intelligent applications powered by OpenAI, Claude, and custom ML models."
    },
    {
      icon: "Globe",
      title: "Web Apps",
      description: "Modern, responsive web applications built with React, Next.js, and cutting-edge tech."
    },
    {
      icon: "Smartphone",
      title: "Mobile Prototypes",
      description: "Native and cross-platform mobile apps that work seamlessly across devices."
    },
    {
      icon: "Settings",
      title: "SaaS Tools",
      description: "Complete SaaS platforms with user management, billing, and analytics."
    },
    {
      icon: "Palette",
      title: "UX/UI Design",
      description: "Beautiful, intuitive interfaces that users love and convert visitors to customers."
    },
    {
      icon: "Rocket",
      title: "Launch Support",
      description: "End-to-end support from concept to launch, including hosting and deployment."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI integration to full-stack development, we cover every aspect 
            of modern MVP creation with precision and speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full text-center group">
                <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-neon/20 transition-colors duration-300">
                  <ApperIcon 
                    name={capability.icon} 
                    size={32} 
                    className="text-neon group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;