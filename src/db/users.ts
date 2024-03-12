import mongoose from "mongoose";


/**
 * 
 * Creating users schema here in the authentication we have used select false because while fetching data we do not want to fetch password
 */

const UserSchema = new mongoose.Schema({
    username: {
        type: String , required: true
    },
    email: {
        type: String , required: true
    },
    authentication: {
        password: {
            type: String , required:true, select: false
        },
        salt: {
            type: String , select: false
        },
        sessionToken: {
            type: String, select: false
        }
    }
})