import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

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
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private loginservice: AuthenticationService) { if (this.loginservice.currentVal) this.router.navigate(['/success']);}

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
          },
          error => {
              this.error = error;
              this.loading = false;
          });
  }

}