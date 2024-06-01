import { signalStore } from '@ngrx/signals';
import { baseEntityStore } from '@generic-signal-store/base';
import { Comment } from './comment';
import { CommentService } from './comment.service';

export const CommentStore = signalStore(
  { providedIn: 'root' },
  baseEntityStore<Comment, CommentService>(CommentService)
);
