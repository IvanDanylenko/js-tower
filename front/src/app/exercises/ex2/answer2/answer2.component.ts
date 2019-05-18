import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-answer2',
  templateUrl: './answer2.component.html',
  styleUrls: ['./answer2.component.scss']
})
export class Answer2Component implements OnInit {
	form: FormGroup;
	submitted = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
  	this.form = this.fb.group({
  		answer: ['', Validators.required]
  	});
  }

	get f() { return this.form.controls; }

  onAnswer($event) {
		this.submitted = true;
		if (this.form.invalid) {
			return;
		}
  	this.toastr.success("Great!");
	}
}
