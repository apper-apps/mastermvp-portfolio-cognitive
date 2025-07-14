import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/molecules/ProjectCard";
import Button from "@/components/atoms/Button";
import projectsService from "@/services/api/projectsService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const WorkPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI", "SaaS", "Mobile", "Web"];

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [projects, activeFilter]);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await projectsService.getAll();
      setProjects(data);
    } catch (err) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading type="grid" />;
  if (error) return <Error message={error} onRetry={loadProjects} />;

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of AI-powered MVPs that have helped startups 
            and entrepreneurs turn their ideas into successful products.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "primary" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="px-6 py-2"
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <Empty 
            title="No projects found" 
            description="Try selecting a different category or check back later for new projects."
            actionText="View All Projects"
            onAction={() => setActiveFilter("All")}
            icon="FolderOpen"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.Id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-neon/10 to-green-100/50 rounded-2xl"
        >
          <h2 className="text-3xl font-display font-bold text-dark mb-4">
            Ready to build your MVP?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join these successful founders and turn your idea into reality. 
            Let's discuss your project and create something amazing together.
          </p>
          <Button size="lg" className="group">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;