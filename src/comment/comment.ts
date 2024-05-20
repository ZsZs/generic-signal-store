import { BaseEntity } from "../base/base-entity"

export interface Comment extends BaseEntity {
  id: number,
  postId: number,
  name: string,
  email: string,
  body: string,
}