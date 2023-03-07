import { IsOptional, IsString } from 'class-validator';

export class AuthSearchDto {
  @IsString()
  @IsOptional()
  public email: string;
}
