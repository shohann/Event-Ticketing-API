import express from 'express';
import config from 'config';
import userRouter from './routes/userRoute';

const port =  config.get('port')
const app = express();

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

