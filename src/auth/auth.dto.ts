import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}

export class AuthSearchDto {
  @IsString()
  @IsOptional()
  public email: string;
}
