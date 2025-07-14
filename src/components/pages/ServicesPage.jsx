import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/molecules/ServiceCard";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import servicesService from "@/services/api/servicesService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await servicesService.getAll();
      setServices(data);
    } catch (err) {
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading type="grid" />;
  if (error) return <Error message={error} onRetry={loadServices} />;
  if (services.length === 0) return <Empty title="No services available" description="Check back soon for our service offerings" />;

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From AI integration to full-stack development, we offer comprehensive 
            MVP development services that take your startup from idea to launch.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.Id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures rapid delivery without compromising on quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="MessageCircle" size={32} className="text-neon" />
              </div>
              <h3 className="text-xl font-display font-bold text-dark mb-3">
                Discovery Call
              </h3>
              <p className="text-gray-600">
                We start with a detailed discussion about your vision, goals, and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Palette" size={32} className="text-neon" />
              </div>
              <h3 className="text-xl font-display font-bold text-dark mb-3">
                Design & Build
              </h3>
              <p className="text-gray-600">
                Our team designs and develops your MVP using modern tech stack and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Rocket" size={32} className="text-neon" />
              </div>
              <h3 className="text-xl font-display font-bold text-dark mb-3">
                Launch & Support
              </h3>
              <p className="text-gray-600">
                We deploy your MVP and provide ongoing support for iterations and improvements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-subtle/50 to-neon/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Our pricing is project-based and depends on complexity, features, and timeline. 
              Most MVPs range from $10k to $50k with 7-14 day delivery.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-display font-bold text-dark mb-2">Simple MVP</h3>
                <div className="text-2xl font-bold text-neon mb-3">$10k - $25k</div>
                <p className="text-gray-600 text-sm">Basic features, standard design, 7-day delivery</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-neon">
                <h3 className="text-xl font-display font-bold text-dark mb-2">AI-Powered MVP</h3>
                <div className="text-2xl font-bold text-neon mb-3">$25k - $50k</div>
                <p className="text-gray-600 text-sm">AI integration, custom features, 10-day delivery</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-display font-bold text-dark mb-2">Complex MVP</h3>
                <div className="text-2xl font-bold text-neon mb-3">$50k+</div>
                <p className="text-gray-600 text-sm">Advanced features, integrations, 14-day delivery</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-neon/10 to-green-100/50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-display font-bold text-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom proposal 
            that fits your budget and timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                Book Discovery Call
                <ApperIcon name="Calendar" size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;