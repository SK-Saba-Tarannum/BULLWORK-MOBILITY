require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); 

const authRoutes = require('./routes/auth.routes.js'); 
const productRoutes = require('./routes/product.routes.js');
const orderRoutes = require('./routes/order.routes.js');
const demoRoutes = require('./routes/demo.routes.js');

app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', demoRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(" DATABASE_URL:", process.env.DATABASE_URL ? process.env.DATABASE_URL : "Missing");
});
