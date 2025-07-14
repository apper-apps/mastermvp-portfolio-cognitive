import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ title = "No items found", description = "Check back later for updates", actionText, onAction, icon = "Search" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-20 h-20 bg-gradient-to-r from-neon to-green-400 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <ApperIcon name={icon} size={36} className="text-white" />
      </div>
      <h3 className="text-2xl font-display font-bold text-dark mb-3">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md text-lg">{description}</p>
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="magnetic-button bg-neon text-dark px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default Empty;