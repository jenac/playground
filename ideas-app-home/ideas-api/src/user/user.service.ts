import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(@InjectRepository() userRepository: Repository<UserEntity>)

}