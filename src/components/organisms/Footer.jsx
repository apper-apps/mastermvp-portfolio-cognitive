import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const quickLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "GitHub", icon: "Github", href: "#" },
    { name: "Dribbble", icon: "Dribbble", href: "#" },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-neon rounded-lg flex items-center justify-center">
                <ApperIcon name="Zap" size={20} className="text-dark" />
              </div>
              <span className="text-xl font-display font-bold">MasterMVP</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building AI-powered MVPs with agency-level design and execution. 
              Turn your startup ideas into reality in days, not months.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center hover:bg-neon hover:text-dark transition-colors duration-200"
                >
                  <ApperIcon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-neon transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get weekly AI MVP ideas and success stories.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-3 py-2 bg-surface rounded-l-lg focus:outline-none focus:ring-2 focus:ring-neon text-sm"
              />
              <button className="bg-neon text-dark px-4 py-2 rounded-r-lg font-semibold hover:bg-green-400 transition-colors">
                <ApperIcon name="Send" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-surface mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MasterMVP. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;