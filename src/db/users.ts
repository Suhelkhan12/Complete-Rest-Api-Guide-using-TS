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

// converting user schema in user model
export const UserModal = mongoose.model('User', UserSchema);


// actions for controllers 
export const getUsers = ()=> UserModal.find();
export const getUserByEmail = (email: string)=> UserModal.findOne({email}) // sent filter inside findOne

// this is object dot notation is used to get a nested embed document as it is filter so we are giving session token to it for comparison
export const getUserBySessionToken = (sessionToken: string) => UserModal.findOne({"authentication.sessionToken": sessionToken});

export const getUserById = (id: string) => UserModal.findById({id})

export const createUser = async (values: Record<string , any>) => new UserModal(values).save().then((user)=> user.toObject())

export const deleteUserById = (id:string)=> UserModal.findOneAndDelete({_id: id})

export const updateUserById = (id: string , values: Record<string ,any>)=> UserModal.findByIdAndUpdate(id , values)