/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

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
  findAll()  {
    return this.appservice.findAll();
  }

  // @Get(":id")
  // async findOne(@Param() id: number,@Res() res:Response)  {
  //   const response=await this.userService.findOne(id);    
  //   return response;
  // }

  // @Post()
  // async create(@Body() createUserDto: UserEntity,@Res() res:Response)  {
  //   const response=await this.userService.create(createUserDto);    
  //   return response;
  // }

  // @Put(":id")
  // async update(@Param() id: number,@Body() createUserDto: UserEntity,@Res() res:Response)  {
  //   const response=await this.userService.update(id,createUserDto);    
  //   return response;
  // }

  // @Delete(":id")
  // async delete(@Body() id: number,@Res() res:Response)  {
  //   const response=await this.userService.remove(id);    
  //   return response;
  // }    

}
