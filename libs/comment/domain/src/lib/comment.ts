import { BaseEntity } from '@generic-signal-store/base';

export interface Comment extends BaseEntity {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
