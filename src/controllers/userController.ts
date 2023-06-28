import { NextFunction, Request, Response } from 'express';
import { userService } from '../services';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.createUserService('shohann', 'shohann@gmail.com', "abc")

        res.status(201).json({
            success: true,
            message: 'User created',
            data: user
        });
    } catch (error) {
        // duplicate error code
        console.log(error);
        res.send(error)
    }
};