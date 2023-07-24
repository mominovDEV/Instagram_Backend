import { IsString, IsNotEmpty,IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsStrongPassword()
  password: string;
}
