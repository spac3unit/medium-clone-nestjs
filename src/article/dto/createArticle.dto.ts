import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

export class CreateArticleDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly body: string;

  readonly tagList?: string[];
}
