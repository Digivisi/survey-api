import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { SurveyModule } from './survey/survey.module';
import { EventSourceModule } from './commons/event-source/event-source.module';

@Module({
  imports: [AuthenticationModule, SurveyModule, EventSourceModule],
  providers: [],
})
export class AppModule {}
