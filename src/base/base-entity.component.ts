import { Component, InjectionToken, OnInit, effect, inject } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseEntity } from "./base-entity";
import { BaseEntityService } from "./base-entity.service";
import { BaseEntityStore } from "./base-entity.store";

@Component({ template: '' })
export abstract class BaseEntityComponent<Entity extends BaseEntity> implements OnInit {
  protected entity: Entity | undefined;
  protected formBuilder = inject(FormBuilder);
  protected formGroup!: FormGroup;
  protected store;

  constructor(repository: BaseEntityService<Entity>) {
    this.store = inject( BaseEntityStore(new InjectionToken<BaseEntityService<Entity>>('')));
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
      this.entity = this.store.selectedEntity();
    })
  }
  // endregion
}