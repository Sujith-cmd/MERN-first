import express from 'express';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
dotenv.config()
const port = process.env.PORT || 5000;

const app = express()
app.use('/api/users', userRouter)
app.get('/', (req,res) => res.send('server is ready'));
    
app.listen(port, () => console.log(`Server started on port ${port}`));
