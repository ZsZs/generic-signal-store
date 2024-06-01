import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommentStore } from '@generic-signal-store/comment-domain';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [],
})
export class CommentDomainModule {
  static forFeature():ModuleWithProviders<CommentDomainModule> {
    return {
      ngModule: CommentDomainModule,
      providers: [CommentStore]
    };
  }
}