import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
    create(user: User): Promise<User>;
}
