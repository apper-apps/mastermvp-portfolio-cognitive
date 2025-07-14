import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Card from "@/components/atoms/Card";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectBrief: "",
    budget: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      projectBrief: "",
      budget: "",
      timeline: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="max-w-2xl">
      <h3 className="text-2xl font-display font-bold text-dark mb-6">Start Your MVP Journey</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>
        
        <Input
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
        />
        
        <div>
          <label className="block text-sm font-medium text-dark mb-2">
            Project Brief
          </label>
          <textarea
            name="projectBrief"
            value={formData.projectBrief}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-colors duration-200"
            placeholder="Tell us about your MVP idea, target users, and key features..."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-colors duration-200"
            >
              <option value="">Select budget range</option>
              <option value="$10k-$25k">$10k - $25k</option>
              <option value="$25k-$50k">$25k - $50k</option>
              <option value="$50k-$100k">$50k - $100k</option>
              <option value="$100k+">$100k+</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-dark mb-2">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-neon focus:ring-2 focus:ring-neon/20 transition-colors duration-200"
            >
              <option value="">Select timeline</option>
              <option value="ASAP">ASAP</option>
              <option value="1-2 months">1-2 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
            </select>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Sending..." : "Get Started"}
          </Button>
        </motion.div>
      </form>
    </Card>
  );
};

export default ContactForm;