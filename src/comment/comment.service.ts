import { Injectable } from "@angular/core";
import { BaseEntityService } from "../base/base-entity.service";
import { Comment } from "./comment";

@Injectable({ providedIn: 'root' })
export class CommentService extends BaseEntityService<Comment> {
  protected override resourceUrl = 'comments';
}