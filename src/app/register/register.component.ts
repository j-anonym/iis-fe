import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  name = ''
  surname = ''
  nationality = ''
  invalidRegister = false

  constructor(private router: Router,
              private registerservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkRegister() {
    (this.registerservice.register(this.username, this.password, this.name, this.surname, this.nationality).subscribe(
            data => {
              this.router.navigate(['/dashboard'])
              this.invalidRegister = false
            },
            error => {
              this.invalidRegister = true

            }
        )
    );

  }

}