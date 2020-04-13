import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class AbstractService<T> {

  protected  resources = '';
  public apiUrl: string = environment.apiUrl;

  protected objectList: T[] = [];


  protected objectListSubject$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>(this.objectList);

  objectListChanged$ = this.objectListSubject$.asObservable();


  constructor(protected http: HttpClient) {
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.resources}`);
  }

  add(body: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.resources}`, body).pipe(
      map(data => {
      this.objectList = [...this.objectList, data];
      this.objectListSubject$.next(this.objectList);
      return data;
    }));
  }


  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${this.resources}/${id}`);
  }

  update(id: string, body: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${this.resources}/${id}`, body);
  }

}
