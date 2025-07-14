import React from "react";

const Loading = ({ type = "grid" }) => {
  if (type === "hero") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-neon to-green-400 rounded-full animate-pulse" />
          <div className="space-y-2">
            <div className="h-8 bg-subtle rounded-lg w-96 animate-pulse" />
            <div className="h-4 bg-subtle rounded-lg w-64 mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
            <div className="aspect-video bg-subtle rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-6 bg-subtle rounded w-3/4" />
              <div className="h-4 bg-subtle rounded w-full" />
              <div className="h-4 bg-subtle rounded w-2/3" />
              <div className="flex gap-2 mt-4">
                <div className="h-6 bg-subtle rounded-full w-16" />
                <div className="h-6 bg-subtle rounded-full w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "detail") {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 animate-pulse">
        <div className="aspect-video bg-subtle rounded-xl mb-12" />
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-8 bg-subtle rounded w-1/2" />
            <div className="space-y-3">
              <div className="h-4 bg-subtle rounded w-full" />
              <div className="h-4 bg-subtle rounded w-5/6" />
              <div className="h-4 bg-subtle rounded w-4/5" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-6 bg-subtle rounded w-1/3" />
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-subtle rounded-full w-20" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-8 h-8 border-2 border-neon border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loading;