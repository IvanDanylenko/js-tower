import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@/_services';
import {first} from 'rxjs/operators';
import { Router, ActivatedRoute} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	auth: boolean = false;
	isCabinet: boolean = false;

  constructor(
		private router: Router, 
		private activatedRoute: ActivatedRoute, 
		private authService: AuthenticationService
	) {
		const auth = localStorage.getItem('currentUser');
		if(auth) this.auth = true;
	}

  ngOnInit() {
		if ( this.router.isActive('/cabinet', true) ) {
			this.isCabinet = true;
		}
	}

	onLogout() {
		this.authService.logout();
		this.router.navigate(['/']);
	}
}
