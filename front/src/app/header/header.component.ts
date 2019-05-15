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

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit() {
		const auth = sessionStorage.getItem('currentUser');
		if(auth) this.auth = true;
		console.log(this.auth);
	}

	onLogout() {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}
