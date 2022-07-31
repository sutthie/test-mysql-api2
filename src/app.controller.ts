/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entity/user.entity';

//@Controller('user')
@Controller()
export class AppController {
  constructor(private appservice: AppService) {}

  // @Get()
  // async findAll()  {
  //   const response=await this.appservice.findAll();
  //   return response;
  // }

  @Get()
  async findAll()  {
    return await this.appservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.appservice.findOne(id);
  }  
  // @Get(":id")
  // async findOne(@Param() id: number)  {
  //   const response=await this.appservice.findOne(id);    
  //   return response;
  // }

  @Post()
  async create(@Body() createUser: User)  {
    const response=await this.appservice.create(createUser);    
    return response;
  }

  @Put(":id")
  async update(@Param() id: number,@Body() createUser: User)  {
    const response=await this.appservice.update(id,createUser);    
    return response;
  }

  // @Delete(":id")
  // async delete(@Body() id: number,@Res() res:Response)  {
  //   const response=await this.userService.remove(id);    
  //   return response;
  // }    

  @Delete(":id")
  async delete(@Body() id: number)  {
    const response=await this.appservice.remove(id);    
    return response;
  }     

}
