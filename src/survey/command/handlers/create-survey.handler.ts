import { CreateSurveyCommand } from '../impl/create-survey.command';
import { ICommandHandler, EventBus, CommandHandler } from '@nestjs/cqrs';
import { SurveyCreatedEvent } from '../../events/impl/survey-created.event';
import { SurveyService } from '../../survey.service';

@CommandHandler(CreateSurveyCommand)
export class CreateSurveyHandler implements ICommandHandler<CreateSurveyCommand> {
  constructor(
    private readonly surveyService: SurveyService,
    private readonly eventBus: EventBus,
  ) { }

  async execute(command: CreateSurveyCommand) {
    const { title } = command;
    return await this.surveyService.createNewSurvey({title})
      .then(() => {
        this.eventBus.publish(new SurveyCreatedEvent(title));
        return 'Command Success';
      });
  }

}