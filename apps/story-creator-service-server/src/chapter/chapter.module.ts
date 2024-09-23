import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChapterModuleBase } from "./base/chapter.module.base";
import { ChapterService } from "./chapter.service";
import { ChapterController } from "./chapter.controller";
import { ChapterResolver } from "./chapter.resolver";

@Module({
  imports: [ChapterModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChapterController],
  providers: [ChapterService, ChapterResolver],
  exports: [ChapterService],
})
export class ChapterModule {}
