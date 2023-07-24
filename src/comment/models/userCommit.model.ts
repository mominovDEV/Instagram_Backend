import {
  Table,
  Model,
  Column,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { User } from "src/users/model/user.model";
import { Photo } from "./commit.model";

@Table({ tableName: "user_id", timestamps: false })
export class UserCommit extends Model<UserCommit> {
  // @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  user_id: number;

  @ForeignKey(() => Photo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  photoId: number;
}
