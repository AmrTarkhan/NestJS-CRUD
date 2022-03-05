import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import console from 'console';
import { from, Observable } from 'rxjs';
import { CreateUserDTO } from './dto/createUserDto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

   // @Get()
    // findAll(): Promise<User[]>{

   //     return  this.userService.findAll;
        
  //  }

    @Get()
    fetchAll(): Promise<User[]> {
       
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id): Promise<User>{
        return this.userService.findOne(id);
    }

    @Post()
    createUser(@Body() user: User){
        this.userService.create(user)
    }

    @Delete(":id")
    deleteUser(@Param('id') id ){
        this.userService.remove(id);
    }
}
