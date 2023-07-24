import { Module } from "@nestjs/common";
import { PhotosService } from "./commit.service";
import { PhotosController } from "./commit.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Photo } from "./models/commit.model";
import { UserPhoto } from "./models/userCommit.model";

@Module({
  imports: [SequelizeModule.forFeature([Photo, UserPhoto])],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
