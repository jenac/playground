import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';

@Component()
export class AuthService {
    async createToken() {
        const expiresIn = 60*60;
        const secretOrKey='shouldBeInConstants';
        const user = { email: 'htxx2009@gmail.com' }
        const token = jwt.sign(user, secretOrKey, { expiresIn });
        return {
            expires_in: expiresIn,
            access_token: token
        }
    }

    async validateUser(signedUser): Promise<boolean> {
        console.dir(signedUser); //{ email: 'htxx2009@gmail.com', iat: 1518184191, exp: 1518187791 }
        return true;
    }
}
