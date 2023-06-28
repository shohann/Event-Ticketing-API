import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    port: string | undefined;
};

export const envConfig: EnvConfig = {
    port: process.env.PORT
};