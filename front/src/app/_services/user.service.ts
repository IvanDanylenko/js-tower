import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {LoginModel, UserModel} from '@/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get<UserModel[]>(`${environment.apiUrl}/users`);
	}

	getById(id: number) {
		return this.http.get(`${environment.apiUrl}/users/${id}`);
	}

	register(user: LoginModel) {
		return this.http.post(`${environment.apiUrl}/users/register`, user);
	}

	update(user: UserModel) {
		return this.http.put(`${environment.apiUrl}/users/${user.id}`, user);
	}

	delete(id: number) {
		return this.http.delete(`${environment.apiUrl}/users/${id}`);
	}
}
