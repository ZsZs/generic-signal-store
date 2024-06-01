import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommentListComponent } from '@generic-signal-store/comment-feature';
import 'zone.js';
import { appConfig } from './app/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-comment-list></app-comment-list>
  `,
  imports: [CommentListComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig).catch((err) =>
  console.error(err)
);

