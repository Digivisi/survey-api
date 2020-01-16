import { CreateSurveyCommand } from '../impl/create-survey.command';
import { SurveyModel } from '../../data/survey.model';
import { SurveyRepository } from '../../data/survey.repository';
import { ICommandHandler, EventPublisher, EventBus, CommandHandler } from '@nestjs/cqrs';
import { SurveyCreatedEvent } from '../../events/impl/survey-created.event';

@CommandHandler(CreateSurveyCommand)
export class CreateSurveyHandler implements ICommandHandler<CreateSurveyCommand> {
  constructor(
    private readonly repository: SurveyRepository,
    private readonly publisher: EventPublisher,
    private readonly eventBus: EventBus,
  ) { }

  async execute(command: CreateSurveyCommand) {
    const { title } = command;
    const Survey = this.publisher.mergeClassContext(SurveyModel);
    (new Survey())
      .setTitle(title)
      .save()
      .then(survey => survey.commit())
      .catch(error => console.log(error));
    // await this.repository.createSurvey({title: title});
    // this.eventBus.publish(new SurveyCreatedEvent(title));
  }

}