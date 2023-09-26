import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ApiService } from './api.service';

@Injectable()
export class UserService {

  private readonly API_URL: string = environment.apiURL;

  constructor(private readonly _apiService: ApiService) {}

  public findAll(): Observable<any[]> {
    return this._apiService.read<any[]>(this.API_URL, '/v1/users');
  }
}
