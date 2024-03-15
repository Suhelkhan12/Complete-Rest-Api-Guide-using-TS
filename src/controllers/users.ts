import express from 'express';

import { deleteUserById, getUserById, getUsers } from '../db/users';

export const getAllUsers = async (req: express.Request, res:express.Response)=>{
    try{
        const users = await getUsers();

        return res.status(200).json(users);

    }catch(err){
        console.log(err);
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req:express.Request, res:express.Response)=>{
    try{
        const {id} = req.params;

        const deletedUser = await deleteUserById(id);

        return res.json(deleteUser);
    }catch(err){
        console.log(err);
        return res.sendStatus(400);
    }
}

export const updateUser = async (req:express.Request, res:express.Response)=>{
    try{
        const {id} = req.params;
        const {username} = req.body;
        
        if(!username){
            return res.sendStatus(403);
        }

        const user = await getUserById(id);
        user.username = username;
        await user.save();

        return res.status(200).json(user).end()
    }catch(err){
        console.log(err);
        return res.sendStatus(400);
    }
}

