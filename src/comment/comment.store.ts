import { signalStore } from "@ngrx/signals";
import { BaseEntityStore } from "../base/base-entity.store";
import { CommentService } from "./comment.service";

export const commentStore = signalStore(
  {providedIn: 'root'},
  BaseEntityStore<Comment>(CommentService)
);