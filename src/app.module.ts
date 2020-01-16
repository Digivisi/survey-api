import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConnection } from './commons/database/database.connection';
import { AuthenticationModule } from './authentication/authentication.module';
import { SurveyModule } from './survey/survey.module';
import { EventStoreModule } from './commons/event-store/event-store.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(<TypeOrmModuleOptions>DatabaseConnection),
    AuthenticationModule,
    SurveyModule,
    EventStoreModule
  ],
  providers: [],
})
export class AppModule { }
