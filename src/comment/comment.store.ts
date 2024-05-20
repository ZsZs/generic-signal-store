import { signalStore } from "@ngrx/signals";
import { baseEntityStore } from "../base/base-entity.store";
import { Comment } from "./comment";
import { CommentService } from "./comment.service";

export const CommentStore = signalStore(
  {providedIn: 'root'},
  baseEntityStore<Comment, CommentService>(CommentService)
);