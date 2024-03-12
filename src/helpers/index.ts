// these helpers are used for encrypting the password or generating tokens
import crypto from 'crypto';

const SECRET = 'SUHEL-REST-API'

export const random = ()=> crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password:string) => {
    return crypto.createHmac('sha256', [salt,password].join('/')).update(SECRET).digest()
}