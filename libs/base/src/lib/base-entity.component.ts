import { Component, OnInit, inject, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseEntity } from './base-entity';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/*
export const componentStore = (repository: Type<BaseEntityService<BaseEntity>>) => signalStore(
    {providedIn: 'root'},
    baseEntityStore(repository)
);
*/

@Component({
  template: '',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export abstract class BaseEntityComponent<Entity extends BaseEntity> implements OnInit {
  protected entity: Entity | undefined;
  protected formBuilder = inject(FormBuilder);
  protected formGroup!: FormGroup;

  protected constructor() {
//    this.store = inject(baseEntityStore(repository));
//    this.store.loadAll();
  }

  // region angular lifecycle hooks
  ngOnInit(): void {}
  // endregion

  // region event handlers
  onCancel(): void {}
  onSubmit() {}
  // endregion

  // region protected, private helper methods
  // endregion
}
