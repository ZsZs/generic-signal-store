import { ProviderToken, inject } from "@angular/core";
import { BaseEntity } from "./base-entity";
import { BaseEntityService } from "./base-entity.service";
import { patchState, signalStoreFeature, withMethods,  withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/component-store';
import { HttpErrorResponse } from "@angular/common/http";

export interface EntityStoreState<Entity extends BaseEntity> {
  entities: Entity[],
  isLoading: boolean,
  error: string
}

export function BaseEntityStore<Entity extends BaseEntity>( Repository: ProviderToken<BaseEntityService<Entity>>) {
  return signalStoreFeature(
    withState<EntityStoreState<Entity>>({ entities: [], isLoading: false, error: '' }),
    withMethods((store, repository = inject(Repository)) => ({
      loadAll: rxMethod<void>( pipe(
          tap(() => patchState(store, { isLoading: true })),
          switchMap(() => repository.loadAll().pipe(
              tapResponse({
                next: (response: Entity[]) => patchState(store, { entities: response, isLoading: false }),
                error: (error: HttpErrorResponse) => patchState(store, { error: error.message }),
                finalize: () => patchState(store, { isLoading: false }),
              })
            )
          )
        )
      ),
    }))
  );
};

