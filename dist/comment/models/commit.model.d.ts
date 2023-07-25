import { Model } from "sequelize-typescript";
import { User } from "src/users/model/user.model";
interface photoAttrs {
    id: string;
    title: string;
    link: string;
}
export declare class Photo extends Model<Photo, photoAttrs> {
    id: string;
    title: string;
    link: string;
    users: User[];
}
export {};
