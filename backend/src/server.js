require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
// const cors = require('cors');
const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'https://bullwork-mobility-1.onrender.com'], // exact origins only
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // for preflight requests

// const app = express();

app.use(express.json());
app.use(cors()); 

const authRoutes = require('./routes/auth.routes.js'); 
const productRoutes = require('./routes/product.routes.js');
const orderRoutes = require('./routes/order.routes.js');
const demoRoutes = require('./routes/demo.routes.js');

app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/demo', demoRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(" DATABASE_URL:", process.env.DATABASE_URL ? process.env.DATABASE_URL : "Missing");
});
