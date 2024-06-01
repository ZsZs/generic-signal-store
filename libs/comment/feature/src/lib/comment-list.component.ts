import { Component, effect, inject } from '@angular/core';
import { BaseEntityComponent } from '@generic-signal-store/base';
import { Comment, CommentService, CommentStore } from '@generic-signal-store/comment-domain';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [],
})
export class CommentListComponent extends BaseEntityComponent<Comment> {
  private readonly store = inject(CommentStore);
  comments: Comment[] = [];

  constructor(dataService: CommentService) {
    super(dataService);
    this.store.loadAll();
    this.registerEffects();
  }

  protected registerEffects(): void {
    effect(() => {
      this.comments = this.store.entities();
    });
  }
}
