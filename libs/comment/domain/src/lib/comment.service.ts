import { Injectable } from '@angular/core';
import { BaseEntityService } from '@generic-signal-store/base';
import { Comment } from './comment';

@Injectable({ providedIn: 'root' })
export class CommentService extends BaseEntityService<Comment> {
  protected override resourceUrl = 'comments';
}
