import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
	// config = './config.json';
	url: string = "https://api.github.com/users/IvanDanylenko";

	getGithubUser() {
		return this.http.get(this.url);
	}	
	
	constructor(private http: HttpClient) { }
	
	getAuth(){		
		return true;
	}
}
