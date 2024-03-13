import { createUser, getUserByEmail } from 'db/users';
import { authentication, random } from 'helpers';
import express from 'express';

// creating register controller
export const register = async(req: express.Request, res: express.Response)=>{
    try{
        const {email, password, username} = req.body;

        if(!email || !password || !username){
            return res.sendStatus(400);
        }

        // for checking if user already exist in db.
        const existingUser = await getUserByEmail(email);
        if(existingUser){
            return res.sendStatus(400);
        }

        // for no existing user creating user
        const salt = random();
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password) 
            }
        });

        return res.sendStatus(200).json(user);

    }catch(err){
        console.log(err);
        return res.sendStatus(400)
    }
}