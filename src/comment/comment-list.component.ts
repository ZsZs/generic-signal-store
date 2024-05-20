import {Component, Type} from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';
import { BaseEntityComponent } from '../base/base-entity.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {CommentStore} from "./comment.store";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CommentService, CommentStore]
})
export class CommentListComponent extends BaseEntityComponent<Comment>{
  comments: Comment[] = [];

  constructor( dataServiceType: Type<CommentService> ) {
    super( dataServiceType );
  }
}
