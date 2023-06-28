import { NextFunction, Request, Response } from 'express';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({
            success: true,
            message: `ok`
        });
    } catch (error) {
        // duplicate error code
        console.log(error);
        res.send(error)
    }
};