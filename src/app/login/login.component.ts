import { Component, OnInit , HostBinding} from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Globals } from '../globals'
import {AccountService} from "./account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

  constructor(private router: Router,
              public globals: Globals,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private loginservice: AuthenticationService) {
      if (this.loginservice.currentVal) {this.router.navigate(['/success']); this.globals.logged = true;}}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  get f() {return this.loginForm.controls;}

  onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;

      this.loginservice.authenticate(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
          data => {
              this.router.navigate(['/success']);
              this.globals.logged = true;

          },
          error => {
              this.error = 'Username or password is incorrect'
              this.loading = false;
          });
  }

}