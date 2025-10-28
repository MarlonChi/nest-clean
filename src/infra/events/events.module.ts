import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { OnAnswerCreated } from "@/domain/notification/application/subscribers/on-anser-created";
import { OnQuestionBestAnswerChosen } from "@/domain/notification/application/subscribers/on-question-best-answer-chosen";
import { SendNotificationUseCase } from "@/domain/notification/application/use-cases/send-notification";

@Module({
  imports: [DatabaseModule],
  providers: [
    OnAnswerCreated,
    OnQuestionBestAnswerChosen,
    SendNotificationUseCase,
  ],
})
export class EventsModule {}
