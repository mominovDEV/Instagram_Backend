import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PhotosService } from "./commit.service";
import { CreatePhotoDto } from "./dto/create-commit.dto";
import { UpdatePhotoDto } from "./dto/update-commit.dto";
import { Photo } from "./models/commit.model";

@Controller("photo")
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  create(@Body() createPhotoDto: CreatePhotoDto): Promise<Photo> {
    return this.photosService.create(createPhotoDto);
  }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photosService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Photo> {
    return this.photosService.findOne(+id);
  }

  @Get("user/:id")
  findOneByUser(@Param("id") id: string): Promise<Photo[]> {
    return this.photosService.findByUserId(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePhotoDto: UpdatePhotoDto
  ): Promise<
    | Photo
    | {
        msg: string;
      }
  > {
    return this.photosService.update(+id, updatePhotoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<
    | Photo
    | {
        msg: string;
      }
  > {
    return this.photosService.remove(+id);
  }
}
