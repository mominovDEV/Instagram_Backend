import { User } from 'src/users/model/user.model';
import { IsString, IsNotEmpty } from "class-validator";


export class CreatePhotoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  link: string;
  users: User[];
}
