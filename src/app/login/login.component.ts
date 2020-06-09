import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationdataService } from '../organizationdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _data: OrganizationdataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(),
      user_password: new FormControl()
    });
  }
  onLoginSubmit(login) {
    this._data.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    if (this._data.redirectURL) {
      this._router.navigateByUrl(this._data.redirectURL);
    } else {
      this._router.navigate(["/home"]);
    }
  }
}
