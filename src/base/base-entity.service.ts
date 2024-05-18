import { HttpClient } from "@angular/common/http";
import { BaseEntity } from "./base-entity";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

export abstract class BaseEntityService<Entity extends BaseEntity> {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  protected resourceUrl: string|undefined;
  protected httpClient = inject(HttpClient);

  public loadAll(): Observable<Entity[]> {
    return this.httpClient.get<Entity[]>(`${this.baseUrl}/${this.resourceUrl}`);
  }
}