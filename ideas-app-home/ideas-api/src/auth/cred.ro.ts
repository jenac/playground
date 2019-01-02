import { UserEntity } from "src/user/user.entity";
import * as jwt from 'jsonwebtoken';

//not good practice, should use passport
export class CredRO {
  constructor(user: UserEntity) {
    const { id, username, created} = user;
    this.id = id;
    this.username = username;
    this.created = created;
    this.token = jwt.sign({
      id, 
      username,
    }, 
    process.env.SECRET,
    { expiresIn: '7d'}
    )
  }
  id: string;
  username: string;
  created: Date;
  token: string;
}