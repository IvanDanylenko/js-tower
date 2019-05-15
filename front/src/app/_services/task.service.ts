import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExerciseModel, TaskLevelModel } from '@/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
	headers: HttpHeaders;
	domainURL = environment.apiUrl;

  constructor( private http: HttpClient) {
		this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	}

  getTaskList(): Observable<TaskLevelModel[]> {
		const reqOpts = { headers: this.headers };
  	return this.http.get(`${this.domainURL}/api/task/list`, reqOpts).pipe(map(data => {
  		return data['data'];
		}));
	}

	/*getTaskExercises(id: number): Observable<ExerciseModel> {
		const reqOpts = {
			params: new HttpParams(),
			headers: this.headers
		};
		reqOpts.params = reqOpts.params.set('taskId', id.toString());
		return this.http.get(`${this.domainURL}/api/task/exercise`, reqOpts).pipe(map(data => {
			return data['data'];
		}));
	}*/
}
