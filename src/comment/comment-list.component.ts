import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from './comment';
import { BaseEntityComponent } from '../base/base-entity.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { commentStore } from './comment.store';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CommentService, commentStore]
})
export class CommentListComponent extends BaseEntityComponent<Comment> {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {
    super( commentService );
  }
}
