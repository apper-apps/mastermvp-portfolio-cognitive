import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/work/${project.slug}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card hover onClick={handleClick} className="group overflow-hidden">
        <div className="aspect-video bg-subtle rounded-lg mb-4 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-dark group-hover:text-neon transition-colors">
              {project.title}
            </h3>
            <ApperIcon name="ArrowUpRight" size={20} className="text-gray-400 group-hover:text-neon transition-colors" />
          </div>
          <p className="text-gray-600 line-clamp-2">{project.challenge}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-subtle text-sm rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 bg-neon/10 text-neon text-sm rounded-full font-medium">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;