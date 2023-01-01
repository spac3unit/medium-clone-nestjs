export class UpdateUserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly bio: string;
  readonly image: string;
}

// hz why bez validacii tipa @IsNotEmpty() i td. 03:35 lesson 021
