import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';


export enum UserRole {
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  SECRETARY = 'SECRETARY'
}

export class User {
  constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public password: string,
      public role: UserRole
  ) {}
}


@Component({
  selector: 'app-page-default',
  templateUrl: './page-default.component.html',
  styleUrls: ['./page-default.component.scss']
})
export class PageDefaultComponent implements OnInit {

  private _signUpForm: FormGroup = new FormGroup({
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required),
    'role': new FormControl(null, Validators.required)
  });

  private _signInForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required)
  });

  constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

  ngOnInit(): void {
    if (this._authService.isLoggedIn()) {
      this._authService.router();
    }
  }
  
  public get signUpForm(): FormGroup {
    return this._signUpForm;
  }

  public get signInForm(): FormGroup {
    return this._signInForm;
  }

  public get userRoles() {
    return Object.keys(UserRole);
  }

  public onSignUpSubmit() {
    this._authService.signUp({
      firstName: this._signUpForm.value.firstName,
      lastName: this._signUpForm.value.lastName,
      email: this._signUpForm.value.email,
      password: this._signUpForm.value.password,
      role: this._signUpForm.value.role
    });
  }

  public onSignInSubmit() {
    this._authService.signIn({
      email: this._signInForm.value.email,
      password: this._signInForm.value.password
    });
  }
}
