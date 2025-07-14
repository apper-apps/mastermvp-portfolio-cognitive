import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="relative">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <ApperIcon name={service.icon} size={24} className="text-neon" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display font-bold text-dark mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-neon font-medium hover:text-green-600 transition-colors"
          >
            Learn More
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ApperIcon name="ChevronDown" size={16} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <ApperIcon name="Check" size={16} className="text-neon flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-subtle p-4 rounded-lg">
                    <h4 className="font-semibold text-dark mb-1">Example Use Case:</h4>
                    <p className="text-gray-600 text-sm">{service.exampleUseCase}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;