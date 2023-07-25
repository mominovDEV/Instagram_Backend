import { CreatePhotoDto } from "./dto/create-commit.dto";
import { UpdatePhotoDto } from "./dto/update-commit.dto";
import { Photo } from "./models/commit.model";
export declare class PhotosService {
    private photoRepo;
    constructor(photoRepo: typeof Photo);
    create(createUserDto: CreatePhotoDto): Promise<Photo>;
    findAll(): Promise<Photo[]>;
    findOne(id: number): Promise<Photo>;
    findByUserId(id: number): Promise<Photo[]>;
    update(id: number, updatePhotoDto: UpdatePhotoDto): Promise<Photo | {
        msg: string;
    }>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
