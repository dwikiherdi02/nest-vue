import { Injectable } from '@nestjs/common';
import { UsersDto } from '../dto/users';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async countByUsername(username: string): Promise<number> {
    return await this.userRepository.countBy({ username: username });
  }

  async create(payload: UsersDto) {
    return await this.userRepository.save(payload);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username: username } });
  }

  async update(id: number, payload: UsersDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    const data = Object.assign(user, payload);
    return await this.userRepository.save(data);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
