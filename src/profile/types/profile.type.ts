import { UserType } from '@app/user/types/user.type';

export type ProfielType = UserType & { following: boolean };
