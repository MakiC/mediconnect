import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private readonly _httpClient: HttpClient) { }

  public download(apiURL: string, route: string, body: any): Observable<Blob> {
    const url: string = this.toUrl(apiURL, route);
    return this._httpClient.post(url, body, { headers: { 'Content-Type': 'application/json' }, responseType: 'blob' });
  }

  public createFormData<T>(apiURL: string, route: string, body: FormData): Observable<T> {
    const url: string = this.toUrl(apiURL, route);
    return this._httpClient.post<T>(url, body);
  }

  public create<T>(apiURL: string, route: string, body?: any): Observable<T> {
    const url: string = this.toUrl(apiURL, route);
    return this._httpClient.post<T>(url, body !== undefined ? body : null, { headers: { 'Content-Type': 'application/json' } });
  }

  public read<T>(apiURL: string, route: string): Observable<T> {
    const url: string = this.toUrl(apiURL, route);
    return this._httpClient.get<T>(url, { headers: { 'Content-Type': 'application/json' } });
  }

  public readString(apiURL: string, route: string): Observable<string> {
    const url: string = this.toUrl(apiURL, route);
    return this._httpClient.get<string>(url, { responseType: 'text' as 'json' });
  }

  public update<T>(apiURL: string, route: string, body?: any): Observable<T> {
    const url: string = this.toUrl(apiURL, route);
    return this._httpClient.put<T>(url, body !== undefined ? body : null, { headers: { 'Content-Type': 'application/json' } });
  }

  public delete<T>(apiURL: string, route: string): Observable<T> {
    const url: string = this.toUrl(apiURL, route);
    return this._httpClient.delete<T>(url, { headers: { 'Content-Type': 'application/json' } });
  }

  private toUrl(apiURL: string, route: string): string {
    return `${apiURL}${route}`;
  }
}
