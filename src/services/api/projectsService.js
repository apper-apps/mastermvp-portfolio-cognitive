import projectsData from "@/services/mockData/projects.json";

const projectsService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...projectsData];
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const project = projectsData.find(p => p.Id === parseInt(id));
    if (!project) {
      throw new Error("Project not found");
    }
    return { ...project };
  },

  getBySlug: async (slug) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const project = projectsData.find(p => p.slug === slug);
    if (!project) {
      throw new Error("Project not found");
    }
    return { ...project };
  },

  getFeatured: async () => {
    await new Promise(resolve => setTimeout(resolve, 250));
    return projectsData.filter(p => p.featured).map(p => ({ ...p }));
  },

  getByCategory: async (category) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return projectsData.filter(p => p.category === category).map(p => ({ ...p }));
  },

  create: async (projectData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newId = Math.max(...projectsData.map(p => p.Id)) + 1;
    const newProject = {
      Id: newId,
      ...projectData,
      completionDate: new Date().toISOString().split('T')[0]
    };
    projectsData.push(newProject);
    return { ...newProject };
  },

  update: async (id, updateData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = projectsData.findIndex(p => p.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Project not found");
    }
    projectsData[index] = { ...projectsData[index], ...updateData };
    return { ...projectsData[index] };
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = projectsData.findIndex(p => p.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Project not found");
    }
    const deletedProject = { ...projectsData[index] };
    projectsData.splice(index, 1);
    return deletedProject;
  }
};

export default projectsService;