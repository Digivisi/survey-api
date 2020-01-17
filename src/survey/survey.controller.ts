import { Controller, Post, Body, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateSurveyDto } from './data/create-survey.dto';
import { CreateSurveyCommand } from './command/impl/create-survey.command';

@Controller('surveys')
export class SurveyController {
  constructor(
    private readonly commandBus: CommandBus
  ) { }

  @Post()
  @HttpCode(201)
  async createSurvey(@Body() createSurveyDto: CreateSurveyDto) {
    console.log(createSurveyDto);
    console.log("====");
    const { title } = createSurveyDto;
    try {
      return await this.commandBus.execute(new CreateSurveyCommand(title));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }

  }

}