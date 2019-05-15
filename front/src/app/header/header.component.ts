import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@/_services';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	auth = false;

  constructor(private router: Router, private authService: AuthenticationService) {
		const auth = localStorage.getItem('currentUser');
		if(auth) this.auth = true;
		console.log(this.auth);
	}

  ngOnInit() {}

	onLogout() {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}
