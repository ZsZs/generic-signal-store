import { Component, effect, Inject, inject, OnInit, ProviderToken, Type } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseEntity } from './base-entity';
import { CommonModule } from '@angular/common';
import { baseEntityStore } from './base-entity.store';
import { BaseEntityService } from './base-entity.service';
import { signalStore } from '@ngrx/signals';

const componentStore = (repository: ProviderToken<BaseEntityService<BaseEntity>>) => signalStore(
    {providedIn: 'root'},
    baseEntityStore(repository)
);

@Component({
  template: '',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export abstract class BaseEntityComponent<Entity extends BaseEntity> implements OnInit {
  protected entity: Entity | undefined;
  protected entities: Entity[] = [];
  protected formBuilder = inject(FormBuilder);
  protected formGroup!: FormGroup;
  protected readonly store;

  protected constructor(@Inject("BASE_ENTITY_SERVICE") repositoryType: ProviderToken<BaseEntityService<Entity>>) {
    this.store = inject(componentStore(repositoryType));
    this.store.loadAll();
    this.registerEffects();
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

  protected registerEffects(): void {
    effect(() => {
      this.entities = this.store.entities() as Entity[];
    });
  }
}
