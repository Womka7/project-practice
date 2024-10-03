import {Request, Response} from "express";

export default class UserController{
    static async login(req: Request, res: Response):Promise<void>{
        res.json({
            message:"From the endpoints /api/users POST"
        })
    }
}