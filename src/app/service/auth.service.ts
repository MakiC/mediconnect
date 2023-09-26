import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import JSEncrypt from 'jsencrypt';

import { environment } from 'src/environments/environment';

import { ApiService } from './api.service';

@Injectable()
export class AuthService {

  private readonly API_URL: string = environment.apiURL;

  constructor(private readonly _apiService: ApiService, private readonly _router: Router) {}

  public signUp(signUpRequest: any): void {
    this._apiService.readString(this.API_URL, '/v1/auth/passwordPublicKey').subscribe((publicKey: string) => {
      signUpRequest.password = this.encryptPassword(publicKey, signUpRequest.password),
      this._apiService.create<any>(this.API_URL, '/v1/auth/signUp', signUpRequest).subscribe((response: { token: string }) => {
        localStorage.setItem('token', response.token);
        this.router();
      });
    });
  }

  public signIn(signInRequest: any): void {
    this._apiService.readString(this.API_URL, '/v1/auth/passwordPublicKey').subscribe((publicKey: string) => {
      signInRequest.password = this.encryptPassword(publicKey, signInRequest.password),
      this._apiService.create<any>(this.API_URL, '/v1/auth/signIn', signInRequest).subscribe((response: { token: string }) => {
        localStorage.setItem('token', response.token);
        this.router();
      });
    });
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }

  public isLoggedIn(): boolean {
    const token: string | null = this.getToken();
    if (token !== null) {
      const payload: any = JSON.parse(atob(token.split('.')[1]));
      const expirationDate = new Date(payload['exp'] * 1000);
      const currentDate = new Date();
      return expirationDate > currentDate;
    }
    return false;
  }

  public getRoles(): string[] {
    const token: string | null = this.getToken();
    if (token !== null) {
      const payload: any = JSON.parse(atob(token.split('.')[1]));
      return payload['roles'].map((role: any) => role['authority']);
    }
    return [];
  }

  public router(): void {
    const roles: string[] = this.getRoles();
    if (roles.includes('DOCTOR')) {
      this._router.navigate(['/doctor']);
    } else if (roles.includes('NURSE')) {
      this._router.navigate(['/nurse']);
    } else if (roles.includes('SECRETARY')) {
      this._router.navigate(['/secretary']);
    } else {
      this._router.navigate(['']);
    }
  }

  private encryptPassword(publicKey: string, password: string): string {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
    return jsEncrypt.encrypt(password).toString();
  }
}
