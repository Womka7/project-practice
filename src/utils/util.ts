import {Express} from 'express';
import sequelize from '../config/db';

export default class Util{
    static async startServer(PORT: number, app:Express):Promise<void>{
        try{
            console.log(PORT);
            await sequelize.authenticate();
            console.log("Trying to connect with the database");
            await sequelize.sync();
        }catch(error:unknown) {
            console.log({message: `Error on the method startServer: ${error}`});
            
        }
    }
}