import express from 'express';
import { envConfig } from './config/config';
import userRouter from './routes/userRoute';

const app = express();
const port = envConfig.port || 3001;

app.use(express.json());
app.use('/api/users', userRouter);

console.log(typeof port)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

