import express from 'express';

import users from './users';
import authentication from './authentication';

const router = express.Router();

export default (): express.Router =>{
    authentication(router);
    users(router);
    
    return router;
}