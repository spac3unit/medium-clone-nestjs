import { UserEntity } from '@app/user/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfielType } from './types/profile.type';
import { ProfileResponseInterface } from './types/profileResponse.interface';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getProfile(currentUserId: number, profileUsername: string): Promise<ProfielType> {
    const user = await this.userRepository.findOneBy({ username: profileUsername });

    if (!user) {
      throw new HttpException('Profile does not exist', HttpStatus.NOT_FOUND);
    }

    return { ...user, following: false };
  }

  buildProfileResponse(profile: ProfielType): ProfileResponseInterface {
    // remove unnecessary fields according to spec: https://realworld-docs.netlify.app/docs/specs/backend-specs/api-response-format/#profile
    delete profile.email;
    return { profile };
  }
}
