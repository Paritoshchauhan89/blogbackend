const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./database/db')



// env config
dotenv.config();

// router import
const userRoutes = require('./routes/routes')
const blogRoutes = require('./routes/blogroutes')


// mongodb connection
connectDB();
// rest object
const app = express();


// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog',blogRoutes );

const PORT = process.env.PORT

// listen
app.listen(PORT, () => console.log(`server is ${process.env.DEV_MODE} running at ${PORT}`.bgCyan.white));