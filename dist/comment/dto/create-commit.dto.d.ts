import { User } from 'src/users/model/user.model';
export declare class CreateCommitDto {
    user_id: number;
    photo_id: number;
    text: string;
    users: User[];
}
