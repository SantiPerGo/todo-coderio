import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../models/task-dto';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<TaskDTO[]> {
    return this.http.get<TaskDTO[]>(this.apiUrl);
  }

  public createTask(task: TaskDTO): Observable<TaskDTO> {
    return this.http.post<TaskDTO>(this.apiUrl, task);
  }

  public updateTask(task: TaskDTO): Observable<TaskDTO> {
    return this.http.put<TaskDTO>(this.apiUrl, task);
  }

  public deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + `/${id}`);
  }

  public getTaskFiltered(priority?: string, isCompleted?: boolean): Observable<TaskDTO[]> {
    let params = new HttpParams();
    if (priority) params = params.set('priority', priority);
    if (isCompleted != null) params = params.set('isCompleted', isCompleted.toString());
    return this.http.get<TaskDTO[]>(this.apiUrl+'/filter', { params });
  }
}
