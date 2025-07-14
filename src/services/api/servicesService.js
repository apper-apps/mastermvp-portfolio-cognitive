import servicesData from "@/services/mockData/services.json";

const servicesService = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 250));
    return [...servicesData];
  },

  getById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    const service = servicesData.find(s => s.Id === parseInt(id));
    if (!service) {
      throw new Error("Service not found");
    }
    return { ...service };
  },

  create: async (serviceData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const newId = Math.max(...servicesData.map(s => s.Id)) + 1;
    const newService = {
      Id: newId,
      ...serviceData
    };
    servicesData.push(newService);
    return { ...newService };
  },

  update: async (id, updateData) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const index = servicesData.findIndex(s => s.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Service not found");
    }
    servicesData[index] = { ...servicesData[index], ...updateData };
    return { ...servicesData[index] };
  },

  delete: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = servicesData.findIndex(s => s.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Service not found");
    }
    const deletedService = { ...servicesData[index] };
    servicesData.splice(index, 1);
    return deletedService;
  }
};

export default servicesService;