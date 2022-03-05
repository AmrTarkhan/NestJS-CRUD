import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    fetchAll(): Promise<User[]>;
    findById(id: any): Promise<User>;
    createUser(user: User): void;
    deleteUser(id: any): void;
}
