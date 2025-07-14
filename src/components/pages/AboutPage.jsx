import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const AboutPage = () => {
  const values = [
    {
      icon: "Zap",
      title: "Fast",
      description: "We deliver MVPs in days, not months, without compromising on quality."
    },
    {
      icon: "Shield",
      title: "Reliable",
      description: "Proven track record with 50+ successful launches and 98% client satisfaction."
    },
    {
      icon: "Brain",
      title: "AI-Native",
      description: "We specialize in AI integration and understand how to build intelligent products."
    },
    {
      icon: "Users",
      title: "Collaborative",
      description: "We work closely with founders to ensure the vision comes to life perfectly."
    }
  ];

  const techStack = [
    { name: "Frontend", tools: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend", tools: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { name: "AI/ML", tools: ["OpenAI API", "Claude", "TensorFlow", "LangChain", "Hugging Face"] },
    { name: "Deployment", tools: ["Vercel", "AWS", "Docker", "Stripe", "Firebase"] }
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            About MasterMVP
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a specialized team of designers and developers who help startups 
            and entrepreneurs turn their AI-powered product ideas into reality — fast.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We started MasterMVP because we saw too many great ideas die in the planning phase. 
                  Founders would spend months trying to build the "perfect" product, only to discover 
                  that users wanted something completely different.
                </p>
                <p>
                  Our approach is different. We help you build and launch a high-quality MVP in days, 
                  not months. This lets you test your assumptions, gather real user feedback, and 
                  iterate quickly based on actual market demand.
                </p>
                <p>
                  With the rise of AI, there's never been a better time to build intelligent products 
                  that solve real problems. We specialize in AI integration and understand how to 
                  create products that are both innovative and practical.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-neon/20 to-green-200/30 rounded-2xl p-8 flex items-center justify-center">
                <div className="w-48 h-48 bg-neon/10 rounded-full flex items-center justify-center">
                  <ApperIcon name="Target" size={80} className="text-neon" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={value.icon} size={32} className="text-neon" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark text-center mb-12">
            Our Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <h3 className="text-lg font-display font-bold text-dark mb-4">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <ApperIcon name="Check" size={16} className="text-neon flex-shrink-0" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">
              The Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We're a small, focused team of senior designers and developers who have 
              worked at companies like Google, Stripe, and YC startups. We understand 
              both the technical and business sides of building successful products.
            </p>
            
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-neon/5 to-green-100/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-neon rounded-full flex items-center justify-center">
                  <ApperIcon name="Users" size={32} className="text-dark" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-display font-bold text-dark">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-gray-600">
                    We're always looking for talented designers and developers to join our network.
                  </p>
                </div>
              </div>
              <Link to="/contact">
                <Button className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </Card>
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
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to turn your AI-powered product idea into reality? 
            Let's discuss your vision and create an MVP that users will love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                Start Your Project
                <ApperIcon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

export default AboutPage;