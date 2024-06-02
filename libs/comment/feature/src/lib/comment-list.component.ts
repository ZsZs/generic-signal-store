import { Component, Inject, Type } from '@angular/core';
import { BaseEntityComponent } from '@generic-signal-store/base';
import { Comment } from '@generic-signal-store/comment-domain';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../../domain/src/lib/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [{provide: "BASE_ENTITY_SERVICE", useValue: CommentService}],
})
export class CommentListComponent extends BaseEntityComponent<Comment> {

  constructor(@Inject("BASE_ENTITY_SERVICE") protected dataService: Type<CommentService>) {
    super(dataService);
  }
}
