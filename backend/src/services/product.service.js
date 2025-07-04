const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); 


const createProduct = async (data) => {
  return await prisma.product.create({ data });
};

const getAllProducts = async () => {
  return await prisma.product.findMany({ where: { isActive: true } });
};

const getProductById = async (id) => {
  return await prisma.product.findUnique({ where: { id: Number(id) } });
};

const updateProduct = async (id, data) => {
  return await prisma.product.update({
    where: { id },
    data,
  });
};

const deleteProduct = async (id) => {
  return await prisma.product.delete({ where: { id } });
};


module.exports = { createProduct, getAllProducts, getProductById,updateProduct,
  deleteProduct, };
