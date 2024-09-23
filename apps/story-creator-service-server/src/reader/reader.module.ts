import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReaderModuleBase } from "./base/reader.module.base";
import { ReaderService } from "./reader.service";
import { ReaderController } from "./reader.controller";
import { ReaderResolver } from "./reader.resolver";

@Module({
  imports: [ReaderModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReaderController],
  providers: [ReaderService, ReaderResolver],
  exports: [ReaderService],
})
export class ReaderModule {}
