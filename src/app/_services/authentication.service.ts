import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
		
	constructor() { }
	
	getAuth(){		
		return true;
	}
}
