import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private registerservice: AuthenticationService) { }


    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            name: ['', Validators.required],
            surname: ['', Validators.required],
            nationality: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
        });
    }

    get f() { return this.loginForm.controls; }


    public hasError = (controlName: string, errorName: string) => {
        return this.loginForm.controls[controlName].hasError(errorName);
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this.registerservice.register(this.f.username.value, this.f.password.value, this.f.name.value, this.f.surname.value,
            this.f.nationality.value).pipe(first()).subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.error = 'Username is already taken';
                    this.loading = false;
                });
    }

}
