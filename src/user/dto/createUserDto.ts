export class CreateUserDTO {
    
    private readonly firstName: string;
  
    private readonly lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}