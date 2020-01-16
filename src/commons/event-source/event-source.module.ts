import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventSourceService } from './event-source.service';

@Module({
  imports: [CqrsModule],
  providers: [EventSourceService]
})
export class EventSourceModule {}