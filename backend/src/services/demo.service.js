const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createDemoBooking = async (data) => {
  return await prisma.demoBooking.create({
    data: {
      userId: parseInt(data.userId),
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      product: data.product,
      message: data.message,
      // scheduledDate: data.scheduledDate,
    }
  });
};

exports.getAllDemoBookings = async () => {
  return await prisma.demoBooking.findMany({
    include: {
      user: true
    }
  });
};
