import testimonialsData from "@/services/mockData/testimonials.json";

const testimonialsService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...testimonialsData];
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const testimonial = testimonialsData.find(t => t.Id === parseInt(id));
    if (!testimonial) {
      throw new Error("Testimonial not found");
    }
    return { ...testimonial };
  },

  getByProjectId: async (projectId) => {
    await new Promise(resolve => setTimeout(resolve, 250));
    return testimonialsData.filter(t => t.projectId === projectId).map(t => ({ ...t }));
  },

  create: async (testimonialData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newId = Math.max(...testimonialsData.map(t => t.Id)) + 1;
    const newTestimonial = {
      Id: newId,
      ...testimonialData
    };
    testimonialsData.push(newTestimonial);
    return { ...newTestimonial };
  },

  update: async (id, updateData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = testimonialsData.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Testimonial not found");
    }
    testimonialsData[index] = { ...testimonialsData[index], ...updateData };
    return { ...testimonialsData[index] };
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = testimonialsData.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Testimonial not found");
    }
    const deletedTestimonial = { ...testimonialsData[index] };
    testimonialsData.splice(index, 1);
    return deletedTestimonial;
  }
};

export default testimonialsService;