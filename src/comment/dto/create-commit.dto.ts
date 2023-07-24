import { User } from 'src/users/model/user.model';
// import { IsString, IsNotEmpty } from "class-validator";


export class CreateCommitDto {
  user_id:number;

  photo_id:number;

  text:string;

  users: User[];
}
