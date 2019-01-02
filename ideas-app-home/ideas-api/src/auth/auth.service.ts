import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CredDTO } from "./cred.dto";
import { CredRO } from "./cred.ro";

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async register(cred: CredDTO) {
    const { username } = cred;
    let user: UserEntity = await this.userRepository.findOne({ where: { username } });
    if (user) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }
    const toCreate: UserEntity = new UserEntity();
    toCreate.username = cred.username;
    toCreate.password = cred.password;
    user = await this.userRepository.save(toCreate);
    console.log(JSON.stringify(user));
    return new CredRO(user);
  }

  async login(cred: CredDTO) {
    const { username } = cred;
    let user: UserEntity = await this.userRepository.findOne({ where: { username } });
    if (!user || !(await user.comparePassword(cred.password))) {
      throw new HttpException('Invalid username/password', HttpStatus.BAD_REQUEST);
    }
    return new CredRO(user);
  }

}