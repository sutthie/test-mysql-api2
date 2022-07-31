/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
){}

async findAll() : Promise<User[]>{
  return await this.userRepository.find();
 }

 findOne(id:number):Promise<User>{
  return this.userRepository.findOneBy({id : id});
}

 //  async findOne(id:number):Promise<User>{
//   return await this.userRepository.findOne({
//         where :{id:id},
//   });
// }

//  async findOne(id:number):Promise<User>{
//   return await this.userRepository.findOne({
//         where :{id:id},
//   });
// }
//  async findOne(id:number):Promise<User>{
//   return await this.userRepository.findOne({
//     select :{id:true,name:true,},
//     where :{id:id,},
//   });
// }

//  async findOne(id:number):Promise<User>{
//     return await this.userRepository.findOne({
//       select :['id','name','email'],
//       where :{id,},
//     });
//   }

// async findOne(id:number):Promise<User>{
//   return await this.userRepository.findOne({ where :{id : id}});
// }

// async findOne(id:number):Promise<User>{
//   return await this.userRepository.findOneBy({id : id});
// }


create(user:User): Promise<User>{
    return this.userRepository.save(user);
}

async update(id: number,user:User){
await this.userRepository.update(id,user);
}

async remove(id: number):Promise<void>{
await this.userRepository.delete(id);   
}

}
