import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommentService, CommentStore } from '@generic-signal-store/comment-domain';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CommentService],
})
export class CommentDomainModule {
  static forFeature():ModuleWithProviders<CommentDomainModule> {
    return {
      ngModule: CommentDomainModule,
      providers: [CommentStore]
    };
  }
}