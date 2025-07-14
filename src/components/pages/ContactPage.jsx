import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ContactPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const faqs = [
    {
      question: "How long does it take to build an MVP?",
      answer: "Most MVPs are delivered within 7-14 days, depending on complexity and features. Simple MVPs can be ready in as little as 5 days."
    },
    {
      question: "What's included in the MVP development?",
      answer: "Full-stack development, UI/UX design, database setup, hosting, deployment, and 30 days of post-launch support and bug fixes."
    },
    {
      question: "Do you work with AI integrations?",
      answer: "Yes! We specialize in AI-powered MVPs using OpenAI, Claude, and custom machine learning models. This is our core expertise."
    },
    {
      question: "What happens after the MVP is launched?",
      answer: "We provide 30 days of support, analytics setup, and can continue with iterations based on user feedback and growth needs."
    },
    {
      question: "What if I need changes during development?",
      answer: "We include 2 rounds of revisions. Additional changes are handled with transparent pricing to keep projects on time and budget."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer ongoing maintenance packages starting at $2k/month for hosting, updates, and feature additions."
    }
  ];

  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      value: "hello@mastermvp.com",
      description: "Send us an email anytime"
    },
    {
      icon: "MessageCircle",
      title: "Response Time",
      value: "< 2 hours",
      description: "We respond to all inquiries quickly"
    },
    {
      icon: "Clock",
      title: "Timezone",
      value: "PST (UTC-8)",
      description: "We work with global clients"
    }
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            Let's Build Your MVP
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your idea into reality? Tell us about your project and 
            we'll get back to you within 2 hours with a custom proposal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info & Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <Card>
              <h3 className="text-2xl font-display font-bold text-dark mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ApperIcon name={info.icon} size={20} className="text-neon" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{info.title}</h4>
                      <p className="text-lg font-medium text-dark">{info.value}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Calendar Booking */}
            <Card className="text-center">
              <div className="w-16 h-16 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Calendar" size={32} className="text-neon" />
              </div>
              <h3 className="text-xl font-display font-bold text-dark mb-3">
                Book a Discovery Call
              </h3>
              <p className="text-gray-600 mb-6">
                Prefer to talk? Schedule a 30-minute call to discuss your project in detail.
              </p>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="w-full bg-neon text-dark px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-200 magnetic-button"
              >
                {showCalendar ? "Hide Calendar" : "Schedule Call"}
              </button>
              {showCalendar && (
                <div className="mt-6 p-6 bg-subtle/50 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Calendar integration would be embedded here
                    <br />
                    (Calendly, Cal.com, or similar)
                  </p>
                </div>
              )}
            </Card>

            {/* Stats */}
            <Card className="bg-gradient-to-r from-neon/5 to-green-100/30">
              <h3 className="text-xl font-display font-bold text-dark mb-4 text-center">
                Why Choose MasterMVP?
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-neon">50+</div>
                  <div className="text-gray-600 text-sm">MVPs Launched</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon">7 Days</div>
                  <div className="text-gray-600 text-sm">Avg Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon">98%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <h3 className="font-display font-bold text-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;