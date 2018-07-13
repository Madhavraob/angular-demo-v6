import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from "./../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userForm: FormGroup;
  returnUrl: string;
  message: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _loginService: LoginService) { }

  ngOnInit() {

    this.userForm = new FormGroup(
      {
        name: new FormControl('UserName', Validators.required)
      }
    );
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit() {
    // console.log(this.userForm.value);
    this._loginService.login(this.userForm.value).subscribe(resData => {
      // console.log(resData);
      localStorage.setItem('currentUser', JSON.stringify(resData));
      this.router.navigate([this.returnUrl]);
    }, error => {
      this.message = error;
    }
    );
  }

}
