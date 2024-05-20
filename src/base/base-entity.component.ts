import {Component, InjectionToken, OnInit, effect, inject, ProviderToken, Type} from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseEntity } from "./base-entity";
import { BaseEntityService } from "./base-entity.service";
import { baseEntityStore } from "./base-entity.store";
import {signalStore} from "@ngrx/signals";
import {Comment} from "../comment/comment";
import {CommentService} from "../comment/comment.service";

/*
export const componentStore = (repository: Type<BaseEntityService<BaseEntity>>) => signalStore(
    {providedIn: 'root'},
    baseEntityStore(repository)
);
*/

@Component({ template: '' })
export abstract class BaseEntityComponent<Entity extends BaseEntity> implements OnInit {
  protected entity: Entity | undefined;
  protected formBuilder = inject(FormBuilder);
  protected formGroup!: FormGroup;
  protected store;

  protected constructor(repository: Type<BaseEntityService<Entity>>) {
    this.store = inject( baseEntityStore( repository ));
    this.store.loadAll();
    this.registerEffects();
  }

  // region angular lifecycle hooks
  ngOnInit(): void {
  }
  // endregion

  // region event handlers
  onCancel(): void {}
  onSubmit() {}
  // endregion

  // region protected, private helper methods
  protected registerEffects(): void {
    effect( () => {
//      this.entity = this.store.selectedEntity();
    })
  }
  // endregion
}