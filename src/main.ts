import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CommentListComponent } from './comment/comment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-comment-list></app-comment-list>
  `,
  imports: [CommentListComponent]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
