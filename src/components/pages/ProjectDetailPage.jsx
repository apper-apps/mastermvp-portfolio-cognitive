import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import projectsService from "@/services/api/projectsService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    loadProject();
  }, [slug]);

  const loadProject = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await projectsService.getBySlug(slug);
      setProject(data);
    } catch (err) {
      setError("Project not found");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading type="detail" />;
  if (error) return <Error message={error} onRetry={loadProject} />;
  if (!project) return <Error message="Project not found" />;

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/work" className="hover:text-neon transition-colors">Work</Link>
          <ApperIcon name="ChevronRight" size={16} />
          <span>{project.title}</span>
        </nav>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="aspect-video bg-subtle rounded-2xl overflow-hidden mb-12 relative"
        >
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-neon' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-neon/10 text-neon rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">
                  {new Date(project.completionDate).toLocaleDateString()}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                {project.title}
              </h1>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-dark mb-4">Challenge</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-bold text-dark mb-4">Approach</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{project.approach}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-bold text-dark mb-4">Result</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">{project.result}</p>
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <Card className="mt-12 bg-gradient-to-r from-neon/5 to-green-100/30 border-neon/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ApperIcon name="Quote" size={24} className="text-neon" />
                    </div>
                    <div>
                      <blockquote className="text-lg italic text-gray-700 mb-3">
                        "{project.testimonial}"
                      </blockquote>
                      <cite className="font-semibold text-dark">— {project.clientName}</cite>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <h3 className="text-xl font-display font-bold text-dark mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-subtle text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center">
                <h3 className="text-xl font-display font-bold text-dark mb-4">
                  Ready to build your MVP?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project and create something amazing together.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="w-full">
                    Start Your Project
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;