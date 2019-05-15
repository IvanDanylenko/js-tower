import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel, LoginModel } from '@/models';
import { environment } from '@env/environment';
import { BodyTranspilator } from '@/helpers/bodyTranspilator';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
	headers: HttpHeaders;
	domainURL = environment.apiUrl;
	isLogin = false;
	private currentUserSubject: BehaviorSubject<UserModel>;
	public currentUser: Observable<UserModel>;

	constructor(private http: HttpClient, private transpilator: BodyTranspilator) {
		this.headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
		this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): UserModel {
		return this.currentUserSubject.value;
	}

	public IsLogin(): boolean {
		return this.isLogin;
	}

	authenticate(model: LoginModel) {
		const body = this.transpilator.transform(model);
		return this.http.post<any>(`${this.domainURL}/api/auth/login`, body, {headers: this.headers})
			.pipe(map(res => {
				const user = res.data;
				// login successful if there's a jwt token in the response
				if (user && user.token) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					sessionStorage.setItem('currentUser', JSON.stringify(user));
					this.isLogin = true;
					this.currentUserSubject.next(user);
				}
				return user;
			}));
	}

	logout() {
		// remove user from local storage to log user out
		sessionStorage.removeItem('currentUser');
		this.isLogin = false;
		this.currentUserSubject.next(null);
	}
}
