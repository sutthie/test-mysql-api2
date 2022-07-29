/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  async findAll()  {
    return this.appService.findAll();
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
