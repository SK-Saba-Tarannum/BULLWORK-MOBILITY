const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createOrder = async (data) => {
  const {
    userType,
    name,
    phone,
    email,
    address,
    country,
    state,
    city,
    pincode,
    aadhar,
    pan,
    message,
    productId,
    userId:userId
  } = data;

  return await prisma.order.create({
    data: {
      userType,
      name,
      phone,
      email,
      address,
      country,
      state,
      city,
      pincode,
      aadhar,
      pan,
      message,
      product: {
        connect: { id: productId },
      },
      user: {
        connect: { id: userId },
      },
      
    },
  });
};

exports.getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      product: true,
    },
  });
};

exports.getOrdersByUserId = async (userId) => {
  return await prisma.order.findMany({
    where: { userId },
    include: {
      product: true,
    },
  });
};


