import { createUser, getUserByEmail } from '../db/users';
import { authentication, random } from '../helpers';
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

        return res.status(200).json(user);

    }catch(err){
        console.log(err);
        return res.sendStatus(400)
    }
}

// login controller
export const login =async (req: express.Request, res: express.Response)=>{
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.sendStatus(400);
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password')

        if(!user){
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if(user.authentication.password !== expectedHash){
            return res.sendStatus(403);
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('SUHEL_AUTH', user.authentication.sessionToken ,{domain: 'localhost', path: '/'});

        return res.status(200).json(user).end();

    }catch(err){
        console.log(err);
        res.sendStatus(400);
    }
}